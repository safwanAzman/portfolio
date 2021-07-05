import React , { useState } from 'react';
import './App.css';
import './index.css';

import myImg from '../src/img/me3.png';
import myImg1 from '../src/img/me4.png';
import html from '../src/img/html.png';
import dots from '../src/img/dot.svg';
import css from '../src/img/css.png';
import js from '../src/img/js.png';

import azzahra from '../src/img/azzahra.png';
import kasihgold from '../src/img/kasihgold.png';
import csccovid from '../src/img/csccovid.png';
import mycomponent from '../src/img/mycomponent.png';
import room from '../src/img/homepage.png';
import efms from '../src/img/efms.png';
import emandate from '../src/img/emandate.png';
import blogr from '../src/img/blogr.png';
import todo from '../src/img/todo.png';


import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';

import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core"; 
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import HamburgerMenu from 'react-hamburger-menu';




library.add(fas,fab);

function App() {
  const notify = () => toast.warning("Thank You!!");
  const [ show , setShow] = useState(false);

  return (
    <div className="">
      <header className="bg-brown-900 relative h-4">
        <div className="flex justify-between  py-4 h-full">
          <div className="absolute -left-32 -top-20">
            <img src={dots} alt="dots" className="w-96 hidden md:block" />
          </div>
          <div className="hidden lg:block z-40">
            <div className="flex justify-center space-x-10 mx-52 ">
              <a href="#about" className="text-brown-100 font-semibold text-lg hover:text-yellow-400 h-64">ABOUT ME</a>
              <a href="#skills" className="text-brown-100 font-semibold text-lg hover:text-yellow-400">SKILLS</a>
              <a href="#portfolio" className="text-brown-100 font-semibold text-lg hover:text-yellow-400">PORTFOLIO</a>
              <a href="#contact" className="text-brown-100 font-semibold text-lg hover:text-yellow-400">CONTACT</a>
            </div>
          </div>
          <div className="block lg:hidden px-2" style={{ zIndex:90 }}>
            <HamburgerMenu
              isOpen={show}
              menuClicked={() => setShow((!show) ? true : false)}
              width={30}
              height={15}
              strokeWidth={2}
              rotate={0}
              color='#9f8483'
              borderRadius={0}
              animationDuration={0.5}
            />
            {show ?

              <div className="bg-yellow-400 py-4 px-4 rounded-lg w-64 flex flex-col leading-9 mt-4">
                <a href="#about" className="text-white font-semibold">ABOUT ME</a>
                <a href="#skills" className="text-white font-semibold">SKILLS</a>
                <a href="#portfolio" className="text-white font-semibold">PORTFOLIO</a>
                <a href="#contact" className="text-white font-semibold">CONTACT</a>
              </div>
            :
              null
            }
          </div>
        </div>
      </header>

      <section className="h-full bg-brown-900  flex justify-center py-12 ">
        <div className="flex justify-center container items-center">
          <div className="relative">
            <div className="grid grid-cols-12 gap-6 relative justify-center container items-center">
                <div className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xxl:col-span-4 z-30">
                <LightSpeed left>
                  <div className="px-4 py-5">
                      <h1 className="text-5xl md:text-8xl text-white font-bold myfont -ml-2">SAFWAN</h1>
                      <h1 className="text-2xl md:text-3xl text-white font-semibold">Front-end Web Developer</h1>
                      <div className="my-4">
                        <div className="flex items-center mb-2">
                          <FontAwesomeIcon icon={["fas", "street-view"]} color="#baa3a3" size="lg" />
                          <h1 className="text-lg ml-4 text-brown-100">Kajang,Selangor,Malaysia</h1>
                        </div>

                        <div className="flex items-center">
                          <FontAwesomeIcon icon={["fas", "envelope"]} color="#baa3a3" size="lg" />
                          <h1 className="text-lg ml-4 text-brown-100">safwanazman017@gmail.com</h1>
                        </div>
                      </div>
                      <div className="py-6">
                        <a href="#contact" className="border-2 border-yellow-400 text-yellow-400 font-bold py-4 px-6 rounded-lg uppercase text-lg  shadow-xl">
                          Contact Me
                        </a>
                      </div>
                  </div>
                </LightSpeed>
                </div>
                <LightSpeed right>
                  <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8 xxl:col-span-8 z-20">
                    <img className="-mt-24" style={{ width: "45rem" }}src={myImg} />
                  </div>
                </LightSpeed>

                <div className="absolute right-0 top-0 z-40">
                    <a href="https://github.com/safwanAzman" className="border-2 border-brown-100 py-2 px-2 flex items-center hover:border-yellow-400">
                        <FontAwesomeIcon icon={["fab", "github"]} color="#baa3a3" size="lg" />
                    </a>
                    <a href="https://twitter.com/sfwn_azmn" className="border-2 border-brown-100 py-2 px-2 flex items-center hover:border-yellow-400">
                      <FontAwesomeIcon icon={["fab", "twitter"]} color="#baa3a3" size="lg" />
                    </a>
                    <a href="https://www.instagram.com/safwn_/" className="border-2 border-brown-100 py-2 px-2 flex items-center hover:border-yellow-400">
                      <FontAwesomeIcon icon={["fab", "instagram"]} color="#baa3a3" size="lg" />
                    </a>
                    <a href="mailto:safwanazman017@gmail.com?subject" className="border-2 border-brown-100 py-2 px-2 flex items-center hover:border-yellow-400">
                      <FontAwesomeIcon icon={["fas", "envelope"]} color="#baa3a3" size="lg" />
                    </a>
                </div>
              </div>

            <div className="border-2 absolute border-brown-900 py-4 px-2 bg-white -bottom-42 w-full h-52 rounded-lg">
              <div className="grid  grid-cols-2 grid-rows-2 gap-4 items-center">
                <div className="bg-gray-100 px-4 py-4  rounded-lg flex justify-center">
                  <Zoom left cascade>
                    <div>
                      <div className="flex justify-center">
                        <FontAwesomeIcon icon={["fas", "clock"]} color="#fbbf25" size="3x"/>
                      </div>
                      <div className="mt-4"> 
                        <h1 className="myfont text-brown-900 text-4xl text-center">8760</h1>
                        <h1 className="myfont text-brown-900 text-sm md:text-lg text-center">Hour of Work</h1>
                      </div>
                    </div>
                  </Zoom>
                </div>
                <div className="bg-yellow-400 px-4 py-4  rounded-lg flex justify-center">
                  <Zoom right cascade>
                    <div>
                      <div className="flex justify-center">
                        <FontAwesomeIcon icon={["fas", "lightbulb"]} color="#ffffff" size="3x" />
                      </div>
                      <div className="mt-4">
                        <h1 className="myfont text-brown-900 text-4xl text-center">1</h1>
                        <h1 className="myfont text-brown-900 text-sm md:text-lg text-center">Year of Experience</h1>
                      </div>
                    </div>
                  </Zoom>
              </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="about" className="h-full bg-white  flex justify-center mt-64 w-full">
        <div className="flex justify-start container items-center w-full mx-32">
          <div className="">
            <div className="grid grid-cols-12 gap-6  justify-center container">
              <LightSpeed left>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6">
                  <div className="">
                    <img className="-mt-24" style={{ width: "45rem" }} src={myImg1} />
                  </div>
                </div>
              </LightSpeed>
              <LightSpeed right>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6 py-5">
                  <h1 className="text-4xl text-yellow-400 font-bold myfont -ml-2">ABOUT <span className="text-brown-900">ME</span></h1>
                  <p className="text-xl font-semibold text-brown-900 ">
                    I have a Diploma Digital Technology  from Politeknik Tuanku Syed Sirajuddin and have
                    more than 1 years of experience as a front-end developer. I am skilled in all aspects of the job.
                    Besides developing original landing pages and templates, providing support to clients, and fixing 
                    any front-end related issues. 
              
                    </p>
                </div>
              </LightSpeed>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="h-full bg-brown-900 w-full flex justify-center py-12 px-32">
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-12 gap-6 relative justify-center container items-center ">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xxl:col-span-12">
              <h1 className="text-4xl text-white font-bold myfont mb-4">TECHNICAL <span className="text-yellow-400">SKILLS</span></h1>
            </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6">
              <LightSpeed left>
                <div className="bg-gray-100 py-4 px-4 h-64 w-full rounded-lg flex justify-center items-center overflow-x-scroll">
                  <div className="flex space-x-2 my-4">
                    <img src="https://i.pinimg.com/originals/61/f5/e0/61f5e0d554161a814ddc713d3ff9c3fe.png" className="w-24 h-24 bg-white px-2 py-2 rounded-lg shadow-xl" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png" className="w-24  h-24 bg-white px-2 py-2 rounded-lg shadow-xl" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" className="w-24 h-24 bg-white px-2 py-2 rounded-lg shadow-xl" />
                    <img src="https://cdn.worldvectorlogo.com/logos/alpinejs.svg" className="w-24 h-24 bg-white px-2 py-2 rounded-lg shadow-xl" />
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className="w-24 h-24 bg-white px-2 py-2 rounded-lg shadow-xl" />
                  </div>
                </div>
              </LightSpeed>
              </div>
              <LightSpeed right>
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6 mt-0  lg:-mt-10">
                <div className="flex space-x-4 mt-6">
                  <div className="w-32">
                    <CircularProgressbarWithChildren value={60}
                      styles={buildStyles({
                        pathColor: "#ef6522",
                        trailColor: "white"
                      })}
                    >
                      <img
                        style={{ width: "20%", marginTop: -5 }}
                        src={html}
                        alt="doge"
                      />

                      <div className="text-xl text-white font-semibold text-center">
                        <p>60%</p>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                  <div className="w-32">
                    <CircularProgressbarWithChildren value={70}
                      styles={buildStyles({
                        pathColor: "#47a1d9",
                        trailColor: "white"
                      })}
                    >
                      <img
                        style={{ width: "28%", marginTop: -5 }}
                        src={css}
                        alt="doge"
                      />

                      <div className="text-xl text-white font-semibold text-center">
                        <p>70%</p>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                  <div className="w-32">
                    <CircularProgressbarWithChildren value={40}
                      styles={buildStyles({
                        pathColor: "#ebba1e",
                        trailColor: "white"
                      })}
                    >
                      <img
                        style={{ width: "18%", marginTop: -5 }}
                        src={js}
                        alt="doge"
                      />
                      <div className="text-xl text-white font-semibold text-center">
                        <p>40%</p>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>               
                </div>
                <div className="pt-4">
                  <p className="text-white font-semibold text-lg">Front-end</p>
                  <div className="shadow w-full bg-white ">
                    <div className="bg-yellow-400 text-xs leading-none py-1 text-center text-white" style={{ width: '60%' }}>60%</div>
                  </div>
                  <p className="text-white font-semibold pt-4 text-lg ">Back-end</p>
                  <div className="shadow w-full bg-white">
                    <div className="bg-brown-200 text-xs leading-none py-1 text-center text-white" style={{ width: '40%' }}>40%</div>
                  </div>
                </div>
              </div>
            </LightSpeed>
          </div>
        </div>
      </section>

      <section id="portfolio" className="h-full bg-white w-full flex justify-center py-12 px-32">
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-12 gap-6 relative justify-center container items-center ">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xxl:col-span-12">
              <h1 className="text-4xl text-yellow-400 font-bold myfont mb-4">MY <span className="text-brown-900">PORTFOLIO</span></h1>
              <Fade left>
                <div>
                  <div className="grid gap-2  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-3">
                    
                    <a href="https://www.myazzahra.com/portal/" target="_blank" className="w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 border-2 border-brown-900">
                      <img className="w-full h-56 object-cover object-center" src={azzahra} alt="avatar" />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-white font-semibold text-lg">Azzahra portal</h1>
                      </div>
                    </a>

                    <a href="https://cscabs.net.my/kasihgold" target="_blank" className="w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 border-2 border-brown-900">
                      <img className="w-full h-56 object-cover object-center" src={kasihgold} alt="avatar" />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-white font-semibold text-lg">Kasih Gold</h1>
                      </div>
                    </a>

                    <a href="https://cscabs.net.my/covid/" target="_blank" className="w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 border-2 border-brown-900">
                      <img className="w-full h-56 object-cover object-center" src={csccovid} alt="avatar"  />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-white font-semibold text-lg">Covid Report</h1>
                      </div>
                    </a>

                    <a href="#" target="_blank" className="w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 border-2 border-brown-900">
                      <img className="w-full h-56 object-cover object-center" src={efms} alt="avatar" />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-white font-semibold text-lg">Cscorp</h1>
                      </div>
                    </a>

                    <a href="https://frontend-mentor-room-home-page.vercel.app/" target="_blank" className="w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 border-2 border-brown-900">
                      <img className="w-full h-56 object-cover object-center" src={room} alt="avatar" />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-white font-semibold text-lg">Room Home Page</h1>
                      </div>
                    </a>

                    <a href="https://fmsonline.tekun.gov.my/eMandateV2/logmasuk" target="_blank" className="w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 border-2 border-brown-900">
                      <img className="w-full h-56 object-cover object-center" src={emandate} alt="avatar"  />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-white font-semibold text-lg">Emandate</h1>
                      </div>
                    </a>


                    <a href="https://tailwindcomponents.com/u/safwanazman" target="_blank" className="w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 border-2 border-brown-900">
                      <img className="w-full h-56 object-cover object-center" src={mycomponent} alt="avatar" />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-white font-semibold text-lg">My Component</h1>
                      </div>
                    </a>

                    <a href="https://blogr-landing-page-pearl.vercel.app/" target="_blank" className="w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 border-2 border-brown-900">
                      <img className="w-full h-56 object-cover object-center" src={blogr} alt="avatar" />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-white font-semibold text-lg">blogr Page</h1>
                      </div>
                    </a>

                    <a href="#" target="_blank" className="w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 border-2 border-brown-900">
                      <img className="w-full h-56 object-cover object-center" src={todo} alt="avatar" />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-white font-semibold text-lg">Todo List</h1>
                      </div>
                    </a>
                    
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="h-full bg-brown-900 w-full flex justify-center py-12 px-32">
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-12 gap-6 relative justify-center container items-center ">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xxl:col-span-12">
              <h1 className="text-4xl text-white font-bold myfont">CONTACT <span className="text-yellow-400">ME</span></h1>
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6">
              <div className="flex items-center space-x-4">
                <div  className="border-2 border-brown-100 py-4 px-4 flex items-center hover:border-yellow-400 ">
                  <FontAwesomeIcon icon={["fas", "envelope"]} color="#baa3a3" size="2x" />
                </div>
                <p className="text-white font-semibold text-sm md:text-xl">Safwanazman017@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="border-2 border-brown-100 py-4 px-4 flex items-center hover:border-yellow-400 ">
                  <FontAwesomeIcon icon={["fas", "street-view"]} color="#baa3a3" size="2x" />
                </div>
                <p className="text-white font-semibold  text-sm md:text-xl">Kajang,Selangor,Malaysia</p>
              </div>

              <div className="flex items-center space-x-4 my-6">
                <a href="https://github.com/safwanAzman" className="border-2 border-brown-100 py-2 px-2 flex items-center hover:border-yellow-400">
                  <FontAwesomeIcon icon={["fab", "github"]} color="#baa3a3" size="lg" />
                </a>
                <a href="https://twitter.com/sfwn_azmn" className="border-2 border-brown-100 py-2 px-2 flex items-center hover:border-yellow-400">
                  <FontAwesomeIcon icon={["fab", "twitter"]} color="#baa3a3" size="lg" />
                </a>
                <a href="https://www.instagram.com/safwn_/" className="border-2 border-brown-100 py-2 px-2 flex items-center hover:border-yellow-400">
                  <FontAwesomeIcon icon={["fab", "instagram"]} color="#baa3a3" size="lg" />
                </a>
                <a href="mailto:safwanazman017@gmail.com?subject" className="border-2 border-brown-100 py-2 px-2 flex items-center hover:border-yellow-400">
                  <FontAwesomeIcon icon={["fas", "envelope"]} color="#baa3a3" size="lg" />
                </a>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6">
              <div className=" h-full w-full rounded-lg flex  items-center ">
                <div className="w-full">
                    
                      <input type="text" name="" id="" placeholder="Your Name" className="border-2  bg-transparent p-4  w-full border-brown-200 rounded-lg text-brown-100"  required/>
                        
                      <input type="email" name="" id="" placeholder="Your Email" className="border-2  bg-transparent p-4  w-full border-brown-200 rounded-lg text-brown-100 mt-3" />
                      <textarea name="" id="" cols="10" rows="3" placeholder="Tell us about desired property"
                      className="border-2  bg-transparent p-4  w-full border-brown-200 rounded-lg text-brown-100 mt-3"></textarea>

                      <button onClick={notify} className="border-2 border-yellow-400 text-yellow-400 font-bold py-4 px-4 rounded-lg uppercase text-lg  shadow-xl mt-4 w-full">
                        Contact Me
                      </button>
                      <ToastContainer 
                          position="bottom-right"
                      />
                    
                  </div>      
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>


  );
}

export default App;
