import React, { useState } from 'react'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share'

const Share = () => {

  const [dropdown, setDropDown] = useState(false);

  return (
    <div className='flex w-[50%] justify-between mx-auto border-t-gray-200 border-b-gray-200 border-r-0 border border-l-0 mt-2 px-3 py-1'>
      <div className='space-x-4'>
        <i className="fa-solid fa-hands-clapping"></i>
        <i className="fa-solid fa-bookmark"></i>
      </div>
      <div>
        <i className="fa-solid fa-share-from-square" onClick={() => setDropDown(!dropdown)}></i>
        {
          dropdown &&
          <div className='w-[20%] h-[120px] absolute shadow-md bg-white'>
            <ul className='space-y-3 text-gray-400 flex flex-col justify-center items-center'>
              <TwitterShareButton url='https://medium.com/@davidpogue/my-first-immersion-in-apple-vision-pro-heavy-man-d99f0a940c7c'>
                <div className='flex space-x-2 items-center'>
                  <i className="fa-brands fa-twitter"></i>
                  <li>Share on Twitter</li>
                </div>
              </TwitterShareButton>

              <FacebookShareButton url='https://medium.com/@davidpogue/my-first-immersion-in-apple-vision-pro-heavy-man-d99f0a940c7c'>
                <div className='flex space-x-2 items-center'>
                  <i className="fa-brands fa-facebook-f"></i>
                  <li>Share on Facebook</li>
                </div>
              </FacebookShareButton>

              <LinkedinShareButton url='https://medium.com/@davidpogue/my-first-immersion-in-apple-vision-pro-heavy-man-d99f0a940c7c'>
                <div className='flex space-x-2 items-center'>
                  <i className="fa-brands fa-linkedin-in"></i>
                  <li>Share on LinkedIn</li>
                </div>
              </LinkedinShareButton>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Share
