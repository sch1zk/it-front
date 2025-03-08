import CSemiCircularProgress from "@/components/ui/СSemiCircularProgress";

export default function StatsSection() {
  return (
    <div className="rounded-lg bg-radial-stats p-5">
      <p className="text-primary mb-5 text-lg font-semibold">Решенные кейсы</p>
      <div className="flex gap-5 justify-around">
        <div className="flex flex-col items-center justify-between relative w-[150px] h-28">
          <span className="text-primary">Легко</span>
          <span className="text-primary">28/341</span>
          <div className="absolute bottom-0">
            <CSemiCircularProgress size={150} progress={9} color="#BADE4F"/>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between relative w-[150px] h-28">
          <span className="text-medium">Средне</span>
          <span className="text-medium">43/248</span>
          <div className="absolute bottom-0">
            <CSemiCircularProgress size={150} progress={21} color="#DBBF51"/>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between relative w-[150px] h-28">
          <span className="text-hard">Сложно</span>
          <span className="text-hard">67/903</span>
          <div className="absolute bottom-0">
            <CSemiCircularProgress size={150} progress={26} color="#E3595B"/>
          </div>
        </div>
      </div>

    </div>
  );
};