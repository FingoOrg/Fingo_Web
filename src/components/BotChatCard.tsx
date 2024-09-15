

import React from 'react';

const BotChatCard: React.FC<{
    message: string;

}> = ({ message }) => {
    return (
        <div className="col-start-1 col-end-8 p-3 rounded-lg">
            <div className="flex flex-row items-center">
                <div
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                    <img
                        src="./src/assets/capifin.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <p className="inline-block max-w-full relative ml-3 text-sm bg-black text-white  py-2 px-4 shadow-2xl rounded-tl-xl rounded-tr-xl rounded-br-xl">
                    {message}
                </p>
            </div>
        </div>
    );
}

export default BotChatCard;
