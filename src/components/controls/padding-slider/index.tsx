import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useStore } from '@/store';

export default function PaddingSlider() {
  const { padding, setPadding } = useStore();

  return (
    <div>
      <Label title={`Padding ${padding} px`} />
      <Slider
        className='my-5 w-44'
        value={[padding]}
        onValueChange={([padding]) => setPadding(padding)}
        max={128}
        step={8}
      />
    </div>
  );
}
