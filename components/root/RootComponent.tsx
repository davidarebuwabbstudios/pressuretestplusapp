// This the root component and it handle status bar and nodge. This makes sure the main screen appears in safe area
import React from "react";
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';


interface RootComponentProps {
    children: React.ReactNode;
  }

const RootComponent: React.FC<RootComponentProps> = (props) => {
    const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{ flex: 1, paddingBottom: insets.bottom, left: insets.left, right: insets.right}}
      
    >
      {props.children}
    </SafeAreaView>
  );
};

export default RootComponent;
