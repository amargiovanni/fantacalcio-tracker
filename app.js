// Fantacalcio App JavaScript

// Application state
let appState = {
    budget: 1000,
    spentBudget: 0,
    selectedPlayers: [],
    currentTab: 'aggiungi',
    customPlayers: [],
    searchIndex: -1
};

// Complete players database from API
const completePlayersDatabase = [
    {"id": "2428", "name": "Sommer", "team": "Inter", "role": "Portiere", "position": "Por", "price": 16, "fvm": 90},
    {"id": "5876", "name": "Di Gregorio", "team": "Juventus", "role": "Portiere", "position": "Por", "price": 16, "fvm": 83},
    {"id": "4312", "name": "Maignan", "team": "Milan", "role": "Portiere", "position": "Por", "price": 16, "fvm": 81},
    {"id": "572", "name": "Meret", "team": "Napoli", "role": "Portiere", "position": "Por", "price": 16, "fvm": 92},
    {"id": "2531", "name": "Lukaku", "team": "Napoli", "role": "Attaccante", "position": "Pc", "price": 31, "fvm": 200},
    {"id": "2764", "name": "Martinez L.", "team": "Inter", "role": "Attaccante", "position": "Pc", "price": 34, "fvm": 380},
    {"id": "2097", "name": "Kean", "team": "Fiorentina", "role": "Attaccante", "position": "Pc", "price": 33, "fvm": 375},
    {"id": "4730", "name": "Lookman", "team": "Atalanta", "role": "Attaccante", "position": "A", "price": 29, "fvm": 173},
    {"id": "4871", "name": "Thuram", "team": "Inter", "role": "Attaccante", "position": "Pc", "price": 29, "fvm": 310},
    {"id": "5544", "name": "David", "team": "Juventus", "role": "Attaccante", "position": "Pc", "price": 27, "fvm": 278},
    {"id": "2167", "name": "Orsolini", "team": "Bologna", "role": "Centrocampista", "position": "W;A", "price": 30, "fvm": 220},
    {"id": "2423", "name": "Pulisic", "team": "Milan", "role": "Centrocampista", "position": "T;A", "price": 28, "fvm": 216},
    {"id": "632", "name": "Zaccagni", "team": "Lazio", "role": "Centrocampista", "position": "W;A", "price": 26, "fvm": 205},
    {"id": "4777", "name": "McTominay", "team": "Napoli", "role": "Centrocampista", "position": "C;T", "price": 26, "fvm": 201},
    {"id": "5513", "name": "Dumfries", "team": "Inter", "role": "Difensore", "position": "E", "price": 20, "fvm": 100},
    {"id": "254", "name": "Dimarco", "team": "Inter", "role": "Difensore", "position": "E", "price": 19, "fvm": 96},
    {"id": "2160", "name": "Gosens", "team": "Fiorentina", "role": "Difensore", "position": "E", "price": 18, "fvm": 86},
    {"id": "4433", "name": "Zortea", "team": "Cagliari", "role": "Difensore", "position": "E", "price": 16, "fvm": 68}
];

