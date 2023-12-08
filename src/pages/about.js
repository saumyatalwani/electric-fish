import React from 'react'
//import {useState} from 'react';
import { HashLink } from 'react-router-hash-link'




export default function About() {

    return (
      <div>
      <div className='h-[100vh] p-10 w-full bg-fish relative' id="1">
          <div className='pb-[125px]'>
              <h1 className='text-6xl heading'>ABOUT THE PROJECT</h1>
          </div>
          <div>
            <p className='pb-3'>This website is a part of a voluntary project done by **Hardi Talwani** at the **Ratnam Electrophysiology Lab** at School of Arts and Sciences, Ahmedabad University.</p>
            <p className='pb-3'>Electric fish have provided insights into a wide range of topics, including neural coding, sensorimotor integration, and evolutionary biology. Despite extensive research on the subject, many questions about these creatures remain unanswered, making them a fascinating subject of study in biology and neurobiology.</p>
            <p className='pb-3'>Electric fish can be difficult to understand for those without a background in biology or neuroscience. Whenever an attempt was made to explain the experimental projects to a non-scientific audience, they found it engaging but difficult to grasp. Therefore, the idea here was to create a multimedia page to present complex information in an engaging and accessible way.</p>
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
            <p className='pb-3'>Various different multimedia tools, such as timeline.js and genially, were used to make the content more appealing.</p>
            <p className='pb-3'>AI art generators such as DALL-E by Open AI and Dream by WOMBO were used to develop background images.</p>
            <p className='pb-3'></p>
          </div>
        <div className='px-10 absolute bottom-5 grid w-screen place-items-center z-10'>
          <HashLink to="#ref">
            <img className="aspect-square h-[25px]" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Arrow_bottom_svg.svg" alt="down arrow"/>
          </HashLink>
        </div>  
      </div>
      <div className='h-[100vh] p-10 w-full bg-fish relative' id="ref">
        <div className='pb-[75px]'>
          <h1 className='text-6xl heading'>REFERENCES</h1>
        </div>
        <div>
            <p className='pb-3'>Timeline : </p>
            <p className='pb-3'>Map : </p>
            <p className='pb-3'></p>
          </div>
      </div>
      </div>
    )
  }
