import { Dispatch, SetStateAction } from "react";
import { fetchUserData } from "./fetchUserData";
import { API, UserDataResponse } from "../constants/types";

export const updateFrontData = async (setData: Dispatch<SetStateAction<UserDataResponse>>, data: UserDataResponse) => {
    const newData = await fetchUserData();
    setData({...data, data: newData?.data as API[], amounts: newData?.amounts as { investment_total: number, savings_total: number }});
}