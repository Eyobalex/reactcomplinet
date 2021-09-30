import React from 'react'
import { Link } from 'react-router-dom'
import AdminHome from './AdminHome'

import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import FeedBacks from './FeedBacks';
import { useDispatch } from 'react-redux';

import {logout} from '../../store/actions/auth';

export default function Dashbord({ component : Component}) {
    let adminhome ='/admin';

    let feedbacks='/admin/feedBacks';
    
  const dispatch = useDispatch();
  const history = useHistory();
    return (
        <div>
            <input type="checkbox" id="nav-toggle" />
            <div className="sidebar">
            {/*Secciones-del-tablero*/}
            <div style={{marginTop: '50px'}} className="sidebar-menu">
                <ul>
                <li>
                    <Link to={adminhome}><span className="las la-home" />
                    <span>Users</span></Link>
                </li>
                <li>
                    <Link to={feedbacks}><span className="las la-book-medical" />
                    <span>View feedback</span></Link>
                </li>
                <li>
                 <Link to='/login' onClick={() => dispatch(logout(history))}><span className="las la-medical">
                     Logout</span></Link>
             </li>
                </ul>
            </div>
            </div>


            <Component />


            
        </div>
    )
}
