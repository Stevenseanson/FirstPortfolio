import "./index.css";
import React, {useRef} from "react";
import { useInView } from 'react-intersection-observer';


  const blogPosts = [


    {
      id: 1,
      title: 'ForestParcel',
      href: 'https://forestparcel.com/couriers',
      description: 'A signup website for delivery bikers. My first professional internship.',
      stack: 'React, Tailwind',
      imageUrl:'/images/forestparcel1.png'
     
    },
    {
      id:2,
      title:'Fynder',
      href:"https://fynder2.netlify.app/",
      description: 'A bootcamp group project. The website simulates Tinder but for local attractions. The "liked" attraction then gets saved to local storage so you can view your most recent likes.',
      stack: 'Javascript, OpenTripMap API',
      imageUrl:'/images/fynder1.png'
      
    },
  ];

  const techStackImages = [
    "./Portfolio/images/html.svg",
    "/images/javascript.svg",
    "/images/css.svg",
    "/images/react.svg",
    "/images/tailwind-css-icon.svg",
  ];
  

  const MainPage = () => {

    const [textZoneLeftRef, textZoneLeftInView] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });
  
    const [fadeIndownRef, fadeIndownInView] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });

 

    return (
      <div id="home">
        <div className="lg:mx-16 mx-6 max-w-7xl lg:px-8" >
          {/* HERO */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
  <div className="max-w-2xl pt-6 lg:pt-0 pr-8 order-1 lg:order-2">
    <div className={`... ${textZoneLeftInView ? 'in-viewport' : ''}`} ref={textZoneLeftRef} id="text-zone-left">
    <h2 className="text-2xl lg:text-4xl font-bold text-color-meringue sm:text-4xl" >Front End React Developer</h2></div>
    <p className="lg:mt-10 mt-2 lg:text-lg text-md text-white">
      Hi! I'm Sean Stevenson, a passionate and hardworking Front-End Developer based between London, UK and Canada.
    </p>
    <div className="flex list-none pt-6 gap-x-6">
    <li>
                 <a href="https://github.com/Stevenseanson" className="text-white hover:text-gray-100">
                      <span className="sr-only">Github</span>
                      <img className="w-[30px]" src="/images/github-mark-white.png"></img>
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white hover:text-gray-100">
                      <span className="sr-only">LinkedIn</span>
                      <img className="w-[30px]" src="/images/linkedin-app-white-icon.webp"></img>
                    </a>
                  </li>
                  </div>
   <div className="flex pt-2 lg:pt-6">
    <h3 className="mt-6 text-xl font-semibold tracking-tight text-color-meringue flex">Tech Stack</h3>
    <div className="pt-4 pl-4 lg:pl-10 gap-x-4 lg:gap-x-10 flex">
  {techStackImages.map((path, index) => (
    <img key={index} className="lg:w-[8%] w-[30px]" src={path} alt={`Tech Stack ${index + 1}`} />
  ))}
</div>
  </div></div>
  
  <div className="flex lg:order-2 order-1 lg:w-1/2 lg:justify-center items-end lg:items-center lg:h-screen h-[32vh]" id="container" >
    <img className="aspect-auto lg:w-[400px] lg:h-[400px] w-[200px] h-[200px]  object-cover drop-shadow-lg max-w-none" id="shape" src="/images/plantsSean.jpg" alt="Headshot"></img>
  </div>
</div>

{/* ABOUT ME */}
<div id="about"></div>
<div className="mt-20 flex" >
          <img className="hidden md:flex aspect-auto w-[100%] lg:w-[50%] drop-shadow-md object-cover object-left rounded-2xl" src="/images/toronto.png"></img>
          <div className="lg:pl-10 lg:w-1/2">
            <div ref={fadeIndownRef}
        id="fade-in-down"
        className={`... ${fadeIndownInView ? 'in-viewport' : ''}`}>
          <h4 className="text-xl font-bold text-color-meringue sm:text-4xl">About Me</h4>
          <h2 className="text-3xl font-bold text-color-laurel">A Dedicated Front End Developer</h2></div>
    <p className="lg:mt-10 mt-2 text-md lg:text-lg  text-white">
    As a Junior Front-End Developer, I bring a diverse skill set encompassing HTML, CSS, JavaScript, React, and Tailwind. My proficiency extends to crafting and upkeeping websites that prioritize a seamless and responsive user experience. I specialize in designing dynamic and captivating interfaces, showcasing my commitment to producing clean and optimized code. I leverage cutting-edge development tools and techniques to create innovative web applications.
    <br /><br />
    My work ethic is characterized by diligence and collaboration. I thrive as a team player, excelling in cooperative efforts with cross-functional teams to deliver exceptional web applications. </p>
    </div>
    </div>


       

{/* PORTFOLIO */}

        <div id="projects" className="relative"></div>
        <div className="mx-auto mb-2 max-w-7xl  mt-20" >
          <div className="z-20">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none" >
          <div className={`... ${textZoneLeftInView ? 'in-viewport' : ''}`} ref={textZoneLeftRef} id="text-zone-left">

            <h3 className="text-xl font-bold tracking-tight  text-color-meringue sm:text-4xl">Portfolio</h3>
            <h2 className="text-4xl font-bold tracking-tight text-color-laurel">Each project a unique piece of development</h2>
            </div>
          </div>
          <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col z-10 justify-end overflow-hidden rounded-2xl bg-gray-900 drop-shadow-md hover:opacity-80 transition-all duration-100 px-8  pt-32 lg:pt-60 sm:pt-48 lg:pt-80"
              >
                <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

               
                <h3 className="mt-3 text-lg font-bold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                    <span className="flex text-sm font-normal pt-4">{post.description}</span>
                    <span className="flex text-sm font-semibold pt-4 pb-4 ">{post.stack}</span>

                    
                  </a>
                </h3>
              </article>
            ))}
            <div className="hidden md:absolute h-full w-full left-0 z-0 overflow-hidden pointer-events-none">
     <img className="" src="/images/leaf2.webp" loading="lazy"></img>
     </div>
          </div>
          
          </div>
          
        </div>
       
        </div>
      </div>
    )
  }
  
  export default MainPage