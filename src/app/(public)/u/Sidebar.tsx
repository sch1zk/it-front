import Image from 'next/image';

interface SidebarButtonProps {
  imagePath: string;
  title: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ imagePath, title }) => {
  return (
    <a href="#" className="flex items-center gap-3">
      <Image src={imagePath} alt={title} width={32} height={32}/>
      {title}
    </a>
  );
};

export default function Sidebar() {
  const lastButtonsCount = 2;

  const buttons = [
    { imagePath: '/images/icons/location.svg', title: 'RoadMap' },
    { imagePath: '/images/icons/star.svg', title: 'Избранное' },
    { imagePath: '/images/icons/message.svg', title: 'Сообщения' },
    { imagePath: '/images/icons/question.svg', title: 'Вопросы' },
    { imagePath: '/images/icons/notification.svg', title: 'Уведомления' },
    { imagePath: '/images/icons/settings.svg', title: 'Настройки' },
    { imagePath: '/images/icons/headset.svg', title: 'Поддержка' },
  ];

  return (
    <div className="flex flex-col gap-5 p-6 font-bold w-fit">
      {buttons.slice(0, buttons.length - lastButtonsCount).map((button, index) => (
        <SidebarButton key={index} {...button} />
      ))}
      <hr className="hr-mute" />
      {buttons.slice(-lastButtonsCount).map((button, index) => (
        <SidebarButton key={index + (buttons.length - lastButtonsCount)} {...button} />
      ))}
    </div>
  );
}
