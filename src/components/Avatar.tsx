import styled from 'styled-components/native';

interface AvatarProps {
  size?: number;
}

const DEFAULT_SIZE = 40;

const Avatar = styled.Image<AvatarProps>`
  border-radius: 100px;
  width: ${(props) => props.size ?? DEFAULT_SIZE}px;
  height: ${(props) => props.size ?? DEFAULT_SIZE}px;
`;

export default Avatar;
