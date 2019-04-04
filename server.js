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
                        API_endPoint: `${req.hostname}/api/v1/getmeals/`,
                        Note: ` 'mealId' should be substituted for meal Id from www.themealdb.com, for multiple separate with ',' e.g ${req.hostname}/api/v1/getmeals/52892,52850,52876`
});
});
app.listen(8080, () => {
  console.log(`Server Runining On port 8080`);
});

//Run app, then load http://localhost:port in a browser to see the output.