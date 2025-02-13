import clsx from "clsx";

interface ErrorPanelProps {
  description: string;
}

const ErrorPanel: React.FC<ErrorPanelProps> = ({ description }) => {
  return (
    <div className={clsx(
      "border border-error text-sm/10 text-error rounded-md flex justify-center"
    )}>
        {description}
    </div>
  )
}

export default ErrorPanel
