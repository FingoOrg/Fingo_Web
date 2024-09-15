const UserChatCard: React.FC<{
  message: string;
}> = ({ message }) => {
  return (
    <div className="col-start-13 col-end-2 h-fit p-3 pe-0 rounded-lg">
      <div className="flex items-center justify-start flex-row-reverse">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          <img
            src="./assets/user.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="max-w-full relative ml-3 text-sm py-2 px-4 shadow rounded-xl  break-words bg-white text-black">
          {message}
        </div>
      </div>
    </div>
  );
};

export default UserChatCard;
