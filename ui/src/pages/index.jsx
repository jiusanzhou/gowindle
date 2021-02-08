import React from 'react';

// the main for installer
export default ({ ...props }) => {
  return (
    <div w="100%" {...props} justifyContent="center" alignItems="center">
      <p>
        Welcome to use{' '}
        <a target="_blank" href="https://labs.zoe.im/gowindle">
          gowindle
        </a>{' '}
        for application bundle!
      </p>
    </div>
  );
};
