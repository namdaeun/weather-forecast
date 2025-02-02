import TabMenu from './TabButton';
import TabContent from './TabContent';
import TabGroup from './TabGroup';
import TabList from './TabList';

export const Tab = Object.assign(TabGroup, {
 List: TabList,
 Menu: TabMenu,
 Content: TabContent,
});
