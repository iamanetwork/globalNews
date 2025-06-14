import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

interface SvgProps {
    color: string;
    width: number;
    height: number;
}

const HomeIcon = ({ color, width, height }: SvgProps) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height}>
      <G>
        <Path
          fill={color}
          d="M19.5 24h-4c-.276 0-.5-.224-.5-.5v-7c0-.276-.224-.5-.5-.5h-5c-.276 0-.5.224-.5.5v7c0 .276-.224.5-.5.5h-4c-.827 0-1.5-.673-1.5-1.5v-9.5h-2c-.551 0-1-.449-1-1 0-.265.108-.525.296-.713l11.354-11.144c.194-.19.506-.19.7 0l11.35 11.14c.192.192.3.452.3.717 0 .551-.449 1-1 1h-2v9.5c0 .827-.673 1.5-1.5 1.5zm-3.5-1h3.5c.276 0 .5-.224.5-.5v-10c0-.276.224-.5.5-.5h2.5l-11-10.799-11 10.796 2.5.003c.276 0 .5.224.5.5v10c0 .276.224.5.5.5h3.5v-6.5c0-.827.673-1.5 1.5-1.5h5c.827 0 1.5.673 1.5 1.5z"
        />
      </G>
    </Svg>
  );
};

export default HomeIcon;
