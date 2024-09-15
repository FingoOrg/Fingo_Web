import { useContext } from 'react';
import InvestMoneyIcon from '../../public/assets/icons/InvestMoneyIcon';
import MoneyPigIcon from '../../public/assets/icons/MoneyPigIcon';
import Badge from '../components/Badge';
import { userContext } from '../context/UserContext';

import GoldMedalIcon from '../components/GoldMedalIcon';
import Axy from '../../public/assets/Axy.webp';

const Profile = () => {
  const { data } = useContext(userContext);
  const badges =
    data.data.find((item) => item.path_id === data.activePath)?.badges || [];

  return (
    <>
      <div className="relative mt-4">
        <img src={Axy} className="rounded-full w-28 aspect-square bg-cover" />
        <span className="absolute -bottom-4 -right-5">
          <GoldMedalIcon />
        </span>
      </div>
      <p className="text-4xl font-semibold mt-4">Jose Sánchez</p>

      <div className="divide-y-2 divide-black w-full flex flex-col mt-7">
        <p className="text-md font-medium self-start">My Fingo Statistics</p>
        <div className="grid grid-flow-row grid-cols-2 space-x-2 pt-4">
          <article className="flex flex-col items-start p-2 rounded-lg bg-white shadow-lg">
            <MoneyPigIcon />
            <p className="text-md font-semibold mt-2 mb-1">Total savings</p>
            <p className="text-2xl font-medium">
              ${data.amounts.savings_total.toLocaleString('en-US')} MXN
            </p>
          </article>
          <article className="flex flex-col items-start p-2 rounded-lg bg-white shadow-lg">
            <InvestMoneyIcon />
            <p className="text-md font-semibold mt-2 mb-1">Total invested</p>
            <p className="text-2xl font-medium">
              ${data.amounts.investment_total.toLocaleString('en-US')} MXN
            </p>
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
      </div>
    </>
  );
};

export default Profile;
