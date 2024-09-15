export type Route = {
  path: string;
  name: string;
  icon: string;
};

export type NodeInfo = {
  type: string;
  title: string;
  description: string;
  status: 'active' | 'locked' | 'completed';
};
