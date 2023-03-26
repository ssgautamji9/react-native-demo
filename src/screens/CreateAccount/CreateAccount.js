import React, {useState} from 'react';
import {
    Modal,
    ScrollView,
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomiseButton from '../../components/CustomiseButton/CustomiseButton';
import CustomiseInput from '../../components/CustomiseInput/CustomiseInput';
import FooterAction from '../../components/FooterAction/FooterAction';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import TitleHeader from '../../components/TitleHeader/TitleHeader';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import themeColors from '../../utils/themeColors';

const CreateAccount = ({navigation}) => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errors,setErrors] = useState({name:false,email:false,password:false})
    const clickmsgclickfunction= ()=>{
        navigation.navigate("Login");
    }
    function validateRegister(){
        let flag = false
        let res = JSON.parse(JSON.stringify(errors))
        if(/^[a-zA-Z\s]{2,30}$/.test(name) == false){
            flag = res.name = true
          }else res.name = false
        if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) == false){
          flag =  res.email = true
        }else res.email = false
        if(password.length < 6){
          flag = res.password = true
        }else res.password = false
        setErrors(res)
        return !flag
      }
    const createAccountClicked= ()=>{
       if(validateRegister()){
        Alert.alert("Success","Account Created")
       }else{

       }
    }
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: themeColors.background.theme}}>
            
            <StatusBar backgroundColor="#ba0b1d" />
            <ScrollView>
                <HeaderImage/>
                <TitleHeader title="Create Account"/>
                <View style={{marginTop:40}}>
                <CustomiseInput title="Name" setCallback={(text)=>{setName(text); validateRegister()}} value={name} error={errors.name}/>
                <CustomiseInput title="Email/Mobile" setCallback={(text)=>{setEmail(text); validateRegister()}} value={email} error={errors.email}/>
                <CustomiseInput title="Create Password" setCallback={(text)=>{setPassword(text); validateRegister()}} value={password} error={errors.password} isSecure={true}/>
                </View>
                <View style={{marginHorizontal: 40}}>
                    <CustomiseButton title="Create Account" clickCallBack={createAccountClicked} />
                </View>
                
            </ScrollView>
            <View style={{flex: 0.3}}>
                <FooterAction titlemsg="Already have an account?" clickmsg="Log In" clickmsgclick={clickmsgclickfunction}/>
            </View>
            
        </SafeAreaView>

    )
}

export default CreateAccount;