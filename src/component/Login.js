import React, { useState } from "react";


import "../Login.css";

export default function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="modal-dialog text-center login-form">
        <div className="col-sm-8 main-section">
            <div className="modal-content">
                <div className="col-12 user-img logo-login">
                    <a href="/"><img src="./assets/Img/Assets/icon.png" alt="" /></a>
                </div>
                <h4 className="title-block">Đăng Nhập Tài Khoản</h4>
                <form className="col-12" action="/">
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><i class="fas fa-user-tie"></i></div>
                        </div>
                        <input type="text" className="form-control" placeholder="Tài khoản" required name="username" id="username" />
                    </div>
                    <div className="input-group mb-2 textb">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fas fa-lock"></i></div>
                        </div>
                        <input type="password" className="form-control" placeholder="Mật khẩu" required name="password" id="password" />
                        <i className="show-password far fa-eye-slash"></i>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Đăng Nhập</button>
                    <div className="col-12 forgot">
                        Hoặc Đăng Nhập Bằng Tài Khoản
                    </div>
                    <div className="row text-center social">
                        <div className="col-3 fb"><i class="fab fa-facebook"></i></div>
                        <div className="col-3 gg"><i class="fab fa-google"></i></div>
                        <div className="col-3 wd"><i class="fab fa-windows"></i></div>
                    </div>
                </form>
                <div className="col-12 forgot">
                    <a href="forgot-password.html"> Quên mật khẩu? </a>
                </div>
                <div className="col-12 forgot1">
                    Bạn chưa có tài khoản? <a href="registration.html">Đăng Ký</a>
                </div>
                
            </div>
        </div>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}