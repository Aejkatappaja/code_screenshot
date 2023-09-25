import { toPng, toSvg } from 'html-to-image';
import { CopyImageProps } from './copy-image';

export interface SaveImageProps extends CopyImageProps {
  filename: string;
  format: string;
}

export const SaveImage = async ({ ref, filename, format }: SaveImageProps) => {
  let imgUrl;

  if (ref.current !== null) {
    switch (format) {
      case 'PNG':
        imgUrl = await toPng(ref.current, { pixelRatio: 2 });
        filename = `${filename}.png`;

        break;
      case 'SVG':
        imgUrl = await toSvg(ref.current, { pixelRatio: 2 });
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
