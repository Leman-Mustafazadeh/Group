
const app = require('./config/index');

const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use(router);
app.use(router.event);
// app.use(router.tag);
