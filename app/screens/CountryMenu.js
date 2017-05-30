/**
 * @flow
 */

import React, { Component } from "react";
import { ScrollView } from "react-native";
import { Tile, List, ListItem, Button } from "react-native-elements";
import menu from "../config/menu";

const CountryMenu = ({ navigation }) => (
  <ScrollView>
    <List>
      {menu.map(menuitem => (
        <ListItem
          key={menuitem.code}
          title={menuitem.name}
          subtitle={menuitem.description}
          onPress={() => navigation.navigate("LandingCard", {menuitem: menuitem})}          
        />
      ))}
    </List>
  </ScrollView>
);

export default CountryMenu;
