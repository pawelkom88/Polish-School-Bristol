import { useState } from 'react';
import { iconClosed, iconOpen } from '@utils/utils';

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
          <div className="max-w-4xl pl-4 text-white">{children}</div>
        </div>
      )}
    </>
  );
}
