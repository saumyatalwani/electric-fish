import React from 'react'



export default function Homepage() {
  
    return (
      <div>
        <div className='h-[100vh] w-full'>
          <h1 className='text-6xl px-10 py-10'>Electric Fish</h1>
        </div>
        <div className='h-[100vh] '>
          <a className='text-4xl px-10 py-5 float-left' href="#hist">History</a>
          <a className='text-4xl px-10 py-5 float-left clear-left' href="#where">Where?</a>
          <a className='text-4xl px-10 py-5 float-left clear-left' href="#how">How?</a>
          <a className='text-4xl px-10 py-5 float-left clear-left' href="#exp">Experiment</a>
          
        </div>
        <div className='h-[100vh]' id='hist'>
          <h2 className='text-4xl px-10 py-10'>History</h2>
          <p className='px-10'>timeline goes here</p>
        </div>
        <div className='h-[100vh]' id='where'>
          <h2 className='text-4xl px-10 py-10'>Where?</h2>
          <p className='px-10'>worldmap goes here</p>
        </div>
        <div className='h-[100vh]' id='how'>
          <h2 className='text-4xl px-10 py-10'>How?</h2>
        </div>
        <div className='h-[100vh]' id='exp'>
          <h2 className='text-4xl px-10 py-10'>Experiment</h2>
        </div>
        
      </div>
    )
  }