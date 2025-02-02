"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Case {
  id: number;
  title: string;
  description: string;
}

interface Meta {
  total: number;
  page: number;
  limit: number;
}

interface CaseListResponse {
  cases: Case[];
  meta: Meta;
}

const CaseList: React.FC = () => {
  const [cases, setCases] = useState<Case[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCases = async (page: number = 1, limit: number = 10) => {
    try {
      const { data } = await axios.get("http://localhost:8081/api/cases?page=1&limit=10", {
        params: { page, limit },
      });
      setCases(data.cases);
      setMeta(data.meta);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCases(1, 10);
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
        {cases.map((caseItem) => (
          <li key={caseItem.id}>
            <h2>{caseItem.title}</h2>
            <p>{caseItem.description}</p>
          </li>
        ))}
      </ul>
      {meta && (
        <div className="flex gap-2.5">
          <p>Page: {meta.page}</p>
          <p>Limit: {meta.limit}</p>
          <p>Total Cases: {meta.total}</p>
        </div>
      )}
    </div>
  );
};

export default CaseList;
