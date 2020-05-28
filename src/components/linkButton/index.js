import React from "react";
import { Text, View } from "react-native";
import { BtnContainer, BtnImage, BtnText } from "./styles";
import Image from "../cachedImage";

export default ({ navigation, props: { title, href, linkType, image }, styleName, parentProps }) => {

    function handleOnPress() {
        if (linkType === "internal") {
            // const destination = href.substr(1);
            navigation.navigate(href);
        } else if (linkType === "external") {
            //Open web view
        }
    }

    return (
        <View
            style={{ ...BtnContainer.common, ...BtnContainer[styleName], ...BtnContainer[(parentProps && parentProps.active ? `${styleName}Active` : null)] }}
            onTouchEnd={handleOnPress}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image props={{ url: image }} style={[BtnImage.common, BtnImage[styleName]]} />
                <Text style={[BtnText.common, BtnText[styleName]]}>{title}</Text>
            </View>
        </View>
    );
};
