'use client';

import Image from 'next/image';
import { FiMessageSquare, FiPhone } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Biswajit Narzary</span>
          </h1>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
            Operations & Customer Success Specialist | Client Relationship Expert | Technology Enthusiast
          </p>
          <p className="text-gray-700 dark:text-gray-400 text-lg">
            Driving exceptional customer experiences, streamlining operations, and leveraging technology to solve problems and create smarter workflows.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <FiMessageSquare className="w-5 h-5" />
              Contact Me
            </a>
            <a 
              href="#experience" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View Experience
            </a>
            <a 
              href="tel:+918135984073" 
              className="flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <FiPhone className="w-5 h-5" />
              +91 81359 84073
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1.5">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden border-4 border-white dark:border-gray-800">
                <Image
                  src="/MyPhoto.png"
                  alt="Biswajit Narzary"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                <FiMessageSquare className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
