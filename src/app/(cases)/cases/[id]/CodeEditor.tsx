"use client"

import { ForwardedRef, forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { editorTheme } from "./EditorTheme";
import CodeMirror, { EditorView, ViewUpdate } from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { MdArrowDropUp } from "react-icons/md";
import { runCase } from "@/services/api";

const LANGUAGES = {
  javascript: "JavaScript",
  python: "Python",
  java: "Java",
  cpp: "C++",
};

interface BottomPanelProps {
  line: number;
  col: number;
  language: keyof typeof LANGUAGES;
  setLanguage: (lang: keyof typeof LANGUAGES) => void;
}

const BottomPanel: React.FC<BottomPanelProps> = ({ line, col, language, setLanguage }) => {
  return (
    <div className="flex justify-between">
      <span className="text-muted text-xs/8 px-2.5">
        Ln {line}, Col {col}
      </span>
      <Listbox value={language} onChange={setLanguage}>
        <ListboxButton className="w-fit group flex items-center mx-2.5 cursor-pointer text-xs/8 text-muted">
          {LANGUAGES[language]}
          <MdArrowDropUp
            size={16}
            className="group-data-[open]:rotate-180 transition-transform"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="top end"
          transition
          className="w-fit bg-main rounded-sm text-xs/6 empty:invisible transition data-[leave]:data-[closed]:opacity-0"
        >
          {Object.entries(LANGUAGES).map(([key, name]) => (
            <ListboxOption
              key={key}
              value={key}
              className="cursor-pointer select-none px-1.5 data-[focus]:bg-panel rounded-sm"
            >
              {name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>

  );
};

interface CodeEditorProps {
  caseId: number;
  initialValue?: string;
}

export interface CodeEditorHandle {
  runCode: () => Promise<any>;
}

const CodeEditor = forwardRef(
  ({ caseId, initialValue }: CodeEditorProps, ref: ForwardedRef<CodeEditorHandle>) => {
    const [value, setValue] = useState(initialValue ?? '');
    const [cursor, setCursor] = useState({ line: 1, col: 1 });

    const [language, setLanguage] = useState<keyof typeof LANGUAGES>("javascript");

    const onChange = useCallback((val: string, viewUpdate: ViewUpdate) => {
      setValue(val);
    }, []);
    
    const runCode = async () => {
      try {
        const res = await runCase(caseId, value, language);
        return res;
      } catch (err) {
        console.log(err);
      }
    };

    useImperativeHandle(ref, () => ({
      runCode,
    }));

    return (
      <div className="flex flex-col h-full">
        <CodeMirror
          value={value}
          theme={editorTheme}
          extensions={[
            langs[language](),
            EditorView.updateListener.of((update: ViewUpdate) => {
              if (update.selectionSet) {
                const view = update.view;
                const cursor = view.state.selection.main.head;
                const line = view.state.doc.lineAt(cursor).number;
                const col = cursor - view.state.doc.line(line).from + 1;
                setCursor({ line, col });
              }
            }),
          ]}
          onChange={onChange}
        />
        <BottomPanel line={cursor.line} col={cursor.col} language={language} setLanguage={setLanguage} />
      </div>
    );
  }
)

export default CodeEditor;