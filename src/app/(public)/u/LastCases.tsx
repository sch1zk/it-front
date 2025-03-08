import { MdAccessTime, MdLabel, MdOutlineArrowOutward } from "react-icons/md";

export default function LastCasesSection() {
  return (
    <div className="p-5 panel flex-1">
      <p className="text-primary mb-10 text-lg font-semibold">Последние решенные кейсы</p>

      <div className="flex flex-col gap-3">
        <div className="bg-panel rounded-md p-5">
          <p className="flex items-center gap-2 mb-4"><MdAccessTime size={20}/>27 февраля, 2025</p>
          <p>Название кейса</p>
          <div className="flex gap-2 mt-4 items-center text-muted">
            <MdLabel size={20}/>
            <p className="bg-main rounded-sm px-1">Основы</p>
            <p className="bg-main rounded-sm px-1">Алгоритмы</p>
            <p className="bg-main rounded-sm px-1">Строки</p>
            <p className="bg-main rounded-sm px-1">Массивы</p>
          </div>
        </div>

        <div className="bg-panel rounded-md p-5">
          <p className="flex items-center gap-2 mb-4"><MdAccessTime size={20}/>27 февраля, 2025</p>
          <p>Название кейса</p>
          <div className="flex gap-2 mt-4 items-center text-muted">
            <MdLabel size={20}/>
            <p className="bg-main rounded-sm px-1">Основы</p>
            <p className="bg-main rounded-sm px-1">Алгоритмы</p>
            <p className="bg-main rounded-sm px-1">Строки</p>
            <p className="bg-main rounded-sm px-1">Массивы</p>
          </div>
        </div>

        <div className="bg-panel rounded-md p-5">
          <p className="flex items-center gap-2 mb-4"><MdAccessTime size={20}/>27 февраля, 2025</p>
          <p>Название кейса</p>
          <div className="flex gap-2 mt-4 items-center text-muted">
            <MdLabel size={20}/>
            <p className="bg-main rounded-sm px-1">Основы</p>
            <p className="bg-main rounded-sm px-1">Алгоритмы</p>
            <p className="bg-main rounded-sm px-1">Строки</p>
            <p className="bg-main rounded-sm px-1">Массивы</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}