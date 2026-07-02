// Hello World llamativo en C++: texto en colores ANSI con marco decorativo
#include <iostream>
#include <string>
#include <vector>

int main() {
    const std::vector<std::string> colors = {
        "\033[1;31m", "\033[1;33m", "\033[1;32m",
        "\033[1;36m", "\033[1;34m", "\033[1;35m"
    };
    const std::string reset = "\033[0m";
    const std::string message = "*** HOLA MUNDO ***";
    const std::string border(message.size() + 8, '=');

    std::cout << "\033[1;35m" << border << reset << "\n";

    for (size_t i = 0; i < message.size(); ++i) {
        std::cout << colors[i % colors.size()] << message[i] << reset;
    }
    std::cout << "\n\033[1;35m" << border << reset << "\n";
    std::cout << "\033[3;36m        -- C++\033[0m\n";

    return 0;
}
