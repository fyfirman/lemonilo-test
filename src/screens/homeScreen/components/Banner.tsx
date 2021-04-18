import React from 'react';
import styled from 'styled-components/native';

const ImageWrapper = styled.TouchableHighlight`
  border-radius: ${({ theme }) => theme.borderRadius.small}px;
`;

const ImageBanner = styled.Image`
  height: 140px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.small}px;
`;

interface BannerProps {
  imageUri?: string;
  onPress: () => any;
}

const Banner = (props: BannerProps) => {
  const { imageUri, onPress } = props;
  return (
    <ImageWrapper onPress={onPress}>
      <ImageBanner
        source={imageUri ? { uri: imageUri } : require('@assets/images/banner-blue.png')}
        resizeMode="cover"
      />
    </ImageWrapper>
  );
};

export default Banner;
