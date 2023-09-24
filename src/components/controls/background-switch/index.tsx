import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useStore } from '@/store';

export default function BackgroundSwitch() {
  const { showBackground, setShowBackgound } = useStore();

  return (
    <div>
      <Label title='Background' />
      <Switch
        checked={showBackground}
        onCheckedChange={(checked) => setShowBackgound(checked)}
        className='my-1.5'
      />
    </div>
  );
}
