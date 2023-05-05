import React from 'react'
import { HashLink } from 'react-router-hash-link';

export default function SiteHeader() {
  return (
    <nav className="flex flex-wrap items-end justify-center fixed z-10  px-2 sm:px-3 py-3 mb-3 heading h-[100vh] w-[25vh] right-0">
        <ul>
            <li><HashLink to="#hist">History</HashLink></li>
            <li><HashLink to="#where">Where?</HashLink></li>
            <li><HashLink to="#how">How?</HashLink></li>
            <li><HashLink to="#exp">Experiment</HashLink></li>
        </ul>

    </nav>
  );
}