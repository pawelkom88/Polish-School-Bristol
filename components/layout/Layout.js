import React from 'react';

export default function Layout({ children }) {
  return (
    <main className="max-w-7xl flex justify-center items-center flex-col md:mt-18 mt-24 mx-auto px-4">
      {children}
    </main>
  );
}
