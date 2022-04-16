import { View, Text, Switch, Platform } from 'react-native';
import React from 'react'
import { useState } from 'react';

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}


export const CustomSwitch = ({ isOn, onChange }: Props) => {

   const [isEnabled, setIsEnabled] = useState(isOn);

   const toggleSwitch = () => {
       setIsEnabled(!isEnabled)
       onChange(!isEnabled)
    };

  return (
       <Switch
        trackColor={{ false: "#D9D9DB", true: "#5856D6" }}
        thumbColor={(Platform.OS === "android") ? "#56D656" : ""}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    
  )
}