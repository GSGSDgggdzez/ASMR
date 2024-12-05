import React from 'react'
import ChooseLayout from '@/Layouts/ChooseLayout'

export default function ChooseRegister() {
  return (
    <ChooseLayout>
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-center text-gray-600 mb-12">Choose your journey in the world of personalized ASMR content</p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Content Creator Registration */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-[400px]">
            <div className="w-20 h-20 bg-[#38bdf8] rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Content Creator</h2>
            <a href="/ContentRegister" className="p-4 bg-[#38bdf8] text-white rounded-lg hover:bg-[#2ea5d9] transition-all duration-300 w-full mb-4 text-center">
              <button className=''>
                Start Creating
              </button>
            </a>
            <ul className="text-gray-600 space-y-2 text-center">
              <li>✨ Create custom ASMR content</li>
              <li>💰 Set your own prices</li>
              <li>🎯 Build your audience</li>
              <li>📈 Track your earnings</li>
            </ul>
          </div>

          {/* User Registration */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-[400px]">
            <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">ASMR Enthusiast</h2>
            <a href="/register" className="p-4 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 w-full mb-4 text-center">
              <button>
                Start Exploring
              </button>
            </a>
            <ul className="text-gray-600 space-y-2 text-center">
              <li>🎧 Access exclusive content</li>
              <li>🎮 Request custom ASMR</li>
              <li>❤️ Support creators</li>
              <li>🌟 Join the community</li>
            </ul>
          </div>
        </div>
      </div>
    </ChooseLayout>
  )
}


// import React, { useState, useEffect } from 'react'
// import GuestLayout from '@/Layouts/GuestLayout'

// export default function ChooseRegister() {
//   const [isReversed, setIsReversed] = useState(false)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsReversed(prev => !prev)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [])

//   const cards = [
//     // Content Creator Card
//     <div key="creator" className={`flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform ${isReversed ? 'translate-y-full' : 'translate-y-0'}`} style={{ transition: 'transform 1s ease-in-out' }}>
//       {/* Content Creator content remains the same */}

//       <div className="w-20 h-20 bg-[#38bdf8] rounded-full flex items-center justify-center mb-4">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//         </svg>
//       </div>
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">Content Creator</h2>
//       <button className="p-4 bg-[#38bdf8] text-white rounded-lg hover:bg-[#2ea5d9] transition-all duration-300 w-full mb-4">
//         Start Creating
//       </button>
//       <ul className="text-gray-600 space-y-2 text-center">
//         <li>✨ Create custom ASMR content</li>
//         <li>💰 Set your own prices</li>
//         <li>🎯 Build your audience</li>
//         <li>📈 Track your earnings</li>
//       </ul>

//     </div>,

//     // ASMR Enthusiast Card
//     <div key="enthusiast" className={`flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform ${isReversed ? 'translate-y-[-100%]' : 'translate-y-0'}`} style={{ transition: 'transform 1s ease-in-out' }}>
//       {/* ASMR Enthusiast content remains the same */}

//       <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       </div>
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">ASMR Enthusiast</h2>
//       <button className="p-4 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 w-full mb-4">
//         Start Exploring
//       </button>
//       <ul className="text-gray-600 space-y-2 text-center">
//         <li>🎧 Access exclusive content</li>
//         <li>🎮 Request custom ASMR</li>
//         <li>❤️ Support creators</li>
//         <li>🌟 Join the community</li>
//       </ul>

//     </div>
//   ]

//   return (
//     <GuestLayout>
//       <div className="max-w-2xl mx-auto px-4">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Join Our ASMR Community</h1>
//         <p className="text-center text-gray-600 mb-12">Choose your journey in the world of personalized ASMR content</p>

//         <div className="flex flex-col gap-8 relative">
//           {isReversed ? cards.reverse() : cards}
//         </div>
//       </div>
//     </GuestLayout>
//   )
// }
