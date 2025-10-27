import { Pressable, StyleSheet, Text } from "react-native";



export const FocusButton = ({ onPress, title, icon }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      {icon}
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  }
});