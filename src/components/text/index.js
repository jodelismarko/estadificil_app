import React from "react";
import { Text } from "react-native";
import styles from "./styles";

export default ({ style, styleName, children, text, ...rest }) => {
    return (
        <Text style={[style, styles.common, styles[styleName]]} {...rest}>
            {children || text}
        </Text>
    );
};
