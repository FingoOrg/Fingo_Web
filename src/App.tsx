import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { userContext } from './context/UserContext'
import { useEffect, useState } from 'react';
import { API, APIResponse, UserContextType, UserDataResponse } from './constants/types';
const App = () => {

  const [data, setData] = useState<UserDataResponse>({ 
    status: 'error',
    data: [],
    amounts: {
      investment_total: 0,
      savings_total: 0,
    },
    activePath: ''
  });

  useEffect(() => {
    fetch("https://da5cms9i64.execute-api.us-west-2.amazonaws.com/dev/api/personal-plan")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })  // Parse the response as JSON
      .then((response: APIResponse) => {
        console.log(response)
        // Check if response.body is a valid JSON string or already an object
        let parsedBody: UserDataResponse;
        try {
          if (typeof response.body === 'string') {
            parsedBody = JSON.parse(response.body);  // Then parse the body field manually
          } else {
            parsedBody = response.body;  // If it's already an object, no need to parse
          }

          if(response.amounts) {
            parsedBody.amounts = response.amounts;
          }

          if(parsedBody.data) {
            parsedBody.data.forEach((item: API) => {
              if (typeof item.bedrock_response === 'string') {
                item.bedrock_response = JSON.parse(item.bedrock_response);  // Parse if it's a string
                console.log(item.path_id)
              }
            });
  
            parsedBody.activePath = parsedBody.data[0].path_id            
          }
          // Parse the bedrock_response if needed

          setData(parsedBody);  // Set the parsed data
          console.log('Parsed body:', parsedBody);  // Log the parsed data to the console
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const contextValue: UserContextType = {
    data: data,
    setData: setData
  }

  return (
    <userContext.Provider value={contextValue} >
      <main className="h-[100dvh] bg-secondary">
        <div className="h-[90dvh] flex flex-col p-4 pb-0 items-center overflow-scroll">
          <Outlet />
        </div>
        <Navbar />
      </main>
    </userContext.Provider>
  );
};

export default App;
