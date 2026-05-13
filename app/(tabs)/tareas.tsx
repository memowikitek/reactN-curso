import { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Tarea = {
  id: string;
  text: string;
  completada: boolean;
}

export default function Tareas() {

  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [texto, setTexto] = useState('');

  const addTarea = () => {
    if (texto.trim() === '') return;
    setTareas([...tareas, {
      id: Date.now().toString(),
      text: texto,
      completada: false
    }]);
    setTexto('');
  }

  const toggleTarea = (id: string) => {
    setTareas(tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t));
  }

  const eliminarTarea = (id: string) => {
    setTareas(tareas.filter(t => t.id !== id));
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.title}>Lista de Tareas</Text>
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Agregar una nueva tarea"
          value={texto}
          onChangeText={setTexto}
          style={styles.input}
        />
        <TouchableOpacity style={styles.btnAdd} onPress={addTarea}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tareaRow}>
            <TouchableOpacity onPress={() => toggleTarea(item.id)}>
              <Text style={[styles.tareaText, item.completada && styles.tareaCompletada]}>
                {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => eliminarTarea(item.id)}> 
              <Text style={styles.eliminarTarea}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.vacio}>No tienes tareas agregadas</Text>
        }
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#111'
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#999'
  },
  btnAdd: {
    backgroundColor: '#6c63ff',
    borderRadius: 12,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 32
  },
  tareaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  tareaText: {
    fontSize: 16,
    color: '#333'  
  },
  tareaCompletada: {
    textDecorationLine: 'line-through',
    color: '#999'
  },
  eliminarTarea: {
    color: '#c00',
    fontWeight: 'bold',
    marginLeft: 10
  },
  vacio: {
    textAlign: 'center',
    color: '#c00'
  }
});
