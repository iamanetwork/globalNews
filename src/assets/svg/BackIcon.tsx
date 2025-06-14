import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

interface SvgProps {
  width: number;
  height: number;
  color: string;
}
const BackIcon = ({ width, height, color }: SvgProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Rect width="18" height="18" x="3" y="3" rx="2" />
      <Path d="m14 16-4-4 4-4" />
    </Svg>
  );
};

export default BackIcon;

const styles = StyleSheet.create({});
