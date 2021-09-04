import ReactDom from 'react-dom';
import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

const App = () => {
  return (
    <div>
      <TextEditor />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
