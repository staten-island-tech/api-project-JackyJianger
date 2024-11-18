import "./style.css";
async function getAgent() {
    try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        if (response.status!=200) {
            throw new Error(response);
        } else{
            const data = await response.json();
            console.log(data.filter((data)=> data.isPlayableCharacter === true));
        }
    } catch (error) {
        console.log(error);
        alert("Sorry could not find that agent")
    }
}

getAgent()