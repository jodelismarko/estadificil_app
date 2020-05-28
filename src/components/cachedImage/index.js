import React, { useState, useEffect } from "react";
import { Image, ImageBackground } from "react-native";
import MediaStorage from "../../storage/mediaStorage";
import styles from "./style";

export default ({ props: { url }, styleName, style, bg, ...rest }) => {
    const [source, setSource] = useState(false);

    async function getImage() {
        const image = await MediaStorage.getFile(url);
        setSource(image);
    }

    const getStyles = () => [styles.common, style, styles[styleName]];

    useEffect(() => {
        getImage();
    }, []);

    return (
        bg
            ? (<ImageBackground source={{ uri: source }} style={getStyles()}>{rest.children}</ImageBackground>)
            : (<Image source={{ uri: source }} style={getStyles()} {...rest} />)
    );
};
