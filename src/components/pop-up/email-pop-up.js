import React from "react";

function EmailPop({close}){
    return(
        <div className="z-20 absolute top-[40%] left-[50.5%]">
            <div className="callBG w-[300px] h-[60px] bg-black relative rounded-full flex mt-[9px] z-30 ">
                <p className="text-end mt-3 ml-4 text-white">ingpawat.k@gmail.com</p>
                <button className="absolute hover:bg-red-900 p-0 bg-red-700 top-[-5px] right-[-10px] h-5 w-5 text-center text-red text-[25px] rounded-full" onClick={() => close(false)}></button>
            </div>
        </div>
    )
}

export default EmailPop; 