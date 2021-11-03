import React, { useState,useEffect } from 'react'
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import validator from 'validator'
import axios from 'axios'
import insta from './Images/insta.png'
import linkdin from './Images/linkdin.png'

const ContactMe = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [email_name, setemailName] = useState('');
    const [otp, setOtp] = useState();
    const [emailError, setEmailError] = useState('');
    const [otp_flag, setotp_flag] = useState('0')
    const [email_flag, setemail_flag] = useState('0')

    function handleChange(e) {
        e.preventDefault();
        setemailName(e.target.value);
        var email = e.target.value
        setemail_flag('0')
        setotp_flag('0')
        setOtp()

        if (validator.isEmail(email)) {
            setEmailError('Valid Email!')
        } else {
            setEmailError('Enter valid Email!')
        }
    };
    const otp_number = (e) => {
        e.preventDefault();
        setOtp(e.target.value);
    }
    useEffect(()=>{
        if(otp === '123'){
            setEmailError('OTP is valid')
        }
        
    },[otp])
    const check_email = () => {
        if (email_name !== "") {
            axios.get(`/api/email/${email_name}`)
                .then(res => {
                    const email_subscribed = res.data
                    if (!email_subscribed.error) {
                        setemail_flag('1')
                    }
                    else {
                        setotp_flag('1')
                        setemail_flag('0')
                        setEmailError('')
                    }
                })
                .catch(err => console.log(err));
        }
    }
    const send_otp = () => {
        const otp_Number = Math.floor(Math.random() * 100000);
        const msg = {
            to: email_name,
            from: 'gholeaakash03@gmail.com', // Use the email address or domain you verified above
            subject: `OTP verification from Aakash's Portfolio`,
            text: `your otp number is ${otp_Number}`,
        };
        console.log(msg)
        axios.post('/api/email/sendOtp',msg)
        .then(res=>{
            console.log(res.data)
            setShowModal(false)
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <div className="bg-gradient-to-r from-blue-900 via-black to-blue-900 h-auto md:h-screen">
                {props.navbar}
                <section className="text-white body-font relative">
                    <div className="container px-5 py-5 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-4xl text-6xl font-medium title-font mb-4 text-white">Contact Me</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">I will get in touch with you soon...</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-md text-white">Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-md text-white">Email</label>
                                        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7 text-md text-white">Message</label>
                                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="text-white rounded-lg md:h-auto md:w-28 border-2 border-double text-center text-xl
                                    flex justify-center m-auto px-5 py-3 bg-gradient-to-r from-blue-500 via-black to-blue-500
                                    hover:from-black hover:via-blue-500 hover:to-black focus:from-black focus:via-blue-500 focus:to-black"
                                    >Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="text-white text-2xl text-center mt-6 md:mt-12">Follow me on other social media</div>
                        <div className="flex justify-center mt-4 mb-4 md:mt-2">
                            <div className="px-3 pt-3 pl-3 md:pt-7">
                                <a href="https://www.instagram.com/aakashg_03/"><img src={insta}
                                    alt="instagram" /></a>
                            </div>
                            <div className="px-3 pt-3 pl-3 md:pt-7">
                                <a href="https://www.linkedin.com/in/aakash-ghole-350332218/"><img src={linkdin}
                                    alt="linkdin" /></a>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center text-white text-2xl mt-6 md:mt-12 border-4 border-dashed rounded-lg p-3 ">
                            <div>Hit the</div>
                            <div>
                                <button className="text-white rounded-lg md:h-auto md:w-28 border-2 border-double text-center text-xl
                                    flex justify-center m-auto px-5 mx-2 bg-gradient-to-r from-blue-500 via-black to-blue-500
                                    hover:from-black hover:via-blue-500 hover:to-black focus:from-black focus:via-blue-500 focus:to-black"
                                    onClick={(e) => setShowModal(true)}>Subscribe</button>
                            </div>
                            <div>to get all notifications via email</div>
                        </div>
                    </div>
                </section>
            </div>
            <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>
                <ModalBody>
                    <div className="p-2 w-full text-center">
                        <div className="text-center pb-2">
                            <label htmlFor="email" className="leading-7 text-xl text-black ">Enter your email id</label>
                            <input type="email" id="email" name="email" onChange={handleChange} value={email_name}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        {otp_flag === '1' &&
                            <div className="text-center pb-2">
                                <label htmlFor="opt" className="leading-7 text-xl text-black ">Enter otp sent to your email id</label>
                                <input type="number" id="otp" name="otp" onChange={otp_number} value={otp}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        }
                        {email_flag === '1' ? <div className="text-xl">You have already subscribed :)</div> : <div className="text-xl">{emailError}</div>}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="mx-auto">
                        <Button
                            color="red"

                            onClick={() => {
                                if (otp_flag === '1') {
                                    send_otp()
                                } else {
                                    check_email()
                                }

                            }}
                            ripple="light">
                            {otp_flag === '1' ? 'Subscribe' : 'Check Mail'}
                        </Button>
                    </div>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default ContactMe