import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

const InputField: React.FC<TextInputProps> = (props) => {
  return (
    <TextInput
      style={style.input}
      value={props.value}
      onChangeText={props.onChangeText} // Make sure the onChangeText handler is passed
      placeholder={props.placeholder} // Ensure placeholder is also passed
      secureTextEntry={props.secureTextEntry} // For password fields
    />
  );
};

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    marginTop: 10,
    height: 70,
  },
});

export default InputField;
