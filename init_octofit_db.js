const db = connect("127.0.0.1:27017/octofit_db");
db.createCollection("users");
db.createCollection("teams");
db.createCollection("activity");
db.createCollection("leaderboard");
db.createCollection("workouts");
db.users.createIndex({ email: 1 }, { unique: true });