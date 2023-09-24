import { Button } from '@/components/ui/button';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { toPng, toSvg } from 'html-to-image';
import {
  DownloadIcon,
  ImageIcon,
  Link2Icon,
  Share2Icon,
} from '@radix-ui/react-icons';
import toast from 'react-hot-toast';
import { useStore, State } from '@/store';
import { copyImage } from '@/lib/copy-image';

interface ExportOptionsProps {
  targetRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function ExportOptions({ targetRef }: ExportOptionsProps) {
  const state: State = useStore();

  const copyLink = () => {
    const queryParams = new URLSearchParams();

    queryParams.append('code', btoa(state.code));
    queryParams.append('title', state.title);
    queryParams.append('theme', state.theme);
    queryParams.append('darkMode', state.darkMode.toString());
    queryParams.append('showBackground', state.showBackground.toString());
    queryParams.append('language', state.language);
    queryParams.append(
      'autoDetectLanguage',
      state.autoDetectLanguage.toString()
    );
    queryParams.append('fontSize', state.fontSize.toString());
    queryParams.append('fontStyle', state.fontStyle);
    queryParams.append('padding', state.padding.toString());

    const queryString = queryParams.toString();

    navigator.clipboard.writeText(`${window.location.href}?${queryString}`);
  };

  const saveImage = async (filename: string, format: string) => {
    let imgUrl;

    if (targetRef.current !== null) {
      switch (format) {
        case 'PNG':
          imgUrl = await toPng(targetRef.current, { pixelRatio: 2 });
          filename = `${filename}.png`;

          break;
        case 'SVG':
          imgUrl = await toSvg(targetRef.current, { pixelRatio: 2 });
          filename = `${filename}.svg`;

          break;
        default:
          return;
      }
      const a = document.createElement('a');
      a.href = imgUrl;
      a.download = filename;
      a.click();
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Share2Icon className='mr-2' />
          Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='dark'>
        <DropdownMenuItem
          className='gap-2'
          onClick={() =>
            toast.promise(copyImage(targetRef), {
              loading: 'Copying...',
              success: 'Image copied to clipboard!',
              error: 'Something wents wrong!',
            })
          }
        >
          <ImageIcon />
          Copy Image
        </DropdownMenuItem>
        <DropdownMenuItem
          className='gap-2'
          onClick={() => {
            copyLink();
            toast.success('Link copied to clipBoard');
          }}
        >
          <Link2Icon />
          Copy Link
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className='gap-2'
          onClick={() =>
            toast.promise(saveImage(state.title, 'PNG'), {
              loading: 'Exporting PNG image...',
              success: 'Exported successfully!',
              error: 'Something wents wrong!',
            })
          }
        >
          <DownloadIcon />
          Save as PNG
        </DropdownMenuItem>
        <DropdownMenuItem
          className='gap-2'
          onClick={() =>
            toast.promise(saveImage(state.title, 'SVG'), {
              loading: 'Exporting SVG image...',
              success: 'Exported successfully!',
              error: 'Something wents wrong!',
            })
          }
        >
          <DownloadIcon />
          Save as SVG
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
