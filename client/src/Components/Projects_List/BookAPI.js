import React from 'react'

const BookAPI = (props) => {
    return (
        <div className="bg-gradient-to-r from-blue-900 via-black to-blue-900 h-auto text-white ">
            {props.navbar}
            <div className="text-white text-center text-5xl pt-4 pb-4">
                Book API
            </div>
            <hr />
            <div className="text-white text-center pt-4 pl-2 pr-2">
                <h2 className="text-4xl pb-3">
                    Description
                </h2>
                <p className="pb-4 text-2xl font-base">
                    API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.
                    API's sit between an application and the web server, acting as an intermediary layer that processes data transfer between systems. In this project I have made
                    a small Book API with help of Node js, Express and Mongo DB. This project does not have any frontend. There are three main routes 1{')'} book 2{')'} author
                    and 3{')'} publications and in each of them contains seperate routes for inserting, updating and deleting data. I have used VS code and Thunder Client extension in
                    VS code for running the url routes which is similar to Postman.
                </p>
            </div>
            <hr />
            <div className=" mt-2 mb-4">
                <h1 className="text-center text-white text-4xl mt-4">Working of Project</h1>
                <div className=" mt-4 ml-3 mr-3 p-2 text-xl bg-white">
                    <table className="table-fixed border-separate border-black">
                        <thead>
                            <tr>
                                <th className="w-1/6 ..."></th>
                                <th className="w-5/6 ..."></th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-400">
                            <tr>
                                <td className="border border-black text-center">
                                    STEP 1 -{'>'}
                                </td>
                                <td className="border border-black ">
                                    Go to the project link given below and clone the files in your local machine. Once the download is complete, in your terminal type 'npm init' to install node packages.
                                    It would take some time depending on your net speed. Once the installation is complete, again we have to install two more packages. Type 'npm i dotenev' and hit enter and after
                                    that type 'npm i nodemon'.
                                    dotenv module is used for storing all your secret credentials which you would not like to show in production environment and nodemon module is used to automatically restart your
                                    local server whenever you make some changes in your file. Once all installation is done open the package.json file. Under the scripts remove everything and write ("dev":"npx nodemon index").
                                    Your script should look like this: 
                                    <img className="mx-auto"src={require('../Images/BOOK_API/image1.jpg').default} alt="image_script"/>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black text-center">
                                    STEP 2 -{'>'}
                                </td>
                                <td className="border border-black">
                                    Now you have to create an account on Mongo DB and create a new cluster for your database. Refer any yt videos for learning Mongo DB. Connect your mongo DB account 
                                    to your Node js. Now create a file and name it '.env' in your root folder. In that file write ' MONGO_URI = your screat key '. Note no paranthesis or quotes should be
                                    written while writng this syntax. Once you have written the scret key open the terminal and type 'node dev'. If everything is right your server should start running and your
                                    connection with Mongo DB should be established.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black text-center">
                                    STEP 3 -{'>'}
                                </td>
                                <td className="border border-black">
                                   Now install an extension named Thunder Client in VS code. Select what type of request you want to give for ex POST, GET, PUT etc.
                                   In the url make sure you type http and not https as it would give error. Type 'http://localhost:4000/' and hit Send button. You will see all the responses on the right 
                                   side of your screen. You can see all the routes in the requirements file. While giving POST and PUT request you have to pass data in the Body tab. 
                                   Refer the images  
                                   for POST request <a href={require('../Images/BOOK_API/Post.jpg').default} target="_blank" rel="noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Click here</a>{'  '}
                                   for PUT request <a href={require('../Images/BOOK_API/Put.jpg').default} target="_blank" rel="noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Click here</a>
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
                    <a className="underline" href="https://github.com/aakashpy/BookAPI">Book API</a>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default BookAPI
