
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-[#3483d8] flex flex-col justify-center items-center w-full h-[40vh]">
      <h2 className="text-[#ece3e3] text-xl font-semibold mb-6">Connect with me</h2>

      {/* Social Icons */}
      <div className="flex gap-8">
        <Link href="https://github.com/smabdullah958" target="_blank">
          <FaGithub
            size={40}
            className="text-white hover:text-black duration-500 transition transform hover:scale-110"
          />
        </Link>

        <Link href="https://www.linkedin.com/in/syed-muhammad-abdullah-201a1028a/" target="_blank">
          <FaLinkedin
            size={40}
            className="text-white hover:text-blue-900 duration-500 transition transform hover:scale-110"
          />
        </Link>
      </div>

      {/* Footer Text */}
      <p className="text-gray-200 mt-8 text-sm">
        © {new Date().getFullYear()} Abdullah | All rights reserved
      </p>
    </div>
  )
}

export default Footer
