/* BABEL COMPILE COMMAND
npx babel public/react-script.js --out-file public/react-script-compiled.js
*/
const ImgCaption = ({ data }) => (
    <div className="imgCaption">
        <img src={"./icons/" + data.split(":")[0] + ".png"} style={{ width: '80px', display: 'block', margin: 'auto' }} />
        <div style={{ textAlign: "center" }}>{data.split(":")[0]}<div style={{ fontSize: 'small' }}>{data.split(":")[1]}</div></div>
    </div>
);

const WebTechComp = () => {
    var lang = ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "React", "React-Native", "NodeJS"];
    return (
        lang.map((e, i) => (
            <ImgCaption data={e} />
        ))
    )
}
const ProgLangComp = () => {
    var lang = ["C", "C++", "Java", "VB", "Python:(beginner)"];
    return (
        lang.map((e, i) => (
            <ImgCaption data={e} />
        ))
    )
}

const CertComp = ({ data }) => (
    <div className="cert_comp">
        <img src={"./icons/" + data.issue + ".png"} style={{ width: '80px', margin: 'auto 10px' }} />
        <div style={{ height: 'fit-content', margin: 'auto 0' }}>
            <div style={{ fontWeight: 'bold', fontSize: 'larger' }}>{data.title}</div>
            <div><span style={{ color: 'red' }}>{data.issue}</span></div>
            <span style={{ fontStyle: 'oblique', fontSize: 'smaller' }}>{data.date}</span>
            <a target={"_blank"} href={data.url} className={'btn btn-primary'} style={{ position: 'absolute', right: '10px', bottom: '5px' }}>View</a>
        </div>
    </div>
)



const TestimonComp = () => (
    [{ title: "Algorithmic ToolBox", url: "https://coursera.org/share/2ffcfeda1ad47ba3af1695d3c08cbf0e", issue: "Coursera - University of California", date: "9 Jan,2021" },
    { title: "C Programming", url: "https://www.sololearn.com/Certificate/1089-14014563/pdf/", issue: "SoloLearn", date: "16 May,2019" },
    { title: "C++ Programming", url: "https://www.sololearn.com/Certificate/1051-14014563/pdf/", issue: "SoloLearn", date: "07 Dec,2019" },
    { title: "Java Programming", url: "https://www.sololearn.com/Certificate/1068-14014563/pdf/", issue: "SoloLearn", date: "22 Aug,2020" },
    { title: "HTML Course", url: "https://www.sololearn.com/Certificate/1014-14014563/pdf/", issue: "SoloLearn", date: "07 May,2019" },
    { title: "CSS Course", url: "https://www.sololearn.com/Certificate/1023-14014563/pdf/", issue: "SoloLearn", date: "30 July,2019" },
    { title: "JavaScript Course", url: "https://www.sololearn.com/Certificate/1024-14014563/pdf/", issue: "SoloLearn", date: "07 May,2019" },
    { title: "JQuery Course", url: "https://www.sololearn.com/Certificate/1082-14014563/pdf/", issue: "SoloLearn", date: "25 July,2020" },
    { title: "React Course", url: "https://www.sololearn.com/Certificate/1097-14014563/pdf/", issue: "SoloLearn", date: "25 July,2020" },
    { title: "Problem Solving", url: "https://www.hackerrank.com/certificates/8ae71dec3276", issue: "HackerRank", date: "24 Dec,2020" },
    { title: "JavaScript (Basic)", url: "https://www.hackerrank.com/certificates/0f563ef4302a", issue: "HackerRank", date: "26 Aug,2020" },
    { title: "Java (Basic)", url: "https://www.hackerrank.com/certificates/8f1b03694fc9", issue: "HackerRank", date: "15 Dec,2020" },
    { title: "TypeMaster", url: "https://data.typeracer.com/pit/profile?user=agilan2001&universe=play&ref=badge", issue: "TypeRacer", date: "5 Jan,2021" },].map(
        (e, i) => (
            <CertComp data={e} />
        )

    )
)



ReactDOM.render(<WebTechComp />, document.getElementById("web_tech_div"))
ReactDOM.render(<ProgLangComp />, document.getElementById("prog_lang_div"))
ReactDOM.render(<TestimonComp />, document.getElementById("testimonial_div"))

const ProjCard = ({ data }) => (
    <div className="proj_div">
        <div className="proj_div_title">
            <div style={{flex:'1'}}>{data.title}</div>
            {data.icon && <img class={"proj_icon"} src={"/icons/proj/"+data.icon+".png"} />}
        </div>

        <div className="proj_div_desc">{data.desc}</div>
        <div className="proj_div_tech_tag">Technologies:</div>
        <div className="proj_div_tech">
            <ul>
                {data.tech.map((e, i) => (
                    <li>{e}</li>
                ))
                }
            </ul>
        </div>
        <div className="proj_div_git">
            {
                Object.keys(data.link).map((el, i) => (
                    <span>
                        <span> | </span><a target={"_blank"} href={data.link[el]} dangerouslySetInnerHTML={{ __html: el }} />
                    </span>
                ))
            }
        </div>
    </div>
)

const ProjGrp = ({ title, data }) => (
    <div>
        <div className="proj_grp_head">{title}</div>
        <div className="proj_grp">
            {
                data.map((e, i) => (
                    <ProjCard data={e} />
                ))
            }
        </div>
    </div>
)

const ProjCont = ({ data }) => (
    Object.keys(data).map((e, i) => (
        <ProjGrp title={e} data={data[e]} />
    ))
)


const populate_proj = (data) => {

    ReactDOM.render(<ProjCont data={data} />, document.getElementById("proj_cont"));

}

