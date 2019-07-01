<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
    			<div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
    				<h1 class="title">Your Story Starts With Us.</h1>
              <h4>Ackrell Capital is committed to serving the participants of the regulated cannabis industry by providing M&A advisory, private placement and corporate development services. The U.S. Controlled Substances Act prohibits manufacturing, distributing, dispensing or possessing cannabis and its extracts.</h4>
              <br>
              <md-button href="#/signup" class="md-success md-lg" >Sign Up Today</md-button>
    			</div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">Let's talk product</h2>
              <h5 class="description">In this new edition, we introduce an outlook on global cannabis markets, analyze capital markets for
cannabis companies and present updated market estimates. We also expand on the first edition by providing more in-depth analyses of the various market segments within—and analyzing the legal issues pertinent to—the cannabis industry. The Top 100 Private Cannabis Companies list has been updated and our industry landscape, The Green Field, has been updated and expanded to include more than 500 companies. </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>chat</md-icon>
                  </div>
                  <h4 class="info-title">Cannabis Investment Report<br>2018</h4>
                  <md-button href="#/login" class="md-success md-lg" >Download</md-button>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                  <div class="info">
                    <div class="icon icon-success">
                      <md-icon>verified_user</md-icon>
                    </div>
                    <h4 class="info-title">Top 100 Private Cannabis Companies<br>2018</h4>
                  <md-button href="https://www.ackrell.com/s/Top100PrivateCannabisCompanies2018.JPG" class="md-success md-lg" >Download</md-button>
                  </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                  <div class="info">
                    <div class="icon icon-danger">
                      <md-icon>fingerprint</md-icon>
                    </div>
                    <h4 class="info-title">The Green Field<br>2018</h4>
					<md-button href="https://www.ackrell.com/s/AckrellCapitalTheGreenField2018.pdf" class="md-success md-lg" >Download</md-button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Past Offerings</h2>
          <div class="team">
					<div class="md-layout">
						<div class="md-layout-item md-medium-size-33 md-small-size-100">
							<offer-card header-color="green">
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

						<div class="md-layout-item md-medium-size-33 md-small-size-100">
							<offer-card header-color="green">
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
						
						<div class="md-layout-item md-medium-size-33 md-small-size-100">
							<offer-card header-color="green">
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
