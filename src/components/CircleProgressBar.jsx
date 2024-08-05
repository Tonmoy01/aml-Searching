import React from 'react';

const CircularProgressBar = ({ progress, size = 100 }) => {
  const radius = size / 2;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform"
      >
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#fff"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="none"
          className="transition-transform duration-300 ease-out"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="text-lg font-semibold text-textPrimaryColor"
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
