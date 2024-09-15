import { useContext, useState } from 'react';
import { Plan } from '../constants/types';
import NodeDialog from './NodeDialog';
import PiggyPathCompleted from '../assets/icons/PiggyPathCompleted';
import PiggyPathPending from '../assets/icons/PiggyPathPending';
import InvestMoneyCompleted from '../assets/icons/InvestMoneyCompleted';
import InvestMoneyPending from '../assets/icons/InvestMoneyPending';
import { userContext } from '../context/UserContext';

const Node = ({ node }: { node: Plan }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { data } = useContext(userContext);
  const getIcon = () => {
    switch (node.type) {
      case 'savings':
        return node.status ? <PiggyPathCompleted /> : <PiggyPathPending />;
      case 'investment':
        return node.status ? <InvestMoneyCompleted /> : <InvestMoneyPending />;

      default:
        return null;
    }
  };

  const icon = getIcon();
  const clickable = () => {
    const firstNotCompleted = data.data
      .find((item) => item.path_id === data.activePath)
      ?.bedrock_response.find((item) => !item.status) as Plan;
    if (
      (firstNotCompleted && firstNotCompleted.id === node.id) ||
      node.status
    ) {
      return true;
    }

    return false;
  };

  const shouldDisable = !clickable();

  return (
    <div className="w-full">
      <div className={`flex flex-row gap-6 my-6 w-full items-center relative`}>
        <div
          className={`${node.status ? 'bg-primary z-20' : 'bg-black z-10'} rounded-full p-4 absolute w-48 -left-14 top-5 rotate-90`}
        />
        <button
          onClick={() => setOpenModal(true)}
          className={`w-20 h-20 z-30 aspect-square rounded-full p-8 bg-white shadow-xl grid place-content-center`}
        >
          {icon}
        </button>

        {/* Elimina el 'className=' extra dentro del div */}
        <div className="flex flex-col gap-2 rounded-3xl shadow-xl bg-white p-3 mb-auto w-full">
          <p>{node.title}</p>
          <p
            className={`${node.status ? 'text-primary' : 'text-black'} text-3xl font-bold`}
          >
            ${node.amount.toLocaleString('en-US')} MXN
          </p>
        </div>
      </div>

      <NodeDialog
        isOpen={openModal}
        close={() => setOpenModal(false)}
        shouldDisable={shouldDisable}
        node={node}
      />
    </div>
  );
};

export default Node;
