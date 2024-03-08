import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const TextInputComponent = () => {
  const [text, setText] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (inputText) => {
    setText(inputText);
    setErrorMessage(''); // Xóa thông báo lỗi khi người dùng bắt đầu nhập lại
  };

  const handleButtonPress = () => {
    // Xử lý khi nút được nhấn
    if (text.trim() !== '') {
      setIsSuccess(true);
      Alert.alert('Thành công', 'Đã nhập thành công');
    } else {
      setIsSuccess(false);
      setErrorMessage('Vui lòng nhập nội dung'); // Thiết lập thông báo lỗi
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={text}
        placeholder="Nhập nội dung"
      />
      <Button title="Xác nhận" onPress={handleButtonPress} />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      {isSuccess && <Text style={styles.successMessage}>Nhập thành công!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    padding: 10,
  },
  errorMessage: {
    marginTop: 10,
    color: 'red',
    fontWeight: 'bold',
  },
  successMessage: {
    marginTop: 10,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default TextInputComponent;
