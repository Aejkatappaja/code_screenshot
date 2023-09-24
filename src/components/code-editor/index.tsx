import { cn } from '@/lib/utils';
import options from '@/options';
import React from 'react';
import Editor from 'react-simple-code-editor';
import hljs from 'highlight.js';
import { useStore } from '../../store';
import flourite from 'flourite';
import { codeSnippets } from '@/options/snippets';
import { Resizable } from 're-resizable';

interface CodeEditorProps {
  editorRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function CodeEditor({ editorRef }: CodeEditorProps) {
  const handleEditorClick = (
    e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLTextAreaElement>
  ) => {
    // Check if the clicked element is a textarea because Editor component provided by 'react-simple-code-editor'is defined as HTMLDivElement and HTMLTextAreaElement
    if (e.currentTarget instanceof HTMLTextAreaElement) {
      e.currentTarget.select();
    }
  };

  const {
    darkMode,
    title,
    setTitle,
    code,
    setCode,
    language,
    fontStyle,
    fontSize,
    autoDetectLanguage,
    setLanguage,
    padding,
    showBackground,
    theme,
  } = useStore();

  const selectedTheme = options.themes[theme];

  React.useEffect(() => {
    const randomSnippet =
      codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    useStore.setState(randomSnippet);
  }, []);

  React.useEffect(() => {
    if (autoDetectLanguage) {
      const { language } = flourite(code, { noUnknown: true });
      setLanguage(language.toLocaleLowerCase() || 'plaintext');
    }
  }, [code, autoDetectLanguage, setLanguage]);

  return (
    <Resizable
      enable={{ left: true, right: true }}
      minWidth={padding * 2 + 400}
    >
      <div
        className={cn(
          'mb-2 overflow-hidden rounded-xl transition-all ease-out',
          showBackground ? selectedTheme.background : 'ring ring-neutral-900'
        )}
        style={{ padding }}
        ref={editorRef}
      >
        <div
          className={cn(
            'min-w-[400px] rounded-xl border-2 shadow-2xl',
            darkMode
              ? 'border-gray-600/40 bg-black/75'
              : 'border-gray-200/20 bg-white/75'
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                spellCheck={false}
                onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                  e.currentTarget.select()
                }
                readOnly={false}
                className='bg-transparent text-center text-sm font-medium text-gray-400 focus:outline-none'
              />
            </div>
          </header>
          <div
            className={cn(
              'px-4 pb-4',
              darkMode
                ? 'brightness-110'
                : ' text-gray-800 brightness-50 contrast-200 saturate-200'
            )}
          >
            <Editor
              value={code}
              highlight={(code) =>
                hljs.highlight(code, { language: language || 'plaintext' })
                  .value
              }
              style={{
                fontFamily: options.fonts[fontStyle].name,
                fontSize: fontSize,
              }}
              textareaClassName='focus:outline-none'
              onClick={handleEditorClick}
              onValueChange={(code) => setCode(code)}
            />
          </div>
        </div>
      </div>
    </Resizable>
  );
}
