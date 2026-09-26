import type {Product} from "../data/catalog";
export type CartItem={productId:string;quantity:number};
export type Session={role:"customer"|"admin";name:string;email:string};
export type OrderStatus="Pending"|"Confirmed"|"Preparing"|"Ready"|"Completed";
export type Order={id:string;createdAt:string;customerName:string;customerEmail:string;items:CartItem[];orderType:"pickup"|"delivery";location:string;address:string;notes:string;paymentReference:string;status:OrderStatus};

const k={products:"ou-products",cart:"ou-cart",orders:"ou-orders",session:"ou-session"};
const read=<T,>(key:string,fallback:T):T=>{try{const raw=localStorage.getItem(key);return raw?JSON.parse(raw):fallback}catch{return fallback}};
const write=(key:string,value:unknown)=>localStorage.setItem(key,JSON.stringify(value));
export const storage={
getProducts:(fallback:Product[])=>read<Product[]>(k.products,fallback),
saveProducts:(v:Product[])=>write(k.products,v),
getCart:()=>read<CartItem[]>(k.cart,[]),
saveCart:(v:CartItem[])=>write(k.cart,v),
getOrders:()=>read<Order[]>(k.orders,[]),
saveOrders:(v:Order[])=>write(k.orders,v),
getSession:()=>read<Session|null>(k.session,null),
saveSession:(v:Session|null)=>v?write(k.session,v):localStorage.removeItem(k.session)
};
export const makeOrderId=()=>"OU-"+Math.random().toString(36).slice(2,8).toUpperCase();
