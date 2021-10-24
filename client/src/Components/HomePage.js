import React from 'react'
import Heroimage from './Heroimage.jpg'

const HomePage = () => {
    return (
        <>
            <div className="flex flex-col bg-gradient-to-r from-blue-900 via-black to-blue-900 h-auto pt-4 ">
                <div className="flex justify-center ">
                    <img className="rounded-full border-2 border-blue-900 h-25 w-24" src={Heroimage} alt="hero" />
                </div>
                <div className="flex flex-wrap text-center text-white mx-auto pb-4">
                    <h1 className="font-serif text-xl">Hello I am Aakash Ghole<br />
                        I am a Full Stack Web Developer,GUI developer and Android developer</h1>
                </div>
                <hr />
                {/* my skill sets */}
                {/* <div className="text-white flex flex-col mt-4 pb-7 md:hidden"> */}
                <div className="text-white flex flex-col mt-4">
                    <div className="font-serif text-center text-3xl">My Skill Sets</div>
                    <div className="flex flex-row flex-wrap justify-center pb-4">
                        <div>
                            <img className="h-32 w-32 m-3 rounded-lg" 
                            src="http://p92.com/binaries/content/gallery/p92website/technologies/htmlcssjs-overview.png" alt="html_css_js" />
                        </div>
                        <div>
                            <img className="h-32 w-32 m-3 rounded-lg" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlKW7jviISXnLDd1yrUX523QMz8vKWBBu4Bw&usqp=CAU" alt="php" />
                        </div>
                        <div>
                            <img className="h-32 w-32 m-3 rounded-lg" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt4Qv4f84Q4EYCCbq4PcfCRSPDhVS-kFAX-w&usqp=CAU" alt="bootstrap" />
                        </div>
                        <div>
                            <img className="h-32 w-32 m-3 rounded-lg" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKz4NbsiYyG4QdDkxTzbMN5L8Tbd4j1fjxqQ&usqp=CAU" alt="tailwind css" />
                        </div>
                        <div>
                            <img className="h-32 w-32 m-3 rounded-lg" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNwAT_Httcf5mB_Ag8zkMzvcXs8KzqX6bkQ&usqp=CAU" alt="MERN" />
                        </div>
                        <div>
                            <img className="h-32 w-32 m-3 rounded-lg" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuI8D9yi9-Kz19_wbJnhCKh7UgPnxJ7UpW3g&usqp=CAU" alt="python" />
                        </div>
                        <div>
                            <img className="h-32 w-32 m-3 rounded-lg" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcyffnr0tSbGuX-e_pvvTEPI_hi4B7TuI9vg&usqp=CAU" alt="gui" />
                        </div>
                        <div>
                            <img className="h-32 w-32 m-3 rounded-lg" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaS5NXjbdzA18_gI7XhSPIsQ5yFm92WanBIQ&usqp=CAU" alt="IOT" />
                        </div>
                        <div>
                            <img className="h-32 w-32 m-3 rounded-lg" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8B-h-XhDxP5a7Qd-HPdBoHiB1hbafQU_CNg&usqp=CAU" alt="ML" />
                        </div>
                        <div>
                            <img className="h-32 w-32 m-3 rounded-lg" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2iTxauuGc6CLCj2D_y5KWKAKpviYlJdMxHQ&usqp=CAU" alt="Android" />
                        </div>

                    </div>
                </div>
                {/* Button redirecting to projects page*/}
                <div className="mb-4">
                <button className="text-white rounded-lg border-2 border-double text-center text-xl
                flex justify-center m-auto px-5 py-3 bg-gradient-to-r from-blue-500 via-black to-blue-500
                hover:from-black hover:via-blue-500 hover:to-black focus:from-black focus:via-blue-500 focus:to-black">Explore</button>
                </div>
            </div>
        </>
    )
}
export default HomePage