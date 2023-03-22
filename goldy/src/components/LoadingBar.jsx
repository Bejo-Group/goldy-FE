import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoadingBar(){
  const notify = () => toast.success("Loading...");

  return (
    <div>
      <button onClick={notify}>Test!</button>
      <ToastContainer />
    </div>
  );
}