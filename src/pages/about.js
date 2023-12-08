import React from 'react'
//import {useState} from 'react';
import { HashLink } from 'react-router-hash-link'
import Markdown from 'react-markdown'

var data = require("../content")

export default function About() {

    return (
      <div>
      <div className='h-[100vh] p-10 w-full bg-fish relative' id="1">
          <div className='pb-[125px]'>
              <h1 className='text-6xl heading'>ABOUT THE PROJECT</h1>
          </div>
          <div>
            <Markdown className='pb-3'>{data.abt1}</Markdown>
            <Markdown className='pb-3'>{data.abt2}</Markdown>
            <Markdown className='pb-3'>{data.abt3}</Markdown>
          </div>
      
          <div className='px-10 absolute bottom-5 grid w-screen place-items-center z-10'>
            <HashLink to="#tools">
              <img className="aspect-square h-[25px]" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Arrow_bottom_svg.svg" alt="down arrow"/>
            </HashLink>
          </div>  
          </div>

      <div className='h-[100vh] p-10 w-full bg-fish relative' id="tools">
        <div className='pb-[75px]'>
          <h1 className='text-6xl heading'>TOOLS USED</h1>
          
        </div>
        <div>
          <Markdown className='pb-3'>{data.abt_tls1}</Markdown>
          <Markdown className='pb-3'>{data.abt_tls2}</Markdown>
        </div>
        {/*
        <div className='px-10 absolute bottom-5 grid w-screen place-items-center z-10'>
          <HashLink to="#ref">
            <img className="aspect-square h-[25px]" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Arrow_bottom_svg.svg" alt="down arrow"/>
          </HashLink>
        </div>  
        */}
      </div>
      {/*
      <div className='h-[100vh] p-10 w-full bg-fish relative' id="ref">
        <div className='pb-[75px]'>
          <h1 className='text-6xl heading'>REFERENCES</h1>
        </div>
        <div>
            <Markdown className='pb-3'>{data.abt_ref1}</Markdown>
            <Markdown className='pb-3'>{data.abt_ref2}</Markdown>
          </div>
      </div>
      */}
      </div>
    )
  }
