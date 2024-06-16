import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2';
import nature from "./nature.jpg"
import shoppingImage from "./shopping-baby.webp"


const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "c0da22d7-8017-403e-8711-dcb698ebe9c6");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message send Successfully!",
                icon: "success"
            });
        }
    };



    return (



        <div className='hero'>
           
           < div className='bg-img' >
            <section className='contact'>
                <form onSubmit={onSubmit}>
                    <h2>
                        Contact form
                    </h2>
                    <div className='input-box'>
                        <label>Full Name</label>
                        <input type='text' className='field required' placeholder='Enter Your Name' name='name' required />
                    </div>
                    <div className='input-box'>
                        <label>Email Address </label>
                        <input type='email' className='field required' placeholder='Enter Your Email' name='Email' required />
                    </div>
                    <div className='input-box'>
                        <label>Your Message</label>
                        <textarea name='message' id='' className='field mess' placeholder='Enter Your message' required></textarea>
                    </div>
                    <button type='Submit'> Send Message</button>
                </form>


            </section>
            </div>
            <div>
                <h2 class="title"> <b> Address :</b></h2>
                <p class="heading-2"> Happysips Juice Centre
                    267, Central Bazar Road, Ramdaspeth, Nagpur, Maharashtra 440010</p>
                <h2 class="title"><b>Mobile no :</b></h2>
              
                    <a href="tel: +91-9326387541" class=" font-size">+91-7758808569</a>
                    <br/>
                    <h2 class="title"><b>Email id :</b></h2>
                    <img src="../Icons/gmail.png" class="icons"/>
    <a href="mailto:smilecare32@gmail.com" class=" font-size">happysips12@gmail.com</a>



                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.489706778497!2d79.0681515736986!3d21.1329011841965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c16b49ad42b5%3A0x4e0e33120ce2e0b7!2sFruit%20and%20Juice%20Centre!5e0!3m2!1sen!2sin!4v1712947178867!5m2!1sen!2sin"
                        allowfullscreen="" loading="lazy" width="1700" height="450"
                        referrerpolicy="no-referrer-when-downgrade" className="maps"></iframe>
            </div>








        </div>

















    );


};









export default Contact



