import React from 'react';
import CodeEditor from '@/components/code-editor';
import options from '@/options';
import { useStore } from '@/store';
import CardOptions from './components/card';
import Footer from './components/footer';

function App() {
  const state = useStore();
  const { theme, fontStyle } = state;
  const selectedTheme = options.themes[theme];
  const fonts = options.fonts[fontStyle];
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
    <main className='dark fixed flex min-h-screen w-screen items-center justify-center bg-neutral-950 text-white'>
      <link
        rel='stylesheet'
        href={selectedTheme.theme}
        crossOrigin='anonymous'
      />
      <link rel='stylesheet' href={fonts.src} crossOrigin='anonymous' />
      <CodeEditor editorRef={editorRef} />
      <CardOptions editorRef={editorRef} />
      <Footer />
    </main>
  );
}

export default App;
