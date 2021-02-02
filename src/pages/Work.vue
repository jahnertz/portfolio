<template>
  <Layout>

    <div class="container">
      <div class="project-hero">
        <h1 class="project-header">
          Work
        </h1>
      </div>
    </div>

    <g-link 
      :to="item.node.path"
      v-for="item in $page.posts.edges" 
      :key="item.node.id"
      class="project-post"
    >
      <ul class="container project">
        <li class="project-item">
	  <h2 class="project-title">{{ item.node.title }}</h2>
  	  <span class="project-date">{{ item.node.project_year }}</span>
	</li>
        
      </ul>
    </g-link>
      
  </Layout>
</template>

<page-query>
query Project {
	posts: allProjectPost {
    edges {
node {
	id
	path
	title
	project_year
      }
    }
  }
}
</page-query>

<script>
export default {
}
</script>

<style scoped>
.container.journal {
  max-width: 720px;
}
.project-hero {
  padding: 4rem 0;
  text-align: center;
  color: var(--color-base-1);
}
.project-header {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
.project-date {
    font-size: 1rem;
    }
.project-post {
  display: block;
  padding: 1rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
  overflow:hidden;
}
.project-post > * {
  transition: transform 0.5s ease;
}
.project-post:hover {
  background-color: var(--color-base-1);
}
.project-post:hover > * {
  transform: translateX(4rem);
}
.project-post h1,
.project-post h2 {
  margin: 0;
  padding: 0;
}
.project-title {
  font-size: 2rem;
  color: var(--color-contrast);
}
.project-excerpt {
  color: var(--color-contrast-1);
}

.container.project {
    list-style: none;
    }

@media (min-width: 560px) {
  .project-post {
    padding: 1rem 0;
  }
}

@media (min-width: 860px) {
  .projectz-post {
    padding: 1rem 0;
  }
}
</style>
