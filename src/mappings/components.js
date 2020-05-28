import { lazy } from "react";

export const Screens = {
    StaticScreen: lazy(() => import("../screens/staticScreen")),
    ScrollScreen: lazy(() => import("../screens/scrollScreen"))
};

export const Headers = {

};

export const Footers = {

};

//Add all components
export const Components = {
    Image: lazy(() => import("../components/cachedImage")),
    LinkButton: lazy(() => import("../components/linkButton")),
    Container: lazy(() => import("../components/container")),
    NavigationBar: lazy(() => import("../components/navigationBar")),
    Text: lazy(() => import("../components/text")),
    LinkBox: lazy(() => import("../components/linkBox")),
    HtmlView: lazy(() => import("../components/htmlView"))
};
