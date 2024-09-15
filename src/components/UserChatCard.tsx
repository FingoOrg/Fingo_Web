


const UserChatCard: React.FC<{
    message: string;

}> = ({ message, }) => {
    return (



        <div className="col-start-6 col-end-13 p-3">
            <div className="flex items-center justify-start flex-row-reverse">
                <div
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                    <img
                        src="./src/assets/user.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="inline-block max-w-full relative ml-3 text-sm py-2 px-4 shadow-xl rounded-tl-xl rounded-tr-xl rounded-bl-xl bg-white text-black">
                    {message}
                </div>
            </div>
        </div>

    );
}

export default UserChatCard;