// Player data organized by role
const playersData = {
    goalkeepers: [
        {"name": "Sommer", "team": "Inter", "price": 16, "fvm": 90, "position": "Por"},
        {"name": "Di Gregorio", "team": "Juventus", "price": 16, "fvm": 83, "position": "Por"},
        {"name": "Maignan", "team": "Milan", "price": 16, "fvm": 81, "position": "Por"},
        {"name": "Meret", "team": "Napoli", "price": 16, "fvm": 92, "position": "Por"}
    ],
    defenders: [
        {"name": "Dumfries", "team": "Inter", "price": 20, "fvm": 100, "position": "E"},
        {"name": "Dimarco", "team": "Inter", "price": 19, "fvm": 96, "position": "E"},
        {"name": "Gosens", "team": "Fiorentina", "price": 18, "fvm": 86, "position": "E"},
        {"name": "Zortea", "team": "Cagliari", "price": 16, "fvm": 68, "position": "E"}
    ],
    midfielders: [
        {"name": "Orsolini", "team": "Bologna", "price": 30, "fvm": 220, "position": "W;A"},
        {"name": "Pulisic", "team": "Milan", "price": 28, "fvm": 216, "position": "T;A"},
        {"name": "Zaccagni", "team": "Lazio", "price": 26, "fvm": 205, "position": "W;A"},
        {"name": "McTominay", "team": "Napoli", "price": 26, "fvm": 201, "position": "C;T"}
    ],
    attackers: [
        {"name": "Martinez L.", "team": "Inter", "price": 34, "fvm": 380, "position": "Pc"},
        {"name": "Kean", "team": "Fiorentina", "price": 33, "fvm": 375, "position": "Pc"},
        {"name": "Lukaku", "team": "Napoli", "price": 31, "fvm": 200, "position": "Pc"},
        {"name": "Thuram", "team": "Inter", "price": 29, "fvm": 310, "position": "Pc"},
        {"name": "Lookman", "team": "Atalanta", "price": 29, "fvm": 173, "position": "A"},
        {"name": "David", "team": "Juventus", "price": 27, "fvm": 278, "position": "Pc"}
    ]
};

const rules = {
    goalkeepers: {min: 3, max: 3},
    defenders: {min: 8, max: 8}, 
    midfielders: {min: 8, max: 8},
    attackers: {min: 6, max: 6}
};

// Role mapping
const roleMapping = {
    'Portiere': 'goalkeepers',
    'Difensore': 'defenders',
    'Centrocampista': 'midfielders',
    'Attaccante': 'attackers'
};

// DOM elements
const remainingBudgetEl = document.getElementById('remainingBudget');
const spentBudgetEl = document.getElementById('spentBudget');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
const selectedPlayersEl = document.getElementById('selectedPlayers');
const addPlayerForm = document.getElementById('addPlayerForm');
const confirmModal = document.getElementById('confirmModal');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');
const confirmMessage = document.getElementById('confirmMessage');

// Search elements
const playerSearchInput = document.getElementById('playerSearch');
const searchResultsEl = document.getElementById('searchResults');
const customNameInput = document.getElementById('customName');
const customTeamInput = document.getElementById('customTeam');
const customPriceInput = document.getElementById('customPrice');
const customRoleSelect = document.getElementById('customRole');
const addPlayerBtn = document.getElementById('addPlayerBtn');

// Role counters
const goalkeepersCountEl = document.getElementById('goalkeepersCount');
const defendersCountEl = document.getElementById('defendersCount');
const midfieldersCountEl = document.getElementById('midfieldersCount');
const attackersCountEl = document.getElementById('attackersCount');

let playerToRemove = null;
let currentSearchResults = [];

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
    
    console.log('App initialized');
    console.log('Database contains', completePlayersDatabase.length, 'players');
    console.log('Lukaku in database:', completePlayersDatabase.find(p => p.name === 'Lukaku'));
}

function setupEventListeners() {
    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            switchTab(tabId);
        });
    });

    // Add player form
    addPlayerForm.addEventListener('submit', handleAddPlayerSubmit);

    // Search functionality
    playerSearchInput.addEventListener('input', handleSearch);
    playerSearchInput.addEventListener('keydown', handleSearchKeydown);
    
    // Use focusout instead of blur to handle clicks properly
    playerSearchInput.addEventListener('focusout', function() {
        setTimeout(hideSearchResults, 150);
    });

    // Form validation
    [customNameInput, customTeamInput, customPriceInput, customRoleSelect].forEach(input => {
        input.addEventListener('input', validateForm);
        input.addEventListener('change', validateForm);
    });

    // Modal handlers
    confirmBtn.addEventListener('click', confirmRemovePlayer);
    cancelBtn.addEventListener('click', hideModal);
    confirmModal.addEventListener('click', function(e) {
        if (e.target === confirmModal) {
            hideModal();
        }
    });

    console.log('Event listeners setup complete');
}

