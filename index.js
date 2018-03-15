
fetch(`https://www.googleapis.com/books/v1/volumes?q=FRASE`).then(function (response) {
      return response.json();
    })
      .then(function (data) {
      	console.log(data)
        /*data.forEach(function (promocion, i) {
          promo.push(promocion.name)
        });*/
      });
