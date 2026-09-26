export type Category="Signatures"|"Bowls"|"Bakery"|"Breakfast"|"Kids"|"Drinks & Sides";
export type Product={
  id:string;name:string;category:Category;badge:string;description:string;
  price:number|null;image:string;available:boolean;calories:number;prepMinutes:number;tags:string[];
};

export const categories=["All","Signatures","Bowls","Bakery","Breakfast","Kids","Drinks & Sides"] as const;

export const initialProducts:Product[]=[
{id:"shawarma",name:"Chicken Shawarma",category:"Signatures",badge:"House favourite",description:"Marinated chicken, garlic sauce, pickles, crisp vegetables and a warm wrap.",price:null,image:"/food-placeholder.svg",available:true,calories:620,prepMinutes:12,tags:["chicken","wrap","garlic","pickles"]},
{id:"beef-suya-wrap",name:"Spicy Beef Suya Wrap",category:"Signatures",badge:"Spicy",description:"Spiced beef, onions, peppers and creamy sauce rolled to order.",price:null,image:"/food-placeholder.svg",available:true,calories:680,prepMinutes:14,tags:["beef","suya","spicy","wrap"]},
{id:"falafel",name:"Falafel Wrap",category:"Signatures",badge:"Plant-powered",description:"Crispy falafel, lettuce, tomato, pickles and tahini sauce in a warm wrap.",price:null,image:"/food-placeholder.svg",available:true,calories:540,prepMinutes:10,tags:["falafel","vegan","wrap","tahini"]},
{id:"street-tacos",name:"Birria Tacos",category:"Signatures",badge:"Trending",description:"Three warm tortillas with slow-cooked beef, salsa, cheese and dipping broth.",price:null,image:"/food-placeholder.svg",available:true,calories:720,prepMinutes:18,tags:["beef","tacos","birria","cheese"]},
{id:"quesadilla",name:"Quesadilla",category:"Signatures",badge:"Grilled",description:"Golden tortilla, melted cheese, choice of protein and roasted salsa.",price:null,image:"/food-placeholder.svg",available:true,calories:690,prepMinutes:13,tags:["cheese","grilled","tortilla"]},
{id:"taco-bowl",name:"Smoky Teriyaki Rice Bowl",category:"Bowls",badge:"Loaded",description:"Steamed rice, smoky teriyaki protein, vegetables and house toppings.",price:null,image:"/food-placeholder.svg",available:true,calories:740,prepMinutes:15,tags:["rice","teriyaki","bowl","protein"]},
{id:"jollof",name:"Firewood Jollof",category:"Bowls",badge:"Ghana classic",description:"Smoky jollof rice with grilled protein, fresh salad and a signature sauce.",price:null,image:"/food-placeholder.svg",available:true,calories:760,prepMinutes:18,tags:["jollof","rice","grill","ghana"]},
{id:"protein-bowl",name:"Protein Bowl",category:"Bowls",badge:"High protein",description:"Rice or grains, double protein, roasted vegetables, avocado and greens.",price:null,image:"/food-placeholder.svg",available:true,calories:670,prepMinutes:15,tags:["protein","avocado","greens","bowl"]},
{id:"chopped-salad",name:"Chopped Salad",category:"Bowls",badge:"Fresh",description:"Crisp greens, grilled chicken, tomato, corn, feta, avocado and citrus dressing.",price:null,image:"/food-placeholder.svg",available:true,calories:430,prepMinutes:9,tags:["salad","chicken","fresh","healthy"]},
{id:"meat-pie",name:"Artisanal Meat Pie",category:"Bakery",badge:"Baked fresh",description:"Flaky butter crust filled with savoury minced beef and vegetables.",price:null,image:"/food-placeholder.svg",available:true,calories:390,prepMinutes:6,tags:["pastry","beef","bakery"]},
{id:"sausage-rolls",name:"Sausage Rolls",category:"Bakery",badge:"Snack",description:"Golden pastry wrapped around seasoned sausage.",price:null,image:"/food-placeholder.svg",available:true,calories:350,prepMinutes:5,tags:["pastry","sausage","bakery"]},
{id:"fruit-bread",name:"Fruit Bread",category:"Bakery",badge:"Sweet",description:"Soft loaf loaded with raisins, cranberries and warm baking spice.",price:null,image:"/food-placeholder.svg",available:true,calories:290,prepMinutes:4,tags:["bread","fruit","sweet","bakery"]},
{id:"breakfast-toast",name:"Breakfast Toasts",category:"Breakfast",badge:"Morning",description:"Golden toast topped with eggs, avocado and a savoury house finish.",price:null,image:"/food-placeholder.svg",available:true,calories:510,prepMinutes:9,tags:["breakfast","eggs","toast","avocado"]},
{id:"breakfast-package",name:"Breakfast Package",category:"Breakfast",badge:"AM only",description:"Eggs, sausages, toast, tomatoes, fresh fruit and a pastry.",price:null,image:"/food-placeholder.svg",available:true,calories:820,prepMinutes:11,tags:["breakfast","eggs","sausage"]},
{id:"kids-meal",name:"Kids Meal",category:"Kids",badge:"For the crew",description:"Kid-sized main, fun side and a drink in a branded kids box.",price:null,image:"/food-placeholder.svg",available:true,calories:520,prepMinutes:10,tags:["kids","meal"]},
{id:"zobo",name:"Hibiscus Zobo",category:"Drinks & Sides",badge:"Chilled",description:"Refreshing hibiscus infusion served cold.",price:null,image:"/food-placeholder.svg",available:true,calories:110,prepMinutes:2,tags:["zobo","drink","hibiscus"]},
{id:"fresh-yoghurt",name:"Fresh Yoghurt",category:"Drinks & Sides",badge:"Chilled",description:"500ml chilled yoghurt in a rotating selection of flavours.",price:null,image:"/food-placeholder.svg",available:true,calories:240,prepMinutes:2,tags:["yoghurt","drink","chilled"]},
{id:"triple-taco-box",name:"Triple Taco Box",category:"Signatures",badge:"This week's special",description:"A three-taco box built around Wrap n' Roll's current featured-special concept.",price:null,image:"/food-placeholder.svg",available:true,calories:780,prepMinutes:16,tags:["tacos","box","special"]}
];
