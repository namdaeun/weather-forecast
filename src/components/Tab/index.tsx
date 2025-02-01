import TabContent from './TabContent/TabContent';
import TabGroup from './TabGroup/TabGroup';
import TabList from './TabList/TabList';
import TabMenu from './TabMenu/TabMenu';

export const Tab = Object.assign(TabGroup, {
	List: TabList,
	Menu: TabMenu,
	Panel: TabContent,
});
