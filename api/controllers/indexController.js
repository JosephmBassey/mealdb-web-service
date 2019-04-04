const fetch = require("node-fetch");

module.exports = {
  getmeals: async (req, res, next) => {
    try {
      let mealData = []
      let mealID = null;
      let lowerBound = 9999999999999;


      const  idArgs = req.params.mealId.split(",");


      for (let mealId of idArgs) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        const json = await response.json();
        if (json.meals == null) {
          res.status(401).json({
            "error": `Please Provide a valid mealId  or visit www.themealdb.com to get mealId .`
          })
        }
        mealData.push(...json.meals);
      }

      mealData.map((item, index) => {
        let keys = Object.keys(item);
        let count = 0;
        keys.map((key, keyIndex) => {
          if (keyIndex > 1 && item[key] !== "")
            count++;
        })
        if (count <= lowerBound) {
          lowerBound = count;
          mealID = item.idMeal
        }
      })
      res.status(200).json({
        "Meal Id with least Ingredient ": mealID,
      })
    } catch (error) {
      res.status(401).json({
        error
      })
    }
  }

}