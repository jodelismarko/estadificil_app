import React from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import { buildComponent } from "../../mappings/componentsBuilder";

//IMPORTANT: Items should be an array of LinkButton or similar
export default ({ navigation, props: { components }, styleName }) => {

    function checkIsActive(item) {
        return item.props.href === navigation.currentScreen.name;
    }

    return (
        <FlatList
            horizontal={true}
            style={styles[styleName]}
            data={components}
            renderItem={({ item }) => buildComponent(navigation, item, null, { active: checkIsActive(item) })}
            ItemSeparatorComponent={() => {
                return (
                    <View style={{ height: 22, width: 1, alignSelf: "center", backgroundColor: "#FFFFFF" }} />
                );
            }}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};