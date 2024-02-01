import React from 'react'

const IncompleteTest = () => {
  return (
    <>
    <section id="test-result" className="py-12">
      <div className="container mx-auto p-8 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold mb-8">Incomplete Tests</h2>
        <table className="w-[66%] bg-white border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-50 border">
              <th className="py-2 px-4 border-r border-gray-300">Sr</th>
              <th className="py-2 px-4 border-r border-gray-300">Test Name</th>
              <th className="py-2 px-4 border-r border-gray-300">Attempt Date</th>
              <th className="py-2 px-4 border-r border-gray-300">Remaining Time</th>
              <th className="py-2 px-4 border-r border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="border-b border-gray-300 ">
              <td className="py-2 px-4 border-r border-gray-300 text-center ">1</td>
              <td className="py-2 px-4 border-r border-gray-300 text-center">NIMCET-001</td>
              <td className="py-2 px-4 border-r border-gray-300 text-center">2024-02-01</td>
              <td className="py-2 px-4 border-r border-gray-300 text-center">90</td>
              <td className="py-2 px-4 flex justify-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Resume</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
</>
  )
}

export default IncompleteTest