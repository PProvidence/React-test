
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home'
import Products from '../pages/Products'

const App = () => {



  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
