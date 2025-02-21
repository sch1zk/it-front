import MarkdownViewer from "@/components/MarkdownViewer";
import React from "react";

interface DescriptionTabProps {
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
}

const DescriptionTab: React.FC<DescriptionTabProps> = ({ title, difficulty, description }) => {
  return (
    <div className="p-4 space-y-2.5">
      <div>
        <span className="bg-main text-primary rounded-sm text-sm py-1 px-2.5">
          {difficulty === 'easy' ? 'Легко' : difficulty === 'medium' ? 'Средне' : 'Трудно'}
        </span>
      </div>

      <p className="text-2xl font-semibold">
        {title}
      </p>
      <MarkdownViewer content={description}/>
    </div>
  );
}

export default DescriptionTab;