import { Image, StyleSheet, Text, View } from "react-native";

import { FocusButton } from "../components/FocusButton";
import { ActionButton } from "../components/ActionButton";
import { Timer } from "../components/Timer";
import { IconPause, IconPlay } from "../components/Icons";

import { usePomodoroTimer } from "../hooks/usePomodoroTimer";


const pomodoroTypes = [
  {
    id: 'focus',
    initialValue: 25 * 60,
    image: require('./pomodoro.png'),
    display: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5 * 60,
    image: require('./curto.png'),
    display: 'Pausa curta'
  },
  {
    id: 'long',
    initialValue: 15 * 60,
    image: require('./longo.png'),
    display: 'Pausa longa'
  },
];


export default function Index() {

  const {
    timerType,
    seconds,
    isRunning,
    changeTimerType,
    toggleTimer,
    pomodoroTypes: types,
  } = usePomodoroTimer(pomodoroTypes[0], pomodoroTypes);

  return (
    <View style={styles.container}>
      {/* */}
      {timerType.image && <Image source={timerType.image} />}

      <View style={styles.acoes}>
        <View style={styles.context}>
          {}
          {types.map(p => (
            <ActionButton
              key={p.id}
              active={ timerType.id === p.id }

              onPress={() => changeTimerType(p)}
              display={p.display}
            />
          ))}
        </View>

        {}
        <Timer totalsegundos={seconds} />

        {}
        <FocusButton
          title={isRunning ? 'Pausar' : 'Começar'}
          icon={isRunning ? <IconPause /> : <IconPlay />}
          onPress={toggleTimer}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.textoFooter}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.textoFooter}>
          Desenvolvido por Bernardo Senna.
        </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  acoes: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  footer: {
    width: '80%',
  },
  textoFooter: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
  }
})