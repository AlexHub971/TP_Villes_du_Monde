
const SearchInputEventNames = {
    SEARCH_INPUT: "search_input",
    CLEAR_SEARCH_INPUT: "clear_search_input"
}

const indexerMode = {
    NONE: 1,
    LOOP: 2
}

const indexerDirection = {
    NEXT: "next",
    PREVIOUS: "previous"
}

const IndexerEventNames = {
    INDEX_CHANGED: "index_changed"
}

const IndexerDirection = {
    NEXT: 1,
    PREVIOUS: 2
}

// START Class WorldCities
class WorldCities extends AbstractApp {
    constructor(containerDiv) {
        super(containerDiv);
        this.baseTowns = [];
        this.towns = [];
        this.indexer;
        this.searchIpt;
    }

    init(dataSource) {
        // Codez cette méthode pour traiter le fichier chargé et initialiser la classe.
        super.init(dataSource);
        this.initTowns(dataSource);
        this.loadTown(0);
    }

    set index(value) {
        this.index = value; 
    }

    initTowns(dataSource) {
        
    }

    loadTown(index) {
        this.loadGallery(this.dataSource[index]);
    }

    loadGallery(images) {

    }

    searchInputHandler() {

    }

    clearSearchInputHandler() {

    }

    refresh() {

    }

    filterElement(arr, filter) {

    }

    initInput() {

    }

    indexerIndexChangeHandler() {

    }

    initIndexer() {

    }
}
// END Class WorldCities


// START Class SearchInputEvent
class SearchInputEvent extends CustomEvent {
    constructor(type, options) {
        super(type, options);
    }
}
// END Class SearchInputEvent

// START Class SearchInput
class SearchInput extends AbstractUIComponent {
    constructor(UIView) {
        super(UIView);

        // Codez ici les propriétés déENDies dans le diagramme de classes.
        this.init();
    }

    get value() {
        return super.value;
    }

    searchInputHandler() {
        // Codez cette méthode. Adaptation en classe du TP Citation.
    }

    clearSearchHandler() {
        // Codez cette méthode. Adaptation en classe du TP Citation.
    }

    checkClearButton() {
        // Codez cette méthode. Adaptation en classe du TP Citation.
    }

    init() {
        // Appelez ici les méthodes d'initialisation du composant décrites dans le diagrammes de classe.
        super.init();
    }
}
// END Class SearchInput

// START Class IndexerEvent
class IndexerEvent extends CustomEvent {
    constructor(type, options) {
        super(type, options);
    }
}
// END Class IndexerEvent

// START Class Indexer
class Indexer extends AbstractUIComponent {
    constructor(UIView, total, mode = indexerMode.NONE) {
        super(UIView);

        // Codez ici les propriétés déENDies dans le diagramme de classes.
        this.total = total;
        this.mode = mode;
        this.nextBtn = this.querySelector(IndexerDirection.NEXT);
        this.previousBtn = this.querySelector(IndexerDirection.PREVIOUS);
        this.init();
    }

    set mode(value) {
        this.indexerMode = value;
    }

    set totalItems(value) {
        this.total = value;
        this.setNumbers();
    }

    get value() {
        return super.value;
    }

    set value(value) {
        this.index = value;
        this.checkIndex();
        super.value = value;
    }

    init() {
        // Appelez ici les méthodes d'initialisation du composant décrites dans le diagrammes de classe.
        super.init();
    }

    // Adaptation en méthode de la fonction du TP Citations. Déjà codée pour vous. :)
    changeIndex(direction) {
        direction == indexerDirection.NEXT ? this.index++ : this.index--;
        this.checkIndex();
    }

    checkIndex() {
        // Codez cette méthode. Adaptation en classe du TP Citation.
    }

    setNumbers() {
        // Codez cette méthode. Adaptation en classe du TP Citation.
    }

    // Adaptation en méthode de la fonction du TP Citations. Déjà codée pour vous. :)
    getZeroFormat(num, limit) {
        const sNum = num.toString();
        const sLimit = limit.toString();
        const numZero = sLimit.length - sNum.length;
        let start = 0;
        let zero = "";
        while (start < numZero) {
            zero += "0";
            start++;
        }
        const format = zero + sNum;
        return format
    }

    initButtons() {
        // Codez cette méthode. Adaptation en classe du TP Citation.
    }

}
// END Class Indexer

// START Class InderxerButton
class IndexerButton extends AbstractButton {
    constructor(buttonDiv) {
        super(buttonDiv);
    }

    disable(bool = true) {
        // Codez cette méthode pour changer la couleur des boutons via la classe CSS. Adaptation en classe du TP Citation.
        super.disable(bool);
    }
}
// END Class InderxerButton


// START Class City
// Classe à utiliser pour stocker chaque ville des données chargées du fichier externe datas.json.
class City {
    constructor(dataSource) {
        this.country = dataSource.country;
        this.description = dataSource.description;
        this.images = dataSource.images;
        this.inhabitants = dataSource.inhabitants;
        this.major = dataSource.major;
        this.name = dataSource.name;
        this.region = dataSource.region;
        this.state = dataSource.state;
        this.link = dataSource.link;
    }
}
// END Class City


// Fonction de chargement du fichier externe datas.json. A NE PAS TOUCHER.
async function loadDatas() {
    const response = await fetch("data/datas.json")
        .then(response => response.json())
        .then(json => worldCities.init(json)
        );
}

function appInitHandler(evt) {
    console.log("worldCities.dataSource", worldCities.dataSource);
    checkIndex();
}

/**
 * Fonction de vérification de l'URL pour voir si un index est passé en param aEND d'afficher directement une ville.
 * A coder par vos soins sur le modèle du mode debug déjà vu ensemble plusieurs fois.
 * Vérifier si le param index est bien un entier et si oui il doit être supérieur à 0.
 * Si l'index n'est pas un entier, mettre une alerte avec "Paramètre incorrect !\nVeuillez vérifier l'index saisi."
 * Si l'index est un entier mais plus petit que 0, mettre une alerte avec "Paramètre incorrect !\nL'index saisi ne peut être plus petit que 0."
 */
function checkIndex() {
    // Codez cette fonction.
}

// App déjà instanciée pour vous. Ne rien toucher.
const worldCities = new WorldCities(document);
worldCities.addEventListener(AbstractAppEventNames.INIT, appInitHandler);

// Tout est instancié, on charge les données. NE RIEN TOUCHER.
loadDatas();