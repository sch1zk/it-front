import CaseComponent, { CaseData } from "./CaseComponent";
import { fetchCase } from "@/services/api";

export default async function CasePage({
  params 
}: { 
  params: Promise<{ id: string }>
}) {
  try {
    const caseId = (await params).id;

    const caseData: CaseData = await fetchCase(caseId);

    if (!caseData) {
      return <p>Кейс не найден</p>;
    }

    return <CaseComponent caseData={caseData} />;
  } catch (error) {
    console.error(error);
    return <p>Ошибка при загрузке кейса</p>;
  }
}
