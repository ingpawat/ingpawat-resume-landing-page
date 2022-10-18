import "../components/content.css";
import { useState } from "react";
import EmailPop from "../components/pop-up/email-pop-up";
import CallPop from "../components/pop-up/tell-pop-up";
import Badge from "../components/linkedin-badge.js"

const Content = () => {
    const [emailPop, setEmailPop] = useState(false);
    const [callPop, setCallPop] = useState(false);

    return (
        <div className="contentWrapper w-[80%] h-[80%] bg-[#3D4750] flex justify-center flex-col mt-[5%] ">
            <div className="respondSet ">
                {/* title */}
                <div className="title w-[100%] h-[30%]  flex justify-center flex-row  ">
                    <img
                        className="handSomePic rounded-full w-auto h-[90%] m-3 "
                        src="https://avatars.githubusercontent.com/u/103111454?v=4"
                    ></img>

                    <div className="setTitle flex justify-center items-center flex-col ">
                        <h1 className="myName text-white text-[38px] ml-10">
                            Hi! me, Ingpawat Khemngam{" "}
                        </h1>
                        <h1 className="myRole text-white text-[30px] ml-10">
                            Full-Stack software developer
                        </h1>
                        <h1 className="text-[45px] mt-5">👨🏻‍💻</h1>
                    </div>
                </div>

                <hr />
                {/* about me */}
                <h1 className="aboutMeContentText text-white text-[35px] mt-5 flex justify-center items-center ">
                    ABOUT ME
                </h1>
                <div className="aboutMeContentBox w-[100%] h-[45%] flex justify-center items-center flex-row   ">
                    <div className="aboutMeContentSmallBox w-[40%] h-[100%] mr-[5%]  ">
                        <div className="ml-[5%]  mt-[18%] w-[100%] h-[100%] text-white">
                            <p>
                                Shorten name "Y", 20 years old male was born in 3st November
                                2001 based in thailand.{" "}
                            </p>{" "}
                            <br />
                            <p>
                                {" "}
                                Currently stacking on software development. at @techupth. Having
                                base front-end development on REACT library.
                            </p>{" "}
                            <br />
                            <p>
                                Looking up to front-end development jobs in Thailand or remote.
                            </p>
                            <br />
                            <p>
                                My big inspiration for design is Ye, Virgil Abloh and Tadao
                                Ando. bless all the best thing for these kind of man that
                                inspired the people. 🕊️{" "}
                            </p>
                            
              
                        </div>

                        <Badge />

                    </div>

                    {/* technology use */}
                    <div className="technologyFamiliar  w-[40%] h-[100%] text-white  ">
                        <p className="text-[28px] mt-9 mb-0 flex justify-center items-center flex-row underline  underline-offset-8 ">
                            Familiar with Technology{" "}
                        </p>
                        <br />

                        <div className="flex justify-center items-center flex-row  mt-0 bg-[#6e7878]">
                            <p>Language:</p>
                            <a
                                className="HTML m-2"
                                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html"
                            >
                                <img
                                    alt="HTML"
                                    width="60"
                                    height="60"
                                    src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png"
                                />
                            </a>

                            <a
                                className="CSS m-2"
                                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                            >
                                <img
                                    alt="CSS"
                                    width="60"
                                    height="60"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                                />
                            </a>

                            <a
                                className="javascript m-2"
                                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                            >
                                <img
                                    alt="javascript"
                                    width="60"
                                    height="60"
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                                />
                            </a>
                        </div>

                        <div className="flex justify-center items-center flex-row  mt-1 bg-[#6e7878]">
                            <p>Library:</p>
                            <a className="react m-2" href="https://reactjs.org/">
                                <img
                                    alt="react"
                                    width="60"
                                    height="60"
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                                />
                            </a>
                            <a className="npm m-2" href="https://docs.npmjs.com/about-npm">
                                <img
                                    alt="npm"
                                    width="75"
                                    height="66"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1024px-Npm-logo.svg.png"
                                />
                            </a>
                            <a
                                className="axios m-2 mr-0"
                                href="https://axios-http.com/docs/intro"
                            >
                                <img
                                    alt="axios"
                                    width="80"
                                    height="80"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Axios_logo_%282020%29.svg/2560px-Axios_logo_%282020%29.svg.png"
                                />
                            </a>
                            {/* <a
                className="redux m-0"
                href="https://redux.js.org/introduction/getting-started"
              >
                <img
                  alt="redux"
                  width="90"
                  height="90"
                  src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
                />
              </a> */}
                        </div>

                        <div className="flex justify-center items-center flex-row  mt-1 bg-[#6e7878]">
                            <p>Framework:</p>
                            <a className="tailwind m-2" href="https://tailwindcss.com/">
                                <img
                                    alt="tailwind"
                                    width="60"
                                    height="60"
                                    src="https://camo.githubusercontent.com/bcd4bda49ef6cd9537db065920f4f4f6ac670eae0e0adf2c5133c19b319f1574/68747470733a2f2f627261646c632e67616c6c65727963646e2e76736173736574732e696f2f657874656e73696f6e732f627261646c632f7673636f64652d7461696c77696e646373732f302e322e302f313535383034303536333634392f4d6963726f736f66742e56697375616c53747564696f2e53657276696365732e49636f6e732e44656661756c74"
                                />
                            </a>
                            <a className="chakraUi" href="https://chakra-ui.com/">
                                <img
                                    alt="chakraUi"
                                    width="60"
                                    height="60"
                                    src="https://img.icons8.com/color/344/chakra-ui.png"
                                />
                            </a>
                        </div>

                        {/* <div className="flex justify-center items-center flex-row h-[80px] mt-1 bg-[#6e7878]">
              <p>Content Management System:</p>
              <a
                className="srapi m-2 ml-3"
                href="https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html"
              >
                <img
                  alt="srapi"
                  width="40"
                  height="40"
                  src="https://seeklogo.com/images/S/strapi-logo-3551DD3743-seeklogo.com.png"
                />
              </a>
            </div> */}

                        <div className="flex justify-center items-center flex-row h-[80px]  mt-1 bg-[#6e7878]">
                            <p>Version control:</p>
                            <a className="git m-2" href="https://git-scm.com/">
                                <img
                                    alt="git"
                                    width="60"
                                    height="60"
                                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                                />
                            </a>
                            <a className="gitHub m-0" href="https://docs.github.com/en">
                                <img
                                    alt="gitHub"
                                    width="60"
                                    height="60"
                                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                />
                            </a>
                        </div>

                        <div className="flex justify-center items-center flex-row  h-[80px]  mt-1 bg-[#6e7878]">
                            <p>Analytics tools:</p>
                            <a className="hotjar ml-2" href="https://www.hotjar.com/">
                                <img
                                    alt="hotjar"
                                    width="45"
                                    height="45"
                                    src="https://leadgenapp.io/wp-content/uploads/2022/03/517f022479163259d192181405b3cddc.png"
                                />
                            </a>

                            <a
                                className="google"
                                href="https://analytics.google.com/analytics/web/provision/#/provision"
                            >
                                <img
                                    alt="google"
                                    width="80"
                                    height="80"
                                    src="https://logos-world.net/wp-content/uploads/2021/02/Google-Analytics-Logo.png"
                                />
                            </a>

                            <a
                                className="meta m-0"
                                href="https://developers.facebook.com/docs/meta-pixel/get-started"
                            >
                                <img
                                    alt="meta"
                                    width="80"
                                    height="80"
                                    src="https://pnggrid.com/wp-content/uploads/2021/11/Meta-1024x576.png"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <hr />
                {/* contact */}
                <div
                    id="2"
                    className="contact w-[100%] h-[25%] flex justify-start items-center flex-col z-0 relative "
                >
                    <h1 className="text-white text-[35px] mt-5">CONNECT WITH ME</h1>
            
                    <div className="contact-logo w-[85%] h-[100%] mt-8 flex justify-center items-start flex-row   ">
                        <div className="m-[7%] mt-0 text-white ">
                            <div className="flex justify-center">
                                <a href="https://www.linkedin.com/in/ingpawat-khemngam-12a4b11ab/">
                                    <img
                                        className="w-[auto] h-[60px] m-0 p-0 flex justify-center"
                                        src="https://www.svgrepo.com/show/204944/linkedin.svg"
                                    />
                                </a>
                            </div>

                            <br />
                            <p> Linkedin </p>
                        </div>

                        <div className="m-[7%] mt-[-5px] text-white ">
                            <div className="flex justify-center">
                                <a href="https://github.com/ingpawat">
                                    <img
                                        className="w-[auto] h-[70px] m-0 p-0 flex justify-center"
                                        src="https://www.svgrepo.com/show/360450/github.svg"
                                    />
                                </a>
                            </div>
                            <br />
                            <p> Github </p>
                        </div>

                        {emailPop && <EmailPop close={setEmailPop} />}
                        <div className="m-[7%] mt-0 text-white z-0 relative ">
                            <button
                                className="flex justify-center"
                                onClick={() => setEmailPop(true)}
                            >
                                <img
                                    className="w-[auto] h-[65px] m-0 p-0 flex justify-center"
                                    src="https://www.svgrepo.com/show/13657/email.svg"
                                />
                            </button>

                            <br />
                            <p> Email </p>
                        </div>

                        {callPop && <CallPop close={setCallPop} />}
                        <div className="m-[7%] mt-0 text-white z-0 relative ">
                            <button
                                className="flex justify-center"
                                onClick={() => setCallPop(true)}
                            >
                                <a>
                                    <img
                                        className="w-[auto] h-[67px] m-0 p-0 flex justify-center"
                                        src="https://cdn-icons-png.flaticon.com/512/25/25377.png"
                                    />
                                </a>
                            </button>

                            <br />
                            <p> Tell </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
