import React from 'react'
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Contributors from '../../Static_Component/Contributors'

const ML = (props) => {
    return (
        <div className="bg-gradient-to-r from-blue-900 via-black to-blue-900 h-auto text-white ">
            {props.navbar}
            <div className="text-white text-center text-5xl pt-4 pb-4">
                GUI for Machine Learning
            </div>
            <hr />
            <div className="text-white text-center pt-4 pl-2 pr-2">
                <h2 className="text-4xl pb-3">
                    Description
                </h2>
                <p className="pb-4 text-2xl font-base">
                    Machine learning {'('}ML{')'} is a type of artificial intelligence {'('}AI{')'} that allows software applications to become
                    more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical
                    data as input to predict new output values.
                </p>
                <p className="pb-4 text-2xl font-base">
                    This application's design is made from software named QT designer which generates an xml file. The backend part of the application is written in python language.
                    In this project I have developed a GUI application where user can upload a csv file that is dataset and can apply machine learning algorithms
                    and predict values. This GUI application only works with supervised machine learning algorithms out of which three basic algorithms are available
                    1{')'} Linear Regression 2{')'} Logistic Regression 3{')'} Support Vector Machine. There are two tabs in the application, one for seeing all the dataset
                    values and perform sorting operations and second tab where user can generate different graphs for the given dataset and apply machine learning algorithms.
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
                                        Download the project files from the github link given below. Run the ML.py file. Install the python library files using pip if import error occurs.
                                        It will take some time to run the application depending on the system.
                                        On the start screen a dialog box will be shown to select a csv file. Select any csv file which contains dataset. The GUI will take time loading the dataset if 
                                        the dataset is very large. Once the dataset is loaded, you can perform Row and Column sorting by clicking on Sort button in the menu bar. A dialog box will appear
                                        for Row and Column sorting.  
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-black">
                                        STEP 2 -{'>'}
                                    </td>
                                    <td className="border border-black">
                                        Once you are done with the above steps, click on the Graph tab. Select the X-axis and Y-axis and hue {'('}if required{')'}. Select the type of graph you want to 
                                        generate. In this GUI there are six different types of graphs available. Click on Generate button to display the graph.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-black">
                                        STEP 3 -{'>'}
                                    </td>
                                    <td className="border border-black">
                                        In the bottom section, there are three parts. First part shows you the brief description of the dataset. Second part you have to choose if you want to replace nan values with 
                                        mean values or completely remove that row. Then select the columns you want to apply algorithm for. Make sure all the values are numerical, if not then write the name of the column 
                                        in the text box next to 'Encode Categorial Values' button and click that button. If the encoding is done the name should disappear. Click on Create model. If everything is done
                                        right the third part should be enabled. You can click on 'Show new table' button to see the new dataset if you have encoded any categorial values.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-black">
                                        STEP 4 -{'>'}
                                    </td>
                                    <td className="border border-black">
                                        Select any one algorithm out of three. Select what percent of the data you want to train by giving the number in the beside 'Percent for data to be trained'.
                                        Click on 'X-train/y-train' button. A dialog box will open choose the columns you want to train by double clicking on the columns and select the column for the y-train for the drop-down list. 
                                        Make sure the column in Y-train is not present in X-train or it will give you an error. Click on 'Train Model' button to train the dataset. You will the accuracy in the accuracy section.
                                        To predict values write the info that is the data for each trained columns and click predict value. The predicted value will be shown below the 'Result' section.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <hr />
            <hr />
            <div className="text-white text-4xl text-center mt-4 mb-4">
                Project Link
                <div className="text-white text-2xl text-center mt-2 mb-4">
                    Click Here -{'> '}
                    <a className="underline" href="https://github.com/aakashpy/MACHINELEARNING">GUI for Machine Learning</a><br/>
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
                        <img className=" mx-auto w-3/4" src={require('../Images/MACHINE/home.jpg').default} alt="First slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/MACHINE/files.jpg').default} alt="Second slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/MACHINE/row_col_sort.jpg').default} alt="Third slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/MACHINE/graphs.jpg').default} alt="Fourth slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/MACHINE/bar_graph.jpg').default} alt="Fifth slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/MACHINE/scatter_graph.jpg').default} alt="Sixth slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/MACHINE/ml1.jpg').default} alt="Seventh slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/MACHINE/ml2.jpg').default} alt="Eighth slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/MACHINE/ml3.jpg').default} alt="Nineth slide" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className=" mx-auto w-3/4" src={require('../Images/MACHINE/ml4.jpg').default} alt="Tenth slide" />
                    </SplideSlide>
                </Splide>
            </div>
            <hr />
            {<Contributors />}
        </div>
    )
}

export default ML
