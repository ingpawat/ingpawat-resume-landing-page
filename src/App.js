import './App.css';
import NavBar from "./components/navbar";
import React from 'react';
import Wallpaper from './asset/water22.webp';
import Content from './components/content';
import IpwChrome from '../src/asset/ipwChrome.svg'

function App() {

    return (
        <div id='1' className="App  bg-[#22272c]">

            {/* Nav-bar */}
            <NavBar />

            {/* logo */}
            
            <div className='flex flex-col items-center'>
                {/* banner */}
                <img src={Wallpaper} alt="wallpaper" className='w-[100%] z-0 flex justify-center' />
                <img src={IpwChrome} className='z-10 absolute w-[30%]'></img>


            </div>



            {/* background */}
            <div className='contentBG w-[100%] h-[2000px] p-0 m-0 bg-[#0A1315] flex justify-center z-0 relative'>
                {/* content will show here */}

                <Content />
            </div>




        </div>
    );
}




export default App;