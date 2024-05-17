function convertHexToRGBA(hex: string, opacity: number): string {
  hex = hex.replace('#', '');

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

import { Dimensions } from 'react-native';

function calculateItemWidth() {
  const width = Dimensions.get('window').width;

  if (width >= 960) {
    return width * 0.82;
  } else if (width < 420) {
    return width * 0.82;
  } else if (width >= 768 && width < 960) {
    return width * 0.75;
  } else {
    return width * 0.75;
  }
}

export { calculateItemWidth, convertHexToRGBA };

