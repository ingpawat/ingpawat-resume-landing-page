import './App.css';
import NavBar from "./components/navbar";
import React from 'react';
import Wallpaper from './asset/water22.webp';
import Content from './components/content';

function App() {

    return (
        <div className="App bg-[#22272c]">
            
             {/* Nav-bar */}
             <NavBar />

            {/* banner */}
            <img src={Wallpaper} alt="wallpaper" className='w-[100%] z-0' />
           

            {/* background */}
            <div className='w-[100%] h-[1400px] p-0 m-0 bg-[#0A1315] flex justify-center'>
                {/* content will show here */}
                <Content />
            </div>



        </div>
    );
}




export default App;