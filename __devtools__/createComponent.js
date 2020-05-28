const fs = require("fs");
const user = require("os").userInfo().username;
const app = require("../app.json")
const componentsFolder = "src/components/";

const date = new Date();
const dateStr = `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;

try {
    const name = process.argv[2];

    if (!name) throw "You must provide a name for the component.";
    if (name.split(" ").length > 1) throw "Invalid component name.";

    console.log(`Creating component ${name}...`);

    const path = `${componentsFolder}${name}`;

    fs.mkdirSync(path, { recursive: true });

    fs.writeFile(`${path}/styles.js`, getStylesTemplate(), (error) => {
        if (error) logError(`Error creating styles file: ${error}`);
        else console.log("Styles file created.");
    });

    fs.writeFile(`${path}/index.js`, getComponentTemplate(name), (error) => {
        if (error) logError(`Error creating component file: ${error}`);
        else console.log("Component file created.");
    });
}
catch (error) {
    logError(`Error creating component: ${error}`);
}

function logError(error) {
    console.error('\x1b[31m%s\x1b[0m', `${error}`);
}

function getComponentTemplate(componentName) {
    return `
/**
 * Auto generated component for ${app.name}
 * Author: ${user}
 * Date: ${dateStr}
 */
    
import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";
    
export default ({ navigation, props, styleName }) => {
    // Component state values
    const [counter, setCounter] = useState(0);

    /**
     * Add code to run when the component is mounted.
     * If need to run this code when some state is updated, add those states to the array given as argument.
     * Ex: ...}, [counter]);
     */
    useEffect(() => {
        // Code to run when mounted or updated
    
        // Return a function to run before unmount the component
        // This must be usefull to remove event listeners or clear some states
        return () => {
            // Code to run before unmount the component
        };
    }, []);
        
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>${componentName}</Text>
            <Text>You clicked {counter} times.</Text>
            <Button title="Click me to increment" onPress={() => setCounter(counter + 1)} />
        </View>
    );
};
`;
}

function getStylesTemplate() {
    return `
/**
 * Auto generated component for ${app.name}
 * Author: ${user}
 * Date: ${dateStr}
 */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 30
    }
});
`;
}