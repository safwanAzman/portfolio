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
import arrahnu from '../src/img/arrahnu.png';
import csctestkit from '../src/img/csctestkit.png';
import jomskate from '../src/img/jomskate.png';


import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';

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
      <header className="relative h-4 bg-brown-900">
        <div className="flex justify-between h-full py-4">
          <div className="absolute -left-32 -top-20">
            <img src={dots} alt="dots" className="hidden w-96 md:block" />
          </div>
          <div className="z-40 hidden lg:block">
            <div className="flex justify-center space-x-10 mx-52 ">
              <a href="#about" className="h-64 text-lg font-semibold text-brown-100 hover:text-yellow-400">ABOUT ME</a>
              <a href="#skills" className="text-lg font-semibold text-brown-100 hover:text-yellow-400">SKILLS</a>
              <a href="#portfolio" className="text-lg font-semibold text-brown-100 hover:text-yellow-400">PORTFOLIO</a>
              <a href="#contact" className="text-lg font-semibold text-brown-100 hover:text-yellow-400">CONTACT</a>
            </div>
          </div>
          <div className="block px-2 lg:hidden" style={{ zIndex:90 }}>
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

              <div className="flex flex-col w-64 px-4 py-4 mt-4 leading-9 bg-yellow-400 rounded-lg">
                <a href="#about" className="font-semibold text-white">ABOUT ME</a>
                <a href="#skills" className="font-semibold text-white">SKILLS</a>
                <a href="#portfolio" className="font-semibold text-white">PORTFOLIO</a>
                <a href="#contact" className="font-semibold text-white">CONTACT</a>
              </div>
            :
              null
            }
          </div>
        </div>
      </header>

      <section className="flex justify-center h-full py-12 bg-brown-900 ">
        <div className="container flex items-center justify-center">
          <div className="relative">
            <div className="container relative grid items-center justify-center grid-cols-12 gap-6">
                <div className="z-30 col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xxl:col-span-4">
                <LightSpeed left>
                  <div className="px-4 py-5">
                      <h1 className="-ml-2 text-5xl font-bold text-white md:text-8xl myfont">SAFWAN</h1>
                      <h1 className="text-2xl font-semibold text-white md:text-3xl">Front-end Web Developer</h1>
                      <div className="my-4">
                        <div className="flex items-center mb-2">
                          <FontAwesomeIcon icon={["fas", "street-view"]} color="#baa3a3" size="lg" />
                          <h1 className="ml-4 text-lg text-brown-100">Kajang,Selangor,Malaysia</h1>
                        </div>

                        <div className="flex items-center">
                          <FontAwesomeIcon icon={["fas", "envelope"]} color="#baa3a3" size="lg" />
                          <h1 className="ml-4 text-lg text-brown-100">safwanazman017@gmail.com</h1>
                        </div>
                      </div>
                      <div className="py-6">
                        <a href="#contact" className="px-6 py-4 text-lg font-bold text-yellow-400 uppercase border-2 border-yellow-400 rounded-lg shadow-xl">
                          Contact Me
                        </a>
                      </div>
                  </div>
                </LightSpeed>
                </div>
                <LightSpeed right>
                  <div className="z-20 col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8 xxl:col-span-8">
                    <img className="-mt-24" style={{ width: "45rem" }}src={myImg} />
                  </div>
                </LightSpeed>

                <div className="absolute top-0 right-0 z-40">
                    <a href="https://github.com/safwanAzman" className="flex items-center px-2 py-2 border-2 border-brown-100 hover:border-yellow-400">
                        <FontAwesomeIcon icon={["fab", "github"]} color="#baa3a3" size="lg" />
                    </a>
                    <a href="https://twitter.com/sfwn_azmn" className="flex items-center px-2 py-2 border-2 border-brown-100 hover:border-yellow-400">
                      <FontAwesomeIcon icon={["fab", "twitter"]} color="#baa3a3" size="lg" />
                    </a>
                    <a href="https://www.instagram.com/safwn_/" className="flex items-center px-2 py-2 border-2 border-brown-100 hover:border-yellow-400">
                      <FontAwesomeIcon icon={["fab", "instagram"]} color="#baa3a3" size="lg" />
                    </a>
                    <a href="mailto:safwanazman017@gmail.com?subject" className="flex items-center px-2 py-2 border-2 border-brown-100 hover:border-yellow-400">
                      <FontAwesomeIcon icon={["fas", "envelope"]} color="#baa3a3" size="lg" />
                    </a>
                </div>
              </div>

            <div className="absolute w-full px-2 py-4 bg-white border-2 rounded-lg border-brown-900 -bottom-42 h-52">
              <div className="grid items-center grid-cols-2 grid-rows-2 gap-4">
                <div className="flex justify-center px-4 py-4 bg-gray-100 rounded-lg">
                  <Zoom left cascade>
                    <div>
                      <div className="flex justify-center">
                        <FontAwesomeIcon icon={["fas", "clock"]} color="#fbbf25" size="3x"/>
                      </div>
                      <div className="mt-4"> 
                        <h1 className="text-4xl text-center myfont text-brown-900">17520</h1>
                        <h1 className="text-sm text-center myfont text-brown-900 md:text-lg">Hour of Work</h1>
                      </div>
                    </div>
                  </Zoom>
                </div>
                <div className="flex justify-center px-4 py-4 bg-yellow-400 rounded-lg">
                  <Zoom right cascade>
                    <div>
                      <div className="flex justify-center">
                        <FontAwesomeIcon icon={["fas", "lightbulb"]} color="#ffffff" size="3x" />
                      </div>
                      <div className="mt-4">
                        <h1 className="text-4xl text-center myfont text-brown-900">2</h1>
                        <h1 className="text-sm text-center myfont text-brown-900 md:text-lg">Year of Experience</h1>
                      </div>
                    </div>
                  </Zoom>
              </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="about" className="flex justify-center w-full h-full mt-64 bg-white">
        <div className="container flex items-center justify-start w-full mx-32">
          <div className="">
            <div className="container grid justify-center grid-cols-12 gap-6">
              <LightSpeed left>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6">
                  <div className="">
                    <img className="-mt-24" style={{ width: "45rem" }} src={myImg1} />
                  </div>
                </div>
              </LightSpeed>
              <LightSpeed right>
                <div className="col-span-12 py-5 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6">
                  <h1 className="-ml-2 text-4xl font-bold text-yellow-400 myfont">ABOUT <span className="text-brown-900">ME</span></h1>
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

      <section id="skills" className="flex justify-center w-full h-full px-32 py-12 bg-brown-900">
        <div className="flex justify-center w-full">
          <div className="container relative grid items-center justify-center grid-cols-12 gap-6 ">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xxl:col-span-12">
              <h1 className="mb-4 text-4xl font-bold text-white myfont">TECHNICAL <span className="text-yellow-400">SKILLS</span></h1>
            </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6">
              <LightSpeed left>
                <div className="flex items-center justify-center w-full h-64 px-4 py-4 overflow-x-scroll bg-gray-100 rounded-lg">
                  <div className="flex my-4 space-x-2">
                    <img src="https://i.pinimg.com/originals/61/f5/e0/61f5e0d554161a814ddc713d3ff9c3fe.png" className="w-24 h-24 px-2 py-2 bg-white rounded-lg shadow-xl" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png" className="w-24 h-24 px-2 py-2 bg-white rounded-lg shadow-xl" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" className="w-24 h-24 px-2 py-2 bg-white rounded-lg shadow-xl" />
                    <img src="https://cdn.worldvectorlogo.com/logos/alpinejs.svg" className="w-24 h-24 px-2 py-2 bg-white rounded-lg shadow-xl" />
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className="w-24 h-24 px-2 py-2 bg-white rounded-lg shadow-xl" />
                  </div>
                </div>
              </LightSpeed>
              </div>
              <LightSpeed right>
              <div className="col-span-12 mt-0 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6 lg:-mt-10">
                <div className="flex mt-6 space-x-4">
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

                      <div className="text-xl font-semibold text-center text-white">
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

                      <div className="text-xl font-semibold text-center text-white">
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
                      <div className="text-xl font-semibold text-center text-white">
                        <p>40%</p>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>               
                </div>
                <div className="pt-4">
                  <p className="text-lg font-semibold text-white">Front-end</p>
                  <div className="w-full bg-white shadow ">
                    <div className="py-1 text-xs leading-none text-center text-white bg-yellow-400" style={{ width: '60%' }}>60%</div>
                  </div>
                  <p className="pt-4 text-lg font-semibold text-white ">Back-end</p>
                  <div className="w-full bg-white shadow">
                    <div className="py-1 text-xs leading-none text-center text-white bg-brown-200" style={{ width: '40%' }}>40%</div>
                  </div>
                </div>
              </div>
            </LightSpeed>
          </div>
        </div>
      </section>

      <section id="portfolio" className="flex justify-center w-full h-full px-32 py-12 bg-white">
        <div className="flex justify-center w-full">
          <div className="container relative grid items-center justify-center grid-cols-12 gap-6 ">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xxl:col-span-12">
              <h1 className="mb-4 text-4xl font-bold text-yellow-400 myfont">MY <span className="text-brown-900">PORTFOLIO</span></h1>
              <Fade left>
                <div>
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-3">
                    
                    <a href="https://www.myazzahra.com/portal/" target="_blank" className="w-full my-4 overflow-hidden bg-white border-2 rounded-lg shadow-lg border-brown-900">
                      <img className="object-center w-full h-56" src={azzahra} alt="avatar" />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-lg font-semibold text-white">Azzahra portal</h1>
                      </div>
                    </a>

                    <a href="https://cscabs.net.my/kasihgold" target="_blank" className="w-full my-4 overflow-hidden bg-white border-2 rounded-lg shadow-lg border-brown-900">
                      <img className="object-center w-full h-56" src={kasihgold} alt="avatar" />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-lg font-semibold text-white">Kasih Gold</h1>
                      </div>
                    </a>

                    <a href="https://cscabs.net.my/covid/" target="_blank" className="w-full my-4 overflow-hidden bg-white border-2 rounded-lg shadow-lg border-brown-900">
                      <img className="object-center w-full h-56" src={csccovid} alt="avatar"  />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-lg font-semibold text-white">Covid Report</h1>
                      </div>
                    </a>

                    <a href="#" target="_blank" className="w-full my-4 overflow-hidden bg-white border-2 rounded-lg shadow-lg border-brown-900">
                      <img className="object-cover object-center w-full h-56" src={efms} alt="avatar" />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-lg font-semibold text-white">Cscorp</h1>
                      </div>
                    </a>

                    <a href="https://frontend-mentor-room-home-page.vercel.app/" target="_blank" className="w-full my-4 overflow-hidden bg-white border-2 rounded-lg shadow-lg border-brown-900">
                      <img className="object-center w-full h-56" src={room} alt="avatar" />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-lg font-semibold text-white">Room Home Page</h1>
                      </div>
                    </a>

                    <a href="https://fmsonline.tekun.gov.my/eMandateV2" target="_blank" className="w-full my-4 overflow-hidden bg-white border-2 rounded-lg shadow-lg border-brown-900">
                      <img className="object-center w-full h-56" src={emandate} alt="avatar"  />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-lg font-semibold text-white">Emandate</h1>
                      </div>
                    </a>


                    <a href="https://tailwindcomponents.com/u/safwanazman" target="_blank" className="w-full my-4 overflow-hidden bg-white border-2 rounded-lg shadow-lg border-brown-900">
                      <img className="object-center w-full h-56" src={mycomponent} alt="avatar" />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-lg font-semibold text-white">My Component</h1>
                      </div>
                    </a>

                    <a href="https://blogr-landing-page-pearl.vercel.app/" target="_blank" className="w-full my-4 overflow-hidden bg-white border-2 rounded-lg shadow-lg border-brown-900">
                      <img className="object-center w-full h-56" src={blogr} alt="avatar" />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-lg font-semibold text-white">blogr Page</h1>
                      </div>
                    </a>

                    <a href="https://todolist.safwan-azman.ml/" target="_blank" className="w-full my-4 overflow-hidden bg-white border-2 rounded-lg shadow-lg border-brown-900">
                      <img className="object-center w-full h-56" src={todo} alt="avatar" />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-lg font-semibold text-white">Todo List</h1>
                      </div>
                    </a>

                    <a href="http://175.144.132.172/arrahnu/" target="_blank" className="w-full my-4 overflow-hidden bg-white border-2 rounded-lg shadow-lg border-brown-900">
                      <img className="object-center w-full h-56 " src={arrahnu} alt="avatar" />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-lg font-semibold text-white">Arrahnu</h1>
                      </div>
                    </a>

                    <a href="#"  className="w-full my-4 overflow-hidden bg-white border-2 rounded-lg shadow-lg border-brown-900">
                      <img className="object-center w-full h-56 " src={csctestkit} alt="avatar" />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-lg font-semibold text-white">Csc Testkit</h1>
                      </div>
                    </a>

                    <a href="#" className="w-full my-4 overflow-hidden bg-white border-2 rounded-lg shadow-lg border-brown-900">
                      <img className="object-center w-full h-56 " src={jomskate} alt="avatar" />
                      <div className="flex items-center px-6 py-3 bg-yellow-400">
                        <h1 className="mx-3 text-lg font-semibold text-white">Jom Skate</h1>
                      </div>
                    </a>
                    
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="flex justify-center w-full h-full px-32 py-12 bg-brown-900">
        <div className="flex justify-center w-full">
          <div className="container relative grid items-center justify-center grid-cols-12 gap-6 ">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xxl:col-span-12">
              <h1 className="text-4xl font-bold text-white myfont">CONTACT <span className="text-yellow-400">ME</span></h1>
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6">
              <div className="flex items-center space-x-4">
                <div  className="flex items-center px-4 py-4 border-2 border-brown-100 hover:border-yellow-400 ">
                  <FontAwesomeIcon icon={["fas", "envelope"]} color="#baa3a3" size="2x" />
                </div>
                <p className="text-sm font-semibold text-white md:text-xl">Safwanazman017@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center px-4 py-4 border-2 border-brown-100 hover:border-yellow-400 ">
                  <FontAwesomeIcon icon={["fas", "street-view"]} color="#baa3a3" size="2x" />
                </div>
                <p className="text-sm font-semibold text-white md:text-xl">Kajang,Selangor,Malaysia</p>
              </div>

              <div className="flex items-center my-6 space-x-4">
                <a href="https://github.com/safwanAzman" className="flex items-center px-2 py-2 border-2 border-brown-100 hover:border-yellow-400">
                  <FontAwesomeIcon icon={["fab", "github"]} color="#baa3a3" size="lg" />
                </a>
                <a href="https://twitter.com/sfwn_azmn" className="flex items-center px-2 py-2 border-2 border-brown-100 hover:border-yellow-400">
                  <FontAwesomeIcon icon={["fab", "twitter"]} color="#baa3a3" size="lg" />
                </a>
                <a href="https://www.instagram.com/safwn_/" className="flex items-center px-2 py-2 border-2 border-brown-100 hover:border-yellow-400">
                  <FontAwesomeIcon icon={["fab", "instagram"]} color="#baa3a3" size="lg" />
                </a>
                <a href="mailto:safwanazman017@gmail.com?subject" className="flex items-center px-2 py-2 border-2 border-brown-100 hover:border-yellow-400">
                  <FontAwesomeIcon icon={["fas", "envelope"]} color="#baa3a3" size="lg" />
                </a>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6">
              <div className="flex items-center w-full h-full rounded-lg ">
                <div className="w-full">
                    
                      <input type="text" name="" id="" placeholder="Your Name" className="w-full p-4 bg-transparent border-2 rounded-lg border-brown-200 text-brown-100"  required/>
                        
                      <input type="email" name="" id="" placeholder="Your Email" className="w-full p-4 mt-3 bg-transparent border-2 rounded-lg border-brown-200 text-brown-100" />
                      <textarea name="" id="" cols="10" rows="3" placeholder="Tell us about desired property"
                      className="w-full p-4 mt-3 bg-transparent border-2 rounded-lg border-brown-200 text-brown-100"></textarea>

                      <button onClick={notify} className="w-full px-4 py-4 mt-4 text-lg font-bold text-yellow-400 uppercase border-2 border-yellow-400 rounded-lg shadow-xl">
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
