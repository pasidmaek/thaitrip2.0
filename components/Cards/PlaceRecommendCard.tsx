import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Text, View } from "../Themed";
import { DIMENSIONS } from "@/assets/dimensions";
import Colors from "@/constants/Colors";
import { PREFERENCE_TYPE } from "@/constants/Preference";
import Photo from "../Photo";
import { PromptBoldText, PromptText } from "../StyledText";

interface Props {
  placeData: PlaceDataType;
}

const PlaceRecommendCard = ({ placeData }: Props) => {
  const [placeType, setPlaceType] = useState<string[]>([]);

  useEffect(() => {
    if (placeData?.types) {
      const newPlaceTypes = Object.entries(PREFERENCE_TYPE)
        .filter(([placeType, type]) =>
          type.exampleEn.some((subtype: string) =>
            new Set(placeData.types as string[]).has(subtype)
          )
        )
        .map(([placeType, type]) => type.nameTh);
      setPlaceType(newPlaceTypes);
    }
  }, [placeData?.types]);

  return (
    <View style={styles.card}>
      <Photo photoRef={placeData?.photos[0]} style={styles.photoContainer} />
      <View style={styles.contentContainer}>
        <PromptBoldText style={{ fontSize: 18 }}>{placeData.name}</PromptBoldText>
        <PromptText
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {placeData?.vicinity!.split(' ').pop()}
        </PromptText>
        {placeData.types && (
          <View style={{ flexDirection: 'row', overflow: 'hidden' }}>
            {placeType?.length > 2
              ? placeType.slice(0, 2).map((item, index) => (
                <View key={index} style={styles.tagContainer}>
                  <Text style={styles.tagText}>{item}</Text>
                </View>
              ))
              : placeType.map((item, index) => (
                <View key={index} style={styles.tagContainer}>
                  <PromptText style={styles.tagText}>{item}</PromptText>
                </View>
              ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default PlaceRecommendCard;

const styles = StyleSheet.create({
  card: {
    width: DIMENSIONS.width / 2,
    height: DIMENSIONS.width / 1.5,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: "#000000",
    shadowOffset: {
      width: 4,
      height: 2,
    },
    elevation: 5,
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  photoContainer: {
    width: '100%',
    height: '45%',
  },
  contentContainer: {
    padding: 10
  },
  tagContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 6,
    marginRight: 4,
  },
  tagText: {
    marginVertical: 2,
    marginHorizontal: 8,
    color: 'white',
    fontSize: 12
  },
});
