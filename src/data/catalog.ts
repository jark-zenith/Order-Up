export type Category="Signatures"|"Bowls"|"Bakery"|"Breakfast"|"Kids";
export type Product={id:string;name:string;category:Category;badge:string;description:string;price:number|null;image:string;available:boolean};

export const categories=["All","Signatures","Bowls","Bakery","Breakfast","Kids"] as const;

export const initialProducts:Product[]=[
{id:"shawarma",name:"Shawarma",category:"Signatures",badge:"House favourite",description:"Slow-marinated chicken or beef, garlic sauce, pickles, and crisp veg — rolled hot off the grill.",price:null,image:"/food-placeholder.svg",available:true},
{id:"wrap-burger",name:"Wrap 'n Burger",category:"Signatures",badge:"Grill",description:"Smashed beef patty, melted cheddar, house sauce, brioche bun.",price:null,image:"/food-placeholder.svg",available:true},
{id:"street-tacos",name:"Street Tacos",category:"Signatures",badge:"Handheld",description:"Three warm tortillas with seasoned meat, salsa fresca, cheese and cilantro-lime crema.",price:null,image:"/food-placeholder.svg",available:true},
{id:"quesadilla",name:"Quesadilla",category:"Signatures",badge:"Grilled",description:"Golden griddled tortilla, blistered cheese blend, choice of protein and roasted salsa.",price:null,image:"/food-placeholder.svg",available:true},
{id:"taco-bowl",name:"Taco Bowl",category:"Bowls",badge:"Loaded",description:"Crispy tortilla shell, cilantro-lime rice, black beans, corn salsa, protein and toppings.",price:null,image:"/food-placeholder.svg",available:true},
{id:"protein-bowl",name:"Protein Bowl",category:"Bowls",badge:"High protein",description:"Quinoa or brown rice, double protein, roasted veg, avocado and greens.",price:null,image:"/food-placeholder.svg",available:true},
{id:"chopped-salad",name:"Chopped Salad",category:"Bowls",badge:"Fresh",description:"Romaine, grilled chicken, tomato, corn, feta, avocado and citrus vinaigrette.",price:null,image:"/food-placeholder.svg",available:true},
{id:"meat-pie",name:"Meat Pie",category:"Bakery",badge:"Baked fresh",description:"Flaky butter crust with savoury minced beef and vegetable filling.",price:null,image:"/food-placeholder.svg",available:true},
{id:"soft-rolls",name:"Soft Rolls",category:"Bakery",badge:"From the oven",description:"Pillowy sweet rolls made for tea or the road.",price:null,image:"/food-placeholder.svg",available:true},
{id:"sausage-rolls",name:"Sausage Rolls",category:"Bakery",badge:"Snack",description:"Golden puff pastry wrapped around seasoned sausage.",price:null,image:"/food-placeholder.svg",available:true},
{id:"fruit-bread",name:"Fruit Bread",category:"Bakery",badge:"Sweet",description:"Soft loaf loaded with raisins, cranberries and warm baking spice.",price:null,image:"/food-placeholder.svg",available:true},
{id:"fresh-yoghurt",name:"Fresh Yoghurt",category:"Bakery",badge:"Chilled",description:"500ml chilled bottles in vanilla, strawberry and chocolate.",price:null,image:"/food-placeholder.svg",available:true},
{id:"breakfast-package",name:"Breakfast Package",category:"Breakfast",badge:"AM only",description:"Breakfast box with eggs, sausages, toast, tomatoes, fruit and pastry.",price:null,image:"/food-placeholder.svg",available:true},
{id:"kids-meal",name:"Kids Meal",category:"Kids",badge:"For the crew",description:"Kid-sized main, fun side and a drink in a branded kids box.",price:null,image:"/food-placeholder.svg",available:true}
];
