import React from 'react'
import { IoMdLogIn } from "react-icons/io";
import Buggati from './Buggati';





function App() {
  return (
    <>
    <div className='flex  p-5 min-h-10 w-full'>
      <div className='w-[89%] flex justify-between items-center mx-auto'>
        <img src="https://tse1.mm.bing.net/th?id=OIP.Qq-IYIIrLvrLipaWc8KP1gHaHa&pid=Api&P=0&h=180" className='h-20' alt="" />

        <ul className='flex gap-10 text-white font-semibold'>
          <li><a href="https://www.bugatti.com/" className='hover:text-yellow-300'>Home</a></li>
          <li><a href="https://bugatti.store/" className='hover:text-yellow-300'>Store Locator</a></li>
          <li><a href="https://www.bugatti.com/en/lifestyle/collectibles-model-cars" className='hover:text-yellow-300'>Collection</a></li>
          <li><a href="https://bugatti.store/collections/model-cars" className='hover:text-yellow-300'>Model car</a></li>
          <li><a href="https://www.bugatti.com/en/customer-service/warranty" className='hover:text-yellow-300'>Warranty</a></li>
          <li><a href="https://www.bugatti.com/en/about/contact" className='hover:text-yellow-300'>Contact Us</a></li>
          <li><a href="https://account.bugatti.store/authentication/login?client_id=752f12f3-89ae-4289-af83-317d577da9ac&locale=en&redirect_uri=https%3A%2F%2Faccount.bugatti.store%2Fauthentication%2Foauth%2Fauthorize%3Fclient_id%3D752f12f3-89ae-4289-af83-317d577da9ac%26locale%3Den%26nonce%3Dc9383a42-cf57-438a-a7ec-943d85bd6020%26redirect_uri%3Dhttps%253A%252F%252Faccount.bugatti.store%252Fcallback%253Fsource%253Dcore%26response_type%3Dcode%26scope%3Dopenid%2Bemail%2Bcustomer-account-api%253Afull%26state%3D01JWJKGPJPNFHZR7SAKZ039JGK" className='hover:text-green-400'> <IoMdLogIn className='text-2xl'/> </a> </li>
        </ul>

      </div>
    </div>

    <Buggati/>
    </>
  )
}

export default App
