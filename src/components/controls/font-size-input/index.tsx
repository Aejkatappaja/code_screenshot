import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useStore } from '@/store';

export default function FontSizeInput() {
  const { fontSize, setFontSize } = useStore();

  return (
    <div>
      <Label title='Font Size' />
      <Input
        type='number'
        className='!dark w-16 bg-transparent'
        min={6}
        value={fontSize}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFontSize(Number(e.target.value))
        }
      />
    </div>
  );
}
