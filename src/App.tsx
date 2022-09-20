import { ReactElement } from "react";
import CodeCell from "./components/CodeCell";

const App = (): ReactElement => {
  return (
    <div>
      <CodeCell />
      <CodeCell />
    </div>
  );
};
export default App;
