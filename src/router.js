import Vue from "vue";
import Router from "vue-router";

// import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import UserProfile from "./views/UserProfile.vue";
import Defonce from "./views/Defonce.vue";
import Weedmaps from "./views/Weedmaps.vue";
import Vuber from "./views/Vuber.vue";
import Signup from "./views/Signup.vue";
import SignupPersonalize from "./views/Signup-Personalize.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainNavbarSigned from "./layout/MainNavbarSigned.vue";
import MainFooter from "./layout/MainFooter.vue";
import Newsfeed from "./views/Newsfeed.vue";

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: "/",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/home",
      name: "home",
      components: { default: Home, header: MainNavbarSigned, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/signup",
      name: "signup",
      components: { default: Signup, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/signup/personalize",
      name: "signup-personalize",
      components: { default: SignupPersonalize, header: MainNavbarSigned, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/defonce",
      name: "defonce",
      components: { default: Defonce, header: MainNavbarSigned, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/userprofile",
      name: "userprofile",
      components: { default: UserProfile, header: MainNavbarSigned, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/weedmaps",
      name: "weedmaps",
      components: { default: Weedmaps, header: MainNavbarSigned, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/vuber",
      name: "vuber",
      components: { default: Vuber, header: MainNavbarSigned, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/newsfeed",
      name: "newsfeed",
      components: { default: Newsfeed, header: MainNavbarSigned, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/', '/signup', '/signup/personalize', '/newsfeed'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/');
  }

  next();
})
