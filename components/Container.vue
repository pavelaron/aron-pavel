<template>
  <div id="container" ref="container">
    <!-- Tutorial -->
    <space-element :x="0" :y="56">
      <p class="tutorial">
        {{ moveAction }} &amp; hold on screen to move your ship
      </p>
    </space-element>
    <!-- Introduction -->
    <space-element :x="windowCenter.x - 100" :y="windowCenter.y + 150">
      <progressive-img id="profile" :src="require('@/assets/images/me.jpg')" alt="Aron Pavel" />
      <h1 class="intro">Aron Pavel</h1>
      <h1 class="intro">Mobile Application Developer</h1>
    </space-element>
    <space-element :x="windowCenter.x - 40" :y="windowCenter.y + 500">
      <arrow :angle="180" />
    </space-element>
    <space-element :x="windowCenter.x - 40" :y="windowCenter.y + 800">
      <p>Education</p><arrow :angle="90" />
    </space-element>
    <space-element :x="windowCenter.x - 20" :y="windowCenter.y + 1050">
      <arrow :angle="180" :size="40" />
    </space-element>
    <space-element :x="windowCenter.x + 540" :y="windowCenter.y + 800">
      <education
        :image="require('@/assets/images/education/bme.png')"
        interval="2004-2010"
        school="Technical University of Budapest"
        graduation="Faculty of mechanical engineering."
      />
    </space-element>
    <space-element :x="windowCenter.x + 960" :y="windowCenter.y + 1000">
      <arrow :angle="90" :size="40" />
    </space-element>
    <space-element :x="windowCenter.x + 1140" :y="windowCenter.y + 800">
      <education
        :image="require('@/assets/images/education/hunfalvy.png')"
        interval="1999-2004"
        school="Hunfalvy János, Bilingual High School of Foreign Trade and Economy"
        graduation="High school graduation."
      />
    </space-element>
    <!-- Professional experience -->
    <space-element :x="windowCenter.x - 40" :y="windowCenter.y + 1200">
      <p>Professional<br />Experience</p><arrow :angle="270" />
    </space-element>
    <space-element :x="windowCenter.x - 20" :y="windowCenter.y + 1500">
      <arrow :angle="180" :size="40" />
    </space-element>
    <space-element :x="windowCenter.x - 840" :y="windowCenter.y + 1200">
      <experience
        :logo="require('@/assets/images/experience/logo-rr.png')"
        interval="January 2019 – April 2020"
        company="Backend/iOS developer position at Revolution Robotics Foundation"
        :assignments="[
          'Development of Robot Controller mobile app (iOS / React Native).',
          'Development of API serving the mobile apps in Node JS'
        ]"
      />
    </space-element>
    <space-element :x="windowCenter.x - 980" :y="windowCenter.y + 1400">
      <arrow :angle="270" :size="40" />
    </space-element>
    <space-element :x="windowCenter.x - 1340" :y="windowCenter.y + 1200">
      <experience
        :logo="require('@/assets/images/experience/logo-black-swan.png')"
        interval="October 2015 – June 2018"
        company="Front-end/iOS developer position at Black Swan Data"
        :assignments="[
          'Development of in-flight entertainment system portals (front-end & iOS).',
          'Development of a fitness app (iOS - written in Obj-C & Swift)'
        ]"
      />
    </space-element>
    <space-element :x="windowCenter.x - 1480" :y="windowCenter.y + 1400">
      <arrow :angle="270" :size="40" />
    </space-element>
    <space-element :x="windowCenter.x - 1840" :y="windowCenter.y + 1200">
      <experience
        :logo="require('@/assets/images/experience/logo-virgo.jpg')"
        interval="October 2013 – May 2015"
        company="Android developer position at Virgo Systems Ltd. (Canecom-Virgo agreement)"
        :assignments="[
          'Android application development for Swiss clients.'
        ]"
      />
    </space-element>
    <space-element :x="windowCenter.x - 1980" :y="windowCenter.y + 1400">
      <arrow :angle="270" :size="40" />
    </space-element>
    <space-element :x="windowCenter.x - 2340" :y="windowCenter.y + 1200">
      <experience
        :logo="require('@/assets/images/experience/logo-canecom.png')"
        interval="August 2012 – June 2015"
        company="Android developer position at Canecom Ltd."
        :assignments="[
          'Android application development and testing for clients',
          'Mobilessence application development and testing.'
        ]"
      />
    </space-element>
    <space-element :x="windowCenter.x - 2480" :y="windowCenter.y + 1400">
      <arrow :angle="270" :size="40" />
    </space-element>
    <space-element :x="windowCenter.x - 2840" :y="windowCenter.y + 1200">
      <experience
        :logo="require('@/assets/images/experience/logo-artklikk.jpg')"
        interval="February 2012 – June 2012"
        company="Android developer position at Artklikk Ltd."
        :assignments="[
          'Development of an HTML editor for an online mobile application deployment interface',
          'Web page editing',
          'Creating Paypal payment transaction systems.'
        ]"
      />
    </space-element>
    <space-element :x="windowCenter.x - 2980" :y="windowCenter.y + 1400">
      <arrow :angle="270" :size="40" />
    </space-element>
    <space-element :x="windowCenter.x - 3340" :y="windowCenter.y + 1200">
      <experience
        :logo="require('@/assets/images/experience/logo-salus.jpg')"
        interval="November 2010 – April 2011"
        company="Developer position at Salus Orthopédtechnika Ltd."
        :assignments="[
          'Writing development reports',
          'Creating a body scanning software for the production of scoliosis healing corsettes in Java (J2ME) language.'
        ]"
      />
    </space-element>
    <space-element :x="windowCenter.x - 3480" :y="windowCenter.y + 1400">
      <arrow :angle="270" :size="40" />
    </space-element>
    <space-element :x="windowCenter.x - 3840" :y="windowCenter.y + 1200">
      <experience
        :logo="require('@/assets/images/education/bme.png')"
        interval="August 2010 – April 2011"
        company="Mobile software developer position at the Technical University of Budapest. – Spineguard project"
        :assignments="[
          'Development, testing and design supervision of a mobile spinal mouse (tool for diagnosing scoliosis) application for Symbian devices (in Python S60 language).'
        ]"
      />
    </space-element>
    <!-- Projects developed -->
    <space-element :x="windowCenter.x - 40" :y="windowCenter.y + 1700">
      <p>Projects Developed</p><arrow :angle="90" />
    </space-element>
    <space-element :x="windowCenter.x - 20" :y="windowCenter.y + 2000">
      <arrow :angle="180" :size="40" />
    </space-element>
    <space-element :x="windowCenter.x + 340" :y="windowCenter.y + 1900">
      <project :src="require('@/assets/images/projects/fashionstreet.png')" title="Fashion Street"></project>
    </space-element>
    <space-element :x="windowCenter.x + 820" :y="windowCenter.y + 1800">
      <project :src="require('@/assets/images/projects/vatera.png')" title="Vatera"></project>
    </space-element>
    <space-element :x="windowCenter.x + 580" :y="windowCenter.y + 2200">
      <project :src="require('@/assets/images/projects/generali-car.jpg')" title="Generali SMART autó"></project>
    </space-element>
    <space-element :x="windowCenter.x + 980" :y="windowCenter.y + 2100">
      <project :src="require('@/assets/images/projects/generali-realestate.jpg')" title="Generali SMART ingatlan"></project>
    </space-element>
    <space-element :x="windowCenter.x + 640" :y="windowCenter.y + 1900">
      <project :src="require('@/assets/images/projects/robot-controller.jpg')" title="Robot Controller"></project>
    </space-element>
    <space-element :x="windowCenter.x + 540" :y="windowCenter.y + 1650">
      <project :src="require('@/assets/images/projects/ilandguide.jpg')" title="iLandGuide"></project>
    </space-element>
    <space-element :x="windowCenter.x + 1100" :y="windowCenter.y + 1950">
      <project :src="require('@/assets/images/projects/liligo.jpg')" title="Liligo"></project>
    </space-element>
    <space-element :x="windowCenter.x + 780" :y="windowCenter.y + 2400">
      <project :src="require('@/assets/images/projects/mit-sloan.jpg')" title="MIT Sloan"></project>
    </space-element>
    <space-element :x="windowCenter.x + 1250" :y="windowCenter.y + 1700">
      <project :src="require('@/assets/images/projects/pepsi-twist.jpg')" title="Pepsi TWIST Citrompótló"></project>
    </space-element>
    <space-element :x="windowCenter.x + 1100" :y="windowCenter.y + 2300">
      <project :src="require('@/assets/images/projects/oranum.jpg')" title="Oranum"></project>
    </space-element>
    <!-- Known programming languages & frameworks -->
    <space-element :x="windowCenter.x - 40" :y="windowCenter.y + 2200">
      <p>Known programming languages &amp; frameworks</p><arrow :angle="270" />
    </space-element>
    <space-element :x="windowCenter.x - 20" :y="windowCenter.y + 2550">
      <arrow :angle="180" :size="40" />
    </space-element>
    <space-element :x="windowCenter.x - 640" :y="windowCenter.y + 2200">
      <programming :src="require('@/assets/images/programming/node-js.png')" name="Node JS"></programming>
    </space-element>
    <space-element :x="windowCenter.x - 440" :y="windowCenter.y + 2400">
      <programming :src="require('@/assets/images/programming/flutter.png')" name="Flutter (Dart)"></programming>
    </space-element>
    <space-element :x="windowCenter.x - 840" :y="windowCenter.y + 2500">
      <programming :src="require('@/assets/images/programming/swift.png')" name="Swift"></programming>
    </space-element>
    <space-element :x="windowCenter.x - 1100" :y="windowCenter.y + 2100">
      <programming :src="require('@/assets/images/programming/sass.png')" name="Sass"></programming>
    </space-element>
    <space-element :x="windowCenter.x - 1180" :y="windowCenter.y + 2400">
      <programming :src="require('@/assets/images/programming/kotlin.png')" name="Kotlin"></programming>
    </space-element>
    <space-element :x="windowCenter.x - 640" :y="windowCenter.y + 2600">
      <programming :src="require('@/assets/images/programming/react.png')" name="React &amp;<br>React Native"></programming>
    </space-element>
    <space-element :x="windowCenter.x - 1300" :y="windowCenter.y + 2250">
      <programming :src="require('@/assets/images/programming/angular.png')" name="Angular"></programming>
    </space-element>
    <space-element :x="windowCenter.x - 900" :y="windowCenter.y + 2300">
      <programming :src="require('@/assets/images/programming/vue.png')" name="Vue JS"></programming>
    </space-element>
    <space-element :x="windowCenter.x - 1350" :y="windowCenter.y + 2550">
      <programming :src="require('@/assets/images/programming/php.png')" name="PHP"></programming>
    </space-element>
    <space-element :x="windowCenter.x - 1100" :y="windowCenter.y + 2600">
      <programming :src="require('@/assets/images/programming/python.png')" name="Python"></programming>
    </space-element>
    <!-- Other skills & abilities -->
    <space-element :x="windowCenter.x - 40" :y="windowCenter.y + 2700">
      <p>Other skills &amp; abilities</p><arrow :angle="180" />
    </space-element>
    <space-element :x="windowCenter.x - 40" :y="windowCenter.y + 3200">
      <div>Spoken languages:</div>
    </space-element>
    <space-element :x="windowCenter.x - 80" :y="windowCenter.y + 3300">
      <img src="@/assets/images/other/flag-uk.gif" alt="English" />
    </space-element>
    <space-element :x="windowCenter.x - 20" :y="windowCenter.y + 3450">
      <img src="@/assets/images/other/flag-france.gif" alt="French" />
    </space-element>
    <space-element :x="windowCenter.x - 400" :y="windowCenter.y + 3500">
      <img class="img-license" src="@/assets/images/other/license.jpg" alt="Driver's license" />
      <div class="desc-license">Driver's license:​ B category, acquired in 2002.</div>
    </space-element>
    <space-element :x="windowCenter.x - 10" :y="windowCenter.y + 3700">
      <div class="container-awards">
        <img class="img-awards" src="@/assets/images/other/awards.png" alt="Awards" />
        <h3 class="title-awards">Awards, acknowledgements</h3>
        <div class="desc-awards">
          <p>
            <strong>Scientific student conference (2010.) – II. place</strong><br />
            Artwork: Intelligent, Wireless Scoliosis Diagnostic and Measurement System Development.
          </p>
          <p>
            <strong>T-Mobile, MobilNet II. Competition (2009.) – II. place</strong><br />
            Artwork: SMS sending using the Braille alphabet.
          </p>
          <p>
            <strong>Scientific student conference (2008.) – II. place</strong><br />
            Artwork: Development of a software based color temperature measuring device for mobile phones.
          </p>
        </div>
      </div>
    </space-element>
  </div>
