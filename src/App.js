import logo from './logo.svg';
import './App.css';
import AddBook from './component/AddBook';
import SearchBook from './component/SearchBook';
import DeleteBook from './component/DeleteBook';
import ForView from './component/ForView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<AddBook/>}/>
  <Route path="/SearchBook" element={<SearchBook/>}/>
  <Route path="/DeleteBook" element={<DeleteBook/>}/>
  <Route path="/ForView" element={<ForView/>}/>

  
 </Routes>
 </BrowserRouter>

  )}
export default App;
