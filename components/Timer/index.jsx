import { StyleSheet, Text } from "react-native";
import { formatTimer } from '../utils/formatTimer';


export const Timer = ({ totalSeconds = 0 }) => {
    const formattedTime = formatTimer(totalSeconds);
    return (
        <Text style={styles.timer}>
            {formattedTime}
        </Text>
    );
};

const styles = StyleSheet.create({
    timer: {
      fontSize: 54,
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: 'center',
      minWidth: 150,
    }
});