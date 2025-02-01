import React, {
 createContext,
 useContext,
 useState,
 type ReactNode,
} from 'react';

interface TabContextType {
 selectedTabIndex: number;
 setSelectedTabIndex: (index: number) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const useTab = () => {
 const context = useContext(TabContext);

 if (!context) {
  throw new Error('useTab must be used within a TabProvider');
 }

 return context;
};

export const TabProvider = ({ children }: { children: ReactNode }) => {
 const [selectedTabIndex, setSelectedTabIndex] = useState(0);

 return (
  <TabContext.Provider value={{ selectedTabIndex, setSelectedTabIndex }}>
   {children}
  </TabContext.Provider>
 );
};
