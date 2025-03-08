interface SemiCircularProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number; 
  color?: string;
  backgroundColor?: string;
}

const CSemiCircularProgress: React.FC<SemiCircularProgressProps> = ({
  progress,
  size = 200,
  strokeWidth = 10,
  color = "#BADE4F",
  backgroundColor = "#383838",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius;
  const offset = circumference * ((100 - progress) / 100);

  return (
    <svg width={size} height={size / 2 + strokeWidth} viewBox={`0 0 ${size} ${size / 2}`}>
      <defs>
        <mask id="mask">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="white"
            fill="black"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeLinecap="round"
            // transform={`rotate(-180 ${size / 2} ${size / 2})`}
          />
        </mask>
      </defs>

      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={backgroundColor}
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={0}
        strokeLinecap="round"
        transform={`rotate(-180 ${size / 2} ${size / 2})`}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-180 ${size / 2} ${size / 2})`}
        mask="url(#mask)"
      />
    </svg>
  );
};

export default CSemiCircularProgress;