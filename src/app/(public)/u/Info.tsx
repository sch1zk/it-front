import CButton, { ButtonVariant } from "@/components/ui/CButton";
import { MdLightbulb, MdMoreVert, MdStar, MdThumbUp, MdVisibility } from "react-icons/md";
import Image from 'next/image';

export default function InfoSection() {
  return (
    <div className="border rounded-lg border-panel-alt p-5 w-[380px] space-y-10 relative h-fit">
      <button className="absolute right-5 top-5 overflow-hidden w-4 h-fit cursor-pointer">
        <MdMoreVert size={24} className="ml-[-4px]" />
      </button>

      <div className="flex flex-col gap-2.5 items-center">
        <Image src="/images/avatar_generic.svg" alt="Пользователь" width={120} height={120}/>
        <p className="text-xl">@Boob_lick2002</p>
        <p className="text-primary">Frontend-разработчик</p>
        <a href="#"><p className="text-lg">https://github.com</p></a>

        <CButton variant={ButtonVariant.BASE_OUTLINE}>Отправить сообщение</CButton>
      </div>

      <div className="space-y-5">
        <div className="flex items-center">
          <MdStar size={30} color="var(--color-primary)" className="mr-5"/>
          <span>Место в рейтинге</span>
          <span className="text-lg font-medium ml-auto">48 / 1452</span>
        </div>
        <div className="flex items-center">
          <MdVisibility size={30} color="var(--color-primary)" className="mr-5"/>
          <span>Просмотры профиля</span>
          <span className="text-lg font-medium ml-auto">1627</span>
        </div>
        <div className="flex items-center">
          <MdLightbulb size={30} color="var(--color-primary)" className="mr-5"/>
          <span>Решенные кейсы</span>
          <span className="text-lg font-medium ml-auto">138</span>
        </div>
        <div className="flex items-center">
          <MdThumbUp size={30} color="var(--color-primary)" className="mr-5"/>
          <span>Понравившиеся кейсы</span>
          <span className="text-lg font-medium ml-auto">106</span>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <p className="text-primary mb-2">Описание</p>
          <p>Текст описания</p>
        </div>
        <div>
          <p className="text-primary mb-2">Основное направление</p>
          <p className="bg-panel-alt px-3 py-1.5 rounded-md w-fit">Frontend-разработка</p>
        </div>
        <div>
          <p className="text-primary mb-2">Выбранные языки</p>
          <div className="flex gap-2.5">
            <span className="bg-panel-alt px-3 py-1.5 rounded-md">С++</span>
            <span className="bg-panel-alt px-3 py-1.5 rounded-md">Python</span>
            <span className="bg-panel-alt px-3 py-1.5 rounded-md">JavaScript</span>
          </div>
        </div>
        <div>
          <p className="text-primary mb-2">Использованные языки</p>
          <div className="space-y-2.5">
            <div className="flex justify-between">
              <span className="bg-panel-alt px-3 py-1.5 rounded-md">C++</span>
              <span className="text-lg"><span className="font-medium">10</span> кейсов</span>
            </div>
            <div className="flex justify-between">
              <span className="bg-panel-alt px-3 py-1.5 rounded-md">Python</span>
              <span className="text-lg"><span className="font-medium">26</span> кейсов</span>
            </div>
            <div className="flex justify-between">
              <span className="bg-panel-alt px-3 py-1.5 rounded-md">JavaScript</span>
              <span className="text-lg"><span className="font-medium">13</span> кейсов</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};