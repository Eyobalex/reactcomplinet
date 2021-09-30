import React from 'react'

export default function Alert({errors}) {
    return (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">

        {errors}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
}
