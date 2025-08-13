"use client";

import { useEffect, useState } from 'react';

export default function Logo() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative inline-block">
      <h1 className={`
        text-3xl md:text-4xl font-bold font-sans
        relative z-10
        ${isMounted ? 'opacity-100' : 'opacity-0'}
        transition-opacity duration-1000
        tracking-tight
      `}>
        <span className="relative">
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            bnarzary
          </span>
        </span>
      </h1>
      <div 
        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500"
        style={{
          width: isMounted ? '100%' : '0%',
          transition: 'width 0.5s ease-in-out 0.3s'
        }}
      />
    </div>
  );
}