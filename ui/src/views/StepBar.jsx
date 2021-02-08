import React from 'react';

import { FaLongArrowAltRight } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';

const _genIcon = ({ x = -1, className }) => {
  if (x < 0) {
    return (
      <div className="flex justify-center w-8 h-8 rounded-full bg-green-100 mr-2">
        <FiCheckCircle className="h-full text-green-600" />
      </div>
    );
  }
  if (x === 0) {
    return (
      <div className="flex justify-center w-8 h-8 rounded-full mr-2">
        <FaLongArrowAltRight className="h-full text-green-600" />
      </div>
    );
  }
  return <div className=" w-8 h-8 mr-2"></div>;
};

const Vertical = ({ steps = [], current = 0, className }) => {
  return (
    <div className={`flex-col align-middle space-y-2 ${className}`}>
      {steps.map(({ title }, idx) => (
        <div
          key={`_${idx}`}
          className={`w-full inline-flex align-middle px-4 py-2 ${idx - current === 0 ? 'bg-green-100' : ''}`}
        >
          {<_genIcon x={idx - current} />}
          <div className="leading-8">{title}</div>
        </div>
      ))}
    </div>
  );
};

export default ({ direction, ...props }) => {
  return <Vertical {...props} />;
};
