import { NodeInfo } from '../constants/types';
import Node from './Node';

const NodeRoad = ({ nodes }: { nodes: NodeInfo[] }) => {
  return (
    <div className="overflow-scroll mt-4 flex flex-col gap-y-4 px-10 w-full mx-auto overflow-x-hidden">
      {nodes.map((node, index) => (
        <Node node={node} key={index} index={index} />
      ))}
    </div>
  );
};

export default NodeRoad;
