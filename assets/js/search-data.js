// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-other-projects",
          title: "Other projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-the-economist-39-s-guide-to-causal-forests",
        
          title: "The Economist&#39;s Guide to Causal Forests",
        
        description: "A guide to understanding and implementing causal forests for heterogeneous treatment effect estimation, bridging the gap between machine learning and econometrics.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/causal-forests-guide/";
          
        },
      },{id: "news-started-my-phd-at-bocconi",
          title: 'Started my PhD at Bocconi',
          description: "",
          section: "News",},{id: "news-i-made-a-little-julia-replication-of-this-paper-that-compares-the-effectiveness-of-government-policies-in-a-pandemic-in-a-theoretical-model-if-you-like-have-a-look-at-the-github-repo-and-the-documentation",
          title: 'I made a little Julia replication of this paper that compares the effectiveness...',
          description: "",
          section: "News",},{id: "news-i-shared-some-code-on-github-that-scrapes-and-formats-information-on-us-state-legislative-majorities-from-ballotpedia",
          title: 'I shared some code on GitHub that scrapes and formats information on US...',
          description: "",
          section: "News",},{id: "news-i-m-visiting-harvard-s-department-of-government-as-a-fellow-from-january-to-may-2025",
          title: 'I’m visiting Harvard’s Department of Government as a Fellow from January to May...',
          description: "",
          section: "News",},{id: "news-i-ll-present-my-paper-on-political-effects-of-newspaper-paywalls-at-the-eea-congress-2025-in-bordeaux",
          title: 'I’ll present my paper on Political Effects of Newspaper Paywalls at the EEA...',
          description: "",
          section: "News",},{id: "news-this-fall-i-ll-join-nabe-tec25-in-seattle-the-ai-economics-workshop-at-eth-zurich-and-the-econometric-society-european-winter-meeting-in-nicosia",
          title: 'This fall, I’ll join NABE TEC25 in Seattle, the AI+Economics Workshop at ETH...',
          description: "",
          section: "News",},{id: "projects-the-economist-39-s-guide-to-causal-forests",
          title: 'The Economist&amp;#39;s Guide to Causal Forests',
          description: "Introduction to the econometric foundations of Causal Forests",
          section: "Projects",handler: () => {
              window.location.href = "/projects/01_causalforests/";
            },},{id: "projects-the-hammer-and-the-scalpel",
          title: 'The Hammer and the Scalpel',
          description: "Simulations of social and economic impacts of pandemic lockdown policies. Julia Replication of Chari, Kirpalani, and Phelan (2021)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/02_hammerscalpel/";
            },},{id: "projects-regression-discontinuity-with-many-covariates",
          title: 'Regression Discontinuity with Many Covariates',
          description: "I developed and tested a method to select covariates for RD designs (master thesis).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/03_rdlasso/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv_julian_streyczek.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%75%6C%69%61%6E.%73%74%72%65%79%63%7A%65%6B@%70%68%64.%75%6E%69%62%6F%63%63%6F%6E%69.%69%74", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/JulianStreyczek", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/julian-streyczek", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
