import { ReactElement, useRef, useState } from "react";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";
import bundler from "./bundler";
import "./index.css";

const App = (): ReactElement => {
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
export default App;
