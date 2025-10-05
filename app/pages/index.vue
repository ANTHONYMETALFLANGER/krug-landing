<script setup lang="ts">
definePageMeta({
  layout: "header-content-footer",
})
</script>

<template>
  <LandingColumn>
    <Hero />
    <ModelAFeatures />
    <GuitarColorSection />
    <BlogSection v-if="false" />
    <GalerySection />
    <ProjectStatusAndFeedback />
    <ProjectSupport />
  </LandingColumn>
</template>
