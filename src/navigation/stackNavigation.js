import React, { useState, useEffect, Suspense } from "react";
import { View } from "react-native";
import { Screens, Components } from "../mappings/components";
import Loader from "../components/suspenseLoader";

export default ({ config }) => {

    const [currentScreen, setCurrentScreen] = useState(null);
    const [history, setHistory] = useState([]);

    function navigate(screen) {
        if (currentScreen && currentScreen.name === screen) return;

        const screenConfig = config.screens.find(s => s.name === screen);
        if (!screenConfig) throw `Screen '${screen}' is not configured in navigation.`;

        setCurrentScreen(screenConfig);

        // history.push(screenConfig);
        // setHistory(history);
    }

    function back() {
        if (history.length > 1) {
            history.pop();
            setCurrentScreen(history[history.length - 1]);
            setHistory(history);
        }
    }

    function clearHistory() {
        setHistory([currentScreen]);
    }

    useEffect(() => {
        const initial = config.initialScreen || config.screens[0].name;
        navigate(initial);

        return () => {
            setHistory([]);
            setCurrentScreen(null);
        };
    }, []);

    function getScreen() {
        if (!currentScreen) return (<></>);

        const Screen = Screens[currentScreen.type];

        return (
            <Suspense fallback={<Loader />}>
                <Screen navigation={{ navigate, back, clearHistory, currentScreen }} props={currentScreen.props} styleName={currentScreen.styleName} />
            </Suspense>
        );
    }

    function getHeader() {
        if (!currentScreen || !currentScreen.header) return (<></>);

        const headerConfig = config.headers.find(h => h.name === currentScreen.header);

        return (
            <Suspense fallback={<Loader />}>
                <Components.Container navigation={{ navigate, back, clearHistory, currentScreen }} props={headerConfig.props} styleName={headerConfig.styleName} />
            </Suspense>
        );
    }

    function getFooter() {
        return <></>;

        // if (!currentScreen || !currentScreen.footer) return (<></>);

        // const footerConfig = config.footers && config.footers.find(f => f.name === currentScreen.footer);
        // const Footer = footerConfig && Footers[footerConfig.component] || Footers[currentScreen.footer];

        // return (
        //     <Suspense fallback={<Loader />}>
        //         <Components.Container navigation={{ navigate, back, clearHistory, currentScreen }} props={footerConfig.props} />
        //     </Suspense>
        // );
    }

    return (
        <View style={{ flex: 1 }}>
            {getHeader()}
            <View style={{ flex: 1 }}>
                {getScreen()}
            </View>
            {getFooter()}
        </View>
    );
}