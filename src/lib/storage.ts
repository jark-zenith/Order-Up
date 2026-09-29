import type {Product} from "../data/catalog";

export type CartItem={productId:string;quantity:number;note?:string;unitPrice?:number};
export type Session={role:"customer"|"admin";name:string;email:string;phone?:string};
export type PaymentMethod="MoMo";
export type MomoNetwork="MTN MoMo"|"Telecel Cash"|"AT Money";
export type PaymentStatus="Submitted"|"Verified"|"Rejected";
export type OrderStatus="Pending"|"Confirmed"|"Preparing"|"Ready"|"Completed";
export type Order={
  id:string;createdAt:string;customerName:string;customerEmail:string;customerPhone?:string;
  items:CartItem[];orderType:"pickup"|"delivery";location:string;address:string;notes:string;
  paymentMethod:PaymentMethod;momoNetwork:MomoNetwork;paymentReference:string;paymentStatus?:PaymentStatus;
  deliveryFee:number;status:OrderStatus;
};

export type BusinessLocation={name:string;area:string;open:boolean;hours:string};
export type BusinessSettings={
  businessName:string;ownerName:string;businessEmail:string;phone:string;whatsapp:string;
  paymentNumber:string;paymentNetwork:MomoNetwork|"";
  paymentRecipient:string;address:string;website:string;hours:string;deliveryFee:number;
};
export type AdminProfile={name:string;email:string;phone:string;passwordHash:string;setupCompletedAt:string};

const k={products:"ou-products",cart:"ou-cart",orders:"ou-orders",session:"ou-session",locations:"ou-locations",business:"ou-business",admin:"ou-admin"};
const read=<T,>(key:string,fallback:T):T=>{try{const raw=localStorage.getItem(key);return raw?JSON.parse(raw) as T:fallback}catch{return fallback}};
const write=(key:string,value:unknown)=>localStorage.setItem(key,JSON.stringify(value));

export const defaultBusiness:BusinessSettings={
  businessName:"Wrap n' Roll",ownerName:"",businessEmail:"hello@wrapnrollfoods.com",
  phone:"0596-121-704",whatsapp:"0596-121-704",paymentNumber:"0596-121-704",
  paymentNetwork:"",paymentRecipient:"",address:"Kumasi, Ghana",
  website:"https://wrapnrollfoods.com/",hours:"Mon–Sun · 8am–11pm",deliveryFee:15
};
export const defaultLocations:BusinessLocation[]=[
  {name:"Asafo",area:"Kumasi",open:true,hours:"8am–11pm"},
  {name:"KNUST Campus",area:"Kumasi",open:true,hours:"8am–11pm"},
  {name:"Mobile Vans",area:"Kumasi",open:true,hours:"8am–11pm"}
];
export const storage={
  getProducts:(fallback:Product[])=>read<Product[]>(k.products,fallback),
  saveProducts:(v:Product[])=>write(k.products,v),
  getCart:()=>read<CartItem[]>(k.cart,[]),
  saveCart:(v:CartItem[])=>write(k.cart,v),
  getOrders:()=>read<Order[]>(k.orders,[]),
  saveOrders:(v:Order[])=>write(k.orders,v),
  getSession:()=>read<Session|null>(k.session,null),
  saveSession:(v:Session|null)=>v?write(k.session,v):localStorage.removeItem(k.session),
  getLocations:()=>read<BusinessLocation[]>(k.locations,defaultLocations),
  saveLocations:(v:BusinessLocation[])=>write(k.locations,v),
  getBusiness:()=>({...defaultBusiness,...read<Partial<BusinessSettings>>(k.business,{})}),
  saveBusiness:(v:BusinessSettings)=>write(k.business,v),
  getAdmin:()=>read<AdminProfile|null>(k.admin,null),
  saveAdmin:(v:AdminProfile)=>write(k.admin,v),
  clearAdmin:()=>localStorage.removeItem(k.admin)
};
export async function hashPassword(value:string){
  const data=new TextEncoder().encode(value);
  if(globalThis.crypto?.subtle){const digest=await globalThis.crypto.subtle.digest("SHA-256",data);return Array.from(new Uint8Array(digest)).map(x=>x.toString(16).padStart(2,"0")).join("")}
  return btoa(value);
}
export async function verifyPassword(value:string,hash:string){return (await hashPassword(value))===hash}
export const makeOrderId=()=> "ORD-"+Math.random().toString(36).slice(2,8).toUpperCase();
