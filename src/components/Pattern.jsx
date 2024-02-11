import React from 'react'
import { Link } from 'react-router-dom'
const Pattern = () => {
  return (
    <>
    <h3 className='text-xl font-bold mt-20 mb-10 text-center'>NIMCET 2024 - Subject-wise distribution of Marks</h3>
        <div className='flex flex-col items-center '>
            <table className='border-collapse border w-3/5'>
                <tbody >
                    <tr className='bg-gray-200'>
                        <td className='p-2 py-4 border'> <p className='font-bold'> Subject </p> </td>
                        <td className='p-2 border'> <p className='font-bold'> No. of Questions </p> </td>
                        <td className='p-2 border'> <p className='font-bold'> Marks Awarded </p> </td>
                        <td className='p-2 border'> <p className='font-bold'> Negative Marking </p> </td>
                        <td className='p-2 border'> <p className='font-bold'> Marks </p> </td>
                    </tr>
                    <tr>
                        <td className='p-2 border'><p>Mathematics</p></td>
                        <td className='p-2 border'>50</td>
                        <td className='p-2 border'>12</td>
                        <td className='p-2 border'>3</td>
                        <td className='p-2 border'>600</td>
                    </tr>
                    <tr>
                        <td className='p-2 border'>Analytical Ability & Logical Reasoning</td>
                        <td className='p-2 border'>40</td>
                        <td className='p-2 border'>6</td>
                        <td className='p-2 border'>1.5</td>
                        <td className='p-2 border'>240</td>
                    </tr>
                    <tr>
                        <td className='p-2 border'>General English</td>
                        <td className='p-2 border'>20</td>
                        <td className='p-2 border'>6</td>
                        <td className='p-2 border'>1.5</td>
                        <td className='p-2 border'>120</td>
                    </tr>
                    <tr>
                        <td className='p-2 border'>Computer Awareness</td>
                        <td className='p-2 border'>10</td>
                        <td className='p-2 border'>4</td>
                        <td className='p-2 border'>1</td>
                        <td className='p-2 border'>40</td>
                    </tr>
                    <tr className='bg-gray-200'>
                        <td className='p-2 border'>TOTAL</td>
                        <td className='p-2 border'>120 Questions</td>
                        <td className='p-2 border'></td>
                        <td className='p-2 border'></td>
                        <td className='p-2 border'>1000 Marks</td>
                    </tr>
                    
                </tbody>
            </table>
                <div class ='flex  justify-end w-3/5 pt-4'>
                <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back</button>
    
                <Link to="/Instructionfirst"><button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Start test</button></Link>
                
                </div>
           
        </div>
        

        
    </>
  )
}

export default Pattern