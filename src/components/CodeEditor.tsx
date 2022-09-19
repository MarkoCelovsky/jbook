import { ReactElement, useRef } from "react";
import MonacoEditor, { EditorDidMount } from "@monaco-editor/react";
import prettier from "prettier";
import parser from "prettier/parser-babel";
import codeShift from "jscodeshift";
import Highlighter from "monaco-jsx-highlighter";
import "./css/editor.css";
import "./css/syntax.css";
import "bulmaswatch/superhero/bulmaswatch.min.css";

interface Props {
  initialValue?: string;
  onChange(value: string): void;
}

const CodeEditor = ({ initialValue, onChange }: Props): ReactElement => {
  const editorRef = useRef<any>();
  // const [keyStroke, setKeyStroke] = useState<string | boolean>("");

  const onEditorDidMount: EditorDidMount = (getValue, editor) => {
    editorRef.current = editor;
    editor.onDidChangeModelContent(() => {
      onChange(getValue());
    });
    const highlighter = new Highlighter(
      // @ts-ignore
      window.monaco,
      codeShift,
      editor
    );
    highlighter.highLightOnDidChangeModelContent(
      () => {},
      () => {},
      undefined,
      () => {}
    );
  };
  const onFormatClick = () => {
    const unformatted = editorRef.current.getModel().getValue();
    const formatted = prettier
      .format(unformatted, {
        parser: "babel",
        plugins: [parser],
        semi: true,
      })
      .replace(/\n$/, "");
    editorRef.current.setValue(formatted);
  };
  // window.onload = function () {
  //   document.getElementsByTagName("body")[0].onkeyup = function (e) {
  //     e.preventDefault();
  //     console.log(e.key);
  //     if (e.key == "s") {
  //       setKeyStroke((prev) => (prev === "Control" ? true : ""));
  //       if (keyStroke === true) {
  //         console.log("formating");
  //         return onFormatClick();
  //       }
  //     }
  //   };
  // };
  return (
    <div className="editor-wrapper">
      <button
        onClick={onFormatClick}
        className="button button-format is-primary is-small"
      >
        Format
      </button>
      <MonacoEditor
        value={initialValue}
        editorDidMount={onEditorDidMount}
        className="editor"
        language="typescript"
        theme="dark"
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
