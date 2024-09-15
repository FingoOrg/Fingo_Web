import { useState } from 'react';
import { NodeInfo } from '../constants/types';
import NodeDialog from './NodeDialog';

const Node = ({ node, index }: { node: NodeInfo; index: number }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const getIcon = () => {
    switch (node.type) {
      case 'book':
        return 'fi fi-rr-book-bookmark';
      case 'road':
        return 'fi fi-rr-road';
    }
  };

  const getColor = () => {
    switch (node.status) {
      case 'completed':
        return 'text-gray-100';
      case 'active':
        return 'text-black';
      case 'locked':
        return 'text-white';
    }
  };

  const icon = getIcon();
  const iconColor = getColor();
  const isEven = index % 2 === 0;

  return (
    <div className='w-full'>
      <div className={`flex flex-row gap-6 my-6 w-full`}>
        <div className="relative">
          {/* Cilindro detrás del círculo */}
          <div className="absolute inset-0 w-10 h-44 bg-primary rounded-full z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Botón circular */}
          <button
            onClick={() => setOpenModal(true)}
            className={`w-20 h-20 z-20 aspect-square rounded-full p-8 bg-white shadow-xl grid place-content-center`}
          >
            <i
              className={`${icon} z-30 text-3xl ${isEven ? '-rotate-3' : 'rotate-3'} ${iconColor}`}
            />
          </button>
        </div>
        {/* Elimina el 'className=' extra dentro del div */}
        <div className='flex flex-col gap-2 rounded-3xl shadow-xl bg-white p-3 mb-auto w-full'>
          <p>Fondo de Emergencia</p>
          <p className='text-primary text-3xl font-bold'>$600 MXN</p>
        </div>
      </div>

      <NodeDialog
        isOpen={openModal}
        close={() => setOpenModal(false)}
        node={node}
      />
    </div>

  );
};

export default Node;
