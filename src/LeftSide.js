import React, { useState, useEffect } from "react";
import axios from "axios";
import './LeftSide.css'
function LeftSide() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleApi = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        alert("Your credentials Matched ");
      })
      .catch((error) => alert("Please Match Your credentials"));
  };
  return (
    <section className="Form my-4 mx-5">
      <div className="container">
        <div className="row no-gutters">
          
          <div className="col-lg-7 px-5 pt-5">
            <h1 className="font-weight-bold py-3">Vouch Digital</h1>
            <h4>sign into your account</h4>
            <form>
              <div className="form-row">
                <div className="col-lg-7">
                  <input value={email} onChange={handleEmail}
                    type="email"
                    className="form-control my-3 p-4"
                    placeholder="Enter Your Email"
                  ></input>
                </div>

                <div className="col-lg-7">
                  <input value={password} onChange={handlePassword}
                    type="password"
                    className="form-control my-3 p-4"
                    placeholder="Enter Your Password"
                  ></input>
                </div>

                <div className="form-row">
                  <div className="col-lg-7">
                    <button onClick={handleApi} type="button" className="btn1 mt-3 mb-5">
                      button
                    </button>
                  </div>
                </div>
              </div>
              
              <a href="#">Forgot password</a>
              <p className="passcode">
                Don't have account <a href="#">Register Here</a>
              </p>
            </form>
          </div>
          <div className="col-lg-5">
            <img 
              src="https://imgs.search.brave.com/uLvc80tVz4fiSiZ7n6lvnrigqTHK9_KsZMRTTeDDZ6I/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cHVibGljZG9tYWlu/cGljdHVyZXMubmV0/L3BpY3R1cmVzLzIz/MDAwMC92ZWxrYS9j/aGljYWdvLXNreWxp/bmUtYXQtbmlnaHQt/MTUwNTkyNDYwNmdV/Uy5qcGc"
              className="img-fluid"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSide;

// <div className="container">
//   <div className="row">
//     <div className="col-md-6">
//       <form>
//         <div>
//           <label>Email</label>
//           <input value={email} onChange={handleEmail} type="email" />
//         </div>
//         <div>
//           <label>Password</label>
//           <input value={password} onChange={handlePassword} type="email" />
//         </div>
//       </form>
//       <div>
//         <button className="btn btn-primary mb-3" onClick={handleApi}>
//           Login
//         </button>
//       </div>
//     </div>

//     <div className="col-md-6">
//       <img src="https://cdn.pixabay.com/photo/2020/07/08/04/07/sea-5382487__480.jpg" />
//     </div>
//   </div>
// </div>
