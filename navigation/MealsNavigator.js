// In App.js in a new project

import * as React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import { LinearGradient } from "react-native-linear-gradient";
import { StatusBar } from "expo-status-bar";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { color } from "react-native-reanimated";

const Stack = createStackNavigator();

const defaultOptions = {
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerBackTitle: "",
};

const mealDetailOptions = ({ route }) => ({
  title: route.params.mealName,
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Favorite"
        iconName="ios-star"
        onPress={() => {
          console.log("it works");
        }}
      />
    </HeaderButtons>
  ),
})

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={defaultOptions}
      initialRouteName="Categories"
    >
      <Stack.Screen
        name="Categories"
        options={{
          title: "Meal Categories",
        }}
        component={CategoriesScreen}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({
          title: route.params.categoryName,
        })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={mealDetailOptions}
      />
    </Stack.Navigator>
  );
};

const FavoritesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerBackTitle: "",
        headerTitleAlign: "center",
        headerTintColor: Platform.OS === "android" ? Colors.accentColor : Colors.primaryColor,
      }}
    >
      <Stack.Screen
        options={{
          title: "Your Favorites",
        }}
        name="Favorites"
        component={FavoritesScreen}
      />
      <Stack.Screen name="MealDetail" options={mealDetailOptions} component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const Tab =
  Platform.OS === "ios"
    ? createBottomTabNavigator()
    : createMaterialBottomTabNavigator();
const MealsFavTabNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        shifting={true}
        tabBarOptions={{ activeTintColor: Colors.accentColor }}
      >
        <Tab.Screen
          name="Meals"
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="ios-restaurant"
                  size={25}
                  color={tabInfo.color}
                />
              );
            },
            tabBarColor: Colors.primaryColor,
          }}
          screen={MealsNavigator}
          component={MealsNavigator}
        />
        <Tab.Screen
          name="Favorites"
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons name="ios-star" size={25} color={tabInfo.color} />
              );
            },
            tabBarColor: Colors.accentColor,
          }}
          component={FavoritesNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MealsFavTabNavigator;
