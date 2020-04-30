import API from './../utils/API';

export function getProducts(){
  return  API.get('products')
  .then(response=>{
    let data = response.data.data;
    return data;
  });
}