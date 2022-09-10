import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          mode='outlined'
          style={styles.textInput}
          onChangeText={setSubject}
          label='What do you want to focus on ?'
          theme={{
            roundness: 10,
            colors: {
              primary: colors.yellow,
              secondary: colors.white,
              tertiary: colors.yellow,
              text: colors.white,
              label: colors.white,
              placeholder: colors.white,
            },
          }}
          outlineColor={colors.yellow}
        />
        <View style={styles.button}>
          <RoundedButton
            title='+'
            textStyle={{ color: colors.yellow }}
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    color: colors.white,
  },
  button: {
    justifyContent: 'space-around',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
    backgroundColor: colors.gray,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
