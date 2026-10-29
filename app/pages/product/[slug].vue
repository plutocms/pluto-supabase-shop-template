<script setup lang="ts">
const route = useRoute();
const slug = computed(() => String(route.params.slug));
const { t } = usePlutoSiteI18n();

const { data, error } = await usePlutoPublicItem<PublicProduct>(
  "product",
  slug,
);
const product = computed(() => data.value?.data);

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found" });
}

const images = computed(() =>
  product.value ? productImages(product.value) : [],
);
const selected = ref(0);
const image = computed(() => images.value[selected.value] ?? images.value[0]);

const stock = computed(() => {
  const item = product.value;
  if (!item) {
    return "";
  }
  if (item.is_custom) {
    return t("site.product.madeToOrder");
  }
  return isSoldOut(item)
    ? t("site.product.soldOut")
    : t("site.product.inStock", { count: item.stock_quantity });
});

useSeoMeta({
  title: () => product.value?.name,
  description: () => product.value?.description ?? undefined,
  ogTitle: () => product.value?.name,
  ogDescription: () => product.value?.description ?? undefined,
  ogImage: () => images.value[0]?.url,
});

usePlutoEditLink("product", () => product.value?.id);
</script>

<template>
  <UContainer v-if="product" class="py-10 sm:py-16">
    <ULink
      to="/"
      class="text-muted hover:text-primary mb-8 inline-flex items-center gap-1.5 text-sm"
    >
      <UIcon name="i-lucide-arrow-left" class="size-4" />
      {{ t("site.product.back") }}
    </ULink>

    <div class="grid gap-10 md:grid-cols-2 lg:gap-16">
      <div class="flex flex-col gap-3">
        <div
          class="bg-elevated ring-default relative aspect-square overflow-hidden rounded-xl ring"
        >
          <PlutoImage
            v-if="image"
            :media="image"
            :alt="image.alt || product.name"
            sizes="xs:100vw md:50vw lg:600px"
            loading="eager"
            fetchpriority="high"
            class="size-full object-cover"
          />
          <UIcon
            v-else
            name="i-lucide-image"
            class="text-dimmed absolute inset-0 m-auto size-12"
          />
        </div>

        <div v-if="images.length > 1" class="grid grid-cols-5 gap-3">
          <button
            v-for="(file, index) in images"
            :key="file.id"
            :aria-label="t('site.product.showImage', { number: index + 1 })"
            :aria-current="index === selected"
            :class="
              index === selected
                ? 'ring-primary ring-2'
                : 'ring-default hover:ring-accented ring'
            "
            type="button"
            class="aspect-square overflow-hidden rounded-lg transition-shadow"
            @click="selected = index"
          >
            <PlutoImage
              :media="file"
              alt=""
              sizes="xs:20vw md:120px"
              class="size-full object-cover"
            />
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-5">
        <div class="flex flex-wrap items-center gap-2">
          <NuxtLink
            v-if="product.category"
            :to="{ path: '/', query: { category: product.category.slug } }"
          >
            <UBadge
              :label="product.category.label"
              color="primary"
              variant="subtle"
              class="hover:bg-primary/20 transition-colors"
            />
          </NuxtLink>
          <UBadge
            v-if="product.availability"
            :label="product.availability.label"
            color="neutral"
            variant="subtle"
          />
        </div>

        <h1
          class="text-highlighted text-4xl font-semibold text-balance sm:text-5xl"
        >
          {{ product.name }}
        </h1>

        <div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <p class="text-highlighted text-3xl font-semibold">
            {{ formatProductPrice(product.price) }}
          </p>
          <p
            :class="isSoldOut(product) ? 'text-muted' : 'text-success'"
            class="text-sm font-medium"
          >
            {{ stock }}
          </p>
        </div>

        <p
          v-if="product.description"
          class="text-toned text-lg whitespace-pre-line text-pretty"
        >
          {{ product.description }}
        </p>
      </div>
    </div>
  </UContainer>
</template>
