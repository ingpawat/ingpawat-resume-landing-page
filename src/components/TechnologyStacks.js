const TechnologyStacks = () => {
    return (
        <div className="contentWrapper border-10 border-white  bg-[#3D4750] w-[80%] mt-[10%] h-[80%] flex items-center flex-col">

            <p className="text-[28px] mt-9 mb-0 flex justify-center items-center flex-row underline  underline-offset-8 text-white ">
            Technology Stacks, Familiar, Experience{" "}
            </p>

            <div className="Language mt-[2%]">
                <div className="flex justify-center items-center flex-row  mt-0 bg-[#6e7878]">
                    <p>Language & Markup :</p>
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
            </div>

        <div className="font-end & back-end flex flex-row items-center justify-center w-[95%] h-[90%] border">
            <div className="border p-0 m-0 mt-[2%] w-[50%] h-[100%] flex justify-center items-center"></div>
            <div className="border p-0 m-0 mt-[2%] w-[50%] h-[100%] flex justify-center items-center"></div>
        </div>
            
{/* *************************************************************** */}
            <div className="technologyFamiliar  w-[40%] h-[100%] text-white   ">

                <br />



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
    );
};

export default TechnologyStacks;
