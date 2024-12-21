<template>
  <div class="container-cv">
    <div class="paper">
      <div class="sidebar">
        <img
          :src="require('@/assets/images/me.jpg')"
          alt="Aron Pavel"
          class="profile"
        >
        <div class="container-info">
          <h3>Personal info</h3>
          <div class="item-info">
            <h4>Date of birth</h4>
            <div>01/10/1984</div>
          </div>
          <div class="item-info">
            <h4>Address</h4>
            <div>1132 Visegrádi u. 42-46 Budapest, Hungary</div>
          </div>
          <div class="item-info">
            <h4>Phone number</h4>
            <div>+36 70 327 5726</div>
          </div>
          <div class="item-info">
            <h4>Email address</h4>
            <div>pavelaron84@gmail.com</div>
          </div>
          <div class="item-info">
            <h4>Personal website</h4>
            <div>https://aron-pavel.web.app</div>
          </div>
          <div class="item-info">
            <h4>LinkedIn</h4>
            <div>https://linkedin.com/in/aron-pavel</div>
          </div>
          <div class="item-info">
            <h4>Spoken languages</h4>
            <ul class="list-languages">
              <li>Hungarian - Native</li>
              <li>English - Advanced</li>
              <li>French - Advanced</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="content">
        <h1>Áron Pável</h1>
        <h4>Mobile Application Developer</h4>
        <section class="section-cv">
          <h3>Education</h3>
          <hr>
          <ul class="list-education">
            <li class="item-timeline">
              <span>
                <strong>2004 - 2010</strong> - Technical University of Budapest, Faculty of mechanical engineering
              </span>
            </li>
            <li class="item-timeline">
              <span>
                <strong>1999 - 2004</strong> - Hunfalvy János, Bilingual High School of Foreign Trade and Economy - High school graduation
              </span>
            </li>
          </ul>
        </section>
        <section class="section-cv">
          <h3>Professional experience</h3>
          <hr>
          <ul class="list-professional">
            <li class="item-timeline">
              <span>
                <strong>2021 - 2024</strong> - Full stack developer position at Splendex Ltd.
                <div class="assignments">Assignments:</div>
                <ul class="list-assignments">
                  <li>Working on Mobile development (mostly React Native) projects</li>
                  <li>Development of an AI digital signage software for Raspberry Pi devices</li>
                </ul>
              </span>
            </li>
            <li class="item-timeline">
              <span>
                <strong>2019 - 2020</strong> - Backend/iOS developer position at Revolution Robotics Foundation
                <div class="assignments">Assignments:</div>
                <ul class="list-assignments">
                  <li>Development of Robot Controller mobile app (iOS / React Native)</li>
                  <li>Development of API serving the mobile apps in Node JS</li>
                </ul>
              </span>
            </li>
            <li class="item-timeline">
              <span>
                <strong>2015 - 2018</strong> - Frontend/iOS developer position at Black Swan Data
                <div class="assignments">Assignments:</div>
                <ul class="list-assignments">
                  <li>Development of in-flight entertainment system portals (frontend & iOS)</li>
                  <li>Development of a fitness app (iOS - written in Obj-C & Swift)</li>
                </ul>
              </span>
            </li>
            <li class="item-timeline">
              <span>
                <strong>2012 - 2015</strong> - Android developer position at Canecom Ltd.
                <div class="assignments">Assignments:</div>
                <ul class="list-assignments">
                  <li>Android application development and testing for clients</li>
                  <li>Mobilessence application development and testing</li>
                </ul>
              </span>
            </li>
            <li class="item-timeline">
              <span>
                <strong>2010 - 2011</strong> - Mobile software developer position at the Technical University of Budapest - Spineguard project
                <div class="assignments">Assignments:</div>
                <ul class="list-assignments">
                  <li>Development, testing and design supervision of a mobile spinal mouse (tool for diagnosing scoliosis) application for Symbian devices (in Python S60 language)</li>
                </ul>
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container-cv {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin: 0;
  padding: 40px 30px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  .paper {
    display: flex;
    width: 210mm;
    height: 297mm;
    background-color: white;
    box-shadow:
      0.9px 0.9px 3.6px rgba(0, 0, 0, 0.038),
      2.5px 2.5px 10px rgba(0, 0, 0, 0.051),
      6px 6px 24.1px rgba(0, 0, 0, 0.059),
      20px 20px 80px rgba(0, 0, 0, 0.07)
    ;

    .sidebar {
      display: flex;
      flex-direction: column;
      width: 60mm;
      background-color: rgb(107, 66, 57);
      padding-top: 5mm;
      color: white;
    }

    .sidebar .container-info {
      display: flex;
      flex-direction: column;
    }

    .sidebar .list-languages {
      padding-left: 5mm;
    }

    .sidebar h3 {
      margin: 5mm;
      text-decoration: underline;
      text-transform: uppercase;
    }

    .sidebar .item-info {
      margin: 2mm 5mm;
    }

    .content {
      display: flex;
      flex: 1;
      flex-direction: column;
      height: 100%;
      padding: 15mm 10mm;
    }

    .profile {
      position: relative;
      align-self: center;
      width: 50mm;
      height: 50mm;
      margin: 5mm auto;
      border-radius: 50%;
      border-style: solid;
      border-color: white;
      border-width: 2mm;
    }

    .section-cv {
      margin: 6mm 0;

      h3 {
        text-transform: uppercase;
      }

      hr {
        margin-bottom: 3mm;
      }

      .assignments {
        margin-top: 3mm;
        text-decoration: underline;
      }

      .list-assignments {
        margin-left: 5mm;
        list-style-image: initial;
      }
    }

    .list-education,
    .list-professional {
      position: relative;
      padding-left: 5mm;

      .item-timeline {
        position: relative;
        padding-left: 5mm;
        margin-bottom: 5mm;
        list-style-image: url('@/assets/images/cv/timeline-dot.svg');
      }

      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 1mm;
        background-color: rgb(107, 66, 57);
        left: 1.4mm;
        top: 2mm;
        bottom: 6mm;
      }
    }

    .list-professional::before {
      bottom: 30mm;
    }
  }
}
</style>
