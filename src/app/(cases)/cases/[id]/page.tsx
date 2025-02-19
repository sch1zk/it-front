import CaseComponent from "./CaseComponent";

export default async function CasePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  return (
    <>
      <CaseComponent/>
    </>
  );
};