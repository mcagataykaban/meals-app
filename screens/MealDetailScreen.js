import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {MEALS} from '../data/dummy-data'

const MealDetailScreen = (props) => {
  const mealId = props.route.params.mealId;

  const selectedMeal = MEALS.find(x => x.id === mealId)
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go back to categories"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
