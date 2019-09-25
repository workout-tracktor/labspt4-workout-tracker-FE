import { createStackNavigator, createAppContainer } from 'react-navigation';
import BackendAPI from "../components/BackendAPI";
import Onboarding from '../components/Onboarding';

const MainNavigator = createStackNavigator({
  //Keys that help navigate to different screens
    Onboarding: {
        screen: Onboarding,
        
      }, 
    BackendAPI:  BackendAPI,
      }, 
      //Centers the nav screen
      {headerLayoutPreset: 'center'}) 
  
  const MyAppNav = createAppContainer(MainNavigator)
  
  export default MyAppNav