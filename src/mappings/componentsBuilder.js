import React, { Suspense } from "react";
import { Text } from "react-native";
import { Components } from "./components";
import Loader from "../components/suspenseLoader";

export function buildComponents(navigation, items, parentProps) {
    return items.map((c, i) => buildComponent(navigation, c, i, parentProps, c.children));
}

export function buildComponent(navigation, { type, props, styleName }, key, parentProps, children) {
    const Tag = Components[type];

    //Only for development
    if (!Tag) {
        return <Text style={{ color: "red" }}>Component {type} is not mapped.</Text>;
    }

    return (
        <Suspense key={key} fallback={<Loader />}>
            <Tag navigation={navigation} props={props} styleName={styleName} parentProps={parentProps} />
        </Suspense>
    );
}
