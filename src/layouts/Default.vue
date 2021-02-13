<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
    <Header />
    <slot/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  components: {
    Header,
    Footer
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  --color-base: rgb(255, 255, 255);
  --color-base-1: rgb(243, 243, 243);
  --color-contrast: rgb(0, 0, 0);
  --color-contrast-1: rgb(43, 43, 43);
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding: 0;
  font-size: 16px;
  background: var(--color-base);
  color: var(--color-contrast);
  transition: background 0.5s ease;
}

body.dark {
  --color-base: rgb(0, 0, 0);
  --color-base-1: rgb(43, 43, 43);
  --color-contrast: rgb(255, 255, 255);
  --color-contrast-1: rgb(243, 243, 243);
}

h1 {
    letter-spacing: -0.01em;
    margin: 3rem 0;
}

h2 {
    margin: 3rem 0;
}

h3 {
    margin: 3rem 0 1rem
}

.layout {
  padding: 0;
}

.layout.sticky-header {
  padding: 6rem 0 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  overflow: hidden;
}

@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}

a {
  color: inherit;
}

img {
  max-width: 100%;
}

.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.video-responsive {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}

.video-responsive.video-square {
  padding-bottom: 100%;
}

@media (min-width: 860px) {
  .video-responsive.video-square {
	  padding-bottom: 56.25%;
  }
}

.video-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}

gallery {
    display: grid;
    column-gap: 1rem;
    row-gap: 1rem;
    margin: 1rem 0;
    align-items: center;
    justify-items: center;
}

gallery p {
    margin: 0;
    width: 100%;
}

gallery p img {
    width: 100%;
}

.col-2 {
    grid-template-columns: 1fr 1fr;
}

.col-3 {
    grid-template-columns: 1fr 1fr 1fr;
}

.col-4 {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.col-5 {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.col-6 {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

@media (min-width: 640px) {

    .col-med-2 {
	grid-template-columns: 1fr 1fr;
    }
    
    .col-med-3 {
	grid-template-columns: 1fr 1fr 1fr;
    }
    
    .col-med-4 {
	grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    
    .col-med-5 {
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    
    .col-med-6 {
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
}

@media (min-width: 1280px) {
    .col-lg-2 {
	grid-template-columns: 1fr 1fr;
    }
    
    .col-lg-3 {
	grid-template-columns: 1fr 1fr 1fr;
    }
    
    .col-lg-4 {
	grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    
    .col-lg-5 {
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    
    .col-lg-6 {
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
}

.responsive-video {
    width: 100%;
    position: relative;
}

.responsive-video iframe {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
}

.responsive-video.vertical {
    padding-top: 180%;
}

.responsive-video.horizontal {
    padding-top: 56.25%;
}

.responsive-video.fourthree {
    padding-top: 75%;
}

.responsive-video.square {
    padding-top: 100%;
}

.button {
    text-decoration: none;
    padding: 1em;
    border: 2px solid var(--color-contrast-1);
    border-radius: 4em;
    font-weight: bold;
    transition: 0.2s;    
}

.button:last-child {
    margin-right: 0;
    }

.button:hover {
    background-color: var(--color-contrast-1);
    color: var(--color-base-1);
    }

.fullwidth-dark {
    /* color:var(--color-base); */
    background-color: var(--color-base-1);
    }

</style>
