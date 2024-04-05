import { LayoutAnimation, Pressable, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import PlaceRecommendCard from "../Cards/PlaceRecommendCard";

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Second Item",
  },
];

const RecommendLists = () => {
  const pressItem = (item: string) => {
    console.log(item);
  };

  return (
    <FlashList
      data={DATA}
      horizontal
      contentContainerStyle={
        {
          // backgroundColor: "black",
        }
      }
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => pressItem(item.title)}
          style={{
            marginLeft: index === 0 ? 16 : 0,
            marginRight: index === DATA.length - 1 ? 16 : 0,
            marginVertical: 10,
          }}
        >
          <PlaceRecommendCard placeData={item.title} />
        </Pressable>
      )}
      estimatedItemSize={200}
    />
  );
};

export default RecommendLists;

const styles = StyleSheet.create({});
