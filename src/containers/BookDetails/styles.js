import { StyleSheet } from 'react-native';

const bookDetailStyles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
  },

  // Header section
  header: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',    
    padding: 15
  },
  details: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  detailsHeader: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5
  },
  detailsInfo: {
    fontSize: 13,
    textAlign: 'center'
  },
  cover: {
    resizeMode: 'cover',
    width: 180,
    height: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },

  // Actions section
  actions: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default bookDetailStyles;