import { useContext } from 'react';
import InvestMoneyIcon from '../assets/icons/InvestMoneyIcon';
import MoneyPigIcon from '../assets/icons/MoneyPigIcon';
import Badge from '../components/Badge';
import { userContext } from '../context/UserContext';

const Profile = () => {
/*   const badges = [
    {
      icon: <TrophyBlueLabelIcon />,
      description: 'First investment',
    },
    {
      icon: <TrophyGreenLable />,
      description: 'First investment',
    },
    {
      icon: <BronzeMedalIcon />,
      description: "Bronze Medal"
    },
    {
      icon: <SilverMedalIcon />,
      description: "Silver Medal"

    },
    {
      icon: <GoldMedalIcon />,
      description: "Gold Medal"
    },
  ]; */

  const {amounts, activePath, data} = useContext(userContext)
  const badges = data.find((item) => item.path_id === activePath)?.badges || [];


  const updateNode = async () => {
    try {

        const reqData = {
          'completed_id': 2  ,
          "path_info": data.find((item) => item.path_id === activePath)
        }
        // Envía los datos a la API
        const apiResponse = await fetch('https://da5cms9i64.execute-api.us-west-2.amazonaws.com/dev/api/financial-path', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqData) // Convierte el objeto data a una cadena JSON
        });

    if (!apiResponse.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await apiResponse.json();
    console.log('Success:', responseData);
  } catch (error) {
    console.error('Error:', error);
  }
};


  return (
    <>
      <i className="fi fi-rr-user text-8xl mt-10" />
      <p className="text-4xl font-semibold mt-4">Jose Sánchez</p>

      <div className="divide-y-2 divide-black w-full flex flex-col mt-7">
        <p className="text-md font-medium self-start">My Fingo Statistics</p>
        <div className="grid grid-flow-row grid-cols-2 space-x-2 pt-4">
          <article className="flex flex-col items-start p-2 rounded-lg bg-white shadow-lg">
            <MoneyPigIcon />
            <p className="text-md font-semibold mt-2 mb-1">Total savings</p>
            <p className="text-2xl font-medium">${amounts.savings_total.toLocaleString('en-US')} MXN</p>
          </article>
          <article className="flex flex-col items-start p-2 rounded-lg bg-white shadow-lg">
            <InvestMoneyIcon />
            <p className="text-md font-semibold mt-2 mb-1">Total invested</p>
            <p className="text-2xl font-medium">${amounts.investment_total.toLocaleString('en-US')} MXN</p>
          </article>
        </div>
      </div>

      <div className="divide-y-2 divide-black w-full flex flex-col mt-7">
        <p className="text-md font-medium self-start">My Badges</p>
        <div className="grid gap-4 grid-cols-3 pt-4 pb-4">
          {badges.map((badge, index) => (
            <Badge key={index} badge={badge} />
          ))}
        </div>
        <button onClick={updateNode} >
          Update Task
        </button>
      </div>
    </>
  );
};

export default Profile;
