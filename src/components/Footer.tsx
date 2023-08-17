import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { TermsAndConditionsModal } from '.';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-8 text-center">
    <div className="flex justify-around items-center">
      <TermsAndConditionsModal />
      <a href="https://github.com/drakkomaximo" target="_blank" className="text-gray-500 hover:text-gray-300 mr-2 font-bold">&copy; created by drakkomaximo</a>
      <a href="https://www.sumerlabs.com/" target="_blank" rel="noopener noreferrer" className="flex ml-4 text-blue-500 hover:underline">
        <FaExternalLinkAlt className="mr-1" />
        Visitar Sumer Labs
      </a>
    </div>
  </footer>
  );
};
