
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {getMyFeedBacks} from '../../store/actions/feedback';
import Alert from '../Alert';
import Info from '../Info';


const Home = () => {
  
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getMyFeedBacks(0));
  }, [dispatch]);
  const {feedbacks, errors, messages} =  useSelector(state =>{
    console.log("Poko",state.feedback)
    return state.feedback}) ;
  console.log("home err", errors);
return(


       
        <div className="main-content">

          
          <header>
            <h4>
              <label htmlFor="nav-toggle">
                <span className="las la-bars" />
              </label> Home Dashboard
            </h4>
          </header>

          
          <main>
            {/*Tabla*/}
              {(errors != '' ) && (
               <Alert errors={errors} />
              )}
              {(messages != '' ) && (
               <Info messages={messages} />
              )}
  
            <div className="recent-grid">
              <div className="projects">
                <div className="card">
                  <div className="card-header">
                    <h3>Feedbacks</h3>
                  </div>
                 <div className="card-body">
                    <div className="table-responsive">
                      {(feedbacks.length > 0)? (
                        <table width="100%">
                        <thead>
                          <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Comment</td>
                            <td>Comment Pdf Link</td>
                          </tr>
                        </thead>
                        <tbody>
                          {feedbacks?.map(feedback => (
                            <tr key={feedback._id}>
                              <td>{feedback.name}</td>
                              <td> {feedback.email}</td>
                              <td>
                                {feedback.comment}
                              </td>
                              <td>
                                { (feedback.pdfLink ) ? (
                                  
                                  <a href={feedback.pdfLink}>donload pdf here</a>
                                ) : (
                                  <p>There is no pdf for this complaint</p>
                                )}
                              </td>
                            </tr>
                          ) )}
                          
                        </tbody>
                      </table>
                    
                      ): (
                        <p>You haven't uploaded any feedback yet.</p>
                      )}
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

    )}

export default Home