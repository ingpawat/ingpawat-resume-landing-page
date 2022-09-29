import "../components/content.css"

const Content = () => {
    return (
        <div className="contentWrapper w-[80%] h-[80%] bg-[#3D4750] flex justify-center flex-col mt-[5%]">

            <div className="title w-[100%] h-[30%]  flex justify-center flex-row ">
                <img className="rounded-full w-auto h-[90%] m-3 " src="https://avatars.githubusercontent.com/u/103111454?v=4"></img>

                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-white text-[45px] ml-10">Hi! me, Ingpawat Khemngam </h1>
                    <h1 className="text-white text-[30px] ml-10">Full-Stack software developer</h1><hr/>
                    
                </div>


            </div>

            <div className="aboutMe w-[100%] h-[35%] border ">

            </div>

            <div className="contact w-[100%] h-[30%] border ">

            </div>

        </div>
    )
};



export default Content;