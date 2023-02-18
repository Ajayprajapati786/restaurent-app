import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (<div><h1 style={{color:'black'}}>{meal.name}</h1>  <p style={{fontStyle:'italic'}}>{meal.description}</p> <p style={{color:'brown',fontWeight:'900'}}> $ {meal.price}</p> </div>);
  });

  return (
    <section className={classes.meals}>
      <ul style={{background:'white',padding:'10px', borderRadius:'15px'}}>{mealsList}</ul>
      {console.log(mealsList)}
    </section>
  );
};

export default AvailableMeals;
