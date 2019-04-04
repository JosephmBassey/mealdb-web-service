const mealData = [
    {
      "strMeal": "Chicken Couscous",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
      "idMeal": "52850",
      "strIngredient1": "Onion",
      "strIngredient2": "Olive Oil",
      "strIngredient3": "Butter",
      "strIngredient4": "Potatoes",
      "strIngredient5": "Garlic",
      "strIngredient6": "Eggs",
      "strIngredient7": "Parsley",
      "strIngredient8": "Baguette",
      "strIngredient9": "Vine Tomatoes",
      "strIngredient10": "Olive Oil",
      "strIngredient11": "",
      "strIngredient12": "",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": ""
    },
    {
      "strMeal": "Chicken Fajita Mac and Cheese",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",
      "idMeal": "52818",
      "strIngredient1": "Onion",
      "strIngredient2": "Olive Oil",
      "strIngredient3": "Butter",
      "strIngredient4": "Potatoes",
      "strIngredient5": "Garlic",
      "strIngredient6": "Eggs",
      "strIngredient7": "Parsley",
      "strIngredient8": "Baguette",
      "strIngredient9": "Vine Tomatoes",
      "strIngredient10": "Olive Oil",
      "strIngredient11": "",
      "strIngredient12": "",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": ""
    },
    {
      "strMeal": "Chicken Ham and Leek Pie",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg",
      "idMeal": "6123",
      "strIngredient1": "Onion",
      "strIngredient2": "Olive Oil",
      "strIngredient3": "Butter",
      "strIngredient4": "Potatoes",
      "strIngredient5": "Garlic",
      "strIngredient6": "Eggs",
      "strIngredient7": "Parsley",
      "strIngredient8": "Baguette",
      "strIngredient9": "Vine Tomatoes",
      "strIngredient10": "Olive Oil",
      "strIngredient11": "ing test",
      "strIngredient12": "",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "":""
    },


  ]

// const mealIds = [52850, 52818,6123]
let meals = []


mls = Object.keys(mealData).filter(function(key) {
  // mls under 1000000000
  return mealData[key] !== '';
});
console.log(mls);

// Object.keys(mealData).forEach((key)=> {
//    if(mealData[key]){
//   //  console.log(mealData[key]);
//   Object.values()

//   }  })


 // getmeals: async (req, res, next) => {
  //   try{
  //     let mealsData= {}
  //   var idArgs = req.params.mealid.split(",");
  //   idArgs.forEach( async (idArg)=> {
  //   let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idArg}`;
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     res.status(200).json(json);
  //     for(let i =1; i<=idArgs.meals.length; i++){
  //       //   //  if(allI.hasOwnProperty(`strIngredient${i}`)){
  //       //   //    return true
  //       //   //  }

  //   })
  //     } catch (error) {
  //       console.log(error);
  //     }
  // }



// mealData.forEach((meal)=> {

// });
  //  const allI =  foundMeal.map((m)=>
  //  {
  //   //  for(let i =1; i<=20; i++){
  //   //   //  if(allI.hasOwnProperty(`strIngredient${i}`)){
  //   //   //    return true
  //   //   //  }
  //   //   return
  //   //  }
  //   // return Object.keys(m)
  // //   Object.keys(m).forEach((key)=> {
  // //     // if(m[key] !== ''){
  // //     if(m[key] !== '')
  // //     {
  // //       // console.log(key + ': ' + m[key]);
  // //       for(let i =1; i<=20; i++){
  // //         if (Object.keys(m).filter((key)=>{
  // //          return m[key] === "idMeal"

  // //         })) {

  // //         }
  // //         // if(m.hasOwnProperty(`strIngredient${i}`)){
  // //         // }
  // //       }
  // //     }
  // //     // }
  // // });

  //    })
  //    console.log(allI)


// const del = (id )=>{
// var str = "boy, girl, dog, cat";
// var arr = str.split(",");
// console.log(typeof arr[0])


// }

loop the array
loop the