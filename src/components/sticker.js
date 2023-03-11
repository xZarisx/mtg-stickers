import styled from 'styled-components';

export const Sticker = styled.div`
  background: ${({ src, xCord, yCord }) =>
    `url(${src}) -${xCord}px -${yCord}px`};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: absolute;
  top: ${({ yCord }) => yCord}px;
  left: ${({ xCord }) => xCord}px;
`;
