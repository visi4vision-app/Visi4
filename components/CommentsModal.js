import React from 'react';
import { Modal, View, Text, TextInput, Button } from 'react-native';

export default function CommentsModal({ visible, onClose, onSend }) {
  const [text, setText] = React.useState('');

  return (
    <Modal visible={visible} animationType="slide">
      <View style={{flex:1,padding:20}}>
        <Text style={{fontSize:20}}>💬 Commentaires</Text>
        <TextInput
          placeholder="Écris ton commentaire"
          value={text}
          onChangeText={setText}
          style={{borderWidth:1,marginVertical:10,padding:10}}
        />
        <Button title="Envoyer" onPress={() => {onSend(text); setText('');}} />
        <Button title="Fermer" onPress={onClose} />
      </View>
    </Modal>
  );
}
