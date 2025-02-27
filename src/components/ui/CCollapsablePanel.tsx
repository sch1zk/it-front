import { MdArrowDropDown } from "react-icons/md";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

interface CCollapsablePanelProps {
  className?: string;
  padding?: number;
  firstPart?: React.ReactNode;
  secondPart?: React.ReactNode;
}

const CCollapsablePanel: React.FC<CCollapsablePanelProps> = ({ className, padding = 0, firstPart, secondPart }) => {
  const buttonSize: number = 40;
  
  return (
    <Disclosure as="div" className={`${className} group`} style={{padding: padding}}>
      <div className="relative inline-flex" >
        <DisclosureButton className="inline-flex items-center">
          <MdArrowDropDown
            color="var(--text-color-light)"
            size={buttonSize}
            className="absolute cursor-pointer rounded-full bg-primary group-data-[open]:rotate-180"
            style={{left: `calc(${padding + buttonSize / 2}px * -1)`}}
          />
        </DisclosureButton>
        {firstPart}
      </div>
      <DisclosurePanel
        transition
        className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
      >
        {secondPart}
      </DisclosurePanel>
    </Disclosure>
  )
};

export default CCollapsablePanel;
