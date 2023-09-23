import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import options from '@/options';
import { useStore } from '@/store';

export default function ThemeSelect() {
  const { theme, setTheme } = useStore();

  return (
    <div>
      <label className='blick mb-2 text-xs font-medium text-neutral-400'>
        Theme
      </label>
      <Select value={theme} onValueChange={(theme) => setTheme(theme)}>
        <SelectTrigger>
          <SelectValue placeholder='Select Theme' />
        </SelectTrigger>
        <SelectContent className='dark'>
          {Object.entries(options.themes).map(([name, theme]) => (
            <SelectItem key={name} value={name}>
              <div className='flex items-center gap-2'>
                <div className={cn('h-4 w-4 rounded-full', theme.background)} />
                <span className='capitalize'>{name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
