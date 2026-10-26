import { Pressable, StyleSheet, Text, View } from 'react-native';
import { calculateStats } from '../utils/stats';

export default function StatsBar({ tasks, onClearDone }) {
  const stats = calculateStats(tasks);
  return (
    <View style={styles.bar}>
      <Text style={styles.text}>
        {stats.done} of {stats.total} done · {stats.percent}%
      </Text>
      <Pressable onPress={onClearDone}>
        <Text style={styles.link}>Clear done</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginVertical: 12 },
  text: { color: '#5A6478', fontSize: 15 },
  link: { color: '#2F5BD3', fontSize: 15 },
});
