<template>
    <Layout>
      <div class="container">
        <div class="about-hero">
          <h1 class="about-header">About</h1>
        </div>
        <div class="grid col-med-2">
          <img class="profile-image" src="../../uploads/JHN_Head_200131_v03.png" />
          <div>
            <h1 class="about-title">Hi!</h1>
            <h2>I’m Jordan Hanrahan — a&nbspMelbourne based art director and multi−disciplinary designer.</h2>
            <p>My specialties lie between the fields of communication, digital and motion design, all of which I am deeply passionate about.</p>
    <p>I graduated from Swinburne University of Technology, BA. Design, Multimedia Design in 2014, and have since worked in agencies and as a freelancer all across the Asia Pacific region.</p>
    <h3>Resumé</h3>
    <a href="/JordanHanrahan_CurriculumVitae_210219_v12.pdf">Download</a>
    <h3>Socials</h3>
    <a v-bind:href="socials.linkedin">LinkedIn</a> / <a v-bind:href="socials.instagram">Instagram</a> / <a v-bind:href="socials.twitter">Twitter</a> / <a v-bind:href="socials.mastodon">Mastodon</a>
          </div>
        </div>
      </div>
    </Layout>
</template>

<script>
    export default {
        data() {
            return {
                socials: require("../../data/socials.json")
            }
        }}
</script>

<style scoped>
.about-hero {
    padding: 4rem 0;
    text-align: center;
    color: var(--color-base-1);
}
.about-header {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0;
}
.sender-info {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}
.sender-info > div {
    flex: 1;
    margin-right: 4rem;
}
.sender-info > div:last-of-type {
    margin: 0;
}
input:focus,textarea:focus {
    border-color: var(--color-contrast-1);
}
input,textarea {
    background: transparent;
    border: 1px solid var(--color-base-1);
    outline: none;
    border-radius: 0.3rem;
    padding: 0.8rem 1rem;
    color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
.button {
  color: var(--color-base);
  background: var(--color-contrast);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-base-1);
}

@media (min-width: 640px) {
    .profile {
    grid-template-columns: 1fr 1fr;
}

}

</style>

