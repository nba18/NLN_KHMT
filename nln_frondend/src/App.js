import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adminpage from './pages/adminPage/adminPage';
import Qlchuyenmucpage from './pages/adminPage/qlchuyenmuc_cackhoaPage';
import Qlluanvanpage from './pages/adminPage/qlluanvanPage';
import Qlnienkhoapage from './pages/adminPage/qlnienkhoaPage';
import Themchuyenmuc_cackhoapage from './pages/adminPage/themchuyenmuc_cackhoaPage';
import Themluanvanpage from './pages/adminPage/themluanvanPage';
import Themnienkhoapage from './pages/adminPage/themnienkhoaPage';
import Chitietluanvanpage from './pages/chitietluanvanPage';
import Homepage from './pages/homePage';
import Loginpage from './pages/loginPage';
import Registerpage from './pages/registerPage';
import Khoapage from './pages/khoaPage';
import Yeuthichpage from './pages/userPage/yeuthichPage';
import Viewpdfpage from './pages/viewpdfPage';
import Gioithieupage from './pages/gioithieuPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage />} />;
        <Route exact path='/register' element={<Registerpage />} />;
        <Route exact path='/login' element={<Loginpage />} />;
        <Route exact path='/khoa' element={<Khoapage />} />;
        <Route exact path='/gioithieu' element={<Gioithieupage />} />;
        <Route exact path='/user/dsyeuthich' element={<Yeuthichpage />} />;
        /* Admin Route*/
        <Route path={`/luanvan/:id`}element={<Chitietluanvanpage />} />;
        /* Admin Route*/
        <Route exact path='/admin' element={<Adminpage />} />;
        <Route exact path='/admin/themnienkhoa' element={<Themnienkhoapage />} />;
        <Route exact path='/admin/themchuyenmuccackhoa' element={<Themchuyenmuc_cackhoapage />} />;
        <Route exact path='/admin/themluanvan' element={<Themluanvanpage />} />;
        <Route exact path='/admin/nienkhoa' element={<Qlnienkhoapage />} />;
        <Route exact path='/admin/chuyenmuccackhoa' element={<Qlchuyenmucpage />} />;
        <Route exact path='/admin/luanvan' element={<Qlluanvanpage />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
