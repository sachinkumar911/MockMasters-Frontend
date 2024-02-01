import React from 'react'

const TestSeries = () => {
  return (
    <>
        <section id='test-section' class="mt-10">
        <div class="flex flex-col justify-center items-center space-y-6">
          <div id='NIMCET-001' class=" rounded-lg bg-white shadow-md w-[45%]">
            <h5 class="border border-neutral-100 px-6 py-3 text-xl font-medium leading-tight ">
              NIMCET-001
            </h5>
            <div class="p-6 flex ">
              <p class="px-1">120 Questions</p>
              <p class="px-1">|</p>
              <p class="px-1">1000 Marks</p>
              <p class="px-1">|</p>
              <p class="px-1">120 Minutes</p>
            </div>
            <div class="mx-6 mb-3">
              <button
                type="button"
                href="#"
                class="inline-block rounded bg-green-200 hover:bg-green-300 px-4 pb-2 pt-2.5 text-xs font-medium leading-normal">
                Start Test
              </button>
            </div>
          </div>
          <div id='NIMCET-001' class=" rounded-lg bg-white shadow-md w-[45%]">
            <h5 class="border border-neutral-100 px-6 py-3 text-xl font-medium leading-tight">
              NIMCET-002
            </h5>
            <div class="p-6 flex ">
              <p class="px-1">120 Questions</p>
              <p class="px-1">|</p>
              <p class="px-1">1000 Marks</p>
              <p class="px-1">|</p>
              <p class="px-1">120 Minutes</p>
            </div>

            <div class="mx-6 mb-3">
              <button
                type="button"
                href="#"
                class="inline-block rounded bg-green-200 hover:bg-green-300 px-4 pb-2 pt-2.5 text-xs font-medium leading-normal">
                Start Test
              </button>
            </div>
          </div>
          <div id='NIMCET-001' class=" rounded-lg bg-white shadow-md w-[45%]">
            <h5 class="border border-neutral-100 px-6 py-3 text-xl font-medium leading-tight">
              NIMCET-003
            </h5>
            <div class="p-6 flex ">
              <p class="px-1">120 Questions</p>
              <p class="px-1">|</p>
              <p class="px-1">1000 Marks</p>
              <p class="px-1">|</p>
              <p class="px-1">120 Minutes</p>
            </div>
            <div class="mx-6 mb-3">
              <button
                type="button"
                href="#"
                class="inline-block rounded bg-green-200 hover:bg-green-300 px-4 pb-2 pt-2.5 text-xs font-medium leading-normal">
                Start Test
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default TestSeries