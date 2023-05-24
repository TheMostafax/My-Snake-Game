import { useState, useEffect } from 'react';
import Snake from './components/snake'
import Home from './components/home'
import About from './components/about'
import Loader from './components/preloader'
import {Routes, Route} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="snake" element={<Snake />} />
          <Route path="about" element={<About />} />
        </Routes>
      )}
    </>
  );
}

export default App;