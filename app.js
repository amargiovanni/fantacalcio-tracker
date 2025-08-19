// Fantacalcio App JavaScript

// Database completo di tutti i giocatori
const ALL_PLAYERS = [
    {"id": "2428", "name": "Sommer", "team": "Inter", "role": "Portiere", "position": "Por", "price": 16, "fvm": 90},
    {"id": "5876", "name": "Di Gregorio", "team": "Juventus", "role": "Portiere", "position": "Por", "price": 16, "fvm": 83},
    {"id": "4312", "name": "Maignan", "team": "Milan", "role": "Portiere", "position": "Por", "price": 16, "fvm": 81},
    {"id": "572", "name": "Meret", "team": "Napoli", "role": "Portiere", "position": "Por", "price": 16, "fvm": 92},
    {"id": "5841", "name": "Svilar", "team": "Roma", "role": "Portiere", "position": "Por", "price": 15, "fvm": 82},
    {"id": "4431", "name": "Carnesecchi", "team": "Atalanta", "role": "Portiere", "position": "Por", "price": 14, "fvm": 71},
    {"id": "2521", "name": "De Gea", "team": "Fiorentina", "role": "Portiere", "position": "Por", "price": 14, "fvm": 62},
    {"id": "2814", "name": "Provedel", "team": "Lazio", "role": "Portiere", "position": "Por", "price": 12, "fvm": 54},
    {"id": "133", "name": "Skorupski", "team": "Bologna", "role": "Portiere", "position": "Por", "price": 10, "fvm": 49},
    {"id": "6966", "name": "Butez", "team": "Como", "role": "Portiere", "position": "Por", "price": 10, "fvm": 32},
    {"id": "7179", "name": "Israel", "team": "Torino", "role": "Portiere", "position": "Por", "price": 9, "fvm": 30},
    {"id": "188", "name": "Leali", "team": "Genoa", "role": "Portiere", "position": "Por", "price": 8, "fvm": 28},
    {"id": "5513", "name": "Dumfries", "team": "Inter", "role": "Difensore", "position": "E", "price": 20, "fvm": 100},
    {"id": "254", "name": "Dimarco", "team": "Inter", "role": "Difensore", "position": "E", "price": 19, "fvm": 96},
    {"id": "2160", "name": "Gosens", "team": "Fiorentina", "role": "Difensore", "position": "E", "price": 18, "fvm": 86},
    {"id": "4433", "name": "Zortea", "team": "Cagliari", "role": "Difensore", "position": "E", "price": 16, "fvm": 68},
    {"id": "2120", "name": "Bastoni", "team": "Inter", "role": "Difensore", "position": "Dc", "price": 16, "fvm": 78},
    {"id": "5520", "name": "Cambiaso", "team": "Juventus", "role": "Difensore", "position": "E", "price": 15, "fvm": 63},
    {"id": "6046", "name": "Hien", "team": "Atalanta", "role": "Difensore", "position": "Dc", "price": 11, "fvm": 40},
    {"id": "5526", "name": "Scalvini", "team": "Atalanta", "role": "Difensore", "position": "Dc", "price": 8, "fvm": 24},
    {"id": "2167", "name": "Orsolini", "team": "Bologna", "role": "Centrocampista", "position": "W;A", "price": 30, "fvm": 220},
    {"id": "2423", "name": "Pulisic", "team": "Milan", "role": "Centrocampista", "position": "T;A", "price": 28, "fvm": 216},
    {"id": "632", "name": "Zaccagni", "team": "Lazio", "role": "Centrocampista", "position": "W;A", "price": 26, "fvm": 205},
    {"id": "4777", "name": "McTominay", "team": "Napoli", "role": "Centrocampista", "position": "C;T", "price": 26, "fvm": 201},
    {"id": "5800", "name": "Gudmundsson A.", "team": "Fiorentina", "role": "Centrocampista", "position": "T;A", "price": 24, "fvm": 177},
    {"id": "5792", "name": "Ederson D.S.", "team": "Atalanta", "role": "Centrocampista", "position": "M;C", "price": 15, "fvm": 58},
    {"id": "4686", "name": "Fofana Y.", "team": "Milan", "role": "Centrocampista", "position": "M;C", "price": 11, "fvm": 37},
    {"id": "6398", "name": "Isaksen", "team": "Lazio", "role": "Centrocampista", "position": "W;A", "price": 14, "fvm": 48},
    {"id": "6010", "name": "Fazzini", "team": "Fiorentina", "role": "Centrocampista", "position": "C;T", "price": 11, "fvm": 36},
    {"id": "2764", "name": "Martinez L.", "team": "Inter", "role": "Attaccante", "position": "Pc", "price": 34, "fvm": 380},
    {"id": "2097", "name": "Kean", "team": "Fiorentina", "role": "Attaccante", "position": "Pc", "price": 33, "fvm": 375},
    {"id": "2531", "name": "Lukaku", "team": "Napoli", "role": "Attaccante", "position": "Pc", "price": 31, "fvm": 200},
    {"id": "4730", "name": "Lookman", "team": "Atalanta", "role": "Attaccante", "position": "A", "price": 29, "fvm": 173},
    {"id": "4871", "name": "Thuram", "team": "Inter", "role": "Attaccante", "position": "Pc", "price": 29, "fvm": 310},
    {"id": "5544", "name": "David", "team": "Juventus", "role": "Attaccante", "position": "Pc", "price": 27, "fvm": 278},
    {"id": "6434", "name": "Yildiz", "team": "Juventus", "role": "Attaccante", "position": "A", "price": 24, "fvm": 235},
    {"id": "6215", "name": "Lucca", "team": "Napoli", "role": "Attaccante", "position": "Pc", "price": 15, "fvm": 121},
    {"id": "6365", "name": "Ferguson E.", "team": "Roma", "role": "Attaccante", "position": "Pc", "price": 19, "fvm": 137},
    {"id": "6435", "name": "Krstovic", "team": "Lecce", "role": "Attaccante", "position": "Pc", "price": 20, "fvm": 138},
    {"id": "785", "name": "Immobile", "team": "Bologna", "role": "Attaccante", "position": "Pc", "price": 19, "fvm": 140},
    {"id": "6572", "name": "Castro S.", "team": "Bologna", "role": "Attaccante", "position": "Pc", "price": 19, "fvm": 128},
    {"id": "5734", "name": "Soulè", "team": "Roma", "role": "Attaccante", "position": "A", "price": 20, "fvm": 122}
];

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
let remainingBudgetEl, spentBudgetEl, tabBtns, tabPanels, selectedPlayersEl, customPlayerForm, confirmModal, confirmBtn, cancelBtn, confirmMessage;
let playerSearchEl, autocompleteDropdownEl, customNameEl, customTeamEl, customPriceEl, customRoleEl, customFVMEl;
let goalkeepersCountEl, defendersCountEl, midfieldersCountEl, attackersCountEl;

