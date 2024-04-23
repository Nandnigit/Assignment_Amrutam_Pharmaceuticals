import React from 'react'

function Navbar() {
  return (
    <>
     

<nav class=" bg-orange-200 border-gray-200 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <span class="self-center text-2xl font-bold text-green-700">Amrutam</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="md:text-green-800 bg-transparent md:border-2 md:border-solid md:border-green-400 text-orange-200 font-medium rounded-lg text-sm px-4 py-2 m-2 text-center  ">Login</button>
      <button type="button" class="md:text-white md:bg-green-800 text-orange-200 font-medium rounded-lg text-sm px-4 py-2 text-center m-2">sign-up</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0    ">
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-black bg-blue-700 rounded md:bg-transparent   " aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500   dark:hover:text-white md:dark:hover:bg-transparent  text-green-800">Find Doctors</a>
      </li>
      <li>
        <a href="#" class=" text-black block py-2 px-3 md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500  md:dark:hover:bg-transparent ">About us</a>
      </li>
      
    </ul>
  </div>
  </div>
</nav>
 
    </>
  )
}

export default Navbar
