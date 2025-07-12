import Table from './Table.jsx';
import StatusTag from './StatusTag.jsx';
import PriorityTag from './PriorityTag.jsx';

const columns = [
  { Header: 'Story ID', accessor: 'id', className: 'font-bold' },
  { Header: 'Title', accessor: 'title', className: 'font-bold' },
  { Header: 'Status', accessor: 'status', Cell: row => <StatusTag status={row.status} />, className: 'font-bold' },
  { Header: 'Priority', accessor: 'priority', Cell: row => <PriorityTag priority={row.priority} />, className: 'font-bold' },
  { Header: 'Assignee', accessor: 'assignee', className: 'font-bold' },
  { Header: 'Last Updated', accessor: 'updated', className: 'font-bold' },
  { Header: 'Blocked Reason', accessor: 'blocked', className: 'font-bold' },
];

const dummyStories = [
  { id: 'US-101', title: 'Implement User Authentication', status: 'In Progress', priority: 'High', assignee: 'Alex Bennett', updated: '2023-09-20', blocked: '-' },
  { id: 'US-102', title: 'Design Landing Page', status: 'Completed', priority: 'High', assignee: 'Sophia Carter', updated: '2023-09-18', blocked: '-' },
  { id: 'US-103', title: 'Develop API Endpoints', status: 'In Review', priority: 'Medium', assignee: 'Ethan Walker', updated: '2023-09-19', blocked: '-' },
];

const UserStoriesTable = () => (
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
        {dummyStories.map((story, i) => (
          <tr key={story.id} className="border-t border-devflow-border-light hover:bg-devflow-bg/80 transition">
            <td className="table-body-cell px-6 py-4 table-cell-id">{story.id}</td>
            <td className="table-body-cell px-6 py-4 table-cell-normal">{story.title}</td>
            <td className="table-body-cell px-6 py-4"><StatusTag status={story.status} light /></td>
            <td className="table-body-cell px-6 py-4"><PriorityTag priority={story.priority} light /></td>
            <td className="table-body-cell px-6 py-4">{story.assignee}</td>
            <td className="table-body-cell px-6 py-4">{story.updated}</td>
            <td className="table-body-cell px-6 py-4">{story.blocked}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UserStoriesTable; 