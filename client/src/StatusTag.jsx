const statusColors = {
  'In Progress': {
    normal: 'bg-blue-600',
    light: 'bg-blue-500',
  },
  'Completed': {
    normal: 'bg-green-600',
    light: 'bg-green-500',
  },
  'In Review': {
    normal: 'bg-yellow-600',
    light: 'bg-yellow-500',
  },
  'To Do': {
    normal: 'bg-gray-600',
    light: 'bg-gray-500',
  },
  'Blocked': {
    normal: 'bg-red-600',
    light: 'bg-red-500',
  },
  'Success': {
    normal: 'bg-green-600',
    light: 'bg-green-500',
  },
  'Failed': {
    normal: 'bg-red-600',
    light: 'bg-red-500',
  },
  'Pending': {
    normal: 'bg-yellow-600',
    light: 'bg-yellow-500',
  },
  'Current': {
    normal: 'bg-blue-700',
    light: 'bg-blue-500',
  },
  'Upcoming': {
    normal: 'bg-purple-700',
    light: 'bg-purple-500',
  },
  'Breakfix': {
    normal: 'bg-orange-700',
    light: 'bg-orange-500',
  },
  'Scheduled': {
    normal: 'bg-purple-600',
    light: 'bg-purple-400',
  },
  'Live': {
    normal: 'bg-green-700',
    light: 'bg-green-400',
  },
};

const StatusTag = ({ status, light }) => {
  const color = statusColors[status]?.[light ? 'light' : 'normal'] || 'bg-gray-700';
  return (
    <span className={`px-3 py-1 rounded-xl text-xs font-semibold text-white ${color}`}>
      {status}
    </span>
  );
};

export default StatusTag; 