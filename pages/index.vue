<template>
  <div>
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>

    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-3">
          <category-block></category-block>
        </div>
        <div class="col">
          <div class="row">
            <section class="jumbotron text-center">
              <div class="container">
                <h1 class="jumbotron-heading">E-COMMERCE HOMEPAGE</h1>
                <p class="lead text-muted mb-0" v-html="text.content"></p>
              </div>
            </section>

            <section class="jumbotron text-center">
              <div class="container">
                <h1 class="jumbotron-heading">Banner 1</h1>
                <p class="lead text-muted mb-0">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte...</p>
              </div>
            </section>

            <section class="jumbotron text-center">
              <div class="container">
                <h1 class="jumbotron-heading">Banner 2</h1>
                <p class="lead text-muted mb-0">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte...</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CategoryBlock from "../components/CategoryBlock";
  import Breadcrumb from "../components/Breadcrumb";

  export default {
    components: {Breadcrumb, CategoryBlock},
    head() {
      return {
        title: this.$t('homepage_title'),
        meta: [{
          hid: `description`,
          name: 'description',
          content: this.$t('homepage_title')
        }, {
          hid: `keywords`,
          name: 'keywords',
          keywords: this.$t('homepage_title')
        }],
        bodyAttrs: {
          class: 'home-page'
        }
      }
    },
    async asyncData (params) {
      await Promise.all([
        params.store.dispatch('text/getItem', 'homepage-about'),
      ]);
    },
    computed: {
      text() {
        return this.$store.getters['text/item']
      },
      breadcrumbs() {
        return [{
          name: 'Home',
          link: '/'
        }]
      },
    }
  }
</script>

