import { StyleSheet } from 'react-native';
import { convertHexToRGBA } from '../../utils/utils';
import Colors from './color';

export const stylesGlobal = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    gap: 16,
    flexDirection: 'column',
    marginBottom: 18,
  },
  titleSection: {
    color: convertHexToRGBA(Colors.blue[950], 0.4),
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  text: {
    color: Colors.blue[950],
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  textBold: {
    color: Colors.blue[950],
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
  },

  // BUTTON'S
  button: {
    flexDirection: 'row',
    justifyContent: 'center',

    paddingVertical: 16,
    borderRadius: 24,
    backgroundColor: Colors.red[600],
  },
  buttonText: {
    fontSize: 12,
    fontFamily: 'Inter_500Medium',
    color: '#FFF',
  },

  buttonOutline: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,

    paddingVertical: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.red[600]
  },
  buttonOutlineText: {
    fontSize: 12,
    fontFamily: 'Inter_500Medium',
    color: Colors.red[600]
  },
});
