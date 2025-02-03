import TabButton from './TabButton';
import TabGroup from './TabGroup';
import TabList from './TabList';
import TabPanel from './TabPanel';

export const Tab = Object.assign(TabGroup, {
 List: TabList,
 Button: TabButton,
 Panel: TabPanel,
});
