import {DarkTheme,DefaultTheme} from '@react-navigation/native';
const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
        ...DefaultTheme.colors,
        mainBG:'black',
        statusBarColor:'black',
        lefMenuBG:'black',
        primaryTextColor:'white',
        primaryIconColor:'white'
    },
}
export default CustomDarkTheme;