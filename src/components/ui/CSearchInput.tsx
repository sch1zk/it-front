"use client"

import { Field, Input } from "@headlessui/react";
import clsx from "clsx";
import { ChangeEventHandler } from "react";

interface CSearchInputProps {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  
}

const CSearchInput: React.FC<CSearchInputProps> = ({ placeholder, onChange }) => {
  return (
    <Field className="relative w-full">
      <Input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className={clsx(
          "block w-full px-4 border rounded-md bg-main text-sm/10 border-alt",
          "focus:outline-none"
        )}
      />
    </Field>
  );
};

export default CSearchInput;