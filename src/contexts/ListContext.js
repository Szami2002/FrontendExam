import React from 'react';

export const TodayListContextDefault ={
    todaylist: [],
    setTodaylist:()=>{}
};

export const TomorrowListContextDefault ={
    tomorrowlist: [],
    setTomorrowlist:()=>{}
};
export const TodayListContext = React.createContext(TodayListContextDefault);

export const TomorrowListContext = React.createContext(TomorrowListContextDefault);