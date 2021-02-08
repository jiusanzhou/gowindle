import React from 'react';
import TitleBar from '../views/TitleBar';

// maxW ??? of page

export default ({ children, header = {}, footer = {}, ...props }) => {
  return (
    <div className="select-none bg-gradient-to-r__ from-green-200 to-blue-300">
      <TitleBar className="h-8 md:h-10 lg:h-12 xl:h-14" />
      {/* the main body for page */}
      <div as="main" className="flex min-h-screen pt-8 md:pt-10 lg:pt-12 xl:pt-14">
        {children}
      </div>
    </div>
  );
};
