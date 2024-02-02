// Profile.js
import avatar1 from './images/avatar1.png'
import avatar2 from './images/avatar2.png'
import avatar3 from './images/avatar3.png'
import avatar4 from './images/avatar4.png'
import avatar5 from './images/avatar5.png'
import React, { useState } from 'react';

const Profile = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        category: "Open",
        avatar: 1,
      });
      const [isEditMode, setIsEditMode] = useState(false);

      const handleEditClick = () => {
          setIsEditMode(!isEditMode);
      };
    return (
        <>
            <section id='profile-section' className='min-h-screen p-6  flex items-center justify-center'>
                <div className="container w-[50%] mx-auto">
                    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 flex flex-col lg:flex-row">
                        <div className="lg:w-1/3 text-gray-900">
                            <p className="text-xl font-bold">Personal Details</p>
                            {/* <p>Please fill out your Details.</p> */}
                            <div className="flex flex-col justify-center items-center">
                                <div>
                                    <h2 className="  text-xl leading-tight tracking-tight text-gray-900 mb-4 mt-7">
                                        <p>Choose Your Avatar</p>
                                    </h2>
                                </div>
                                <div className=" flex  py-2 flex-wrap w-40 justify-center">
                                    <img
                                        src={avatar1}
                                        alt="Avatar 1"
                                        className={`cursor-pointer border-4 rounded-full transition-transform transform-gpu ${formData.avatar === 1
                                                ? "w-12 h-12 mr-2 border-gray-600 hover:scale-110 focus:outline-none mb-1"
                                                : "w-11 h-11 mr-2 hover:scale-110 mb-1"
                                            }`}
                                        onClick={() => {
                                            setFormData({ ...formData, avatar: 1 });
                                        }}
                                    />
                                    <img
                                        src={avatar2}
                                        alt="Avatar 1"
                                        className={`cursor-pointer border-4 rounded-full transition-transform transform-gpu ${formData.avatar === 2
                                                ? "w-12 h-12 mr-2 border-gray-600 hover:scale-110 focus:outline-none mb-1"
                                                : "w-11 h-11 mr-2 hover:scale-110 mb-1"
                                            }`}
                                        onClick={() => {
                                            setFormData({ ...formData, avatar: 2 });
                                        }}
                                    />
                                    <img
                                        src={avatar3}
                                        alt="Avatar 1"
                                        className={`cursor-pointer border-4 rounded-full transition-transform transform-gpu ${formData.avatar === 3
                                                ? "w-12 h-12 mr-2 border-gray-600 hover:scale-110 focus:outline-none mb-1"
                                                : "w-11 h-11 mr-2 hover:scale-110 mb-1"
                                            }`}
                                        onClick={() => {
                                            setFormData({ ...formData, avatar: 3 });
                                        }}
                                    />
                                    <img
                                        src={avatar4}
                                        alt="Avatar 1"
                                        className={`cursor-pointer border-4 rounded-full transition-transform transform-gpu ${formData.avatar === 4
                                                ? "w-12 h-12 mr-2 border-gray-600 hover:scale-110 focus:outline-none mb-1"
                                                : "w-11 h-11 mr-2 hover:scale-110 mb-1"
                                            }`}
                                        onClick={() => {
                                            setFormData({ ...formData, avatar: 4 });
                                        }}
                                    />
                                    <img
                                        src={avatar5}
                                        alt="Avatar 1"
                                        className={`cursor-pointer border-4 rounded-full transition-transform transform-gpu ${formData.avatar === 5
                                                ? "w-12 h-12 mr-2 border-gray-600 hover:scale-110 focus:outline-none mb-1"
                                                : "w-11 h-11 mr-2 hover:scale-110 mb-1"
                                            }`}
                                        onClick={() => {
                                            setFormData({ ...formData, avatar: 5 });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className=" ml-0 lg:ml-12 flex flex-col">

                            <label htmlFor="full_name">Username</label>
                            <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 mb-3 rounded px-4 w-full bg-gray-50" value=""  disabled={!isEditMode} />

                            <label htmlFor="full_name">Full Name</label>
                            <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 mb-3 rounded px-4 w-full bg-gray-50" value="" disabled={!isEditMode} />

                            <label htmlFor="email">Email Address</label>
                            <input type="text" name="email" id="email" className="h-10 border mt-1 mb-3 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" disabled={!isEditMode} />

                            <div className="flex mb-3">
                                <div className="flex-1">
                                    <label htmlFor="mobile">Mobile No.</label>
                                    <input type="text" name="mobile" id="mobile" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" disabled={!isEditMode} />
                                </div>
                                <div className="flex flex-col mt-1 w-1/2 ml-3">
                                    <label htmlFor="gender">Gender</label>
                                    <select id="gender" name="gender" className="h-10 border rounded px-4 bg-gray-50">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div class="flex mb-2 mt-1">
                                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md " >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5"
                                        viewBox="0 0 24 24"
                                        fill=''
                                    >
                                        <path
                                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </span>
                                <input type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900  block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 " placeholder="Username" disabled={!isEditMode} />
                            </div>

                            <div class="flex">
                                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5"
                                        fill=""
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </span>
                                <input type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900  block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 " placeholder="Username" disabled={!isEditMode}/>
                            </div>
                            <div className="text-left mt-4 space-x-2 flex">
                                <button className=" hover:bg-opacity-90 font-semibold py-2 px-2 rounded flex items-center border border-black " onClick={handleEditClick}>
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                    Edit
                                </button>
                                <button className="bg-green-600 hover:bg-opacity-90 text-white  font-semibold py-2 px-5 rounded">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
};

export default Profile;