let playerToRemove = null;
let selectedAutocompleteIndex = -1;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    initApp();
});

function initializeElements() {
    // Get DOM elements
    remainingBudgetEl = document.getElementById('remainingBudget');
    spentBudgetEl = document.getElementById('spentBudget');
    tabBtns = document.querySelectorAll('.tab-btn');
    tabPanels = document.querySelectorAll('.tab-panel');
    selectedPlayersEl = document.getElementById('selectedPlayers');
    customPlayerForm = document.getElementById('customPlayerForm');
    confirmModal = document.getElementById('confirmModal');
    confirmBtn = document.getElementById('confirmBtn');
    cancelBtn = document.getElementById('cancelBtn');
    confirmMessage = document.getElementById('confirmMessage');

    // Autocomplete elements
    playerSearchEl = document.getElementById('playerSearch');
    autocompleteDropdownEl = document.getElementById('autocompleteDropdown');
    customNameEl = document.getElementById('customName');
    customTeamEl = document.getElementById('customTeam');
    customPriceEl = document.getElementById('customPrice');
    customRoleEl = document.getElementById('customRole');
    customFVMEl = document.getElementById('customFVM');

    // Role counters
    goalkeepersCountEl = document.getElementById('goalkeepersCount');
    defendersCountEl = document.getElementById('defendersCount');
    midfieldersCountEl = document.getElementById('midfieldersCount');
    attackersCountEl = document.getElementById('attackersCount');
}

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

    // Autocomplete handlers
    if (playerSearchEl) {
        playerSearchEl.addEventListener('input', handleSearchInput);
        playerSearchEl.addEventListener('keydown', handleSearchKeydown);
        playerSearchEl.addEventListener('focus', handleSearchFocus);
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (autocompleteDropdownEl && !autocompleteDropdownEl.contains(e.target) && e.target !== playerSearchEl) {
            hideAutocompleteDropdown();
        }
    });
}

// Autocomplete functionality
function handleSearchInput(e) {
    const query = e.target.value.trim();
    if (query.length < 1) {
        hideAutocompleteDropdown();
        return;
    }
    
    const results = searchPlayers(query);
    showAutocompleteResults(results, query);
}

function handleSearchFocus(e) {
    const query = e.target.value.trim();
    if (query.length >= 1) {
        const results = searchPlayers(query);
        showAutocompleteResults(results, query);
    }
}

function handleSearchKeydown(e) {
    const items = autocompleteDropdownEl.querySelectorAll('.autocomplete-item');
    const maxIndex = items.length - 1;
    
    switch(e.key) {
        case 'ArrowDown':
            e.preventDefault();
            selectedAutocompleteIndex = Math.min(selectedAutocompleteIndex + 1, maxIndex);
            updateAutocompleteSelection(items);
            break;
        case 'ArrowUp':
            e.preventDefault();
            selectedAutocompleteIndex = Math.max(selectedAutocompleteIndex - 1, -1);
            updateAutocompleteSelection(items);
            break;
        case 'Enter':
            e.preventDefault();
            if (selectedAutocompleteIndex >= 0 && items[selectedAutocompleteIndex]) {
                selectAutocompleteItem(items[selectedAutocompleteIndex]);
            }
            break;
        case 'Escape':
            hideAutocompleteDropdown();
            playerSearchEl.blur();
            break;
    }
}

