import * as React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

function ContactScreen() {
  const [active, setActive] = React.useState("");

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={[styles.card, styles.cardPosition]}>
          <View style={styles.cardHeader}>
            <View style={styles.typographyParent}>
              <View style={styles.typography1}>
                <Text
                  style={[styles.body1, styles.body1Typo]}
                >{`Stopper Specialists

UK Hire Desk
`}</Text>
              </View>
              <View style={styles.typography1}>
                <Text style={[styles.body11, styles.bodyTypo]}>
                  <Text style={styles.body1Typo}>{`Telephone
`}</Text>
                  <Text style={styles.text}>01590 683999</Text>
                </Text>
              </View>
              <Text style={[styles.body11, styles.bodyTypo]}>
                <Text style={styles.body1Typo}>{`Email
`}</Text>
                <Text style={styles.text}>info@stopperspecialists.co.uk</Text>
              </Text>
              <View style={styles.typography1}>
                <Text style={[styles.body1, styles.body1Typo]}>{`
Ireland Hire Desk
`}</Text>
              </View>
              <View style={styles.typography1}>
                <Text style={[styles.body11, styles.bodyTypo]}>
                  <Text style={styles.body1Typo}>{`Telephone
`}</Text>
                  <Text style={styles.text}>1890 882 364</Text>
                </Text>
              </View>
              <Text style={[styles.body11, styles.bodyTypo]}>
                <Text style={styles.body1Typo}>{`Email
`}</Text>
                <Text style={[styles.text, {marginBottom: 20}]}>info@vpgroundforce.ie</Text>
              </Text>
              <Text style={styles.body16}>
                <Text style={styles.body1Typo}> </Text>
                <Text
                  style={styles.text}
                >{`\nTo delete your personal data from PressureTest+ 
please email the appropriate Hiredesk quoting
the following: “Please delete the data you hold
on me for PressureTest+”. Please note, if this action
is requested you will no longer be able to access
the application without registering for a new account.
Any tests you have performed will no longer be 
available to you even after registering for a new account`}</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default ContactScreen;
