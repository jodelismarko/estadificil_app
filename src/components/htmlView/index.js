import React from "react";
import HtmlView from "react-native-htmlview";
import styles from "./styles";

export default ({ navigation, props: { htmlContent } }) => {

    return (
        <HtmlView value={htmlContent} stylesheet={styles} />
    );
};
