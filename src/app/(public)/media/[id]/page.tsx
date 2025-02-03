import ArticleViewer from "@/components/ArticleViewer";

export default async function CasePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  return (
    <>
      <ArticleViewer article_id={id}/>
    </>
  );
};