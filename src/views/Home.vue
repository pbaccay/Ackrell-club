<template>
  <div class="wrapper signup-personalize-content">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Offerings</h2>
          <div class="team">
					<div class="md-layout">
						<div class="md-layout-item md-medium-size-33 md-small-size-100" id="1" @click="event => select(event)" >
							<offer-card header-color="green" class="card-lift--hover">
								<div slot="avatar">
								<img :src="OfferImg1" alt="Offer Image" class="img-raised img-fluid">
								</div>
								<h4 slot="description" class="description"><br>Défoncé</h4>
								<h5 slot="description" class="description">EDIBLES | Chocolatier</h5>
								<h5 slot="description" class="description">PRIMARY | EARLY STAGE</h5>
								<h5 slot="description" class="description">Exquisite ingredients and veteran craft merge at Défoncé, which produces California’s finest cannabis-infused chocolates. Our seed-to-bar artisanal chocolates set new high standards for the world of edible confections.<br><br></h5>
								<h4 slot="footer" class="description">Ackrell Club Portfolio</h4>			
							</offer-card>
						</div>

						<div class="md-layout-item md-medium-size-33 md-small-size-100" id="2" @click="event => select(event)">
							<offer-card header-color="green" class="card-lift--hover">
								<div slot="avatar">
								<img :src="OfferImg2" alt="Offer Image" class="img-raised img-fluid">
								</div>
								<h4 slot="description" class="description"><br>Weedmaps</h4>
								<h5 slot="description" class="description">Website | Online Community</h5>
								<h5 slot="description" class="description">PRIMARY | Growth</h5>
								<h5 slot="description" class="description">Weedmaps is an online legal marijuana community that allows users to review and discuss cannabis strains and local dispensaries.<br><br><br><br></h5>
								<h4 slot="footer" class="description">Ackrell Club Portfolio</h4>			
							</offer-card>
						</div>				
						
						<div class="md-layout-item md-medium-size-33 md-small-size-100" id="3" @click="event => select(event)">
							<offer-card header-color="green" class="card-lift--hover">
								<div slot="avatar">
								<img :src="OfferImg3" alt="Offer Image" class="img-raised img-fluid">
								</div>
								<h4 slot="description" class="description"><br>Vuber</h4>
								<h5 slot="description" class="description">Tech | Vaporizers</h5>
								<h5 slot="description" class="description">PRIMARY | Growth</h5>
								<h5 slot="description" class="description">Vuber Vaporizers are blazing the way. Vuber Technologies is a leading manufacturer of premium quality vaporizers. We offer a full line of Vuber Vaporizers to meet a wide range of personal tastes, budgets, preferences and styles.</h5>
								<h4 slot="footer" class="description">Ackrell Club Portfolio</h4>			
							</offer-card>
						</div>
						

						
					</div>
   					</div>    
        </div>
      </div>
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Work with us</h2>
              <h4 class="text-center description">Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.</h4>
              <form class="contact-form">
                  <div class="md-layout">
                      <div class="md-layout-item md-size-50">
                        <md-field>
                          <label>Your Name</label>
                          <md-input v-model="name" type="text"></md-input>
                        </md-field>
                      </div>
                      <div class="md-layout-item md-size-50">
                        <md-field>
                          <label>Your Email</label>
                          <md-input v-model="email" type="email"></md-input>
                        </md-field>
                      </div>
                  </div>
                  <md-field maxlength="5">
                    <label>Your Message</label>
                    <md-textarea v-model="message"></md-textarea>
                  </md-field>
                  <div class="md-layout">
                    <div class="md-layout-item md-size-33 mx-auto text-center">
                      <md-button class="md-success">Send Message</md-button>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { OfferCard } from "@/components";

export default {
  components: {
    OfferCard
  },
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg")
    },
    OfferImg1: {
      type: String,
      default: require("@/assets/img/defonce.png")
    },
    OfferImg2: {
      type: String,
      default: require("@/assets/img/weedmaps.png")
    },
    OfferImg3: {
      type: String,
      default: require("@/assets/img/vuber.png")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  created () {
	this.$store.dispatch('users/getStatus');  
  },
      methods: {
        select: function(e) {
                  var target = e;
				  var targetid = target.currentTarget.id;
            console.log(target.currentTarget.id); // returns 'foo'
			if(targetid == "1") {
				this.$router.push('defonce');
			} else if (targetid == "2") {
			this.$router.push('weedmaps');
			} else if (targetid == "3") {
			this.$router.push('vuber');
			}
        }
    }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
