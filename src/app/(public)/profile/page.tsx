import { MdEmail, MdFolder, MdHeadsetMic, MdHelp, MdLocationOn, MdSettings, MdSms, MdStar, MdThumbUp } from 'react-icons/md';
import InfoSection from './Info';

const Sidebar: React.FC = () => {
  return (
    <div className="inline-flex flex-col gap-3">

      <span className="font-semibold text-primary">Кейсы</span>
      <a href="#" className="inline-flex items-center gap-2 w-fit">
        <MdLocationOn size={24}/> 
        RoadMap
      </a>
      <a href="#" className="inline-flex items-center gap-2 w-fit">
        <MdStar size={24}/>
        Избранное
      </a>
      <a href="#" className="inline-flex items-center gap-2 w-fit">
        <MdThumbUp size={24}/>
        Понравившееся
      </a>

      <hr className="hr-mute" />

      <span className="font-semibold text-primary">Рекрутинг</span>
      <a href="#" className="inline-flex items-center gap-2 w-fit">
        <MdFolder size={24}/>
        Мое резюме
      </a>
      <a href="#" className="inline-flex items-center gap-2 w-fit">
        <MdEmail size={24}/>
        Отклики
      </a>

      <hr className="hr-mute" />

      <span className="font-semibold text-primary">Комьюнити</span>
      <a href="#" className="inline-flex items-center gap-2 w-fit">
        <MdSms size={24}/>
        Сообщения
      </a>
      <a href="#" className="inline-flex items-center gap-2 w-fit">
        <MdHelp size={24}/>
        Вопросы
      </a>

      <hr className="hr-mute" />
      
      <a href="#" className="inline-flex items-center gap-2 w-fit">
        <MdSettings size={24}/>
        Сообщения
      </a>
      <a href="#" className="inline-flex items-center gap-2 w-fit">
        <MdHeadsetMic size={24}/>
        Вопросы
      </a>

    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className="container flex min-h-[100vh] gap-10">
      <Sidebar/>
      <section className="flex flex-col gap-5">
        <InfoSection/>
      </section>
    </div>
  );
};