function searchPlayers(query) {
    const queryLower = query.toLowerCase();
    
    return ALL_PLAYERS.filter(player => {
        const nameMatch = player.name.toLowerCase().includes(queryLower);
        const teamMatch = player.team.toLowerCase().includes(queryLower);
        return nameMatch || teamMatch;
    })
    .sort((a, b) => {
        // Prioritize exact matches
        const aNameExact = a.name.toLowerCase().startsWith(queryLower);
        const bNameExact = b.name.toLowerCase().startsWith(queryLower);
        const aTeamExact = a.team.toLowerCase().startsWith(queryLower);
        const bTeamExact = b.team.toLowerCase().startsWith(queryLower);
        
        if (aNameExact && !bNameExact) return -1;
        if (bNameExact && !aNameExact) return 1;
        if (aTeamExact && !bTeamExact) return -1;
        if (bTeamExact && !aTeamExact) return 1;
        
        // Then by price (higher first)
        return b.price - a.price;
    })
    .slice(0, 8); // Limit to 8 results
}

function showAutocompleteResults(results, query) {
    selectedAutocompleteIndex = -1;
    
    if (results.length === 0) {
        autocompleteDropdownEl.innerHTML = '<div class="autocomplete-no-results">Nessun giocatore trovato</div>';
    } else {
        autocompleteDropdownEl.innerHTML = results.map(player => createAutocompleteItem(player, query)).join('');
        
        // Add click handlers
        autocompleteDropdownEl.querySelectorAll('.autocomplete-item').forEach((item, index) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                selectAutocompleteItem(item);
            });
            item.addEventListener('mouseenter', () => {
                selectedAutocompleteIndex = index;
                updateAutocompleteSelection(autocompleteDropdownEl.querySelectorAll('.autocomplete-item'));
            });
        });
    }
    
    autocompleteDropdownEl.classList.remove('hidden');
}

function createAutocompleteItem(player, query) {
    const roleIconClass = getRoleIconClass(player.role);
    const highlightedName = highlightMatch(player.name, query);
    const highlightedTeam = highlightMatch(player.team, query);
    
    return `
        <div class="autocomplete-item" data-player='${JSON.stringify(player)}'>
            <div class="autocomplete-item-icon ${roleIconClass}"></div>
            <div class="autocomplete-item-info">
                <div class="autocomplete-item-name">${highlightedName}</div>
                <div class="autocomplete-item-details">
                    <span>${highlightedTeam} • ${player.role}</span>
                    <span class="autocomplete-item-price">${player.price}M</span>
                </div>
            </div>
        </div>
    `;
}

function getRoleIconClass(role) {
    const roleMap = {
        'Portiere': 'role-icon-portiere',
        'Difensore': 'role-icon-difensore', 
        'Centrocampista': 'role-icon-centrocampista',
        'Attaccante': 'role-icon-attaccante'
    };
    return roleMap[role] || '';
}

function highlightMatch(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="autocomplete-highlight">$1</span>');
}

function updateAutocompleteSelection(items) {
    items.forEach((item, index) => {
        item.classList.toggle('highlighted', index === selectedAutocompleteIndex);
    });
}

function selectAutocompleteItem(item) {
    const playerData = JSON.parse(item.dataset.player);
    fillPlayerForm(playerData);
    hideAutocompleteDropdown();
    playerSearchEl.value = playerData.name;
}

function fillPlayerForm(player) {
    customNameEl.value = player.name;
    customTeamEl.value = player.team;
    customPriceEl.value = player.price;
    customFVMEl.value = player.fvm || '';
    
    // Set role based on player role
    const roleMapping = {
        'Portiere': 'goalkeepers',
        'Difensore': 'defenders',
        'Centrocampista': 'midfielders', 
        'Attaccante': 'attackers'
    };
    customRoleEl.value = roleMapping[player.role] || '';
}

function hideAutocompleteDropdown() {
    if (autocompleteDropdownEl) {
        autocompleteDropdownEl.classList.add('hidden');
    }
    selectedAutocompleteIndex = -1;
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
                ${player.age ? `<span class="age-indicator ${ageClass}">${player.age === 'young' ? 'G' : player.age === 'mature' ? 'M' : player.age === 'veteran' ? 'V' : 'C'}</span>` : ''}
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
    
    const name = customNameEl.value.trim();
    const team = customTeamEl.value.trim();
    const price = parseInt(customPriceEl.value);
    const role = customRoleEl.value;
    const fvm = parseInt(customFVMEl.value) || 0;
    
    if (!name || !team || !price || !role) {
        alert('Compila tutti i campi obbligatori');
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
        fvm,
        age: 'custom',
        isCustom: true
    };
    
    appState.customPlayers.push({...customPlayer, role});
    renderPlayersForRole(role);
    
    // Reset form
    customPlayerForm.reset();
    playerSearchEl.value = '';
    hideAutocompleteDropdown();
    alert('Giocatore aggiunto alla lista!');
}

// Make functions available globally for onclick handlers
window.showRemoveConfirmation = showRemoveConfirmation;
window.confirmRemovePlayer = confirmRemovePlayer;
window.hideModal = hideModal;