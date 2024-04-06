import { LayoutAnimation, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import PlaceRecommendCard from "../Cards/PlaceRecommendCard";

interface Props {
  data: PlaceDataType[];
}

const RecommendLists = ({ data }: Props) => {
  const pressItem = (item: string) => {
    console.log(item);
  };

  return (
    <FlashList
      data={data.slice(0, 10)}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => pressItem(item.place_id)}
          style={{
            marginLeft: index === 0 ? 16 : 0,
            marginRight: index !== data.length - 1 ? 16 : 0,
            marginVertical: 20,
          }}
        >
          <PlaceRecommendCard placeData={item} />
        </TouchableOpacity>
      )}
      estimatedItemSize={200}
    />
  );
};

export default RecommendLists;

const styles = StyleSheet.create({});
