import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from '../src/Layouts/PageLayout/PageLayout.jsx';
import HomePage from './pages/Home/HomePage.jsx';
import AuthPage from './pages/Auth/AuthPage';
import ProfilePage from './pages/Profile/ProfilePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <PageLayout> {/* 💡 Wrap everything here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />

        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
