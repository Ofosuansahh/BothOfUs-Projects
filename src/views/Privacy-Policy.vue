<template>
  <div class="">
    <div v-if="loading" class="loading-container w-100 d-flex justify-content-center align-items-center">
      <div class="loader">
      </div>
    </div>
    <nav id="aheader-nav" class="navbar navbar-expand-md navbar-dark bg-y1 shadow-sm">
      <div class="container">
        <router-link class="navbar-brand text-white" to="/">
          {{ $t('CV Builder') }}
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Left Side Of Navbar -->
          <ul class="navbar-nav mr-auto">
          </ul>

          <!-- Right Side Of Navbar -->
          <ul class="navbar-nav ml-auto">
            <!-- Authentication Links -->
            <li class="nav-item">
              <div class="lang-dropdown">
                <select class="form-control-sm" v-model="$i18n.locale">
                  <option class="text-uppercase"
                          v-for="(lng, i) in languageArray"
                          :key="`lng${i}`"
                          :value="lng"
                  >
                    {{ lng.toUpperCase() }}
                  </option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="p-6">
      <div class="container-fluid cv-section">
        <div class="row">
          <div class="cv-builder col-md-12">
            <h1 class="view-title text-left">CV Builder PRIVACY POLICY</h1>
            <h5 class="">Last updated at: 07/10/2021</h5>
            <hr>
            <h3>INTRODUCTION</h3>
            <p>
              At CV Builder we respect the privacy of our users. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website <a href="http://buildcv.passio.work">http://buildcv.passio.work</a>,
              including any other media form, media channel, mobile website, or mobile application related or connected
              thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with
              the terms of this privacy policy, please do not access the site.
            </p>
            <p>
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert
              you about any changes by updating the “Last Updated” date of this Privacy Policy. Any changes or
              modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you
              waive the right to receive specific notice of each such change or modification.
            </p>
            <p>
              You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be
              deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in
              any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is
              posted.
            </p>
            <h4>COLLECTION OF YOUR INFORMATION</h4>
            <p>
              We may collect information about you in a variety of ways. The information we may collect on the Site
              includes:
            </p>
            <h4>
              Personal Data
            </h4>
            <p>
              Personally identifiable information, such as your email address & uploaded content that you voluntarily
              give to us when you use the Site when you choose to participate in various activities related to the Site.
              You are under no obligation to provide us with personal information of any kind, however your refusal to
              do so may prevent you from using certain features of the Site.
            </p>
            <h4>LinkedIn Permissions</h4>
            <p>
              The Site and our mobile application may by default access your LinkedIn basic account information,
              including your name, email, gender, birthday, current city, and profile picture URL, as well as other
              information that you choose to make public. We may also request access to other permissions related to
              your account, such as connections, and likes, and you may choose to grant or deny us access to each
              individual permission.
            </p>
            <h4>
              Third-Party Data
            </h4>
            <p>
              Information from third parties, such as personal information or network friends, if you connect your
              account to the third party and grant the Site permission to access this information.
            </p>
            <h4>
              Data from Contests, Giveaways, and Surveys
            </h4>
            <p>
              Personal and other information you may provide when entering contests or giveaways and/or responding to
              surveys.
            </p>
            <h4>
              USE OF YOUR INFORMATION
            </h4>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized
              experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul>
              <li>Administer sweepstakes, promotions, and contests.</li>
              <li>Assist law enforcement and respond to subpoena.</li>
              <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
              <li>Create and manage your Profile.</li>
              <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the
                Site to you.
              </li>
              <li>Email you regarding your Profile.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
              <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              <li>Notify you of updates to the Site.</li>
              <li>Offer new products, services, and/or recommendations to you.</li>
              <li>Perform other business activities as needed.</li>
              <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
              <li>Process payments and refunds.</li>
              <li>Request feedback and contact you about your use of the Site.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
              <li>Respond to product and customer service requests.</li>
              <li>Send you a newsletter.</li>
              <li>Solicit support for the Site.</li>
            </ul>
            <h4>DISCLOSURE OF YOUR INFORMATION</h4>
            <p>
              We may share information we have collected about you in certain situations. Your information may be
              disclosed as follows:
            </p>
            <h4>
              By Law or to Protect Rights
            </h4>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to
              investigate or remedy potential violations of our policies, or to protect the rights, property, and safety
              of others, we may share your information as permitted or required by any applicable law, rule, or
              regulation. This includes exchanging information with other entities for fraud protection and credit risk
              reduction.
            </p>
            <h4>
              Third-Party Service Providers
            </h4>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including
              payment processing, data analysis, email delivery, hosting services, customer service, and marketing
              assistance.
            </p>
            <h4>
              Marketing Communications
            </h4>
            <p>
              With your consent, or with an opportunity for you to withdraw consent, we may share your information with
              third parties for marketing purposes, as permitted by law.
            </p>
            <h4>
              Interactions with Other Users
            </h4>
            <p>
              If you interact with other users of the Site, those users may see your name, profile photo, and
              descriptions of your activity, including sending invitations to other users, chatting with other users,
              liking posts, following blogs.
            </p>
            <h4>Online Postings</h4>
            <p>When you post comments, contributions or other content to the Site, your posts may be viewed by all users
              and may be publicly distributed outside the Site in perpetuity.</p>
            <h4>Third-Party Advertisers</h4>
            <p>We may use third-party advertising companies to serve ads when you visit the Site. These companies may
              use information about your visits to the Site and other websites that are contained in web cookies in
              order to provide advertisements about goods and services of interest to you.
            </p>
            <h4>Affiliates</h4>
            <p>We may share your information with our affiliates, in which case we will require those affiliates to
              honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture
              partners or other companies that we control or that are under common control with us.
            </p>
            <h4>Business Partners</h4>
            <p>We may share your information with our business partners to offer you certain products, services or
              promotions.
            </p>
            <h4>Offer Wall</h4>
            <p>Our mobile application may display a third-party hosted “offer wall.” Such an offer wall allows
              third-party advertisers to offer virtual currency, gifts, or other items to users in return for acceptance
              and completion of an advertisement offer. Such an offer wall may appear in our mobile application and be
              displayed to you based on certain data, such as your geographic area or demographic information. When you
              click on an offer wall, you will leave our mobile application. A unique identifier, such as your user ID,
              will be shared with the offer wall provider in order to prevent fraud and properly credit your
              account.</p>
            <h4>Social Media Contacts</h4>
            <p>If you connect to the Site through a social network, your contacts on the social network will see your
              name, profile photo, and descriptions of your activity.</p>
            <h4>Other Third Parties</h4>
            <p>We may share your information with advertisers and investors for the purpose of conducting general
              business analysis. We may also share your information with such third parties for marketing purposes, as
              permitted by law.</p>
            <h4>Sale or Bankruptcy</h4>
            <p>If we reorganize or sell all or a portion of our assets, undergo a merger, or are acquired by another
              entity, we may transfer your information to the successor entity. If we go out of business or enter
              bankruptcy, your information would be an asset transferred or acquired by a third party. You acknowledge
              that such transfers may occur and that the transferee may decline honor commitments we made in this
              Privacy Policy.</p>
            <p>We are not responsible for the actions of third parties with whom you share personal or sensitive data,
              and we have no authority to manage or control third-party solicitations. If you no longer wish to receive
              correspondence, emails or other communications from third parties, you are responsible for contacting the
              third party directly.</p>
            <h4>TRACKING TECHNOLOGIES</h4>
            <h4>Cookies and Web Beacons</h4>
            <p>We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help
              customize the Site and improve your experience. When you access the Site, your personal information is not
              collected through the use of tracking technology. Most browsers are set to accept cookies by default. You
              can remove or reject cookies, but be aware that such action could affect the availability and
              functionality of the Site or our mobile application. You may not decline web beacons. However, they can be
              rendered ineffective by declining all cookies or by modifying your web browser’s settings to notify you
              each time a cookie is tendered, permitting you to accept or decline cookies on an individual basis.</p>
            <p>We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site and our
              mobile application to help customize the Site and our mobile application and improve your experience. For
              more information on how we use cookies, please refer to our Cookie Policy posted on the Site, which is
              incorporated into this Privacy Policy. By using the Site, you agree to be bound by our Cookie Policy.</p>
            <h4>Internet-Based Advertising</h4>
            <p>Additionally, we may use third-party software to serve ads on the Site and our mobile application,
              implement email marketing campaigns, and manage other interactive marketing initiatives. This third-party
              software may use cookies or similar tracking technology to help manage and optimize your online experience
              with us. For more information about opting-out of interest-based ads, visit the Network Advertising
              Initiative Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool.
            </p>
            <h4>Internet-Based Advertising</h4>
            <p>Additionally, we may use third-party software to serve ads on the Site and our mobile application,
              implement email marketing campaigns, and manage other interactive marketing initiatives. This third-party
              software may use cookies or similar tracking technology to help manage and optimize your online experience
              with us. For more information about opting-out of interest-based ads, visit the Network Advertising
              Initiative
              Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool.
            </p>
            <h4>Website Analytics</h4>
            <p>We may also partner with selected third-party vendors, such as Adobe Analytics, Clicktale, Clicky,
              Cloudfare,
              Crazy Egg, Flurry Analytics, Google Analytics, Heap Analytics, Inspectlet, Kissmetrics, Mixpanel, Piwik,
              and
              others, to allow tracking technologies and remarketing services on the Site through the use of first party
              cookies and third-party cookies, to, among other things, analyze and track users’ use of the Site,
              determine
              the popularity of certain content and better understand online activity. By accessing the Site, you
              consent to
              the collection and use of your information by these third-party vendors. You are encouraged to review
              their
              privacy policy and contact them directly for responses to your questions. We do not transfer personal
              information to these third-party vendors. However, if you do not want any information to be collected and
              used
              by tracking technologies, you can visit the third-party vendor or the Network Advertising Initiative
              Opt-Out
              Tool or Digital Advertising Alliance Opt-Out Tool.</p>
            <p>You should be aware that getting a new computer, installing a new browser, upgrading an existing browser,
              or
              erasing or otherwise altering your browser’s cookies files may also clear certain opt-out cookies,
              plug-ins,
              or settings.</p>
            <h4>THIRD-PARTY WEBSITES</h4>
            <p>The Site and our mobile application may contain links to third-party websites and applications of
              interest,
              including advertisements and external services, that are not affiliated with us. Once you have used these
              links to leave the Site, any information you provide to these third parties is not covered by this Privacy
              Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing
              any
              information to any third-party websites, you should inform yourself of the privacy policies and practices
              (if
              any) of the third party responsible for that website, and should take those steps necessary to, in your
              discretion, protect the privacy of your information. We are not responsible for the content or privacy and
              security practices and policies of any third parties, including other sites, services or applications that
              may
              be linked to or from the Site.</p>
            <h4>SECURITY OF YOUR INFORMATION</h4>
            <p>We use administrative, technical, and physical security measures to help protect your personal
              information.
              While we have taken reasonable steps to secure the personal information you provide to us, please be aware
              that despite our efforts, no security measures are perfect or impenetrable, and no method of data
              transmission
              can be guaranteed against any interception or other type of misuse. Any information disclosed online is
              vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete
              security if you provide personal information.</p>
            <h4>POLICY FOR CHILDREN</h4>
            <p>We do not knowingly solicit information from or market to children under the age of 13. If you become
              aware
              of any data we have collected from children under age 13, please contact us using the contact information
              provided below.</p>
            <h4>CONTROLS FOR DO-NOT-TRACK FEATURES</h4>
            <p>Most web browsers and some mobile operating systems include a Do-Not-Track (“DNT”) feature or setting you
              can
              activate to signal your privacy preference not to have data about your online browsing activities
              monitored
              and collected. No uniform technology standard for recognizing and implementing DNT signals has been
              finalized.
              As such, we do not currently respond to DNT browser signals or any other mechanism that automatically
              communicates your choice not to be tracked online. If a standard for online tracking is adopted that we
              must
              follow in the future, we will inform you about that practice in a revised version of this Privacy Policy.
              Most
              web browsers and some mobile operating systems include a Do-Not-Track (“DNT”) feature or setting you can
              activate to signal your privacy preference not to have data about your online browsing activities
              monitored
              and collected. If you set the DNT signal on your browser, we will respond to such DNT browser signals.</p>
            <h4>OPTIONS REGARDING YOUR INFORMATION</h4>
            <h4>Profile Information</h4>
            <p>You may at any time delete your profile by Contacting us using the contact information provided
              below.</p>
            <p>Upon your request to terminate your account, we will delete your posting and information from our active
              databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems,
              assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.</p>
            <p>Within the EU your data is covered by GDPR. If you are accessing the Site outside of the EU, check your
              local
              data regulations.</p>
            <h4>Emails and Communications</h4>
            <p>If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out
              by
              Contacting us using the contact information provided below</p>
            <p>If you no longer wish to receive correspondence, emails, or other communications from third parties, you
              are
              responsible for contacting the third party directly.</p>
            <h4>CALIFORNIA PRIVACY RIGHTS</h4>
            <p>California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are
              California residents to request and obtain from us, once a year and free of charge, information about
              categories of personal information (if any) we disclosed to third parties for direct marketing purposes
              and
              the names and addresses of all third parties with which we shared personal information in the immediately
              preceding calendar year. If you are a California resident and would like to make such a request, please
              submit
              your request in writing to us using the contact information provided below.</p>
            <p>If you are under 18 years of age, reside in California, and have a registered account with the Site, you
              have
              the right to request removal of unwanted data that you publicly post on the Site. To request removal of
              such
              data, please contact us using the contact information provided below, and include the email address
              associated
              with your account and a statement that you reside in California. We will make sure the data is not
              publicly
              displayed on the Site, but please be aware that the data may not be completely or comprehensively removed
              from
              our systems.</p>
            <h4>CONTACT US</h4>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <address>
              CV Builder<br>
              Stockholm<br>
              Sweden<br>
              <a href="mailto:info@passio.work">info@passio.work</a>
            </address>

          </div>
        </div>
      </div>
    </main>
    <div class="footer">
      <div class="left-content">
        <p class="copyright">&copy; BøthOfUs AB. All Rights Reserved.</p>
        <!--        <p class="prvplcy"><a href="/privacy-policy">Privacy Policy</a></p>-->
      </div>
      <div class="right-content d-flex">
        <div class="mr-4 social-icons">
          <!--          <a href="https://www.facebook.com/passiojob/" class="fa fa-facebook" target="_blank"></a>-->
          <!--          <a href="https://www.linkedin.com/company/passio-jobs/" class="fa fa-linkedin" target="_blank"></a>-->
        </div>
        <p class="m-0">
          <span class="mr-2">An initiative by</span>
          <a href="http://bothofus.se/" target="_blank"><img src="/img/bou-logo-gray.png"/></a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>

