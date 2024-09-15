const ProgressBar = ({ progress }: { progress: number }) => {
  const porcentaje = progress > 100 ? 100 : progress < 0 ? 10 : progress;
  return (
    <div className="w-full bg-transparent rounded-full">
      <div
        className="bg-accent text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        style={{ width: porcentaje + '%' }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
