import React from 'react';
import {useColorScheme,View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import NewsList from './../../screens/NewsList/NewsList';
import Login from './../../screens/Login/Login';
import ForgetPassword from './../../screens/ForgetPassword/ForgetPassword';
import CreateAccount from './../../screens/CreateAccount/CreateAccount';
import HomeNavigation from './../../navigation/Drawer/Drawer';

import { useSafeAreaInsets} from 'react-native-safe-area-context';
import Originals from './../../screens/Originals/Originals';
import TvShow from './../../screens/TvShows/TvShow';
import MyProfile from './../../screens/MyProfile/MyProfile';
import ResetPassword from './../../screens/ForgetPassword/ResetPassword';
import VideoDetails from './../../screens/VideoDetail/VideoDetail';
import TvEpisodes from './../../screens/TvShows/TvEpisodes';
import Settings from './../../screens/Settings/Settings';
import TestScreen from './../../screens/TestScreen/TestScreen';
import CustomDarkTheme from '../../utils/CustomDarkTheme';
import CustomLightTheme from '../../utils/CustomLightTheme';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import CustomStatusBar from './CustomStatusBar';
const Stack = createStackNavigator();
const RootComponent = () => {
    const scheme = useColorScheme();
    const insets = useSafeAreaInsets();
    const currentTheme = useSelector((store)=>store.themeMode)
    const {colors} = useTheme()
    const getFinalTheme = () => {
        if(scheme =='dark' || currentTheme.mode == 'dark'){
            return CustomDarkTheme
        }
        return CustomLightTheme
    }
    return(
    <>
        <CustomStatusBar height={insets.top} />
        <View style={{
            flex:1,
            paddingRight: insets.right,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
         <NavigationContainer theme={getFinalTheme()}>
           <Stack.Navigator initialRouteName="Home">
             <Stack.Screen
               name="HomeNavigation"
               component={HomeNavigation}
               options={{headerShown: false,
                headerBackTitleVisible: false}}
             />
             <Stack.Screen
               name="NewsList"
               component={NewsList}
               options={({route}) => ({
                headerShown: true,
                 headerBackTitleVisible: false,
                 title: route.params.title,
                 catId: route.params.catId,
               })}
             />
 
             <Stack.Screen
               name="Login"
               component={Login}
               options={{
                 headerShown: false,
                 headerBackTitleVisible: false
               }}
             />
 
             <Stack.Screen
               name="ForgetPassword"
               component={ForgetPassword}
               options={{
                 headerShown: false,
                 headerBackTitleVisible: false
               }}
             />
             <Stack.Screen
               name="ResetPassword"
               component={ResetPassword}
               options={{
                 headerShown: false,
                 headerBackTitleVisible: false
               }}
             />
             <Stack.Screen
               name="CreateAccount"
               component={CreateAccount}
               options={{
                 headerShown: false,
                 headerBackTitleVisible: false
               }}
             />
             <Stack.Screen
               name="MyProfile"
               component={MyProfile}
               options={{headerShown: true,
                headerBackTitleVisible: false}}
             />
 
             <Stack.Screen
               name="Originals"
               component={Originals}
               options={{
                 headerShown: true,
                 headerBackTitleVisible: false
               }}
             />
             <Stack.Screen name="VideoDetail" 
             component={VideoDetails} 
             options={{
                headerShown:true,
               headerTitle:"Videos",
               headerBackTitleVisible: false
             }}
             />
             <Stack.Screen
               name="TvShows"
               component={TvShow}
               options={{
                 headerShown: true,
                 headerBackTitleVisible: false
               }}
             />
             <Stack.Screen
               name="TvEpisodes"
               component={TvEpisodes}
               options={{headerShown: true,
                headerBackTitleVisible: false}}
             />
             <Stack.Screen
               name='Settings'
               component={Settings}
               options={{headerShown: false,
                headerBackTitleVisible: false}}
             />
             <Stack.Screen
             name="TestScreen"
             component={TestScreen}
             />
           </Stack.Navigator>
         </NavigationContainer>
        </View> 
    </>
    )
}

export default RootComponent