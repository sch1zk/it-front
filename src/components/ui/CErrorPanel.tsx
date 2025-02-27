import clsx from "clsx";

interface CErrorPanelProps {
  description: string;
}

const CErrorPanel: React.FC<CErrorPanelProps> = ({ description }) => {
  return (
    <div className={clsx(
      "border border-error text-sm/10 text-error rounded-md flex justify-center"
    )}>
        {description}
    </div>
  )
}

export default CErrorPanel
