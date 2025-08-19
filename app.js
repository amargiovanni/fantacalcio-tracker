// Fantacalcio App JavaScript

// Application state
let appState = {
    budget: 1000,
    spentBudget: 0,
    selectedPlayers: [],
    currentTab: 'portieri',
    customPlayers: []
};

// Player data
const playersData = {
    goalkeepers: [
        {"name": "Skorupski", "team": "Bologna", "price": 10, "fvm": 49, "age": "veteran"},
        {"name": "Mandas", "team": "Lazio", "price": 3, "fvm": 12, "age": "young"},
        {"name": "Provedel", "team": "Lazio", "price": 12, "fvm": 54, "age": "mature"},
        {"name": "Israel", "team": "Torino", "price": 9, "fvm": 30, "age": "young"},
        {"name": "Butez", "team": "Como", "price": 10, "fvm": 32, "age": "young"},
        {"name": "Leali", "team": "Genoa", "price": 8, "fvm": 28, "age": "mature"}
    ],
    defenders: [
        {"name": "Hien", "team": "Atalanta", "price": 11, "fvm": 40, "age": "young", "position": "Dc"},
        {"name": "Scalvini", "team": "Atalanta", "price": 8, "fvm": 24, "age": "young", "position": "Dc"},
        {"name": "Delprato", "team": "Parma", "price": 8, "fvm": 24, "age": "young", "position": "B;Dd;E"},
        {"name": "Marusic", "team": "Lazio", "price": 8, "fvm": 26, "age": "veteran", "position": "Dd;Ds;E"},
        {"name": "Carlos Augusto", "team": "Inter", "price": 10, "fvm": 35, "age": "mature", "position": "B;Ds;E"},
        {"name": "Solet", "team": "Udinese", "price": 11, "fvm": 30, "age": "young", "position": "Dc"},
        {"name": "Valeri", "team": "Parma", "price": 10, "fvm": 27, "age": "young", "position": "Ds;E"},
        {"name": "Martin", "team": "Genoa", "price": 10, "fvm": 32, "age": "mature", "position": "Ds;E"},
        {"name": "Miranda J.", "team": "Bologna", "price": 9, "fvm": 24, "age": "young", "position": "Ds;E"},
        {"name": "Biraghi", "team": "Torino", "price": 8, "fvm": 23, "age": "veteran", "position": "Ds;E"},
        {"name": "Lucumì", "team": "Bologna", "price": 8, "fvm": 21, "age": "young", "position": "Dc"},
        {"name": "Holm", "team": "Bologna", "price": 8, "fvm": 21, "age": "young", "position": "Dd;E"},
        {"name": "Olivera", "team": "Napoli", "price": 10, "fvm": 26, "age": "young", "position": "Ds;E"},
        {"name": "Vasquez", "team": "Genoa", "price": 9, "fvm": 23, "age": "young", "position": "Ds;Dc"},
        {"name": "Beukema", "team": "Napoli", "price": 10, "fvm": 25, "age": "young", "position": "Dc"},
        {"name": "De Winter", "team": "Milan", "price": 8, "fvm": 19, "age": "young", "position": "Dd;Dc"}
    ],
    midfielders: [
        {"name": "Ederson D.S.", "team": "Atalanta", "price": 15, "fvm": 64, "age": "young", "position": "M;C"},
        {"name": "Fofana Y.", "team": "Milan", "price": 11, "fvm": 40, "age": "young", "position": "M;C"},
        {"name": "Tramoni M.", "team": "Pisa", "price": 12, "fvm": 42, "age": "young", "position": "W;T"},
        {"name": "Isaksen", "team": "Lazio", "price": 14, "fvm": 48, "age": "young", "position": "W;A"},
        {"name": "Gronbaek", "team": "Genoa", "price": 12, "fvm": 40, "age": "young", "position": "W;T"},
        {"name": "Saelemaekers", "team": "Milan", "price": 12, "fvm": 40, "age": "young", "position": "E;W"},
        {"name": "Fazzini", "team": "Fiorentina", "price": 11, "fvm": 36, "age": "young", "position": "C;T"},
        {"name": "Konè M.", "team": "Roma", "price": 14, "fvm": 45, "age": "young", "position": "M;C"},
        {"name": "Jashari", "team": "Milan", "price": 13, "fvm": 39, "age": "young", "position": "C"},
        {"name": "Da Cunha", "team": "Como", "price": 12, "fvm": 36, "age": "young", "position": "C;W;T"},
        {"name": "Samardzic", "team": "Atalanta", "price": 12, "fvm": 35, "age": "young", "position": "T"},
        {"name": "Dele-Bashiru", "team": "Lazio", "price": 11, "fvm": 32, "age": "young", "position": "C;T"},
        {"name": "Bernabè", "team": "Parma", "price": 11, "fvm": 32, "age": "young", "position": "C"},
        {"name": "Carboni V.", "team": "Genoa", "price": 11, "fvm": 29, "age": "young", "position": "T;A"},
        {"name": "Neres", "team": "Napoli", "price": 13, "fvm": 41, "age": "mature", "position": "W;A"},
        {"name": "Vlasic", "team": "Torino", "price": 15, "fvm": 46, "age": "mature", "position": "T"}
    ],
    attackers: [
        {"name": "Lucca", "team": "Napoli", "price": 15, "fvm": 121, "age": "young", "position": "Pc"},
        {"name": "Ferguson E.", "team": "Roma", "price": 19, "fvm": 137, "age": "young", "position": "Pc"},
        {"name": "Krstovic", "team": "Lecce", "price": 20, "fvm": 138, "age": "young", "position": "Pc"},
        {"name": "Immobile", "team": "Bologna", "price": 19, "fvm": 140, "age": "veteran", "position": "Pc"},
        {"name": "Castro S.", "team": "Bologna", "price": 19, "fvm": 128, "age": "young", "position": "Pc"},
        {"name": "Soulè", "team": "Roma", "price": 20, "fvm": 125, "age": "young", "position": "A"},
        {"name": "Scamacca", "team": "Atalanta", "price": 19, "fvm": 114, "age": "young", "position": "Pc"},
        {"name": "Dia", "team": "Lazio", "price": 20, "fvm": 141, "age": "mature", "position": "Pc"},
        {"name": "Diao", "team": "Como", "price": 17, "fvm": 99, "age": "young", "position": "W;A"},
        {"name": "Piccoli", "team": "Cagliari", "price": 17, "fvm": 90, "age": "young", "position": "Pc"},
        {"name": "Pellegrino M.", "team": "Parma", "price": 13, "fvm": 67, "age": "young", "position": "Pc"},
        {"name": "Lang", "team": "Napoli", "price": 19, "fvm": 97, "age": "young", "position": "A"}
    ]
};

