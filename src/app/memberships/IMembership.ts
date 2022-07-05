export interface ISession {
    sessionId: string;
    publicKey:string;
}
export interface ICustomerPortal {
    url: string;
  }
export interface IMemberShipPlan{
    id:string,
    priceId:string,
    name:string,
    price:string,
    features:string[]
}