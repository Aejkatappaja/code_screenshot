import { cn } from '@/lib/utils';
import options from '@/options';
import React from 'react';
import Editor from 'react-simple-code-editor';
import hljs from 'highlight.js';

export default function CodeEditor() {
  const handleEditorClick = (
    e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLTextAreaElement>
  ) => {
    // Check if the clicked element is a textarea
    if (e.currentTarget instanceof HTMLTextAreaElement) {
      e.currentTarget.select();
    }
  };
  return (
    <div
      className={cn(
        'min-w-[400px] rounded-xl border-2 shadow-2xl',
        'border-gray-600/40 bg-black/75'
      )}
    >
      <header className='grid grid-cols-6 items-center gap-3 px-4 py-3'>
        <div className='flex gap-1.5'>
          <div className='h-3 w-3 rounded-full bg-red-500' />
          <div className='h-3 w-3 rounded-full bg-yellow-500' />
          <div className='h-3 w-3 rounded-full bg-green-500' />
        </div>
        <div className='col-span-4 flex justify-center'>
          <input
            type='text'
            value='Untitled'
            spellCheck={false}
            onClick={(e: React.MouseEvent<HTMLInputElement>) =>
              e.currentTarget.select()
            }
            readOnly={true}
            className='bg-transparent text-center text-sm font-medium text-gray-400 focus:outline-none'
          />
        </div>
      </header>
      <div className={cn('px-4 pb-4')}>
        <Editor
          value={options.codeSnippets[0].code}
          highlight={(code) =>
            hljs.highlight(code, { language: options.codeSnippets[0].language })
              .value
          }
          style={{ fontStyle: 'JetBrains Mono', fontSize: 18 }}
          textareaClassName='focus:outline-none'
          onClick={handleEditorClick}
          onValueChange={(e) => console.log(e)}
        />
      </div>
    </div>
  );
}
