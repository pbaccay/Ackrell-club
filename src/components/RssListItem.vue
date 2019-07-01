<template>
    <div class="rssitem">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image">
              <img :src="rssitem.img">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <h3>{{rssitem.title}}</h3>
			  <p><strong>{{rssitem.pubdate}}</strong>
              {{rssitem.content}}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
</template>

<script>
export default {
  name: "rsslist-component",
  props: {
    rssitem: Object
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>
<style lang="css">
</style>