const rules = {
    goalkeepers: {min: 3, max: 3},
    defenders: {min: 8, max: 8}, 
    midfielders: {min: 8, max: 8},
    attackers: {min: 6, max: 6}
};

// DOM elements
const remainingBudgetEl = document.getElementById('remainingBudget');
const spentBudgetEl = document.getElementById('spentBudget');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
const selectedPlayersEl = document.getElementById('selectedPlayers');
const customPlayerForm = document.getElementById('customPlayerForm');
const confirmModal = document.getElementById('confirmModal');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');
const confirmMessage = document.getElementById('confirmMessage');

// Role counters
const goalkeepersCountEl = document.getElementById('goalkeepersCount');
const defendersCountEl = document.getElementById('defendersCount');
const midfieldersCountEl = document.getElementById('midfieldersCount');
const attackersCountEl = document.getElementById('attackersCount');

let playerToRemove = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    renderAllPlayers();
    setupEventListeners();
    updateBudgetDisplay();
    updateRoleCounts();
    renderSelectedPlayers();
}

function setupEventListeners() {
    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            switchTab(tabId);
        });
    });

    // Custom player form
    customPlayerForm.addEventListener('submit', handleCustomPlayerSubmit);

    // Modal handlers
    confirmBtn.addEventListener('click', confirmRemovePlayer);
    cancelBtn.addEventListener('click', hideModal);
    confirmModal.addEventListener('click', function(e) {
        if (e.target === confirmModal) {
            hideModal();
        }
    });
}

