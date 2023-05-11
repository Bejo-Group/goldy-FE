import React from 'react';
import { Link } from "react-router-dom";

function ToTips() {
  return (
    <>
    <Link to="/tips">
      <div className="mx-10 my-36 p-16 bg-tips text-white rounded-3xl h-[395px] flex items-center">
          <div>
              <p className='font-bold text-h-xl'>Tips Berinvestasi Emas</p>
              <p className='text-h-md'>Tips yang memungkinkan kamu dapat melakukan investasi emas dengan tepat.</p>
          </div>        
      </div>
    </Link>

    </>
  )
}

export default ToTips