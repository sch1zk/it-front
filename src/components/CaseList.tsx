"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { fetchCases } from "@/servives/api";

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

  const getCasesList = async (page: number = 1, limit: number = 10) => {
    try {
      const { data } = await fetchCases(page, limit);
      setCases(data.cases);
      setMeta(data.meta);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCasesList(1, 10);
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
            <Link href={`/cases/${caseItem.id}`}>
              <h2 className="underline">{caseItem.title}</h2>
            </Link>
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
