import React from 'react'
import {useState} from 'react';
//import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
//import diagram from '../img.jpeg'
import diagram2 from '../img2.jpeg'
import diagram3 from '../img3.jpeg'
import diagram4 from '../img4.jpeg'
import diagram5 from '../img5.jpeg'
import diagram1 from '../img1.jpeg'
import SideNavbar from '../components/sidenav';

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
        <p className='pb-5 w-[50vw] bg-slate-400'>{data.hovTxt}</p>
      </div>
    );
  }
  
    return (
      <div>
      <SideNavbar/>
        <div className='h-[100vh] p-10 bg-fish grid place-items-center w-full'>
          <h1 className='text-6xl heading place-items-center'>ELECTRIC FISH</h1>
          <div className='absolute bottom-5 grid place-items-center w-screen text-3xl'>
            <HashLink to="#1"><p className='border-4 p-4 border-black'>START</p></HashLink>
          </div>
        </div>

        <div className='h-[100vh] p-10 w-full bg-fish relative' id="1">

          <div className='pb-[125px]'>

            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <h1 className='text-6xl heading'>ELECTRIC<br/>FISH</h1>
              <h1 className='italic text-3xl pb-5'>(Black Ghost Knife Fish)</h1>
            </div>

            {isHovering && <HoverDlg/>}
          </div>

          <div>
            <p className='pb-5'>{data.landDg1}</p>
            <p className='pb-5'>{data.landDg2}</p>
            <p className='pb-5'>{data.landDg3}</p>
            <p className='pb-5'>{data.landDg4}</p>
            <p className='pb-5'>{data.landDg5}</p>
          </div>
         
          <div className='px-10 absolute bottom-5 grid w-screen place-items-center z-10'>
            <HashLink to="#explore">
              <img className="aspect-square h-[25px]" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Arrow_bottom_svg.svg" alt="down arrow"/>
            </HashLink>

          </div>
         

        </div>

        <h1 className='px-10 heading w-screen text-center text-4xl'> EXPLORE </h1>
        <div className='grid h-[100vh] heading bg-fish place-items-center' id="explore">
          <div>
          <HashLink className='px-10 float-left' to="#hist">
            <div className='p-5 lb1 text-2xl lg:text-4xl w-[200px] lg:w-[250px] text-center hover:bg-black hover:text-sm hover:text-white hover:opacity-60 rounded-full border-2 border-black aspect-square grid place-items-center'> 
            </div>
          </HashLink>

          <HashLink className='px-10 float-left' to="#where">
            <div className='p-5 lb2 text-2xl lg:text-4xl w-[200px] lg:w-[250px] text-center hover:bg-black hover:text-sm hover:text-white hover:opacity-60 rounded-full border-2 border-black aspect-square grid place-items-center'> 
            </div>
          </HashLink>

          <HashLink className='px-10 float-left' to="#how">
            <div className='p-5 lb3 text-2xl lg:text-4xl w-[200px] lg:w-[250px] text-center hover:bg-black hover:text-sm hover:text-white hover:opacity-60 rounded-full border-2 border-black aspect-square grid place-items-center'>
            </div>
          </HashLink>

          <HashLink className='px-10 float-left' to="#exp">
            <div className='p-5 lb4 text-4xl lg:text-4xl w-[200px] lg:w-[250px] text-center hover:bg-black hover:text-xl hover:text-white hover:opacity-60 rounded-full border-2 border-black aspect-square grid place-items-center'>
            </div>
          </HashLink>
          </div>
          {
          /*
          <HashLink className='p-10'>
            <div className='p-5 text-4xl text-center hover:bg-black hover:text-white hover:opacity-60'>
            <p>Start</p>
            </div>
          </HashLink>
          */}

        </div>

        <div className='relative h-screen py-10 bg-fish' id='hist'>
          <h2 className='text-4xl heading px-10 pb-2'>Depths of Time</h2>
          <div className='absolute z-10 w-[100vw] grid place-item-center'>
          <iframe className='px-10 h-[75vh] w-[100vw]' title="timeline" src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1gdrUPByUq0VuKsgNHNihEd1zbXTFQzmz4uOOePT38_w&font=Default&lang=en&initial_zoom=2&height=650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
          </div>
          <div className='px-10 absolute bottom-5 grid w-screen place-items-center z-10'>
            <HashLink to="#where">
              <img className="aspect-square h-[25px]" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Arrow_bottom_svg.svg" alt="down arrow"/>
            </HashLink>
          </div>
        </div>

        <div className='relative p-10 h-screen bg-fish' id='where'>
          <h2 className='text-4xl heading'>Where to find them?</h2>
          
          
              <iframe title="Electric fish Map" frameborder="0" width="1000" height="600" src="https://view.genial.ly/65362d5d9768640011bdaa4a" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all">
              </iframe> 
            

          {/*<p className='pb-5'>{data.descText}</p>
          <p className='py-5'>*to be added soon*</p>
          <ul>
            {
              data.list.map(x=>{
                return <li className='pb-1'>{x}</li>
              })
            }
          </ul>
          */
          }
          <div className='absolute bottom-5 grid place-items-center w-screen'>
            <HashLink to="#how">
              <img className="aspect-square h-[25px]" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Arrow_bottom_svg.svg" alt="down arrow"/>
            </HashLink>
          </div>
        </div>

        <div className='relative p-10 h-screen bg-fish' id='how'>
          <h2 className='text-4xl heading pb-5'>What makes them electric?</h2>
          <img className="h-[200px]" src={diagram1} alt="down arrow"/>
          <p className='pb-1'>{data.howTxt1}</p>
          <p className='pb-1'>{data.howTxt2}</p>
          <p className='pb-1'>{data.howTxt3}</p>
          <p className='pb-1'>{data.howTxt4}</p>
          <p className='pb-1'>{data.howTxt5}</p>
          <img className="h-[200px]" src={diagram2} alt="down arrow"/>
          <p className='pb-1'>{data.howTxt6}</p>
          <p className='pb-1'>{data.eod_P1}</p>
          <p className='pb-1'>{data.howTxt7}</p>
          <div className='grid w-screen place-items-center absolute bottom-5'>
            <HashLink to="#how2">
              <img className="aspect-square h-[25px]" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Arrow_bottom_svg.svg" alt="down arrow"/>
            </HashLink>
          </div>
        </div>

        
        
        <div className='relative pl-10 pr-10 h-screen bg-fish' id='how2'>

        <h2 className='text-4xl heading pb-5'>What makes them electric?</h2>
        <p className='pb-1'>{data.howTxt8}</p>
        <img className="h-[200px]" src={diagram3} alt="down arrow"/>
        <p className='pb-1'>{data.howTxt9}</p>
        <img className="h-[200px]" src={diagram4} alt="down arrow"/>
        <p className='py-1 font-bold text-4xl'>{data.eodSbhd1}</p>
          
          <div className='grid w-screen place-items-center absolute bottom-5'>
            <HashLink to="#how3">
              <img className="aspect-square h-[25px]" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Arrow_bottom_svg.svg" alt="down arrow"/>
            </HashLink>
          </div>
        </div>

        <div className='relative pl-10 pr-10 h-screen bg-fish' id='how3'>

        <h2 className='text-4xl heading pb-5'>What makes them electric?</h2>
        <p className='pb-1'>{data.howTxt10}</p>
        <img className="h-[200px]" src={diagram5} alt="down arrow"/>
        <p className='pb-1'>{data.howTxt11}</p>
        <p className='py-1 font-bold text-4xl'>{data.eodSbhd1}</p>
  
        <div className='grid w-screen place-items-center absolute bottom-5'>
        <HashLink to="#exp">
          <img className="aspect-square h-[25px]" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Arrow_bottom_svg.svg" alt="down arrow"/>
        </HashLink>
        </div>
        </div>
 
        <div className='h-screen p-10 bg-fish' id='exp'>
          <h2 className='text-4xl pb-10 heading'>In the Lab</h2>
          <p className='py-5 font-bold text-4xl'>{data.itb_sbhd}</p>

          <p className='pb-5'>{data.eodP1}</p>
          <p className='pb-5'>{data.eodP2}</p>
          <p className='pb-5'>{data.eodP3}</p>
          <p className='pb-5 font-bold'>{data.eodP4}</p>
         
        </div>
        
      </div>
       
    )
  }
