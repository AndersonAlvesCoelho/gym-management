import { StyleSheet } from 'react-native';
import Colors from '../assets/styles/color';

const styles = StyleSheet.create({
	TabBottom: {
		backgroundColor: "#FFF",
		position: 'absolute',
		elevation: 3,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		height: 74,
		paddingVertical: 10,
		paddingBottom: 15,
	},

	activeTabIndicator: {
    height: 1, 
    backgroundColor: Colors.red[600], 
    width: '50%', 
    marginBottom: 5,
  },

	text: {
    fontFamily: 'Inter_400Regular',
		fontSize: 12,
  },
});

export default styles;
