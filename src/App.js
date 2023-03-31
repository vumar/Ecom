import { Suspense, useEffect } from 'react';
import './App.css';
import Loader from './components/common/loader';
import { useRoutes } from "react-router-dom";
import { getRoutes } from './config/routes';

function App() {
  const routes = getRoutes(1);
  const router = useRoutes(routes);

  useEffect(()=>{
    fetch('http://localhost:3000/posts')
    .then(res => console.log(res))
  },[])

  return (
    <div className="App">
      <Suspense fallback={<Loader text="page" />}>{router}</Suspense>
    </div>
  );
}

export default App;
