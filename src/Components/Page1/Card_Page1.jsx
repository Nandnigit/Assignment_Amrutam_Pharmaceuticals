import React from 'react';
import Navbar from '../Navbar/Navbar';


function Card_Page1() {
  return (
    <>
    <Navbar/>
  <div className=' border-2 border-solid md:m-8 rounded-lg '>
    <div className=' border-2 border-solid border-green-200 bg-green-200 p-8 '>
      
     </div>
     <div className=' flex flex-col md:flex-row md:justify-evenly bg-orange-200'>
          <div className=' flex  '>
            <div>
              <img src='https://s3-alpha-sig.figma.com/img/f22c/f4c0/74534b8f8298fd03b834e8d171bab784?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K2KCpQUaaAvlsX1fhH693ri1ErTFXRwrfh6QtpptmquTqlh04NsP-zMIzrCD4riju359Sbbvv8M~Y4thPWmkBN3~jytatWtpIKKmLIwqLct2xW2xLa8DZkCWzTrBFJbCLRmt64XRb1jBKTI6STG7tZHKdT1AHddINgxAkJVc5ABMBQWBuQ-cYk5wDleTGNJZYhyA9FIh13dBoOdvliMplwk4wLGot68Gs91TXCF-AbS3A90Hugs-EPQVGoiYE6MIc-xJR98wza9jlfXcYxmp6yp9ilhNhmQk4-LoUG0h~dWVUcQsBqgx3uv3To~rgpr157ZLJQ02Sm6ZH91Eedrb~g__' className=' w-36'></img>
            </div>
            <div>
              <div className=' flex flex-col '>
                <div>Dr. Bruce Wills</div>
                <div> Gynecologist</div>
                <div className=' flex'> 
                  <div>4.2</div>
                  <div className=' flex gap-1 text-yellow-500'>
              <div><i class="fa-solid fa-star"></i></div>
              <div><i class="fa-solid fa-star"></i></div>
              <div><i class="fa-solid fa-star"></i></div>
              <div><i class="fa-solid fa-star"></i></div>
            </div>
                </div>
              </div>
            </div>
            </div>
            <div className=' flex flex-col md:flex-row md:gap-20'>
            <div className=' text-green-800'>Followers <br/> <span className=' text-black font-bold'>850</span></div>
            <div className=' text-green-800'>Following <br/> <span className=' text-black font-bold'>18K</span></div>
            <div className=' text-green-800'> Posts <br/> <span className=' text-black font-bold'>250</span></div>
            <div className=' bg-green-800 text-white border-2 border-solid p-1 rounded-lg h-[40px]'>Book an Appointment</div>
          </div>
     </div>
     </div>

      <div className='  p-2 m-3  flex flex-col md:flex-row '>
        <div className=' border-2 border-solid border-slate-300 rounded-xl flex flex-col p-3 m-3 md:w-[60%] '>
            <div className=' border-2 border-solid border-slate-500 m-3  rounded-lg'>
              <div className='  p-3 bg-green-100'>A little about me <span className=' md:border-2 md:border-solid md:border-green-800 rounded-lg p-1 md:bg-white float-right text-green-100 md:text-black  '>Follow<i className="fa-solid fa-plus p-1 md:text-black text-green-100"></i></span></div>
              <div className=' p-2'>Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the </div>
             <div className=' flex flex-col md:flex-row gap-2 p-2'>
              <div className=' text-lg font-bold '>Language Spoken</div>
              <div className=' border-2 border-solid rounded-lg bg-slate-300 p-1'> English</div>
              <div className=' border-2 border-solid rounded-lg bg-slate-300 p-1'> Hindi</div>
              <div className=' border-2 border-solid rounded-lg bg-slate-300 p-1'> Telugu</div>
             </div>
             <div className=' flex  gap-3 p-2'>
              <div><i class="fa-brands fa-facebook"></i></div>
              <div><i class="fa-brands fa-instagram"></i></div>
              <div><i class="fa-brands fa-youtube"></i></div>
              <div><i class="fa-brands fa-twitter"></i></div>
             </div>
            </div>
            <div className=' border-2 border-solid border-slate-800 m-3  rounded-lg'><div className='  p-3 bg-green-100'>I Specialize in </div>
            <div className=' flex flex-col md:flex-row'> 
            <div className=' border-2 border-solid p-2 bg-orange-100 rounded-lg m-2'>Women's Health</div>
            <div className=' border-2 border-solid p-2 bg-orange-100 rounded-lg m-2'> Skin Care</div>
            <div className=' border-2 border-solid p-2 bg-orange-100 rounded-lg m-2'> Immunity</div>
            <div className=' border-2 border-solid p-2 bg-orange-100 rounded-lg m-2'> Hair Care</div>
            </div>
            
            </div>
            <div className=' border-2 border-solid border-slate-800 m-3  rounded-lg'><div className='  p-3 bg-green-100'>The Concerns I Treat </div>
            <div className=' flex flex-col md:flex-row gap-2'>
              <div className=' border-2 border-solid bg-slate-300 rounded-xl p-1'>Skin Treatment</div>
              <div className=' border-2 border-solid bg-slate-300 rounded-xl p-1'>Pregnancy</div>
              <div className=' border-2 border-solid bg-slate-300 rounded-xl p-1'>Period Doubts</div>
              <div className=' border-2 border-solid bg-slate-300 rounded-xl p-1'>Endometriosis</div>
            </div>
            <div className=' flex flex-col md:flex-row gap-2'>
              <div className=' border-2 border-solid bg-slate-300 rounded-xl p-1'>Pelvic Pain</div>
              <div className=' border-2 border-solid bg-slate-300 rounded-xl p-1'>Ovarian Cysts</div>
              <div className=' border-2 border-solid bg-white rounded-xl p-1'>+ 5 More</div>
            </div>
            </div>
            <div className=' border-2 border-solid border-slate-800 m-3  rounded-lg'><div className='  p-3 bg-green-100'>My Work Experience </div>
            <div className=' text-green-800 font-bold'><h3>I HAVE BEEN IN PRACTICE FOR: 7+ YEARS</h3></div>
            <hr className=' w-[80%] m-2'/>
            <div className=' flex flex-col md:flex-row gap-4 p-3'>
              <div className=' bg-slate-400 border-2 border-solid p-1 rounded-md'>
              <i class="fa-solid fa-house-chimney-medical"></i>
              </div>
              <div> 
                <h2>Midtown Medical Clinic<br/>Senior doctor</h2>
                
              </div>
              <div>
                2016-PRESENT
              </div>
            </div>
            <div className=' flex flex-col md:flex-row gap-4 p-3'>
              <div className=' bg-slate-400 border-2 border-solid p-1 rounded-md'>
              <i class="fa-solid fa-house-chimney-medical"></i>
              </div>
              <div> 
                <h2>Midtown Medical Clinic<br/>Senior doctor</h2>
                
              </div>
              <div>
                2010-2015
              </div>
            </div>
            </div>
            <div className=' border-2 border-solid border-slate-800 m-3  rounded-lg'><div className='  p-3 bg-green-100'>Featured Reviews (102) </div>
            <div className=' border-2 border-solid border-slate-200 bg-slate-200 m-2 p-3 rounded-xl '>
            <div className=' flex flex-col md:flex-row'>
              <div className=' flex flex-col md:flex-row'>
                  <div><img src="https://s3-alpha-sig.figma.com/img/682e/889c/026a53f2577835188ce397e0a36f4bb8?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=db1OKZH7yaKHnH2N1edZdSNefyeCUi8YIj19kXFaJTpFCMiK0GJ-2a9Hj9PCA6pzlktF2uAlSYXUs8bG4heu-I-xkbi9D0yjnZDAtTp8RNk1YKNelPoJej7mvDOVkDwCBRrcksYPkyDKzg5IGitx9YnmJUbkeILMzxu2HZ7YtDzrOvrCqQBVaNs-lz4xXZ79uaCtHQhjZYQ7PO0dx1IqNxMIiFxlN3qwf78EDZvsFydhrMkWU0mdcl6evnyOQI8gcifXAtyBqk7eoX2EeEVksSlU8~PuD8OG85T1htPnTJ0mkVNOquNnvFhuWZh6j3Hx4P2F959UiI-glLT5vq0BWw__" className=' w-10'></img></div>
                  <div>Alicent Hightower <br/> Consulted for Skin Care</div>
              </div>
              <div>
                20 January 2023
              </div>
            </div>
            <div className=' flex gap-1 text-yellow-500'>
              <div><i class="fa-solid fa-star"></i></div>
              <div><i class="fa-solid fa-star"></i></div>
              <div><i class="fa-solid fa-star"></i></div>
              <div><i class="fa-solid fa-star"></i></div>
              <div><i class="fa-solid fa-star"></i></div>
            </div>
            <p>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
            </div>

            <div className=' border-2 border-solid border-slate-200 bg-slate-200 m-2 p-3 rounded-xl '>
            <div className=' flex flex-col md:flex-row'>
              <div className=' flex flex-col md:flex-row'>
                  <div><img src="https://s3-alpha-sig.figma.com/img/682e/889c/026a53f2577835188ce397e0a36f4bb8?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=db1OKZH7yaKHnH2N1edZdSNefyeCUi8YIj19kXFaJTpFCMiK0GJ-2a9Hj9PCA6pzlktF2uAlSYXUs8bG4heu-I-xkbi9D0yjnZDAtTp8RNk1YKNelPoJej7mvDOVkDwCBRrcksYPkyDKzg5IGitx9YnmJUbkeILMzxu2HZ7YtDzrOvrCqQBVaNs-lz4xXZ79uaCtHQhjZYQ7PO0dx1IqNxMIiFxlN3qwf78EDZvsFydhrMkWU0mdcl6evnyOQI8gcifXAtyBqk7eoX2EeEVksSlU8~PuD8OG85T1htPnTJ0mkVNOquNnvFhuWZh6j3Hx4P2F959UiI-glLT5vq0BWw__" className=' w-10'></img></div>
                  <div>Alicent Hightower <br/> Consulted for Skin Care</div>
              </div>
              <div>
                20 January 2023
              </div>
            </div>
            <div className=' flex gap-1 text-yellow-500'>
              <div><i class="fa-solid fa-star"></i></div>
              <div><i class="fa-solid fa-star"></i></div>
              <div><i class="fa-solid fa-star"></i></div>
              <div><i class="fa-solid fa-star"></i></div>
              <div><i class="fa-solid fa-star"></i></div>
            </div>
            <p>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
            </div>
            </div>
        </div>
        <div className=' border-2 border-solid border-slate-300 rounded-xl md:w-[40%] p-3 m-3'>
          <div className=' flex justify-between border-2 border-solid border-slate-500 rounded-lg p-3'>
          <div> Appointment Fee</div>
          <div className=' text-green-800'>Rs. 699.00</div>
          </div>
          <div  className=' flex flex-col md:flex-row m-3'>
            <div className=' font-bold'>Select your mode of session</div>
            <div><hr/></div>
          </div>
          <div className=' flex flex-col md:flex-row gap-3 '>
            <div className=' border-2 border-solid border-slate-950 rounded-xl p-3'>In-Clinic<br/>45 Mins</div>
            <div className=' border-2 border-solid border-slate-950 rounded-xl p-3'> Video  <br/> 45 Mins</div>
            <div className=' border-2 border-solid border-slate-950 rounded-xl p-3'> Chat  <br/> 45 Mins</div>
          </div>
          <div  className=' flex flex-col md:flex-row m-3'>
            <div className=' font-bold'>Pick a time slot</div>
            <div><hr/></div>
          </div>
          <div className=' flex flex-col md:flex-row gap-3 border-2 border-solid border-slate-400 rounded-lg p-3'>
            
            <div className=' border-2 border-solid border-green-800 rounded-xl p-3 text-green-900 bg-green-300 font-bold'>Mon, 10 oct<br/><span className=' text-slate-700 font-normal'>10 slots</span></div>
            <div className=' border-2 border-solid border-slate-950 rounded-xl p-3'>Tue, 11 Oct<br/><span className=' text-red-800'>02 slots</span></div>
            <div className=' border-2 border-solid border-slate-950 rounded-xl p-3'>Wed, 12 Oct<br/><span className=' text-yellow-500'>05 slots</span></div>
            
          </div>
          <div>
            <div className=' m-2'>Morning</div>
            <div className=' flex flex-col md:flex-row gap-2 m-2'>
              <div className=' border-2 border-solid border-slate-600 rounded-xl p-2'>09:00 AM</div>
              <div className=' border-2 border-solid border-slate-600 rounded-xl p-2'>09:30 AM</div>
              <div className=' border-2 border-solid border-slate-600 rounded-xl p-2'>10:00 AM</div>
              <div className=' border-2 border-solid border-slate-600 rounded-xl p-2'>10:15 AM</div>
            </div>
            <div className=' flex flex-col md:flex-row gap-2 m-2'>
              <div className=' border-2 border-solid border-slate-600 rounded-xl p-2'>10:45 AM</div>
              <div className=' border-2 border-solid border-slate-600 rounded-xl p-2 text-white bg-green-800'>11:00 AM</div>
            </div>
          </div>

          <div>
            <div className=' m-2'>Evening</div>
            <div className=' flex flex-col md:flex-row gap-2 m-2'>
              <div className=' border-2 border-solid border-slate-600 rounded-xl p-2'>04:00 PM</div>
              <div className=' border-2 border-solid border-slate-600 rounded-xl p-2'>04:15 PM</div>
              <div className=' border-2 border-solid border-slate-600 rounded-xl p-2'>04:30 PM</div>
              <div className=' border-2 border-solid border-slate-600 rounded-xl p-2'>04:45 PM</div>
            </div>
            <div className=' flex flex-col md:flex-row gap-2 m-2'>
              <div className=' border-2 border-solid border-slate-600 rounded-xl p-2'>05:15 PM</div>
            </div>
          </div>
 
          <div className=' border-2 border-solid bg-green-800 text-white text-center p-3 rounded-lg'>Make An Appointment</div>

        </div>
        

        
      </div>
    </>
  )
}

export default Card_Page1
