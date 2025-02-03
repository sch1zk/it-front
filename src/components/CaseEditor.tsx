"use client";

import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { fetchCase, runCode } from "@/servives/api";

interface Case {
  id: number;
  title: string;
  description: string;
}

interface CaseEditorProps {
  case_id: string;
}

const CaseEditor: React.FC<CaseEditorProps> = ({ case_id }) => {
  const [caseDetails, setCaseDetails] = useState<Case | null>(null);
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState("// Напишите код здесь...");
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getCaseDetails = async () => {
    try {
      const { data } = await fetchCase(case_id!);
      setCaseDetails(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRunCode = async () => {
    setOutput(null);
    setError(null);

    try {
      const response = await runCode(case_id, code, language );
    } catch (err: any) {
      setError(err.message);
    }
  }

  useEffect(() => {
    getCaseDetails();
  }, [case_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!caseDetails) {
    return <p>No case found</p>;
  }

  return (
    <div className="flex h-screen p-6 gap-6">
      <div className="w-1/3 p-4 border rounded bg-gray-100">
        <h1 className="text-2xl font-bold mb-2">{caseDetails.title}</h1>
        <p>{caseDetails.description}</p>
      </div>

      <div className="w-2/3 flex flex-col">
        <select
          className="mb-4 p-2 border rounded"
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            setCode(
              e.target.value === "python"
                ? "# Напишите код здесь..."
                : e.target.value === "javascript"
                ? "// Напишите код здесь..."
                : "/* Напишите код здесь... */"
            );
          }}
        >
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
          <option value="cpp">C++</option>
        </select>

        <Editor
          height="300px"
          language={language === "cpp" ? "cpp" : language}
          theme="vs-dark"
          value={code}
          onChange={(val) => setCode(val || "")}
        />
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleRunCode}
        >
          Run
        </button>

        {output && (
          <pre className="mt-4 p-2 bg-green-100 border rounded">{output}</pre>
        )}
        {error && (
          <pre className="mt-4 p-2 bg-red-100 border rounded">{error}</pre>
        )}
      </div>
    </div>
  );
};

export default CaseEditor