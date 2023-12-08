import React from 'react'
import { HashLink } from 'react-router-hash-link';

export default function SiteHeader() {
  return (
    <nav className="flex px-2 sm:px-3 py-3 heading w-[100vw]">
      <HashLink to="/" className='mr-3'>Home</HashLink>
      <HashLink to="/about">About</HashLink>
    </nav>
  );
}