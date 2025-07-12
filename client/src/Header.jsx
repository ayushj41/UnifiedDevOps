import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const location = useLocation(); // Get current location

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowProfileDropdown(false);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
    setShowNotifications(false);
  };

  const getNavLinkClass = (path) => {
    return `text-devflow-text-white hover:text-white font-medium ${location.pathname === path ? 'border-b-2 border-devflow-text-white' : ''}`;
  };

  return (
    <header className="w-full flex items-center justify-between px-8 py-4 border-b border-devflow-border-dark bg-devflow-bg relative z-10">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-devflow-text-white">◆ DevFlow</span>
      </div>
      <nav className="flex gap-8">
        <Link to="/" className={getNavLinkClass('/')}>User Stories</Link>
        <Link to="/ci-cd-status" className={getNavLinkClass('/ci-cd-status')}>CI/CD Status</Link>
        <Link to="/release-management" className={getNavLinkClass('/release-management')}>Release Management</Link>
        <Link to="/roadmap" className={getNavLinkClass('/roadmap')}>Roadmap</Link>
      </nav>
      <div className="flex items-center gap-4">
        {/* Notification Bell Icon */}
        <div className="relative">
          <button 
            className="w-10 h-10 rounded-full bg-devflow-component-bg flex items-center justify-center text-devflow-text-white hover:bg-devflow-border-light transition-colors"
            onClick={toggleNotifications}
          >
            {/* Bell icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.462-.695c1.01-.272 1.9-.91 2.722-1.637C22.664 13.91 23.002 12.017 23 10.003 23 6.945 20.04 4.5 16.5 4.5c-3.1 0-5.77 1.944-6.297 4.5h-.002a23.87 23.87 0 0 0-5.462.695C.99 10.096 0 10.875 0 12.003 0 13.92 1.795 15.688 3.5 16.5c2.474 1.13 5.405 1.577 8.007 1.493l-.004.004a.75.75 0 0 1 .153.332v3.085a.75.75 0 0 1-.75.75H8.75a.75.75 0 0 1-.75-.75v-3.085a.75.75 0 0 1-.153-.332l.004-.004a.75.75 0 0 1-.088-.415c0-1.036 0-1.036-.002-1.036s0 0 0 0a24.156 24.156 0 0 1-5.462.695c-1.01-.272-1.9-.91-2.722-1.637C1.336 13.91 1 12.017 1 10.003 1 6.945 3.96 4.5 7.5 4.5c3.1 0 5.77 1.944 6.297 4.5h.002zM12 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </svg>
          </button>
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 bg-devflow-component-bg rounded-lg shadow-xl py-2 z-20 border border-devflow-border-dark">
              <div className="px-4 py-2 text-devflow-text-white font-medium">Notifications</div>
              <Link to="/ci-cd-status" className="block px-4 py-2 text-devflow-text-light-gray hover:bg-devflow-border-dark" onClick={toggleNotifications}>Pipeline Build Failed (US-101)</Link>
              <Link to="/user-stories" className="block px-4 py-2 text-devflow-text-light-gray hover:bg-devflow-border-dark" onClick={toggleNotifications}>New PR Approved (US-102)</Link>
              <Link to="/release-management" className="block px-4 py-2 text-devflow-text-light-gray hover:bg-devflow-border-dark" onClick={toggleNotifications}>Deployment to Prod (v1.0.0)</Link>
            </div>
          )}
        </div>

        {/* User Profile Avatar */}
        <div className="relative">
          <button 
            className="w-10 h-10 rounded-full bg-devflow-button-bg flex items-center justify-center text-devflow-text-white font-bold text-lg border border-devflow-border-light hover:bg-devflow-border-light transition-colors"
            onClick={toggleProfileDropdown}
          >
            A
          </button>
          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-devflow-component-bg rounded-lg shadow-xl py-2 z-20 border border-devflow-border-dark">
              <div className="px-4 py-2 text-devflow-text-white font-medium">Ayush Jha</div>
              <Link to="/account-settings" className="block px-4 py-2 text-devflow-text-light-gray hover:bg-devflow-border-dark" onClick={toggleProfileDropdown}>Account Settings</Link>
              <a href="#" className="block px-4 py-2 text-devflow-text-light-gray hover:bg-devflow-border-dark">Logout</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;