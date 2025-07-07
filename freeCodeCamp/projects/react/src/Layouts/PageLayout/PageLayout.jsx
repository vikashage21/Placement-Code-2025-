import { useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';

function PageLayout({ children }) {
  const { pathname } = useLocation();
  const showSidebar = pathname !== '/auth';

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
