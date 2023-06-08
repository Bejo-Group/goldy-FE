import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar'
import Footer from './Footer'
import Chart from './ToGraphLanding'
import { Link } from "react-router-dom";
import axios from 'axios';
import MyCarousel from '../components/MyCarousel';

function Prediksi() {
  //fetch to backend
  const [input_Date, setDate] = useState(new Date());
  const [prediction, setPrediction] = useState();

  const onSubmit = async () => {
    if (input_Date === "") {
      toast.error("All field must be filled!");
      console.log("All field must be filled!")
    } else {
      axios.get("https://vallen.pythonanywhere.com/prediction", {
        params: {
          date: input_Date,
        },
      })
        .then((response) => {
          if (response.status < 400) {
            toast.success("Prediction Success!");
            setPrediction(response.data.predicted_price);
          }
          console.log(response);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  return (
    <>
      <Navbar />
      <Chart/>
      {/* <MyCarousel></MyCarousel> */}
      <div className='flex flex-col min-h-[300px]'>
        <ToastContainer />
        <div className="row flex py-10">
          <div className="column flex-[50%]">
            <div className='pl-60'>
              {/* Date Section */}
              <div className='flex'>
                <div className='text-secondary text-h-md pr-5'>Date :</div>
                <input
                  className="shadow appearance-none border rounded w-3/5 py-2 px-3 text-darkgray leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Masukkan Tanggal"
                  type="date"
                  required
                  value={input_Date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </div>

              <div>
                <Link to="">
                  <button
                    className='text-white bg-black px-20 py-1 mt-6 justify-center rounded-2xl hover:bg-darkgray hover:text-lightgray'
                    onClick={onSubmit}
                    type='button'
                  >
                    Proses
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="result column flex-[50%] text-h-md" style={{ display: "grid", placeItems: "center" }}>
            <div><strong>USD:</strong> $ {prediction}</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Prediksi;
