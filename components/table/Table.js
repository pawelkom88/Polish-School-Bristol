import React from 'react';

export default function Table({ children, styles }) {
  return (
    <table
      className={`border text-center text-sm font-light dark:border-neutral-500 ${styles}`}
    >
      {children}
    </table>
  );
}
