"use client"

import InputField from "@/components/ui/InputField";
import { Button } from "@headlessui/react";
import clsx from "clsx";
import Image from 'next/image';
import { socialButtons } from "./page";
import ErrorPanel from "@/components/ui/ErrorPanel";
import { useState } from "react";
import Cookies from 'js-cookie';
import { BACKEND_URL } from '@/lib/config';
import { useRouter } from "next/navigation";
import { login } from "@/services/api";

interface LoginFormProps {
  onSwitch: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Не все поля были заполнены")
      return;
    }

    try {
      const res = await login(email, password);
      console.log(res);
      
      if (res.ok) {
        router.push('/profile');
      } else {
        console.error('Login failed');
      }

      // if (data.access_token) {
      //   Cookies.set("access_token", data.access_token, { path: '/', secure: true });
      //   router.replace('/profile');
      // }
    } catch (err) {
      setError("Ой, что-то пошло не так!");
    }
  };

  return (
    <div className="p-10 rounded-lg bg-alt w-fit">
      <div className="flex flex-col items-center w-[350px]">
        <Image src="/images/it-logo_min.svg" alt="Логотип" width={225} height={72} className="pointer-events-none select-none"/>
        <div className="inline-flex flex-col w-full gap-3 mt-8 mb-3">
          {error && (
            <ErrorPanel description={error}/>
          )}
          <form onSubmit={handleSubmit} className="inline-flex flex-col gap-3">
            <InputField name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Электронная почта" required/>
            <InputField name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" required/>
            <Button type="submit" className="rounded-md cursor-pointer bg-primary text-light text-base/10">
              Войти
            </Button>
          </form>

          <div className="flex justify-between">
            <button className="cursor-pointer">Забыли пароль?</button>
            <button onClick={onSwitch} className="cursor-pointer text-primary">Регистрация</button>
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

export default LoginForm;