import React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from "./styles";
import { buildComponents } from "../../mappings/componentsBuilder";

export default ({ navigation, props: { components, bgImage }, style: styleName }) => {
    return (
        <View style={{ ...styles.common, ...styles[styleName] }}>
            {
                bgImage
                    ? (
                        <ImageBackground source={{ uri: bgImage }} style={styles[styleName + "BG"]}>
                            {buildComponents(navigation, components)}
                        </ImageBackground>
                    )
                    : buildComponents(navigation, components)
            }
        </View>
    );
}

