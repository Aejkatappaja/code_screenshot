import { cn } from '@/lib/utils';
import React from 'react';

interface EditorButtonProps {
  color: 'red' | 'yellow' | 'green';
}

export const EditorButton: React.FC<EditorButtonProps> = ({ color }) => {
  return (
    <div
      className={cn(
        'h-3 w-3 rounded-full',
        color === 'red'
          ? 'bg-red-500'
          : color === 'yellow'
          ? 'bg-yellow-500'
          : color === 'green'
          ? 'bg-green-500'
          : false
      )}
    />
  );
};
