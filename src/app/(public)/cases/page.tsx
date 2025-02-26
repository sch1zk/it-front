import CaseList from "@/components/CaseList";
import FilterSection from './FilterSection';
import SortcasesSection from './SortcasesSection';
import ListallcasesSection from './ListallcasesSection';
export default function CasesPage() {
  return (
    <div className="flex-col lg:flex-row flex gap-10 container mt-20 mx-auto">
    <>
     <FilterSection />
     <section className="w-full lg:w-2/3">
      <SortcasesSection />
     </section>
      {/* <CaseList /> */}
    </>
    </div>
   
  );
};