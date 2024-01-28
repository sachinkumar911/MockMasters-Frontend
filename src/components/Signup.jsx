import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'
import avatar4 from '../assets/avatar4.png'
import avatar5 from '../assets/avatar5.png'
// import EmailVerify from './EmailVerify';

const Signup = () => {

    const [success, setSuccess] = useState(false);
    const [avatarChoosen, setAvatarChoosen] = useState(1);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
        category: 'Open',
        avatar: avatarChoosen
    });

    const handleInputChange = (e) => {
        // console.log(e);

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        setFormData({
            ...formData, avatar: avatarChoosen,
        });
        console.log(formData);

        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/v1/users/register', formData);
            console.log(response);
            if (response.data.success) {
                setSuccess(true);
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <section class='bg-gray-50 flex flex-col items-center justify-center h-screen'>
                <div class='p-6 space-y-4 bg-white  shadow-md'>
                    <div class="flex flex-col justify-center items-center">
                        <div>
                            <h2 class='text-xl font-bold leading-tight tracking-tight text-gray-900 mb-4'>Choose your Avatar</h2>
                        </div>
                        <div class=" flex py-2">
                            <img src={avatar1} alt="Avatar 1" class={`cursor-pointer border-4 rounded-full transition-transform transform-gpu ${avatarChoosen === 1 ? 'w-12 h-12 mr-2 border-blue-600 hover:scale-110 focus:outline-none' : 'w-11 h-11 mr-2 hover:scale-110'
                                }`} onClick={() => {
                                    setAvatarChoosen(1);
                                }} />
                            <img src={avatar2} alt="Avatar 1" class={`cursor-pointer border-4 rounded-full transition-transform transform-gpu ${avatarChoosen === 2 ? 'w-12 h-12 mr-2 border-blue-600 hover:scale-110 focus:outline-none' : 'w-11 h-11 mr-2 hover:scale-110'
                                }`} onClick={() => {
                                    setAvatarChoosen(2);
                                }} />
                            <img src={avatar3} alt="Avatar 1" class={`cursor-pointer border-4 rounded-full transition-transform transform-gpu ${avatarChoosen === 3 ? 'w-12 h-12 mr-2 border-blue-600 hover:scale-110 focus:outline-none' : 'w-11 h-11 mr-2 hover:scale-110'
                                }`} onClick={() => {
                                    setAvatarChoosen(3);
                                }} />
                            <img src={avatar4} alt="Avatar 1" class={`cursor-pointer border-4 rounded-full transition-transform transform-gpu ${avatarChoosen === 4 ? 'w-12 h-12 mr-2 border-blue-600 hover:scale-110 focus:outline-none' : 'w-11 h-11 mr-2 hover:scale-110'
                                }`} onClick={() => {
                                    setAvatarChoosen(4);
                                }} />
                            <img src={avatar5} alt="Avatar 1" class={`cursor-pointer border-4 rounded-full transition-transform transform-gpu ${avatarChoosen === 5 ? 'w-12 h-12 mr-2 border-blue-600 hover:scale-110 focus:outline-none' : 'w-11 h-11 mr-2 hover:scale-110'
                                }`} onClick={() => {
                                    setAvatarChoosen(5);
                                }} />
                        </div>
                    </div>
                    <h1 class='text-xl font-bold leading-tight tracking-tight text-gray-900'>
                        Create your Account
                    </h1>
                    <form class='space-y-4' action='#' onSubmit={handleSubmit}>
                        <div class='flex'>
                            <div class='flex flex-col mr-4'>
                                <label for="username" class='block mb-2 text-sm font-medium text-gray-900'>Enter Username</label>
                                <input type='username' name='username' id='username' placeholder='vikash123' value={formData.username} onChange={handleInputChange} class=' bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block p-2.5' required=''></input>
                            </div>

                            <div class='flex flex-col'>
                                <label for='email' class='block mb-2 text-sm font-medium text-gray-900'>Enter Email</label>
                                <input type='email' name='email' id='email' placeholder='example@gmail.com' value={formData.email} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block p-2.5" required=''></input>
                            </div>
                        </div>

                        <div class='flex'>
                            <div class='flex flex-col mr-4'>
                                <label for='password' class='block mb-2 text-sm font-medium text-gray-900'>Password</label>
                                <input type='password' name='password' id='password' placeholder='••••••••' value={formData.password} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "></input>
                            </div>
                            <div class='flex flex-col'>
                                <label for='password' class='block mb-2 text-sm font-medium text-gray-900'>Confirm Password</label>
                                <input type='password' name='confirmpassword' id='confirmpassword' placeholder='••••••••' value={formData.confirm_password} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"></input>
                            </div>
                        </div>
                        <div>
                            <label for="category" class='block mb-2 text-sm font-medium text-gray-900'>Select Category</label>
                            <select name='category' id='category' value={formData.category} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" required=''>
                                <option value="Open">Open</option>
                                <option value="Open (PwD)">Open(pwd)</option>
                                <option value="Gen-EWS">General-Ews</option>
                                <option value="gen-ews(pwd)">General-Ews(pwd)</option>
                                <option value="OBC-NCL">Obc-Ncl</option>
                                <option value="OBC-NCL(PwD)">Obc-Ncl(pwd)</option>
                                <option value="SC">Sc</option>
                                <option value="SC(PwD)">Sc(pwd)</option>
                                <option value="ST">St</option>
                            </select>
                        </div>

                        <button type="submit" class="w-full bg-blue-600 text-white hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create Account</button>
                        <p class="text-sm font-light text-gray-500">
                            Already have an account?
                            <Link to="/login" class="font-medium text-blue-600 hover:underline">Login here</Link>
                        </p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Signup;