import { NodeInfo } from '../constants/types';
import Node from './Node';

const NodeRoad = ({ nodes }: { nodes: NodeInfo[] }) => {
  return (
    <div className='flex flex-col items-start'>
      {nodes.map((node, index) => (
        <Node node={node} key={index} index={index} />
      ))}
    </div>
  );
};

export default NodeRoad;
