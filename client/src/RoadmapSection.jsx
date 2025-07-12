import RoadmapTimeline from './RoadmapTimeline.jsx';

const RoadmapSection = () => (
  <section className="mb-12">
    <div className="bg-devflow-component-bg rounded-2xl shadow-lg p-8 border border-devflow-border-dark">
      <h2 className="text-2xl font-bold mb-8 text-center">Roadmap</h2>
      <RoadmapTimeline />
    </div>
  </section>
);

export default RoadmapSection; 