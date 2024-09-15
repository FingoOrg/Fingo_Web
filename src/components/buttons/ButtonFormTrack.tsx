import React from 'react';

interface ButtonFormTrackProps {
  label: string;
  onClick: () => void;
}

const ButtonFormTrack: React.FC<ButtonFormTrackProps> = ({
  label,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center col-span-12 mx-auto ">
      <button
        onClick={onClick}
        className="bg-black text-white shadow-lg py-2 px-2 rounded-md"
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonFormTrack;
