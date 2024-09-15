import { useContext } from 'react';
import ProgressBar from './ProgressBar';
import { userContext } from '../context/UserContext';
import { API, Plan } from '../constants/types';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const ChoosePath = () => {
  const { data, setData } = useContext(userContext);

  const changePath = (pathId: string) => {
    setData({ ...data, activePath: pathId });
  };

  const calculateProgress = () => {
    let completeds = 0;
    const nodes = data.data.find((item) => item.path_id === data.activePath)
      ?.bedrock_response as Plan[];
    if (nodes) {
      nodes.forEach((node) => {
        if (node.status) completeds += 1;
      });
      return (completeds / nodes.length) * 100;
    }
    return 0;
  };

  const progress = calculateProgress();
  const paths = data.data as API[];

  const getIndex = () => {
    const pos = data.data.findIndex((item) => item.path_id === data.activePath);
    return pos + 1;
  };
  const isActive = (pathId: string) => {
    return pathId === data.activePath;
  };

  return (
    <Menu>
      <MenuButton className="w-full sticky top-0 z-40">
        <article className="flex flex-row justify-between items-center rounded-3xl shadow-xl bg-white p-3 w-full">
          <ProgressBar progress={progress} />
          <div className="flex flex-col ms-3">
            <p className="text-2xl text-black font-bold">
              Financial Path #{getIndex()}
            </p>
          </div>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.6667 15L23.3333 23.5998C22.9048 24.0538 22.3882 24.4155 21.815 24.6627C21.2418 24.9098 20.6242 25.0375 20 25.0375C19.3758 25.0375 18.7582 24.9098 18.1848 24.6627C17.6117 24.4155 17.0952 24.0538 16.6667 23.5998L8.33334 15"
              stroke="black"
              strokeWidth="3.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </article>
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className="flex flex-col gap-y-5 bg-white z-50 rounded-2xl mt-2 w-11/12 shadow-xl p-4 text-black text-xl"
      >
        {paths &&
          paths.map((path, index) => (
            <MenuItem key={index}>
              <button
                className={`${isActive(path.path_id) ? 'text-primary' : 'text-black'} bg-white text-xl font-bold`}
                onClick={() => changePath(path.path_id)}
              >
                Financial Path #{index + 1}
              </button>
            </MenuItem>
          ))}
      </MenuItems>
    </Menu>
  );
};

export default ChoosePath;
