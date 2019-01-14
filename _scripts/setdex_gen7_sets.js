//note fix the arceuses and silvallies that don't have a proper set
/*Find out how to properly name stuff
 Formats of adding Pokemon with one set in:
"Pokemon": {
	"Default": {"level": 83, "evs": {"hp": "84", "at": "84", "df": "84", "sa": "84", "sd": "84", "sp": "84"}, "nature": "Serious", "ability": "Defiant", "item": "Leftovers", "moves": ["Tackle", "Take Down", "Earthquake", "Accelerock"]}
},

Format for adding pokemon with 2 sets in:
"Pokemon": {
	"Defaults": {"level": 83, "evs": {"hp": "84", "at": "84", "df": "84", "sa": "84", "sd": "84", "sp": "84"}, "nature": "Serious", "ability": "Defiant", "item": "Leftovers", "moves": ["Tackle", "Take Down", "Earthquake", "Accelerock"]},
	"Mega": {"level": 83, "evs": {"hp": "84", "at": "84", "df": "84", "sa": "84", "sd": "84", "sp": "84"}, "nature": "Serious", "ability": "Defiant", "item": "Leftovers", "moves": ["Tackle", "Take Down", "Earthquake", "Accelerock"]}
},


*/
var SETDEX_GEN7_SETS = {
	"Abomasnow": {
		"Default": {"level": 83, "evs": {"hp": "84", "at": "84", "df": "84", "sa": "84", "sd": "84", "sp": "84"}, "nature": "Serious", "ability": "Defiant", "item": "Leftovers", "moves": ["Tackle", "Take Down", "Earthquake", "Accelerock"]},
		"Mega": {"level": 80, "evs": {"hp": "84", "at": "84", "df": "84", "sa": "84", "sd": "84", "sp": "84"}, "nature": "Serious", "ability": "Snow Warning", "item": "Abomasite", "moves": ["Tackle", "Take Down", "Earthquake", "Accelerock"]}
	},

	"Zygarde": {
		"50%": {"level": 75, "evs": {"hp": "84", "at": "84", "df": "84", "sa": "84", "sd": "84", "sp": "84"}, "nature": "Serious", "ability": "Defiant", "item": "Leftovers", "moves": ["Tackle", "Take Down", "Earthquake", "Accelerock"]},
		"10%": {"level": 79, "evs": {"hp": "84", "at": "84", "df": "84", "sa": "84", "sd": "84", "sp": "84"}, "nature": "Serious", "ability": "Defiant", "item": "Leftovers", "moves": ["Tackle", "Take Down", "Earthquake", "Accelerock"]},
		"Complete": {"level": 73, "evs": {"hp": "84", "at": "84", "df": "84", "sa": "84", "sd": "84", "sp": "84"}, "nature": "Serious", "ability": "Power Construct", "item": "Leftovers", "moves": ["Tackle", "Take Down", "Earthquake", "Accelerock"]}
	}
};
