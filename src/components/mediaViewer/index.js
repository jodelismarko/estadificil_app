import React, { useRef, useEffect, useState } from "react";
import Video from "react-native-video";
import { View, StyleSheet } from "react-native";
import Image from "../../components/cachedImage";
import { MediaStyles, HtmlStyles } from "./styles";
import HtmlView from "react-native-htmlview";

const _defaultTimeout = 5;

export default ({ media, ...rest }) => {
    if (!(media instanceof (Array))) throw "Property \"media\" must be an array.";

    const timeout = useRef(false);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(null);

    function nextMedia() {
        let nextMediaIndex = currentMediaIndex + 1;

        if (nextMediaIndex >= media.length) {
            nextMediaIndex = 0;
        }

        setCurrentMediaIndex(nextMediaIndex);
    }

    function getText() {
        const currentMedia = media[currentMediaIndex];

        if (currentMedia && currentMedia.text && currentMedia.text.value) {
            const styleSheet = currentMedia.text.style
                ? StyleSheet.create(currentMedia.text.style)
                : HtmlStyles;

            return (
                <HtmlView value={currentMedia.text.value} stylesheet={styleSheet}>
                    {currentMedia.text.value}
                </HtmlView>
            );
        }

        return <></>;
    }

    function getCurrentMedia() {
        const currentMedia = media[currentMediaIndex];
        timeout.current = null;

        if (currentMedia) {
            if (currentMedia.type === "video") {
                return (
                    <Video source={{ uri: currentMedia.url }} onEnd={nextMedia} muted={true} resizeMode="contain" style={MediaStyles.video} />
                );
            } else if (currentMedia.type === "image") {
                timeout.current = setTimeout(nextMedia, (currentMedia.timeout || _defaultTimeout) * 1000);

                return (
                    <Image props={{ url: currentMedia.url }} bg={true} style={MediaStyles.image} />
                );
            }
        }

        return <HtmlView value="<h2>Media error</h2>" />;
    }

    useEffect(() => {
        setCurrentMediaIndex(0);

        return () => {
            clearTimeout(timeout.current);
        };
    }, []);

    return (
        <View {...rest}>
            {getCurrentMedia()}
            <View style={HtmlStyles.common}>
                {getText()}
            </View>
        </View>
    );
};
