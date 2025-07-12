const features = [
  { name: 'Feature A', date: 'Q4 2023' },
  { name: 'Feature B', date: 'Q1 2024' },
  { name: 'Feature C', date: 'Q2 2024' },
];

const RoadmapTimeline = () => (
  <div className="bg-devflow-component-bg p-6 rounded-lg border border-devflow-border-dark">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-22px">Overall Project Feature Completion</h2>
      <span className="text-devflow-text-white text-sm font-semibold">60%</span>
    </div>
    <div className="w-full bg-devflow-border-light rounded-full h-2 mb-8">
      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }} />
    </div>
    <ul className="space-y-6">
      {features.map((f, i) => (
        <li key={f.name} className="flex items-center gap-4">
          <span className="text-xl">��</span>
          <div className="flex flex-col">
            <span className="font-medium text-devflow-text-white">{f.name}</span>
            <span className="text-devflow-text-light-gray text-sm">{f.date}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default RoadmapTimeline; 