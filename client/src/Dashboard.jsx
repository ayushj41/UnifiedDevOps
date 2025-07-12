import { useState } from 'react';
import Header from './Header.jsx';
import NavigationTabs from './NavigationTabs.jsx';
import UserStoriesSection from './UserStoriesSection.jsx';
import CICDStatusSection from './CICDStatusSection.jsx';
import ReleaseManagementSection from './ReleaseManagementSection.jsx';
import RoadmapSection from './RoadmapSection.jsx';

const tabContent = [
  <UserStoriesSection key="user-stories" />,
  <CICDStatusSection key="cicd-status" />,
  <ReleaseManagementSection key="release-management" />,
  <RoadmapSection key="roadmap" />,
];

function Dashboard() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen w-screen bg-devflow-bg text-devflow-text-white overflow-x-hidden">
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <h1 className="text-32px font-bold mt-8 mb-2 text-center">Development Workflow Dashboard</h1>
        <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <section className="mt-8">
          {tabContent[activeTab]}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;