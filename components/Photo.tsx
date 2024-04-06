import Colors from '@/constants/Colors';
import { Image } from 'expo-image';
import React from 'react';
import { ImageStyle, View, ViewStyle } from 'react-native';

interface PhotoType {
  photoRef: PhotoRefType;
  style?: ImageStyle;
}

type PhotoRefType = {
  height: number,
  html_attributions: string[],
  photo_reference: string,
  width: number
}

function Photo({ photoRef, style }: PhotoType) {
  const photo = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef.photo_reference}&key=${process.env.EXPO_PUBLIC_GOOGLE_API_KEY}`;
  // console.log(photo)
  return (
    <>
      {
        photoRef.photo_reference ?
          (
            <Image
              source={{ uri: photo }}
              style={[style, { backgroundColor: Colors.loadingColor }]}
              contentFit="fill"
            />
          ) : (
            <View
              style={[style, { backgroundColor: Colors.loadingColor }]}
            />
          )
      }
    </>
  );
}

export default Photo;
