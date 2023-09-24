import { Card, CardContent } from '@/components/ui/card';
import {
  BackgroundSwitch,
  ExportOptions,
  FontSelect,
  DarkModeSwitch,
  FontSizeInput,
  PaddingSlider,
  ThemeSelect,
  LanguageSelect,
} from '@/components/controls';
import { Separator } from '@/components/ui/separator';

interface CartOptionsProps {
  editorRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function CardOptions({ editorRef }: CartOptionsProps) {
  return (
    <Card className='fixed bottom-16 mx-6 bg-neutral-900/90 px-8 py-6 backdrop-blur'>
      <CardContent className='flex flex-wrap gap-6 p-0'>
        <ThemeSelect />
        <LanguageSelect />
        <FontSelect />
        <FontSizeInput />
        <PaddingSlider />
        <BackgroundSwitch />
        <DarkModeSwitch />
        <Separator />
        <div className='place-self-center'>
          <ExportOptions targetRef={editorRef} />
        </div>
      </CardContent>
    </Card>
  );
}
