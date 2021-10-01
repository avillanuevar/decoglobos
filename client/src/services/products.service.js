import axios from 'axios'

export default class Services {

    constructor() {
        this._service = axios.create({
          baseURL: process.env.REACT_APP_URL,
          withCredentials: true // RUTAS PERSISTENTES
        });
    }

    edit = ( description,productType,price,size,imageUrl,_id) => this._service.post(`/products/edit`, { description,productType,price,size,imageUrl});
    create = ( description,productType,price,size,imageUrl) => this._service.post('/products/create', { description,productType,price,size,imageUrl});
    details = (id) => this._service.get(`products/details/${id}`);
    delete = (id) => this._service.get(`products/delete/${id}`);
}