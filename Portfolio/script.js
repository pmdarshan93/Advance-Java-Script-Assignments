let sidebar = document.querySelector(".sidebar");
let skillsParent = document.querySelector(".skillsParent")
let projectParent = document.querySelector(".projectParent");

function toggleSidebar() {
    
    sidebar.classList.toggle("hide");

}

let skills = [
    { icon: `<svg style="color:#ed8b00" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"/></svg>`, name: "Java" },
    { icon: `<svg xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" viewBox="0 0 512 512" id="javascript"><rect width="512" height="512" fill="#f7df1e" rx="15%"></rect><path d="m324,370c10,17 24,29 47,29 20,0 33,-10 33,-24 0,-16 -13,-22 -35,-32l-12,-5c-35,-15 -58,-33 -58,-72 0,-36 27,-64 70,-64 31,0 53,11 68,39l-37,24c-8,-15 -17,-21 -31,-21 -14,0 -23,9 -23,21 0,14 9,20 30,29l12,5c41,18 64,35 64,76 0,43 -34,67 -80,67 -45,0 -74,-21 -88,-49zm-170,4c8,13 14,25 31,25 16,0 26,-6 26,-30V203h48v164c0,50 -29,72 -72,72 -39,0 -61,-20 -72,-44z"></path></svg>`, name: "JavaScript" },
    { icon: `<svg style="color:#68a063" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/></svg>`, name: "Node.js" },
    { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="mysql"><path fill="#00618A" d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927-4.894-3.092-17.448-9.817-21.072-.975-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"></path></svg>', name: "MySQL" },
    { icon: `<img style="width:48px;height:48px;" src="images/pali_logo_color.svg">`, name: "OM" },
    { icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#53c1de" fill="none" stroke="#53c1de" stroke-width="1.5"><path d="M8.00002 12C8.00002 6.47715 9.79088 2 12 2C14.2092 2 16 6.47715 16 12C16 17.5228 14.2092 22 12 22C9.79088 22 8.00002 17.5228 8.00002 12Z"/><path d="M9.97531 8.61921C14.8173 5.85779 19.649 5.17014 20.7673 7.08331C21.8855 8.99648 18.8667 12.786 14.0247 15.5474C9.18271 18.3088 4.35098 18.9965 3.23277 17.0833C2.11455 15.1701 5.13329 11.3806 9.97531 8.61921Z"/><path d="M14.0247 8.61921C18.8667 11.3806 21.8855 15.1701 20.7673 17.0833C19.649 18.9965 14.8173 18.3088 9.97531 15.5474C5.13329 12.786 2.11455 8.99648 3.23277 7.08331C4.35098 5.17014 9.18271 5.85779 14.0247 8.61921Z"/><path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z"/></svg>`, name: "REACT" },
    { icon: `<svg style="color:#e34f26" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></svg>`, name: "Git" },
    { icon: `<svg style="color:#e34f26" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>`, name: "HTML" },
    { icon: `<svg style="color:#1572b6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>`, name: "CSS" },
]

document.addEventListener("DOMContentLoaded", () => {
    const skillsParent = document.querySelector(".skillsParent");

    skills.forEach(skill => {
        let skillBox = document.createElement("div");
        let iconDiv = document.createElement("div");
        let name = document.createElement("h3");

        skillBox.classList.add("skillBox");
        name.innerText = skill.name;
        iconDiv.innerHTML = skill.icon;

        skillBox.append(iconDiv, name);
        skillsParent.append(skillBox);
    });
});


let projects = [
    { img: "images/ace.png", title: "AccessAce (Group Project)", description: "Access token Management tool", projectTech: ["OM", "Node.js", "Mysql"], code: "", demo: "", category: ["all", "om"] },
    { img: "images/passwor.png", title: "Password Management", description: "Password management tool using Mysql DB", projectTech: ["Java", "Mysql"], code: "https://github.com/pmdarshan93/Java-Advance-Assignments/tree/master/vault", demo: "", category: ["all", "java"] },
    { img: "images/Treeset.png", title: "Contact Management", description: "Tree set own implementation", projectTech: ["Java"], code: "https://github.com/pmdarshan93/Java-Advance-Assignments/tree/master/dataStructure", demo: "", category: ["all", "java"] },
    { img: "images/pomo.png", title: "Pomodoro Timer", description: "Time Mangement tool based on Pomodoro technique", projectTech: ["JS", "Html", "Css"], code: "", category: ["all", "js"], demo: "https://darshanpm-5874l0qu-8443.zcodecorp.in/Js%20Assignment/POMO%20FOCUS/" },
    { img: "images/calc.png", title: "Nutrition Calculator", description: "Calculate nutrition of your food", projectTech: ["JS", "Html", "Css"], code: "https://github.com/pmdarshan93/Advance-Java-Script-Assignments/tree/master/Node%20Js/assignment/assignment%20webdriver", demo: "", category: ["all", "node"] },
    { img: "images/diving.png", title: "Scuba Diving ", description: "Diving school page", projectTech: ["Html", "Css"], code: "", demo: "https://darshanpm-5874l0qu-8443.zcodecorp.in/project%20main/project.html", category: ["all", "html"] },
    { img: "images/planet-earth.svg", title: "Planet", description: "Planet page using ejs", projectTech: ["Html", "Css", "Node.js"], code: "https://github.com/pmdarshan93/Advance-Java-Script-Assignments/tree/master/Node%20Js/assignment/assignment%20planet", demo: "", category: ["node"] },
    { img: "images/stone.png", title: "Stone Paper Scissor", description: "Two player mode using socket.io", projectTech: ["Html", "Css", "Node", "socket"], code: "https://github.com/pmdarshan93/Advance-Java-Script-Assignments/tree/master/Node%20Js/assignment/assignment%20game", demo: "", category: ["node"] },
    { img: "images/passwor.png", title: "Password Management", description: "Password Mangement system using File", projectTech: ["Java", "File"], code: "https://github.com/pmdarshan93/Zs-Vault", demo: "", category: ["java"] },
    { img: "images/stone.png", title: "Stone paper Scissor", description: "Stone paper scissor game", projectTech: ["Html", "Css", "JS"], code: "", demo: "https://darshanpm-5874l0qu-8443.zcodecorp.in/Js%20Assignment/Assignment%20014/assignment14.html", category: ["js"] },
    { img: "images/bank.png", title: "Bank", description: "Oops and storage in js", projectTech: ["Html", "Css", "JS"], code: "", demo: "https://darshanpm-5874l0qu-8443.zcodecorp.in/AJAX%20Assignment/assignment004/", category: ["js"] },
    { img: "images/grid.png", title: "Web Page", description: "Recreation of web page using grid", projectTech: ["Html", "Css"], code: "", demo: "https://darshanpm-5874l0qu-8443.zcodecorp.in/ASSIGNMENTS/ASSIGNMENT17/17.html", category: ["html"] },
    { img: "images/website1.png", title: "Web Page", description: "Recreation of web page ", projectTech: ["Html", "Css"], code: "", demo: "https://darshanpm-5874l0qu-8443.zcodecorp.in/ASSIGNMENTS/ASSIGNMENT13/13.html", category: ["html"] },
    { img: "images/school.png", title: "School Management", description: "A basic school management system", projectTech: ["OM"], code: "https://github.com/pmdarshan93/Advance-Java-Script-Assignments/tree/master/OM-Projects/school", demo: "", category: ["om"] },
    { img: "images/interest.png", title: "Interest Calculator", description: "A basic interest calculator", projectTech: ["OM"], code: "https://github.com/pmdarshan93/Advance-Java-Script-Assignments/tree/master/OM-Projects/interest", demo: "", category: ["om"] },
    { img: "images/todo.webp", title: "Todo App", description: "A basic Todo system", projectTech: ["React"], code: "", demo: "", category: ["react"] },
    { img: "images/aceextension.png", title: "AccessAce", description: "Access token Management tool", projectTech: ["Extension"], code: "https://github.com/pmdarshan93/Advance-Java-Script-Assignments/tree/master/aceExtension/aceExtension", demo: "", category: ["extension"] },
    { img: "images/bufo.png", title: "Bufo Merge", description: "POKI website game recreation", projectTech: ["scratch"], code: "", demo: "https://scratch.mit.edu/projects/1192007563/", category: ["scratch"] },
    { img: "images/shark.png", title: "Fish Catching", description: "POKI website game recreation", projectTech: ["scratch"], code: "", demo: "https://scratch.mit.edu/projects/1182870285/editor", category: ["scratch"] },
    { img: "images/smaths.png", title: "Maths Spirography", description: "Maths Diagram", projectTech: ["scratch"], code: "", demo: "https://scratch.mit.edu/projects/1186404114/", category: ["scratch"] },

]

function renderProjects(filter) {
    projectParent.innerHTML = "";
    let filtered = filter === "all" ? projects : projects.filter(p => p.category.includes(filter));

    for (let project of filtered) {
        let projectDiv = document.createElement("div")
        let imgDiv = document.createElement('div');
        let image = document.createElement('img');
        let name = document.createElement('h2')
        let description = document.createElement('p')
        let projectTech = document.createElement('div');
        for (lang of project.projectTech) {
            let div = document.createElement('div')
            div.innerText = lang;
            div.classList.add('techTag');
            projectTech.appendChild(div)
        }
        let footer = document.createElement('div');

        name.innerText = project.title;
        description.innerText = project.description;

        projectDiv.classList.add('projectBox');
        imgDiv.classList.add('projectImg');
        projectTech.classList.add('techList');
        footer.classList.add('projectFooter');

        image.setAttribute("src", project.img);


        imgDiv.append(image)
        // footer.append(codelink, demolink)
        if (project.code != "") {
            let codelink = document.createElement('a');
            let code = document.createElement('span');
            code.innerText = "Code";
            let git = document.createElement('i');
            git.classList.add("fa-brands", "fa-github");
            codelink.setAttribute('href', project.code);
            codelink.setAttribute("target", "_blank")
            codelink.append(git, code);
            footer.append(codelink)
        }

        if (project.demo != "") {
            let demolink = document.createElement('a');
            let link = document.createElement('i');
            let demo = document.createElement('span');
            demo.innerText = "Live demo";
            link.classList.add("fa-solid", "fa-arrow-up-right-from-square")
            demolink.classList.add("projectdemolink")
            demolink.setAttribute("href", project.demo);
            demolink.setAttribute("target", "_blank")
            demolink.append(link, demo);
            footer.append(demolink)
        }


        projectDiv.append(imgDiv, name, description, projectTech, footer)
        projectParent.append(projectDiv)
    }
}

document.querySelectorAll(".filterBtn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filterBtn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProjects(btn.dataset.filter);
    });
});

document.querySelectorAll(".item").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".item").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});


renderProjects("all");


