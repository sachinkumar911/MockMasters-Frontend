import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

const ProgressReport = () => {
  return (
    <>
        
     <section id="test-result" className="py-18">
      <div className="container mx-auto p-8 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold mb-8">Performance Analysis</h2>
        <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      width={500}
      height={300}
    />
      </div>
    </section>
    </>
  )
}

export default ProgressReport