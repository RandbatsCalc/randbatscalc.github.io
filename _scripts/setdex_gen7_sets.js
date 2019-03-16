//note fix the arceuses and silvallies that don't have a proper set
/*Find out how to properly name stuff
 Formats of adding Pokemon with one set in:
"Pokemon": {
	"Default": {
		"level": 75,
		"evs": {
			"hp": "84",
			"at": "84",
			"df": "84",
			"sa": "84",
			"sd": "84",
			"sp": "84"
		},
		"ivs": {
			"hp": "31",
			"at": "31",
			"df": "31",
			"sa": "31",
			"sd": "31",
			"sp": "31"
		},
		"nature": "Serious",
		"ability": "Defiant",
		"item": "Leftovers",
		"moves": [
			"Tackle",
			"Take Down",
			"Earthquake",
			"Accelerock"
		]
	}
},

Format for adding pokemon with 2 sets in:
"Pokemon": {
	"Default": {
		"level": 75,
		"evs": {
			"hp": "84",
			"at": "84",
			"df": "84",
			"sa": "84",
			"sd": "84",
			"sp": "84"
		},
		"ivs": {
			"hp": "31",
			"at": "31",
			"df": "31",
			"sa": "31",
			"sd": "31",
			"sp": "31"
		},
		"nature": "Serious",
		"ability": "Defiant",
		"item": "Leftovers",
		"moves": [
			"Tackle",
			"Take Down",
			"Earthquake",
			"Accelerock"
		]
	},
	"Mega": {
		"level": 75,
		"evs": {
			"hp": "84",
			"at": "84",
			"df": "84",
			"sa": "84",
			"sd": "84",
			"sp": "84"
		},
		"ivs": {
			"hp": "31",
			"at": "31",
			"df": "31",
			"sa": "31",
			"sd": "31",
			"sp": "31"
		},
		"nature": "Serious",
		"ability": "Defiant",
		"item": "Leftovers",
		"moves": [
			"Tackle",
			"Take Down",
			"Earthquake",
			"Accelerock"
		]
	}
},

*/
var SETDEX_GEN7_SETS = {
	"Abomasnow": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Abomasnow-Mega": {
		"Default": {
			"level": 80,
			"nature": "Serious",
			"ability": "Snow Warning",
			"item": "Abomasite",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Absol": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Absol-Mega": {
		"Default": {
			"level": 78,
			"nature": "Magic Bounce",
			"ability": "Absolite",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Accelgor": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Aegislash": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Aerodactyl": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Aerodactyl-Mega": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Tough Claws",
			"item": "Aerodactylite",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Aggron": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Aggron-Mega": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Filter",
			"item": "Aggronite",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Alakazam": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Alakazam-Mega": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Trace",
			"item": "Alakazite",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Alomomola": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Altaria": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Altaria-Mega": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Ambipom": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Amoonguss": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Ampharos": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Ampharos-Mega": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Mold Breaker",
			"item": "Ampharosite",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Araquanid": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arbok": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arcanine": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus-Bug": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Insect Plate",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus-Fire": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Flame Plate",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus-Water": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Splash Plate",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus-Electric": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Zap Plate",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus-Grass": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Meadow Plate",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus-Ice": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Icicle Plate",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus-Fighting": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Fist-Plate",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus-Poison": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Toxic Plate",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus-Ground": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Earth Plate",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus-Dragon": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Draco Plate",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus-Dark": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Dread Plate",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus-Steel": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Iron Plate",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus-Fairy": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Pixie Plate",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus-Flying": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Sky Plate",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus-Ghost": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Spooky Plate",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus-Psychic": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Mind Plate",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Arceus-Rock": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Multitype",
			"item": "Stone Plate",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Archeops": {
		"Default": {
			"level": 82,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Ariados": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Armaldo": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Aromatisse": {
		"Default": {
			"level": 82,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Articuno": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Greninja-Ash": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Battle Bond",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Audino": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Audino-Mega": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Healer",
			"item": "Audinite",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Aurorus": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Avalugg": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Azelf": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Azumarill": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Huge Power",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Banettite": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Banette-Mega": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Prankster",
			"item": "Banettite",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Barbaracle": {
		"Default": {
			"level": 80,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Basculin": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Bastiodon": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Beartic": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Beautifly": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Beedrill": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Beedrill-Mega": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Adaptability",
			"item": "Beedrilite",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Beheeyem": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Bellossom": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Bewear": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Bibarel": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Bisharp": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Blacephalon": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Blastoise": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Blastoise-Mega": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Mega Launcher",
			"item": "Blastoisinite",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Blaziken": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Blaziken-Mega": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Speed Boost",
			"item": "Blazikenite",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Blissey": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Bouffalant": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Braviary": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Breloom": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Bronzong": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		},
		"Gyro Ball": {
			"level": 79,
			"evs": {
				"sd": "84",
				"sp": "0"
			},
			"ivs": {
				"sd": "31",
				"sp": "0"
			},
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Bruxish": {
		"Default": {
			"level": 80,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Butterfree": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Buzzwole": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Cacturne": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Camerupt": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Camerupt-Mega": {
		"Default": {
			"level": 80,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Carbink": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Carnivine": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Carracosta": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Castform": {
		"Default": {
			"level": 100,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Castform-Rainy": {
		"Default": {
			"level": 100,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Castform-Sunny": {
		"Default": {
			"level": 100,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Castform-Snowy": {
		"Default": {
			"level": 100,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Celebi": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Celesteela": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Charizard": {
		"Default": {
			"level": 82,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Charizard-Mega-X": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Tough Claws",
			"item": "Charizardite-X"
		}
	},

	"Charizard-Mega-Y": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Drought",
			"item": "Charizardite-Y"
		}
	},

	"Chatot": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Cherrim": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Chesnaught": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Chimecho": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Cinccino": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Clawitzer": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Claydol": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Clefable": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Cloyster": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Cobalion": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Cofagrigus": {
		"Default": {
			"level": 80,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Comfey": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Conkeldurr": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Corsola": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Crabominable": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Cradily": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Crawdaunt": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Cresselia": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Crobat": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Crustle": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Cryogonal": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Darkrai": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Darmanitan": {
		"Default": {
			"level": 78,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Decidueye": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Dedenne": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Delcatty": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Delibird": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Delphox": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Deoxys": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Deoxys-A": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Deoxys-D": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Deoxys-S": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Dewgong": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Dhelmise": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Dialga": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Diancie": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Diancie-Mega": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Magic Bounce",
			"item": "Diancite"
		}
	},

	"Diggersby": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Ditto": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"(No Move)"
			]
		}
	},
	"Dodrio": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Donphan": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Doublade": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Eviolite",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Dragalge": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Dragonite": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Drampa": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Drapion": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Drifblim": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Druddigon": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Dugtrio": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Dugtrio-Alola": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Dunsparce": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Durant": {
		"Default": {
			"level": 78,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Dusknoir": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Dustox": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Eelektross": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Electivire": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Electrode": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Emboar": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Emolga": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Empoleon": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Entei": {
		"Default": {
			"level": 78,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Escavalier": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Espeon": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Excadrill": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Exeggutor": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Exeggutor-Alola": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Exploud": {
		"Default": {
			"level": 80,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Farfetch'd": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Fearow": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Feraligatr": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Ferrothorn": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Flareon": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Floatzel": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Floette-E": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Florges": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Flygon": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Forretress": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Froslass": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Furfrou": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Furret": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Gallade": {
		"Default": {
			"level": 82,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Gallade-Mega": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Inner Focus",
			"item": "Galladite"
		}
	},

	"Galvantula": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Garbodor": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Garchomp": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Garchomp-Mega": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Sand Force",
			"item": "Garchompite"
		}
	},

	"Gardevoir": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Gardevoir-Mega": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Pixilate",
			"item": "Gardevoirite"
		}
	},

	"Gastrodon": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Genesect": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Gengar": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Gengar-Mega": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Shadow Tag",
			"item": "Gengarite"
		}
	},

	"Gigalith": {
		"Default": {
			"level": 80,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Girafarig": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Giratina": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Giratina-O": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Griseous Orb",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Glaceon": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Glalie": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Glalie-Mega": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Refrigerate",
			"item": "Glalitite"
		}
	},

	"Gligar": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Gliscor": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Gogoat": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Golbat": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Golduck": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Golem": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Golem-Alola": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Golisopod": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Golurk": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Goodra": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Gorebyss": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Gothitelle": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Gourgeist-Average": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Gourgeist-Large": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Gourgeist-Small": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Gourgeist-Super": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Granbull": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Greninja": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Groudon": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Groudon-Primal": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Desolate Land",
			"item": "Red Orb"
		}
	},

	"Grumpig": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Gumshoos": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Gurdurr": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Guzzlord": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Gyarados": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Gyarados-Mega": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Mold Breaker",
			"item": "Gyaradosite"
		}
	},

	"Hariyama": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Hawlucha": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Haxorus": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Heatmor": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Heatran": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Heliolisk": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Heracross": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Heracross-Mega": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Skill Link",
			"item": "Heracronite"
		}
	},

	"Hippowdon": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Hitmonchan": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Hitmonlee": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Hitmontop": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Ho-Oh": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Honchkrow": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Hoopa": {
		"Default": {
			"level": 80,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Hoopa-Unbound": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Houndoom": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Houndoom-Mega": {
		"Default": {
			"level": 78,
			"nature": "Serious",
			"ability": "Solar Power",
			"item": "Houndoominite"
		}
	},

	"Huntail": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Hydreigon": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Hypno": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Illumise": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Incineroar": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Infernape": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Jellicent": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Jirachi": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Jolteon": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Jumpluff": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Jynx": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Kabutops": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Kangaskhan": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Kangaskhan-Mega": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "ParentalBond",
			"item": "Kangaskhanite"
		}
	},

	"Kartana": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Kecleon": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Keldeo": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Kingdra": {
		"Default": {
			"level": 80,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Kingler": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Klefki": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Klinklang": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Komala": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Kommo-o": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Kricketune": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Krookodile": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Kyogre": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Kyogre-Primal": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Primordial Sea",
			"item": "Blue Orb"
		}
	},

	"Kyurem": {
		"Default": {
			"level": 78,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Kyurem-B": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Kyurem-W": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Landorus": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Landorus-T": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Lanturn": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Lapras": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Latias": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Latias-Mega": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Levitate",
			"item": "Latiasite"
		}
	},

	"Latios": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Latios-Mega": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Levitate",
			"item": "Latiosite"
		}
	},

	"Leafeon": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Leavanny": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Ledian": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Lickilicky": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Liepard": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Lilligant": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Linoone": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Lopunny": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Lopunny-Mega": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Lucario": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Lucario-Mega": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Adaptability",
			"item": "Lucarionite"
		}
	},

	"Ludicolo": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Lugia": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Lumineon": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Lunala": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Lunatone": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Lurantis": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Luvdisc": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Luxray": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Lycanroc-Day": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Lycanroc-Dusk": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Tough Claws",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Lycanroc-Night": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Machamp": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Magcargo": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Magearna": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Magmortar": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Magnezone": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Malamar": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Mamoswine": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Manaphy": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Mandibuzz": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Manectric": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Manectric-Mega": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Intimidate",
			"item": "Manectite"
		}
	},

	"Mantine": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Maractus": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Marowak": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Marowak-Alola": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Marshadow": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Masquerain": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Mawile": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Mawile-Mega": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Huge Power",
			"item": "Mawilite"
		}
	},

	"Medicham": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Medicham-Mega": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Pure Power",
			"item": "Medichamite"
		}
	},

	"Meganium": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Meloetta": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Meloetta-Pirouette": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Meowstic": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		},
		"Meowstic-F": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Mesprit": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Metagross": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Metagross-Mega": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Tough Claws",
			"item": "Metagrossite"
		}
	},

	"Mew": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Mewtwo": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Mewtwo-Mega-X": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Steadfast",
			"item": "Mewtwonite-X"
		}
	},

	"Mewtwo-Mega-Y": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Insomnia",
			"item": "Mewtwonite-Y"
		}
	},

	"Mienshao": {
		"Default": {
			"level": 78,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Mightyena": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Milotic": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Miltank": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Mimikyu": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Minior": {
		"Default": {
			"level": 82,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Minun": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Mismagius": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Moltres": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Mothim": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Mr. Mime": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Mudsdale": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Muk": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Muk-Alola": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Musharna": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Naganadel": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Necrozma": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Necrozma-Dusk-Mane": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Necrozma-Dawn-Wings": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Necrozma-Ultra": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Neuroforce",
			"item": "Ultranecronium-Z"
		}
	},

	"Nidoking": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Nidoqueen": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Nihilego": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Ninetales": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Ninetales-Alola": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Ninjask": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Noctowl": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Noivern": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Octillery": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Omastar": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Oranguru": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Oricorio-Electric": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Oricorio-Fire": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Oricorio-Ghost": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Oricorio-Psychic": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Pachirisu": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Palkia": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Palossand": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Pangoro": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Parasect": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Passimian": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Pelipper": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Persian": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Persian-Alola": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Pheromosa": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Phione": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Pidgeot": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Pidgeot-Mega": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "No Guard",
			"item": "Pidgeotite"
		}
	},

	"Pinsir": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Pinsir-Mega": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Aerilate",
			"item": "Pinsirite"
		}
	},

	"Plusle": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Politoed": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Poliwrath": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Porygon-Z": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Porygon2": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Primarina": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Primeape": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Probopass": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Purugly": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Pyroar": {
		"Default": {
			"level": 82,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Pyukumuku": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Quagsire": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Qwilfish": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Raichu": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Raichu-Alola": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Raikou": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Rampardos": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Rapidash": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Raticate": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Raticate-Alola": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Rayquaza": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Regice": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Regigigas": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Regirock": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Registeel": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Relicanth": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Reshiram": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Reuniclus": {
		"Default": {
			"level": 78,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Rhyperior": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Ribombee": {
		"Default": {
			"level": 80,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Roserade": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Rotom": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Rotom-C": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Rotom-F": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Rotom-H": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Rotom-S": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Rotom-W": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Sableye": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Sableye-Mega": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Magic Bounce",
			"item": "Sablenite"
		}
	},

	"Salamence": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Salamence-Mega": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Aerilate",
			"item": "Salamencite"
		}
	},

	"Salazzle": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Samurott": {
		"Default": {
			"level": 82,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Sandslash": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Sandslash-Alola": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Sawk": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Sawsbuck": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Sceptile": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Sceptile-Mega": {
		"Default": {
			"level": 78,
			"nature": "Serious",
			"ability": "Lightning Rod",
			"item": "Sceptilite"
		}
	},

	"Scizor": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Scizor-Mega": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Technician",
			"item": "Scizorite"
		}
	},

	"Scolipede": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Scrafty": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Scyther": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Seaking": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Seismitoad": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Serperior": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Seviper": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Sharpedo": {
		"Default": {
			"level": 78,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Sharpedo-Mega": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Shaymin": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Shaymin-S": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Shedinja": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Shiftry": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Shiinotic": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Shuckle": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Sigilyph": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally-Fire": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally-Water": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally-Electric": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally-Grass": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally-Ice": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally-Fighting": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally-Poison": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally-Ground": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally-Flying": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally-Psychic": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally-Bug": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally-Rock": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally-Ghost": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally-Dragon": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally-Dark": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally-Steel": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Silvally-Fairy": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Simipour": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Simisage": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Simisear": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Skarmory": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Skuntank": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Slaking": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Slowbro": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Slowbro-Mega": {
		"Default": {
			"level": 78,
			"nature": "Serious",
			"ability": "Shell Armor",
			"item": "Slowbronite"
		}
	},

	"Slowking": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		},
		"Trick Room": {
			"level": 81,
			"evs": {
				"sd": "84",
				"sp": "0"
			},
			"ivs": {
				"sd": "31",
				"sp": "0"
			},
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Slurpuff": {
		"Default": {
			"level": 80,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Smeargle": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Snorlax": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Solgaleo": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Solrock": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Spinda": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		},
		"Trick Room": {
			"level": 83,
			"evs": {
				"sd": "84",
				"sp": "0"
			},
			"ivs": {
				"sd": "31",
				"sp": "0"
			},
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Spiritomb": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Stakataka": {
		"Default": {
			"level": 78,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		},
		"Trick Room and/or Gyro Ball": {
			"level": 78,
			"evs": {
				"sd": "85",
				"sp": "0"
			},
			"ivs": {
				"sd": "31",
				"sp": "0"
			},
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Stantler": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Staraptor": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Starmie": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Steelix": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Steelix-Mega": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Sand Force",
			"item": "Steelixite"
		}
	},

	"Stoutland": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Stunfisk": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Sudowoodo": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Suicune": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Sunflora": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Swalot": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Swampert": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Swampert-Mega": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Swift Swim",
			"item": "Swampertite"
		}
	},

	"Swanna": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Swellow": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Swoobat": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Sylveon": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Talonflame": {
		"Default": {
			"level": 78,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Tangrowth": {
		"Default": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Tapu Bulu": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Tapu Fini": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Tapu Koko": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Tapu Lele": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Tauros": {
		"Default": {
			"level": 82,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Tentacruel": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Terrakion": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Throh": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Thundurus": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Thundurus-T": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Togedemaru": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Togekiss": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Torkoal": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Tornadus": {
		"Default": {
			"level": 78,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Tornadus-T": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Torterra": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Toucannon": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Toxapex": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Toxicroak": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Trevenant": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Tropius": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Tsareena": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Turtonator": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Type\: Null": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Battle Armor",
			"item": "Eviolite",
			"moves": [
				"Return",
				"Swords Dance",
				"U-Turn",
				"Rest"
			]
		}
	},

	"Typhlosion": {
		"Default": {
			"level": 82,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Tyranitar": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Tyranitar-Mega": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Sand Stream",
			"item": "Tyranitarite"
		}
	},

	"Tyrantrum": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Umbreon": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Unfezant": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Unown": {
		"Default": {
			"level": 100,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Ursaring": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Uxie": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Vanilluxe": {
		"Default": {
			"level": 80,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Vaporeon": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Venomoth": {
		"Default": {
			"level": 78,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Venusaur": {
		"Default": {
			"level": 80,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Venusaur-Mega": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Thick Fat",
			"item": "Venusaurite"
		}
	},

	"Vespiquen": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Victini": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Victreebel": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Vikavolt": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Vileplume": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Virizion": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Vivillon": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Volbeat": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Volcanion": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Volcarona": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Wailord": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Walrein": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Watchog": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Weavile": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Weezing": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Whimsicott": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Whiscash": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Wigglytuff": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Wishiwashi-School": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Schooling",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Wishiwashi-Solo": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Schooling",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Wobbuffet": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Wormadam": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Wormadam-G": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Wormadam-S": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		},
		"Gyro Ball": {
			"level": 83,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Xatu": {
		"Default": {
			"level": 81,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Xerneas": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Xurkitree": {
		"Default": {
			"level": 76,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Yanmega": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Yveltal": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Zangoose": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Zapdos": {
		"Default": {
			"level": 75,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Zebstrika": {
		"Default": {
			"level": 84,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Zekrom": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Zeraora": {
		"Default": {
			"level": 77,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Zoroark": {
		"Default": {
			"level": 78,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers",
			"moves": [
				"Tackle",
				"Take Down",
				"Earthquake",
				"Accelerock"
			]
		}
	},

	"Zygarde": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Zygarde-10%": {
		"Default": {
			"level": 79,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	},

	"Zygarde-Complete": {
		"Default": {
			"level": 73,
			"nature": "Serious",
			"ability": "Defiant",
			"item": "Leftovers"
		}
	}
};
