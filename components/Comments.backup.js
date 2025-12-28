import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  return (
    <View style={{ position: 'absolute', bottom: 20, width: '100%' }}>
      {comments.map((c, i) => (
        <Text key={i} style={{ color: 'white' }}>{c}</Text>
      ))}

      <TextInput
        placeholder="Commenter..."
        placeholderTextColor="#aaa"
        style={{ backgroundColor: '#222', color: 'white', padding: 8 }}
        onSubmitEditing={() => {
          setComments([...comments, text]);
          setText('');
        }}
        value={text}
        onChangeText={setText}
      />
    </View>
  );
}	
