import {DefaultTheme,} from '@react-navigation/native';
const CustomLightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        mainBG:'white',
        statusBarColor:'white',
        lefMenuBG:'white',
        primaryTextColor:'black',
        primaryIconColor:'black'
    },
}
export default CustomLightTheme;