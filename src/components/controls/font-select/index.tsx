import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import options from '@/options';
import { useStore } from '@/store';

export default function FontSelect() {
  const { fontStyle } = useStore();

  return (
    <div>
      <label className='blick mb-2 text-xs font-medium text-neutral-400'>
        Font
      </label>
      <Select
        value={fontStyle}
        onValueChange={(fontStyle) => useStore.setState({ fontStyle })}
      >
        <SelectTrigger className='w-40'>
          <SelectValue placeholder='Select Font' />
        </SelectTrigger>
        <SelectContent className='dark max-h-[500px]'>
          {Object.entries(options.fonts).map(([id, font]) => (
            <SelectItem key={id} value={id}>
              {font.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
