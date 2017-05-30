/**
 * @flow
 */

import React, { Component } from "react";
import { Text, ScrollView, View, Dimensions, StyleSheet } from "react-native";

import Image from "react-native-transformable-image";

//let card1 = require("../../images/indonesia01.jpg");

export class LandingCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height
    };

    this._onLayout = this._onLayout.bind(this);
  }
  _onLayout(e) {
    this.setState({
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height
    });
  }
  render() {
    let menuitem = this.props.navigation.state.params.menuitem;
    let sourceImage = menuitem.originalCard;
let route = this.props.navigation.state.routeName;

    if (route === "OriginalTab") sourceImage = menuitem.originalCard;
    else if (route === "TranslatedTab") sourceImage = menuitem.translatedCard;
    else if (route === "ExampleTab") sourceImage = menuitem.exampleCard;

    return (
      <View style={{ flex: 1 }}>
        <Image
          onLayout={this._onLayout}
          source={sourceImage}
          pixels={{ width: menuitem.width, height: menuitem.height }}
          style={{
            flex: 1,
            width: this.state.width,
            height: this.state.height
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  photo: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});

export default LandingCard;
