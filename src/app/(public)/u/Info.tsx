import CollapsablePanel from '@/components/ui/CollapsablePanel';
import ComboBox, { ComboBoxItem } from '@/components/ui/ComboBox';
import { Button } from '@headlessui/react';
import Image from 'next/image';
import { MdEdit, MdDownload, MdAttachFile } from "react-icons/md";

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type?: string;
  name: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ 
  label,
  placeholder,
  type = "text",
  name,
  error
}) => {
  return (
    <div className="flex flex-col flex-grow flex-shrink gap-2.5 min-w-56">
      {label && <label htmlFor={name} className="text-sm text-muted">{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`p-2.5 border rounded-md bg-transparent border-alt focus:outline-none focus:ring-1 focus:ring-[#BADE4F] focus:border-[#BADE4F]${
          error ? 'border-red-500' : ''
        }`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export const InfoPersonal: React.FC = () => {
  return (
    <div className="inline-flex flex-col gap-10 p-10 rounded-lg bg-alt">
      <div className="flex flex-wrap justify-between gap-5">
        <p className="text-xl text-primary">Личная информация</p>
        <div className="flex flex-wrap gap-5">
          <a href="#" className="flex items-center flex-1 gap-2 p-2 bg-transparent border rounded-md min-w-fit border-primary">
            <MdAttachFile size={20}/>
            Прикрепить резюме
          </a>
          <a href="#" className="flex items-center flex-1 gap-2 p-2 border rounded-md min-w-fit bg-primary text-light">
            <MdDownload size={20}/>
            Скачать портфолио
          </a>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex flex-col items-center gap-5">
          <Image src="/images/avatar_generic.svg" alt="Аватар" width={100} height={100} className="rounded-full"/>
          <a href="#" className="px-2.5 py-1 border rounded-md border-main whitespace-nowrap">Заменить фото</a>
        </div>
        <div className="flex flex-wrap gap-5 max-w-[600px]">
          <div className="flex flex-wrap justify-center w-full gap-5">
            <InputField
              label="Имя"
              placeholder="Введите ваше имя"
              name="name"
            />
            <InputField
              label="Фамилия"
              placeholder="Введите вашу фамилию"
              name="surname"
            />
          </div>
          <div className="flex flex-wrap justify-center w-full gap-5">
            <InputField
              label="Никнейм"
              placeholder="Введите ваш никнейм"
              name="nickname"
            />
            <InputField
              label="Дата рождения"
              placeholder="Введите вашу дату рождения"
              name="birth-date"
            />
          </div>
          <InputField
            label="Профессия"
            placeholder="Введите вашу профессию"
            name="profession"
          />
          <div className="flex flex-wrap justify-center w-full gap-5">
            <InputField
              label="Страна"
              placeholder="Выберите вашу страну"
              name="country"
            />
            <InputField
              label="Город"
              placeholder="Выберите ваш город"
              name="city"
            />
          </div>
        </div>
        <a href="#" className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-md bg-panel-alt">
          <MdEdit size={24}/>
        </a>
      </div>
    </div>
  );
};

export const InfoContacts: React.FC = () => {
  const firstPart = (
    <div className="inline-flex items-center">
      <span className="mr-2 text-xl text-primary">Контакты</span>
      <Button className="transition-all duration-300 ease-in-out cursor-pointer overflow-hidden w-0 group-data-[open]:w-full">
        <MdEdit size={20} />
      </Button>
    </div>
  )
  
  const secondPart = (
    <div className="relative flex flex-wrap w-full gap-5 mt-[20px]">
      {/* <a href="#" className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-md bg-panel-alt">
        <MdEdit size={24}/>
      </a> */}
      <div className="flex flex-wrap w-full gap-5">
        <InputField
          label="Github"
          placeholder="Введите ваш Github"
          name="github"
        />
        <InputField
          label="Номер телефона"
          placeholder="Введите ваш номер телефона"
          name="phone-number"
        />
      </div>
      <div className="flex flex-wrap w-full gap-5">
        <InputField
          label="E-mail"
          placeholder="Введите вашу почту"
          name="email"
        />
        <InputField
          label="Telegram"
          placeholder="Введите ваш Telegram"
          name="telegram"
        />
      </div>
    </div>
  )

  return (
    <CollapsablePanel
      className="inline-flex flex-col rounded-lg bg-alt"
      padding={40}
      firstPart={firstPart}
      secondPart={secondPart}
    />
  );
};

export const InfoPerformance: React.FC = () => {
  const items: ComboBoxItem[] = [
    { id: 1, name: "Frontend-разработка" },
    { id: 2, name: "Backend-разработка" },
    { id: 3, name: "Data Science" },
    { id: 4, name: "DevOps" },
    { id: 5, name: "Мобильная разработка" }
  ];

  return (
    <div className="inline-flex gap-10">
      <div className="w-1/3 p-10 rounded-lg bg-alt">
        <p className="text-xl text-primary">Обучение</p>
        <ComboBox items={items} />
        <p className="text-primary">Основное направление</p>
        <p className="text-primary">Выбранные языки</p>
        <p className="text-primary">Использованные языки</p>
      </div>
      <div className="w-2/3 p-10 rounded-lg bg-alt h-[500px]">
        <p className="text-xl text-primary">История кейсов</p>
      </div>
    </div>
  );
}