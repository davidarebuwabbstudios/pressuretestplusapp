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


function ConnectLoggerItem() { //{title}: TesItemProps)
  const [active, setActive] = React.useState("");

  return (
<View style={[styles.itemPosition]}>
        <View style={styles.itemMaster}>
          <View style={[styles.content, styles.contentSpaceBlock]}>
            <View style={styles.lablesFlexBox}>
            <Icon name="tachometer" size={20} color='#404040'/>

              <View style={styles.contentStart}>
                <Text style={[styles.listItemTitle, styles.listItemTypo]}>
                  PTP5857
                </Text>
              </View>
              <View style={[styles.contentEnd, styles.contentFlexBox]}>
                <View style={styles.contents}>
                  <Text style={[styles.note, styles.noteTypo]}>Connected</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
  )
};

export default ConnectLoggerItem;
