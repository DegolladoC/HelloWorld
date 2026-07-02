// Hello World llamativo en JavaScript: arte ASCII + colores en consola (Node.js)

const colors = ["\x1b[31m", "\x1b[33m", "\x1b[32m", "\x1b[36m", "\x1b[34m", "\x1b[35m"];
const reset = "\x1b[0m";
const bold = "\x1b[1m";

const banner = [
  "  _   _      _ _         __        __         _     _ _ ",
  " | | | | ___| | | ___    \\ \\      / /__  _ __| | __| | |",
  " | |_| |/ _ \\ | |/ _ \\    \\ \\ /\\ / / _ \\| '__| |/ _` | |",
  " |  _  |  __/ | | (_) |    \\ V  V / (_) | |  | | (_| |_|",
  " |_| |_|\\___|_|_|\\___/      \\_/\\_/ \\___/|_|  |_|\\__,_(_)",
];

banner.forEach((line, i) => {
  const color = colors[i % colors.length];
  console.log(`${bold}${color}${line}${reset}`);
});

console.log(`${bold}\x1b[95m✨ ¡Hola Mundo desde JavaScript! ✨${reset}`);
