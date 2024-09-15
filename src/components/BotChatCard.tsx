import React from 'react';

const BotChatCard: React.FC<{
  message: string;
}> = ({ message }) => {
  return (
    <div className="col-span-12 p-3 ps-0 rounded-lg h-fit">
      <div className="flex flex-row items-end">
        <div className="flex h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          <img
            src="./src/assets/capifin.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <p className="inline-block max-w-full relative ml-3 text-sm bg-black text-white  py-2 px-4 shadow-2xl rounded-tl-xl rounded-tr-xl rounded-br-xl">
          {message}
        </p>
      </div>
    </div>
  );
};

export default BotChatCard;
