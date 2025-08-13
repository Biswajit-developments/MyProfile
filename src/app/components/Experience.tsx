'use client';

import { FiUsers, FiShield, FiCheckCircle, FiCalendar, FiTrendingUp, FiAward } from 'react-icons/fi';

const experiences = [
  {
    id: 1,
    role: 'Operations Generalist',
    company: 'SplittyTravel',
    period: 'November 2022 – September 2024',
    icon: <FiShield className="w-6 h-6" />,
    highlights: [
      'Led chargeback & credit monitoring operations, managing 200-300 daily cases from global financial institutions',
      'Successfully recovered thousands of dollars by providing evidence of service delivery',
      'Managed a team of 30 consultants across different time zones',
      'Established communication protocols between customers, hotels, and financial institutions'
    ],
    achievements: [
      'Reduced financial losses by 40% through proactive dispute resolution',
      'Developed training programs that improved team efficiency by 35%',
      'Created reporting systems that provided real-time visibility into operations'
    ]
  },
  {
    id: 2,
    role: 'Senior Consultant – Hotel Booking Confirmation',
    company: 'SplittyTravel',
    period: 'April 2022 – October 2022',
    icon: <FiCheckCircle className="w-6 h-6" />,
    highlights: [
      'Pioneered the Hotel Booking Confirmation department as its first member',
      'Managed verification of 100-2,000+ daily bookings across global hotel chains',
      'Built and led a 150-member team within 6 months',
      'Implemented quality control measures that reduced booking errors by 60%'
    ],
    achievements: [
      'Eliminated 85% of pre-arrival guest issues',
      'Reduced customer complaints related to booking issues by 75%',
      'Developed training materials still used for onboarding new team members'
    ]
  },
  {
    id: 3,
    role: 'Customer Support Specialist',
    company: 'SplittyTravel',
    period: 'March 2021 – March 2022',
    icon: <FiUsers className="w-6 h-6" />,
    highlights: [
      'Provided post-sales support via Live Chat, Email, and Phone',
      'Managed customer expectations and resolved complex booking issues',
      'Maintained exceptional CSAT scores above 90%',
      'Handled high-pressure situations with professionalism and empathy'
    ],
    achievements: [
      'Consistently ranked in top 5% of support agents',
      'Earned a one-year contract extension for outstanding performance',
      'Developed communication skills that became a benchmark for the team'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              Professional Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My growth story at SplittyTravel - from Customer Support to Operations Leadership
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-teal-500 transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative mb-16 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 -ml-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 items-center justify-center text-white z-10">
                {exp.icon}
              </div>
              
              {/* Content */}
              <div className={`md:w-5/12 p-6 rounded-2xl shadow-xl bg-white dark:bg-gray-800 border-l-4 ${index === 0 ? 'border-blue-500' : index === 1 ? 'border-purple-500' : 'border-teal-500'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <FiCalendar className="mr-2" />
                  {exp.period}
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                    <FiTrendingUp className="text-green-500" /> Key Responsibilities
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <FiAward className="text-amber-500" /> Notable Achievements
                  </h4>
                  <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-amber-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Career Milestones</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                <div className="text-gray-700 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">150+</div>
                <div className="text-gray-700 dark:text-gray-300">Team Members Led</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 rounded-xl">
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">60%</div>
                <div className="text-gray-700 dark:text-gray-300">Error Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
