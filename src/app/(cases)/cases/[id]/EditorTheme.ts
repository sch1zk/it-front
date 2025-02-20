import { EditorView } from '@codemirror/view';
import {HighlightStyle, syntaxHighlighting} from "@codemirror/language"
import {tags as t} from "@lezer/highlight"

import { createTheme } from '@uiw/codemirror-themes';

// const editorTheme = EditorView.theme({
//   "&": { // применяется ко всему редактору
//     color: "#F2F2F2", // цвет текста редактора
//     // backgroundColor: "#282c34" // фоновый цвет редактора
//   },

//   ".cm-content": { // цвет курсора
//     caretColor: "#BADE4F"
//   },

//   ".cm-cursor, .cm-dropCursor": {borderLeftColor: "#BADE4F"}, // цвет курсора
//   "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {backgroundColor: "#383838"}, // цвет фона выделенного текста

//   ".cm-panels": {backgroundColor: "transparent", color: "#F2F2F2"}, //  стиль для панелей (поиск, ошибки и др.)
//   // ".cm-panels.cm-panels-top": {borderBottom: "2px solid black"},
//   // ".cm-panels.cm-panels-bottom": {borderTop: "2px solid black"},

//   ".cm-panel.cm-search": {backgroundColor: "#383838"}, //  стиль панели поиска

//   ".cm-searchMatch": { // стиль для найденных совпадений при поиске
//     backgroundColor: "#BADE4F59",
//     outline: "1px solid #BADE4F"
//   },
  
//   ".cm-searchMatch.cm-searchMatch-selected": { // цвет активного найденного совпадения
//     backgroundColor: "#BADE4F2f"
//   },

//   ".cm-activeLine": {backgroundColor: "#3838384d"}, // цвет активной строки
//   ".cm-selectionMatch": {backgroundColor: "#4d4d4d47"}, // выделение совпадающих фрагментов

//   "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": { // подсветка совпадающих/несовпадающих скобок
//     backgroundColor: "#4D4D4D"
//   },

//   ".cm-gutters": { // настройка панели номеров строк
//     backgroundColor: "transparent",
//     color: "#F2F2F2",
//     border: "none"
//   },

//   ".cm-activeLineGutter": { // выделение текущей строки
//     backgroundColor: "#3838384d", 
//   },

//   ".cm-foldPlaceholder": { // для свернутых блоков кода
//     backgroundColor: "transparent",
//     border: "none",
//     // color: "#ddd"
//   },

//   ".cm-tooltip": { // всплывающие подсказки
//     border: "none",
//     backgroundColor: "#383838"
//   },

//   ".cm-tooltip .cm-tooltip-arrow:before": { // стрелочки у всплывающей подсказки
//     borderTopColor: "transparent",
//     borderBottomColor: "transparent"
//   },

//   ".cm-tooltip .cm-tooltip-arrow:after": { // стрелочки у всплывающей подсказки
//     borderTopColor: "#353a42",
//     borderBottomColor: "#353a42"
//   },

//   ".cm-tooltip-autocomplete": { // выбранное автодополнение
//     "& > ul > li[aria-selected]": {
//       backgroundColor: "#BADE4F59",
//       color: "#F2F2F2"
//     }
//   }
// }, {dark: true})

// const editorHighlightStyle = HighlightStyle.define([
//   {
//     tag: [
//       t.keyword,
//       t.operatorKeyword,
//       t.modifier,
//       t.color,
//       t.constant(t.name),
//       t.standard(t.name),
//       t.standard(t.tagName),
//       t.special(t.brace),
//       t.atom,
//       t.bool,
//       t.special(t.variableName),
//     ],
//     color: '#569cd6',
//   },
//   { tag: [t.controlKeyword, t.moduleKeyword], color: '#c586c0' },
//   {
//     tag: [
//       t.name,
//       t.deleted,
//       t.character,
//       t.macroName,
//       t.propertyName,
//       t.variableName,
//       t.labelName,
//       t.definition(t.name),
//     ],
//     color: '#9cdcfe',
//   },
//   { tag: t.heading, fontWeight: 'bold', color: '#9cdcfe' },
//   {
//     tag: [t.typeName, t.className, t.tagName, t.number, t.changed, t.annotation, t.self, t.namespace],
//     color: '#4ec9b0',
//   },
//   { tag: [t.function(t.variableName), t.function(t.propertyName)], color: '#dcdcaa' },
//   { tag: [t.number], color: '#b5cea8' },
//   { tag: [t.operator, t.punctuation, t.separator, t.url, t.escape, t.regexp], color: '#d4d4d4' },
//   { tag: [t.regexp], color: '#d16969' },
//   { tag: [t.special(t.string), t.processingInstruction, t.string, t.inserted], color: '#ce9178' },
//   { tag: [t.angleBracket], color: '#808080' },
//   { tag: t.strong, fontWeight: 'bold' },
//   { tag: t.emphasis, fontStyle: 'italic' },
//   { tag: t.strikethrough, textDecoration: 'line-through' },
//   { tag: [t.meta, t.comment], color: '#6a9955' },
//   { tag: t.link, color: '#6a9955', textDecoration: 'underline' },
//   { tag: t.invalid, color: '#ff0000' },
// ])


// export { editorTheme, editorHighlightStyle };

const editorTheme = createTheme({
  theme: 'dark',
  settings: {
    background: 'transparent',
    backgroundImage: '',
    foreground: '#F2F2F2',
    caret: '#BADE4F',
    selection: '#383838',
    selectionMatch: '#4d4d4d47',
    lineHighlight: '#3838384d',
    gutterBackground: 'transparent',
    gutterForeground: '#868686',
    gutterActiveForeground: '#F2F2F2',
  },
  styles: [
    {
      tag: [
        t.keyword,
        t.operatorKeyword,
        t.modifier,
        t.color,
        t.constant(t.name),
        t.standard(t.name),
        t.standard(t.tagName),
        t.special(t.brace),
        t.atom,
        t.bool,
        t.special(t.variableName),
      ],
      color: '#569cd6',
    },
    { tag: [t.controlKeyword, t.moduleKeyword], color: '#c586c0' },
    {
      tag: [
        t.name,
        t.deleted,
        t.character,
        t.macroName,
        t.propertyName,
        t.variableName,
        t.labelName,
        t.definition(t.name),
      ],
      color: '#9cdcfe',
    },
    { tag: t.heading, fontWeight: 'bold', color: '#9cdcfe' },
    {
      tag: [t.typeName, t.className, t.tagName, t.number, t.changed, t.annotation, t.self, t.namespace],
      color: '#4ec9b0',
    },
    { tag: [t.function(t.variableName), t.function(t.propertyName)], color: '#dcdcaa' },
    { tag: [t.number], color: '#b5cea8' },
    { tag: [t.operator, t.punctuation, t.separator, t.url, t.escape, t.regexp], color: '#d4d4d4' },
    { tag: [t.regexp], color: '#d16969' },
    { tag: [t.special(t.string), t.processingInstruction, t.string, t.inserted], color: '#ce9178' },
    { tag: [t.angleBracket], color: '#808080' },
    { tag: t.strong, fontWeight: 'bold' },
    { tag: t.emphasis, fontStyle: 'italic' },
    { tag: t.strikethrough, textDecoration: 'line-through' },
    { tag: [t.meta, t.comment], color: '#6a9955' },
    { tag: t.link, color: '#6a9955', textDecoration: 'underline' },
    { tag: t.invalid, color: '#ff0000' },
  ],
});

export { editorTheme };