import React from 'react';

interface LabelProps {
  title: string;
}

export const Label: React.FC<LabelProps> = ({ title }) => {
  return (
    <label className='mb-2 block text-xs font-medium text-neutral-400'>
      {title}
    </label>
  );
};
