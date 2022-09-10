import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  const renderItem = ({ item }) => <Text style={styles.item}>-{item}</Text>;
  return (
    <View style={styles.container}>
      {!history || !history.length ? (
        <Text style={styles.title}>We haven't focused on anything yet...</Text>
      ) : (
        <>
          <Text style={styles.title}>History:</Text>
          <FlatList data={history} renderItem={renderItem} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  title: {
    color: colors.yellow,
    fontSize: fontSizes.md,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    padding: spacing.sm,
  },
});
