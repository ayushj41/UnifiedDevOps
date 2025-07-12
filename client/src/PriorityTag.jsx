const priorityColors = {
  'High': {
    normal: 'bg-red-700',
    light: 'bg-red-500',
  },
  'Medium': {
    normal: 'bg-yellow-700',
    light: 'bg-yellow-500',
  },
  'Low': {
    normal: 'bg-green-700',
    light: 'bg-green-500',
  },
};

const PriorityTag = ({ priority, light }) => {
  const color = priorityColors[priority]?.[light ? 'light' : 'normal'] || 'bg-gray-700';
  return (
    <span className={`px-3 py-1 rounded-xl text-xs font-semibold text-white ${color}`}>
      {priority}
    </span>
  );
};

export default PriorityTag; 