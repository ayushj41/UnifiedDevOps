import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import AccountSettingsPage from './AccountSettingsPage.jsx';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/account-settings" element={<AccountSettingsPage />} />
    </Routes>
  );
}

export default App;
