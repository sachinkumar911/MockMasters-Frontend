import React from 'react'

const ForgetPass = () => {
    return (
        <>
            <section class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
                <div class="w-[28%] p-6 bg-white rounded-lg shadow-md h-[45%]">
                    <div class="flex flex-col items-center justify-center text-center space-y-2">
                        <div class="font-semibold text-2xl">
                            <p>Forgot Password</p>
                        </div>
                        <div class="flex flex-row text-sm font-medium text-gray-400">
                            <p>We will send a OTP to your email</p>
                        </div>
                    </div>
                    <form class="mt-8 space-y-4 " action="#">
                        <div>
                            <label for="email" class="block mb-2 text-base font-medium text-gray-900">Enter email</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg  block w-full p-3 " placeholder="example@gmail.com" required=""></input>
                        </div>
                        
                        <button type="submit" class="w-full text-white bg-gray-800 hover:bg-opacity-90 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send OTP</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ForgetPass