import React from 'react';

const _Button = ({ className, title, onClick = () => {} }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      // make sure wrong broken the line
      className={`w-20 overflow-ellipsis overflow-hidde focus:outline-none text-sm font-semibold px-4 py-2 rounded-sm ${className}`}
    >
      {title}
    </button>
  );
};

// disable click here
export default ({
  total = 2,
  current = 1,
  onCancel = () => {},
  onNext = () => {},
  onPrevious = () => {},
  onFinish = () => {},
}) => {
  return (
    <div className="flex fixed right-4 bottom-4 space-x-4">
      {current <= 0 ? (
        <_Button
          onClick={() => {
            onCancel();
          }}
          className="bg-red-100 text-red-700"
          title="取消"
        />
      ) : (
        <_Button
          onClick={() => {
            current > 0 && onPrevious();
          }}
          className="bg-gray-100"
          title="上一步"
        />
      )}
      {current + 1 < total ? (
        <_Button
          onClick={() => {
            current + 1 < total && onNext();
          }}
          className="bg-green-100 text-green-700"
          title="下一步"
        />
      ) : (
        <_Button
          onClick={() => {
            onFinish();
          }}
          className="bg-green-100 text-green-700"
          title="完成"
        />
      )}
    </div>
  );
};
