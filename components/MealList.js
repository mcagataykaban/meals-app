import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from './MealItem'

const MealList = (props) => {
    const renderMealItem = (itemData) => {
        return (
          <MealItem
            title={itemData.item.title}
            onSelectMeal={() => {
              props.navigation.navigate("MealDetail", {
                mealId: itemData.item.id,
                mealName: itemData.item.title
              });
            }}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            image={itemData.item.imageUrl}
          />
        );
      };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: "100%", padding: 10 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealList;
