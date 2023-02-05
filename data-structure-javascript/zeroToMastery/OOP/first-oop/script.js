const productList = {
  products: [
    {
      title: "Hello",
      image: "something.com",
      price: 19.22,
      description: "This product all about our new product",
    },
    {
      title: "Hello",
      image: "something.com",
      price: 19.22,
      description: "This product all about our new product",
    },
    {
      title: "Hello",
      image: "something.com",
      price: 19.22,
      description: "This product all about our new product",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodList.append(prodEl);
      prodEl.innerHTML = `
       <div>${prod.title}<div>
      `
    }
    renderHook.append();
  },
};
