import React from "react";

function CallPop({close}){
    return(
        <div className="callBG w-[180px] h-[60px] bg-black relative rounded-full flex mt-[9px] z-20">
                <p className="text-end mt-3 ml-4">+66996365638</p>
                <button className="absolute hover:bg-red-900 p-0 bg-red-700 top-[-5px] right-[-10px] h-5 w-5 text-center text-red text-[25px] rounded-full" onClick={() => close(false)}></button>
        </div>
    )
}

export default CallPop; 