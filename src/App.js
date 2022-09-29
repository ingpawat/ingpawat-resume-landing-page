import './App.css';
import NavBar from "./components/navbar";
import React from 'react';
import Wallpaper from './asset/water22.webp';

function App() {

    return (
        <div className="App">
            {/* Nav-bar */}
            <NavBar />

            {/* banner */}
            <img src={Wallpaper} alt="wallpaper" className='w-[100%] z-0' />
            

            {/* content */}
            <div className='w-[100%] h-[4400px] p-0 m-0 bg-[#050505]'>
                <h1 className='color-red'>Hello</h1>
            </div>



        </div>
    );
}




export default App;