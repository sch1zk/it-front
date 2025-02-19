import { Field, Input } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import { MdLocationOn, MdSend } from "react-icons/md";

export default function IndexFooter() {
  return (
    <footer className="bg-alt">
      
      <div className="container flex flex-col gap-10 py-10">
        <div className="grid grid-cols-8 gap-5">

          <div className="col-span-2">
            <Image
              src="/images/it-logo_min.svg"
              alt="Логотип ITsphera"
              width={150}
              height={48}
              className="mb-2"
            />
            <span className="text-sm">© 2025 ITsphera</span>
          </div>
  
          <div className="">
            <p className="mb-1 font-semibold">О НАС</p>
            <ul className="text-sm/6">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Команда
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Партнеры
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Инвесторам
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Карьера
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <p className="mb-1 font-semibold">IT СФЕРА</p>
            <ul className="text-sm/6">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  ЛК
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Кейсы
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Рейтинг
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Вакансии
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <p className="mb-1 font-semibold">МЕДИА</p>
            <ul className="text-sm/6">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  События
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <p className="mb-1 font-semibold">ПОДДЕРЖКА</p>
            <ul className="text-sm/6">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className="inline-flex flex-col items-end col-span-2 text-right">
            <span className="mb-1 font-semibold">СONNECT WITH US</span>
            <ul className="text-sm/6">
              <li>
                <a href="" className="transition-colors hover:text-primary">
                  +7 (999) 999-99-99
                </a>
              </li>
              <li>
                <a href="" className="transition-colors hover:text-primary">
                  it-sphera@example.com
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="flex justify-between text-sm/6">
          <div className="flex items-center gap-2">
            <MdLocationOn size={20}/>
            <span>г. Шахты, ул. Энтузиастов, д.85</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span>Узнавай новости первым</span>

            <Field className="relative">
              <Input
                name="email"
                type="email"
                placeholder="Электронная почта"
                className={clsx(
                  "block px-4 border min-w-[300px] rounded-md bg-main text-sm/10 border-alt",
                  "focus:outline-none"
                )}
              />
              <button
                type="button"
                className={clsx("absolute inset-y-0 flex items-center px-2 cursor-pointer right-2 text-muted",
                  "hover:text-main"
                )}
              >
                <MdSend size={20} />
              </button>

            </Field>

          </div>
        </div>
      </div>

    </footer>
  );
}
