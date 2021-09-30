import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const AdminRoute = ({
  component: Component,
  ...rest
}) => {
    const dispatch = useDispatch();


    return (
      <Route
        {...rest}
        render={props => {
  
          if(!JSON.parse(localStorage.getItem('profile'))){
  
            console.log('not logged in');
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }else if(JSON.parse(localStorage.getItem('profile')).role === 'ADMIN'){
            console.log('client');
  
            return <Component {...props} />;
          }else{
            console.log('logged in but not client');
  
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
          
        }
      }
          />
    );
};
