import React from "react";
import { Text, View } from "react-native";
import { styles, BtnContainer, BtnImage, BtnText } from "./styles";
import Image from "../cachedImage";

export default ({ navigation, props: { title, text, buttonText, linkType, href, image }, styleName }) => {
    function handleOnPress() {
        if (linkType === "internal") {
            // const destination = href.substr(1);
            navigation.navigate(href);
        } else if (linkType === "external") {
            //Open web view
        }
    }
    return (
        <View style={styles.boxContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
            <View
                style={{ ...BtnContainer.common, ...BtnContainer[styleName] }}
                onTouchEnd={handleOnPress}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image props={{ url: image }} style={{ ...BtnImage.common, ...BtnImage[styleName] }} />
                    <Text style={{ ...BtnText.common, ...BtnText[styleName] }}>{buttonText}</Text>
                </View>
            </View>
        </View>
    )
}