</template>

<script>
import SpaceElement from '@/components/SpaceElement'
import Arrow from '@/components/Arrow'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Project from '@/components/Project'
import Programming from '@/components/Programming'

export default {
  name: 'container',
  components: {
    SpaceElement,
    Arrow,
    Education,
    Experience,
    Project,
    Programming
  },
  computed: {
    moveAction () {
      return 'ontouchstart' in document.documentElement ? 'Tap' : 'Click'
    },
    windowCenter () {
      return {
        x: Math.floor(window.innerWidth / 2),
        y: Math.floor(window.innerHeight / 2)
      }
    }
  }
}
</script>

<style>
#container {
  position: absolute;
  color: white;
}

#profile {
  width: 200px;
  height: 200px;
  background-color: white;
  border-color: white;
  border-style: solid;
  border-width: 5px;
  border-radius: 50%;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  mask-image: -webkit-radial-gradient(white, black);
}

img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.tutorial {
  display: inline-block;
  padding: 20px 15px;
  width: 180px;
}

.intro {
  font-size: 18px;
  text-align: center;
}

.img-license {
  width: 200px;
}

.container-awards {
  text-align: center;
}

.img-awards {
  width: 100px;
}

.title-awards {
  text-decoration: underline;
}

.desc-awards {
  min-width: 300px;
}

.desc-license,
.desc-awards {
  text-align: center;
}

@media screen and (orientation: landscape) {
  .ios.pwa #container .tutorial {
    padding-left: constant(safe-area-inset-left);
    padding-left: env(safe-area-inset-left);
  }
}
</style>
