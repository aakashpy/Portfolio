import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Sparkx = (props) => {
    return (
        <div className="bg-gradient-to-r from-blue-900 via-black to-blue-900 h-auto text-white">
            {props.navbar}
            <div className="text-white text-center text-5xl pt-4 pb-4">
                Sparkx Bank
            </div>
            <hr />
            <div className="text-white text-center pt-4 pl-2 pr-2">
                <h2 className="text-4xl pb-3">
                    Description
                </h2>
                <p className="pb-4 text-2xl font-base">
                    Sparkx Bank is a small bank website made using React framework for frontend and Node js, Express and Mongo DB for backend. It is a simple website where users can transfer money to one another. In the customers tab
                    there are list of customers with there details. Each information about the customer is static except the amount. In the transfers tab all the list of transaction will be
                    shown. On clicking on more info link on particular customers card will redirect you to the page where all the transaction done by this customer that is money transfered and
                    money received will be shown below. This website is responsive for both small screens and large screens.
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
                                    Clone the project using the github link given below. In the terminal type 'npm init' to install node modules. If you want to add your own customers
                                    details in the project you have to create a database using Mongo DB and connect it to the project. You can learn the Mongo DB from any yt videos.
                                    You have to create two databases 1{')'} Customers for customer details and 2{')'} Transfers for transaction details.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black">
                                    STEP 2 -{'>'}
                                </td>
                                <td className="border border-black">
                                    Once you are done with the above steps, you can run the project. First go into the clients directory and in terminal type 'npm start'. In another terminal
                                    type 'node server' to run the backend server. If everything is done right the website should be up and running. The Home page is staic page with some fade in animations.
                                    In the navbar there are 3 links 1{')'} Customers 2{')'} Transactions and 3{')'} About.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black">
                                    STEP 3 -{'>'}
                                </td>
                                <td className="border border-black">
                                    In Customers link you will see all the customers cards with some basic information and link 'Click here for more info'. On clicking on that link you will be redirect you to the page
                                    where all the transaction done by this customer that is money transfered and money received will be shown below in form of tables.
                                    A form is given where user has to select the name of the customer and enter the amount, not less than 100 Rs, to transfer money. On clicking on Make Transaction,
                                    an alert message will be displayed that amount is been transfered and the amount will be changed accordingly for both the users.
                                    In the more info link for the person, which user have transfered money, user can see the transaction in the received transaction table with user name and the amount transfered.
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
                    <a className="underline" href="https://github.com/aakashpy/sparkx-bank">Sparkx Bank</a><br/>
                    You can visit the website by clicking the link below
                    <div className="text-white text-2xl text-center mt-2 mb-4">
                    Click Here -{'> '}
                        <a className="underline" href="https://sparkx-bank.herokuapp.com/">VISIT</a>
                    </div>
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
                        <img className=" mx-auto w-3/4" src={require('../Images/SPARKX/home.jpg').default} alt="First slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/SPARKX/customers.jpg').default} alt="Second slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/SPARKX/customer_details.jpg').default} alt="Third slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/SPARKX/transaction.jpg').default} alt="Fourth slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/SPARKX/about.jpg').default} alt="Fifth slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/SPARKX/customer_backend.jpg').default} alt="Sixth slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/SPARKX/transfer_backend.jpg').default} alt="Seventh slide" />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    )
}

export default Sparkx
