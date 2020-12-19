const sqlite = require("sqlite3").verbose();
let db = new sqlite.Database("diamond.db", err => {
	if (err) {
		console.log(err.message);
	}
	console.log("connected");
});

// db.get("SELECT id, suit, value FROM cards ORDER BY RANDOM() LIMIT 1;", function(
// 	err,
// 	row
// ) {
// 	if (err) {
// 		return console.log(err.message);
// 	}
// 	return row
// 		? console.log(row.id, row.suit, row.value)
// 		: console.log("thats just not it");
// });

db.get("SELECT options, query FROM user_input WHERE options='hit'", function(
	err,
	row
) {
	if (err) {
		return console.log(err.message);
	}
	return row ? console.log(row.query) : console.log("thats just not it");
});
