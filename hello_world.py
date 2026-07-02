"""Hello World llamativo en Python: texto en arcoíris con efecto de escritura."""
import sys
import time

RAINBOW = [31, 33, 32, 36, 34, 35]
MESSAGE = "✨ ¡HOLA MUNDO! ✨"
BORDER = "★" * (len(MESSAGE) + 8)


def print_rainbow(text, delay=0.05):
    for i, char in enumerate(text):
        color = RAINBOW[i % len(RAINBOW)]
        sys.stdout.write(f"\033[1;{color}m{char}\033[0m")
        sys.stdout.flush()
        time.sleep(delay)
    print()


def main():
    print(f"\033[1;35m{BORDER}\033[0m")
    print_rainbow(f"    {MESSAGE}    ")
    print(f"\033[1;35m{BORDER}\033[0m")
    print("\033[3;36m           — Python 🐍\033[0m")


if __name__ == "__main__":
    main()
