import * as React from "react";
import { View, Text, Pressable, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

type TesItemProps = {
    title: string,
    type: string,
    status: string
    icon: string
};


function TestCardItem() { //{title}: TesItemProps)
  const [active, setActive] = React.useState("");

  return (
    <>
      <Pressable style={styles.cardShadowBox} onPress={() => {}}>
          <View style={styles.cardHeader}>
            <View style={[styles.mdipipeLeak, styles.mdipipeLeakSpaceBlock]}>
            <Icon name="tachometer" size={20} color='#404040'/>
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
              <Text style={[styles.body12, styles.bodyTypo]}>{`181 minutes 
remaining`}</Text>
            </View>
          </View>
        </Pressable>
    </>
  );
}

export default TestCardItem;