import $ from 'jquery';
import {languages} from '@/i18n';
import {initializeApp} from "firebase/app";
import {getAnalytics, logEvent} from "firebase/analytics";

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      languageArray: languages,
      format: 'DD/MM/YYYY',
      loading: false,
      analytics: null,
    }
  },
  methods: {},
  mounted: function () {
    var docHeight = document.body.scrollHeight;
    if (!window.matchMedia('(max-width: 767px)').matches) {
      $(window).scroll(function () {
        console.log();
        if ($(window).scrollTop() < (docHeight - 600))
          $(".cvPreviewScroll").stop().animate({
            "marginTop": ($(window).scrollTop()) + "px",
            "marginLeft": ($(window).scrollLeft()) + "px"
          }, "slow");
      });
    }


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDwaxRocD2w618O4TZQBZ72JlgPifcOKng",
      authDomain: "cv-builder-7d900.firebaseapp.com",
      projectId: "cv-builder-7d900",
      storageBucket: "cv-builder-7d900.appspot.com",
      messagingSenderId: "679491820850",
      appId: "1:679491820850:web:9a632bd44c90fe2e5acb2b"
    };

// Initialize Firebase
    initializeApp(firebaseConfig);
    this.analytics = getAnalytics();
    logEvent(this.analytics, 'screen_view', {
      firebase_screen: 'Privacy Policy - CV Builder',
      firebase_screen_class: 'homePage'
    });
  },
  computed: {
    lang: {
      get: function () {
        return this.$store.state.locale
      },
      set: function (newVal) {
        this.$store.dispatch('changeLocale', newVal)
      }
    }
  }
}
</script>
<style>
.multiselect__content-wrapper {
  min-height: 200px !important;
}
.cv-builder{
  color: #4a4a4a;
}
.animation{

}
</style>
