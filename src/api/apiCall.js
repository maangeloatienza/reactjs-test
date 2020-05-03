import API from './../utils/API';

export function getProducts(){
  return  API.get('products')
  .then(response=>{
    let data = response.data.data;
    return data;
  });
}

export function getUserCart(params) {
  return API.get(`booking-items?${params}`)
    .then(response => {
      let data = response.data;
      return data;
    });
}

export function addCart(endpoint,body) {
  return API.post(`booking-items`,body)
    .then(response => {
      let data = response.data;

      if(data.success) return true;
    });
}

export function checkout(body) {
  return API.post(`transactions?`,body)
    .then(response=>{
      let data = response.data;
      
      if (data.success) return data;
    });

}

export function getTransactions(params) {
  return API.get(`transactions?${params}`)
    .then(response => {
      let data = response.data;
      return data;
    })
}
