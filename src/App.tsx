import React from 'react';
import CodeEditor from './components/code-editor';
import { cn } from './lib/utils';
import options from './options';
import { useStore } from './store';
import { Button } from './components/ui/button';

function App() {
  const { theme, fontStyle, showBackground, padding, darkMode, setDarkMode } =
    useStore();
  const selectedTheme = options.themes[theme];
  const editorRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <main className='dark flex min-h-screen items-center justify-center bg-neutral-950 text-white'>
      <link
        rel='stylesheet'
        href={selectedTheme.theme}
        crossOrigin='anonymous'
      />
      <link
        rel='stylesheet'
        href={options.fonts[fontStyle].src}
        crossOrigin='anonymous'
      />
      <div
        className={cn(
          'mb-2 overflow-hidden transition-all ease-out',
          showBackground
            ? options.themes[theme].background
            : 'ring ring-neutral-900'
        )}
        style={{ padding }}
        ref={editorRef}
      >
        <Button onClick={() => setDarkMode(!darkMode)}> Switch Mode </Button>
        <CodeEditor />
      </div>
    </main>
  );
}

export default App;
