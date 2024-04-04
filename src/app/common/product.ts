export class Product {


  // this name that you are difining in the constructor need to be same name that you have defined in the enity class of the spring
  // if there will be any error value will not be fetched
  constructor(public sku: string,
    public name: string,
    public description: string,
    public unitPrice: number,
    public imageUrl: string,
    public active: boolean,
    public units_in_stock: number,
    public date_created: Date,
    public last_updated: Date
  ) {

  }
}
