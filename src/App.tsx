import React from 'react';
import CodeEditor from './components/code-editor';
import { cn } from './lib/utils';
import options from './options';
import { useStore } from './store';
import { Card, CardContent } from './components/ui/card';
import ExportOptions from './components/controls/export-options/index.tsx';
import ThemeSelect from './components/controls/theme-select/index.tsx';
import LanguageSelect from './components/controls/language-select/index.tsx';
import FontSelect from './components/controls/font-select/index.tsx';
import FontSizeInput from './components/controls/font-size-input/index.tsx';

function App() {
  const state = useStore();
  const { theme, fontStyle, showBackground, padding } = state;
  const selectedTheme = options.themes[theme];
  const editorRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.size === 0) return;
    const state = Object.fromEntries(queryParams);

    useStore.setState({
      ...state,
      code: state.code ? atob(state.code) : '',
      autoDetectLanguage: state.autoDetectLanguage === 'true',
      darkMode: state.darkMode === 'true',
      fontSize: Number(state.fontSize || 18),
      padding: Number(state.padding || 64),
    });
  }, []);

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
          'mb-2 overflow-hidden rounded-xl transition-all ease-out',
          showBackground
            ? options.themes[theme].background
            : 'ring ring-neutral-900'
        )}
        style={{ padding }}
        ref={editorRef}
      >
        <CodeEditor />
      </div>
      <Card className='fixed bottom-16 mx-6 bg-neutral-900/90 px-8 py-6 backdrop-blur'>
        <CardContent className='flex flex-wrap gap-6 p-0'>
          <ThemeSelect />
          <LanguageSelect />
          <FontSelect />
          <FontSizeInput />
          <ExportOptions targetRef={editorRef} />
        </CardContent>
      </Card>
    </main>
  );
}

export default App;
