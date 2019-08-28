import { createStackNavigator, createAppContainer } from 'react-navigation';
import BackendAPI from "../components/BackendAPI";
import Onboarding from '../components/Onboarding';

const MainNavigator = createStackNavigator({
    Onboarding: {
      screen: Onboarding,
    }, 
    BackendAPI:  BackendAPI,
  }, {headerLayoutPreset: 'center'}) 
  
  const MyAppNav = createAppContainer(MainNavigator)
  
  export default MyAppNav