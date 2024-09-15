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
          <article className="flex flex-row  justify-between items-center rounded-3xl shadow-xl bg-white p-3 mb-auto">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.7917 41.6667H20.375C16.625 41.6667 9.54167 39.7708 9.54167 32.5833C9.54167 25.3958 16.625 23.5 20.375 23.5H29.625C29.9375 23.5 37.3333 23.3958 37.3333 17.5417C37.3333 11.6875 29.9375 11.5833 29.625 11.5833H19.2083C18.7939 11.5833 18.3965 11.4187 18.1035 11.1257C17.8105 10.8327 17.6458 10.4352 17.6458 10.0208C17.6458 9.60645 17.8105 9.20901 18.1035 8.91599C18.3965 8.62297 18.7939 8.45834 19.2083 8.45834H29.625C33.375 8.45834 40.4583 10.3542 40.4583 17.5417C40.4583 24.7292 33.375 26.625 29.625 26.625H20.375C20.0625 26.625 12.6667 26.7292 12.6667 32.5833C12.6667 38.4375 20.0625 38.5417 20.375 38.5417H30.7917C31.206 38.5417 31.6035 38.7063 31.8965 38.9994C32.1896 39.2923 32.3542 39.6898 32.3542 40.1042C32.3542 40.5186 32.1896 40.9161 31.8965 41.209C31.6035 41.5021 31.206 41.6667 30.7917 41.6667Z" fill="#333333" />
              <path d="M13.4167 17.3125C11.9649 17.3002 10.5492 16.8584 9.34808 16.0428C8.14696 15.2273 7.21408 14.0744 6.66704 12.7296C6.11998 11.3848 5.98323 9.90811 6.27402 8.48568C6.56479 7.06326 7.2701 5.75872 8.30104 4.73647C9.33198 3.7142 10.6424 3.01997 12.0673 2.74124C13.4921 2.46251 14.9676 2.61174 16.3077 3.17016C17.6479 3.72857 18.7928 4.67116 19.5981 5.87916C20.4035 7.08713 20.8333 8.50649 20.8333 9.95834C20.8333 10.9294 20.6411 11.8908 20.2676 12.7872C19.8941 13.6835 19.3468 14.497 18.6573 15.1807C17.9678 15.8645 17.1497 16.4049 16.2502 16.7707C15.3507 17.1366 14.3877 17.3208 13.4167 17.3125ZM13.4167 5.72918C12.5926 5.72918 11.787 5.97353 11.1018 6.43138C10.4166 6.88922 9.88254 7.53997 9.56717 8.30132C9.25181 9.06268 9.16929 9.90045 9.33006 10.7087C9.49083 11.517 9.88769 12.2594 10.4704 12.8421C11.0531 13.4248 11.7955 13.8217 12.6038 13.9824C13.4121 14.1432 14.2498 14.0607 15.0112 13.7453C15.7725 13.43 16.4233 12.8959 16.8811 12.2107C17.339 11.5255 17.5833 10.7199 17.5833 9.89584C17.5833 9.34866 17.4756 8.80684 17.2662 8.30132C17.0568 7.7958 16.7499 7.33647 16.363 6.94955C15.976 6.56266 15.5167 6.25574 15.0112 6.04634C14.5057 5.83695 13.9639 5.72918 13.4167 5.72918Z" fill="#333333" />
              <path d="M36.5833 47.3958C35.1279 47.4 33.704 46.9721 32.4919 46.1665C31.2798 45.3611 30.334 44.214 29.7742 42.8704C29.2144 41.5271 29.0656 40.0477 29.3471 38.6198C29.6285 37.1919 30.3273 35.8794 31.355 34.849C32.3827 33.8183 33.6929 33.1158 35.1202 32.8304C36.5473 32.5448 38.0271 32.6894 39.3721 33.2452C40.7171 33.8013 41.8669 34.744 42.6758 35.9538C43.4848 37.1635 43.9167 38.5863 43.9167 40.0417C43.9167 41.9885 43.1448 43.8558 41.77 45.2344C40.3954 46.6131 38.5302 47.3902 36.5833 47.3958ZM36.5833 35.8125C35.7592 35.8125 34.9537 36.0569 34.2685 36.5148C33.5833 36.9725 33.0492 37.6233 32.7337 38.3846C32.4185 39.1461 32.336 39.9838 32.4967 40.7921C32.6575 41.6002 33.0544 42.3427 33.6371 42.9254C34.2198 43.5081 34.9623 43.905 35.7704 44.0658C36.5787 44.2265 37.4165 44.144 38.1779 43.8286C38.9392 43.5133 39.59 42.9792 40.0477 42.294C40.5056 41.6088 40.75 40.8033 40.75 39.9792C40.75 38.8742 40.311 37.8142 39.5296 37.0329C38.7481 36.2515 37.6883 35.8125 36.5833 35.8125Z" fill="#333333" />
            </svg>
            <div className="flex flex-col ms-3">
              <p className="text-2xl text-black font-bold">Path #1</p>

            </div>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.6667 15L23.3333 23.5998C22.9048 24.0538 22.3882 24.4155 21.815 24.6627C21.2418 24.9098 20.6242 25.0375 20 25.0375C19.3758 25.0375 18.7582 24.9098 18.1848 24.6627C17.6117 24.4155 17.0952 24.0538 16.6667 23.5998L8.33334 15" stroke="black" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </article>
          <NodeRoad nodes={nodes} />
        </>
      )}
    </>
  );
};

export default Road;
