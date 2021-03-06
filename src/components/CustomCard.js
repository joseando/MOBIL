import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

const CustomCard = ({ style, children }) => {
  const theme = useTheme();
  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.onSurface,
          borderColor: theme.colors.borderColor,
          // borderColor: 'grey',
          marginVertical: 8,
          borderRadius: 8,
          marginHorizontal: 8,
          borderWidth: 1,
          shadowColor: '#000',
          shadowRadius: 10,
          overflow: 'hidden',
          shadowOpacity: 1,
          elevation: 6,
        },
        style,
      ]}
    >
      <View>{children}</View>
    </View>
  );
};

export default CustomCard;
