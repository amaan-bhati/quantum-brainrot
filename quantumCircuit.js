class QuantumCircuit {
    constructor(qubits) {
        this.qubits = qubits;
        this.state = Array(qubits).fill(0); // Initialize all qubits to |0⟩
    }

    addGate(gate, qubitIndex) {
        // Apply the Hadamard gate for superposition (simplified)
        if (gate === 'h') {
            this.state[qubitIndex] = Math.random() > 0.5 ? 1 : 0;
        }
    }

    measure(qubitIndex) {
        // Simulate measurement (collapse the state)
        return this.state[qubitIndex] === 1 ? Math.floor(Math.random() * 6) : 0;
    }

    run() {
        // In a real quantum system, this would run the circuit. Here we simulate a random outcome.
    }
}
