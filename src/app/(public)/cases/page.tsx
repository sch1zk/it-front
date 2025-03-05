import CListbox from "@/components/ui/CListbox";
import CSearchInput from "@/components/ui/CSearchInput";
import CaseList from "./CaseList";

export default function CasesPage() {
  const filterDifficulties = [
    { id: 1, name: "Любая" },
    { id: 2, name: "Легко" },
    { id: 3, name: "Средне" },
    { id: 4, name: "Сложно" },
  ];

  const filterProgress = [
    { id: 1, name: "Любые" },
    { id: 2, name: "Только нерешенные" },
    { id: 3, name: "Только решенные" },
  ];

  const filterStatus = [
    { id: 1, name: "Одобренно платформой" },
    { id: 2, name: "На проверке" },
  ];

  const filterLanguages = [
    { id: 1, name: "JavaScript"},
    { id: 2, name: "TypeScript"},
    { id: 3, name: "Python"},
    { id: 4, name: "C"},
    { id: 5, name: "C++"},
    { id: 6, name: "C#"},
    { id: 7, name: "Go"},
    { id: 8, name: "Java"},
    { id: 9, name: "HTML"},
    { id: 10, name: "CSS"},
    { id: 11, name: "Rust"},
    { id: 12, name: "PHP"},
    { id: 13, name: "Ruby"},
    { id: 14, name: "Swift"},
    { id: 15, name: "Kotlin"},
  ];

  const filterTopics = [
    { id: 1, name: "Основы" },
    { id: 2, name: "Массивы" },
    { id: 3, name: "Математика" },
    { id: 4, name: "Алгоритмы" },
  ];

  return (
    <div className="container flex gap-5" style={{ minHeight: "calc(100vh - var(--header-height))" }}>
      <div className="sticky top-4 min-w-[300px] bg-main px-4 py-3 rounded-md space-y-2.5 border-2 border-panel-alt h-fit">
        <CListbox
          items={filterDifficulties}
          label="Сложность" 
          optionBackground="bg-alt"
          labelClass="text-main"
          buttonClass="w-full mt-1 rounded-md py-1.5 border-2 border-panel-alt"
          optionsClass="rounded-md mt-2 border-2 border-panel-alt"
          optionClass="px-3"
        />
        <CListbox
          items={filterProgress}
          label="Прогресс"
          optionBackground="bg-alt"
          labelClass="text-main"
          buttonClass="w-full mt-1 rounded-md py-1.5 border-2 border-panel-alt"
          optionsClass="rounded-md mt-2 border-2 border-panel-alt"
          optionClass="px-3"
        />
        <CListbox
          items={filterStatus}
          label="Статус"
          optionBackground="bg-alt"
          labelClass="text-main"
          buttonClass="w-full mt-1 rounded-md py-1.5 border-2 border-panel-alt"
          optionsClass="rounded-md mt-2 border-2 border-panel-alt"
          optionClass="px-3"
        />
        <CListbox
          items={filterLanguages}
          label="Языки"
          multiple
          optionBackground="bg-alt"
          labelClass="text-main"
          buttonClass="w-full mt-1 rounded-md py-1.5 border-2 border-panel-alt"
          optionsClass="rounded-md p-1.5 mt-2 border-2 border-panel-alt"
        />
        <CListbox
          items={filterTopics}
          label="Теги"
          multiple
          optionBackground="bg-alt"
          labelClass="text-main"
          buttonClass="w-full mt-1 rounded-md py-1.5 border-2 border-panel-alt"
          optionsClass="rounded-md p-1.5 mt-2 border-2 border-panel-alt"
        />
      </div>

        {/* <CSearchInput /> */}
      <CaseList />

      
    </div>
  );
};