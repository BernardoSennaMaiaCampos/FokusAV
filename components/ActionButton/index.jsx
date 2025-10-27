import { Pressable, StyleSheet, Text } from "react-native";


export const ActionButton = ({ isActive, onPress, title }) => {
  return (
    <Pressable

      style={({ pressed }) => [
        styles.button,
        isActive && styles.activeButton,

        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, isActive && styles.activeText]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 8,
  },
  activeButton: {
    backgroundColor: '#144480',
  },
  activeText: {
    color: '#FFFFFF',
  },
  buttonText: {
    fontSize: 12.5,
    color: '#FFF',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.7,
  }
});