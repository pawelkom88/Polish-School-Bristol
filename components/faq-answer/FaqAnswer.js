import { useState } from 'react';

const iconClosed = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 w-6 h-6 text-red-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 4v16m8-8H4"
    />
  </svg>
);

const iconOpen = (
  <svg
    className="flex-shrink-0 w-6 h-6 text-red-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M20 12H4"
    ></path>
  </svg>
);

export default function FaqAnswer({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="flex items-center">
        {open ? iconOpen : iconClosed}
        <h4 className="mx-4 text-xl text-white">{title}</h4>
      </button>
      {open && (
        <div className="w-full flex mt-8 md:mx-10">
          <span className="border border-red-600"></span>
          <p className="max-w-4xl pl-4 text-white">{children}</p>
        </div>
      )}
    </>
  );
}
