"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchArticles } from "@/services/api";

interface Article {
  id: number;
  title: string;
  description: string;
}

interface Meta {
  total: number;
  page: number;
  limit: number;
}

const ArticlesList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getArticlesList = async (page: number = 1, limit: number = 10) => {
    try {
      const data = await fetchArticles(page, limit);
      setArticles(data.articles);
      setMeta(data.meta);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticlesList(1, 10);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/media/${article.id}`}>
              <h2 className="underline">{article.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
      {meta && (
        <div className="flex gap-2.5">
          <p>Page: {meta.page}</p>
          <p>Limit: {meta.limit}</p>
          <p>Total Articles: {meta.total}</p>
        </div>
      )}
    </div>
  );
};

export default ArticlesList;
