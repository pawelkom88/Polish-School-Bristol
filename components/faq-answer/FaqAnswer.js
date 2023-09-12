import { useState } from 'react';

export default function FaqAnswer({ mainColor, title, children }) {
  const [open, setOpen] = useState(false);

  const styles = title === 'Znajdź nas' ? 'w-full' : 'max-w-4xl pl-4';

  const iconClosed = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 w-6 h-6 text-${mainColor}-600`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={`${mainColor}`}
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
      className={`flex-shrink-0 w-6 h-6 text-${mainColor}-600`}
      fill="none"
      stroke={`${mainColor}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 12H4"
      ></path>
    </svg>
  );

  return (
    <>
      <button onClick={() => setOpen(!open)} className="flex items-center">
        {open ? iconOpen : iconClosed}
        <h4 className="mx-4 text-xl ">{title}</h4>
      </button>
      {open && (
        <div className="w-full flex mt-8 md:mx-10">
          <span className={`border border-${mainColor}-600`}></span>
          <div className={styles}>{children}</div>
        </div>
      )}
    </>
  );
}
