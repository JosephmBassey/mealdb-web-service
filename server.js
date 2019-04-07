const   express    = require('express');
const   bodyParser = require('body-parser');
const   api        = require('./api/routes/indexRoute');
require('dotenv').config();

const app = express();


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use('/api/v1', api)

app.get('/', (req, res) => {
  res.status(200).json({msg:'Welcome',
                        API_endPoint: `http://localhost:4000/api/v1/getmeals/{mealIds}`,
                        Note: ` 'mealIds' should be substituted for meal Id from https://www.themealdb.com, for multiple separate with ',' e.g http://localhost:4000/api/v1/getmeals/52892,52850,52876`
});
});
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server Runining On port ${port}`);
});

