import React from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import styles from "./styles";

export default ({ error, retryAction }) => {

    return (
        <View style={styles.container}>
            {
                error
                    ? (
                        <>
                            <Text style={styles.error}>Error</Text>
                            <Button title="Try again" onPress={retryAction} color="gray" />
                        </>
                    )
                    : (
                        <>
                            <ActivityIndicator size="large" color="#81BC00" />
                            <Text style={styles.text}>Loading</Text>
                        </>
                    )
            }
        </View>
    );
};
