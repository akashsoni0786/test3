import './App.css';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './Nav';

const Home = lazy(()=>import("./Home"))
const Product = lazy(() => import ("./Product"))

function App() {
  return (
    <div className="App">
        <Navbar />
      <Suspense fallback={<h1>Loading......</h1>}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Product />}/>
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
