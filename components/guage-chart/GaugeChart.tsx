/* eslint import/no-unresolved: [2, { ignore: ['react-native', 'react'] }] */
/* eslint radix: ["error", "as-needed"] */
import React, { useState, useEffect, useRef } from "react";
import { Animated, Easing, View, Image, Text } from "react-native";
import PropTypes from "prop-types";


// Style
import style, { width as deviceWidth } from "./styles";

function calculateDegreeFromLabels(degree: number, labels: any[]): number {
  const perLevelDegree = degree / labels.length;
  return perLevelDegree;
}

function calculateLabelFromValue(
  value: number,
  labels: any[],
  minValue: number,
  maxValue: number
): any {
  const currentValue = value / (maxValue - minValue);
  const currentIndex = Math.round((labels.length - 1) * currentValue);
  const label = labels[currentIndex];
  return label;
}

function limitValue(value: string | number, minValue: number, maxValue: number): number {
    let currentValue = 0;
    if (!isNaN(value)) {
        currentValue = parseInt(value);
    }

    return Math.min(Math.max(currentValue, minValue), maxValue);

}

function validateSize(current, original) {
  let currentSize = original;
  if (!isNaN(current)) {
    currentSize = parseInt(current);
  }
  return currentSize;
}

interface Label {
  name: string;
  labelColor: string;
  activeBarColor: string;
}

interface SpeedometerProps {
  value: number;
  defaultValue?: number;
  size?: number;
  minValue: number;
  maxValue: number;
  easeDuration: number;
  allowedDecimals: number;
  labels: Label[];
  needleImage: any;
  wrapperStyle?: object;
  outerCircleStyle?: object;
  halfCircleStyle?: object;
  imageWrapperStyle?: object;
  imageStyle?: object;
  innerCircleStyle?: object;
  labelWrapperStyle?: object;
  labelStyle?: object;
  labelNoteStyle?: object;
  useNativeDriver?: boolean;
}

const Speedometer: React.FC<SpeedometerProps> = ({
  value,
  defaultValue = 50,
  size,
  minValue = 0,
  maxValue = 100,
  easeDuration = 500,
  allowedDecimals = 0,
  labels,
  needleImage,
  wrapperStyle,
  outerCircleStyle,
  halfCircleStyle,
  imageWrapperStyle,
  imageStyle,
  innerCircleStyle,
  labelWrapperStyle,
  labelStyle,
  labelNoteStyle,

  useNativeDriver = true
}) => {
  const degree = 180;
  const perLevelDegree = calculateDegreeFromLabels(degree, labels);
  const label = calculateLabelFromValue(
    limitValue(value, minValue, maxValue),
    labels,
    minValue,
    maxValue
  );


  const speedometerValue = new Animated.Value(defaultValue);

  Animated.timing(
  speedometerValue,
    {
      toValue: limitValue(value, minValue, maxValue),
      duration: easeDuration,
      easing: Easing.linear,
      useNativeDriver,
    },
  ).start();


  const rotate = speedometerValue.interpolate({
    inputRange: [minValue, maxValue],
    outputRange: ['-90deg', '90deg'],
  });


  const currentSize = validateSize(size, deviceWidth - 20);


  return (
    <View style={[style.wrapper, {
        width: currentSize,
        height: currentSize / 2,
      }, wrapperStyle]}
      >
        <View style={[style.outerCircle, {
          width: currentSize,
          height: currentSize / 2,
          borderTopLeftRadius: currentSize / 2,
          borderTopRightRadius: currentSize / 2,
        }, outerCircleStyle]}
        >
          {labels.map((level, index) => {
            const circleDegree = 90 + (index * perLevelDegree);
            return (
              <View
                key={level.name}
                style={[style.halfCircle, {
                  backgroundColor: level.activeBarColor,
                  width: currentSize / 2,
                  height: currentSize,
                  borderRadius: currentSize / 2,
                  transform: [
                    { translateX: currentSize / 4 },
                    { rotate: `${circleDegree}deg` },
                    { translateX: (currentSize / 4 * -1) },
                  ],
                }, halfCircleStyle]}
              />
            );
          })}
          <Animated.View style={[style.imageWrapper,
            {
              top: -(currentSize / 15),
              transform: [{ rotate }],
            },
            imageWrapperStyle]}
          >
            <Image
              style={[style.image,
                {
                  width: currentSize,
                  height: currentSize,
                }, imageStyle]}
              source={needleImage}
            />
          </Animated.View>
          <View style={[style.innerCircle, {
            width: currentSize * 0.6,
            height: (currentSize / 2) * 0.6,
            borderTopLeftRadius: currentSize / 2,
            borderTopRightRadius: currentSize / 2,
          }, innerCircleStyle]}
          />
        </View>
        {/* <View style={[style.labelWrapper, labelWrapperStyle]}>
          <Text style={
            [style.label, labelStyle]}
          >
            {limitValue(value, minValue, maxValue)}
          </Text>
          <Text style={
            [style.labelNote, { color: label.labelColor }, labelNoteStyle]}
          >
            {label.name}
          </Text>
        </View> */}
      </View>
  );
};

export default Speedometer;

Speedometer.defaultProps = {
  defaultValue: 50,
  minValue: 0
};
