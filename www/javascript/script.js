
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
        // Le tableau d'origines de villes (pour le filtrage)
        this.baseTowns = [];
        // Le tableau de villes
        this.towns = [];
        // Le composant avec les boutons suivant / précécent pour changer l'index des données en cours.
        this.indexer;
        // Le composant avec le champs de filtrage + boutton de réinitialisation.
        this.searchIpt;
    }

    init(dataSource) {
        // Codez cette méthode pour traiter le fichier chargé et initialiser la classe.
        super.init(dataSource);
        this.initTowns(dataSource);
        this.loadTown(0);
    }

    // setter pour définir l'index en cours. Utile lors du passage de l'index dans l'URL pour accéder directement à une ville.
    set index(value) {
        this.index = value; 
    }

    // Initialise le tableau de villes.
    initTowns(dataSource) {
        
    }

    // Affiche le contenu des infos d'une ville dans les champs correspondants.
    loadTown(index) {
        this.loadGallery(this.dataSource[index]);
    }

    // Affiche les images du tableau d'images passés en paramètre à partir de la méthode loadTown().
    loadGallery(images) {

    }

    // Gestionnaire exécuté lors de la saisie d'un texte dans le champs de recherche.
    searchInputHandler() {

    }

    // Gestionnaire exécuté lors de l'effacement du texte du champs de recherche.
    clearSearchInputHandler() {

    }

    // Rafraichit l'app lors du filtrage ou de sa réinitialisation.
    refresh() {

    }

    // Méthode de filtrage du tableau de villes.
    filterElement(arr, filter) {

    }

    // Méthode d'initialisation du composant SearchInput.
    initInput() {

    }

    // Gestionnaire exécuté lors du changement d'index dans le composant indexer.
    indexerIndexChangeHandler() {

    }

    // Méthode d'initialisation du composant Indexer.
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

        // Codez ici les propriétés définies dans le diagramme de classes.
        this.init();
        // propriété pour le binding de searchInputHandler lors de la saisie de texte
        this.boundSearchInputHandler;
        // propriété pour le binding de clearSearchHandler lors de l'effacement de texte
        this.boundClearSearchHandler;

    }

    // getter du composant (surcharge)
    get value() {
        return super.value;
    }

    // setter du composant (surcharge)
    set value(value) {
        super.value = value;
    }

    // Gestionnaire exécuté lors de la saisie de texte. Dispatch un SearchInputEvent de type SearchInputEventNames. SEARCH_INPUT écouté dans l'app.
    searchInputHandler() {
        // Codez cette méthode. Adaptation en classe du TP Citation.
    }

    // Gestionnaire exécuté lors de l'effacement du champs de texte quand on clique sur le bouton d'effacement. Dispatch un SearchInputEvent de type SearchInputEventNames.CLEAR_SEARCH_INPUT écouté dans l'app.
    clearSearchHandler() {
        // Codez cette méthode. Adaptation en classe du TP Citation.
    }

    // Désactive ou active le boutton si le champs de texte est vide ou pas.
    checkClearButton() {
        // Codez cette méthode. Adaptation en classe du TP Citation.
    }

    // Méthode d'initialisation du composant (surcharge)
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

        // Codez ici les propriétés définies dans le diagramme de classes.

        // le total d'éléments.
        this.total;
        // Le mode (répétition, aucun, etc...)
        this.indexerMode = mode;
        // Le bouton suivant
        this.nextBtn = this.querySelector(IndexerDirection.NEXT);
        // Le bouton précédent
        this.previousBtn = this.querySelector(IndexerDirection.PREVIOUS);
        
        this.init();
    }

    // setter pour définir le mode si besoin après initialisation.
    set mode(value) {
        this.indexerMode = value;
    }

    // setter pour définir le total d'éléments. Définit lors du filtrage et la réinitialisation du filtrage
    set totalItems(value) {
        this.total = value;
        this.setNumbers();
    }

    // surcharge pour retourner la valeur du composant.
    get value() {
        return super.value;
    }

    // surcharge pour modifier la valeur du composant.
    set value(value) {
        this.index = value;
        this.checkIndex();
        super.value = value;
    }

    // Méthode d'initialisation du composant (surcharge)
    init() {
        // Appelez ici les méthodes d'initialisation du composant décrites dans le diagrammes de classe.
        super.init();
    }

    // Change l'index en fonction de la direction déterminée par le clic sur les boutons suivant / précédent.
    // Adaptation en méthode de la fonction du TP Citations. Déjà codée pour vous. :)
    changeIndex(direction) {
        direction == indexerDirection.NEXT ? this.index++ : this.index--;
        this.checkIndex();
    }

     // Vérifie l'index en fonction du mode et le remet à 0 si out of range
    checkIndex() {
        // Codez cette méthode. Adaptation en classe du TP Citation.
        if (this.mode == indexerMode.LOOP) {

            const maxIndex = this.totalItems - 1;
            const minIndex = 0;

            if (this.index < minIndex) {
                this.index = maxIndex;
            }

            if (this.index > maxIndex) {
                this.index = minIndex;
            }
            
        }
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
        buttonDiv.className = bool ? "disabled" : "buttonNextPrevious";
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