<template>
<Layout>
  <div class="container">
    <Hero />
    <ProjectsGrid :projects="$page.projects.edges" />
    <div class="cta-section">
      <a class="button" href='/work'>More projects</a>
      <a class="button" href='/contact'>Get in touch</a>
    </div>
  </div>
  <!--<LatestJournals :journals="$page.journals.edges" />-->
  <!-- <div class="fullwidth-dark"> -->
  <!--   <div class="container client-list"> -->
  <!--     <p>hello!</p> -->
  <!--   </div> -->
  <!-- </div> -->
</Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost(sortBy: "date", order: DESC, filter:{showcase:{eq:true}}) {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  },
  journals: allJournalPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Hero,
    ProjectsGrid,
    LatestJournals
  }
}
</script>

<style>
  .cta-section {
    text-align: center;
    padding: 8em 0;
    display: flex;
  justify-content: center;
  column-spacing: 1em;
  }
</style>
