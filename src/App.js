import './App.css';
import NavBar from "./components/navbar";
import React from 'react';
import Wallpaper from './asset/water22.webp';
import Content from './components/content';
import TechnologyStacks from './components/TechnologyStacks';

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
            <div id='3' className='contentBgTwo w-[100%] h-[2000px] p-0 mt-0 bg-[#0A1315] flex justify-center '>
               < TechnologyStacks  />
            </div>



        </div>
    );
}




export default App;