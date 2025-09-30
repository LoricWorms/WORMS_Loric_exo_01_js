const calendrierMatchs = [
  {
    id: 'LFL_KC_SLY',
    jeu: 'League of Legends',
    competition: 'LFL',
    equipeA: 'Karmine Corp',
    equipeB: 'Solary',
    probabiliteA: 0.65, // 65% de chance pour KC
    statut: 'À venir'
  },
  {
    id: 'VCT_VIT_M8',
    jeu: 'Valorant',
    competition: 'VCT EMEA',
    equipeA: 'Team Vitality',
    equipeB: 'Mandatory',
    probabiliteA: 0.55, // 55% de chance pour Vitality
    statut: 'À venir'
  },
  {
    id: 'LFL_GO_BDS',
    jeu: 'League of Legends',
    competition: 'LFL',
    equipeA: 'Gentle Mates',
    equipeB: 'BDS Academy',
    probabiliteA: 0.48, // 48% de chance pour M8, donc BDS est favori
    statut: 'À venir'
  },
  {
    id: 'LFL_KC_M8',
    jeu: 'Valorant',
    competition: 'VCT EMEA',
    equipeA: 'Karmine Corp',
    equipeB: 'Mandatory',
    probabiliteA: 0.52,
    statut: 'À venir'
  }
];

class Match {
    constructor(id, jeu, competition, equipeA, equipeB, probabiliteA, statut) {
        this.id = id;
        this.jeu = jeu;
        this.competition = competition;
        this.equipeA = equipeA;
        this.equipeB = equipeB;
        this.probabiliteA = probabiliteA;
        this.statut = statut;
    }

    getFavori() {
        if (this.probabiliteA > 0.5 ) {
            return this.equipeA;
        } else {
            return this.equipeB;
        }
    }
}

class Plateforme{
    constructor(nom) {
        this.nom = nom;
        this.matchs = [];
    }

    chargerMatchs(matchsACharger) {
        for (let match of matchsACharger) {
            let matchCharge = new Match(match.id, match.jeu, match.competition, match.equipeA, match.equipeB, match.probabiliteA, match.statut);
            this.matchs.push(matchCharge);
        }
    }

    afficherCalendrier() {
        calendrierMatchs.forEach((element) => console.log(element.id, " ", element.equipeA, "vs", element.equipeB, "- Jeu:", element.jeu));
    }

    getMatchsParJeu(jeu) {
        return this.matchs.filter(match => match.jeu === jeu);
    }


    getMatchsRisques() {
        return this.matchs.filter(match => match.probabiliteA >= 0.45 && match.probabiliteA <= 0.55);
    }


    getMatchById(id) {
        return calendrierMatchs.find((match) => match.id == id)
    }
}

let platforme = new Plateforme("esportVision");
console.log("Plateforme créée :", platforme.nom);

platforme.chargerMatchs(calendrierMatchs);
console.log("Matchs chargés :", platforme.matchs);

platforme.afficherCalendrier();

const matchsValorant = platforme.getMatchsParJeu("Valorant");
console.log("Matchs Valorant :", matchsValorant);

const matchsRisques = platforme.getMatchsRisques();
console.log("Matchs à risque :", matchsRisques);

const marchById = platforme.getMatchById("LFL_KC_M8");
console.log("Matchs d'ID LFL_KC_M8 :", marchById);