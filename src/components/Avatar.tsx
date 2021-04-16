import styled from 'styled-components/native';

const Avatar = styled.Image`
  border-radius: 100px;
  width: 40px;
  height: 40px;
  margin-right: ${({ theme }) => theme.spacing(1)}px;
`;

export default Avatar;
