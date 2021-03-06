import React from 'react';
import { TextInput, View, Text } from 'react-native';

/**
 * to be wrapped with redux-form Field component
 */
export default function InputText(props) {
  const { input, ...inputProps } = props;
  
  return (
    // <View>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        // secureTextEntry={(input.type === "password")}
        value={input.val}
        />
    // </View>
  );
}