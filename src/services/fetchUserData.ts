import { Dispatch, SetStateAction } from "react";
import { API, APIResponse, UserDataResponse } from "../constants/types";

export const fetchUserData = async (setData?: Dispatch<SetStateAction<UserDataResponse>>): Promise<UserDataResponse | null> => {
  try {
    const res = await fetch("https://da5cms9i64.execute-api.us-west-2.amazonaws.com/dev/api/personal-plan");
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const response: APIResponse = await res.json(); // Parse response as JSON

    let parsedBody: UserDataResponse;
    if (typeof response.body === 'string') {
      parsedBody = JSON.parse(response.body); // Parse body if it's a string
    } else {
      parsedBody = response.body;
    }

    if (response.amounts) {
      parsedBody.amounts = response.amounts;
    }

    if (parsedBody.data) {
      parsedBody.data.forEach((item: API) => {
        if (typeof item.bedrock_response === 'string') {
          item.bedrock_response = JSON.parse(item.bedrock_response); // Parse if needed
        }
      });

      parsedBody.activePath = parsedBody.data[0].path_id;
    }

    if (setData) {
      setData(parsedBody); // Optionally set the data if setData is passed
    }

    return parsedBody; // Return the parsed data

  } catch (error) {
    console.error('Error fetching or parsing data:', error);
    return null; // Return null if there's an error
  }
};
