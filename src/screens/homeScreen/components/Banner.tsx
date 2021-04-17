import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: ${({ theme }) => theme.spacing(2)}px 0;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

const Description = styled.Text`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const ImageWrapper = styled.TouchableHighlight`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  border-radius: ${({ theme }) => theme.borderRadius.small}px;
`;

const ImageBanner = styled.Image`
  height: 150px;
  border-radius: ${({ theme }) => theme.borderRadius.small}px;
`;

interface BannerProps {
  title: string;
  desc: string;
  imageUri: string;
  onPress: () => any;
}

const Banner = (props: BannerProps) => {
  const { title, desc, imageUri, onPress } = props;
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{desc}</Description>
      <ImageWrapper onPress={onPress}>
        <ImageBanner
          source={{
            uri: imageUri,
          }}
          resizeMode="cover"
        />
      </ImageWrapper>
    </Container>
  );
};

export default Banner;