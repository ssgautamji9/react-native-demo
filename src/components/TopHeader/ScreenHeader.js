import { View, Text } from "native-base"
import { TouchableOpacity } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";   
import { useTheme } from "@react-navigation/native";
const ScreenHeader = (props) => {
    const navigation = useNavigation();
    const { colors } = useTheme()
    return (
        <View style={{height:45,flexDirection:'row', alignItems:'center',paddingLeft:10,
        backgroundColor:colors.mainBG,
        borderBottomColor:'#d0d0d0',
        borderBottomWidth:1
        }}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="arrow-back" size={22} color={colors.primaryIconColor}/>
            </TouchableOpacity>
            <Text style={{fontSize:20,marginLeft:10,color:colors.primaryTextColor}}>{props.title}</Text>
        </View>
    )
}
export default ScreenHeader