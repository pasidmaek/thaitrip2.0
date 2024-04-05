import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { View, Text } from "@/components/Themed";
import { PoppinBoldText, PoppinText } from "@/components/StyledText";
import { DIMENSIONS } from "@/assets/dimensions";
import { Avatar, Searchbar } from "react-native-paper";
import Colors from "@/constants/Colors";
import PlaceRecommendCard from "@/components/Cards/PlaceRecommendCard";
import RecommendLists from "@/components/Lists/RecommendLists";

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <View>
          <PoppinBoldText style={styles.title}>No Place to go?</PoppinBoldText>
          <PoppinText style={styles.subtitle}>let us help you</PoppinText>
        </View>
        <View>
          <Avatar.Text label="Mn" size={35} />
          {/* <PoppinText style={styles.subtitle}>let we help you</PoppinText> */}
        </View>
      </View>
      <View style={{ flex: 1 }}>
        {/* <View style={styles.recommendContainer}>
          <Searchbar value="" />
          <PoppinText>PlaceRecommend</PoppinText>
        </View> */}
        <RecommendLists />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  recommendContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerContainer: {
    width: DIMENSIONS.width,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    // backgroundColor: "black",
  },
  title: {
    fontSize: 20,
    // fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
