"use client";

import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { fetchCase, runCode } from "@/servives/api";

interface Testcase {
  input: any;
  expected: any;
}

interface Case {
  id: number;
  title: string;
  description: string;
  testcases?: Testcase[];
}

interface TestcasesViewProps {
  testcases: Testcase[] | null;
}

const TestcasesView: React.FC<TestcasesViewProps> = ({ testcases }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!testcases || testcases.length === 0) {
    return <div>No testcases available</div>;
  }

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex gap-2">
        {testcases.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            // className={activeTab === index ? 'active' : ''}
            className={`cursor-pointer px-4 py-2 rounded ${activeTab === index ? 'font-bold bg-blue-500 text-white' : ''}`}
          >
            Case {index + 1}
          </button>
        ))}
      </div>

      <div className="h-full">
        {testcases[activeTab] && (
          <div>
            <h3>Input:</h3>
            {Object.entries(testcases[activeTab].input).map(([key, value]) => (
              <div key={key}>
                <strong>{key}:</strong> {JSON.stringify(value)}
              </div>
            ))}
            <h3>Expected Output:</h3>
            <div>{JSON.stringify(testcases[activeTab].expected)}</div>
          </div>
        )}
      </div>
    </div>
  );
};

interface TabbedViewProps {
  output: string | null;
  testcases: Testcase[] | null;
}

const TabbedView: React.FC<TabbedViewProps> = ({ output, testcases }) => {
  const [activeTab, setActiveTab] = useState('testcases');
  const [activeTestcase, setActiveTestcase] = useState(0);

  return (
    <div className="flex flex-col h-full gap-6 border rounded bg-gray-100">
      <div className="flex border-b">
        <button
          className={`p-4 w-full text-center ${activeTab === 'testcases' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
          onClick={() => setActiveTab('testcases')}
        >
          Testcases
        </button>
        <button
          className={`p-4 w-full text-center ${activeTab === 'testresult' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
          onClick={() => setActiveTab('testresult')}
        >
          Test Result
        </button>
      </div>

      <div className="flex flex-row gap-6 h-full p-4">
        {activeTab === 'testcases' && (
          <TestcasesView testcases={testcases}/>
        )}

        {activeTab === 'testresult' && (
          <div className="p-6 w-full">
            <p>Input</p>
            <p></p>
            <p>Output</p>
            <p>{output}</p>
            <p>Expected</p>
            <p></p>
          </div>
        )}
      </div>
    </div>
  );
};

interface CaseEditorProps {
  case_id: string;
}

const CaseEditor: React.FC<CaseEditorProps> = ({ case_id }) => {
  const [caseDetails, setCaseDetails] = useState<Case | null>(null);
  const [lang, setLang] = useState("python");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getCaseDetails = async () => {
    try {
      const data = await fetchCase(case_id!);
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
      const data = await runCode(case_id, code, lang);
      console.log(data.output)
      setOutput(data.output);
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
    <div className="flex flex-col p-6 gap-6">
      <div className="flex justify-center gap-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleRunCode}
        >
          Run
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
      <div className="flex h-screen gap-6">
        <div className="w-1/3 p-4 border rounded bg-gray-100">
          <h1 className="text-2xl font-bold mb-2">{caseDetails.title}</h1>
          <p>{caseDetails.description}</p>
        </div>

        <div className="w-2/3 flex flex-col gap-6">
          <select
            className="p-2 border rounded"
            value={lang}
            onChange={(e) => {
              setLang(e.target.value);
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

          <div className="border rounded">
            <Editor
              height="300px"
              language={lang === "cpp" ? "cpp" : lang}
              theme="vs-dark"
              value={code}
              onChange={(val) => setCode(val || "")}
            />
          </div>

          <TabbedView output={output} testcases={caseDetails.testcases || null} />

          {/* <div className="flex flex-row h-full gap-6 pt-6">
            <div className="p-6 border rounded bg-gray-100 w-full">
              <h1>Testcase</h1>
              <p></p>
            </div>
            <div className="p-6 border rounded bg-gray-100 w-full">
              <h1>Test Result</h1>
              <p>Input</p>
              <p></p>
              <p>Output</p>
              <p>{output}</p>
              <p>Expected</p>
              <p></p>
            </div>
          </div> */}
        </div>
      </div>
    </div>

    
  );
};

export default CaseEditor