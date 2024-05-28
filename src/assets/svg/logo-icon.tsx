import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

interface SvgIconProps {
  width?: number;
  height?: number;
}

export default function LogoSvg({ width, height }: SvgIconProps) {
  return (
    <Svg
      width={width || 91}
      height={height || 100}
      viewBox="0 0 91 100"
      fill="none"
    >
      <Rect width={25} height={50} rx={12.5} fill="#16A34A" />
      <Rect x={33} width={25} height={75} rx={12.5} fill="#FACC15" />
      <Rect x={66} width={25} height={100} rx={12.5} fill="#DC2626" />
    </Svg>
  );
}
