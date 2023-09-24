import { Input } from '@/components/ui/input';
import { useStore } from '@/store';

export default function FontSizeInput() {
  const { fontSize } = useStore();

  return (
    <div>
      <label className='mb-2 block text-xs font-medium text-neutral-400'>
        Font Size
      </label>
      <Input
        type='number'
        className='!dark w-16 bg-transparent'
        min={6}
        value={fontSize}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          useStore.setState({ fontSize: Number(e.target.value) })
        }
      />
    </div>
  );
}
