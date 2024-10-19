import * as React from "react";
import { View, Text, Pressable, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./styles";

type TesItemProps = {
    title: string,
    type: string,
    status: string
    icon: string
};

const statusIcons = {
    running: "timeline-clock-outline",
    failed: "pipe-leak",
    success: "check"
}

function TestCardItem() { //{title}: TesItemProps)
  const [active, setActive] = React.useState("");

  return (
    <>
      <Pressable style={styles.cardShadowBox} onPress={() => {}}>
          <View style={styles.cardHeader}>
            <View style={[styles.mdipipeLeak, styles.mdipipeLeakSpaceBlock]}>
            <MaterialCommunityIcons name="timeline-clock-outline" size={20} color='#404040'/>
            </View>
            <View>
              <View>
                <Text style={[styles.body1, styles.bodyTypo]}>Test2502-1</Text>
              </View>
              <View>
                <Text style={[styles.body11, styles.bodyLayout]}>Type-2</Text>
              </View>
            </View>
            <View style={styles.typography3}>
              <Text numberOfLines={3} style={[styles.body12, styles.bodyTypo]}>{`181 minutes`}</Text>
            </View>
          </View>
        </Pressable>
    </>
  );
}

export default TestCardItem;
