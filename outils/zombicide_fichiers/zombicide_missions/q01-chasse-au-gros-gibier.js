/* Mission Zombicide — déposer dans zombicide_fichiers/zombicide_missions/
   puis ajouter "q01-chasse-au-gros-gibier.js" à ZBP_MISSION_FILES dans missions.js */
ZBP_MISSION({name:" Q01-Chasse au gros gibier",
  quest:{
   "name": " Q01-Chasse au gros gibier",
   "description": "Nous avons rapidement découvert le point de départ\nde l’invasion de zombies. D’autres survivants\nont aperçu un zombie gigantesque errant dans les rues,\nainsi qu’une sorte de sorcier maléfique guidant la horde pour nous submerger.\nIl nous a fallu deux jours pour localiser le Nécromancien\net comprendre qu’aucune de nos armes ne pouvait\nvenir à bout de l’Abomination. Prenons d’assaut\nle laboratoire du Nécromancien et éliminons-les tous deux grâce à une concoction secrète de notre cru : le Feu de Dragon.\nQue la chasse commence !",
   "goal": "Atteignez ces objectifs dans n'importe quel ordre pour remporter la partie :\n• Éliminez la bête et son maître. Tuez au moins une Abomination\net un Nécromancien.\n• Investissez le laboratoire. Emparez-vous de tous les objectifs.",
   "W": 6,
   "H": 6,
   "map": [
    "AB.CDE",
    "....FG",
    ".HIJKL",
    "......",
    "M.NOOO",
    "M.NOOO"
   ],
   "doors": [
    {
     "x": 0,
     "y": 1,
     "s": "n",
     "color": "grey"
    },
    {
     "x": 2,
     "y": 0,
     "s": "w",
     "color": "grey"
    },
    {
     "x": 3,
     "y": 0,
     "s": "w",
     "color": "grey"
    },
    {
     "x": 2,
     "y": 3,
     "s": "n",
     "color": "grey"
    },
    {
     "x": 3,
     "y": 3,
     "s": "n",
     "color": "grey"
    },
    {
     "x": 5,
     "y": 3,
     "s": "n",
     "color": "grey"
    },
    {
     "x": 5,
     "y": 4,
     "s": "n",
     "color": "grey"
    },
    {
     "x": 2,
     "y": 5,
     "s": "w",
     "color": "grey"
    },
    {
     "x": 1,
     "y": 5,
     "s": "w",
     "color": "grey"
    },
    {
     "x": 0,
     "y": 4,
     "s": "n",
     "color": "grey"
    }
   ],
   "cryptDoors": [
    {
     "x": 5,
     "y": 0,
     "color": "violet"
    },
    {
     "x": 0,
     "y": 4,
     "color": "violet"
    },
    {
     "x": 0,
     "y": 0,
     "color": "jaune"
    },
    {
     "x": 5,
     "y": 5,
     "color": "jaune"
    }
   ],
   "spawns": [
    {
     "x": 2,
     "y": 0,
     "color": "red",
     "side": "n"
    },
    {
     "x": 5,
     "y": 3,
     "color": "red",
     "side": "e"
    },
    {
     "x": 1,
     "y": 5,
     "color": "red",
     "side": "s"
    }
   ],
   "start": {
    "x": 0,
    "y": 2
   },
   "exit": null,
   "objectives": [
    {
     "x": 0,
     "y": 0,
     "hidden": true
    },
    {
     "x": 5,
     "y": 0,
     "hidden": true
    },
    {
     "x": 1,
     "y": 2,
     "hidden": true
    },
    {
     "x": 3,
     "y": 2,
     "hidden": true
    },
    {
     "x": 0,
     "y": 5,
     "hidden": true
    },
    {
     "x": 2,
     "y": 4,
     "hidden": true
    },
    {
     "x": 4,
     "y": 4,
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
     "x": 1,
     "y": 0,
     "s": "w",
     "t": "ouverture"
    },
    {
     "x": 3,
     "y": 0,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 4,
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
     "s": "w",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 0,
     "s": "e",
     "t": "ouverture"
    },
    {
     "x": 4,
     "y": 1,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 1,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 2,
     "y": 2,
     "s": "w",
     "t": "ouverture"
    },
    {
     "x": 3,
     "y": 2,
     "s": "w",
     "t": "ouverture"
    },
    {
     "x": 4,
     "y": 2,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 4,
     "y": 2,
     "s": "w",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 2,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 2,
     "s": "e",
     "t": "ouverture"
    },
    {
     "x": 0,
     "y": 5,
     "s": "w",
     "t": "ouverture"
    },
    {
     "x": 0,
     "y": 5,
     "s": "s",
     "t": "ouverture"
    },
    {
     "x": 2,
     "y": 5,
     "s": "s",
     "t": "ouverture"
    },
    {
     "x": 3,
     "y": 5,
     "s": "w",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 5,
     "s": "e",
     "t": "ouverture"
    }
   ],
   "hiddenBacks": [
    "blue"
   ],
   "objEffects": {
    "blue": [
     {
      "t": "necro"
     }
    ]
   },
   "win": {
    "exit": "none",
    "goals": [
     {
      "label": "",
      "need": [
       "kill:necromancer"
      ]
     },
     {
      "label": "",
      "need": [
       "kill:abomination"
      ]
     },
     {
      "label": "",
      "need": [
       "objectives:all"
      ]
     }
    ]
   },
   "tiles": {
    "0,0": {
     "id": "2R_BP",
     "rot": 1
    },
    "1,0": {
     "id": "8V_BP",
     "rot": 2
    },
    "0,1": {
     "id": "9V_BP",
     "rot": 2
    },
    "1,1": {
     "id": "1V_BP",
     "rot": 0
    }
   }
  }});
