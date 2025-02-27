"use client"

import { useEffect, useState } from "react";

interface CProgressBarProps {
  bgColor: string;
  lineColor: string;
  max: number;
  current?: number;
}

const CProgressBar: React.FC<CProgressBarProps> = ({ bgColor, lineColor, max, current }) => {
  const [currentValue, setCurrentValue] = useState(current ?? 0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(max > 0 ? (currentValue / max) * 100 : 0);
  }, [currentValue, max]);

  return (
    <div className="flex justify-between w-full overflow-hidden rounded-md text-base/5" style={{ backgroundColor: bgColor }}>
      <div
        className="h-full min-w-10 px-3 font-semibold text-right transition-all duration-300 rounded-md text-light"
        style={{ width: `${progress}%`, backgroundColor: lineColor }}
      >
        {currentValue}
      </div>
      {progress < 100 && (
        <span className="ml-2 mr-3 ">{max}</span>
      )}
    </div>
  );
}

export default CProgressBar;