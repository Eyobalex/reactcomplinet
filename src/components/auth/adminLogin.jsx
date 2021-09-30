import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {clientLogin, adminLogin} from '../../store/actions/auth';
import Alert from '../Alert';
const AdminLogin = () => {
  let signup='/adminSignup';
  const {register, handleSubmit, formState: {errors}} = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const {errors: errs, messages} =  useSelector(state =>state.feedback);
  const login = data => {
    dispatch(adminLogin(data, history));
  }


  console.log("login",errs)

return (
  <div>
    <div>
      <div
        className="bg-image"
        style={{
          backgroundImage: "url(images/logoos.jpg)",
          width: "100vw",
          height: "100vh",
        }}
      >

{(errs != '' ) && (
        <Alert errors={errs} />
      )}

      {(messages != '')&& (
        <Info messages={messages} />
      )}
        <div>
          <div
            style={{ paddingTop: "8%", zIndex: 1 }}
            className="row justify-content-center"
          >
            <div
              className="col-lg-4 col-md-9 col-sm-6"
              style={{
                borderColor: "rgb(129, 121, 121)",
                borderRadius: "5px",
                backgroundColor: "rgb(250, 250, 250)",
              }}
              data-aos="fade"
            >
              <h2
                className="mb-5 text-black"
                style={{
                  textAlign: "center",
                  textDecoration: "solid",
                  fontStyle: "normal",
                  paddingTop: "15px",
                }}
              >
                Log In
              </h2>

              <form onSubmit={handleSubmit(login)}>
                <div className="row form-group">
                  <div className="col-md-12">
                    <input
                      {...register("email", {required: "email can't be empty"})}
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        borderRadius: "20px",
                      }}
                      placeholder="Email"

                      type="email"
                      id="email"
                      className="form-control"
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <input
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        borderRadius: "20px",
                      }}
                      
                      {...register("password",{required: "password can't empty"})}
                      placeholder="Password"
                      type="password"
                      id="password"
                      className="form-control"
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                  </div>
                </div>
                
                <div className="row form-group">
                  <div className="col-12">
                    <p>
                      No account yet? <a href={signup}>Register</a>
                    </p>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <button type="submit" className="btn btn-primary" > Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
export default AdminLogin