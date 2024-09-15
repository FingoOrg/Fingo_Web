import NodeRoad from '../components/NodeRoad';
import ProgressBar from '../components/ProgressBar';
import { NodeInfo } from '../constants/types';

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

  return (
    <>
      <ProgressBar progress={50} />
      <NodeRoad nodes={nodes} />
    </>
  );
};

export default Road;
