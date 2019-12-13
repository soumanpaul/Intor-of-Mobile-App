import { createStackNavigator} from 'react-navigation-stack';
import AppIntroTab from '../AppIntro';
import { Home } from '../../screens';
import { options } from './options'; 

const RootStack = createStackNavigator(
    { AppIntroTab, Home }, { headerMode: 'node' }
);

export default RootStack;