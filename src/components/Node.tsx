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
    <div
      className={`flex flex-row ${isEven && 'flex-row-reverse'} items-center justify-center gap-6`}
    >
      <button
        onClick={() => setOpenModal(true)}
        className={`${isEven ? '-rotate-3 ms-auto' : 'rotate-3 me-auto'} w-20 h-20 aspect-square rounded-full p-8 bg-primary shadow-xl grid place-content-center`}
      >
        <i
          className={`${icon} text-3xl ${isEven ? '-rotate-3' : 'rotate-3'} ${iconColor}`}
        />
      </button>

      <NodeDialog
        isOpen={openModal}
        close={() => setOpenModal(false)}
        node={node}
      />
    </div>
  );
};

export default Node;
