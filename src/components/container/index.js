import React from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "./styles";
import { buildComponents } from "../../mappings/componentsBuilder";

export default ({ navigation, styleName, props: { components, bgImage }, parentProps }) => {
    return (
        <View style={{ ...styles.common, ...styles[styleName] }}>
            {
                bgImage
                    ? (
                        <ImageBackground source={{ uri: bgImage }} style={styles[styleName + "BG"]} imageStyle={{ opacity: 0.8 }}>
                            {buildComponents(navigation, components, parentProps)}
                        </ImageBackground>
                    )
                    : (
                        buildComponents(navigation, components, parentProps)
                    )
            }
        </View>
    );
};
