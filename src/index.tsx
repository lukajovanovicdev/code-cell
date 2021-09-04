import ReactDom from 'react-dom';
import CodeCell from './components/code-cell';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

const App = () => {
  return (
    <div>
      <CodeCell />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
