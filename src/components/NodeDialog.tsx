import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react';
import {  Plan } from '../constants/types';
import { useContext, useState } from 'react';
import { userContext } from '../context/UserContext';
import { updateFrontData } from '../services/updateFrontData';

const NodeDialog = ({
  isOpen,
  close,
  node,
  shouldDisable
}: {
  isOpen: boolean;
  close: () => void;
  node: Plan;
  shouldDisable: boolean;
}) => {

  const isCompleted = node.status;
  const {data, setData } = useContext(userContext)
  const [showEventuality, setShowEventuality] = useState<boolean>(false)

  const handleComplete = async () => {
    try {
      const reqData = {
        'completed_id': node.id,
        "path_info": data.data.find((item) => item.path_id === data.activePath)
      }
      // Envía los datos a la API
      const apiResponse = await fetch('https://da5cms9i64.execute-api.us-west-2.amazonaws.com/dev/api/financial-path', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(reqData) // Convierte el objeto data a una cadena JSON
      });

      if(apiResponse.status === 200) {
        await updateFrontData(setData, data)
        close()
      }

  if (!apiResponse.ok) {
    throw new Error('Network response was not ok');
  }

  const responseData = await apiResponse.json();
  console.log('Success:', responseData);
} catch (error) {
  console.error('Error:', error);
}
  }

  const handleCompleteEventuality = async () => {
    // Add API CALL
  }

  const handleClose = () => {
    close()
    setShowEventuality(false)
  }

  if(showEventuality) {
    return (
      <Dialog
      transition
      open={isOpen}
      as="div"
      className="relative z-50 focus:outline-none"
      onClose={handleClose}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-1">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl flex flex-col items-center bg-white p-4 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <p className="text-black text-xl font-bold text-center ">Register Eventuality</p>
            <p className='text-sm text-black me-auto mt-4'>
              Description:
            </p>
            <textarea
              className="w-full h-24 rounded-md border border-black p-2 mt-2"
              />
            <p className='text-sm text-black me-auto mt-4'>
              Amount Spent:
            </p>
            <div className="flex flex-row justify-center text-black text-3xl font-medium mt-4 w-full gap-1">
              $
            <input
              type="number"
              placeholder='000'
              className="placeholder-black bg-transparent placeholder:text-center text-center outline-none focus:outline-none max-w-[10ch]"
              />
              MXN
            </div>


            <div className="mt-10 flex flex-row justify-between w-full px-5 gap-4">
              
                <Button
                  className="items-center w-full gap-2 rounded-md bg-black py-1.5 px-3 text-md font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => setShowEventuality(false)}
                >
                  Back
                </Button>
              <Button
                className={`items-center w-full rounded-md bg-red-700 py-1.5 px-3 text-md font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700`}
                onClick={handleCompleteEventuality}
              >
                Register
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
    )
  }

  return (
      <Dialog
        transition
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={handleClose}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-1">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl flex flex-col items-center bg-white p-4 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <p className={`${isCompleted ? "text-primary" : "text-black"} text-xl font-bold text-center `}>{node.title}</p>
              <p className='mt-2'>
                <span className={`${isCompleted ? "text-primary" : "text-black"} text-md font-medium`}>Due date: </span>
                <span className={` text-md`}>{node.due_date}</span>
              </p>
              <p className="mt-2 text-sm/6 text-black">{node.description}</p>
              <p className="mt-2 self-start">
                Save{isCompleted ? 'd' : ''}:
              </p>
              <p className={`${isCompleted ? "text-primary" : "text-black"} mt-2 text-5xl font-bold`}>
                ${node.amount.toLocaleString('en-US')} MXN
              </p>

              {shouldDisable && <p className="mt-2 text-sm/6 text-red-800">Complete the previous steps to unlock this one</p>}

              <div className="mt-10 flex flex-row justify-between w-full px-5 gap-4">
                {!isCompleted && (
                  <Button
                    className="items-center w-full gap-2 rounded-md bg-black py-1.5 px-3 text-md font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={() => setShowEventuality(true)}
                  >
                    3 | Eventuality
                  </Button>
                )}
                <Button
                  className={`${shouldDisable ? "bg-black/40" : "bg-primary"} items-center w-full rounded-md py-1.5 px-3 text-md font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700`}
                  onClick={handleComplete}
                  disabled={shouldDisable || isCompleted}
                >
                  Complete{isCompleted && 'd'}
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
  );
};

export default NodeDialog;
