import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers, setAccountStatus } from '../../store/actions/admin';
import Alert from '../Alert';
import Info from '../Info';

const AdminHome = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])
    
  const {users, errors, messages} = useSelector((state) =>{
    console.log('adh state',  state.admin);
    return  state.admin;
  } );
return(


    <div>
   
    <div className="main-content">
      <header>
        <h4>
          <label htmlFor="nav-toggle">
            <span className="las la-bars" />
          </label> User Dashboard
        </h4>
      </header>
      <main>

      {(errors != '' ) && (
              <Alert errors={errors} />
            )}
            {(messages != '' ) && (
              <Info messages={messages} />
            )}
        {/*Tabla*/}
        <div className="recent-grid">
          <div className="projects">
            <div className="card">
              <div className="card-header">
                <h3>User List</h3>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Disabled</td>
                        <td>Verified</td>
                      </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                      <tr key={user._id}>
                          <td>{user.name}</td>
                          <td> {user.email}</td>
                          <td> {user.disable ? 'disabled' : 'activated'}</td>
                          <td> {user.verified ? 'verified' : 'unverified'}</td>
                            <td>
                              <button
                              // disabled={user.disable ? false: true}
                              disabled={user.disable}
                              onClick={() => dispatch(setAccountStatus(user._id, true))}
                              style={{color: 'rgb(255, 0, 0)'}} className="btn"><i className="
                                                    la la-cut" /> Disable</button>
                            </td>
                            <td>
                              <button
                              disabled={!user.disable}
                              onClick={() => dispatch(setAccountStatus(user._id, false))}
                               style={{color: 'rgb(29, 136, 29)'}} className="btn"><i className="
                                                    la la-pencil-square" /> Activate</button>
                            </td>
                      </tr>

                        ))}
                        
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

)
    }




    export default AdminHome
