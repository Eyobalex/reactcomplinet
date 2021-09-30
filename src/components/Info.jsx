import React from 'react'

export default function Info({messages, success}) {
    return (
        <div className={`alert alert-${(success) ? 'success' : 'info'} alert-dismissible fade show`} role="alert">

        {messages}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
}
