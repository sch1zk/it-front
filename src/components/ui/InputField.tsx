"use client"

import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { ChangeEventHandler, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

interface InputFieldProps {
  name: string;
  type: string;
  title?: string;
  placeholder?: string;
  value?: string | number | readonly string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ name, type, title, placeholder, value, onChange, required = false }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  const handleMouseDown = () => setIsPasswordVisible(true);
  const handleMouseUp = () => setIsPasswordVisible(false);
  const handleMouseLeave = () => setIsPasswordVisible(false);

  return (
    <Field className="relative w-full">
      { title && (
        <Label passive={true} className="block mb-2 font-medium text-muted text-sm/6">{title}</Label>
      )}
      <Input
        name={name}
        type={type === "password" && !isPasswordVisible ? "password" : "text"}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={clsx(
          "block w-full px-4 border rounded-md bg-main text-sm/10 border-alt",
          "focus:outline-none"
        )}
      />
      {type === "password" && (
          <button
            type="button"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className={clsx("absolute inset-y-0 flex items-center px-2 cursor-pointer right-2 text-muted",
              "hover:text-main"
            )}
          >
            {isPasswordVisible ? <MdVisibility size={20}/> : <MdVisibilityOff size={20}/>}
          </button>
        )}
    </Field>
  );
};

export default InputField;