import "./style.css";

const DOMSelectors = {
  containerBox: document.getElementById("container"),
};
async function getAgent() {
  try {
    const response = await fetch("https://valorant-api.com/v1/agents");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      const agents = data.data.filter(
        (agent) => agent.isPlayableCharacter === true
      );

      agents.forEach((agent) => {
        console.log(agent);
        DOMSelectors.containerBox.insertAdjacentHTML(
          "beforeend",
          `<div class="agentCards hover:scale-110 hover:shadow-2xl  bg-slate-100 w-2/12 h-500 shadow-xl border-slate-50 p-5 m-1 flex flex-col justify-between items-center" id=agentCards>
                      <p>${agent.displayName}</p>
                      <img class="images"src=${agent.displayIcon}><img>
                      <p>${agent.role.displayName}</p>
                      <button class="deleteBtn" data-uuid="${agent.uuid}"> Abilities </button>
                    </div>`
        );
      });
    }
  } catch (error) {
    console.log(error);
    alert("Sorry could not find that agent");
  }
}

getAgent();

DOMSelectors.containerBox.addEventListener("click", async function (event) {
  if (event.target && event.target.classList.contains("deleteBtn")) {
    document.getElementById("container").innerHTML = "";
    const uuid = event.target.getAttribute("data-uuid");
    console.log(`Button clicked with UUID: ${uuid}`);
    DOMSelectors.containerBox.insertAdjacentHTML(
      "beforeend",
      `<button class="goBack">Back</button>`
    );

    try {
      const response = await fetch(
        `https://valorant-api.com/v1/agents/${uuid}`
      );
      if (response.status !== 200) {
        throw new Error("Failed to fetch agent details");
      }
      const agentDetails = await response.json();
      const abilities = agentDetails.data.abilities;
      console.log(abilities);
      abilities.forEach((ability) => {
        DOMSelectors.containerBox.insertAdjacentHTML(
          "beforeend",
          `<div class="agentCards hover:scale-110 hover:shadow-2xl  bg-red-100 w-2/12 h-500 shadow-xl border-slate-50 p-5 m-1 flex flex-col justify-between items-center" id=agentCards>
                        <p>${ability.displayName}</p>
                        <img class="images"src=${ability.displayIcon}><img>
                        <p>${ability.slot}</p>
                      </div>`
        );
      });
    } catch (error) {
      console.error(error);
      alert("Failed to fetch agent details.");
    }
  }
});
DOMSelectors.containerBox.addEventListener("click", async function (event) {
  if (event.target && event.target.classList.contains("goBack")) {
    document.getElementById("container").innerHTML = "";
    getAgent();
  }
});
