import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { clientSignup } from '../../store/actions/auth';
import Alert from '../Alert';
import Info from '../Info';


const SignUp = () => {
    let login='/login';

    const {register, handleSubmit, formState: {errors}} = useForm();
  const dispatch = useDispatch();
  const history = useHistory();


  const signup = data => {
    dispatch(clientSignup(data, history));
  }

  

  const {errors: errs, messages} =  useSelector(state =>{
    console.log("signup", state.feedback)
    return state.feedback
  });
return(
<div>
<div>
       
      {(errs != '' ) && (
        <Alert errors={errs} />
      )}

      {(messages != '')&& (
        <Info messages={messages} />
      )}
        <div className="bg-image" style={{backgroundImage: 'url(images/logoos.jpg)', width: '100vw', height: '100vh'}}>
          <div>
            <div style={{paddingTop: '55px'}} className="row justify-content-center">
              <div style={{borderColor: 'rgb(129, 121, 121)', borderRadius: '5px', backgroundColor: 'rgb(250, 250, 250)'}} className="col-md-4 mb-5" data-aos="fade">
                <h2 className="mb-5 text-black" style={{textAlign: 'center', textDecoration: 'solid', fontStyle: 'normal', paddingTop: '5px'}}>Register</h2>
                <form onSubmit={handleSubmit(signup)}>
                <div className="row form-group">
                  <div className="col-md-12">

                  <div className="row form-group">
                  <div className="col-md-12">
                    <input
                      {...register("name", {required: "name can't be empty"})}
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        borderRadius: "20px",
                      }}
                      placeholder="Name"

                      type="name"
                      id="name"
                      className="form-control"
                    />
                    {errors.name && <p>{errors.name.message}</p>}

                    </div>
                    </div>
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
                      No account yet? <a href={login}>Log in</a>
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

)
}



export default SignUp