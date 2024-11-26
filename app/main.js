import "./style.css";

const DOMSelectors = {
    containerBox: document.getElementById('container')
}
async function getAgent() {
    try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        if (response.status != 200) {
            throw new Error(response);
        } else{
            const data = await response.json();
            const agents = data.data.filter(agent => agent.isPlayableCharacter === true);
            
            agents.forEach(agent => {
                console.log(agent);
                DOMSelectors.containerBox.insertAdjacentHTML(
                    "beforeend",
                    `<div class="agentCards hover:scale-110 hover:shadow-2xl  bg-slate-100 w-2/12 h-500 shadow-xl border-slate-50 p-5 m-1 flex flex-col justify-between items-center">
                      <p>${agent.displayName}</p>
                      <img class="images"src=${agent.displayIcon}><img>
                      <p>${agent.role.displayName}</p>
                    </div>`
                  );
            });
            
        }
    } catch (error) {
        console.log(error);
        alert("Sorry could not find that agent")
    }
}

getAgent()


async function getAgentInfo() {
    try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        if (response.status != 200) {
            throw new Error(response);
        } else{
            const data = await response.json();
            const agents = data.data.filter(agent => agent.isPlayableCharacter === true);
            
            agents.forEach(agent => {
                console.log(agent);
                DOMSelectors.containerBox.insertAdjacentHTML(
                    "beforeend",
                    `<div class="agentCards bg-slate-100 w-2/12 h-500 shadow-xl border-slate-50 p-5 m-1 flex flex-col justify-between items-center">
                      <p>${agent.displayName}</p>
                      <img class="images"src=${agent.displayIcon}><img>
                      <p>${agent.role.displayName}</p>
                    </div>`
                  );
            });
            
        }
    } catch (error) {
        console.log(error);
        alert("Sorry could not find that agent")
    }
}

