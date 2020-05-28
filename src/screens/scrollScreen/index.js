import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from "./styles";
import { buildComponents } from "../../mappings/componentsBuilder";

export default ({ navigation, props: { components }, styleName }) => {
    return (
        <View style={{ ...styles.common, ...styles[styleName] }}>
            <Text>{navigation.currentScreen.name}</Text>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                {buildComponents(navigation, components)}
            </ScrollView>
        </View>
    );
}

