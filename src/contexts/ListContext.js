import React from 'react';

export const ListContextDefault ={
    todaylist: [""],
    setTodaylist:()=>[""]
};
export const ListContext = React.createContext(ListContextDefault);