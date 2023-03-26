import { View } from "native-base"
import { useSelector } from 'react-redux';
import CustomLightTheme from "../../utils/CustomLightTheme";
import CustomDarkTheme from "../../utils/CustomDarkTheme";
import { StatusBar } from "react-native";
const CustomStatusBar =  (props) =>{
    const currentTheme = useSelector((store)=>store.themeMode)
       let bg = currentTheme.mode =='light' ? CustomLightTheme.colors.statusBarColor : CustomDarkTheme.colors.statusBarColor
    return (
        <View style={{height:props.height,backgroundColor:bg}}>
            <StatusBar barStyle={currentTheme.mode =='light' ? 'dark-content': 'light-content'} />
        </View>
    )
}
export default CustomStatusBar