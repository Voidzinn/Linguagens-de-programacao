function measureExecutionTime(func, input) {
    const start = performance.now();
    const result = func(input);
    const end = performance.now();
    return { time: end - start, result };
}

// 🔹 Implementações das funções

// 1️⃣ Primeira versão otimizada
function lengthOf_v1(raw_string) {
    let idx = 0;
    while (typeof raw_string[idx] === "string") {
        idx++;
    }
    return idx;
}

// 2️⃣ Segunda versão usando for loop
function lengthOf_v2(raw_string) {
    let idx = 0;
    for (; raw_string[idx] !== undefined; idx++) {}
    return idx;
}

// 3️⃣ Versão usando try/catch (hack)
function lengthOf_v3(raw_string) {
    let idx = 0;
    try {
        while (true) {
            raw_string[idx++].charCodeAt(0);
        }
    } catch (e) {}
    return idx - 1;
}

// 🔹 Criando uma string grande para testar
const testString = "a".repeat(100000); // String com 100.000 caracteres

// 🔹 Medindo tempos de execução
const results = {
    v1: measureExecutionTime(lengthOf_v1, testString),
    v2: measureExecutionTime(lengthOf_v2, testString),
    v3: measureExecutionTime(lengthOf_v3, testString),
    builtIn: measureExecutionTime((s) => s.length, testString), // Comparação com .length
};

// 🔹 Exibindo os tempos de execução
console.log("Resultados:");
console.log(`Versão 1 (while + typeof): ${results.v1.time.toFixed(4)} ms`);
console.log(`Versão 2 (for loop): ${results.v2.time.toFixed(4)} ms`);
console.log(`Versão 3 (try/catch): ${results.v3.time.toFixed(4)} ms`);
console.log(`Método .length (nativo): ${results.builtIn.time.toFixed(4)} ms`);
