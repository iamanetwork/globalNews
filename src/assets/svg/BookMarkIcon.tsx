import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Line, Path } from 'react-native-svg';

interface SvgProps {
  width: number;
  height: number;
  color: string;
  selected?: boolean;
  tabs?: boolean;
}

const BookMarkIcon = ({ width, height, color, selected, tabs }: SvgProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {tabs ? (
        <Path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      ) : selected ? (
        <>
          <Path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
          <Path d="m14.5 7.5-5 5" />
          <Path d="m9.5 7.5 5 5" />
        </>
      ) : (
        <>
          <Path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
          <Line x1="12" x2="12" y1="7" y2="13" />
          <Line x1="15" x2="9" y1="10" y2="10" />
        </>
      )}
    </Svg>
  );
};

export default BookMarkIcon;

const styles = StyleSheet.create({});
