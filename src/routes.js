import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from '~/screens/Home';

const Routes = createAppContainer(createSwitchNavigator({ Home }));

export default Routes;
