import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Main from './component/Main.js'
import Sneaker from './component/Sneaker.js'
import TinTuc from './component/TinTuc.js'
import About from './component/About.js'
import Detail from './component/Detail.js'
import Login from './component/Login.js'
function App() {
  return (
    <>

  <header className="container-fluid">
    <div className="row bg-hd">
      <div className="top-head col-md-7 col-sm-4 col-5">
        <div className='connect'>
        <a href="https://www.facebook.com/chipeechip" data-toggle="tooltip" data-placement="top" title="FaceBook" target="_blank"><i className="fab fa-facebook"></i> Facebook</a>|
        <a href={`mailto:${"phiyenlop9a5dt@gmail.com"}`} data-toggle="tooltip" data-placement="top" title="Mail" target="_blank"><i className="fa fa-envelope-open-text"></i> Gmail</a>
        </div>
      </div>
      <div className="acc">
        <a href="registration.html" data-toggle="tooltip" data-placement="top" title="Nhanh tay đăng ký để trở thành thành viên của In's Store nhé!"><i className="fas fa-key"></i> Đăng Ký </a>|
        <Link to="/login" data-toggle="tooltip" data-placement="top" title="Đăng nhập mau nào bạn ơi!"><i className="fas fa-user-tie"></i> Đăng Nhập</Link>
      </div>
    </div>
  </header> 

  <div className="menu-bar">
    <a href="/"><img src="./assets/Img/Assets/icon.png" width="50px" height="50px"/></a>
    <Link to="/">Trang Chủ</Link>
    <Link to="/sneaker">Sneaker Fest</Link>
    <Link to="/detail">Ưu đãi</Link>
    <Link to="/tintuc">Tin Tức</Link>
    <Link to="/about">About Us</Link>
    <form className="form-inline search-box">
      <input className="search-txt" type="search" placeholder=" Tìm Kiếm Sản Phẩm"/>
      <a className="search-btn btn mx-auto" type="submit" data-toggle="tooltip" data-placement="top" title="Tìm kiếm sản phẩm"><i className="fas fa-search"></i></a>
    </form>
    <div className="pl-3 d-inline show-cart" data-toggle="tooltip" data-placement="top" title="Giỏ hàng hiện tại của bạn"><i className="fas fa-cart-plus"></i></div>
  </div>

  <a href="Uu-dai.html"><img src="./assets/Img/Giay/BannerHunter.jpg" alt="" width="100%"/></a>
  
  
  <Routes>
  <Route exact path='/' element={< Main />}></Route>
  <Route exact path='/sneaker' element={< Sneaker />}></Route>
  <Route exact path='/tintuc' element={< TinTuc />}></Route>
  <Route exact path='/about' element={< About />}></Route>
  <Route exact path='/detail' element={< Detail />}></Route>
  <Route exact path='/login' element={< Login />}></Route>
  </Routes>

  <footer className="container-fluid" id="footer">
  <div className="container-fluid">
    <div className="row justify-content-center text-center mt-4 ">
      <div className="col-4 special">
        <p><i className="fas fa-history"></i> MIỄN PHÍ 3 NGÀY ĐỔI HÀNG</p>
      </div>
      <div className="col-4 special">
        <p><i className="fas fa-car"></i> MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</p>
      </div>
      <div className="col-4 special">
        <p><i className="fas fa-money-check-alt"></i> THANH TOÁN KHI NHẬN HÀNG</p>
      </div>
    </div>
  </div>
    <div className="row pt-3 pb-3 bg-light dk pt-5">
        <div className="col-lg-6 col-md-12 col-sm-12">
            <h4>Đăng kí nhận bản tin Phi Yến</h4>
            <p>Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn</p>
        </div>
        <div className="col-lg-4 col-md-10 col-sm-9">
            <div className="form-group">
                <input className="form-control" type="text" placeholder="Địa chỉ email của bạn"/>
            </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-3">
            <button className="btn btn-primary">Đăng Ký</button>
        </div>
    </div>
    <div className="row mt-3 m2">
        
        <div className="ft col-lg-3 col-md-6 col-sm-6 col-12">
            <p>HỖ TRỢ KHÁCH HÀNG</p>
            <p><a href="">Các câu hỏi thường gặp</a></p>
            <p><a href="">Gửi yêu cầu hỗ trợ </a></p>
            <p><a href="">Hướng dẫn đặt hàng</a></p>
            <p><a href="">Phương thức vận chuyển</a></p>
            <p><a href="">Chính sách đổi trả</a></p>
            <p><a href="">Chính sách hàng nhập khẩu</a></p>
            <p><a href="">Báo lỗi bảo mật</a></p>
        </div>
        <div className="ft col-lg-3 col-md-6 col-sm-12 col-12">
            <p>NEW</p>
            <p><a href="Store-Locate.html">Cửa Hàng</a></p>
            <p><a href="Ve-chung-toi.html">Về Chúng Tôi</a></p>
        </div>
        <div className="ft col-lg-3 col-md-6 col-sm-12 pttt col-12">
            <p>PHƯƠNG THỨC THANH TOÁN</p>
            <div className="pay">
            <img src="./assets/Img/Assets/visa.svg" alt=""/>
            <img src="./assets/Img/Assets/mastercard.svg" alt=""/>
            <img src="./assets/Img/Assets/jcb.svg" alt=""/>
            
            <img src="./assets/Img/Assets/cash.svg" alt=""/>
            <img src="./assets/Img/Assets/internet-banking.svg" alt=""/>
            <img src="./assets/Img/Assets/installment.svg" alt=""/>
            </div>
        </div>
    </div>
    <div className="row bg-light">
        <div className="col bq">© 2020 - Bản quyền của Phi Yến</div>
    </div>
    <div className="row bg-light">
        <div className="col bq">
            Trường Đại Học Hùng Vương TP.HCM
        </div>
    </div>
</footer>
<button onclick="topFunction()" id="myBtn"><i className="fas fa-arrow-up"></i></button> 
    </>
  );
}

export default App;
