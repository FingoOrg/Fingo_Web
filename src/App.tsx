import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { userContext } from './context/UserContext';
import { useEffect, useState } from 'react';
import { UserContextType, UserDataResponse } from './constants/types';
import { fetchUserData } from './services/fetchUserData';
const App = () => {
  const [data, setData] = useState<UserDataResponse>({
    status: 'error',
    data: [],
    amounts: {
      investment_total: 0,
      savings_total: 0,
    },
    activePath: '',
    chatAlreadyAnswered: false,
  });

  useEffect(() => {
    fetchUserData(setData);
  }, []);

  const contextValue: UserContextType = {
    data: data,
    setData: setData,
  };

  return (
    <userContext.Provider value={contextValue}>
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
