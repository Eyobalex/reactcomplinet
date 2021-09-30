
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedbacks } from '../../store/actions/admin';

const FeedBacks = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {dispatch(getFeedbacks())
  }, [dispatch]);

  const {feedbacks, errors, messages} = useSelector(state =>{
    console.log("ijiji",state.admin)
    return state.admin;

  } )
return(



<div>
<div className="main-content">
  <header>
    <h4>
      <label htmlFor="nav-toggle">
        <span className="las la-bars" />
      </label> Feedback Dashboard
    </h4>
  </header>
  <main>
    {/*Tabla*/}
    <div className="recent-grid">
      <div className="projects">
        <div className="card">
          <div className="card-header">
            <h3>Feedbacks</h3>
          </div>
          <div className="card-body">
            <div className="table-responsive">
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
                  {feedbacks.map(feedback => (
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
                                  <p>There is no pdf for this Feedback</p>
                                )}
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

)}

export default FeedBacks

