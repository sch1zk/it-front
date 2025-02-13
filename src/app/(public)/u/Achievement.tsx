import Image from 'next/image';

interface AchievementCardProps {
  imagePath: string;
  title: string;
  description?: string | null;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ imagePath, title, description }) => {
  return (
    <a href="#" className="inline-flex items-center bg-alt p-5 gap-5 rounded-[20px]">
      <Image src={imagePath} alt={`Achievement: ${title}`} width={48} height={48}/>
      <div>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        { description && (
          <p className="text-sm">{description}</p>
        )}
      </div>
    </a>
  );
};
