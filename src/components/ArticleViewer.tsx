"use client";

import { fetchArticle } from "@/services/api";
import { useEffect, useState } from "react";

interface Article {
  id: number;
  title: string;
  content: string;
}

interface ArticleViewerProps {
  article_id: string;
}

const ArticleViewer: React.FC<ArticleViewerProps> = ({ article_id }) => {
const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getCaseDetails = async () => {
    try {
      const data = await fetchArticle(article_id!);
      setActiveArticle(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCaseDetails();
  }, [article_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!activeArticle) {
    return <p>No article found</p>;
  }

  return (
    <>
      <div className="w-1/3 p-4 border rounded bg-gray-100">
        <h1 className="text-2xl font-bold mb-2">{activeArticle.title}</h1>
        <p>{activeArticle.content}</p>
      </div>
    </>
  );
};

export default ArticleViewer