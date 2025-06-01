import React, { useEffect, useState } from 'react';
import Cards from './components/Cards';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Navbar from './components/Navbar';
import Liftingup from './liftingup';
// import ReactChallenge from './ReactChallenge';


function App() {
  const [isLoading, setLoading] = useState(true);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('/sample.json')
        .then(res => res.json())
        .then(data => {

          setSeries(data);
          setLoading(false); // ✅ Corrected
        });
    }, 2000);
  }, []);
  // console.log(series)


  return (
    <>

      {/* <ReactChallenge /> */}

      

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <Navbar /> */}
        <Liftingup/>
        {
          isLoading
            ? Array(6).fill(0).map((_, idx) => (
              <Skeleton key={idx} className="w-full h-96 mb-4" count={1} />
            ))
            : series.map((item) => <Cards key={item.id} items={item} />)
        }
      </div>
    </>


  );
}

export default App;
