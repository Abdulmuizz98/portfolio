import { FC } from "react";
import { ApReact, ApCss, ApVue } from "../../Icon";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDjango,
  SiC,
  SiNodedotjs,
  SiFlask,
} from "react-icons/si";
import ProjectsSidePane from "./projects/ProjectsSidePane";
import ProjectsMain from "./projects/ProjectsMain";

const technologies = [
  {
    name: "React",
    icon: <ApReact />,
  },

  {
    name: "CSS",
    icon: <ApCss />,
  },
  {
    name: "Vue",
    icon: <ApVue />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size="20px" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size="20px" />,
  },
  {
    name: "Python",
    icon: <SiPython size="20px" />,
  },
  {
    name: "Django",
    icon: <SiDjango size="20px" />,
  },
  {
    name: "C/C++",
    icon: <SiC size="20px" />,
  },
  {
    name: "Flask",
    icon: <SiFlask size="20px" />,
  },
  {
    name: "Nodejs",
    icon: <SiNodedotjs size="20px" />,
  },
];

const projects = [
  {
    name: "planpal",
    url: "/",
    github: "https://github.com/Abdulmuizz98/plan-pal",
    demo: "",
    description:
      "A serverless task management app. An extra feature of the tool is its ability to attach files to tasks.",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/printf_xqnafd.png",
    techs: ["AWS", "TypeScript"],
  },
  {
    name: "printf",
    url: "",
    github: "https://github.com/Abdulmuizz98/printf",
    demo: "",
    description:
      "A versatile output converter akin to the C library printf function. My implementation encompasses both fundamental and advanced features.",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/printf_xqnafd.png",
    techs: ["C/C++"],
  },
  {
    name: "dtecteet",
    url: "https://jutsu.ai/oraio.near/widget/dTecteet.index",
    github: "https://jutsu.ai/search/oraio.near/widget/dTecteet.index",
    demo: "",
    description:
      "A code detection tool that identify usage of external APIs (including NEAR and Ethers.js APIs) within other components in the BOS.",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/dtecteet_nwkxmh.png",
    techs: ["JavaScript", "React", "CSS"],
  },
  {
    name: "shopify-merchant-dashboard",
    url: "https://oraio-shopify-dashboard.netlify.app/",
    github: "https://github.com/Abdulmuizz98/shopify-dashboard",
    demo: "",
    description:
      "A Shopify merchant dashboard UI with pixel-perfect design and smooth interactions for all users, including those using keyboards and screen readers.",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/shopify_d86fkn.avif",
    techs: ["CSS", "JavaScript"],
  },
  {
    name: "h-and-h",
    url: "https://h-and-h.netlify.app",
    github: "",
    demo: "",
    description: "Product landing page for the h-and-h jewel brand.",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/h-and-h_c5fpsm.avif",
    techs: ["Bootstrap", "React", "JavaScript"],
  },
  {
    name: "treemap-diagram",
    url: "https://oraio-treemap-diagram.netlify.app",
    github: "",
    demo: "",
    description:
      "A treemap visualization for video game sales, movie sales and kickstarter pledges.",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/treemap_pvlmfh.avif",
    techs: ["CSS", "D3", "JavaScript"],
  },
  {
    name: "us-education-choroplethmap",
    url: "https://oraio-us-education-choroplethmap.netlify.app",
    github: "",
    demo: "",
    description:
      "A choropleth map visualization of the united states educational attainment by county.",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/choroplethmap_putaxw.avif",
    techs: ["CSS", "D3", "JavaScript"],
  },
  {
    name: "temperature-heatmap",
    url: "https://oraio-temperature-heatmap.netlify.app",
    github: "",
    demo: "test",
    description:
      "Heatmap visualization of the monthly global land-surface temperature from year 1753 to 2015",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/heatmap_vxrlke.avif",
    techs: ["CSS", "D3", "JavaScript"],
  },
  {
    name: "doping-scatterplot",
    url: "https://oraio-doping-scatterplot.netlify.app",
    github: "",
    demo: "",
    description:
      "A scatterplot visualization of doping in professional bicycle racing.",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/scatterplot_jsrp5l.avif",
    techs: ["CSS", "D3", "JavaScript"],
  },
  {
    name: "us-gdp-barchart",
    url: "https://oraio-us-gdp-barchart.netlify.app",
    github: "",
    demo: "",
    description: "The United States GDP visualization by bar chart",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/us-barchart_seukfm.avif",
    techs: ["CSS", "D3", "JavaScript"],
  },
  {
    name: "pomodoro-clock",
    url: "https://oraio-pomodoro-clock.netlify.app",
    github: "",
    demo: "",
    description: "A flexible 25-5 pomodoro alarm clock. ",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/pomodoro_qdyuz1.avif",
    techs: ["Tailwindcss", "React", "JavaScript"],
  },
  {
    name: "js-calculator",
    url: "https://oraio-js-calculator.netlify.app",
    github: "",
    demo: "",
    description: "A user-friendly javascript calculator.",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/jscalculator_fqmxth.avif",
    techs: ["Tailwindcss", "React", "JavaScript"],
  },
  {
    name: "drum-machine",
    url: "https://oraio-drum-machine.netlify.app",
    github: "",
    demo: "",
    description:
      "A user-friendly drum machine controllable via mouse or keyboard. It includes features for power, volume, and bank control, enhancing usability.",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/drummachine_mqbm9b.avif",
    techs: ["Tailwindcss", "React", "JavaScript"],
  },
  {
    name: "markdown-previewer",
    url: "https://oraio-markdown-previewer.netlify.app",
    github: "",
    demo: "",
    description: "A flavor rich markdown previewer.",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/markdownprev_rk8xsz.avif",
    techs: ["Tailwindcss", "React", "JavaScript"],
  },
  {
    name: "random-quotes-machine",
    url: "https://oraio-random-quotes-machine.netlify.app",
    github: "",
    demo: "",
    description:
      "A random quote generator with Twitter integration. Users can post generated quotes directly to Twitter if authenticated.",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/randomquotes_ziw5ao.avif",
    techs: ["Tailwindcss", "React", "JavaScript"],
  },
  {
    name: "tribute-page",
    url: "https://oraio-markdown-previewer.netlify.app",
    github: "",
    demo: "",
    description:
      "Mastering the fundamentals of responsive web design with a simple tribute page.",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/tribute_page_hgz6fl.avif",
    techs: ["CSS"],
  },
  {
    name: "technical-docs-page",
    url: "https://oraio-technical-docs-page.netlify.app",
    github: "",
    demo: "",
    description:
      "Mastering the fundamentals of responsive web design with a simple demo technical documentation page",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/technical_doc_rxq8op.avif",
    techs: ["CSS"],
  },
  {
    name: "survey-form",
    url: "https://oraio-survey-form.netlify.app",
    github: "",
    demo: "",
    description: "Mastering html forms with a simple survey form.",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/survey_form_rjr0h5.avif",
    techs: ["CSS"],
  },
  {
    name: "product-landing-page",
    url: "https://oraio-product-landing-page.netlify.app",
    github: "",
    demo: "",
    description:
      "Mastering the fundamentals of responsive web design with a simple product landing page.",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/prod_landing_cisuim.avif",
    techs: ["CSS"],
  },
  {
    name: "personal-portfolio-webpage",
    url: "https://oraio-personal-portfolio-webpage.netlify.app",
    github: "",
    demo: "",
    description:
      "Mastering the fundamentals of responsive web design with a simple personal portfolio webpage.",
    image:
      "https://res.cloudinary.com/dhfmfn3y7/image/upload/f_auto/portfolio_images/portfolio_webpage_vjulhc.avif",
    techs: ["CSS"],
  },
];

const Projects: FC = () => {
  return (
    <section className="projects page w-full alt-main-height flex flex-col lg:flex-row border border-gray">
      <h2 className="text-white lg:hidden py-5 px-8 font-medium">_projects</h2>
      <ProjectsSidePane technologies={technologies} />
      <ProjectsMain projects={projects} />
    </section>
  );
};

export default Projects;
