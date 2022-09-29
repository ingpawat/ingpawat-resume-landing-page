import "../components/content.css"

const Content = () => {
    return (
        <div className="contentWrapper w-[80%] h-[90%] bg-[#3D4750] flex justify-center flex-col mt-[5%] ">
            <div className="respondSet ">
                {/* title */}
                <div className="title w-[100%] h-[30%]  flex justify-center flex-row  ">
                    <img className="handSomePic rounded-full w-auto h-[90%] m-3 " src="https://avatars.githubusercontent.com/u/103111454?v=4"></img>

                    <div className="setTitle flex justify-center items-center flex-col ">
                        <h1 className="myName text-white text-[38px] ml-10">Hi! me, Ingpawat Khemngam </h1>
                        <h1 className="myRole text-white text-[30px] ml-10">Full-Stack software developer</h1>
                        <h1 className="text-[45px] mt-5">👨🏻‍💻</h1>
                    </div>
                </div>

                <hr />
                {/* about me */}
                <h1 className="aboutMeContentText text-white text-[35px] mt-5 flex justify-center items-center ">ABOUT ME</h1>
                <div className="aboutMeContentBox w-[100%] h-[40%] flex justify-center items-center flex-row   ">
                    <div className="aboutMeContentSmallBox w-[40%] h-[100%] mr-[5%]  ">
                        <div className="ml-[5%]  mt-[18%] w-[100%] h-[100%] text-white">
                            <p>Shorten name "Y", 20 years old male was born in 3st November 2001 based in thailand. </p> <br />
                            <p> Currently stacking on software development. at @techupth. Having base front-end development on REACT library</p> <br />
                            <p>Looking up to front-end development jobs in Thailand or remote.</p>
                        </div>
                    </div>

                    {/* technology use */}
                    <div className="technologyFamiliar  w-[40%] h-[100%] text-white  ">
                        <p className="text-[28px] mt-9 mb-0 flex justify-center items-center flex-row  ">Familiar with Technology </p><br />

                        <div className="flex justify-center items-center flex-row  mt-0 bg-[#30353a]">
                            <p>Language:</p>
                            <a className="HTML m-2" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html">
                                <img alt="HTML" width="60" height="60" src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png" /></a>

                            <a className="CSS m-2" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                                <img alt="CSS" width="60" height="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" /></a>

                            <a className="javascript m-2" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                                <img alt="javascript" width="60" height="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" /></a>
                        </div>

                        <div className="flex justify-center items-center flex-row  mt-1 bg-[#30353a]">
                            <p>Library:</p>
                            <a className="react m-2" href="https://reactjs.org/">
                                <img alt="react" width="60" height="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" /></a>
                            <a className="npm m-2" href="https://docs.npmjs.com/about-npm">
                                <img alt="npm" width="75" height="66" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1024px-Npm-logo.svg.png" /></a>
                        </div>

                        <div className="flex justify-center items-center flex-row  mt-1 bg-[#30353a]">
                                <p>Version control:</p>
                                <a className="git m-2" href="https://git-scm.com/">
                                    <img alt="git" width="60" height="60" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" /></a>
                                <a className="gitHub m-0" href="https://docs.github.com/en">
                                    <img alt="gitHub" width="60" height="60" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></a>
                        </div>

                        <div className="flex justify-center items-center flex-row  mt-1 bg-[#30353a]">
                                <p>Framework:</p>
                                <a className="tailwind m-2" href="https://tailwindcss.com/">
                                    <img alt="tailwind" width="60" height="60" src="https://camo.githubusercontent.com/bcd4bda49ef6cd9537db065920f4f4f6ac670eae0e0adf2c5133c19b319f1574/68747470733a2f2f627261646c632e67616c6c65727963646e2e76736173736574732e696f2f657874656e73696f6e732f627261646c632f7673636f64652d7461696c77696e646373732f302e322e302f313535383034303536333634392f4d6963726f736f66742e56697375616c53747564696f2e53657276696365732e49636f6e732e44656661756c74" /></a>
                                <a className="chakraUI" href="https://chakra-ui.com/">
                                    <img alt="chakraUI" width="60" height="60" src="https://img.icons8.com/color/344/chakra-ui.png" /></a>
                        </div>
                        

                        {/* <p className="text-[16px]">HTML, CSS, JAVASCRIPT - 🔧<a className="HTML" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html"><img alt="HTML" width="50" height="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" /></a>Using for base development on front-end.</p>

                        <p className="text-[16px]">REACT - 🌐 <br /> Using REACT library for development on front-end. </p> <br />

                        <p className="text-[16px]">TAILWIND - 🌬️ <br /> Using TAILWIND framework for development on CSS. </p>  <br />

                        <p className="text-[16px]">NPM - 📦 <br />Increasing productivity by NPM for import many package.</p><br />

                        <p className="text-[16px]">GIT & GITHUB - 🏗️ <br />Using global version control for develop with team and others.</p><br /> */}

                    </div>
                </div>

                <hr />

                <div className="contact w-[100%] h-[25%] flex justify-start items-center flex-col  ">
                    <h1 className="text-white text-[35px] mt-5">CONTACT</h1>
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
            </div>
        </div >
    )
};



export default Content;