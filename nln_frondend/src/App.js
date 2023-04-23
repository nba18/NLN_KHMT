import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adminpage from './pages/adminPage/adminPage';
import Qlchuyenmucpage from './pages/adminPage/qlchuyenmuc_cackhoaPage';
import Qlluanvanpage from './pages/adminPage/qlluanvanPage';
import Qlnienkhoapage from './pages/adminPage/qlnienkhoaPage';
import Themchuyenmuccackhoapage from './pages/adminPage/themchuyenmuc_cackhoaPage';
import Themluanvanpage from './pages/adminPage/themluanvanPage';
import Themnienkhoapage from './pages/adminPage/themnienkhoaPage';
import Chitietluanvanpage from './pages/chitietluanvanPage';
import Homepage from './pages/homePage';
import Loginpage from './pages/loginPage';
import Registerpage from './pages/registerPage';
import Khoapage from './pages/khoaPage';
import Yeuthichpage from './pages/userPage/yeuthichPage';
import Gioithieupage from './pages/gioithieuPage';
import Timkiempage from './pages/timkiemPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage />} />;
        <Route path='/register' element={<Registerpage />} />;
        <Route path='/login' element={<Loginpage />} />;
        <Route path='/khoa' element={<Khoapage />} />;
        <Route path='/gioithieu' element={<Gioithieupage />} />;
        <Route path='/user/dsyeuthich' element={<Yeuthichpage />} />;
        <Route path='/timkiem' element={<Timkiempage />} />;
        <Route path={`/luanvan/:id`} element={<Chitietluanvanpage />} />;
        <Route path='/admin' element={<Adminpage />} />;
        <Route path='/admin/themnienkhoa' element={<Themnienkhoapage />} />;
        <Route path='/admin/themchuyenmuccackhoa' element={<Themchuyenmuccackhoapage />} />;
        <Route path='/admin/themluanvan' element={<Themluanvanpage />} />;
        <Route path='/admin/nienkhoa' element={<Qlnienkhoapage />} />;
        <Route path='/admin/chuyenmuccackhoa' element={<Qlchuyenmucpage />} />;
        <Route path='/admin/luanvan' element={<Qlluanvanpage />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
