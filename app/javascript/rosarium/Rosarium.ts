const prefixedMessage = (msg: string) => `-🌹- ${msg}`;

export default {
  warn: (msg: string) => {
    console.warn(prefixedMessage(msg));
  },
  error: (msg: string) => {
    console.error(prefixedMessage(msg));
  },
};
