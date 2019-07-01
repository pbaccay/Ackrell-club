<template>
<div class="wrapper signup-personalize-content">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
	    <div class="main main-raised">
			<div class="section profile-content">
				<div class="container">
					<div class="md-layout">
						<div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
							<h2 class="title text-center">Investor Sign Up</h2>
						</div>
					</div>
					<br>
					<br>
					<div class="md-layout">
						<div class="md-layout-item md-medium-size-33 md-small-size-100">
							<login-card header-color="green">
							<h4 slot="title" class="card-title">Sign up with email</h4>	  
								<md-field class="" slot="inputs">
								<label>First Name</label>
								<md-input v-validate="'required'" v-model="firstname" name="firstname"></md-input>
								</md-field>	
								<div class="alert alert-danger" v-show="emailsubmitted && errors.has('firstname')" slot="inputs" :style="alertStyle">
									<div v-if="errors.has('firstname')">
									  {{ errors.first('firstname') }}
									</div>
								  </div>								
								<md-field class="" slot="inputs">
								<label>Last Name</label>
								<md-input v-validate="'required'" v-model="lastname" name="lastname"></md-input>
								</md-field>	
								<div class="alert alert-danger" v-show="emailsubmitted && errors.has('lastname')" slot="inputs" :style="alertStyle">
									<div v-if="errors.has('lastname')">
									  {{ errors.first('lastname') }}
									</div>
								  </div>	
								<md-field class="md-form-group" slot="inputs">
									<md-icon>email</md-icon>
									<label>Email...</label>
									<md-input v-validate="'required|email'" v-model="email" type="email" name="email" ref="email"></md-input>
								</md-field>
								<div class="alert alert-danger" v-show="emailsubmitted && errors.has('email')" slot="inputs" :style="alertStyle">
									<div v-if="errors.has('email')">
									  {{ errors.first('email') }}
									</div>
								  </div>								
								<md-field class="md-form-group" slot="inputs">
									<md-icon>lock_outline</md-icon>
									<label>Password...</label>
									<md-input v-validate="'required|min:8|verify_password'" name="password" type="password" v-model="password" ref="password"></md-input>
								</md-field>
								  <div class="alert alert-danger" v-show="socialsubmitted == false && errors.has('password')" slot="inputs" :style="alertStyle">
									<div v-if="errors.has('password')">
									  {{ errors.first('password') }}
									</div>
								  </div>
								<md-field class="md-form-group" slot="inputs">
									<md-icon>lock_outline</md-icon>
									<label>Confirm Password...</label>
									<md-input v-validate="'required|confirmed:password'" name="password_confirmed" type="password" v-model="password_confirmed" data-vv-as="password confirmation"></md-input>				
								</md-field>
								  <div class="alert alert-danger" v-show="socialsubmitted == false && errors.has('password_confirmed')" slot="inputs" :style="alertStyle">

									<div v-if="errors.has('password_confirmed')">
									  {{ errors.first('password_confirmed') }}
									</div>
								  </div>
								<div slot="inputs">
									<label >
										<md-checkbox v-model="consentemail" class="signup-checkbox"></md-checkbox>
											<span>I consent to the use of my personal information as outlined in the User Agreement and certify that I have read and understand the policies and agreements below.
											</span> 
									</label>
								</div>
								<div class="alert alert-danger" v-if="emailsubmitted == true && consentemail == false" slot="inputs" :style="alertStyle">
									<div >
									  You must consent to the use of your personal information before continuing.
									</div>
								  </div>	
								<p slot="inputs" class="description"><i class="fas fa-file-pdf"></i><a href="https://www.ackrell.com/privacy" target="_blank"> Ackrell Club Privacy Policy</a></p>
											
								<md-button slot="footer"  @click="submitEmailForm()" class="md-success md-lg">
								Get Started
								</md-button>							
							</login-card>
						</div>

						<br>	
						<div class="md-layout-item md-medium-size-33 md-small-size-100 signup-or-item">
							<div id="signon-wrapper">
							<md-button class="md-primary md-just-icon md-round">OR</md-button>		
							</div>
						</div>
						<br>
						
						<div class="md-layout-item md-medium-size-33 md-small-size-100">
							<login-card header-color="green">
							<h4 slot="title" class="card-title">Connect an account</h4>			  
								 
									<div slot="inputs" class="md-layout-item text-center md-medium-size-33 md-small-size-100">
									  <md-button @click="submitSocialForm('twitter')" class="md-success md-lg signup-button"><i class="fab fa-twitter-square"></i> Sign Up with Twitter</md-button>
									</div>
									<div slot="inputs" class="md-layout-item text-center md-medium-size-33 md-small-size-100">
									  <md-button @click="submitSocialForm('facebook')" class="md-success md-lg signup-button"><i class="fab fa-facebook-square"></i> Sign Up with Facebook</md-button>
									</div>													
									<div slot="inputs" class="md-layout-item text-center md-medium-size-33 md-small-size-100">
									  <md-button @click="submitSocialForm('google')" class="md-success md-lg signup-button"><i class="fab fa-google"></i> Sign Up with Google</md-button>
									</div>
								<div slot="inputs">
									<label >
										<md-checkbox v-model="consentsocial" class="signup-checkbox"></md-checkbox>
											<span>I consent to the use of my personal information as outlined in the User Agreement and certify that I have read and understand the policies and agreements below.
											</span> 
									</label>
								</div>
								<div class="alert alert-danger" v-if="socialsubmitted == true && consentsocial == false" slot="inputs" :style="alertStyle">
									<div >
									  You must consent to the use of your personal information before continuing.
									</div>
								  </div>
								<p slot="inputs" class="description"><i class="fas fa-file-pdf"></i><a href="https://www.ackrell.com/privacy" target="_blank"> Ackrell Club Privacy Policy</a></p>	
							</login-card>
						</div>	
						
					</div>
			
				</div>			
				</div>
			</div>		
	</div>

</template>

<script>
import { LoginCard } from "@/components";

export default {
  components: {
    LoginCard
  },
  bodyClass: "signup-page",
  data() {
    return {
      firstname: null,
      lastname: null,
	  email: null,
      password: null,
	  password_confirmed: null,
	  consentemail: false,
	  submitted: false,
	  emailsubmitted: false,
	  socialsubmitted: false,
	  consentsocial: false
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }, 
	alertStyle() {
		return "padding: 5px 15px";		
	}

  },
      methods: { 
	  		signup() {
			const fullname = this.firstname + ' ' + this.lastname;
            const password  = this.password;
			const username = this.email;
            const { dispatch } = this.$store;
            if (username && password  && fullname) {
                dispatch('authentication/signup', { fullname, username, password });
            }
		},
		submitEmailForm() {
			this.submitted = true;
			this.emailsubmitted = true;
			this.socialsubmitted = false;
			this.$validator.validate().then(valid => {
                if (valid && this.consentemail) {
			const fullname = this.firstname + ' ' + this.lastname;
            const password  = this.password;
			const username = this.email;
			const user = { fullname, username, password };
			this.signup();
                }
            });
		},
		submitSocialForm(type) {
			this.submitted = true;
			this.emailsubmitted = false;
			this.socialsubmitted = true;
			this.$validator.validate().then(valid => {
                if (valid && this.consentsocial) {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user) + ' type: ' + type)
                }
            });
		}

		
	  }
};
</script>

<style lang="css">
</style>
