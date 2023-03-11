import styled from 'styled-components';

import { images } from '../../components/sticker-urls';
import { StickerCard } from '../../components/sticker-card';
import { StickableCard } from '../../components/stickable-card';

const Table = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const GameTable = () => {
  return (
    <Table>
      {[images[0]].map(({ src, clipMaps }) => (
        <StickerCard src={src} clipMaps={clipMaps} />
      ))}
      <StickableCard />
    </Table>
  );
};
