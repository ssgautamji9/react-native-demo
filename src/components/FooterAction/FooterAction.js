import React from "react";

import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

const FooterAction = (props) =>{
    return(
        <View style={{flexDirection: 'row', justifyContent: 'center',}}>
            <Text style={{color: '#463D3D', fontFamily:'Roboto-Regular',fontSize:15}}>
              {props.titlemsg}
            </Text>
            <TouchableOpacity onPress={()=>props.clickmsgclick()}>
              <Text
                style={{
                  color: '#B20000',
                  textDecorationLine: 'underline',
                  fontSize:15,
                  fontFamily:'Roboto-Regular',
                  textDecorationColor: '#B20000',
                }}>
                {' '}
                {props.clickmsg}
              </Text>
            </TouchableOpacity>
          </View>
    )
}

export default FooterAction;