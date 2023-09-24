import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useStore } from '@/store';

export default function DarkModeSwitch() {
  const { darkMode, setDarkMode } = useStore();

  return (
    <div>
      <Label title='Dark Mode' />
      <Switch
        checked={darkMode}
        onCheckedChange={(checked) => setDarkMode(checked)}
        className='my-1.5'
      />
    </div>
  );
}
