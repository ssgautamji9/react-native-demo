import React from 'react';

import {View, TouchableOpacity, Text} from 'react-native';

const CustomiseButton = props => {
  return (
    <View style={{marginVertical: 30}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#DF0303',
          borderRadius: 4,
          elevation: 12,
        }}
        onPress={() => {
          if (props.clickCallBack) {
            props.clickCallBack();
          }
        }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Roboto-Medium',
            paddingVertical: 10,
            color: 'white',
            textAlign: 'center',
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomiseButton;
