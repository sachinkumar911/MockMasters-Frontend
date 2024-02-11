import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import pic from "./images/avatar.png"

const Instructionfirst = () => {
    const [uservalue,setusername] = useState('Username');
  return (
    <>
         <div class="flex flex-row ">
                <div class="bg-gray-50 p-6 h-[90vh] rounded-md overflow-y-scroll w-3/4">
                    <u class="font-bold"><b>General Instructions:</b></u><br /><br />
                    <ul class="list-disc ml-6">
                        <li>The clock will be set at the server. The countdown timer in the top right corner of the screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</li>
                        <li>The Question Palette displayed on the right side of the screen will show the status of each question using one of the following symbols:
                            <br />
                            <span>1</span> You have not visited the question.<br />
                            <span>3</span> You have not answered the question.<br />
                            <span>4</span> You have answered the question.<br />
                            <span>6</span> You have NOT answered the question, but have marked the question for review.<br />
                            <span>9</span> You have answered the question, but marked it for review.
                            <br /><br />
                        </li>
                        <li>The Marked for Review status for a question simply indicates that you would like to look at that question again. If a question is answered and Marked for Review, your answer for that question will be considered in the evaluation.</li><br />
                    </ul>
                    <u class="font-bold"><b>Navigating to a Question :</b></u><br /><br />
                    <ul class="list-disc ml-6">
                        <li>To answer a question, do the following:
                            <ul class="list-disc ml-6">
                                <li>Click on the question number in the Question Palette to go to that numbered question directly.</li>
                                <li>Click on Save &amp; Next to save your answer for the current question and then go to the next question.</li>
                                <li>Click on Mark for Review &amp; Next to save your answer for the current question, mark it for review, and then go to the next question.</li>
                                <li class="text-red-600">Caution: Note that your answer for the current question will not be saved if you navigate to another question directly by clicking on its question number.</li>
                            </ul>
                        </li>
                        <li>You can view all the questions by clicking on the Question Paper button. Note that the options for multiple-choice type questions will not be shown.</li>
                    </ul><br />
                    <u class="font-bold"><b>Answering a Question :</b></u><br /><br />
                    <ul class="list-disc ml-6">
                        <li>Procedure for answering a multiple-choice type question:
                            <ul class="list-disc ml-6">
                                <li>To select your answer, click on the button of one of the options.</li>
                                <li>To deselect your chosen answer, click on the button of the chosen option again or click on the <b>Clear Response</b> button.</li>
                                <li>To change your chosen answer, click on the button of another option.</li>
                                <li>To save your answer, you MUST click on the <b>Save &amp; Next</b> button.</li>
                                <li>To mark the question for review, click on the <b>Mark for Review &amp; Next</b> button.</li>
                                <li class="text-red-600">If an answer is selected for a question that is 'Marked for Review', that answer will be considered in the evaluation even if it is not marked as 'Save &amp; Next', at the time of final submission.</li>
                            </ul>
                        </li>
                        <li>To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering that type of question.</li>
                        <li class="text-red-600">Note that questions for which an option has been chosen and answers are saved or marked for review will be considered for evaluation.</li>
                        <li>No deduction from the total score will be made if no response is indicated for a question.</li>
                    </ul>
                </div>
                <div class ='flex  flex-col w-1/4 justify-center items-center'>
                <img class="rounded-lg border-2 border-blue-300" src={pic} alt="avatar of the user" />
                <p class="mt-2 text-center text-sm font-semibold">{uservalue}</p>
                </div>
            </div>
               
            <br />
            <br />
            <br />
            <div class=" h-[10vh] bg-white fixed bottom-0 left-0  w-3/4 flex justify-end items-center border-blue-400 border-t-2 border-r-2">  
                <Link to="/Instructionsecond"><button type="button" class=" px-8  text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-700  font-medium rounded-lg text-sm  py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 ">Next</button></Link>
            </div>
    </>
  )
}

export default Instructionfirst