import Table from './Table.jsx';
import StatusTag from './StatusTag.jsx';

const columns = [
  { Header: 'Pipeline', accessor: 'pipeline', className: 'font-bold' },
  { Header: 'Status', accessor: 'status', Cell: row => <StatusTag status={row.status} light />, className: 'font-bold' },
  { Header: 'Last Run', accessor: 'lastRun', className: 'font-bold' },
  { Header: 'Duration', accessor: 'duration', className: 'font-bold' },
  { Header: 'Commit', accessor: 'commit', className: 'font-bold' },
];

const dummyPipelines = [
  { pipeline: 'Build Pipeline', status: 'Success', lastRun: '2023-09-21 10:00 AM', duration: '5 min', commit: 'Commit 12345' },
  { pipeline: 'Test Pipeline', status: 'Failed', lastRun: '2023-09-21 10:10 AM', duration: '2 min', commit: 'Commit 12345' },
  { pipeline: 'Deploy Pipeline', status: 'Pending', lastRun: '2023-09-21 10:15 AM', duration: '-', commit: 'Commit 12345' },
];

const CICDStatusTable = () => (
  <div className="overflow-x-auto rounded-xl shadow-md">
    <table className="min-w-full text-sm bg-devflow-component-bg rounded-xl overflow-hidden">
      <thead>
        <tr className="table-header-row">
          {columns.map(col => (
            <th key={col.accessor} className={`table-header-cell px-6 py-4 font-bold text-base`}>{col.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dummyPipelines.map((pipeline, i) => (
          <tr key={pipeline.pipeline} className="border-t border-devflow-border-light hover:bg-devflow-bg/80 transition">
            <td className="table-body-cell px-6 py-4 table-cell-normal">{pipeline.pipeline}</td>
            <td className="table-body-cell px-6 py-4"><StatusTag status={pipeline.status} light /></td>
            <td className="table-body-cell px-6 py-4">{pipeline.lastRun}</td>
            <td className="table-body-cell px-6 py-4">{pipeline.duration}</td>
            <td className="table-body-cell px-6 py-4">{pipeline.commit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CICDStatusTable; 