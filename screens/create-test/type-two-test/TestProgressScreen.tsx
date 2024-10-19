import * as React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LineChart } from "react-native-gifted-charts";

import { Button, Modal, Portal } from "react-native-paper";
import styles from "./styles";

type RootStackParamList = {
  TypeTwoTestProgressScreen: undefined;
};

type Props = NativeStackScreenProps<
  RootStackParamList,
  "TypeTwoTestProgressScreen"
>;

function TypeTwoTestProgressScreen({ navigation }: Props) {
  const data = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];
  const data2 = [{ value: 20 }, { value: 40 }, { value: 26 }, { value: 30 }];

  const handleSubmit = () => {
    console.log("Pressed");
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={[styles.card, { alignSelf: "center" }]}>
        <View style={styles.headerFlexBox}>
          <View style={{ flex: 1 }}>
            <Text
              style={[
                styles.provideYourTest,
                { textAlign: "center", margin: 8 }
              ]}
            >
              {"Test2502-1\n"}
              <Text
                style={[
                  styles.provideYourTest,
                  { textAlign: "center", margin: 8 }
                ]}
              >
                {"Awaiting Completion"}
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.timeStampFlexBox}>
          <Text
            style={[
              styles.testTimeStamp,
              { textAlign: "center", flex: 1, margin: 8 }
            ]}
          >
            {`From\n18-01-2024 10:49:00
                `}
          </Text>
          <Text
            style={[
              styles.provideYourTest,
              { textAlign: "center", margin: 8, flex: 1 }
            ]}
          >
            {`To\n19-01-2024 10:49:00
                `}
          </Text>
        </View>
        <View style={styles.headerFlexBox}>
          <View style={{ flex: 1 }}>
            <Text
              style={[
                styles.body19,
                { textAlign: "center", margin: 8, color: "#d32f2f" }
              ]}
            >
              {"Fail\n"}
              <Text
                style={[
                  styles.provideYourTest,
                  { textAlign: "center", margin: 8, color: "#ff9800" }
                ]}
              >
                {"Reason\n"}
              </Text>
              <Text
                style={[
                  styles.provideYourTest,
                  { textAlign: "center", marginTop: 12 }
                ]}
              >
                {
                  "N2 over N1 is > N1 - 0.0215338424 should lie between 0.04 and 0.1\n"
                }
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            //alignItems: "center",
            justifyContent: "center",
            margin: 20
          }}
        >
          <LineChart
            data={data}
            data2={data2}
            curved
            animateOnDataChange
            animationDuration={1000}
            onDataChangeAnimationDuration={300}
            color={"#53a020"}
            color2={"#d32f2f"}
            hideRules
            hideDataPoints
            yAxisColor={"black"}
            showYAxisIndices
            yAxisIndicesColor={"black"}
            yAxisIndicesWidth={10}
            //secondaryData={d2.map(v => ({value: v}))}
            secondaryLineConfig={{ color: "blue" }}
            secondaryYAxis={{
              maxValue: 0.2,
              noOfSections: 4,
              showFractionalValues: true,
              roundToDigits: 3,
              yAxisColor: "blue",
              yAxisIndicesColor: "blue"
            }}
            xAxisLabelTextStyle={{ width: 80, marginLeft: -36 }}
            xAxisIndicesHeight={10}
            xAxisIndicesWidth={2}
          />
          <Text
            style={{
              position: "absolute",
              top: 100,
              left: -65,
              transform: [{ rotate: "-90deg" }]
            }}
          >
            {"Flow (litres/min)"}
          </Text>
          <Text
            style={{
              position: "absolute",
              top: 100,
              right: -65,
              transform: [{ rotate: "270deg" }]
            }}
          >
            {"Pressure (bar)"}
          </Text>
          <Text
            style={{
              position: "absolute",
              bottom: -10,
              right: 95,
              transform: [{ rotate: "0deg" }]
            }}
          >
            {"Pressure (bar)"}
          </Text>
        </View>
        <View style={[styles.elementsLegend, styles.bottomLabelPosition]}>
          <View style={styles.legendFlexBox}>
            <View style={[styles.legendChild, styles.legendLayout]} />
            <Text style={styles.series11}>Actual Readings</Text>
          </View>
          <View style={styles.legendFlexBox}>
            <View style={[styles.legendItem, styles.legendLayout]} />
            <Text style={styles.series11}>Predicted</Text>
          </View>
        </View>
        <View style={styles.cards}>
          <View style={styles.cardShadowBox}>
            <View style={styles.cardHeader}>
              <View style={styles.typographyContainer}>
                <View style={styles.typography8}>
                  <Text style={styles.body17}>TP: 10:49:20 (0.33 mins)</Text>
                </View>
                <View>
                  <Text style={styles.body18}>8.70 bar</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cardShadowBox}>
            <View style={styles.cardHeader}>
              <View style={styles.typographyContainer}>
                <View style={styles.typography8}>
                  <Text style={styles.body17}>TP: 10:49:20 (0.33 mins)</Text>
                </View>
                <View>
                  <Text style={styles.body18}>4.390 bar</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.cards1, styles.cards1SpaceBlock]}>
          <View style={styles.cardShadowBox}>
            <View style={styles.cardHeader}>
              <View style={styles.typographyContainer}>
                <View style={styles.typography8}>
                  <Text style={styles.body17}>TP: 10:49:20 (2.36 mins)</Text>
                </View>
                <View>
                  <Text style={styles.body18}>3.50 bar</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cardShadowBox}>
            <View style={styles.cardHeader}>
              <View style={styles.typographyContainer}>
                <View style={styles.typography8}>
                  <Text style={styles.body17}>TP: 10:49:20 (8.88 mins)</Text>
                </View>
                <View>
                  <Text style={styles.body18}>4.260 bar</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.buttonParent}>
          <View style={styles.buttonShadowBox}>
            <Pressable style={{ width: "100%" }} onPress={handleSubmit}>
              <Text style={[styles.text4]}>{"DOWNLOAD CERTIFICATE "}</Text>
            </Pressable>
          </View>

          <View style={styles.buttonShadowBox}>
            <Pressable style={{ width: "100%" }} onPress={handleSubmit}>
              <Text style={[styles.text4]}>{"DOWNLOAD TEST DATA "}</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.view2}>
          <Button
            style={styles.text2}
            textColor="white"
            onPress={() => {
              navigation.push("Complete Type Two Test");
            }}
          >
            {"COMPLETE TEST"}
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

export default TypeTwoTestProgressScreen;
