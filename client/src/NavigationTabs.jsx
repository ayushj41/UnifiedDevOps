const tabs = [
  'User Stories',
  'CI/CD Status',
  'Release Management',
  'Roadmap',
];

const NavigationTabs = ({ activeTab, onTabChange }) => (
  <div className="flex gap-8 border-b border-devflow-border-dark mt-8 mb-6">
    {tabs.map((tab, idx) => (
      <button
        key={tab}
        className={`pb-3 pt-2 text-base font-medium focus:outline-none transition-colors ${
          activeTab === idx
            ? 'border-b-2 border-devflow-text-white text-devflow-text-white'
            : 'border-b-2 border-transparent text-devflow-text-light-gray hover:text-devflow-text-white'
        }`}
        onClick={() => onTabChange(idx)}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default NavigationTabs; 