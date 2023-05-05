import React from 'react'
import {useState} from 'react';
//import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import diagram from '../img.jpeg'

var data = require("../content")



export default function Homepage() {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  function HoverDlg() {
    return (
      <div>
        <p className='pb-5 w-[50vw] bg-slate-400'>{data.landDg1}</p>
      </div>
    );
  }
  
    return (
      <div>

        <div className='h-[100vh] p-10 w-full'>
          <div>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <h1 className='text-6xl heading'>ELECTRIC<br/>FISH</h1>
              <h1 className='italic text-3xl pb-5'>(Apteronotus albifrons)</h1>
            </div>
            {isHovering && <HoverDlg/>}
          </div>
          
          <p className='pb-5'>{data.landDg2}</p>
          <p className='pb-5'>{data.landDg3}</p>
          <p className='pb-5'>{data.landDg4}</p>
        </div>
      
        <div className='h-[100vh] heading'>

          <HashLink className='px-10 py-5 float-left' to="#hist">
            <div className='p-5 lb1 text-4xl hover:bg-black hover:text-sm hover:text-white hover:opacity-60 w-[250px] rounded-full border-2 border-black aspect-square grid place-items-center'>
            </div>
          </HashLink>

          <HashLink className='px-10 py-5 float-left' to="#where">
            <div className='p-5 lb2 text-4xl hover:bg-black hover:text-sm hover:text-white hover:opacity-60 w-[250px] rounded-full border-2 border-black aspect-square grid place-items-center'> 
            </div>
          </HashLink>

          <HashLink className='px-10 py-5 float-left' to="#how">
            <div className='p-5 lb3 text-4xl hover:bg-black hover:text-sm hover:text-white hover:opacity-60 w-[250px] rounded-full border-2 border-black aspect-square grid place-items-center'>
            </div>
          </HashLink>

          

          <HashLink className='px-10 py-5 float-left' to="#exp">
            <div className='p-5 lb4 text-2xl hover:bg-black hover:text-sm hover:text-white hover:opacity-60 w-[250px] rounded-full border-2 border-black aspect-square grid place-items-center'>
            </div>
          </HashLink>


          
        </div>

        <div className='relative h-screen py-10' id='hist'>
          <h2 className='text-4xl heading px-10'>History</h2>
          <iframe title="timeline" src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1gdrUPByUq0VuKsgNHNihEd1zbXTFQzmz4uOOePT38_w&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
          <div className='px-10 absolute bottom-5'>
            <HashLink to="#where">
              <img className="aspect-square h-[25px]" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Arrow_bottom_svg.svg" alt="down arrow"/>
            </HashLink>
          </div>
        </div>

        <div className='relative p-10 h-screen' id='where'>
          <h2 className='text-4xl heading'>Where?</h2>
          <p className='py-5'>*worldmap goes here*</p>
          <p className='pb-5'>{data.descText}</p>
          <ul>
            {
              data.list.map(x=>{
                return <li className='pb-1'>{x}</li>
              })
            }
          </ul>
          <div className='absolute bottom-0'>
            <HashLink to="#how">
              <img className="aspect-square h-[25px]" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Arrow_bottom_svg.svg" alt="down arrow"/>
            </HashLink>
          </div>
        </div>

        <div className='relative p-10 h-screen' id='how'>
          <h2 className='text-4xl heading pb-5'>How?</h2>
          <p>{data.howTxt}</p>
          <div className='absolute bottom-0'>
            <HashLink to="#exp">
              <img className="aspect-square h-[25px]" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Arrow_bottom_svg.svg" alt="down arrow"/>
            </HashLink>
          </div>
        </div>

        <div className='h-screen p-10' id='exp'>
          <h2 className='text-4xl pb-10 heading'>Experiment</h2>
          <p className='pb-5'>{data.eodP1}</p>
          <p className='pb-5'>{data.eodP2}</p>
          <p className='pb-5'>{data.eodP3}</p>
          <p className='pb-5 font-bold'>{data.eodP4}</p>
          <p className='py-5 font-bold text-4xl'>{data.eodSbhd}</p>
          <p className='pb-5'>{data.eodwp_p1}</p>
          <p className='pb-5'>{data.eodwp_p2}</p>
          <div className='place-items-center grid'>
            <img src={diagram} alt='wave fish v/s pulse fish' className='py-10'></img>
          </div>
          <p className='pb-5'>{data.eodwp_p3}</p>
          <p className='pb-5'>{data.eodwp_p4}</p>
        </div>
        
      </div>
    )
  }
