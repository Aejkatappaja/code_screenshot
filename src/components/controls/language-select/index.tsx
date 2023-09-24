import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import options from '@/options';
import { useStore } from '@/store';
import { MagicWandIcon } from '@radix-ui/react-icons';

export default function LanguageSelect() {
  const { language, autoDetectLanguage } = useStore();

  const handleChange = (language: string) => {
    if (language === 'auto-detect') {
      useStore.setState({ autoDetectLanguage: true, language: 'plaintext' });
    } else {
      useStore.setState({ autoDetectLanguage: false, language });
    }
  };

  return (
    <div>
      <label className='blick mb-2 text-xs font-medium text-neutral-400'>
        Language
      </label>
      <Select value={language} onValueChange={handleChange}>
        <SelectTrigger className='w-40'>
          {autoDetectLanguage && <MagicWandIcon className='mr-2' />}
          <SelectValue placeholder='Select Language' />
        </SelectTrigger>
        <SelectContent className='dark max-h-[500px]'>
          <SelectItem value='auto-detect'>Auto Detect</SelectItem>
          {Object.entries(options.languages).map(([lang, name]) => (
            <SelectItem key={lang} value={lang}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
