const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./utils/db");
const User = require("./models/User");
const Capital = require("./models/Capital");
const userRouter = require("./routes/users");
const capitalsRouter = require("./routes/capitals");

const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());

//Tworzenie relacji
//1 (user) do wiele (capitals)
User.hasMany(Capital, { foreignKey: "userId" });
Capital.belongsTo(User, { foreignKey: "userId" });

//1 do wiele
//1 (capitalType) do wiele (capitals)
// CapitalType.hasMany(Capital, { foreignKey: "capitalTypeId" });
// Capital.belongsTo(CapitalType, { foreignKey: "capitalTypeId" });

app.get("/", function (req, res) {
  res.send("Hello world");
});

app.use("/users", userRouter);
app.use("/capitals", capitalsRouter);

db
  // .sync({force: true})     //-> do zmiany struktury obecnych tabel
  .sync()
  .then(() => {
    console.log("Sequelize OK");
  });

app.listen(PORT, function () {
  console.log("Example app listening on port" + PORT);
});
