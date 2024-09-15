import { useEffect, useState } from 'react';
import NodeRoad from '../components/NodeRoad';
import ProgressBar from '../components/ProgressBar';
import { NodeInfo } from '../constants/types';
import FormPath from '../screens/FormPath';

const Road = () => {
  const nodes: NodeInfo[] = [
    {
      type: 'road',
      title: 'Road',
      description: 'This is the road',
      status: 'completed',
    },
    {
      type: 'book',
      title: 'Road',
      description: 'This is the road',
      status: 'active',
    },
    {
      type: 'road',
      title: 'Road',
      description: 'This is the road',
      status: 'locked',
    },
    {
      type: 'road',
      title: 'Road',
      description: 'This is the road',
      status: 'locked',
    },
    {
      type: 'road',
      title: 'Road',
      description: 'This is the road',
      status: 'locked',
    },
    {
      type: 'road',
      title: 'Road',
      description: 'This is the road',
      status: 'locked',
    },
    {
      type: 'road',
      title: 'Road',
      description: 'This is the road',
      status: 'locked',
    },
    {
      type: 'road',
      title: 'Road',
      description: 'This is the road',
      status: 'locked',
    },
    {
      type: 'road',
      title: 'Road',
      description: 'This is the road',
      status: 'locked',
    },
    {
      type: 'road',
      title: 'Road',
      description: 'This is the road',
      status: 'locked',
    },
    {
      type: 'road',
      title: 'Road',
      description: 'This is the road',
      status: 'locked',
    },
    {
      type: 'road',
      title: 'Road',
      description: 'This is the road',
      status: 'locked',
    },
    {
      type: 'road',
      title: 'Road',
      description: 'This is the road',
      status: 'locked',
    },
    {
      type: 'road',
      title: 'Road',
      description: 'This is the road',
      status: 'locked',
    },
    {
      type: 'road',
      title: 'Road',
      description: 'This is the road',
      status: 'locked',
    },
  ];

  const [showChat, setShowChat] = useState<boolean>(true);

  useEffect(() => {
    const chatAlreadyAnswered = localStorage.getItem('chatAlreadyAnswered');
    if (chatAlreadyAnswered && chatAlreadyAnswered === 'true') {
      setShowChat(false);
    }
  }, [localStorage.getItem('chatAlreadyAnswered')]);

  return (
    <>
      {showChat ? (
        <FormPath />
      ) : (
        <>
          <ProgressBar progress={50} />
          <NodeRoad nodes={nodes} />
        </>
      )}
    </>
  );
};

export default Road;
