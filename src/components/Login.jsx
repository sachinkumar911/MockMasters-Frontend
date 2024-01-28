import React from 'react'

const Login = () => {
  return (
    <>
        <section class='bg-gray-50 h-screen flex flex-col justify-center items-center'>
            <div class='p-6 space-y-4 bg-white w-[28%] shadow-md '>
              <h1 class='text-xl font-bold leading-tight tracking-tight text-gray-900'>Sign in to your Account</h1>
              <form class='space-y-4'>
                <div class='flex flex-col'>
                  <label for="username" class='block mb-2 text-sm font-medium text-gray-900'>Enter Email or Username</label>
                  <input type='email' id='email' name='email' placeholder='example@gmail.com' class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block p-2.5" required=''></input>
                </div>
                <div class='flex flex-col'>
                  <label for="password" class='block mb-2 text-sm font-medium text-gray-900'>Enter Password</label>
                  <input type='password' id='password' name='password' placeholder='••••••••' class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"></input>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50" required=""></input>
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="text-gray-500">Remember me</label>
                    </div>
                  </div>
                  <Link to="/Forgotpassword" class="text-sm font-medium text-blue-600 hover:underline" >Forgot password</Link>
                </div>
                <button type="submit" class="w-full bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                <p class="text-sm font-light text-gray-500">
                  Don't have Account Yet?
                  <Link to="/Signup" class="font-medium text-blue-600 hover:underline">Sign up</Link>
                </p>
              </form>
            </div>
          </section>
    </>
  )
}

export default Login