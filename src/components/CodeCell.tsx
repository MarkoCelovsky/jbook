import { ReactElement, useState } from "react";
import CodeEditor from "./CodeEditor";
import Preview from "./Preview";
import bundler from "../bundler";
import "./index.css";

const CodeCell = (): ReactElement => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = async () => {
    const bundledCode = await bundler(input);
    setCode(bundledCode);
  };

  return (
    <div>
      <CodeEditor onChange={(evt) => setInput(evt)} />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};
export default CodeCell;
