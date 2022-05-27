import './App.css';
import Header from './Shared/Header';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Shared/NotFound';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import AllParts from './Components/Home/AllParts';
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from './Shared/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Components/DashBoard/DashBoard';
import MyOrder from './Components/DashBoard/NormalUser/MyOrder';
import MyProfile from './Components/DashBoard/MyProfile';
import AddReview from './Components/DashBoard/NormalUser/AddReview';
import Payment from './Components/DashBoard/NormalUser/Payment';
import AllUsers from './Components/DashBoard/Admin/AllUsers';
import AddProduct from './Components/DashBoard/Admin/AddProduct';
import ManageAllOrders from './Components/DashBoard/Admin/ManageAllOrders';
import ManageProducts from './Components/DashBoard/Admin/ManageProducts';
import Blogs from './Components/Blogs/Blogs';
import Portfolio from './Components/Portfolio/Portfolio';
import RequireAdmin from './hooks/RequireAdmin';
import RequireUser from './hooks/RequireUser';
function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        < Route path='/' element={<Home />} />
        < Route path='/home' element={<Home />} />


        < Route path='/booking/:id' element={<RequireAuth><Booking /></RequireAuth>} />
        < Route path='/allparts' element={<AllParts />} />
        < Route path='/blogs' element={<Blogs />} />
        < Route path='/portfolio' element={<Portfolio />} />


        <Route path='/dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>

          <Route index element={<MyProfile />}></Route>
          <Route path='myorder' element={<MyOrder />}></Route>
          <Route path='review' element={<AddReview />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>

          <Route path='makeadmin' element={<RequireAdmin><AllUsers /></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path='manageorder' element={<RequireAdmin><ManageAllOrders /></RequireAdmin>}></Route>
          <Route path='manageallproduct' element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>

        </Route>
        < Route path='/login' element={<Login />} />
        < Route path='/signup' element={<SignUp />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
