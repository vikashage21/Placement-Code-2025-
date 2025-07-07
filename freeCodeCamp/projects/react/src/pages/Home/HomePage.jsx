// pages/HomePage.jsx
import Feed from '../../components/Feed.jsx/Fedd.jsx';
import Suggestions from '../../components/Suggestions/Suggestions.jsx';

function HomePage() {
  return (
    <div className="flex justify-center px-4 py-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">
        {/* Feed (main content) */}
        <div className="flex-1 flex justify-center">
          <Feed />
        </div>

        {/* Suggestions (visible on large screens only) */}
        <div className="hidden lg:block w-[300px]">
          <Suggestions />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
