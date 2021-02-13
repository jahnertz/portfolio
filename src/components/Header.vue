<template>
<header class="header" :class="{sticky: $route.path === '/' || $route.path.includes('/projects/')}">
  <div class="container">
    <div class="logotype left">
      <g-link :to="{ name: 'home' }" class="home-link">
        <!-- <img src="../../static/logo.svg" :alt="settings.site_name" class="logo" /> -->
	<h1>Jordan Hanrahan</h1>
	<h2>Art Direction · Graphic Design · Motion Graphics</h2>
      </g-link>
    </div>
    <a href="javascript:void(0);" class="hamburger" @click="navToggle"><div></div><div></div><div></div></a>
      <nav class="nav right" id="nav">
	<g-link class="nav__link" to="/work">Work</g-link>	      
	<!-- <g-link class="nav__link" to="/journal">Posts</g-link> -->
	<g-link class="nav__link" to="/about">About</g-link>
	<!-- <g-link class="nav__link" to="/resume">Resumé</g-link> -->
	<g-link class="nav__link" to="/contact">Contact</g-link>
      </nav>
    </div>

  </div>
</header>
</template>

<script>
export default {
    data() {
	return {
            logo: require("../../static/logo.svg"),
            settings: require("../../data/theme.json")
	}
    },
    methods: {
	navToggle () {
	    var nav = document.getElementById("nav");
	    if (nav.className === "nav right") {
		nav.className += " opened";
	    } else {
		nav.className = "nav right";
	    }
	}
    },
    mounted() {
	// console.log("hello world");
	}
}

</script>

<style scoped>
.header {
    position: relative;
    /* height: 6rem; */
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.95);
    
}

.dark .header {
    background-color: rgba(0,0,0, 0.5);
}

.header .container {
    padding: 1rem 2rem;
}

.header.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
.header > .container {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    height: 5rem;
}

.home-link {
    text-decoration: none;
}
.logo {
    height: 2rem;
    opacity: 0.8;
}

.home-link * {
    margin: 0;
    padding: 0;
    color: var(--color-contrast-1);
    letter-spacing: -.025rem;
}

.home-link h1 {
    font-size: 1.75rem;
}

.home-link h1 small {
    font-size: .65rem;
    line-height: 1rem;
    font-weight: normal;
}

.home-link h2 {
    font-size: .65rem;
    line-height: 1rem;
    font-weight: normal;
}

.site-name {
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-decoration: none;
    text-transform: uppercase;   
}
.nav > * {
    font-size: 1.5qarem;
    font-weight: 600;
    text-decoration: none;
    margin-top: 4px;
    padding: 2rem;
    border-bottom: 1px solid;
    border-color: transparent;
    text-decoration: none;
    transition: border 0.15s;
    display: block;
    transition: 0.5s;
}

.nav {
    position: absolute;
    right: 0;
    top: 5rem;
    width: 100%;
    display: none;
    background-color: rgba(255, 255, 255, 0.95);
    text-align: right
}

.nav.opened {
    display: block;
}

.nav > *:last-of-type {
    /* margin: 0; */
}
.nav > *:hover {
    text-decoration: underline;
    /* border-color: inherit; */
}
.nav > .active {
    text-decoration: underline;
    /* border-color: inherit; */
}

.hamburger {
    /* padding: 2rem 0; */
    margin: 0;
}

.hamburger div {
    height: 3px;
    margin-bottom: 2px;
    background-color: var(--color-contrast-1);
    width: 16px;
}

.hamburger div:last-child {
    margin: 0;
}

@media (min-width: 640px) {
    .nav {
	display: block;
	position: inherit;
	width: auto;
    }

    .nav > * {
	font-size: 0.9rem;
	margin-right: 1rem;
	display: inline;
	padding: 0;
    }
    
    .hamburger {
	display: none;
    }
}
</style>
