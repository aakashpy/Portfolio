import React, { useState, useEffect, useRef } from 'react'
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import validator from 'validator'
import emailjs from 'emailjs-com'
import axios from 'axios'
import insta from './Images/insta.png'
import linkdin from './Images/linkdin.png'
require('dotenv').config()

const ContactMe = (props) => {
    //for subscribe
    const [showModal, setShowModal] = useState(false);
    const [email_name, setemailName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [email_flag, setemail_flag] = useState('');
    const [otp, setOtp] = useState('');
    const [otp_flag, setotp_flag] = useState('');
    const [otp_flag_button, setotp_flag_button] = useState('');
    const [otp_Number, setotp_Number] = useState('')
    const [isSubscribed, setisSubscribed] = useState(false);
    const [isValid, setisValid] = useState(false);

    useEffect(() => {
        if (otp === String(otp_Number) && otp !== '') {
            setEmailError('OTP is valid')
            setisValid(true);
            setotp_flag_button('2')
        }
        if (otp !== String(otp_Number) && otp !== '') {
            setEmailError('OTP is invalid')
            setotp_flag_button('0')
        }

    }, [otp, otp_Number])
    const handleChangeSubscribe = (e) => {
        e.preventDefault();
        setemailName(e.target.value);
        var email = e.target.value
        setemail_flag('0')
        setotp_flag('')

        if (validator.isEmail(email)) {
            setEmailError('Valid Email!')
            setisValid(true);
            setotp_Number(Math.floor(Math.random() * 100000) + 10000);
        } else {
            setEmailError('Enter valid Email!')
            setisValid(false);
        }
    };
    const check_email = () => {
        if (email_name !== "") {
            axios.get(`/api/email/${email_name}`)
                .then(res => {
                    if (res.data.error) {
                        setisValid(false);
                        setotp_flag('1')
                        setemail_flag('0')
                        setEmailError('')
                        const msg = {
                            to: email_name,
                            from: 'gholeaakash03@gmail.com', // Use the email address or domain you verified above
                            subject: `OTP verification from Aakash's Portfolio`,
                            text: `your otp number is ${otp_Number}`,
                        };
                        axios.post('/api/email/sendOtp', msg)
                            .then(res => {
                                setemail_flag('0')
                                setEmailError('')
                            })
                            .catch(err => console.log(err))
                    }
                    else {
                        setemail_flag('1')
                    }
                }
                )
        }
    }
    const otp_number = (e) => {
        e.preventDefault();
        setOtp(e.target.value);
    }
    const add_email = () => {
        const addEmail = {
            email: email_name
        }
        axios.post('/api/email/add', addEmail)
            .then(res => res.data)
        setisSubscribed(true)
        setotp_flag_button('1')
    }
    const close = () => {
        setShowModal(false)
        setisSubscribed(false)
        setotp_flag('')
        setemailName('')
        setEmailError('')
        setotp_flag_button('')
        setOtp('')
        setotp_Number('')
        setisValid(false);
    }

    //for submit
    const form = useRef();
    const [form_modal, setform_modal] = useState(true);
    const [form_submitted, setform_submitted] = useState(false);
    const [values, setValues] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(values => ({ ...values, [name]: value, }));
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (values.email !== '' && validator.isEmail(values.email)) {
            if (values.name !== "" && values.name !== "") {
                setform_modal(false)
                axios.get(`/api/email/${values.email}`)
                    .then(res => {
                        if (res.data.error) {
                            //tell user you have to subcribe first for security reasons and clear the form
                            setShowModal(true)
                            setform_submitted(false)
                        }
                        else {
                            // submit there response
                            emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
                                .then((result) => {
                                    setShowModal(true)
                                    setform_submitted(true)
                                }, (error) => {
                                    console.log(error.text);
                                });
                        }
                    }
                    )
            }
        }
    }
    return (
        <>
            <div className="bg-gradient-to-r from-blue-900 via-black to-blue-900 h-auto lg:pb-20">
                {props.navbar}
                <section className="text-white body-font relative">
                    <div className="container px-5 py-5 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-4xl text-6xl font-medium title-font mb-4 text-white">Contact Me</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">I will get in touch with you soon...</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <form onSubmit={onSubmit} ref={form}>
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="name" className="leading-7 text-md text-white">Name</label>
                                            <input type="text" id="name" name="name" value={values.name || ''} onChange={handleChange} required
                                                className="w-full rounded border border-gray-300 focus:border-indigo-500 bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="email" className="leading-7 text-md text-white">Email</label>
                                            <input type="email" id="email" name="email" value={values.email || ''} onChange={handleChange} required
                                                className="w-full rounded border border-gray-300 focus:border-indigo-500 bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="message" className="leading-7 text-md text-white">Message</label>
                                            <textarea id="message" name="message" value={values.message || ''} onChange={handleChange} required
                                                className="w-full rounded border border-gray-300 focus:border-indigo-500 bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <button className="text-white rounded-lg md:h-auto md:w-28 border-2 border-double text-center text-xl
                                    flex justify-center m-auto px-5 py-3 bg-gradient-to-r from-blue-500 via-black to-blue-500
                                    hover:from-black hover:via-blue-500 hover:to-black focus:from-black focus:via-blue-500 focus:to-black"
                                            type="submit" >Submit</button>
                                    </div>
                                </div>
                            </form>
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
                                    onClick={(e) => {
                                        setShowModal(true)
                                        setform_modal(true)
                                        }}>Subscribe</button>
                            </div>
                            <div>to get all notifications via email</div>
                        </div>
                    </div>
                </section>
            </div>
            <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>
                {form_modal ? <ModalBody>
                    <>
                        {isSubscribed ? <div className="text-center">You are now subscribed</div> :
                            <div className="p-2 w-full text-center">
                                <div className="text-center pb-2">
                                    <label htmlFor="email" className="leading-7 text-xl text-black ">Enter your email id</label>
                                    <input type="email" id="email" name="email" onChange={handleChangeSubscribe} value={email_name} required
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                {(otp_flag === '1') &&
                                    <div className="text-center pb-2">
                                        <label htmlFor="opt" className="leading-7 text-xl text-black ">Enter otp sent to your email id</label>
                                        <input type="number" id="otp" name="otp" onChange={otp_number} value={otp}
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                }
                                {email_flag === '1' ? <div className="text-xl">You have already subscribed :{')'}</div> : <div className="text-xl">{emailError}</div>}
                            </div>}
                    </>
                </ModalBody>
                    : <ModalBody>
                        <>
                            {form_submitted ? <div className="p-2 w-full text-center text-xl text-green-700 font-semibold">
                                Your response is submitted and would be sent via your email
                            </div>
                                :
                                <div className="p-2 w-full text-center text-xl text-red-700 font-semibold">
                                    You have to subcribe first for security reasons
                                </div>}
                        </>
                    </ModalBody>}

                <ModalFooter>
                    <div className="mx-auto">
                        {isValid ? <Button
                            color="red"
                            onClick={() => {
                                
                                if (otp_flag_button === '2') {
                                    add_email()
                                } else if (otp_flag_button === '1') {
                                    close()
                                } else {
                                    check_email()
                                }
                            }}
                            ripple="light">
                            {(otp_flag_button !== '1' && otp_flag_button !== '2') && 'Check email'}
                            {otp_flag_button === '2' && 'Subscribe'}
                            {otp_flag_button === '1' && 'Close'}
                        </Button> :
                            <Button onClick={() => setShowModal(false)}>
                                Close
                            </Button>}
                    </div>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default ContactMe