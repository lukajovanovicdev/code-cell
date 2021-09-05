import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';
import CellList from './components/cell-list';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
