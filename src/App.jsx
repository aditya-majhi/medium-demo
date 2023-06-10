import { useState } from 'react'
import './App.css'
import BlogSection from './components/blogSection'
import Youtube from './components/youtube'
import Share from './components/share'

function App() {

  return (
    <>
      <h1 className='w-[50%] mx-auto mt-5 mb-3 text-4xl font-bold'>My First Immersion in Apple Vision Pro: Heavy, Man!</h1>
      <div className='w-[50%] mx-auto flex items-center space-x-3'>
        <i class="fa-solid fa-circle-user"></i>
        <div className='text-sm'>
          <h4>David Pouge</h4>
          <p>5 min read</p>
        </div>
      </div>
      <Share />
      <BlogSection />
      <Youtube />
      <Share />
    </>
  )
}

export default App
