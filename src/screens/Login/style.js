// import {StyleSheet} from 'react-native';

// const styles = StyleSheet.create({
//   statusbars: {
//     backgroundColor: '#ba0b1d',
//   },
//   headerview: {
//     alignItems: 'center',
//   },
//   headertxt: {
//     fontSize: 18,
//     color: 'white',
//   },
//   forgetbtn: {
//     marginHorizontal: '35%',
//   },
//   forgetbtntxt: {
//     color: 'white',
//     textDecorationLine: 'underline',
//     textDecorationColor: 'white',
//     alignSelf: 'center',
//   },
//   dividerview: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//     justifyContent: 'center',
//   },
//   divider: {
//     borderBottomWidth: 1,
//     borderColor: 'white',
//     width: '38%',
//     flex: 0,
//     height: 0,
//   },
//   dividertxt: {
//     color: 'white',
//     marginHorizontal: 5,
//   },
//   googlebtn: {
//     marginVertical: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: 'white',
//     marginHorizontal: 40,
//     borderRadius: 5,
//     justifyContent: 'flex-start',
//   },
//   googlebtnicon: {
//     width: '30%',
//     alignItems: 'center',
//   },
//   googlebtntxt: {
//     color: 'white',
//     fontSize: 18,
//     paddingVertical: 10,
//   },
//   facebookbtn: {
//     marginTop: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: 'white',
//     marginHorizontal: 40,
//     borderRadius: 5,
//     justifyContent: 'flex-start',
//   },
//   facebookbtnicon: {
//     width: '30%',
//     alignItems: 'center',
//   },
//   facebookbtntxt: {
//     color: 'white',
//     fontSize: 18,
//     paddingVertical: 10,
//   },
// });

// export {styles};

import {StyleSheet} from 'react-native';
import themeColors from '../../utils/themeColors';

const styles = StyleSheet.create({
  statusbars: {
    backgroundColor: 'green',
  },
  headerview: {
    alignItems: 'center',
  },
  headertxt: {
    fontSize: 16,
    fontFamily: 'Roboto-Light',
    color: themeColors.textColor.theme,
  },
  forgetbtn: {
    marginTop: '0%',
    marginHorizontal: '35%'
  },
  forgetbtntxt: {
    color: '#8B8B8B',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    textDecorationLine: 'underline',
    textDecorationColor: '#8B8B8B',
    alignSelf: 'center',
  },
  dividerview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
    justifyContent: 'center',
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#ACACAC',
    width: '38%',
    flex: 0,
    height: 0,
  },
  dividertxt: {
    marginTop: '1%',
    color: '#ACACAC',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    marginHorizontal: 5,
  },
  googlebtn: {
    marginTop: '5%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ACACAC',
    marginHorizontal: 30,
    borderRadius: 5,
    justifyContent: 'flex-start',
  },
  googlebtnicon: {
    width: '30%',
    alignItems: 'center',
  },
  googlebtntxt: {
    color: '#463D3D',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    paddingVertical: 10,
  },
  facebookbtn: {
    marginTop: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ACACAC',
    marginHorizontal: 30,
    borderRadius: 5,
    justifyContent: 'flex-start',
  },
  facebookbtnicon: {
    width: '30%',
    alignItems: 'center',
  },
  facebookbtntxt: {
    color: '#463D3D',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    paddingVertical: 10,
  },
});

export {styles};
