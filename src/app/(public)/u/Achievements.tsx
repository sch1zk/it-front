import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';

interface AchievementCardProps {
  imageIndex: number;
  title: string;
  description: string;
  progress: number;
  date: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  imageIndex,
  title,
  description,
  progress,
  date,
}) => {
  return (
    <div className="bg-main rounded-md flex p-5 gap-5">
      <div className="w-[75px] h-[75px] border-2 border-primary rounded-lg flex items-center justify-center">
        <Image src={`/images/achievements/${imageIndex}.svg`} alt={title} width={50} height={50} />
      </div>
      <div className="space-y-1">
        <p className="text-lg">{title}</p>
        <p className="text-sm">{description}</p>
        <p className="text-sm text-muted">Это достижение есть у {progress}% пользователей</p>
      </div>
      <p className="text-nowrap ml-auto text-sm text-muted">{date}</p>
    </div>
  );
};

export default function AchievementsSection() {
  return (
    <div className="rounded-lg bg-alt p-5">
      <a href="" className="inline-flex gap-1 mb-10 items-center text-primary text-lg font-semibold">
        <span>Достижения</span>
        <MdOutlineArrowOutward size={24}/>
      </a>

      <div className="space-y-5">
        <AchievementCard 
          imageIndex={0} 
          title="Hello, world!" 
          description="Выполните обучающий кейс"
          progress={87}
          date="Получено 17 фев. 2025 г. 23:04"
        />
        <AchievementCard 
          imageIndex={1} 
          title="Прямиком в продакшн!" 
          description="Отправьте решение кейса и провалите все тесты"
          progress={59}
          date="Получено 17 фев. 2025 г. 23:07"
        />
        <AchievementCard 
          imageIndex={2} 
          title="Гонка за оптимизацией"
          description="Вернитесь к старому кейсу, чтобы ускорить выполнение кода"
          progress={55}
          date="Получено 17 фев. 2025 г. 23:10"
        />
      </div>

    </div>
  );
};