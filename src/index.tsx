import ReactDom from 'react-dom';
import CodeCell from './components/code-cell';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

const App = () => {
  return <CodeCell />;
};

ReactDom.render(<App />, document.querySelector('#root'));
