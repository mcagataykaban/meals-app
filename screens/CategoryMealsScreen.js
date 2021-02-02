import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  
  const catId = props.route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <MealList listData={displayedMeals} navigation={props.navigation} />
  );
};

const styles = StyleSheet.create({
  
});

export default CategoryMealsScreen;
