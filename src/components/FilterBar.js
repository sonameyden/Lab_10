import { Pressable, StyleSheet, Text, View } from 'react-native';

const FILTERS = ['All', 'Active', 'Done'];

export default function FilterBar({ current, onChange }) {
  return (
    <View style={styles.row}>
      {FILTERS.map((name) => (
        <Pressable
          key={name}
          style={[styles.chip, current === name && styles.chipActive]}
          onPress={() => onChange(name)}
        >
          <Text style={current === name ? styles.textActive : styles.text}>{name}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 8, marginHorizontal: 16, marginBottom: 12 },
  chip: { paddingVertical: 6, paddingHorizontal: 14, borderRadius: 16, backgroundColor: '#E3E8F2' },
  chipActive: { backgroundColor: '#2F5BD3' },
  text: { color: '#1F2A44' },
  textActive: { color: '#FFFFFF', fontWeight: 'bold' },
});
