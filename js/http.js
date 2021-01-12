const httpController = (function(){
    function HTTP() {
        return new Promise((resolve, reject) => {
          fetch("https://api.evdetemizlikvar.com/api/product/ev-temizligi")
            .then(response => response.json())
              .then(response => {
              resolve(response);
            })
            .catch(error => {
              reject(error);
            });
        });
      }
      function HTTPSC() {
        return new Promise((resolve, reject) => {
          fetch("https://api.evdetemizlikvar.com/api/city/34/district")
          .then(response => response.json())
            .then(response => {
              resolve(response);
            })
            .catch(error => {
              reject(error);
          });
        });
      }
    return{   
        HTTP: HTTP,
        HTTPSC: HTTPSC
    }
}())