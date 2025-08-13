'use client';

import { FiAward, FiUsers, FiHelpCircle, FiCode, FiServer } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              Who Am I
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
            {/* Book Cover */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-6 text-white">
              <h3 className="text-2xl font-bold">The Professional Journey</h3>
              <p className="opacity-90">A story of growth, challenges, and continuous learning</p>
            </div>
            
            {/* Book Content */}
            <div className="p-8 space-y-8">
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  <span className="text-4xl font-bold text-blue-600 dark:text-blue-400 float-left mr-3 -mt-2">H</span>
                  i, I&apos;m <span className="font-semibold text-blue-600 dark:text-blue-400">Biswajit Narzary</span> — a customer operations and business support professional with a passion for solving problems, building relationships, and making processes work better.
                </p>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="mb-6 leading-relaxed">
                      Over the years, I&apos;ve worked in dynamic environments where <span className="font-medium text-gray-900 dark:text-white">communication, empathy, and quick thinking</span> are essential. Whether it&apos;s assisting customers across the globe, coordinating with hotels, vendors, or logistics teams, or resolving complex escalations, I&apos;ve learned that success comes from listening first, acting with clarity, and always keeping both customer satisfaction and business priorities in balance.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">Core Values</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        <span>Customer-Centric Approach</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        <span>Operational Excellence</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        <span>Continuous Learning</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="leading-relaxed">
                  Beyond my primary role, I&apos;ve developed a strong interest in <span className="font-medium text-gray-900 dark:text-white">technology, web design, and automation</span>. I enjoy creating simple solutions—like custom WordPress sites, AI-assisted workflows, or integrated payment systems—that make operations smoother and more efficient. This technical knowledge isn&apos;t just a side skill; it&apos;s often the extra advantage that helps me tackle challenges faster and support teams more effectively.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                  <p className="italic text-gray-700 dark:text-gray-300 mb-0">
                    &ldquo;I believe in <span className="font-medium text-blue-600 dark:text-blue-400">continuous learning, adaptability, and staying curious</span>. Whether I&apos;m leading a conversation with a customer, coordinating with a partner, or experimenting with a new tool, my goal is the same: to create a positive impact and help people achieve their goals.&rdquo;
                  </p>
                </div>

                <p className="leading-relaxed">
                  When I&apos;m not working, I&apos;m exploring new technologies, planning creative projects, and spending time with my family—especially my newborn daughter, who inspires me every day to grow and do better.
                </p>
              </div>
              
              {/* Skills Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                    Core Expertise
                  </span>
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-600 dark:text-blue-400 hover:shadow-md transition-shadow">
                    <FiAward className="w-5 h-5 flex-shrink-0" />
                    <span className="whitespace-nowrap">Experienced</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 text-purple-600 dark:text-purple-400 hover:shadow-md transition-shadow">
                    <FiUsers className="w-5 h-5 flex-shrink-0" />
                    <span className="whitespace-nowrap">Client Management</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 text-green-600 dark:text-green-400 hover:shadow-md transition-shadow">
                    <FiHelpCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="whitespace-nowrap">Support</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30 text-amber-600 dark:text-amber-400 hover:shadow-md transition-shadow">
                    <FiCode className="w-5 h-5 flex-shrink-0" />
                    <span className="whitespace-nowrap">Full Stack Dev</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 text-teal-600 dark:text-teal-400 hover:shadow-md transition-shadow">
                    <FiServer className="w-5 h-5 flex-shrink-0" />
                    <span className="whitespace-nowrap">IT & OPS Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
