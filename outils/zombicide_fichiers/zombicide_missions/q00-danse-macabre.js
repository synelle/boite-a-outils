/* Mission Zombicide — déposer dans zombicide_fichiers/zombicide_missions/
   puis ajouter "q00-danse-macabre.js" à ZBP_MISSION_FILES dans missions.js */
ZBP_MISSION({name:"Q00-Danse macabre",
  quest:{
   "name": "Q00-Danse macabre",
   "description": "La guerre ne nous est pas étrangère. Nos comtes et nos ducs passent leur temps à se battre entre eux. Pour les paysans, cela se résume généralement à une modification des impôts et des fermages, à condition de survivre. Mais cette fois, le duc et son armée sont partis pour ne plus jamais réapparaître.\nEnfin, pas avant l'arrivée des hordes. Je suis prêt à parier que bon nombre des plus redoutables d'entre elles sont issues de ses troupes. Aujourd'hui, tout n'est que chaos et brutalité. Nous sommes tous égaux face à la danse macabre. Inutile de faire preuve de snobisme social quand les hordes frappent à votre porte.\nNous faisons front commun et renvoyons la mort à la figure de nos ennemis. Le magicien parmi nous en est le parfait exemple. Il était autrefois immensément riche, puissant et influent. Aujourd'hui, il est l'un des nôtres et s'accroche à la vie de toutes ses forces.\nIl maîtrise un cercle magique capable de nous exfiltrer. Mieux vaut fuir pour contre-attaquer que de rester ici et se faire submerger. Mais il reste peut-être quelques âmes à sauver, et nous ne serions pas contre une ou deux armes plus efficaces. Il maintiendra le sort jusqu'à la dernière seconde.\nUn homme bien, qui ne prend pas les autres de haut.",
   "goal": "Utilisez le cercle magique pour vous téléporter en lieu sûr.\nRejoignez la zone de sortie avec tous les survivants. Tout survivant peut s'échapper par cette zone à la fin de son tour, à condition qu'aucun zombie ne s'y trouve.",
   "W": 6,
   "H": 3,
   "map": [
    "AABC.D",
    "..B...",
    "E.FG.H"
   ],
   "minSurvivors": 4,
   "difficulty": "Facile",
   "duration": "45 minutes",
   "doors": [
    {
     "x": 1,
     "y": 1,
     "s": "n",
     "color": "blue"
    },
    {
     "x": 5,
     "y": 0,
     "s": "w",
     "color": "green"
    },
    {
     "x": 1,
     "y": 2,
     "s": "w",
     "color": "grey",
     "open": true
    },
    {
     "x": 2,
     "y": 0,
     "s": "w",
     "color": "grey"
    },
    {
     "x": 2,
     "y": 2,
     "s": "n",
     "color": "grey"
    },
    {
     "x": 5,
     "y": 2,
     "s": "w",
     "color": "grey"
    }
   ],
   "cryptDoors": [
    {
     "x": 3,
     "y": 2,
     "color": "jaune"
    },
    {
     "x": 5,
     "y": 2,
     "color": "jaune"
    }
   ],
   "spawns": [
    {
     "x": 0,
     "y": 1,
     "color": "red",
     "side": "w"
    },
    {
     "x": 4,
     "y": 0,
     "color": "green",
     "side": "n"
    }
   ],
   "start": {
    "x": 1,
    "y": 2
   },
   "exit": {
    "x": 5,
    "y": 0,
    "side": "n"
   },
   "objectives": [
    {
     "x": 0,
     "y": 2,
     "color": "blue"
    },
    {
     "x": 5,
     "y": 1,
     "hidden": true
    },
    {
     "x": 3,
     "y": 1,
     "hidden": true
    }
   ],
   "limits": [
    {
     "x": 0,
     "y": 0,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 0,
     "y": 0,
     "s": "w",
     "t": "ouverture"
    },
    {
     "x": 2,
     "y": 0,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 3,
     "y": 0,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 3,
     "y": 0,
     "s": "w",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 0,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 0,
     "s": "e",
     "t": "ouverture"
    },
    {
     "x": 0,
     "y": 2,
     "s": "w",
     "t": "ouverture"
    },
    {
     "x": 0,
     "y": 2,
     "s": "s",
     "t": "ouverture"
    },
    {
     "x": 2,
     "y": 2,
     "s": "s",
     "t": "ouverture"
    },
    {
     "x": 3,
     "y": 2,
     "s": "w",
     "t": "ouverture"
    },
    {
     "x": 3,
     "y": 2,
     "s": "s",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 2,
     "s": "e",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 2,
     "s": "s",
     "t": "ouverture"
    }
   ],
   "zombies": [
    {
     "x": 1,
     "y": 1,
     "t": "walker",
     "n": 1
    },
    {
     "x": 2,
     "y": 2,
     "t": "runner",
     "n": 1
    },
    {
     "x": 2,
     "y": 0,
     "t": "brute",
     "n": 1
    }
   ],
   "hiddenBacks": [
    "green"
   ],
   "locks": {
    "spawns": {
     "green": "objective:green"
    },
    "doors": {
     "blue": "objective:blue",
     "green": "objective:green"
    }
   },
   "win": {
    "exit": "all"
   },
   "tiles": {
    "1,0": {
     "id": "4V_BP",
     "rot": 3
    },
    "0,0": {
     "id": "9R_BP",
     "rot": 0
    }
   }
  }});
