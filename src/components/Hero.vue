<template>
    <div class="hero">
        <h1 class="hero-title" v-html="settings.hero_title" />
        <!-- <h2 class="hero-subtitle" v-html="settings.hero_subtitle" /> -->
	<ul class="services-list">
	  <li>Art Direction</li>
	  <li>Graphic Design</li>
	  <li>Motion Graphics</li>
	</ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>

<style>
.hero {
    text-align: center;
    width: 480px;
    max-width: 100%;
    margin: 0 auto;
    padding: 4rem 0 8rem 0;
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem 0;
}
.hero-title p,
.hero-subtitle p {
    margin: 0;
    padding: 0;
}
.hero-subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    padding: 0;
    margin: 0;
    opacity: 0.6;
}

.services-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
}

.services-list li {
    list-style: none;
    margin: 0.5em 0.5em 0 0;
    padding: 1em;
    border-radius: 2em;
    border: 2px solid var(--color-contrast-1);
    white-space: nowrap;
    font-weight: bold;
}

</style>
