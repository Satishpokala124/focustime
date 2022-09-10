import { StyleSheet, View } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={StyleSheet.timingButton}>
        <RoundedButton
          title='10'
          size={fontSizes.xxxl}
          onPress={() => {
            onChangeTime(10);
          }}
        />
      </View>
      <View style={StyleSheet.timingButton}>
        <RoundedButton
          title='15'
          size={fontSizes.xxxl}
          onPress={() => {
            onChangeTime(15);
          }}
        />
      </View>
      <View style={StyleSheet.timingButton}>
        <RoundedButton
          title='20'
          size={fontSizes.xxxl}
          onPress={() => {
            onChangeTime(20);
          }}
        />
      </View>
    </>
  );
};

export const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
