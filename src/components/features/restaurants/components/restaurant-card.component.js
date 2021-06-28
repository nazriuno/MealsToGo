import React from "react";
import styled from "styled-components/native";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import open from "../../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.lineHeights.copy};
  background-color: white;
`;

const Info = styled(View)`
  padding-bottom: ${(props) => props.theme.lineHeights.copy};
  padding-left: ${(props) => props.theme.lineHeights.copy};
  padding-right: ${(props) => props.theme.lineHeights.copy};
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.success};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some restaurrant",
    icon = "https://unsplash.com/photos/GXXYkSwndP4/download?force=true&w=640",
    photos = [
      "https://unsplash.com/photos/GXXYkSwndP4/download?force=true&w=640",
      "https://unsplash.com/photos/N_Y88TWmGwA/download?force=true&w=640",
    ],
    address = "Petaling jaya Petaling jaya Petaling jaya Petaling jaya",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARY
              </Text>
            )}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <View style={{ marginLeft: 16 }}>
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </View>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