function handleSearch(e) {
    const query = e.target.value.trim();
    console.log('Searching for:', query);
    
    if (query.length < 1) {
        hideSearchResults();
        currentSearchResults = [];
        return;
    }

    const results = searchPlayers(query);
    console.log('Search results found:', results.length);
    console.log('Results:', results.map(p => `${p.name} (${p.team})`));
    
    currentSearchResults = results;
    showSearchResults(results);
}

function searchPlayers(query) {
    const normalizedQuery = query.toLowerCase();
    const results = completePlayersDatabase.filter(player => 
        player.name.toLowerCase().includes(normalizedQuery) ||
        player.team.toLowerCase().includes(normalizedQuery)
    );
    
    console.log(`Found ${results.length} players matching "${query}"`);
    return results.slice(0, 10); // Limit to 10 results
}

function showSearchResults(results) {
    if (results.length === 0) {
        searchResultsEl.innerHTML = '<div class="search-result">Nessun giocatore trovato</div>';
        searchResultsEl.classList.remove('hidden');
        return;
    }

    const html = results.map((player, index) => `
        <div class="search-result" data-index="${index}" onclick="selectSearchResultByIndex(${index})">
            <div class="search-result-name">${player.name}</div>
            <div class="search-result-details">
                <span>${player.team} - ${player.role}</span>
                <span class="search-result-price">${player.price}M</span>
            </div>
        </div>
    `).join('');

    searchResultsEl.innerHTML = html;
    searchResultsEl.classList.remove('hidden');
    appState.searchIndex = -1;

    console.log('Search results displayed:', results.length);
}

function selectSearchResultByIndex(index) {
    if (currentSearchResults[index]) {
        selectSearchResult(currentSearchResults[index]);
    }
}

function selectSearchResult(player) {
    console.log('Selecting player from search:', player);
    
    // Fill form fields
    customNameInput.value = player.name;
    customTeamInput.value = player.team;
    customPriceInput.value = player.price;
    
    const mappedRole = roleMapping[player.role];
    console.log('Mapping role:', player.role, 'to', mappedRole);
    customRoleSelect.value = mappedRole || '';
    
    // Clear search
    playerSearchInput.value = `${player.name} - selezionato`;
    hideSearchResults();
    
    console.log('Form fields populated:', {
        name: customNameInput.value,
        team: customTeamInput.value,
        price: customPriceInput.value,
        role: customRoleSelect.value
    });
    
    // Validate and enable button
    setTimeout(() => {
        validateForm();
        console.log('Button enabled after selection:', !addPlayerBtn.disabled);
    }, 100);
}

function handleSearchKeydown(e) {
    if (currentSearchResults.length === 0) return;

    switch (e.key) {
        case 'ArrowDown':
            e.preventDefault();
            appState.searchIndex = Math.min(appState.searchIndex + 1, currentSearchResults.length - 1);
            updateSearchHighlight();
            break;
        case 'ArrowUp':
            e.preventDefault();
            appState.searchIndex = Math.max(appState.searchIndex - 1, 0);
            updateSearchHighlight();
            break;
        case 'Enter':
            e.preventDefault();
            if (appState.searchIndex >= 0 && currentSearchResults[appState.searchIndex]) {
                selectSearchResult(currentSearchResults[appState.searchIndex]);
            }
            break;
        case 'Escape':
            e.preventDefault();
            hideSearchResults();
            break;
    }
}

function updateSearchHighlight() {
    const results = searchResultsEl.querySelectorAll('.search-result');
    results.forEach((result, index) => {
        result.classList.toggle('highlighted', index === appState.searchIndex);
    });
}

