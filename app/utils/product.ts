/** The images of a product, in their order. A 3D model or another file is not in it. */
export function productImages(product: PublicProduct): PlutoPublicMedia[] {
  return product.media.filter(isMediaImage);
}

/** True when a product that is not made to order has no stock. */
export function isSoldOut(product: PublicProduct): boolean {
  return !product.is_custom && product.stock_quantity <= 0;
}
