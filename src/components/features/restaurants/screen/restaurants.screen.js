import React from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { RestaurantInfo } from "../components/restaurant-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchBarContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const ViewList = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchBarContainer>
      <Searchbar placeholder="Search" />
    </SearchBarContainer>
    <ViewList>
      <RestaurantInfo />
    </ViewList>
  </SafeArea>
);
