import { useRef, useEffect } from 'react';
import './Preview.css';

interface PreviewProps {
  code: string;
  error: string;
}

const html = `
    <html>
      <head>
        <style>html { background-color: #fff; }</style>
      </head>
      <body>
        <div id="root"></div>
        <script>
          const handleError = (err) => {
            const root = document.querySelector('#root');
            root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
            console.error(err);
          };

          window.addEventListener('error', (e) => {
            event.preventDefault();
            handleError(e.error);
          });

          window.addEventListener('message', (event) => {
            try {
              eval(event.data);
            } catch (err) {
              handleError(err);
            }
          }, false);
        </script>
      </body>
    </html>
  `;

const Preview: React.FC<PreviewProps> = ({ code, error }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);

  /* sandbox property is not allowing cross-origin access  */
  return (
    <div className="preview-wrapper">
      <iframe title="code preview" ref={iframe} sandbox="allow-scripts" srcDoc={html} />
      {error && <div className="preview-error">{error}</div>}
    </div>
  );
};

export default Preview;
