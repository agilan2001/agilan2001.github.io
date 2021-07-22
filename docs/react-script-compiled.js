/* BABEL COMPILE COMMAND
npx babel public/react-script.js --out-file public/react-script-compiled.js
*/
const ImgCaption = ({
  data
}) => /*#__PURE__*/React.createElement("div", {
  className: "imgCaption"
}, /*#__PURE__*/React.createElement("img", {
  src: "./icons/" + data.split(":")[0] + ".png",
  style: {
    width: '80px',
    display: 'block',
    margin: 'auto'
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: "center"
  }
}, data.split(":")[0], /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 'small'
  }
}, data.split(":")[1])));

const WebTechComp = () => {
  var lang = ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "React", "React-Native", "NodeJS"];
  return lang.map((e, i) => /*#__PURE__*/React.createElement(ImgCaption, {
    data: e
  }));
};

const ProgLangComp = () => {
  var lang = ["C", "C++", "Java", "VB", "Python:(beginner)"];
  return lang.map((e, i) => /*#__PURE__*/React.createElement(ImgCaption, {
    data: e
  }));
};

const DevTechComp = () => {
  var lang = ["Firebase", "AWS", "HEROKU", "GIT"];
  return lang.map((e, i) => /*#__PURE__*/React.createElement(ImgCaption, {
    data: e
  }));
};

const CertComp = ({
  data
}) => /*#__PURE__*/React.createElement("div", {
  className: "cert_comp"
}, /*#__PURE__*/React.createElement("img", {
  src: "./icons/" + data.issue + ".png",
  style: {
    width: '80px',
    margin: 'auto 10px'
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    height: 'fit-content',
    margin: 'auto 0'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontWeight: 'bold',
    fontSize: 'larger'
  }
}, data.title), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'red'
  }
}, data.issue)), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: 'oblique',
    fontSize: 'smaller'
  }
}, data.date), /*#__PURE__*/React.createElement("a", {
  target: "_blank",
  href: data.url,
  className: 'btn btn-primary',
  style: {
    position: 'absolute',
    right: '10px',
    bottom: '5px'
  }
}, "View")));

const TestimonComp = () => [{
  title: "Algorithmic ToolBox",
  url: "https://coursera.org/share/2ffcfeda1ad47ba3af1695d3c08cbf0e",
  issue: "Coursera - University of California",
  date: "9 Jan,2021"
}, {
  title: "C Programming",
  url: "https://www.sololearn.com/Certificate/1089-14014563/pdf/",
  issue: "SoloLearn",
  date: "16 May,2019"
}, {
  title: "C++ Programming",
  url: "https://www.sololearn.com/Certificate/1051-14014563/pdf/",
  issue: "SoloLearn",
  date: "07 Dec,2019"
}, {
  title: "Java Programming",
  url: "https://www.sololearn.com/Certificate/1068-14014563/pdf/",
  issue: "SoloLearn",
  date: "22 Aug,2020"
}, {
  title: "HTML Course",
  url: "https://www.sololearn.com/Certificate/1014-14014563/pdf/",
  issue: "SoloLearn",
  date: "07 May,2019"
}, {
  title: "CSS Course",
  url: "https://www.sololearn.com/Certificate/1023-14014563/pdf/",
  issue: "SoloLearn",
  date: "30 July,2019"
}, {
  title: "JavaScript Course",
  url: "https://www.sololearn.com/Certificate/1024-14014563/pdf/",
  issue: "SoloLearn",
  date: "07 May,2019"
}, {
  title: "JQuery Course",
  url: "https://www.sololearn.com/Certificate/1082-14014563/pdf/",
  issue: "SoloLearn",
  date: "25 July,2020"
}, {
  title: "React Course",
  url: "https://www.sololearn.com/Certificate/1097-14014563/pdf/",
  issue: "SoloLearn",
  date: "25 July,2020"
}, {
  title: "Problem Solving",
  url: "https://www.hackerrank.com/certificates/8ae71dec3276",
  issue: "HackerRank",
  date: "24 Dec,2020"
}, {
  title: "JavaScript (Basic)",
  url: "https://www.hackerrank.com/certificates/0f563ef4302a",
  issue: "HackerRank",
  date: "26 Aug,2020"
}, {
  title: "Java (Basic)",
  url: "https://www.hackerrank.com/certificates/8f1b03694fc9",
  issue: "HackerRank",
  date: "15 Dec,2020"
}, {
  title: "TypeMaster",
  url: "https://data.typeracer.com/pit/profile?user=agilan2001&universe=play&ref=badge",
  issue: "TypeRacer",
  date: "5 Jan,2021"
}].map((e, i) => /*#__PURE__*/React.createElement(CertComp, {
  data: e
}));

ReactDOM.render( /*#__PURE__*/React.createElement(WebTechComp, null), document.getElementById("web_tech_div"));
ReactDOM.render( /*#__PURE__*/React.createElement(ProgLangComp, null), document.getElementById("prog_lang_div"));
ReactDOM.render( /*#__PURE__*/React.createElement(DevTechComp, null), document.getElementById("dev_tech_div"));
ReactDOM.render( /*#__PURE__*/React.createElement(TestimonComp, null), document.getElementById("testimonial_div"));

const ProjCard = ({
  data
}) => /*#__PURE__*/React.createElement("div", {
  "data-aos": "flip-right",
  className: "proj_div"
}, /*#__PURE__*/React.createElement("div", {
  className: "proj_div_title"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    flex: '1'
  }
}, data.title), data.icon && /*#__PURE__*/React.createElement("img", {
  class: "proj_icon",
  src: "/icons/proj/" + data.icon + ".png"
})), /*#__PURE__*/React.createElement("div", {
  className: "proj_div_desc"
}, data.desc), /*#__PURE__*/React.createElement("div", {
  className: "proj_div_tech_tag"
}, "Technologies:"), /*#__PURE__*/React.createElement("div", {
  className: "proj_div_tech"
}, /*#__PURE__*/React.createElement("ul", null, data.tech.map((e, i) => /*#__PURE__*/React.createElement("li", null, e)))), /*#__PURE__*/React.createElement("div", {
  className: "proj_div_git"
}, Object.keys(data.link).map((el, i) => /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", null, " | "), /*#__PURE__*/React.createElement("a", {
  target: "_blank",
  href: data.link[el],
  dangerouslySetInnerHTML: {
    __html: el
  }
})))));

const ProjGrp = ({
  title,
  data
}) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "proj_grp_head"
}, title), /*#__PURE__*/React.createElement("div", {
  className: "proj_grp"
}, data.map((e, i) => /*#__PURE__*/React.createElement(ProjCard, {
  data: e
}))));

const ProjCont = ({
  data
}) => Object.keys(data).map((e, i) => /*#__PURE__*/React.createElement(ProjGrp, {
  title: e,
  data: data[e]
}));

const populate_proj = data => {
  ReactDOM.render( /*#__PURE__*/React.createElement(ProjCont, {
    data: data
  }), document.getElementById("proj_cont"));
};
