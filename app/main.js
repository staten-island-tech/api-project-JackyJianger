import "./style.css";

const DOMSelectors = {
    containerBox: document.querySelector('.main')
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
                    `<div class="agentCards">
                      <p>${agent.displayName}</p>
                      <img class="images"src=${agent.bustProtrait}><img>
                      <p>hi</p>
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

