const Table = ({ columns, data }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full text-sm">
      <thead>
        <tr className="table-header-row">
          {columns.map(col => (
            <th key={col.accessor} className="table-header-cell">{col.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="table-body-row">
            {columns.map(col => (
              <td key={col.accessor} className="table-body-cell">
                {typeof col.Cell === 'function' ? col.Cell(row) : row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table; 