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
        </div>
    )
}

export default Attendance
