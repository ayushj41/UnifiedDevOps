import Table from './Table.jsx';
import StatusTag from './StatusTag.jsx';

const columns = [
  { Header: 'Release', accessor: 'release', className: 'font-bold' },
  { Header: 'Type', accessor: 'type', className: 'font-bold' },
  { Header: 'Status', accessor: 'status', Cell: row => <StatusTag status={row.status} light />, className: 'font-bold' },
  { Header: 'Date', accessor: 'date', className: 'font-bold' },
];

const dummyReleases = [
  { release: 'v1.0.0', type: 'Upcoming', status: 'Scheduled', date: '2023-09-25' },
  { release: 'v0.9.0', type: 'Current', status: 'Live', date: '2023-09-15' },
  { release: 'v0.8.1', type: 'Breakfix', status: 'Completed', date: '2023-09-10' },
];

const ReleaseManagementTable = () => (
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
        {dummyReleases.map((release, i) => (
          <tr key={release.release} className="border-t border-devflow-border-light hover:bg-devflow-bg/80 transition">
            <td className="table-body-cell px-6 py-4 table-cell-normal">{release.release}</td>
            <td className="table-body-cell px-6 py-4 table-cell-normal">{release.type}</td>
            <td className="table-body-cell px-6 py-4"><StatusTag status={release.status} light /></td>
            <td className="table-body-cell px-6 py-4">{release.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ReleaseManagementTable; 