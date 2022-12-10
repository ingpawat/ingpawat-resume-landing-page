import './App.css';
import NavBar from "./components/navbar";
import React from 'react';
import Wallpaper from './asset/water22.webp';
import Content from './components/content';
import TechnologyStacks from './components/TechnologyStacks';
import Archive from '../src/asset/just .png'
import blink from './asset/light.png'


function App() {

    return (
        <div id='1' className="App  bg-[#22272c]">

            {/* Nav-bar */}
            <NavBar />

            {/* banner */}
            <img src={Wallpaper} alt="wallpaper" className='w-[100%] z-10' />


            {/* background */}
            <div className='contentBG w-[100%] h-[2000px] p-0 m-0 bg-[#0A1315] flex justify-center'>
                {/* content will show here */}
                <Content />
            </div>

            {/* tech stacks */}
            <div id='3' className='contentBgTwo w-[100%] h-[1200px] p-0 mt-0 bg-[#0A1315] flex justify-center '>
                < TechnologyStacks />
            </div>

            <div className='w-[100%] h-[2000px] flex justify-center items-center bg-[#0A1315]'>
                <div className='flex justify-center items-center bg-[white] w-[1200px] overflow-hidden'>
                    <img src={Archive} alt='archive' className='w-[100%] z-0 relative ' id='4' />
                    <img src={blink} alt='blink' className='animate-pulse rotate-[40%] z-10 left-[15%] mt-[1%] absolute h-[1300px] w-[1000px] cursor-pointer hover:animate-none'/>
                    

                </div>



            </div>


        </div>
    );
}




export default App;