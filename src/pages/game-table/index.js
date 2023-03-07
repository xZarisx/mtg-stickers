import { images } from '../../components/sticker-urls';
import { StickerCard } from '../../components/sticker-card';

export const GameTable = () => {
  return (
    <div>
      {[images[0]].map(({ src, clipMaps }) => (
        <StickerCard src={src} clipMaps={clipMaps} />
      ))}
    </div>
  );
};
