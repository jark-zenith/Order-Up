export type AdminDocumentType="Payment verification"|"Business document"|"Other";
export type AdminDocumentMeta={
  id:string;
  name:string;
  type:AdminDocumentType;
  size:number;
  mime:string;
  uploadedAt:string;
};

const DB_NAME="order-up-admin-v1";
const STORE_NAME="documents";

function openDb():Promise<IDBDatabase>{
  return new Promise((resolve,reject)=>{
    const request=indexedDB.open(DB_NAME,1);
    request.onupgradeneeded=()=>{if(!request.result.objectStoreNames.contains(STORE_NAME)){request.result.createObjectStore(STORE_NAME,{keyPath:"id"})}};
    request.onsuccess=()=>resolve(request.result);
    request.onerror=()=>reject(request.error);
  });
}

export async function listDocuments():Promise<AdminDocumentMeta[]>{
  try{
    const db=await openDb();
    return await new Promise((resolve,reject)=>{
      const request=db.transaction(STORE_NAME,"readonly").objectStore(STORE_NAME).getAll();
      request.onsuccess=()=>resolve((request.result as (AdminDocumentMeta&{blob?:Blob})[]).map(({blob,...meta})=>meta));
      request.onerror=()=>reject(request.error);
    });
  }catch{return []}
}

export async function saveDocument(file:File,type:AdminDocumentType):Promise<AdminDocumentMeta>{
  const id=(globalThis.crypto?.randomUUID?.()??Math.random().toString(36).slice(2))+"";
  const meta:AdminDocumentMeta={id,name:file.name,type,size:file.size,mime:file.type||"application/octet-stream",uploadedAt:new Date().toISOString()};
  const db=await openDb();
  await new Promise<void>((resolve,reject)=>{
    const request=db.transaction(STORE_NAME,"readwrite").objectStore(STORE_NAME).put({...meta,blob:file});
    request.onsuccess=()=>resolve();
    request.onerror=()=>reject(request.error);
  });
  return meta;
}

export async function readDocument(id:string):Promise<Blob|null>{
  try{
    const db=await openDb();
    return await new Promise((resolve,reject)=>{
      const request=db.transaction(STORE_NAME,"readonly").objectStore(STORE_NAME).get(id);
      request.onsuccess=()=>resolve(request.result?.blob??null);
      request.onerror=()=>reject(request.error);
    });
  }catch{return null}
}

export async function deleteDocument(id:string){
  const db=await openDb();
  await new Promise<void>((resolve,reject)=>{
    const request=db.transaction(STORE_NAME,"readwrite").objectStore(STORE_NAME).delete(id);
    request.onsuccess=()=>resolve();
    request.onerror=()=>reject(request.error);
  });
}
