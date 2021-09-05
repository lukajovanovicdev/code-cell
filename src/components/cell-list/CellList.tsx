import { useTypedSelector } from '../../hooks/useTypedSelector';
import CellListItem from './cell-list-item';
import AddCell from './cell-list-item/add-cell';
import React from 'react';

const CellList: React.FC = () => {
  // @ts-ignore
  const cells = useTypedSelector(({ cells: { order, data } }) => order.map((id: any) => data[id]));

  const renderedCells = cells.map((cell: any) => (
    <React.Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </React.Fragment>
  ));

  return (
    <div>
      <AddCell visible={cells.length === 0} previousCellId={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
