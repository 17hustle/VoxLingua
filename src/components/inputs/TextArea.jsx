import React from 'react';

const TextArea = ({ id, value, onChange, placeholder }) => {
  return (
    <textarea
      rows={5}
      id={id}
      value={value}
      className='py-2.5 px-4 border-none focus:outline-none block w-full border-transparent rounded-lg dark:bg-neutral-800 dark:border-transparent dark:text-neutral-400'
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextArea;
