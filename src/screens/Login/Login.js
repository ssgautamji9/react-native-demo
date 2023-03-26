import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import TitleHeader from '../../components/TitleHeader/TitleHeader';
import CustomiseInput from '../../components/CustomiseInput/CustomiseInput';
import CustomiseButton from '../../components/CustomiseButton/CustomiseButton';
import FooterAction from '../../components/FooterAction/FooterAction';
import {styles} from './style';
import themeColors from '../../utils/themeColors';

const Login = ({navigation}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [errors,setErrors] = useState({email:false,password:false})
  const clickmsgclickfunction = () => {
    navigation.navigate('CreateAccount');
  };
  function validateLogin(){
    let flag = false
    let res = JSON.parse(JSON.stringify(errors))
    if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) == false){
      flag =  res.email = true
    }else res.email = false
    if(password.length < 6){
      flag = res.password = true
    }else res.password = false
    setErrors(res)
    return !flag
  }
  const loginAction = () => {
      if(validateLogin()){
        Alert.alert("Success","Login Successful")
      }else{
        //Alert.alert("Failed","")
      }
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: themeColors.background.theme }}>
       <StatusBar style={styles.statusbars} />
      <ScrollView>
        <HeaderImage />
        <TitleHeader title="Welcome Back!" />
        <View style={styles.headerview}>
          <Text style={styles.headertxt}>Login to continue</Text>
        </View>
        <View style={{marginTop: '0%'}}>
          <CustomiseInput title="Email/Mobile" setCallback={(text)=>{setEmail(text); validateLogin()}} value={email} error={errors.email}/>
          <CustomiseInput title="Password" setCallback={(text)=>{setPassword(text); validateLogin()}}value={password} isSecure={true} error={errors.password}/>
          <View style={{marginHorizontal: 30}}>
            <CustomiseButton title="Log In" clickCallBack={loginAction} />
          </View>
          
          <View style={styles.dividerview}>
            <View style={styles.divider}></View>
            <View>
              <Text style={styles.dividertxt}>OR</Text>
            </View>
            <View style={styles.divider}></View>
          </View>
          <View>
            <TouchableOpacity style={styles.googlebtn}>
              <View style={styles.googlebtnicon}>
                <AntDesign name="google" size={30} color={'red'} />
              </View>
              <Text style={styles.googlebtntxt}>Login with Google</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.facebookbtn}>
              <View style={styles.facebookbtnicon}>
                <Fontisto name="facebook" size={30} color={'blue'} />
              </View>
              <Text style={styles.facebookbtntxt}>Login with Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginVertical: 50}}>
          <FooterAction
            titlemsg="Don't have an account?"
            clickmsg="Create Account"
            clickmsgclick={clickmsgclickfunction}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login;
