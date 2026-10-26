import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <View style={styles.card}>
      <Pressable style={styles.main} onPress={() => onToggle(task.id)}>
        <Text style={styles.check}>{task.done ? '☑' : '☐'}</Text>
        <Text style={[styles.title, task.done && styles.done]}>{task.title}</Text>
      </Pressable>
      <Pressable onPress={() => onDelete(task.id)} hitSlop={8}>
        <Text style={styles.delete}>✕</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 10, padding: 12, marginHorizontal: 16, marginBottom: 8 },
  main: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 },
  check: { fontSize: 20, color: '#2F5BD3' },
  title: { flex: 1, fontSize: 15, color: '#1F2A44' },
  done: { textDecorationLine: 'line-through', color: '#9AA3B5' },
  delete: { fontSize: 16, color: '#9AA3B5', paddingLeft: 12 },
});
