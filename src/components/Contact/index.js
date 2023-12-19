import "./index.css";
import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const [showSuccess, setShowSuccess] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_ipt9v9m',
      'template_gqtjjyq',
      form.current,
      'fBDwu6rRjMXBsLxE4',
    )
    .then(
      () => {
        setShowSuccess(true);
        setButtonText('Message Sent Successfully!');

         // Reset after 2 seconds

        
      },
      () => {
        alert('Failed to send');
      }
    );
};
    
return (
    <div className="flex ">
      <div className="isolate w-[380px] h-screen md:w-1/3 bg-color-olive mx-6 lg:mx-16 pt-16 sm:pt-16 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          
        </div>
        <div className="mx-auto max-w-2xl pt-10">
          <h2 className="text-4xl font-bold tracking-tight text-color-meringue sm:text-4xl" id="fade-in-down">Get in touch</h2>
          
        </div>
        <div className="contact-form pt-4">
        <form ref={form} onSubmit={sendEmail} className="mx-auto  sm:mt-10 w-full">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="block col-span-2">
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
                Name
              </label>
              <div className="">
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900  ring-1 ring-inset   focus:ring-2 focus:ring-inset focus:ring-color-laurel sm:text-sm sm:leading-6"
                />
              </div>
            </div>
           
           
            <div className="col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                Email
              </label>
              <div className="">
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-color-laurel placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-color-laurel sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <div className="col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                Message
              </label>
              <div className="">
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-color-laurel placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-color-laurel sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
           
          </div>
          <div className="mt-6">
            <button
              type="submit"
              value="Send"
              className="block w-full rounded-md bg-color-laurel px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {buttonText}
            </button>
          </div>
        </form>
        </div>
       
      </div>
      <div className="hidden md:block w-1/2 h-[620px]  overflow-hidden pt-10">
     <img className="" src="/images/leaf1.webp" loading="lazy"></img>
     </div>
      </div>
      
    

        
    )
    
};

export default Contact