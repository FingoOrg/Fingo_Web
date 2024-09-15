import { useContext, useEffect, useState } from 'react';
import NodeRoad from '../components/NodeRoad';
import { Plan } from '../constants/types';
import FormPath from '../screens/FormPath';
import { userContext } from '../context/UserContext';
import ChoosePath from '../components/ChoosePath';

const Road = () => {
  const [showChat, setShowChat] = useState<boolean>(true);
  const {data} = useContext(userContext)
  useEffect(() => {

    if (data.chatAlreadyAnswered) {
      setShowChat(false);
    }
  }, [data]);

  const nodes =
    (data.data.find((item) => item.path_id === data.activePath)
      ?.bedrock_response as Plan[]) || [];

  return (
    <>
      {showChat ? (
        <FormPath />
      ) : (
        <>
          <ChoosePath />
          <NodeRoad nodes={nodes} />
        </>
      )}
    </>
  );
};

export default Road;
