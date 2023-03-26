import React from "react";

import themeColors from "../../utils/themeColors";
import { 
    View,
    Text,
} from "react-native";


const TitleHeader = (props) => {
    return(
        <View style={{alignItems: 'center', marginTop: 10}}>
            <Text style={{fontSize: 28,fontFamily:'Roboto-Medium', color: themeColors.textColor.theme }}>
                {props.title}
            </Text>
        </View>
    )
}

export default TitleHeader;