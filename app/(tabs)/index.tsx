import { Pressable, ScrollView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Searchbar } from "react-native-paper";

import { View, Text } from "@/components/Themed";
import { PoppinBoldText, PoppinText, PromptBoldText, PromptText } from "@/components/StyledText";
import { DIMENSIONS } from "@/assets/dimensions";
import RecommendLists from "@/components/Lists/RecommendLists";
import PlaceRecommendData from '../../assets/mockdata/placeRecommend'
import { useTranslation } from "react-i18next";

export default function TabOneScreen() {
  const { t } = useTranslation();

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <StatusBar style="light" />
        <View style={styles.headerContainer}>
          <View>
            <PromptBoldText style={styles.title}>{t('No Place to go?')}</PromptBoldText>
            <PromptText style={styles.subtitle}>{t('let us help you')}</PromptText>
          </View>
          <View>
            <Avatar.Text label="Mn" size={35} />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.recommendContainer}>
            <TouchableOpacity onPress={() => null}>
              <Searchbar value="" />
            </TouchableOpacity>
          </View>
          <View style={styles.recommendContainer}>
            <PromptBoldText style={{ fontSize: 18 }}>{t('Place Recommend')}</PromptBoldText>
          </View>
          <RecommendLists data={PlaceRecommendData.recommend_places} />
          <View style={styles.recommendContainer}>
            <PromptBoldText style={{ fontSize: 18 }}>{t('Plan Recommend')}</PromptBoldText>
          </View>
          <RecommendLists data={PlaceRecommendData.recommend_places} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  recommendContainer: {
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
