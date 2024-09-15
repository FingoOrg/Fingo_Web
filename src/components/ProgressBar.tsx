const ProgressBar = ({ progress }: { progress: number }) => {
  const porcentaje = progress > 100 ? 100 : progress < 0 ? 0 : progress;

  // 100% is the full length of the circle, 2 * PI * r for the circumference of a circle
  const radius = 16;
  const circumference = 2 * Math.PI * radius;

  // Calculate the dash offset based on percentage
  const dashOffset = circumference - (porcentaje / 100) * circumference;

  return (
    <div className="relative size-16">
      <svg
        className="size-full -rotate-90"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          className="stroke-current text-gray-200 dark:text-neutral-700"
          strokeWidth="2"
        ></circle>
        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          className="stroke-current text-primary"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        ></circle>
      </svg>

      <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span className="text-center text-xl font-bold text-primary">
          {porcentaje}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
