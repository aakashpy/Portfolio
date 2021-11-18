import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
const Shot = (props) => {
    return (
        <div className="bg-gradient-to-r from-blue-900 via-black to-blue-900 h-auto text-white">
            {props.navbar}
            <div className="text-white text-center text-5xl pt-4 pb-4">
                Online Mobile Store Website
            </div>
            <hr />
            <div className="text-white text-center pt-4 pl-2 pr-2">
                <h2 className="text-4xl pb-3">
                    Description
                </h2>
                <p className="pb-4 text-2xl font-base">
                    Online shopping is a form of electronic commerce that allows consumers to directly buy goods or services from a seller over the Internet using a web browser.
                    These shopping sites, enable customers to browse through a companies' products and services even on smartphones.
                    Customers are attracted to online shopping not only because of high levels of convenience, but also because of broader selections,
                    competitive pricing, and greater access to information.
                </p>
                <p className="pb-4 text-2xl font-base">
                    This is an online mobile store website made using HTML, CSS, PHP, and JS. I have also used the Bootstrap framework in this project.
                    This project is very similar to other online shopping websites where new users have to register their account on the website
                    and registered users need to log in using their account. There are two types of mobiles Apple and Android.
                    On the left-hand side of the screen there are some filtering options and according to that mobiles will be displayed with their name, image, price etc.
                </p>
                <p className="pb-4 text-2xl font-base">
                    On clicking the add to cart button the selected mobile will be added in your cart. you can add multiple mobiles in the cart. In the My Cart's page you will see
                    all the mobiles which you have added in the cart and the total amount will be calculated and shown below. By clicking on Buy now your purchase is completed
                    and you are redirected to success page where a message is displayed that your payment is successful. In contact page user can ask any queries by entering their
                    name and email address and message you want to sent.  All the data of the user is stored in the database {'('}MariaDB{')'}.
                    There are four database user details, all mobiles details, mobiles brought by users and user queries.
                </p>
                <hr />
            </div>
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
                                    First you have to learn how to use xamp or wamp software. This software help you to create a local server on your machine. You can learn them from any
                                    youtube videos, very easy to learn. Download the files from the github link given below. Start the local server using any of the software wamp or xamp and open
                                    the index.html file. You will see the Home page of the website. On the navbar there are two links Sign Up and Login. Login if you have already created an account or
                                    click on Sign up link to create your account.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black">
                                    STEP 2 -{'>'}
                                </td>
                                <td className="border border-black">
                                    Once you are logged in you will be redirected to the products page where all mobiles will be shown. If you want to see only android phones they have to click on the radio button
                                    of Android and click Filter button below. You will see only Android phones on the screen. The same thing is for Apple phones. For more filters you can choose options like
                                    brand ,android version, battery and ram and the results will be sorted accordingly. If no such matches are found then a message will be displayed that no results are matched.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black">
                                    STEP 3 -{'>'}
                                </td>
                                <td className="border border-black">
                                    Choose which ever phone you want by clicking on Add to Cart. On clicking on Add to Cart the button changes to green color with text Added to cart. Then on Cart's Page
                                    you can see the mobile you have selected and the total price below. If you want to remove the mobile there is an remove option on the right which removes the mobile
                                    from the cart. Click on Confirm order button to confirm your purchase. next you will be redirected to the success page showing a message 'Your order is confirmed'. You can continue shopping
                                    or log out of your account if you want.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black">
                                    STEP 4 -{'>'}
                                </td>
                                <td className="border border-black">
                                    If you want to change password of your account go to settings and fill the form for changing your password. If you any query then contact us by going to Contact Us page
                                    and fill the form.
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
                    <a className="underline" href="https://github.com/aakashpy/MOBILE-store">SHOT Mobile Store</a>
                </div>
            </div>
            <hr />
            <div className="text-white text-4xl text-center mt-4">
                Images of the Project
            </div>
            <div className="pt-4 pb-8 mx-auto">
                <Splide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/SHOT/home.jpg').default} alt="First slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/SHOT/signup.jpg').default} alt="Second slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/SHOT/products.jpg').default} alt="Third slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/SHOT/cart.jpg').default} alt="Fourth slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/SHOT/success.jpg').default} alt="Fifth slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/SHOT/about.jpg').default} alt="Sixth slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/SHOT/contact.jpg').default} alt="Seventh slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/SHOT/settings.jpg').default} alt="Eighth slide" />
                    </SplideSlide>
                </Splide>
            </div>
            <hr />
            <div className="text-white text-4xl text-center mt-4">
                Contributors to this project
            </div>
            <section className="text-white body-font">
                <div className="px-5 py-12 mx-auto">
                    <div className="flex flex-wrap -m-2 justify-center md:h-96">
                        <div className="lg:w-1/4 lg:mb-0 mb-6 p-4  bg-gray-500 rounded-lg mr-2 ml-1 relative">
                            <div className="h-full text-center">
                                <img alt="Aakash" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={require('../Images/CONTRIBUTORS/Aakash.jpg').default} />
                                <p className="text-3xl">Aakash Ghole</p>
                                <p className="leading-relaxed">3rd Year Computer Science Student at Atharva College of Engineering, Mumbai Unversity</p>

                                <p className="text-white mb-3 mt-3">Full stack Web Developer,GUI Developer and Android Developer</p>
                                <div className="flex justify-center md:absolute md:bottom-1 md:inset-x-0">
                                    <a href="https://github.com/aakashpy" target="_blank" rel="noreferrer" className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                            src={require('../Images/github.png').default} alt="github" />
                                    </a>
                                    <a href="https://www.instagram.com/aakashg_03/" target="_blank" rel="noreferrer" className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                            src={require('../Images/insta.png').default} alt="insta" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/aakash-ghole-350332218/" target="_blank" rel="noreferrer" className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                            src={require('../Images/linkdin.png').default} alt="linkdin" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 lg:mb-0 mb-6 p-4 bg-gray-500 rounded-lg mr-1 ml-1 relative">
                            <div className="h-full text-center">
                                <img alt="Sneha" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={require('../Images/CONTRIBUTORS/Sneha.jpg').default} />
                                <p className="text-3xl">Sneha Dhumal</p>
                                <p className="leading-relaxed">3rd Year Computer Science Student at Atharva College of Engineering, Mumbai Unversity</p>

                                <p className="text-white mb-3 mt-3">Full stack Web Developer and UI designer</p>
                                <div className="flex justify-center md:absolute md:bottom-1 md:inset-x-0">
                                    <a href="https://github.com/SnehaDhumal1508" target="_blank" rel="noreferrer" className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                            src={require('../Images/github.png').default} alt="github" />
                                    </a>
                                    <a href="https://www.instagram.com/snehadhumal_15/" target="_blank" rel="noreferrer" className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                            src={require('../Images/insta.png').default} alt="insta" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/sneha-dhumal/" target="_blank" rel="noreferrer" className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                            src={require('../Images/linkdin.png').default} alt="linkdin" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 lg:mb-0 mb-6 p-4 bg-gray-500 rounded-lg mr-1 ml-2 relative">
                            <div className="h-full text-center">
                                <img alt="Dhairya" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={require('../Images/CONTRIBUTORS/Dhairya.jpg').default} />
                                <p className="text-3xl">Dhairya Honrao</p>
                                <p className="leading-relaxed">3rd Year Computer Science Student at Atharva College of Engineering, Mumbai Unversity</p>
                                <p className="text-white mb-3 mt-3">IOT specialist and UI designer</p>
                                <div className="flex justify-center md:absolute md:bottom-1 md:inset-x-0">
                                    <a href="https://github.com/DhairyaHonrao" target="_blank" rel="noreferrer" className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                            src={require('../Images/github.png').default} alt="github" />
                                    </a>
                                    <a href="https://www.instagram.com/dhairya_honrao/" target="_blank" rel="noreferrer" className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                            src={require('../Images/insta.png').default} alt="insta" />
                                    </a>
                                    {/* <a href="https://www.linkedin.com/in/sneha-dhumal/" target="_blank" rel="noreferrer"className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                        src={require('../Images/linkdin.png').default} alt="linkdin"/>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Shot