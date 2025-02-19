"use client"

import { useEffect, useRef } from "react";
import { crosshairCursor, drawSelection, dropCursor, EditorView, highlightActiveLine, highlightActiveLineGutter, highlightSpecialChars, keymap, lineNumbers, rectangularSelection } from "@codemirror/view"
import { EditorState } from '@codemirror/state';
import { editorTheme, editorHighlightStyle } from "./EditorTheme";
import { defaultKeymap, history, historyKeymap, indentWithTab } from "@codemirror/commands"
import { javascript } from "@codemirror/lang-javascript"
import { foldGutter, syntaxHighlighting, defaultHighlightStyle, indentOnInput, bracketMatching, foldKeymap } from "@codemirror/language";
import { autocompletion, completionKeymap, closeBrackets, closeBracketsKeymap } from "@codemirror/autocomplete"
import { searchKeymap, highlightSelectionMatches, search } from "@codemirror/search"
import { lintKeymap } from "@codemirror/lint"

const CodeEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      const startState = EditorState.create({
        doc: 'console.log("Hello, world!");',
        extensions: [
          // minimalSetup,
          lineNumbers(),
          foldGutter(),
          highlightSpecialChars(),
          history(),
          drawSelection(),
          dropCursor(),
          EditorState.allowMultipleSelections.of(true),
          indentOnInput(),
          syntaxHighlighting(editorHighlightStyle),
          bracketMatching(),
          closeBrackets(),
          autocompletion(),
          rectangularSelection(),
          crosshairCursor(),
          highlightActiveLine(),
          highlightActiveLineGutter(),
          highlightSelectionMatches(),
          bracketMatching(),
          search(),
          keymap.of([
            ...closeBracketsKeymap,
            ...defaultKeymap,
            ...searchKeymap,
            ...historyKeymap,
            ...foldKeymap,
            ...completionKeymap,
            ...lintKeymap,
            indentWithTab
          ]),
          editorTheme,
          javascript(),
        ],
      });

      const view = new EditorView({
        state: startState,
        parent: editorRef.current,
      });

      return () => {
        view.destroy();
      };
    }
  }, []);

  return <div ref={editorRef}/>;
}

export default CodeEditor;