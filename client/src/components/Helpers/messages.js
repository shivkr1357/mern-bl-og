import React from 'react';

export const showErrMsg = (msg) => (
   <div className='alert alert-danger' role='alert'>
      {msg}
   </div>
);

export const showSuccessMsg = (msg) => (
   <div className='alert alert-success' role='alert'>
      {msg}
   </div>
);
