import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer class="bg-gray-200 rounded-lg shadow mt-4 ">
                <div class="w-full max-w-screen-xl mx-auto p-4 pt-10">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <span class="self-center text-2xl font-semibold whitespace-nowrap">MockMasters.</span>
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-600 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-5 border-gray-400 sm:mx-auto lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center">© 2023 <a href="#" class="hover:underline">MockMasters™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
}
