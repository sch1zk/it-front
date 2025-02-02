"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CasePage() {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState("// Напишите код здесь...");
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function runCode() {
    setOutput(null);
    setError(null);

    try {
      const res = await fetch("http://127.0.0.1:8000/run-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language }),
      });

      const data = await res.json();
      if (data.error) setError(data.error);
      else setOutput(data.output);
    } catch (err) {
      setError("Ошибка соединения с сервером");
    }
  }

  return (
    <div className="flex h-screen p-6 gap-6">
      <div className="w-1/3 p-4 border rounded bg-gray-100">
        <h1 className="text-2xl font-bold mb-2">Кейс </h1>
        <p>Описание задачи...</p>
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
          onClick={runCode}
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

