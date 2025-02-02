import CaseEditor from "@/components/CaseEditor";
export default async function CasePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  return (
    <>
      <CaseEditor case_id={id}/>
    </>
  );
};