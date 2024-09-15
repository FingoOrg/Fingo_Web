import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { NodeInfo } from '../constants/types';

const NodeDialog = ({
  isOpen,
  close,
  node,
}: {
  isOpen: boolean;
  close: () => void;
  node: NodeInfo;
}) => {
  return (
    <>
      <Dialog
        transition
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                {node.title}
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">{node.description}</p>
              <div className="mt-10 flex flex-row justify-between w-full px-10">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-red-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Cerrar
                </Button>
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-primary py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Completar
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default NodeDialog;
