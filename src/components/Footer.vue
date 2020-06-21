<template>
    <footer class="footer">
        <div class="container">

	  <h3 class="site-name" v-html="settings.site_name"/>
	  <div class="socials">
	    <a v-bind:href="socials.linkedin">LinkedIn</a> / <a v-bind:href="socials.behance">Behance</a> / <a v-bind:href="socials.dribbble">Dribbble</a> / <a v-bind:href="socials.vimeo">Vimeo</a>
	  </div>
	  <h5 class="copyright" v-html="settings.footer" />
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            settings: require("../../data/theme.json"),
	    socials: require("../../data/socials.json")
        }
    }
}
</script>

<style scoped>
.footer {
    font-size: 0.8rem;
    padding: 6rem 0;
}
</style>
