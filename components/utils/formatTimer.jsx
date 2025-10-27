export function formatTimer(totalSeconds) {

  const seconds = Math.max(0, Math.floor(totalSeconds));


  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;


  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}