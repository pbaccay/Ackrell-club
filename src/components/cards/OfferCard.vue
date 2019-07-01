<template>
  <md-card class="md-card-login md-card-offer" :class="{'card-lift--hover': hover}">

      <slot name="title"></slot>
      <div class="offer-avatar">
	 <slot name="avatar"></slot>
	</div>


    <md-card-content>
      <slot name="description"></slot>
      <slot name="inputs"></slot>
    </md-card-content>

    <md-card-actions>
      <slot name="footer"></slot>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: "offer-card",
  props: {
    headerColor: {
      type: String,
      default: ""
    },
    hover: {
      type: Boolean,
      description: "Whether card should move on hover"
    }
  },
  data() {
    return {
      cardHidden: true
    };
  },
  beforeMount() {
    setTimeout(this.showCard, 400);
  },
  methods: {
    showCard: function() {
      this.cardHidden = false;
    },
    getClass: function(headerColor) {
      return "md-card-header-" + headerColor + "";
    }
  }
};
</script>

<style lang="css">
</style>
