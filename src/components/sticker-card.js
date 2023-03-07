import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Sticker = styled.div`
  background: ${({ src, xCord, yCord }) =>
    `url(${src}) -${xCord}px -${yCord}px`};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: absolute;
  top: ${({ yCord }) => yCord}px;
  left: ${({ xCord }) => xCord}px;
`;

export const StickerCard = ({ src, clipMaps = [] }) => {
  console.log({ clipMaps });
  return (
    <Wrapper>
      <img src={src} />
      {clipMaps.map((clipMap) => (
        <Sticker src={src} {...clipMap} />
      ))}
    </Wrapper>
  );
};
