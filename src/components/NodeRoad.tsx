import { Plan } from '../constants/types';
import Node from './Node';

const NodeRoad = ({ nodes }: { nodes: Plan[] }) => {
  return (
    <div className="flex flex-col items-start">
      {nodes.map((node, index) => (
        <Node node={node} key={index} />
      ))}
    </div>
  );
};

export default NodeRoad;
