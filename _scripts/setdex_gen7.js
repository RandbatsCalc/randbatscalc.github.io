/* smoochyena wrote this hello
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

*/

var SETDEX_GEN7 = {};

var components = [
	SETDEX_GEN7_SETS,
	SETDEX_CUSTOM
];

for (var i = 0; i < components.length; i++) {
	var sourceDex = components[i];
	if (sourceDex) {
		for (var p in sourceDex) {
			if (sourceDex.hasOwnProperty(p)) {
				SETDEX_GEN7[p] = $.extend(SETDEX_GEN7[p], sourceDex[p]);
			}
		}
	}
}

var reloadSMScript = function () {
	console.log(SETDEX_CUSTOM);
	components = [
		SETDEX_GEN7_SETS,
		SETDEX_CUSTOM
	];

	for (var i = 0; i < components.length; i++) {
		sourceDex = components[i];
		if (sourceDex) {
			for (var p in sourceDex) {
				if (sourceDex.hasOwnProperty(p)) {
					SETDEX_GEN7[p] = $.extend(SETDEX_GEN7[p], sourceDex[p]);
				}
			}
		}
	}
};
