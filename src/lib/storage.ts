import type {Product} from "../data/catalog";

export type CartItem={productId:string;quantity:number;note?:string;unitPrice?:number};
export type Session={role:"customer"|"admin";name:string;email:string;phone?:string};
export type PaymentMethod="MoMo"|"Cash";
export type MomoNetwork="MTN MoMo"|"Telecel Cash"|"AT Money";
export type OrderStatus="Pending"|"Confirmed"|"Preparing"|"Ready"|"Completed";
export type Order={
  id:string;createdAt:string;customerName:string;customerEmail:string;customerPhone?:string;
  items:CartItem[];orderType:"pickup"|"delivery";location:string;address:string;notes:string;
  paymentMethod?:PaymentMethod;momoNetwork?:MomoNetwork;paymentReference?:string;deliveryFee?:number;status:OrderStatus;
};

const k={products:"ou-products",cart:"ou-cart",orders:"ou-orders",session:"ou-session",locations:"ou-locations"};
const read=<T,>(key:string,fallback:T):T=>{try{const raw=localStorage.getItem(key);return raw?JSON.parse(raw) as T:fallback}catch{return fallback}};
const write=(key:string,value:unknown)=>localStorage.setItem(key,JSON.stringify(value));

export const storage={
  getProducts:(fallback:Product[])=>read<Product[]>(k.products,fallback),
  saveProducts:(v:Product[])=>write(k.products,v),
  getCart:()=>read<CartItem[]>(k.cart,[]),
  saveCart:(v:CartItem[])=>write(k.cart,v),
  getOrders:()=>read<Order[]>(k.orders,[]),
  saveOrders:(v:Order[])=>write(k.orders,v),
  getSession:()=>read<Session|null>(k.session,null),
  saveSession:(v:Session|null)=>v?write(k.session,v):localStorage.removeItem(k.session),
  getLocations:()=>read(k.locations,[{name:"Asafo",area:"Kumasi",open:true,hours:"8am–11pm"},{name:"KNUST Campus",area:"Kumasi",open:true,hours:"8am–11pm"},{name:"Mobile Vans",area:"Kumasi",open:true,hours:"8am–11pm"}]),
  saveLocations:(v:unknown)=>write(k.locations,v)
};
export const makeOrderId=()=> "ORD-"+Math.random().toString(36).slice(2,8).toUpperCase();
