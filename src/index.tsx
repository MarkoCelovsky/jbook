import "bulmaswatch/superhero/bulmaswatch.min.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import TextEditor from "./components/TextEditor";
import { store } from "./state";

const App = () => {
  return (
    <div>
      <TextEditor />
    </div>
  );
};

const container = document.querySelector("#root")!;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
