import { StyleSheet } from "react-native";

export default StyleSheet.create({
    common: {

    },
    header: {
        height: 140,
        backgroundColor: "black",
    },
    headerBG: {
        resizeMode: "cover",
        paddingTop: 30,
        paddingHorizontal: 25,
        paddingBottom: 10,
        flex: 1,
    },
    flexRow: {
        flexDirection: "row"
    },
    horizontalCenteredContainer: {
        flex: 1,
    },
    centeredContainer: {
        flex: 1
    },
    startScreenLinksContainerTop: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    startScreenLinksContainerBottom: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    }
});