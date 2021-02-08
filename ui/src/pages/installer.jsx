import React from 'react';
import { useState } from 'preact/hooks';

import Actions from '../views/Actions';
import StepBar from '../views/StepBar';

// Vertical or

export default ({ ...props }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full flex-row">
      <div className="bg-gray-100 w-1/4 h-full">
        {/* left nav or top */}
        <StepBar steps={_demoSteps} current={current} className="pt-4" />
      </div>
      <div className="flex-grow bg-green-100">
        {/* main panel */}
        <div className=""></div>

        <Actions
          total={_demoSteps.length}
          current={current}
          onPrevious={() => setCurrent(current - 1)}
          onNext={() => setCurrent(current + 1)}
        />
      </div>
    </div>
  );
};

const _demoSteps = [
  {
    title: '欢迎使用',
  },
  {
    title: '协议须知',
  },
  {
    title: '安装选项',
  },
  {
    title: '开始安装',
  },
  {
    title: '安装完成',
  },
];
