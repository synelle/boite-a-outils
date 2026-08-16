/* Mission Zombicide — dossier zombicide_fichiers/zombicide_missions/ */
ZBP_MISSION({name:"Q04-Les bergers",
  quest:{
   "name": "Q04-Les bergers",
   "description": "Les nécromanciens sont partout. Ils sèment le chaos et s'emparent du pouvoir dans tout le royaume ! Face à une telle menace, nous ne pouvons presque rien faire. Presque. Nous savons que nous pouvons survivre tant que nous restons unis.\nNotre plan consiste à partir à la recherche d'autres survivants pour constituer notre propre armée. Cela fait quatre jours que nous faisons route vers le village voisin ; il est actuellement attaqué, mais pas encore totalement submergé. Jetons-nous dans la bataille pour venir en aide à ces gens !",
   "goal": "OBJECTIFS\nSauvez les habitants. Surveillez-les ; certains pourraient être infectés. Vous remportez la partie une fois tous les\nobjectifs atteints.",
   "W": 6,
   "H": 9,
   "map": [
    "A....B",
    "C.DE.F",
    "..GE..",
    "H.IJK.",
    "......",
    "L.M.NO",
    "P.Q.RR",
    "S.....",
    "S.T.UU"
   ],
   "minSurvivors": 6,
   "difficulty": "Moyen",
   "duration": "90 minutes",
   "doors": [
    {
     "x": 0,
     "y": 2,
     "s": "n",
     "color": "grey"
    },
    {
     "x": 0,
     "y": 3,
     "s": "n",
     "color": "grey"
    },
    {
     "x": 0,
     "y": 5,
     "s": "n",
     "color": "grey"
    },
    {
     "x": 3,
     "y": 5,
     "s": "w",
     "color": "grey"
    },
    {
     "x": 4,
     "y": 5,
     "s": "w",
     "color": "grey"
    },
    {
     "x": 4,
     "y": 6,
     "s": "w",
     "color": "grey"
    },
    {
     "x": 3,
     "y": 6,
     "s": "w",
     "color": "grey"
    },
    {
     "x": 4,
     "y": 8,
     "s": "w",
     "color": "grey"
    },
    {
     "x": 3,
     "y": 8,
     "s": "w",
     "color": "grey"
    },
    {
     "x": 3,
     "y": 4,
     "s": "n",
     "color": "grey"
    },
    {
     "x": 2,
     "y": 1,
     "s": "n",
     "color": "grey"
    }
   ],
   "cryptDoors": [
    {
     "x": 0,
     "y": 5,
     "color": "violet"
    },
    {
     "x": 5,
     "y": 8,
     "color": "violet"
    },
    {
     "x": 5,
     "y": 0,
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
     "x": 5,
     "y": 4,
     "color": "red",
     "side": "e"
    },
    {
     "x": 1,
     "y": 0,
     "color": "red",
     "side": "n"
    },
    {
     "x": 1,
     "y": 8,
     "color": "red",
     "side": "s"
    }
   ],
   "start": {
    "x": 0,
    "y": 4
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
     "y": 1,
     "hidden": true
    },
    {
     "x": 3,
     "y": 3,
     "hidden": true
    },
    {
     "x": 5,
     "y": 5,
     "hidden": true
    },
    {
     "x": 2,
     "y": 6,
     "hidden": true
    },
    {
     "x": 2,
     "y": 8,
     "hidden": true
    },
    {
     "x": 0,
     "y": 7,
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
     "x": 5,
     "y": 1,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 2,
     "y": 2,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 3,
     "y": 2,
     "s": "w",
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
     "x": 4,
     "y": 3,
     "s": "w",
     "t": "ouverture"
    },
    {
     "x": 0,
     "y": 5,
     "s": "w",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 5,
     "s": "w",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 5,
     "s": "e",
     "t": "ouverture"
    },
    {
     "x": 0,
     "y": 6,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 2,
     "y": 6,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 6,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 6,
     "s": "e",
     "t": "ouverture"
    },
    {
     "x": 0,
     "y": 7,
     "s": "n",
     "t": "ouverture"
    },
    {
     "x": 0,
     "y": 8,
     "s": "w",
     "t": "ouverture"
    },
    {
     "x": 0,
     "y": 8,
     "s": "s",
     "t": "ouverture"
    },
    {
     "x": 2,
     "y": 8,
     "s": "s",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 8,
     "s": "e",
     "t": "ouverture"
    },
    {
     "x": 5,
     "y": 8,
     "s": "s",
     "t": "ouverture"
    }
   ],
   "hiddenBacks": [
    "green",
    "blue"
   ],
   "objEffects": {
    "green": [
     {
      "t": "zombie"
     }
    ],
    "blue": [
     {
      "t": "zombie"
     }
    ]
   },
   "win": {
    "exit": "none",
    "goals": [
     {
      "label": "Sauvez les habitants.",
      "need": [
       "objectives:all"
      ]
     }
    ]
   },
   "tiles": {
    "0,0": {
     "id": "3V_BP",
     "rot": 0
    },
    "1,0": {
     "id": "1R_BP",
     "rot": 3
    },
    "0,1": {
     "id": "4V_BP",
     "rot": 2
    },
    "1,1": {
     "id": "2R_BP",
     "rot": 1
    },
    "0,2": {
     "id": "5R_BP",
     "rot": 3
    },
    "1,2": {
     "id": "9V_BP",
     "rot": 1
    }
   }
  }});