function switchTab(tabId) {
    // Update tab buttons
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabId) {
            btn.classList.add('active');
        }
    });

    // Update tab panels
    tabPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === tabId) {
            panel.classList.add('active');
        }
    });

    appState.currentTab = tabId;
}

function renderAllPlayers() {
    Object.keys(playersData).forEach(role => {
        renderPlayersForRole(role);
    });
}

function renderPlayersForRole(role) {
    const container = document.getElementById(`${role.replace('goalkeepers', 'goalkeepers').replace('defenders', 'defenders').replace('midfielders', 'midfielders').replace('attackers', 'attackers')}-list`);
    if (!container) return;

    const allPlayers = [...playersData[role], ...appState.customPlayers.filter(p => p.role === role)];
    
    container.innerHTML = allPlayers.map(player => createPlayerCard(player, role)).join('');
    
    // Add event listeners to player cards
    container.querySelectorAll('.player-card').forEach(card => {
        card.addEventListener('click', function() {
            const playerName = this.dataset.player;
            const playerRole = this.dataset.role;
            togglePlayer(playerName, playerRole);
        });
    });
}

function createPlayerCard(player, role) {
    const isSelected = appState.selectedPlayers.some(p => p.name === player.name && p.role === role);
    const ageClass = player.age ? `age-${player.age}` : '';
    const positionText = player.position ? `<div class="player-position">${player.position}</div>` : '';
    
    return `
        <div class="player-card ${isSelected ? 'selected' : ''}" data-player="${player.name}" data-role="${role}">
            <h3 class="player-name">
                ${player.name}
                ${player.age ? `<span class="age-indicator ${ageClass}">${player.age === 'young' ? 'G' : player.age === 'mature' ? 'M' : 'V'}</span>` : ''}
            </h3>
            <div class="player-info">
                <span class="player-team">${player.team}</span>
            </div>
            <div class="player-stats">
                <span class="player-price">${player.price}M</span>
                <span class="player-fvm">FVM: ${player.fvm || 'N/A'}</span>
            </div>
            ${positionText}
        </div>
    `;
}

function togglePlayer(playerName, role) {
    const existingPlayerIndex = appState.selectedPlayers.findIndex(p => p.name === playerName && p.role === role);
    
    if (existingPlayerIndex !== -1) {
        // Player already selected, show confirmation modal
        const player = appState.selectedPlayers[existingPlayerIndex];
        showRemoveConfirmation(player, role);
    } else {
        // Add player if budget allows and role limits not exceeded
        const player = findPlayer(playerName, role);
        if (player && canAddPlayer(player, role)) {
            addPlayer(player, role);
        }
    }
}

function findPlayer(name, role) {
    let player = playersData[role]?.find(p => p.name === name);
    if (!player) {
        player = appState.customPlayers.find(p => p.name === name && p.role === role);
    }
    return player;
}

function canAddPlayer(player, role) {
    // Check budget
    if (appState.spentBudget + player.price > appState.budget) {
        alert('Budget insufficiente!');
        return false;
    }
    
    // Check role limits
    const currentCount = getRoleCount(role);
    const maxAllowed = rules[role]?.max || 0;
    
    if (currentCount >= maxAllowed) {
        alert(`Limite massimo raggiunto per questo ruolo (${maxAllowed})`);
        return false;
    }
    
    return true;
}

function addPlayer(player, role) {
    appState.selectedPlayers.push({...player, role});
    appState.spentBudget += player.price;
    
    updateBudgetDisplay();
    updateRoleCounts();
    renderSelectedPlayers();
    renderPlayersForRole(role);
}

function showRemoveConfirmation(player, role) {
    playerToRemove = {player, role};
    confirmMessage.textContent = `Rimuovere ${player.name} dalla rosa?`;
    confirmModal.classList.remove('hidden');
}

