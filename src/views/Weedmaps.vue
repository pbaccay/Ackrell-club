<template>
  <div class="wrapper offer-content">
    <parallax class="section page-header header-filter" :style="headerStyle">
	    <div class="container">
			<div class="md-layout">
						<div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
							<h1 class="title">Weedmaps<br></h1>
						</div>
						<div class="container">
							<div class="md-layout">
							  <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
								<h3>Website | Online Community</h3>
							  </div>		
							  <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
								<md-button href="#/signup" class="md-success md-lg" style="float: right;">Invest</md-button>
							  </div>
							</div>
							<p>Ackrell Club Portfolio</p>
						</div>
			</div>
      </div>
	</parallax>  
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
  
                <div class="offer-name">

                 
                  <md-button href="javascript:void(0)" class="md-just-icon md-simple md-dribbble"><i class="material-icons">account_balance</i></md-button>
                  <md-button href="javascript:void(0)" class="md-just-icon md-simple md-twitter"><i class="material-icons">favorite</i></md-button>
                  <md-button href="javascript:void(0)" class="md-just-icon md-simple md-pinterest"><i class="material-icons">visibility</i></md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>Weedmaps is an online legal marijuana community that allows users to review and discuss cannabis strains and local dispensaries.</p>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Documents', 'Terms', 'Overview', 'Team', 'Discussion']"
              :tab-icon="['storage', 'list_alt', 'info', 'people', 'comment']"
              plain
              nav-pills-icons
              color-button="success">

              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane1[0].image" class="rounded">
                    <img :src="tabPane1[1].image" class="rounded">
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane1[3].image" class="rounded">
                    <img :src="tabPane1[2].image" class="rounded">
                  </div>
                </div>
              </template>
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane2[0].image" class="rounded">
                    <img :src="tabPane2[1].image" class="rounded">
                    <img :src="tabPane2[2].image" class="rounded">
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane2[3].image" class="rounded">
                    <img :src="tabPane2[4].image" class="rounded">
                  </div>
                </div>
              </template>
              <template slot="tab-pane-3">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane3[0].image" class="rounded">
                    <img :src="tabPane3[1].image" class="rounded">
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane3[2].image" class="rounded">
                    <img :src="tabPane3[3].image" class="rounded">
                    <img :src="tabPane3[4].image" class="rounded">
                  </div>
                </div>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
export default {
  components: {
    Tabs
  },
  bodyClass: "profile-page",
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") }
      ],
	  OfferImg1: {
      type: String,
      default: require("@/assets/img/weedmaps.png")
    }
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/weedmaps.png")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    }
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
.section {
  padding: 0;
}

.profile-tabs /deep/ {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
