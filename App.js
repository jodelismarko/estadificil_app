import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import LoadingScreen from "./src/screens/loadingScreen";
import StackNavigator from "./src/navigation/stackNavigation";
import Utils from "./src/utils/jsutils";
import UserInactivity from "react-native-user-inactivity";
import MediaViewer from "./src/components/mediaViewer";

//TODO: Remove - DUMMY DATA
import { _getDummyScreensData, _standbyMedia } from "./temp/_dummyScreensData";
import { Defaults } from "./app.config";

export default App = () => {

  const [errorLoading, setErrorLoading] = useState(false);
  const [appData, setAppData] = useState(null);
  const [active, setActive] = useState(true);

  const _dummyGetData = async () => {
    await Utils.sleep(500);

    // Uncomment the following line to force error
    // throw "Error";

    return _getDummyScreensData();
  }

  const loadData = async () => {
    setErrorLoading(false);
    setAppData(null);

    try {
      const data = await _dummyGetData();
      setAppData(data);
    } catch (err) {
      setErrorLoading(true);
    }
  };

  useEffect(() => {
    loadData();

    return () => {
      setErrorLoading(false);
      setAppData(null);
    };
  }, []);

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        {
          !appData
            ? <LoadingScreen error={errorLoading} retryAction={loadData} />
            : (
              <UserInactivity isActive={active}
                timeForInactivity={Defaults.sessionTimeout * 1000}
                onAction={isActive => { setActive(isActive) }}
                style={{ flex: 1 }}>
                {(
                  active
                    ? (<StackNavigator config={appData} />)
                    : (<MediaViewer media={_standbyMedia} style={styles.standbyScreen} />)
                )}
              </UserInactivity>
            )
        }
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  standbyScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "transparent"
  }
});

