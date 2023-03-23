import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoadingBar(){
  const notify = () => toast.success("Loading...");

  return (
    <div>
      <button onClick={notify} className="bg-black hover:bg-darkgray text-white font-bold py-1 px-10 rounded-full">
        Tekan Aku, Ayo !!!
      </button>
      <ToastContainer />
    </div>
  );
}