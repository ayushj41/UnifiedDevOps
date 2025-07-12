import { useState } from 'react';
import SearchBar from './SearchBar.jsx';
import ReleaseManagementTable from './ReleaseManagementTable.jsx';

const ReleaseManagementSection = () => {
  const [search, setSearch] = useState('');
  return (
    <section className="mb-12">
      <div className="bg-devflow-component-bg rounded-2xl shadow-lg p-8 border border-devflow-border-dark">
        <h2 className="text-2xl font-bold mb-8 text-center">Release Management</h2>
        <div className="flex justify-center mb-6">
          <div className="w-full max-w-md">
            <SearchBar value={search} onChange={e => setSearch(e.target.value)} placeholder="Search releases..." />
          </div>
        </div>
        <ReleaseManagementTable />
      </div>
    </section>
  );
};

export default ReleaseManagementSection; 