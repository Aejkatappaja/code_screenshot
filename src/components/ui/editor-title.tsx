import { useStore } from '@/store';
import React from 'react';

export const EditorTitle = () => {
  const { title, setTitle } = useStore();
  return (
    <input
      type='text'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      spellCheck={false}
      onClick={(e: React.MouseEvent<HTMLInputElement>) =>
        e.currentTarget.select()
      }
      readOnly={false}
      className='bg-transparent text-center text-sm font-medium text-gray-400 focus:outline-none'
    />
  );
};
