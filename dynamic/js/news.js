
const loadNews = (path) => {
    fetch(path)
        .then(res => res.json())
        .then(data => {
            const list_news = document.getElementById("list_news");
            const side_news = document.getElementById("side_news");
            data.forEach(item => {
                if (item.photo != "") {
                    list_news.innerHTML += `
                <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 ">
                    <img loading="lazy"class="col-12" src="${item.photo}" alt="news" />
                    <h5 class="goods-title__title">${item.text}</h5>
                    <p class="additional-text">${item.published} &nbsp &nbsp<i class="fa-solid fa-eye"></i> ${Math.floor(Math.random() * (10000 - 500)) + 500}</p>
                </div>
                `;
                }
                else {
                    side_news.innerHTML += `
                    <div>
                        <h5>${item.text}</h5>
                        <p class="additional-text">${item.published} &nbsp &nbsp<i class="fa-solid fa-eye"></i>${Math.floor(Math.random() * (10000 - 500)) + 500}</p>
                    <hr />
                    </div>
                    `
                }
            });
        });
}