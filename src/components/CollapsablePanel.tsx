import { MdArrowDropDown } from "react-icons/md";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { relative } from "path";

interface CollapsablePanelProps {
  className?: string;
  padding?: number;
  firstPart?: React.ReactNode;
  secondPart?: React.ReactNode;
}

const CollapsablePanel: React.FC<CollapsablePanelProps> = ({ className, padding = 0, firstPart, secondPart }) => {
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



  // const [isOpen, setIsOpen] = useState(false);
  // const buttonWidth = 32;
  
  // const togglePanel = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // return (
  //   <>
  //     <div className="relative">
  //       <button
  //         onClick={togglePanel}
  //         className={`absolute inset-0 my-auto inline-flex items-center justify-center rounded-full cursor-pointer bg-primary`}
  //         style={{left: `calc(${padding + buttonWidth / 2}px * -1)`, width: `${buttonWidth}px`, height: `${buttonWidth}px` }}
  //       >
  //         <Image src="/images/icons/arrow_down.svg" alt="" width={16} height={24}/>
  //       </button>
  //       {firstPart}
  //     </div>
  //     <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen overflow-visible opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}>
  //       {secondPart}
  //     </div>
  //   </>
  // );
};

export default CollapsablePanel;
