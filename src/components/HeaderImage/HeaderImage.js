import React from "react";
import {
    View,Image
} from 'react-native';
import NewsNationSVG from "../SvgList/Svglist";

const HeaderImage = () =>{
    return(
        <View style={{marginTop: 30,alignItems: 'center'}}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/5332/5332306.png'}}
          style={{height:80,width:80}} />
        </View>
    )
}

export default HeaderImage;