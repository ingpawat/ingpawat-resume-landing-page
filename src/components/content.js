import "../components/content.css"

const Content = () => {
    return (
        <div className="contentWrapper w-[80%] h-[90%] bg-[#3D4750] flex justify-center flex-col mt-[5%]">

            <div className="title w-[100%] h-[30%]  flex justify-center flex-row ">
                <img className="rounded-full w-auto h-[90%] m-3 " src="https://avatars.githubusercontent.com/u/103111454?v=4"></img>

                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-white text-[38px] ml-10">Hi! me, Ingpawat Khemngam </h1>
                    <h1 className="text-white text-[30px] ml-10">Full-Stack software developer</h1>
                    <h1 className="text-[45px] mt-5">👨🏻‍💻</h1>
                </div>
            </div>

            <hr />

            <div className="aboutMe w-[100%] h-[40%] flex justify-start items-center flex-col   ">
                <h1 className="text-white text-[23px] mt-5 ">ABOUT ME</h1>
            </div>

            <hr />

            <div className="contact w-[100%] h-[25%] flex justify-start items-center flex-col  ">
                <h1 className="text-white text-[23px] mt-5">CONTACT</h1>
                <div className="contact-logo w-[85%] h-[100%] flex justify-center items-start flex-row ">

                    <p className="m-[7%] mt-5 text-white ">
                        <div className="flex justify-center">
                            <img className="w-[60px] h-[60px] m-0 p-0 flex justify-center" src="https://www.svgrepo.com/show/204944/linkedin.svg" />
                        </div>

                        <br /> Linkedin</p>
                    <p className="m-[7%] mt-5 text-white ">
                        <div className="flex justify-center">
                            <img className="w-[60px] h-[60px] m-0 p-0 flex justify-center" src="https://www.svgrepo.com/show/360450/github.svg" />
                        </div>
                        <br /> Github</p>
                    <p className="m-[7%] mt-5 text-white ">
                        <div className="flex justify-center">
                            <img className="w-[60px] h-[60px] m-0 p-0 flex justify-center" src="https://www.svgrepo.com/show/13657/email.svg" /></div>
                        <br /> Email</p>
                    <p className="m-[7%] mt-5 text-white ">
                        <div className="flex justify-center">
                            <img className="w-[60px] h-[60px] m-0 p-0 flex justify-center" src="https://www.svgrepo.com/show/92111/on-call.svg" /></div>
                        <br /> Tell</p>

                </div>
            </div>

        </div>
    )
};



export default Content;