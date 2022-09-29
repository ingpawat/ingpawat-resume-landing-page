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

            <h1 className="text-white text-[23px] mt-5 flex justify-center items-center ">ABOUT ME</h1>
            <div className="aboutMeContent w-[100%] h-[40%] flex justify-center items-center flex-row   ">
                <div className="w-[40%] h-[100%] mr-[5%] ">
                    <div className="ml-[5%]  mt-[18%] w-[100%] h-[100%] text-white">
                        <p>Shorten name "Y", 20 years old male was born in 3st November 2001 based in thailand. </p> <br />
                        <p> Currently stacks on software development. at @techupth. Having base front-end and development on REACT library</p> <br />
                        <p>Looking up to front-end development jobs in Thailand or remote.</p>
                    </div>
                </div>

                <div className="w-[40%] h-[100%] text-white">
                    <p className="text-[20px] mt-3 flex justify-center items-center flex-row ">Familiar with Technology </p><br />
                    <p className="text-[16px]">HTML, CSS, JAVASCRIPT - 🔧 <br />Using for base development on front-end.  </p><br />
                    <p className="text-[16px]">REACT - 🌐 <br /> Using REACT library for development on front-end. </p> <br />
                    <p className="text-[16px]">TAILWIND - 🌬️ <br /> Using TAILWIND framework for development on CSS. </p>  <br />
                    <p className="text-[16px]">NPM - 📦 <br />Increasing productivity by NPM for import many package.</p><br />
                    <p className="text-[16px]">GIT & GITHUB - 🏗️ <br />Using global version control for develop with team and others.</p><br />
                </div>
            </div>

            <hr />

            <div className="contact w-[100%] h-[25%] flex justify-start items-center flex-col  ">
                <h1 className="text-white text-[23px] mt-5">CONTACT</h1>
                <div className="contact-logo w-[85%] h-[100%] flex justify-center items-start flex-row ">

                    <p className="m-[7%] mt-5 text-white ">
                        <div className="flex justify-center"><a href="https://www.linkedin.com/in/ingpawat-khemngam-12a4b11ab/">
                            <img className="w-[60px] h-[60px] m-0 p-0 flex justify-center" src="https://www.svgrepo.com/show/204944/linkedin.svg" /></a>
                        </div>

                        <br /> Linkedin </p>
                    <p className="m-[7%] mt-5 text-white ">
                        <div className="flex justify-center"><a href="https://github.com/ingpawat">
                            <img className="w-[60px] h-[60px] m-0 p-0 flex justify-center" src="https://www.svgrepo.com/show/360450/github.svg" /></a>
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
            </div >

        </div >
    )
};



export default Content;