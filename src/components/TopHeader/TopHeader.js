
import React, { useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal
} from 'react-native';

import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import NewsNationSVG, { MenuSVG } from '../SvgList/Svglist';
import { LivetvSVG } from '../SvgList/Svglist';
import { useTheme } from '@react-navigation/native';
const TopHeader = (props) =>{
    const {colors} = useTheme()
    const getLangId = (receiveName) => {
        console.log('hi')
        console.log(receiveName)
        const ne= receiveName;
        console.log(ne);

    }

    const arrLangs = [
        {id: 'Eng', name: 'English'},
        {id: 'Hin', name: 'हिन्दी'},
        {id: 'Mar', name: 'मराठी'},
        {id: 'Tam', name: 'தமிழ்'},
        {id: 'Kan', name: 'ಕನ್ನಡ'},
    ]
    const [checked, setChecked] = useState(arrLangs[0]);

    const [modalVisible, setModalVisible] = useState(false);
    function getName(index){
        console.log(index)
        if(arrLangs.count > index){
            return arrLangs[index].name
        }
        return "No Language"
    }
    useEffect(()=>{
    },[checked]);
    return(
        <View style={{backgroundColor: colors.mainBG,flex: 0.1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, }}>
            <View style={{width: '40%'}} >
                <TouchableOpacity style={{marginHorizontal: 0}} onPress={()=>props.leftNavigationToggle()}>
                    <MenuSVG scale={0.25} fill={colors.primaryIconColor} />
                </TouchableOpacity>
                
            </View>
            <View style={{width: '20%',  alignItems: 'center',}}>
                <NewsNationSVG scale={0.25} />
            </View>
            <View style={{width: '40%', flexDirection: 'row', justifyContent: 'flex-end'}}>
                <TouchableOpacity style={{flexDirection: 'row',height: '100%', paddingHorizontal: 0}} onPress={() => setModalVisible(true)}>
                    <Text style={{fontSize: 14, fontFamily: 'Roboto-Medium', color: 'black'}}>
                        {checked != null ? (checked.name) : "No Language"}   
                    </Text>
                    <Ionicons name="chevron-down" size={18} color='black' />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.livetvCall() }>
                    <LivetvSVG scale={0.9} />
                </TouchableOpacity>
                


            </View>
                

            <Modal visible={modalVisible}>
                <View style={{margin: 20, flexDirection: 'row'}}>
                    <TouchableOpacity>
                        <Octicons name="arrow-left" size={25} color={'black'} onPress={() => setModalVisible(!modalVisible)}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 18,  paddingHorizontal: 10, color: 'black',fontFamily: 'Roboto-Medium'}}>Change Languages</Text>
                </View>
                <View style={{marginHorizontal: 20}}>
                    {arrLangs.map((arrLang,index) =>{
                        return(
                                <View key={index}>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <RadioButton uncheckedColor='black'  color='red' value={arrLang.id}  onPress={() =>{setChecked(arrLang),  setModalVisible(!modalVisible)} } status={ checked != null ? (checked.id === arrLang.id ? 'checked': 'unchecked') : 'unchecked' } />
                                    
                                    <Text style={{fontSize: 14, paddingLeft: 10, color: 'black',fontFamily: 'Roboto-Medium'}}>{arrLang.name}</Text>
                                    </View>
                                    
                                    <View style={{borderWidth: 0.2}}></View>
                                </View>
                                // </RadioButton.Group>
                            // </TouchableOpacity>
                            
                        )
                    })}
                    
                </View>
            </Modal>
        </View>
        
    )
}

export default TopHeader;

