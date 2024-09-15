import BronzeMedalIcon from '../assets/icons/BronzeMedalIcon';
import InvestMoneyIcon from '../assets/icons/InvestMoneyIcon';
import MoneyPigIcon from '../assets/icons/MoneyPigIcon';
import SilverMedalIcon from '../assets/icons/SilverMedalIcon';
import TrophyBlueLabelIcon from '../assets/icons/TrophyBlueLabelIcon';
import TrophyGreenLable from '../assets/icons/TrophyGreenLable';
import GoldMedalIcon from '../components/GoldMedalIcon';

const Profile = () => {
  const badges = [
    {
      icon: <TrophyBlueLabelIcon />,
    },
    {
      icon: <TrophyGreenLable />,
    },
    {
      icon: <BronzeMedalIcon />,
    },
    {
      icon: <SilverMedalIcon />,
    },
    {
      icon: <GoldMedalIcon />,
    },
    {
      icon: <TrophyGreenLable />,
    },
    {
      icon: <BronzeMedalIcon />,
    },
    {
      icon: <SilverMedalIcon />,
    },
    {
      icon: <GoldMedalIcon />,
    },
    {
      icon: <TrophyGreenLable />,
    },
    {
      icon: <BronzeMedalIcon />,
    },
    {
      icon: <SilverMedalIcon />,
    },
    {
      icon: <GoldMedalIcon />,
    },
  ];
  return (
    <>
      <i className="fi fi-rr-user text-8xl mt-10" />
      <p className="text-4xl font-semibold mt-4">Profile</p>

      <div className="divide-y-2 divide-black w-full flex flex-col mt-7">
        <p className="text-md font-medium self-start">My Fingo Statistics</p>
        <div className="grid grid-flow-row grid-cols-2 space-x-2 pt-4">
          <article className="flex flex-col items-start p-2 rounded-lg bg-white shadow-lg">
            <MoneyPigIcon />
            <p className="text-md font-semibold mt-2 mb-1">Total savings</p>
            <p className="text-2xl font-medium">$12,234 MXN</p>
          </article>
          <article className="flex flex-col items-start p-2 rounded-lg bg-white shadow-lg">
            <InvestMoneyIcon />
            <p className="text-md font-semibold mt-2 mb-1">Total invested</p>
            <p className="text-2xl font-medium">$1,424 MXN</p>
          </article>
        </div>
      </div>

      <div className="divide-y-2 divide-black w-full flex flex-col mt-7">
        <p className="text-md font-medium self-start">My Badges</p>
        <div className="grid gap-4 grid-cols-3 pt-4 pb-4">
          {badges.map((badge, index) => (
            <article
              key={index}
              className="flex flex-col justify-center aspect-square items-center p-2 rounded-lg bg-white shadow-lg"
            >
              {badge.icon}
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
