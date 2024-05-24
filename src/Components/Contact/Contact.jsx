import React ,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Contact() {
    useEffect(() => {
        AOS.init({
          once: true,
          enable: "phone",
          duration: 600,
          easing: "ease-out-cubic",
        });
      }, []);
  return (
    <main>
      <div className='bg-Contactbackground  w-screen bg-center bg-cover' style={{height:"420px"}}>
            <div className='w-full h-full  flex  justify-center items-center bg-gradient-to-r from-black/50 via-black/50 to-black/50'>
                <div className='w-full h-full flex flex-col gap-6 justify-center items-center' data-aos="fade-down-right">
                    <h1 className='font-Pacifico font-bold text-4xl md:text-6xl text-center text-white'>Connect With Our Community</h1>
                    <h1 className='font-Popins text-base text-center md:text-2xl text-white '>Contact or Leave a Message For Us!</h1>
                </div>
            </div>
      </div>
      <div className='w-screen flex justify-center pt-20 items-center'>
            <div className='grid grid-cols-1 gap-10 place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                <div className='h-40  font-Popins  w-64 bg-lime-500'  data-aos="fade-down-right">
                    <h1 className='pt-7 pl-4 text-white text-lg'>Address: 148 North Street Konoha,
                    <br />
                        Hidden Leaf Village
                    </h1>
                </div>
                <div className='h-40  font-Popins  w-64 bg-lime-500' data-aos="fade-down-right">
                    <h1 className='pt-7 pl-4 text-white text-lg'>Phone No : 9217723897
                    </h1>
                </div>
                <div className='h-40  font-Popins  w-64 bg-lime-500' data-aos="fade-down-right">
                    <h1 className='pt-7 pl-4 text-white text-lg'>E-mail : info@information.com
                    </h1>
                </div>
                <div className='h-40  font-Popins  w-64 bg-lime-500' data-aos="fade-down-right">
                    <h1 className='pt-7 pl-4 text-white text-lg'>Created By :
                    <a href="https://github.com/Gurudas-Bhardwaj" target='_blank' className='pl-2 text-stone-900 underline'>Gurudas</a>
                    </h1>
                </div>
            </div>
      </div>
      <div className='w mt-20 flex justify-center items-center'>
        <div className='w-full justify-evenly items-center grid grid-cols-1 gap-10 md:grid-cols-2 '>
            <div className='ml-16 mr-16 md:mr-0 '  style={{height:"480px"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.4596310371534!2d77.28068815566459!3d28.634601303604555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcabf0c543c3%3A0xbe4f2a03f12f5640!2sC%2C%20C%2B%2B%2C%20Java%2C%20Python%2C%20DSA%2C%20Data%20Science%2C%20AI%2C%20ML%2C%20Full%20Stack%2C%20PHP%2C%20Coding%20Programming%20Courses%20in%20Laxminagar%20%7C%20Vcare%20Institute!5e0!3m2!1sen!2sin!4v1716202284848!5m2!1sen!2sin" className='w-full h-full'></iframe>
            </div>
            <div  className='font-Popins  flex items-center  justify-center' style={{height:"480px"}} >
                <form action="#" className='flex flex-col gap-5'>
                    <input type="text" placeholder='Your Name'  className='h-12 w-80 sm:w-96 border border-black text-gray-700 p-2'/>
                    <input type="text" placeholder='Your Email'  className='h-12 w-80 sm:w-96 border border-black text-gray-700 p-2'/>
                    <input type="text" placeholder='Your Subject'  className='h-12 w-80 sm:w-96 border border-black text-gray-700 p-2'/>
                    <textarea name="" placeholder='Message' className='resize-none h-40 border border-black  w-80 sm:w-96 p-2 text-gray-700' id=""></textarea>
                    <button className='h-12 w-48 border-2 border-black rounded-3xl bg-lime-400'>Send Message</button>
                </form>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