function confirmRemovePlayer() {
    if (playerToRemove) {
        removePlayer(playerToRemove.player, playerToRemove.role);
        playerToRemove = null;
    }
    hideModal();
}

function removePlayer(player, role) {
    const index = appState.selectedPlayers.findIndex(p => p.name === player.name && p.role === role);
    if (index !== -1) {
        appState.selectedPlayers.splice(index, 1);
        appState.spentBudget -= player.price;
        
        updateBudgetDisplay();
        updateRoleCounts();
        renderSelectedPlayers();
        renderPlayersForRole(role);
    }
}

function hideModal() {
    confirmModal.classList.add('hidden');
    playerToRemove = null;
}

function updateBudgetDisplay() {
    const remaining = appState.budget - appState.spentBudget;
    remainingBudgetEl.textContent = remaining;
    spentBudgetEl.textContent = appState.spentBudget;
    
    // Update colors
    remainingBudgetEl.className = remaining < 0 ? 'budget-value negative' : 'budget-value';
}

function getRoleCount(role) {
    return appState.selectedPlayers.filter(p => p.role === role).length;
}

function updateRoleCounts() {
    const goalkeepers = getRoleCount('goalkeepers');
    const defenders = getRoleCount('defenders');
    const midfielders = getRoleCount('midfielders');
    const attackers = getRoleCount('attackers');
    
    goalkeepersCountEl.textContent = `${goalkeepers}/${rules.goalkeepers.max}`;
    defendersCountEl.textContent = `${defenders}/${rules.defenders.max}`;
    midfieldersCountEl.textContent = `${midfielders}/${rules.midfielders.max}`;
    attackersCountEl.textContent = `${attackers}/${rules.attackers.max}`;
}

function renderSelectedPlayers() {
    if (appState.selectedPlayers.length === 0) {
        selectedPlayersEl.innerHTML = '<p class="empty-team">Nessun giocatore selezionato</p>';
        return;
    }
    
    const playersByRole = {
        goalkeepers: [],
        defenders: [],
        midfielders: [],
        attackers: []
    };
    
    appState.selectedPlayers.forEach(player => {
        playersByRole[player.role].push(player);
    });
    
    let html = '';
    Object.keys(playersByRole).forEach(role => {
        if (playersByRole[role].length > 0) {
            const roleNames = {
                goalkeepers: 'Portieri',
                defenders: 'Difensori', 
                midfielders: 'Centrocampisti',
                attackers: 'Attaccanti'
            };
            
            html += `<h3>${roleNames[role]}</h3>`;
            playersByRole[role].forEach(player => {
                html += `
                    <div class="selected-player">
                        <div class="selected-player-info">
                            <div class="selected-player-name">${player.name}</div>
                            <div class="selected-player-details">${player.team} - ${player.price}M</div>
                        </div>
                        <button class="remove-btn" onclick="showRemoveConfirmation({name: '${player.name}', price: ${player.price}, team: '${player.team}'}, '${role}')">Rimuovi</button>
                    </div>
                `;
            });
        }
    });
    
    selectedPlayersEl.innerHTML = html;
}

function handleCustomPlayerSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('customName').value.trim();
    const team = document.getElementById('customTeam').value.trim();
    const price = parseInt(document.getElementById('customPrice').value);
    const role = document.getElementById('customRole').value;
    
    if (!name || !team || !price || !role) {
        alert('Compila tutti i campi');
        return;
    }
    
    // Check if player already exists
    if (findPlayer(name, role)) {
        alert('Giocatore già presente');
        return;
    }
    
    const customPlayer = {
        name,
        team,
        price,
        fvm: 0,
        age: 'custom',
        isCustom: true
    };
    
    appState.customPlayers.push({...customPlayer, role});
    renderPlayersForRole(role);
    
    // Reset form
    customPlayerForm.reset();
    alert('Giocatore aggiunto alla lista!');
}

// Make functions available globally for onclick handlers
window.showRemoveConfirmation = showRemoveConfirmation;
window.confirmRemovePlayer = confirmRemovePlayer;
window.hideModal = hideModal;