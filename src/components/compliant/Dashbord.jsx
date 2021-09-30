import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {logout} from '../../store/actions/auth';
import { useHistory } from 'react-router-dom';

export  function Dashbord({component: Component}) {
    
  let home ='/home';
  let review='/review';
  const dispatch = useDispatch();
  const history = useHistory();





    return (
        <div>
        <input type="checkbox" id="nav-toggle" />

       <div className="sidebar">
       
         <div style={{marginTop: '50px'}} className="sidebar-menu">
           <ul>
             <li>
               <Link to={home}><span className="las la-home" />
                 <span>Home</span></Link>
             </li>
             <li>
               <Link to={review}><span className="las la-book-medical" />
                 <span>Review feedback</span></Link>
             </li>
             <li>
                 <Link to='/login' onClick={() => dispatch(logout(history))}><span className="las la-book-medical">
                     Logout</span></Link>
             </li>
           </ul>
          
         </div>
       </div>

        <Component />

       </div>
       
    )
}
