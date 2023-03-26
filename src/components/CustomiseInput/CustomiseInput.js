import React from "react";

import {
    View,
    Text,
} from 'react-native';

import {TextInput} from 'react-native-paper';
import { styles } from "./style";

const CustomiseInput = (props) =>{
    let isSecure = props.isSecure ? props.isSecure : false
    return(
        <View>
            <TextInput
              label={<Text style={{color: '#8B8B8B',fontFamily:'Roboto-Regular',fontSize:16}}>{props.title}</Text>}
              outlineColor="#8B8B8B"
              theme={{colors: {primary: '#8B8B8B', text: '#8B8B8B'}}}
              selectionColor="#8B8B8B"
              style={styles.inputtxt}
              underlineColor="#8B8B8B"
              value={props.value}
              onChangeText={(text)=>{
                if(props.setCallback)
                  props.setCallback(text)
              }}
              secureTextEntry={isSecure}
              error={props.error}
            />
            {props.error && (
               <Text style={{color:'red',marginHorizontal:33, marginVertical:4}}>Invalid Input </Text>
            )}
           
          </View>
    )
}

export default CustomiseInput;