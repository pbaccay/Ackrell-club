<template>
    <footer class="footer"
            :class="{[`footer-${type}`]: type}"
            :data-background-color="backgroundColor">
        <div class="container">
		    <div>
                 Ackrell Capital &copy; 2017, All Rights Reserved.
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="https://www.ackrell.com/privacy" target="_blank">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="https://static1.squarespace.com/static/549b3ffae4b06f75a6e748bd/t/549e78a8e4b003c6ce161c8a/1419671720648/website_BCP.pdf" target="_blank">
                            Business Continuity
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
        <div class="container">	
		    <div>
                 Member FINRA - SIPC.
            </div>
            <nav>
                <ul>
                    <li>Check the background of the firm and its professionals on <a href="https://brokercheck.finra.org/" target="_blank">FINRA’s BrokerCheck</a>
                    </li>					
                </ul>
            </nav>

        </div>		
    </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
</style>
