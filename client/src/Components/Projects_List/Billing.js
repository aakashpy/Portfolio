import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Contributors from '../../Static_Component/Contributors'

const Billing = (props) => {
    return (
        <div className="bg-gradient-to-r from-blue-900 via-black to-blue-900 h-auto text-white ">
            {props.navbar}
            <div className="text-white text-center text-5xl pt-4 pb-4">
                Restaurant Billing System
            </div>
            <hr />
            <div className="text-white text-center pt-4 pl-2 pr-2">
                <h2 className="text-4xl pb-3">
                    Description
                </h2>
                <p className="pb-4 text-2xl font-base">
                    Restaurant Billing System is a small GUI application which generates bill receipts for food items purchased by the customers. This application's design is made
                    from software named QT designer which generates an xml file. The backend part of the application is written in python language.
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
                                    Clone the project using the github link given below. Run the main.py file. The application might take time to open depending on your system.
                                    On the left hand side of the screen you can see list of all food items. On the top there are two buttons 'Veg' and 'Non Veg'.
                                    Clicking on those buttons will show you the foods items accordingly. Double click on any food item and you will see the on the right side of the screen
                                    the item details. You can increase the quantity of the item and the price changes accordingly. Click on Add Item to add the item in the billing list.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black">
                                    STEP 2 -{'>'}
                                </td>
                                <td className="border border-black">
                                    Once you have added all your items, enter the customer name above. Click on Generate Bill button below to generate a new bill. The new bill can be viewed
                                    in the same directory where all the project files are present. If you want to check any existing bill, type the bill number in the 'Bill no.' section and
                                    click on 'Show bill' button below. If any bill are present of that number it will show the bill in the below screen.
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
                    <a className="underline" href="https://github.com/aakashpy/BillingSystem">Restaurant Billing System</a><br/>
                </div>
            </div>
            <hr />
            <div className="text-white text-4xl text-center mt-4">
                Images of the Project
            </div>
            <div className="pt-4 pb-8 mx-auto md:w-3/4">
                <Splide options={{
                    rewind: true,
                    autoplay: true,
                }}>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/BILLING/home.jpg').default} alt="First slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/BILLING/details.jpg').default} alt="Second slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/BILLING/bill.jpg').default} alt="Third slide" />
                    </SplideSlide>
                </Splide>
            </div>
            <hr />
            {<Contributors/>}
        </div>
    )
}

export default Billing
