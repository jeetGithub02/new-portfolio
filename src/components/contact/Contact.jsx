import React from 'react'

const Contact = () => {
  return (
    <section role="form" className="bg-sky-200 relative" id="contact" >
        <div className="bg-gradient-to-b from-white to-transparent h-[100px] absolute -top-1 left-0 right-0 z-[20]"></div>
        <div className="container pt-8">
            <form action="https://api.web3forms.com/submit" method="POST" className="max-w-[600px] mx-auto p-5">
                    <h1 className="lg:text-5xl text-3xl text-center font-medium text-gray-800">Contact me</h1>
                    
                    <input type="hidden" name="access_key" value="f8ce832d-1fb3-45b1-9881-34c5963bdcd8"/>
                <dl className="sm:mt-10 mt-5">
                    <dt className='bi bi-person'> Name</dt>
                    <dd><input type="text" name="name" required className='p-2 rounded w-full border border-gray-300 outline-gray-400' /></dd>
                    <dt className='bi bi-at mt-4'>Email</dt>
                    <dd><input type="email" name="email" required className='p-2 rounded w-full border border-gray-300 outline-gray-400' /></dd>
                    <dt className="bi bi-chat-left mt-4" > Message</dt>
                    <dd>
                        <textarea name="message" required id="" className="rounded border p-2 border-gray-300 w-full outline-gray-400"  rows="5"></textarea>
                    </dd>
                    <dd className="text-center md:text-left my-2 "><button type="submit" className="bi bi-send px-2 py-1 rounded bg-sky-500 text-white"> Send Message</button></dd>
                </dl>
            </form>
            <div align="center" className="text-gray-700 pb-16 sm:pb-2 ">
               <a href="mailto:jeettech02@gmail.com"><span className="bi bi-send"> jeetech02@gmail.com</span></a>
            </div>
        </div>
           
    </section>
  )
}

export default Contact