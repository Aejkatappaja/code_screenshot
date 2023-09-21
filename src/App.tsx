import CodeEditor from './components/code-editor';
import { Button } from './components/ui/button';
import { useStore } from './store';

function App() {
  const { setCode, remove } = useStore();
  return (
    <main className='dark flex min-h-screen items-center justify-center bg-neutral-950 text-white'>
      <Button onClick={() => setCode('top')}>test</Button>
      <Button onClick={() => remove()}>DELETE</Button>
      <CodeEditor />
      sdfgsfs
    </main>
  );
}

export default App;
