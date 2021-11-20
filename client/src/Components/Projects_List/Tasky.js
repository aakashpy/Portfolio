import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Tasky = (props) => {
    return (
        <div className="bg-gradient-to-r from-blue-900 via-black to-blue-900 h-auto text-white">
            {props.navbar}
            <div className="text-white text-center text-5xl pt-4 pb-4">
                Task Management System
            </div>
            <hr />
            <div className="text-white text-center pt-4 pl-2 pr-2">
                <h2 className="text-4xl pb-3">
                    Description
                </h2>
                <p className="pb-4 text-2xl font-base">
                    Task Management System is a simple website made from React js. In this users can create simple task by filling in all the details given in the form.
                    The tasks are saved in the local storage of the browsers. After creating a task user can then update the task details or delete the task.
                    There is a serch bar on the top where user can find their particular task. The website is responsive for both small and large devices.
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
                                    Clone the project using the github link given below. In the terminal type 'npm init' to install node modules. Then run the project by typing 'npm start'.
                                    The website will start running within few seconds. Click on Add New button on the navbar. Fill in the details in the modal form. Make sure you give image url and
                                    not image path from your local computer. Click on Add task to add your task.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black">
                                    STEP 2 -{'>'}
                                </td>
                                <td className="border border-black">
                                    Once you have added your task, on each task card you will see two buttons, Edit and Delete. Click on edit button and then click on any information you want to edit. 
                                    Type the updated information and click Save changes. Click on Delete button to Delete the Task.
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
                    <a className="underline" href="https://github.com/aakashpy/Tasky">Task Management system</a><br/>
                    You can visit the website by clicking the link below
                    <div className="text-white text-2xl text-center mt-2 mb-4">
                    Click Here -{'> '}
                        <a className="underline" href="https://aakashpy.github.io/Tasky/">VISIT</a>
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
                        <img className=" mx-auto w-3/4" src={require('../Images/TASKY/home.jpg').default} alt="First slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/TASKY/form.jpg').default} alt="Second slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/TASKY/edit.jpg').default} alt="Third slide" />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    )
}

export default Tasky
