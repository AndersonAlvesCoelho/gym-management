import Colors from '@/assets/styles/color';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 24,
    marginTop: 40,
    gap: 24,
  },

  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dateContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  now: {
    gap: 8,
  },

  textSmall: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: Colors.zinc[500],
  },

  text: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: Colors.zinc[950],
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: Colors.zinc[950],
    gap: 8,
  },
  buttonText: {
    fontSize: 12,
    fontFamily: 'Inter_500Medium',
    color: '#FFF',
  },


  flatListWeek: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    marginRight: 32,
  },


  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  timeContainer: {
    width: 60,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  lineContainer: {
    alignItems: 'center',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFCC00',
  },
  line: {
    width: 2,
    height: '100%',
    backgroundColor: '#FFCC00',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2, // for Android
    shadowColor: '#000', // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowOpacity: 0.2, // for iOS
    shadowRadius: 4, // for iOS
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  doneIconContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
