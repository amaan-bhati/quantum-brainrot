document.getElementById('rollButton').addEventListener('click', flipDice);

async function flipDice() {
    const button = document.querySelector('button');
    const dice = document.querySelector('.dice');
    const quantumState = document.getElementById('quantumState');
    
    // Disable button during flip
    button.disabled = true;
    
    // Clear and prepare quantum state display
    quantumState.innerHTML = `
        <div class="fade-in" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: left;">
            <div id="initial-state">
                <div style="color: #00ffff; margin-bottom: 10px">Initial State:</div>
                <div style="font-family: monospace;">|ψ⟩ = |0⟩</div>
            </div>
            <div id="superposition-state" style="opacity: 0">
                <div style="color: #00ffff; margin-bottom: 10px">Superposition:</div>
                <div style="font-family: monospace;">H|0⟩ → |ψ⟩ = (|1⟩ + |2⟩ + |3⟩ + |4⟩ + |5⟩ + |6⟩)/√6</div>
                <div style="font-size: 0.8em; margin-top: 5px">All dice faces at once!</div>
            </div>
            <div id="final-state" style="opacity: 0">
                <div style="color: #00ffff; margin-bottom: 10px">Measurement:</div>
                <div id="measurement-result"></div>
            </div>
        </div>
    `;
    
    // Add circuit diagram
    const circuitDiagram = document.getElementById('circuitDiagram');
    circuitDiagram.innerHTML = `
        <svg width="400" height="100" viewBox="0 0 400 100">
            <!-- Main quantum wire -->
            <line class="quantum-wire" x1="50" y1="50" x2="350" y2="50" />
            
            <!-- Initial state -->
            <text x="30" y="55" fill="white">|0⟩</text>
            
            <!-- H gate -->
            <rect class="gate" x="100" y="35" width="30" height="30" />
            <text x="108" y="55" fill="white"></text>
            
            <!-- Parallel lines connecting H gate to the two parallel universes -->
            <line class="parallel-line" x1="130" y1="50" x2="150" y2="30" stroke="white" />
            <line class="parallel-line" x1="130" y1="50" x2="150" y2="70" stroke="white" />
            
            <!-- Parallel universe representation -->
            <g class="parallel-universe">
                <line class="dice-face" x1="150" y1="30" x2="250" y2="30" />
                <line class="dice-face" x1="150" y1="70" x2="250" y2="70" />
                <text x="180" y="25" fill="#00ffff" font-size="12">|1⟩</text>
                <text x="180" y="90" fill="#00ffff" font-size="12">|6⟩</text>
            </g>
            
            <!-- Measurement symbol -->
            <path class="measurement" d="M270,35 L290,35 L290,65 L270,65 Z" />
            <text x="320" y="55" fill="white" id="measurementText">?</text>
        </svg>
    `;
    circuitDiagram.style.opacity = '1';
    
    // Show superposition after initial delay
    await new Promise(resolve => setTimeout(resolve, 800));
    document.getElementById('superposition-state').style.opacity = '1';
    
    // Simulate the dice roll using quantum mechanics
    const roll = Math.floor(Math.random() * 6) + 1;

    // Add flipping animation
    dice.style.animation = 'flip 1.5s ease-in-out';

    // Wait for animation
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Update measurement result
    const finalState = document.getElementById('final-state');
    const measurementResult = document.getElementById('measurement-result');
    finalState.style.opacity = '1';
    
    measurementResult.innerHTML = `
        <div style="color: #00ff00">Dice Rolled: ${roll}</div>
        <div style="font-size: 0.8em">State: |${roll}⟩</div>
    `;
    
    dice.style.transform = `rotateY(${(roll - 1) * 60}deg)`;

    // Reset circuit diagram after a brief delay
    setTimeout(() => {
        circuitDiagram.style.opacity = '0';
    }, 2000);

    // Remove animations and enable button
    dice.style.animation = '';
    button.disabled = false;
}
