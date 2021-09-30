import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getMyFeedBacks, deleteFeedback, createFeedback, editFeedback } from '../../store/actions/feedback';
import Alert from '../Alert';
import Info from '../Info';


const Review = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [currentFeedback, setCurrentFeedback] = useState(null);
  const {register,reset,  handleSubmit, formState: {errors}} =  useForm({
    // previousState:{
    //   name: createFeedback.name,
    //   email: createFeedback.email,
    //   comment: createFeedback.comment,
    //   file: createFeedback.file,
    // }
  });


  useEffect(() => {
    dispatch(getMyFeedBacks(0));
  }, [dispatch]);
  const {feedbacks, errors: errs, messages} =  useSelector(state =>{
    console.log("Poko",state)
    return state.feedback}) ;

  const uploadFeedback = data => {
    if (currentFeedback) {
      //update

      console.log(currentFeedback)
      const formData = new FormData();
      formData.append('feedbackId' , currentFeedback._id);
      formData.append('comment' , data.comment);
      formData.append('deletePdf' , data.deletePdf);
      formData.append('file' , data.file[0]);

      dispatch(editFeedback(formData));
      history.go(0);

    }else{
      //create

      const formData = new FormData();
      formData.append('name' , data.name);
      formData.append('comment' , data.comment);
      formData.append('email' , data.email);
      formData.append('file' , data.file[0]);

      dispatch(createFeedback(formData)); 

      // clear();
      // history.go(0);

    }


  }


  const deleteFeedbacks = data => {
    dispatch(deleteFeedback(data));
  }

  // console.log("table",errs)

  const clear= e => {
    setCurrentFeedback(null);
  }

return(

   <div className="main-content">
          <header className="mb-6">
            <h4>
              <label htmlFor="nav-toggle">
                <span className="las la-bars" />
              </label> Review Dashboard
            </h4>
          </header>

            
            <div className="recent-grid mt-6">
              <div className="projects">
                
                <div className="card">
                <div style={{height: 20, marginTop: 20, marginBottom: 20}}>
                {(errs != '' ) && (
              <Alert errors={errs} />
            )}
            {(messages != '' ) && (
              <Info messages={messages} />
            )}
                </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      {((feedbacks.length > 0) ? (
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
                                  <p>There is no pdf for this Feedback</p>
                                )}
                              </td>
                               <td>
                              <button className="btn" onClick={() => deleteFeedbacks(feedback)}><i className="
                                                    la la-close" /> Delete</button>
                            </td>
                            <td>
                              <button className="btn" onClick={() => setCurrentFeedback(feedback)}><i className="
                                                    la la-pencil-square" /> EDIT</button>
                            </td>

                            </tr>
                          ) )}
                           
                        </tbody>
                      </table>
                      ) : (
                        <p>You haven't uploaded any feedbacks yet.</p>
                      ))}
                      </div>
                  </div>
                </div>

                  <div style={{marginTop: '50px'}} className="card">
                  <div className="table-responsive">
                <form onSubmit={handleSubmit(uploadFeedback)}>
                    <div style={{marginLeft: '200px', paddingTop: '30px'}}>
                      <div  style={{width: '465px'}} className="form-group">
                      {(!currentFeedback) && (
                        <>
                        <input style={{width: '465px', paddingBottom: '15px'}} type="text" placeholder="Name" defaultValue={ (currentFeedback ? currentFeedback.name : '')} {...register('name', {required: "you need to fill in your name"})} className="form-control" />
                        {errors.name && <p className="help-block text-danger">{errors.name.message}</p>}
                        </>
                      )}
                        {(!currentFeedback) && (
                         <div style={{marginTop: '25px'}}>
                         <input style={{width: '465px'}} type="text" placeholder="Email"defaultValue={ (currentFeedback ? currentFeedback.email : '')} {...register('email', {required: "you need to fill in your email"})} className="form-control" />
                         {errors.email && <p className="help-block text-danger">{errors.email.message}</p>}
                       </div>
                        )}

                         {(currentFeedback) && (
                        <div style={{marginTop: '25px'}}>
                          Delete pdf
                          <input style={{width: '465px'}} type="checkbox"  {...register('deletePdf')} className="form-control" />
                          {errors.email && <p className="help-block text-danger">{errors.email.message}</p>}
                        </div>
                         )}
                        <div style={{paddingTop: '25px'}}>
                          <textarea style={{width: '465px'}} placeholder="Comment" defaultValue={ (currentFeedback ? currentFeedback.comment : '')}  {...register('comment')}  />
                          {errors.comment && <p className="help-block text-danger">{errors.comment.message}</p>}
                       </div>
                        <div style={{width: '465px', paddingTop: '25px', marginBottom: '50px'}}>
                          <input type="file" className="form-control" id="file" {...register('file')} defaultValue="" />
                         
                          {errors.customFile && <p className="help-block text-danger">{errors.customFile.message}</p>}
                       </div>
                        <button type="submit" className="btn btn-lg btn-primary" >Submit</button>
                        <button type="button" onClick={e => clear(e)} className="btn btn-lg btn-danger align-right" >clear</button>
                      </div>
                    </div>
                </form>
                    </div>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>

)}

export default Review

