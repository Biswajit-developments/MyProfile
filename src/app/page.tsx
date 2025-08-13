'use client';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./components/Header'), { ssr: false });
const Hero = dynamic(() => import('./components/Hero'), { ssr: false });
const About = dynamic(() => import('./components/About'), { ssr: false });
const Experience = dynamic(() => import('./components/Experience'), { ssr: false });
const Skills = dynamic(() => import('./components/Skills'), { ssr: false });
const Contact = dynamic(() => import('./components/Contact'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
