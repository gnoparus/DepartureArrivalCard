/**
 * @flow
 */

import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";

import CountryMenu from "../screens/CountryMenu";
import LandingCard from "../screens/LandingCard";

export const LandingCardTabs = TabNavigator({
  OriginalTab: {
    screen: LandingCard,
    navigationOptions: {
      // title: "Original",
      tabBarLabel: 'Original',
      tabBarIcon: ({ tintColor }) => <Icon name="assignment" size={35} color={tintColor} />,
    }
  },
  TranslatedTab: {
    screen: LandingCard,
    navigationOptions: {
      // title: "Translated"
      tabBarLabel: 'Translated',
      tabBarIcon: ({ tintColor }) => <Icon name="translate" size={35} color={tintColor} />,
    }
  },
  ExampleTab: {
    screen: LandingCard,
    navigationOptions: {
      // title: "Example"
      tabBarLabel: 'Example',
      tabBarIcon: ({ tintColor }) => <Icon name="assignment turned in" size={35} color={tintColor} />,
    }
  }
});

export const Root = StackNavigator({
  CountryMenu: {
    screen: CountryMenu,
    navigationOptions: {
      title: "Departure/Arrival Card"
    }
  },
  LandingCard: {
    screen: LandingCardTabs,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.menuitem.name}`
    })
  }
});
