import * as React from 'react';
import {Dispatch, SetStateAction} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

import {COLOR_FB_SECONDARY, COLOR_WHITE} from '../constants/color';

type Props = {
  //mode?: 'flat' | 'outlined';
  placeholder?: string;
  secure?: boolean;
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
};

const Input = ({
  //mode = 'flat',
  placeholder = '',
  secure = false,
  value,
  onChangeText,
}: Props) => {
  return (
    <TextInput
      //mode={mode}
      /*outlineStyle={
        mode === 'outlined' && {borderRadius: 16, borderColor: COLOR_LIGHT_GRAY}
      }
      style={{
        backgroundColor: mode === 'flat' ? COLOR_WHITE : COLOR_LIGHT_GRAY,
        width: '100%',
      }}*/
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={COLOR_FB_SECONDARY}
      secureTextEntry={secure}
      value={value}
      onChangeText={onChangeText}
      accessibilityLabelledBy={undefined}
      accessibilityLanguage={undefined}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLOR_WHITE,
    width: '100%',
  },
});
export default Input;
