var url =
  "https://newsapi.org/v2/everything?" +
  "q=Apple&" +
  "from=2021-09-04&" +
  "sortBy=popularity&" +
  "apiKey=f08aee49b1674761a4bc07bb93ca6cbc";

var req = new Request(url);

fetch(req)
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    let newsPannel = document.getElementById("newsPannelContainer");

    let newsPannelHTML = ``;

    for (let index = 0; index < data.articles.length; index++) {
      const element = data.articles[index];
      console.log(element);
      newsPannelHTML += `
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                    ${element.title}
                </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
                <div class="accordion-body text-center">
                        <strong>Author</strong>: ${element.author}
                        <div class='container text-center py-2'>
                            <img class='img-fluid' src='${element.urlToImage}' alt='loading image..' hight='100' width='500'>
                        </div>
                        <br>
                        <br>
                        ${element.description}
                        <br>
                        <a href=${element.url}>continue reading</a>
                    </div>
                </div>
            </div>
            `;
    }

    newsPannel.innerHTML = newsPannelHTML;
  });
