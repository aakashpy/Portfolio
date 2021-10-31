import React from 'react'
import NodeMCU from '../Images/NodeMCU.jpg'
import fingerprint from '../Images/fingerprint.jpg'
import pushbuttons from '../Images/pushbuttons.jpg'
import i2c_lcd from '../Images/i2c_lcd.jpg'
import jumpers from '../Images/jumpers.jpg'
import breadboard from '../Images/breadboard.jpg'

const Attendance = (props) => {
    return (
        <div className="bg-gradient-to-r from-blue-900 via-black to-blue-900 h-auto">
            {props.navbar}
            <div className="text-white text-center text-5xl pt-4 pb-4">
                IOT Attendance
            </div>
            <hr />
            <div className="text-white text-center pt-4 pl-2 pr-2">
                <h2 className="text-4xl pb-3">
                    Description
                </h2>
                <p className="pb-4 text-2xl font-base">
                    IOT Attendance is a system designed in such a way that it takes attendance of students with help of finger print sensor
                    and stores it google sheets via internet. This device is a portable and handy device which the user can take with him anywhere.
                </p>
                <hr />
                <h2 className="text-4xl pb-2 pt-5">
                    Hardware Used
                </h2>
                <section className="text-white body-font">
                    <div className="container px-5 py-8 mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="p-4 ml-2 mr-2 mb-3 border-2 rounded-lg">
                                <div className=" border-2 rounded-lg p-3 bg-gray-800 h-full">
                                    <div className="block relative h-48 rounded">
                                        <img alt="NodeMCU" className="object-center w-full h-full block p-2 rounded-lg" src={NodeMCU} />
                                    </div>
                                    <h3 className="text-white text-3xl font-semibold mb-1 mt-3">NodeMCU</h3>
                                    <h4 className="text-white text-md font-medium pb-4">NodeMCU is a low-cost open source IoT platform. It initially included firmware which runs on the ESP8266 Wi-Fi SoC from Espressif Systems, and hardware which was based on the ESP-12 module. Later, support for the ESP32 32-bit MCU was added.</h4>
                                    <a href="https://robu.in/product/nodemcu-cp2102-board/">
                                        <button className="text-white inline-flex items-center border-2 p-2 rounded-lg
                                bg-gradient-to-r from-blue-500 via-black to-blue-500 hover:from-black hover:via-blue-500 hover:to-black 
                                 bottom-2">BUY NOW</button></a>
                                </div>
                            </div>
                            <div className="p-4 ml-2 mr-2 mb-3 border-2 rounded-lg">
                                <div className="border-2 rounded-lg p-3 bg-gray-800 h-full">
                                    <div className="block relative h-48 rounded ">
                                        <img alt="fingerprint" className="object-center w-full h-full block p-2 rounded-lg" src={fingerprint} />
                                    </div>
                                    <h3 className="text-white text-3xl font-semibold mb-1 mt-3">Adafruit Finger Print Sensor</h3>
                                    <h4 className="text-white text-md font-medium pb-4">Secure your project with biometrics - this all-in-one optical fingerprint sensor will make adding fingerprint detection and verification super simple. These modules are typically used in safes - there's a high powered DSP chip that does the image rendering, calculation, feature-finding and searching.</h4>
                                    <a href="https://robu.in/product/as608-optical-fingerprint-sensor-fingerprint-module/"><button className="text-white inline-flex items-center border-2 p-2 rounded-lg
                                bg-gradient-to-r from-blue-500 via-black to-blue-500 hover:from-black hover:via-blue-500 hover:to-black">BUY NOW</button></a>
                                </div>
                            </div>
                            <div className="p-4 ml-2 mr-2 mb-3 border-2 rounded-lg">
                                <div className="border-2 rounded-lg p-3 bg-gray-800 h-full ">
                                    <div className="block relative h-48 rounded">
                                        <img alt="pushbuttons" className="object-center w-full h-full block p-2 rounded-lg" src={pushbuttons} />
                                    </div>
                                    <h3 className="text-white text-2xl font-semibold mb-1 mt-3">Push Buttons</h3>
                                    <h4 className="text-white text-lg font-medium pb-4">A push-button is a simple switch mechanism to control some aspect of a machine or a process. Buttons are typically made out of hard material, usually plastic or metal. The surface is usually flat or shaped to accommodate the human finger or hand, so as to be easily depressed or pushed.  </h4>
                                    <a href="https://robu.in/product/6x6x5mm-tactile-push-button-switch-pack-of-20/"><button className="text-white inline-flex items-center border-2 p-2 rounded-lg
                                bg-gradient-to-r from-blue-500 via-black to-blue-500 hover:from-black hover:via-blue-500 hover:to-black">BUY NOW</button></a>
                                </div>
                            </div>
                            <div className="p-4 ml-2 mr-2 mb-3 border-2 rounded-lg">
                                <div className="border-2 rounded-lg p-3 bg-gray-800 h-full ">
                                    <div className="block relative h-48 rounded overflow-hidden">
                                        <img alt="i2c_lcd" className="object-center w-full h-full block p-2 rounded-lg" src={i2c_lcd} />
                                    </div>
                                    <h3 className="text-white text-2xl font-semibold mb-1 mt-3">I2C 16x2 LCD display</h3>
                                    <h4 className="text-white text-lg font-medium pb-4">It is able to display 16x2 characters on 2 lines, white characters on blue background. This I2C 16x2 Arduino LCD Screen is using an I2C communication interface. It means it only needs 4 pins for the LCD display: VCC, GND, SDA, SCL</h4>
                                    <a href="https://robu.in/product/serial-lcd1602-iici2c-blue-backlight/"><button className="text-white inline-flex items-center border-2 p-2 rounded-lg
                                bg-gradient-to-r from-blue-500 via-black to-blue-500 hover:from-black hover:via-blue-500 hover:to-black">BUY NOW</button></a>
                                </div>
                            </div>
                            <div className="p-4 ml-2 mr-2 mb-3 border-2 rounded-lg">
                                <div className="border-2 rounded-lg p-3 bg-gray-800 h-full">
                                    <div className="block relative h-48 rounded overflow-hidden">
                                        <img alt="jumpers" className="object-center w-full h-full block p-2 rounded-lg" src={jumpers} />
                                    </div>
                                    <h3 className="text-white text-2xl font-semibold mb-1 mt-3">Jumper Cables</h3>
                                    <h4 className="text-white text-lg font-medium pb-4">Jumper wires are used for making connections between items on your breadboard and your Arduino’s header pins. Use them to wire up all your circuits!</h4>
                                    <a href="https://robu.in/product/10-cm-40-pin-dupont-male-male-male-female-female-female-cable-combo/"><button className="text-white inline-flex items-center border-2 p-2 rounded-lg
                                bg-gradient-to-r from-blue-500 via-black to-blue-500 hover:from-black hover:via-blue-500 hover:to-black">BUY NOW</button></a>
                                </div>
                            </div>
                            <div className="p-4 ml-2 mr-2 mb-3 border-2 rounded-lg">
                                <div className="border-2 rounded-lg p-3 bg-gray-800 h-full">
                                    <div className="block relative h-48 rounded overflow-hidden">
                                        <img alt="breadboard" className="object-center w-full h-full block p-2 rounded-lg " src={breadboard} />
                                    </div>
                                    <h3 className="text-white text-2xl font-semibold mb-1 mt-3">Bread Board</h3>
                                    <h4 className="text-white text-lg font-medium pb-4">A breadboard is used to build and test circuits quickly before finalizing any circuit design. The breadboard has many holes into which circuit components like ICs and resistors can be inserted.</h4>
                                    <a href="https://robu.in/product/nodemcu-cp2102-board/"><button className="text-white inline-flex items-center border-2 p-2 rounded-lg
                                bg-gradient-to-r from-blue-500 via-black to-blue-500 hover:from-black hover:via-blue-500 hover:to-black">BUY NOW</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <hr />
            <div className=" mt-2 mb-4">
                <h1 className="text-center text-white text-4xl mt-4">Working of Project</h1>
                <div className=" mt-4 ml-3 mr-3 p-2 text-center text-xl bg-white">
                    <table className="table-fixed border-separate border-black">
                        <thead>
                            <tr>
                                <th className="w-1/6 ..."></th>
                                <th classNName="w-5/6 ..."></th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-400">
                            <tr>
                                <td className="border border-black">
                                    STEP 1 -{'>'}
                                </td>
                                <td className="border border-black">
                                    Do all the circuit connections as given in the diagram. Make sure u give 5 volt power supply to NodeMCU and not above it as it
                                    would damage the board. Upload the sketch from the github link given below to NodeMCu using Arduino IDE. Once the code is uploaded to the board you will
                                    see the introduction text on LCD screen. If connections are proper it should not give any errors.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black">
                                    STEP 2 -{'>'}
                                </td>
                                <td className="border border-black">
                                    On the LCD screen you will see a menu system {'['}1{')'} Attendance 2{')'} Settings {']'}. First check if the device is connected to the internet or
                                    not. If not then first connect it to the internet. As the fingerprint sensor does not have any fingerprints, we first have to go to the settings using the push Buttons
                                    and then enter the Faculty enroll. Faculty Enroll is for the super user who would be using this device for taking attendance.By default id will be 0. Place your finger on the scanner and follow the instructions
                                    shown on the LCD screen it your fingerprint gets stored.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black">
                                    STEP 3 -{'>'}
                                </td>
                                <td className="border border-black">
                                    Now the user (SuperUser) have to enroll students fingerprints. Now got to enter the students enroll function. Enter the id of the student using push buttons and
                                    press enter. Now ask studnets to place finger and follow the same steps as done before. Press the back push button after taking all fingerprints.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black">
                                    STEP 4 -{'>'}
                                </td>
                                <td className="border border-black">
                                    Now you have to create an account on IFTTT. You have to create an new applet, select webhooks in IF section, click on https request,enter the number of values you want to send
                                    (here we have taken 3 values).Then on (That) section  go to Google sheets and click on edit rows. After completing all the steps launch the Applet.
                                    For more clear stpes you can go to the youtube link <a href="https://www.youtube.com/watch?v=XVMze7O8qSQ" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">here</a>.
                                    Copy the google sheet id and paste it in the google sheet id section in the arduino code. Copy the google script code given in the github link and paste it the curent google sheet.
                                    Make another google sheet and add roll no and name of the students in two columns. Add this google sheet id in the previous google sheet's script.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black">
                                    STEP 5 -{'>'}
                                </td>
                                <td className="border border-black">
                                    After completing the above steps now your data from device will be ready to send the attendance. Now go to the Attendance function, on entering it would start scanning for the
                                    fingerprints. First the super user should give his fingerprint, if not given the function would exit. When falculty id is found it wolud ask for number of lectures the user want to
                                    mark attendance for students. Then the students should give their attenadnce one by one and on successful match it would show you the roll no and confidence number and within few seconds your
                                    attendance will be marked on the google sheets.Each day a new column will get filled because of the google script which you have pasted in the IFTTT google sheet.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black">
                                    STEP 6 -{'>'}
                                </td>
                                <td className="border border-black">
                                    Once the attendance is taken the faculty should give his fingerprint again to close the function. On doing so the students whose attendance is not recorded will automatically be marked as absent.
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
                <a className="underline"href="https://github.com/aakashpy/IOT-Attendance">IOT Attendance</a>
                </div>
            </div>
            <hr />
            <div className="text-white text-4xl text-center mt-4">
                Images of the Project
            </div>
            <div className="flex flex-wrap justify-center mt-4 mr-3 ml-3 pt-4 pb-4">
                <div className="border-2 p-2 m-2">
                    <a href={require('../Images/OUTPUT/i1.jpg').default} target="_blank" rel="noreferrer">
                        <img className="h-44 object-contain" src={require('../Images/OUTPUT/i1.jpg').default} alt="image1" />
                    </a>
                </div>
                <div className="border-2 p-2 m-2">
                    <a href={require('../Images/OUTPUT/i2.jpg').default} target="_blank" rel="noreferrer">
                        <img className="h-44 object-contain" src={require('../Images/OUTPUT/i2.jpg').default} alt="image2" />
                    </a>
                </div>
                <div className="border-2 p-2 m-2">
                    <a href={require('../Images/OUTPUT/i3.jpg').default} target="_blank" rel="noreferrer">
                        <img className="h-44 object-contain" src={require('../Images/OUTPUT/i3.jpg').default} alt="image3" />
                    </a>
                </div>
                <div className="border-2 p-2 m-2">
                    <a href={require('../Images/OUTPUT/i4.jpg').default} target="_blank" rel="noreferrer">
                        <img className="h-44 object-contain" src={require('../Images/OUTPUT/i4.jpg').default} alt="image4" />
                    </a>
                </div>
                <div className="border-2 p-2 m-2">
                    <a href={require('../Images/OUTPUT/i5.jpg').default} target="_blank" rel="noreferrer">
                        <img className="h-44 object-contain" src={require('../Images/OUTPUT/i5.jpg').default} alt="image5" />
                    </a>
                </div>
                <div className="border-2 p-2 m-2">
                    <a href={require('../Images/OUTPUT/i6.jpg').default} target="_blank" rel="noreferrer">
                        <img className="h-44 object-contain" src={require('../Images/OUTPUT/i6.jpg').default} alt="image6" />
                    </a>
                </div>
                <div className="border-2 p-2 m-2">
                    <a href={require('../Images/OUTPUT/i7.jpg').default} target="_blank" rel="noreferrer">
                        <img className="h-44 object-contain" src={require('../Images/OUTPUT/i7.jpg').default} alt="image7" />
                    </a>
                </div>
                <div className="border-2 p-2 m-2">
                    <a href={require('../Images/OUTPUT/i8.jpg').default} target="_blank" rel="noreferrer">
                        <img className="h-44 object-contain" src={require('../Images/OUTPUT/i8.jpg').default} alt="image8" />
                    </a>
                </div>
                <div className="border-2 p-2 m-2">
                    <a href={require('../Images/OUTPUT/i9.jpg').default} target="_blank" rel="noreferrer">
                        <img className="h-44 object-contain" src={require('../Images/OUTPUT/i9.jpg').default} alt="image9" />
                    </a>
                </div>
                <div className="border-2 p-2 m-2">
                    <a href={require('../Images/OUTPUT/i10.jpg').default} target="_blank" rel="noreferrer">
                        <img className="h-44 object-contain" src={require('../Images/OUTPUT/i10.jpg').default} alt="image10" />
                    </a>
                </div>
                <div className="border-2 p-2 m-2">
                    <a href={require('../Images/OUTPUT/i11.jpg').default} target="_blank" rel="noreferrer">
                        <img className="h-44 object-contain" src={require('../Images/OUTPUT/i11.jpg').default} alt="image11" />
                    </a>
                </div>
                <div className="border-2 p-2 m-2">
                    <a href={require('../Images/OUTPUT/i12.jpg').default} target="_blank" rel="noreferrer">
                        <img className="h-44 object-contain" src={require('../Images/OUTPUT/i12.jpg').default} alt="image12" />
                    </a>
                </div>
            </div>
            <hr />
            <div className="text-white text-4xl text-center mt-4">
                Contributors to this project
            </div>
            <section className="text-white body-font">
                <div className="px-5 py-12 mx-auto">
                    <div className="flex flex-wrap -m-2 justify-center">
                        <div className="lg:w-1/4 lg:mb-0 mb-6 p-4 bg-gray-500 rounded-lg mr-2 ml-1">
                            <div className="h-full text-center">
                                <img alt="Aakash" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={require('../Images/CONTRIBUTORS/Aakash.jpg').default}/>
                                    <p className="text-xl">Aakash Ghole</p>
                                    <p className="leading-relaxed">3rd Year Computer Science Student at Atharva College of Engineering, Mumbai Unversity</p>
                                    
                                    <p className="text-white mb-3 mt-3">Full stack Web Developer,GUI Developer and Android Developer</p>
                                    <div className="flex justify-center">
                                    <a href="https://github.com/aakashpy" target="_blank" rel="noreferrer"className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                        src={require('../Images/github.png').default} alt="github"/>
                                    </a>
                                    <a href="https://www.instagram.com/aakashg_03/" target="_blank" rel="noreferrer"className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                        src={require('../Images/insta.png').default} alt="insta"/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/aakash-ghole-350332218/" target="_blank" rel="noreferrer"className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                        src={require('../Images/linkdin.png').default} alt="linkdin"/>
                                    </a>
                                    </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 lg:mb-0 mb-6 p-4 bg-gray-500 rounded-lg mr-1 ml-1">
                            <div className="h-full text-center">
                                <img alt="Sneha" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={require('../Images/CONTRIBUTORS/Sneha.jpg').default}/>
                                <p className="text-xl">Sneha Dhumal</p>
                                    <p className="leading-relaxed">3rd Year Computer Science Student at Atharva College of Engineering, Mumbai Unversity</p>
                                    
                                    <p className="text-white mb-3 mt-3">Full stack Web Developer and UI designer</p>
                                    <div className="flex justify-center">
                                    <a href="https://github.com/SnehaDhumal1508" target="_blank" rel="noreferrer"className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                        src={require('../Images/github.png').default} alt="github"/>
                                    </a>
                                    <a href="https://www.instagram.com/snehadhumal_15/" target="_blank" rel="noreferrer"className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                        src={require('../Images/insta.png').default} alt="insta"/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/sneha-dhumal/" target="_blank" rel="noreferrer"className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                        src={require('../Images/linkdin.png').default} alt="linkdin"/>
                                    </a>
                                    </div>
                            </div>
                        </div>
                        {/* <div className="lg:w-1/4 lg:mb-0 mb-6 p-4 bg-gray-500 rounded-lg mr-1 ml-2">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={require('../Images/CONTRIBUTORS/Aakash.jpg').default}/>
                                <p className="text-xl">Dhairya Honrao</p>
                                    <p className="leading-relaxed">3rd Year Computer Science Student at Atharva College of Engineering, Mumbai Unversity</p>
                                    
                                    <p className="text-white mb-3 mt-3">IOT specialist and UI designer</p>
                                    <div className="flex justify-center">
                                    <a href="https://github.com/SnehaDhumal1508" target="_blank" rel="noreferrer"className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                        src={require('../Images/github.png').default} alt="github"/>
                                    </a>
                                    <a href="https://www.instagram.com/snehadhumal_15/" target="_blank" rel="noreferrer"className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                        src={require('../Images/insta.png').default} alt="insta"/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/sneha-dhumal/" target="_blank" rel="noreferrer"className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                        src={require('../Images/linkdin.png').default} alt="linkdin"/>
                                    </a>
                                    </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Attendance
