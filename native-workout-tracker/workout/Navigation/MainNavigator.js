import { createStackNavigator, createAppContainer } from 'react-navigation';
import BackendAPI from "../components/BackendAPI";
import Onboarding from '../components/Onboarding';

const MainNavigator = createStackNavigator({
    Onboarding:  Onboarding,
    BackendAPI:  BackendAPI,
  })
  
  const MyAppNav = createAppContainer(MainNavigator)
  
  export default MyAppNav