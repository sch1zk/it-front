"use client"

import InputField from "@/components/ui/InputField";
import { Button } from "@headlessui/react";
import clsx from "clsx";
import Image from 'next/image';
import { socialButtons } from "./page";
import { useState } from "react";

interface RegisterFormProps {
  onSwitch: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitch }) => {
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="p-10 rounded-lg bg-alt w-fit">
      <div className="flex flex-col items-center w-[350px]">
        <Image src="/images/it-logo_min.svg" alt="Логотип" width={225} height={72} className="pointer-events-none select-none"/>
        <div className="inline-flex flex-col w-full gap-3 mt-8 mb-3">
          <InputField name="username" type="text" placeholder="Имя пользователя"/>
          <InputField name="email" type="email" placeholder="Электронная почта"/>
          <InputField name="password" type="password" placeholder="Пароль"/>
          <InputField name="password" type="password" placeholder="Подтвердите пароль"/>
          <Button className="rounded-md cursor-pointer bg-primary text-light text-base/10">
            Зарегистрироваться
          </Button>
          <div className="flex gap-2.5 justify-center">
            <span>Уже есть аккаунт?</span>
            <button onClick={onSwitch} className="cursor-pointer text-primary">Войти</button>
          </div>
          <div className="flex items-center gap-4 text-muted">
            <hr className="flex-1 w-full"/>
            <span className="select-none">или войти через</span>
            <hr className="flex-1 w-full"/>
          </div>
        </div>
        <div className="flex gap-8">
          {socialButtons.map(({ id, icon: Icon }) => (
            <button
              key={id}
              className={clsx(
                "cursor-pointer text-muted",
                "duration-300 ease-in-out transition-color",
                "hover:text-main"
              )}
            >
              <Icon size={32} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RegisterForm;