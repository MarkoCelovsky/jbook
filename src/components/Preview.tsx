import { ReactElement, useEffect, useRef } from "react";

interface Props {
  code: string;
}

const Preview = ({ code }: Props): ReactElement => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdc = html;
    iframe.current.contentWindow.postMessage(code, "*");
  }, [code]);

  return (
    <iframe
      ref={iframe}
      sandbox="allow-scripts"
      srcDoc={html}
      title="Preview"
    />
  );
};

const html = `
<html>
  <head></head>
  <body>
    <div id="root"></div>
    <script>
      window.addEventListener('message', (event) => {
        try {
          eval(event.data);
        } catch (err) {
          const root = document.querySelector('#root');
          root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
          console.error(err);
        }
      }, false);
    </script>
  </body>
</html>
`;

export default Preview;