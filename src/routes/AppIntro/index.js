import { createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { options } from './options';

const AppIntroTab = createMaterialTopTabNavigator(
    { IntroOne, IntroTwo, introTreee}, 
    options
);

export default AppIntroTab;