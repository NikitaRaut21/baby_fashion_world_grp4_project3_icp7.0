import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2';
import Address from "./location.png"
import Phone from "./phone.png"
import Gmail from "./gmail (1).png"
import { theme } from "./../../configData"


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
        <div style={{ backgroundColor: theme.backColor }}>

            < div className='bg-img' >
                <section className='contact'>
                    <form onSubmit={onSubmit}>
                        <h2 className='heading'>
                            <b>CONTACT FORM</b>
                        </h2>
                        <div className='input-box'>
                            <label>Full Name :</label>
                            <input type='text' className='field required' placeholder='Enter Your Name' name='name' required />
                        </div>
                        <div className='input-box'>
                            <label>Email Address : </label>
                            <input type='email' className='field required' placeholder='Enter Your Email' name='Email' required />
                        </div>
                        <div className='input-box'>
                            <label>Your Message :</label>
                            <textarea name='message' id='' className='field mess' placeholder='Enter Your message' required></textarea>
                        </div>
                        <button type='Submit'> Send Message</button>
                    </form>


                </section>
            </div>
            <div>
                <h2 className="title"> <b> Address :</b></h2>
                <p className="heading-3">1st Floor, Amanora Mall, Mundhwa Rd, Amanora Park Town, Hadapsar, Pune, Maharashtra 411028</p>

                <h2 className="title"><b>Mobile no :</b></h2>
                <img src={Phone} className="Icon" />
                <a href="tel: +91-9326387541" className="heading-2">+91-8552012745</a>

                <h2 className="title"><b>Email id :</b></h2>
                <img src={Gmail} className="Icon" />
                <a href="mailto:smilecare32@gmail.com" className=" heading-2">babiescorner12@gmail.com</a>

                <br />   <br />


                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7566.451547240572!2d73.92466337770998!3d18.51869680000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c112a2e6836d%3A0xdf293a5408bc72bc!2sAmanora%20Mall!5e0!3m2!1sen!2sin!4v1718632763714!5m2!1sen!2sin"
                    width="100%" height="380"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='maps'></iframe>
            </div>

           {/* footer */}


          



           




        </div>

    );
};


export default Contact 