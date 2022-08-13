import { TextInput, View, StyleSheet } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  return (
    <View style={styles.InputContainer}>
      <TextInput style={styles.NumberInput} maxLength={2} keyboardType='number-pad' />
      {/* 2 */}
      <View style={styles.buttonsContainer}>
        {/* 3 */}
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View  >

        {/* 3 */}
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;
const styles = StyleSheet.create({
  InputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // yukardaki ikili beraber kullanılmalı
    marginTop: 100,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: 'purple',
    borderRadius: 8,
    elevation: 7,
  },
  NumberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: 'yellow',
    borderBottomWidth: 2,
    color: 'yellow',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // 2.
  buttonsContainer: {
    flexDirection: 'row'
  },
  // 3.
  buttonContainer: {
    flex: 1
  },
})