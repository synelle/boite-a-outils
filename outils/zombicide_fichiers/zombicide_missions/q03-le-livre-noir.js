/* Mission Zombicide — déposer dans zombicide_fichiers/zombicide_missions/
   puis ajouter "q03-le-livre-noir.js" à ZBP_MISSION_FILES dans missions.js */
ZBP_MISSION({name:"Q03-Le livre noir",
  quest:{
   "name": "Q03-Le livre noir",
   "description": "Maintenant, nous le savons : notre village n’est pas le seul touché.\nL’épidémie de zombies s’est propagée à travers tout le pays.\nQue se passe-t-il ? Le Nécromancien que nous avons abattu avait laissé des notes dans son laboratoire ; la plupart faisaient référence à un mystérieux Livre Noir et à d’autres objets de pouvoir.\nExplorer les environs pourrait nous aider à mieux comprendre la menace à laquelle nous sommes confrontés.\nBien sûr, des zombies croiseront notre route : des visages familiers transformés en monstres...\nHé, celui-là me devait de l’argent !",
   "goal": "Atteignez ces objectifs dans n'importe quel ordre pour remporter la partie :\n• Volez le Livre Noir. Emparez-vous de l'objectif situé dans le bâtiment central (tuile 8R).\n• Récupérez les artefacts. Emparez-vous des deux artefacts du coffre-fort.\n• Ressentez la puissance. Atteignez le niveau de danger Rouge avec au moins un Survivant.",
   "W": 6,
   "H": 6,
   "map": [
    "A.BC.D",
    "E....D",
    "E.FG.H",
    "I.JK.L",
    "......",
    "M.NO.P"
   ],
   "minSurvivors": 6,
   "difficulty": "Facile",
   "duration": "60 minutes",
   "doors": [
    {
     "x": 2,
     "y": 0,
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
     "x": 2,
     "y": 5,
     "s": "w",
     "color": "grey"
    },
    {
     "x": 5,
     "y": 5,
     "s": "w",
     "color": "grey"
    },
    {
     "x": 5,
     "y": 4,
     "s": "n",
     "color": "blue"
    },
    {
     "x": 0,
     "y": 4,
     "s": "n",
     "color": "green"
    }
   ],
   "cryptDoors": [
    {
     "x": 5,
     "y": 0,
     "color": "violet"
    },
    {
     "x": 3,
     "y": 2,
     "color": "violet"
    },
    {
     "x": 2,
     "y": 3,
     "color": "jaune"
    },
    {
     "x": 0,
     "y": 3,
     "color": "jaune"
    }
   ],
   "spawns": [
    {
     "x": 1,
     "y": 0,
     "color": "green",
     "side": "n"
    },
    {
     "x": 4,
     "y": 0,
     "color": "red",
     "side": "n"
    },
    {
     "x": 5,
     "y": 4,
     "color": "red",
     "side": "e"
    },
    {
     "x": 0,
     "y": 4,
     "color": "red",
     "side": "w"
    }
   ],
   "start": {
    "x": 1,
    "y": 2
   },
   "exit": null,
   "objectives": [
    {
     "x": 3,
     "y": 0,
     "hidden": true
    },
    {
     "x": 2,
     "y": 2,
     "hidden": true
    },
    {
     "x": 3,
     "y": 5,
     "hidden": true
    },
    {
     "x": 5,
     "y": 5,
     "hidden": true
    },
    {
     "x": 0,
     "y": 5,
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
     "y": 1,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 0,
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
     "x": 5,
     "y": 2,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 0,
     "y": 3,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 0,
     "y": 3,
     "s": "w",
     "t": "ouverture"
    },
    {
     "x": 2,
     "y": 3,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 3,
     "y": 3,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 3,
     "y": 3,
     "s": "w",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 3,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 3,
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
     "x": 3,
     "y": 5,
     "s": "s",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 5,
     "s": "e",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 5,
     "s": "s",
     "t": "ouverture"
    }
   ],
   "hiddenBacks": [
    "green",
    "blue"
   ],
   "locks": {
    "spawns": {
     "green": "objective:green"
    },
    "doors": {
     "green": "objective:green",
     "blue": "objective:blue"
    }
   },
   "win": {
    "exit": "none",
    "goals": [
     {
      "label": "Récupérez les artefacts",
      "need": [
       "vault:all"
      ]
     },
     {
      "label": "Volez le Livre Noir",
      "need": [
       "objective:at:2,2"
      ]
     },
     {
      "label": "Ressentez la puissance",
      "need": [
       "danger:red"
      ]
     }
    ]
   },
   "tiles": {
    "0,0": {
     "id": "8R_BP",
     "rot": 3
    },
    "1,0": {
     "id": "5R_BP",
     "rot": 1
    },
    "0,1": {
     "id": "4V_BP",
     "rot": 2
    },
    "1,1": {
     "id": "7V_BP",
     "rot": 3
    }
   }
  }});
