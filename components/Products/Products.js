class Products {
  render() {
    let htmlCatalog = "";

    CATALOG.forEach(({ id, name, price, img }) => {
      htmlCatalog += `
             <li class='products-element'>
             <span class='products-element__name'>${name}</span>
             <img class='products-element__img' src='${img}'/>
             <span class='products-element__price'>${price.toLocaleString()}💲</span>
             <button class='products-element__btn'>Дотавить в корзину</button>
             </li>
             `;
    });

    const html = `
        <ul class='products-container'>
        ${htmlCatalog}
        </ul>
        `;

    ROOT_RODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
