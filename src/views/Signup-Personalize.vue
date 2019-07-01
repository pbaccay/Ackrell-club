<template>
  <div class="wrapper signup-personalize-content">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">

					<div class="signup-personalize-name name">
						<h3 class="title">Personalize your Investment</h3>
						<div> 
							<h4 class="title signup-personalize-title">Are you a U.S. citizen?</h4>
							<p>You do not need to be a US citizen to invest on Ackrell Club's portfolio.</p>
								<toggle-button :value="false"
								  name="uscitizen"
								  :labels="{checked: 'Yes', unchecked: 'No'}"
								  :color="{checked: '#4caf50', unchecked: '#f44336'}"
								  :height="30"
								  :width="60"/>
						</div>
						<div class="description text-center"> <h4 class="title signup-personalize-title">Are you an accredited investor?</h4>     
							<p>You need to be an accredited investor to view Ackrell Club's portfolio.</p>
							<toggle-button :value="false"
							  name="uscitizen"
							  :labels="{checked: 'Yes', unchecked: 'No'}"
							  :color="{checked: '#4caf50', unchecked: '#f44336'}"
							  :height="30"
							  :width="60"/>
						</div> 
						<div class="description text-center"> <h4 class="title signup-personalize-title">I am accredited because:</h4>     
						</div>
								<div>
									<label >
										<md-checkbox v-model="checkboxaccred1" class="signup-checkbox"></md-checkbox>
											<span> You made $200,000 or more in each of the last twoyears and expect to make at least $2000,000 this year
											</span> 
									</label>
								</div>
								<div>
									<label >
										<md-checkbox v-model="checkboxaccred2" class="signup-checkbox"></md-checkbox>
											<span> Your household income was $300,000 or more in each of the last two years and it is expected to be at least $300,000 this year
											</span> 
									</label>
								</div>
								<div>
									<label >
										<md-checkbox v-model="checkboxaccred3" class="signup-checkbox"></md-checkbox>
											<span> You have a net worth either on your own or jointly with your spouse of $1,000,000 or more excluding your home
											</span> 
									</label>
									<br>
									<br><div id=""></div>
								</div>
								<md-button href="#/home" class="md-success md-lg">
								Continue
								</md-button>
					</div>
		
                </div>
              </div>
            </div>
          </div>

          <div class="profile-tabs">
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
checkboxaccred1: null,
checkboxaccred2: null,
checkboxaccred3: null
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
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
