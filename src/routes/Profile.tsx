import BronzeMedalIcon from '../assets/icons/BronzeMedalIcon';
import InvestMoneyIcon from '../assets/icons/InvestMoneyIcon';
import MoneyPigIcon from '../assets/icons/MoneyPigIcon';
import SilverMedalIcon from '../assets/icons/SilverMedalIcon';
import TrophyBlueLabelIcon from '../assets/icons/TrophyBlueLabelIcon';
import TrophyGreenLable from '../assets/icons/TrophyGreenLable';
import Badge from '../components/Badge';
import GoldMedalIcon from '../components/GoldMedalIcon';

const Profile = () => {
  const badges = [
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
            <Badge key={index} badge={badge} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