function hideSearchResults() {
    searchResultsEl.classList.add('hidden');
    appState.searchIndex = -1;
}

function validateForm() {
    const name = customNameInput.value.trim();
    const team = customTeamInput.value.trim();
    const price = customPriceInput.value.trim();
    const role = customRoleSelect.value;
    
    const isValid = name && team && price && role && !isNaN(price) && parseInt(price) > 0;
    console.log('Form validation:', { name, team, price, role, isValid });
    
    addPlayerBtn.disabled = !isValid;
    
    if (isValid) {
        addPlayerBtn.classList.remove('btn--disabled');
        addPlayerBtn.textContent = 'Aggiungi alla Rosa';
    } else {
        addPlayerBtn.classList.add('btn--disabled');
        addPlayerBtn.textContent = 'Compila tutti i campi';
    }
}

function handleAddPlayerSubmit(e) {
    e.preventDefault();
    console.log('Form submitted');
    
    const name = customNameInput.value.trim();
    const team = customTeamInput.value.trim();
    const price = parseInt(customPriceInput.value);
    const role = customRoleSelect.value;
    
    console.log('Adding player:', { name, team, price, role });
    
    if (!name || !team || !price || !role) {
        console.error('Missing form data');
        alert('Compila tutti i campi');
        return;
    }
    
    // Check if player already exists in selected players
    if (appState.selectedPlayers.some(p => p.name === name && p.role === role)) {
        console.error('Player already selected');
        alert('Giocatore già presente nella rosa');
        return;
    }
    
    const player = { name, team, price, fvm: 0, isCustom: true };
    
    console.log('Checking if can add player...');
    if (canAddPlayer(player, role)) {
        console.log('Adding player to roster...');
        addCustomPlayer(player, role);
    }
}

function addCustomPlayer(player, role) {
    console.log('addCustomPlayer called with:', player, role);
    
    try {
        // Add to selected players
        const playerToAdd = {...player, role};
        appState.selectedPlayers.push(playerToAdd);
        appState.spentBudget += player.price;
        
        console.log('Player added to state:', appState.selectedPlayers);
        console.log('Budget updated:', appState.spentBudget);
        
        // Update displays
        updateBudgetDisplay();
        updateRoleCounts();
        renderSelectedPlayers();
        
        // Reset form
        addPlayerForm.reset();
        addPlayerBtn.disabled = true;
        addPlayerBtn.textContent = 'Aggiungi alla Rosa';
        playerSearchInput.value = '';
        
        console.log('Player successfully added to roster');
        alert(`${player.name} aggiunto alla rosa!`);
        
    } catch (error) {
        console.error('Error in addCustomPlayer:', error);
        alert('Errore nell\'aggiunta del giocatore');
    }
}

function switchTab(tabId) {
    console.log('Switching to tab:', tabId);
    
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
    const container = document.getElementById(`${role}-list`);
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
    const positionText = player.position ? `<div class="player-position">${player.position}</div>` : '';
    
    return `
        <div class="player-card ${isSelected ? 'selected' : ''}" data-player="${player.name}" data-role="${role}">
            <h3 class="player-name">${player.name}</h3>
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
    console.log('Checking if can add player:', player.name, 'Budget check:', appState.spentBudget + player.price, '<=', appState.budget);
    
    // Check budget
    if (appState.spentBudget + player.price > appState.budget) {
        alert('Budget insufficiente!');
        return false;
    }
    
    // Check role limits
    const currentCount = getRoleCount(role);
    const maxAllowed = rules[role]?.max || 0;
    
    console.log('Role check:', role, 'current:', currentCount, 'max:', maxAllowed);
    
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

// Make functions available globally for onclick handlers
window.showRemoveConfirmation = showRemoveConfirmation;
window.confirmRemovePlayer = confirmRemovePlayer;
window.hideModal = hideModal;
window.selectSearchResultByIndex = selectSearchResultByIndex;