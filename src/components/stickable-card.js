import { useState } from 'react';
import styled from 'styled-components';
import { Sticker } from './sticker';

const Card = styled.div`
  border: solid 2px gray;
  border-radius: 10px;
  width: 488px;
  position: relative;
  height: 680px;
`;

export const StickableCard = () => {
  const [stickers, addStickers] = useState([]);
  console.log({ stickers });
  return (
    <Card
      onDrop={(e) => {
        e.preventDefault();
        var data = e.dataTransfer.getData('text');
        addStickers([...stickers, JSON.parse(data)]);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      {stickers.map(({ src, clipMap }) => (
        <Sticker src={src} {...clipMap} />
      ))}
    </Card>
  );
};
