'use client';

import { 
  FiUsers, 
  FiHeadphones, 
  FiTarget, 
  FiPieChart,
  FiDollarSign,
  FiCheckCircle,
  FiMessageSquare
} from 'react-icons/fi';

const skillCategories = [
  {
    category: 'Leadership & Team Management',
    icon: <FiUsers className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600',
    skills: [
      'Team Leadership & Development',
      'Performance Management',
      'Training & Mentoring',
      'Cross-functional Collaboration'
    ]
  },
  {
    category: 'Operations Management',
    icon: <FiPieChart className="w-6 h-6" />,
    color: 'from-purple-500 to-purple-600',
    skills: [
      'Process Optimization',
      'Workflow Management',
      'Quality Assurance',
      'Resource Allocation'
    ]
  },
  {
    category: 'Customer Success',
    icon: <FiHeadphones className="w-6 h-6" />,
    color: 'from-green-500 to-green-600',
    skills: [
      'Customer Relationship Management',
      'Conflict Resolution',
      'Customer Satisfaction',
      'Support Operations'
    ]
  },
  {
    category: 'Strategic Planning',
    icon: <FiTarget className="w-6 h-6" />,
    color: 'from-amber-500 to-amber-600',
    skills: [
      'Business Strategy',
      'Goal Setting',
      'Performance Metrics',
      'Process Improvement'
    ]
  },
  {
    category: 'Financial Acumen',
    icon: <FiDollarSign className="w-6 h-6" />,
    color: 'from-emerald-500 to-emerald-600',
    skills: [
      'Budget Management',
      'Cost Control',
      'Revenue Protection',
      'Financial Reporting'
    ]
  },
  {
    category: 'Communication',
    icon: <FiMessageSquare className="w-6 h-6" />,
    color: 'from-rose-500 to-rose-600',
    skills: [
      'Stakeholder Communication',
      'Presentation Skills',
      'Report Writing',
      'Interpersonal Skills'
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              Core Competencies
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Key operational and leadership skills that drive business success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mt-1 mr-2">
                        <FiCheckCircle className="w-5 h-5" />
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Expertise Level</span>
                    <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        style={{ width: '90%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg max-w-3xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technical Proficiencies</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              While my focus is on operations and leadership, I&apos;m also proficient in various technical areas:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'CRM Systems', 'Project Management Tools', 'Data Analysis', 'Reporting Tools',
                'Microsoft Office Suite', 'Google Workspace', 'Zendesk', 'JIRA', 'Slack', 'Trello'
              ].map((skill, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
