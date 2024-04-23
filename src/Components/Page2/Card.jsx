import React from 'react'
import './Card.css'
import Navbar from '../Navbar/Navbar'

function Card() {
  return (
    <>
    <Navbar/>
     <div className=' border-2 border-solid border-green-200 bg-green-200 p-5 '>
      <div>
        <h2 className=' text-center'>Find Expert Doctors For An In-Clinic Session Here</h2>
        <div className=' flex flex-col md:flex-row justify-center'>
          <div className=' border-2 border-solid border-gray-600 text-gray-600 p-1 m-3 text-sm bg-white'><i className="fa-solid fa-location-dot p-3"></i>Select Location<i className="fa-solid fa-caret-down p-2"></i></div>
          <div className=' border-2 border-solid border-gray-600 text-gray-600 p-1 m-3 text-sm bg-white'>eg. Doctor, specialisation, clinic name <i className="fa-solid fa-arrow-right p-3"></i></div>
        </div>
      </div>
     </div>


     <div className=' flex flex-col md:flex-row justify-center md:gap-4 gap-1 m-3'>
      <div className=' border-2 border-solid   p-2 bg-gray-300 '>Expertise<i className="fa-solid fa-caret-down p-2"></i></div>
      <div className=' border-2 border-solid   p-2 bg-gray-300'>Gender<i className="fa-solid fa-caret-down p-2"></i></div>
      <div className=' border-2 border-solid   p-2 bg-gray-300'>Fees<i className="fa-solid fa-caret-down p-2"></i></div>
      <div className=' border-2 border-solid  p-2 bg-gray-300'>Languages<i className="fa-solid fa-caret-down p-2"></i></div>
      <div className=' border-2 border-solid  p-2 bg-green-200'>All filters<i className="fa-solid fa-caret-down p-2"></i></div>
    </div>


    <div className=' flex flex-col md:flex-row justify-end md:gap-3 gap-1 m-1'>
      <div className=' border-2 border-solid  rounded-xl p-2 bg-green-200'>Hair Care<i class="fa-solid fa-xmark"></i></div>
      <div className=' border-2 border-solid  rounded-xl p-2 bg-green-200'> Female<i class="fa-solid fa-xmark"></i></div>
      <div className=' border-2 border-solid  rounded-xl p-2 bg-green-200'>Rs.0 - Rs.500<i class="fa-solid fa-xmark"></i></div>
      <div className=' border-2 border-solid  rounded-xl p-2 bg-green-200'>Hindi<i class="fa-solid fa-xmark"></i></div>
    </div>



      <div className='  p-3 flex flex-col md:flex-row '>
        <div className=' border-2 border-solid  m-5 bg-orange-100 rounded-xl'>
            <div className=' p-10'>
              <img src="https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OXHc0OxYsIUmUMEh5Qaa-TPlVCjbxkIm97APJzuzkAmDxbmNMjt5JB64~xB4yMQDlPTxfm6aDfaZSvuWS7gxPV-szu0M21qphzQPBZKYeVQ~9r5yTvgUvhwLJH8MhnHfKsAq6nrSvcXmbEp4WckQb1TfNXUONpt64mDejRs~EIRs8NKDEaO55l9orsKyTxbRariLVe9lUmZpHG-D9dlDJfOMt8nfjeRTJqPQ6He1~REwnJDTYiKA3efRREu~SZtb1DnmguSa6m4rNmnkFEZY0OEyJVj49P2ZU8HEqZO0vDW8DFbNtgodxOr~clnRtmTN1bCIE3NNByvXpXw~wo674Q__" className=' w-28 ml-3 md:ml-24'></img>
              <div className=' border-2 border-solid border-black bg-black text-white rounded-xl w-14 ml-8 md:ml-32'>4.5<i class="fa-solid fa-star"></i></div>
              <h2>Dr. Prena Narang</h2>
              <div className=' flex flex-col'>
                <div><i class="fa-solid fa-paperclip"></i>Male Female Infertility</div>
                <div><i class="fa-solid fa-paperclip"></i> 7 years of Experience</div>
                <div><i class="fa-solid fa-paperclip"></i> Speaks: Hindi, English, Marathi</div>
              </div>
              <div className=' flex flex-col md:flex-row m-2 gap-2'>
                <div className=' border-2 border-solid border-green-700 rounded-lg text-black p-2 '>
                  Video Consultation <br/> 800rs.
                </div>
                <div className='border-2 border-solid border-green-700 rounded-lg text-black p-2'>
                  Chat Consultation <br/>  Free
                </div>
              </div>
            </div>

            <div className=' border-2 border-solid border-green-800 text-green-800 p-2 m-5 rounded-md bg-white'>View Profile</div>
            <div className='border-2 border-solid border-green-800 text-white p-2 m-5 rounded-md bg-green-700 '>Book a Consultation</div>
           

        </div>
        <div className=' border-2 border-solid  m-5 bg-orange-100 rounded-xl'>
            <div className=' p-10'>
            <img src="https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OXHc0OxYsIUmUMEh5Qaa-TPlVCjbxkIm97APJzuzkAmDxbmNMjt5JB64~xB4yMQDlPTxfm6aDfaZSvuWS7gxPV-szu0M21qphzQPBZKYeVQ~9r5yTvgUvhwLJH8MhnHfKsAq6nrSvcXmbEp4WckQb1TfNXUONpt64mDejRs~EIRs8NKDEaO55l9orsKyTxbRariLVe9lUmZpHG-D9dlDJfOMt8nfjeRTJqPQ6He1~REwnJDTYiKA3efRREu~SZtb1DnmguSa6m4rNmnkFEZY0OEyJVj49P2ZU8HEqZO0vDW8DFbNtgodxOr~clnRtmTN1bCIE3NNByvXpXw~wo674Q__" className=' w-28 ml-3 md:ml-24'></img>
              <div className=' border-2 border-solid border-black bg-black text-white rounded-xl w-14 ml-8 md:ml-32'>4.5<i class="fa-solid fa-star"></i></div>              <h2>Dr. Prena Narang</h2>
              <div className=' flex flex-col'>
                <div><i class="fa-solid fa-paperclip"></i>Male Female Infertility</div>
                <div><i class="fa-solid fa-paperclip"></i> 7 years of Experience</div>
                <div><i class="fa-solid fa-paperclip"></i> Speaks: Hindi, English, Marathi</div>
              </div>
              <div className=' flex flex-col md:flex-row m-2 gap-2'>
                <div className=' border-2 border-solid border-green-700 rounded-lg text-black p-2 '>
                  Video Consultation <br/> 800rs.
                </div>
                <div className='border-2 border-solid border-green-700 rounded-lg text-black p-2'>
                  Chat Consultation <br/>  Free
                </div>
              </div>
            </div>

            <div className=' border-2 border-solid border-green-800 text-green-800 p-2 m-5 rounded-md bg-white'>View Profile</div>
            <div className='border-2 border-solid border-green-800 text-white p-2 m-5 rounded-md bg-green-700 '>Book a Consultation</div>
           

        </div>
        <div className=' border-2 border-solid  m-5 bg-orange-100 rounded-xl'>
            <div className=' p-10'>
            <img src="https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OXHc0OxYsIUmUMEh5Qaa-TPlVCjbxkIm97APJzuzkAmDxbmNMjt5JB64~xB4yMQDlPTxfm6aDfaZSvuWS7gxPV-szu0M21qphzQPBZKYeVQ~9r5yTvgUvhwLJH8MhnHfKsAq6nrSvcXmbEp4WckQb1TfNXUONpt64mDejRs~EIRs8NKDEaO55l9orsKyTxbRariLVe9lUmZpHG-D9dlDJfOMt8nfjeRTJqPQ6He1~REwnJDTYiKA3efRREu~SZtb1DnmguSa6m4rNmnkFEZY0OEyJVj49P2ZU8HEqZO0vDW8DFbNtgodxOr~clnRtmTN1bCIE3NNByvXpXw~wo674Q__" className=' w-28 ml-3 md:ml-24'></img>
              <div className=' border-2 border-solid border-black bg-black text-white rounded-xl w-14 ml-8 md:ml-32'>4.5<i class="fa-solid fa-star"></i></div>              <h2>Dr. Prena Narang</h2>
              <div className=' flex flex-col'>
                <div><i class="fa-solid fa-paperclip"></i>Male Female Infertility</div>
                <div><i class="fa-solid fa-paperclip"></i> 7 years of Experience</div>
                <div><i class="fa-solid fa-paperclip"></i> Speaks: Hindi, English, Marathi</div>
              </div>
              <div className=' flex flex-col md:flex-row m-2 gap-2'>
                <div className=' border-2 border-solid border-green-700 rounded-lg text-black p-2 '>
                  Video Consultation <br/> 800rs.
                </div>
                <div className='border-2 border-solid border-green-700 rounded-lg text-black p-2'>
                  Chat Consultation <br/>  Free
                </div>
              </div>
            </div>

            <div className=' border-2 border-solid border-green-800 text-green-800 p-2 m-5 rounded-md bg-white'>View Profile</div>
            <div className='border-2 border-solid border-green-800 text-white p-2 m-5 rounded-md bg-green-700 '>Book a Consultation</div>
           

        </div>
      </div>
    </>
  )
}

export default Card
