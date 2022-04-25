import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 9; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}<div/>`;
  }

  console.log(products);

  el.innerHTML = products;
};

// CONtext/situation #1
// We are running this file in development in isolation
// We are using our local indexedDB.html file
// which DEFINITELY has an element with an id of 'dev-products'
// We want to immediately render our app into that element

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  // Assuming our container doesnt hace an element with same id
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

// Context #2
// We are running this file in development or production through the container app
// No guarantee that and element with an id of 'dev-produycts exists
// We do not want try to immediate;y render the app

export { mount };
