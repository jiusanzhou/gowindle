import React from 'react';
import Dragable from '../components/Dragable';
import Errorable from '../components/Errorable';
import TitleBar from '../views/TitleBar';

// maxW ??? of page

export default ({ children, header = {}, footer = {}, ...props }) => {
  return (
    <div className="select-none bg-gradient-to-r__ from-green-200 to-blue-300 border-green-500">
      <TitleBar className="h-8 md:h-10 lg:h-10 xl :h-10 bg-green-300" />

      {/* the main body for page */}
      <div as="main" className="flex min-h-screen pt-8 md:pt-10 lg:pt-10 xl:pt-10">
        <Errorable>
          {children}
        </Errorable>
      </div>
    </div>
  );
};
