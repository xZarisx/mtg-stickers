import styled from 'styled-components';
import { Sticker } from './sticker';

const Wrapper = styled.div`
  position: relative;
`;

export const StickerCard = ({ src, clipMaps = [] }) => {
  console.log({ clipMaps });
  return (
    <Wrapper>
      <img src={src} />
      {clipMaps.map((clipMap) => (
        <Sticker
          src={src}
          {...clipMap}
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData('text', JSON.stringify({ src, clipMap }));
          }}
        />
      ))}
    </Wrapper>
  );
};
