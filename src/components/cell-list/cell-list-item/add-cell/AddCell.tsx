import './AddCell.css';
import { useActions } from '../../../../hooks/useActions';

interface AddCellProps {
  previousCellId: string | null;
  visible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ previousCellId, visible }) => {
  const { insertCellAfter } = useActions();
  return (
    <div className={`add-cell ${visible && 'force-visible'}`}>
      <div className="add-buttons">
        <button
          className="button is-primary is-small is-rounded"
          onClick={() => insertCellAfter(previousCellId, 'code')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Code</span>
        </button>
        <button
          className="button is-primary is-small is-rounded"
          onClick={() => insertCellAfter(previousCellId, 'text')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;
