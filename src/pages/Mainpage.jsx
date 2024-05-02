import React from 'react'
import { BsBasket3Fill } from "react-icons/bs";

function Mainpage() {
  return (
    <>
    <div className='h-screen flex items-center justify-center'>

            <div className='grid grid-rows-2 text-center gap-5'>
                <b className='text-white text-4xl font-semibold flex'>ESRA M <BsBasket3Fill className='text-red-600'/> RKET</b>
                <i className='font-semibold font-mono text-red-500 animate-pulse transition-all'>çok yakında buradayız...</i>
            </div>


        <div className=''>
            <strong className='text-white'></strong>
        </div>

    </div>
    </>
  )
}

export default Mainpage