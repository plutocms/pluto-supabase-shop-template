const IMAGE_FILE = /\.(avif|gif|jpe?g|png|svg|webp)$/i;

/** The image files of a product, in their order. A 3D model or another file is not in it. */
export function productImages(product: PublicProduct): PublicProductMedia[] {
  return product.media.filter((file) =>
    file.mime_type
      ? file.mime_type.startsWith("image/")
      : IMAGE_FILE.test(file.name),
  );
}

/** True when a product that is not made to order has no stock. */
export function isSoldOut(product: PublicProduct): boolean {
  return !product.is_custom && product.stock_quantity <= 0;
}
