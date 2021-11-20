import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Contributors from '../../Static_Component/Contributors'

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
                <Splide options={{
                    rewind:true,
                    autoplay:true,
                }}>
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
            {<Contributors/>}
        </div>
    )
}

export default Shot