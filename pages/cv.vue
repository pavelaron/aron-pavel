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
            <div>
              <a href="mailto:pavelaron84@gmail.com">pavelaron84@gmail.com</a>
            </div>
          </div>
          <div class="item-info">
            <h4>Personal website</h4>
            <div>
              <a href="https://aron-pavel.web.app">https://aron-pavel.web.app</a>
            </div>
          </div>
          <div class="item-info">
            <h4>LinkedIn</h4>
            <div>
              <a href="https://linkedin.com/in/aron-pavel">https://linkedin.com/in/aron-pavel</a>
            </div>
          </div>
          <div class="item-info">
            <h4>Spoken languages</h4>
            <ul class="list-languages">
              <li>Hungarian - Native</li>
              <li>English - Advanced</li>
              <li>French - Advanced</li>
            </ul>
          </div>
          <div class="item-info">
            <h4>Interests</h4>
            <ul class="list-interests">
              <li>Artificial intelligence</li>
              <li>Internet of things</li>
              <li>Quantum computing</li>
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
            <li v-for="position in require('@/assets/data/cv-professional.json')" :key="position.title" class="item-timeline">
              <span>
                <strong>{{ position.start }} - {{ position.end }}</strong> - {{ position.title }}
                <div class="assignments">Assignments:</div>
                <ul class="list-assignments">
                  <li v-for="assignment in position.assignments" :key="assignment">{{ assignment }}</li>
                </ul>
              </span>
            </li>
          </ul>
        </section>
        <section class="section-projects">
          <h3>Projects developed</h3>
          <hr>
          <div class="container-projects">
            <div v-for="project in require('@/assets/data/cv-projects.json')" :key="project.name" class="project">
              <img :src="require(`@/assets/images/projects/${project.image}`)" :alt="project.name">
              <span>{{ project.name }}</span>
            </div>
          </div>
        </section>
        <section class="section-skills">
          <h3>Skills</h3>
          <hr>
          <ul>
            <li>Android application development (including Wear OS) in Java & Kotlin</li>
            <li>iOS application development in Objective-C & Swift</li>
            <li>Application development for both platforms using React-Native</li>
            <li>Application development for both platforms using Flutter</li>
            <li>Progressive web app (PWA) development</li>
          </ul>
          <div class="web-technologies">
            Web technologies used: PHP, Node JS, React, Next, Angular, Vue, Nuxt
          </div>
        </section>
        <section class="section-references">
          <h3>Website references</h3>
          <hr>
          <ul>
            <li v-for="reference in require('@/assets/data/cv-references.json')" :key="reference.url">
              <a :href="reference.url">{{ reference.url }}</a> - {{ reference.description }}
            </li>
          </ul>
        </section>
        <section class="section-awards">
          <h3>Awards, acknowledgements</h3>
          <hr>
          <ul>
            <li v-for="award in require('@/assets/data/cv-awards.json')" :key="award.title">
              <h5>{{ award.title }}</h5>
              <div>Artwork: {{ award.artwork }}</div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}

.container-cv {
  --pages: 2;
  --full-height: calc(var(--pages) * 297mm);
  --color-primary: rgb(69, 90, 100);

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(222, 222, 222);
  margin: 0;
  padding: 20px 0;
  height: var(--full-height);

  &.paper {
    padding: 0;
  }
}

.paper {
  display: flex;
  width: 210mm;
  height: calc(var(--full-height) - 30mm + 0.5px);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: white;

  .sidebar {
    display: flex;
    flex-direction: column;
    width: 60mm;
    background-color: var(--color-primary);
    padding-top: 5mm;
    color: white;
  }

  .sidebar .container-info {
    display: flex;
    flex-direction: column;
  }

  .sidebar .list-languages,
  .sidebar .list-interests {
    padding-left: 5mm;
  }

  .sidebar h3 {
    margin: 5mm;
    text-decoration: underline;
    text-transform: uppercase;
  }

  .sidebar .item-info {
    margin: 2mm 5mm;

    a,
    a:visited,
    a:focus,
    a:hover {
      color: white;
      background-color: transparent;
    }
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

  .section-projects {
    margin-top: 40mm;

    h3 {
      text-transform: uppercase;
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
      background-color: var(--color-primary);
      width: 1mm;
      left: 0.5mm;
      top: 2mm;
      bottom: 7mm;
    }
  }

  .list-professional::before {
    bottom: 30mm;
  }

  .container-projects {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 5mm;
    column-gap: 2mm;
    margin-top: 5mm;

    .project {
      text-align: center;
    }

    .project img {
      width: 15mm;
      height: 15mm;
    }

    .project span {
      display: block;
      text-align: center;
    }
  }

  .section-skills,
  .section-references,
  .section-awards {
    margin-top: 10mm;

    ul {
      margin-top: 5mm;
      margin-left: 5mm;
    }

    h3 {
      text-transform: uppercase;
    }
  }

  .section-awards li {
    margin-bottom: 2mm;
  }

  .web-technologies {
    margin-top: 5mm;
  }
}
</style>
