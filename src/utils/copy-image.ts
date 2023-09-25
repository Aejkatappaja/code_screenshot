import { toBlob } from 'html-to-image';
import toast from 'react-hot-toast';

export interface CopyImageProps {
  ref: React.MutableRefObject<HTMLDivElement | null>;
}

export const CopyImage = async ({ ref }: CopyImageProps) => {
  if (ref.current !== null) {
    const imgBlob = await toBlob(ref.current, { pixelRatio: 2 });
    if (imgBlob) {
      const img = new ClipboardItem({ 'image/png': imgBlob });
      navigator.clipboard.write([img]);
    } else {
      toast.error('Image Blob is null');
    }
  }
  return null;
};
