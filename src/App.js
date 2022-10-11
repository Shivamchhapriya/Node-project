import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './components/footer';
import Signup from './components/signUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/login';
import AddProduct from './components/Addproduct';
import ProductL from './components/productList';
import ProductList from './components/productList';
import UpdateProduct from './components/updateProduct';
import Validation from './components/validation';
import RegistrationView from './components/validation';
import Formiks from './validations/formityup';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Nav/>
      <Routes>
      <Route  element={<PrivateComponent/>}>
        {/* == */}
      {/* <Route path='/' element={<RegistrationView/>}/> */}
      {/* <Route  path='/' element={<Formiks/>}/> */}
      {/* == */}

        <Route path='/' element={<ProductList/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update/:id' element={<UpdateProduct/>}/>
        <Route path='/logout' element={<h1>product logout</h1>}/>
        <Route path='/profile' element={<h1>product profile</h1>}/>
        </Route>


        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
      </BrowserRouter> 
      {/* <Footer/> */}

      {/* <Filter/> */}
      {/* <PDF/> */}
    </div>
  );
}

export default App;
