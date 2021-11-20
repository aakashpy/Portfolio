import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const PaymentIntegration = (props) => {
    return (
        <div className="bg-gradient-to-r from-blue-900 via-black to-blue-900 h-auto text-white ">
            {props.navbar}
            <div className="text-white text-center text-5xl pt-4 pb-4">
                Payment Integration
            </div>
            <hr />
            <div className="text-white text-center pt-4 pl-2 pr-2">
                <h2 className="text-4xl pb-3">
                    Description
                </h2>
                <p className="pb-4 text-2xl font-base">
                The payment gateway processes the customer's credit card information by sending the data to the gateway's web server, 
                which then makes the sale and sends the confirmation back to the website. User can quickly integrate gateway into their website's shopping cart software or for
                any other purpose.
                </p>
                <p className="pb-4 text-2xl font-base">
                In this project I have made a simple donation website to help farmers. 'This is just a basic dummy website no donation is been taken from users'. 
                I have used MERN stack to built the website and used third party API named RazorPay which allows user to integrate payment gateway in 
                their website and perform transactions. Only test mode of RazorPay is used, therefore no actual transaction will be performed. After a successful transaction
                an automated email will be sent to user email about the payment information. This is done with the help of Email.js library which allows us to send 200 emails/month
                for free.
                </p>
                <hr />
            </div>
            <hr />
            <div className=" mt-2 mb-4">
                <h1 className="text-center text-white text-4xl mt-4">Working of Project</h1>
                <div className=" mt-4 ml-3 mr-3 p-2 text-center text-xl bg-white">
                    <table className="table-fixed border-separate border-black">
                        <thead>
                            <tr>
                                <th className="w-1/6 ..."></th>
                                <th className="w-5/6 ..."></th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-400">
                            <tr>
                                <td className="border border-black">
                                    STEP 1 -{'>'}
                                </td>
                                <td className="border border-black">
                                    Clone the project using the github link given below. In the terminal type 'npm init' to install node modules. Go to the browser and serach for
                                    Email.js. Click on the first link, create your account. Now go to integration link on the left hand side and choose your framework for integration.
                                    For more information <a target="_blank" rel="noreferrer" 
                                    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.emailjs.com/docs/sdk/installation/">visit</a> 
                                    there documentation where they have given code examples for email integrations.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black">
                                    STEP 2 -{'>'}
                                </td>
                                <td className="border border-black">
                                    Once you are done with the email integration, next step is to integrate payment gateway. Go to the browser and search for RazorPay. Click on the first link 
                                    and create your account. Make sure the test mode is On which you can see on the top of the dashboard. Now search for RazorPay integration documents or go to 
                                    this <a target="_blank" rel="noreferrer" 
                                    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://razorpay.com/docs/payment-gateway/server-integration/nodejs/">link</a>
                                    'Here I have given link for integration with Node js you can search the integration steps for your own framework'. Follow the steps given below. 
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black">
                                    STEP 3 -{'>'}
                                </td>
                                <td className="border border-black">
                                    If are using the same project files the only thing you have to do is make an '.env' file in your root folder and store api keys for both RazorPay and Email.js. 
                                    Once you are done with the above steps, you can run the project. First go into the clients directory and in terminal type 'npm start'. In another terminal
                                    type 'node server' to run the backend server. If everything is done right the website should be up and running. Fill up the form and make payment you will see Razorpay 
                                    screen where you can choose any payment method you want. After successfull payment you will get an email about your payment details. 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <hr />
            <div className="text-white text-4xl text-center mt-4 mb-4">
                Project Link
                <div className="text-white text-2xl text-center mt-2 mb-4">
                    Click Here -{'> '}
                    <a className="underline" href="https://github.com/aakashpy/payment_integration">Payment Integration</a><br/>
                </div>
            </div>
            <hr />
            <div className="text-white text-4xl text-center mt-4">
                Images of the Project
            </div>
            <div className="pt-4 pb-8 mx-auto">
                <Splide options={{
                    rewind: true,
                    autoplay: true,
                }}>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/PAYMENT/home.jpg').default} alt="First slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/PAYMENT/payment.jpg').default} alt="Second slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/PAYMENT/email.jpg').default} alt="Third slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/PAYMENT/detail.jpg').default} alt="Fourth slide" />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    )
}

export default PaymentIntegration
