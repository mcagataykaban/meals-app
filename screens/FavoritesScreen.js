import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
const FavoritesScreen = (props) => {
  const favoritesMeals = MEALS.filter((x) => x.id === "m1" || x.id === "m2");
  return <MealList listData={favoritesMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
