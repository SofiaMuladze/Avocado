import { BrowserRouter } from "react-router-dom"

import Pages from "./pages/Pages";
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Category from './components/Category/Category';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
