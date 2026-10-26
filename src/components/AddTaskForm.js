import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddTaskForm({ value, onChangeText, onAdd }) {
  return (
    <View style={styles.row}>
      <TextInput
        style={styles.input}
        placeholder="New task"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onAdd}
      />
      <Pressable style={styles.button} onPress={onAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 8, marginHorizontal: 16, marginBottom: 12 },
  input: { flex: 1, backgroundColor: '#FFFFFF', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, borderWidth: 1, borderColor: '#D8DEEA' },
  button: { backgroundColor: '#2F5BD3', borderRadius: 8, paddingHorizontal: 16, justifyContent: 'center' },
  buttonText: { color: '#FFFFFF', fontWeight: 'bold' },
});
