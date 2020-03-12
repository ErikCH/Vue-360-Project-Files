export default function() {
  const addToCart = (aProduct, cart) => cart.push(aProduct.id);

  const canAddToCart = (aProduct, cart) =>
    aProduct.availableInventory > cartCount(aProduct.id, cart);

  const cartCount = function(id, cart) {
    let count = 0;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i] === id) {
        count++;
      }
    }
    return count;
  };

  return {
    addToCart,
    canAddToCart,
    cartCount
  };
}
