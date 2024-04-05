import { StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "../Themed";
import { DIMENSIONS } from "@/assets/dimensions";
import Colors from "@/constants/Colors";

interface Props {
  placeData: any;
}

const PlaceRecommendCard = ({ placeData }: Props) => {
  return (
    <View style={styles.card}>
      <Text>{placeData}</Text>
    </View>
  );
};

export default PlaceRecommendCard;

const styles = StyleSheet.create({
  card: {
    width: DIMENSIONS.width / 2.5,
    height: DIMENSIONS.width / 1.8,
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.background,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 8,
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});
