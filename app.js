const background = {
    "Australia":"linear-gradient(90deg, rgba(221,219,0,1) 0%, rgba(0,0,0,1) 100%)",
    "India":"linear-gradient(90deg, rgba(0,99,221,1) 0%, rgba(0,0,0,1) 100%)",
    "England":"linear-gradient(90deg, rgba(0,103,221,1) 0%, rgba(0,0,0,1) 100%)",
    "Bangladesh":"linear-gradient(90deg, rgba(1,184,36,1) 0%, rgba(0,0,0,1) 100%)",
    "Pakistan":"linear-gradient(90deg, rgba(16,127,37,1) 0%, rgba(0,0,0,1) 100%)",
    "New Zealand":"linear-gradient(90deg, rgba(67,67,75,1) 0%, rgba(0,0,0,1) 100%)",
    "South Africa":"linear-gradient(90deg, rgba(0,166,32,1) 0%, rgba(0,0,0,1) 100%)",
    "Sri Lanka":"linear-gradient(90deg, rgba(0,44,166,1) 0%, rgba(125,153,0,1) 100%)",
    "West Indies":"linear-gradient(90deg, rgba(194,1,3,1) 0%, rgba(0,0,0,1) 100%)"
};

const points = {
    "Australia":0,"England":0,"India":0,"Sri Lanka":0,"Pakistan":0,"Bangladesh":0,"South Africa":0,"New Zealand":0,"West Indies":0
};
const played = {
    "Australia":0,"England":0,"India":0,"Sri Lanka":0,"Pakistan":0,"Bangladesh":0,"South Africa":0,"New Zealand":0,"West Indies":0
};
const won = {
    "Australia":0,"England":0,"India":0,"Sri Lanka":0,"Pakistan":0,"Bangladesh":0,"South Africa":0,"New Zealand":0,"West Indies":0
};
const lost = {
    "Australia":0,"England":0,"India":0,"Sri Lanka":0,"Pakistan":0,"Bangladesh":0,"South Africa":0,"New Zealand":0,"West Indies":0
};
const drawNo = {
    "Australia":0,"England":0,"India":0,"Sri Lanka":0,"Pakistan":0,"Bangladesh":0,"South Africa":0,"New Zealand":0,"West Indies":0
};
const penalties = {
    "Australia":-10,"England":-19,"India":-2,"Sri Lanka":0,"Pakistan":-2,"Bangladesh":0,"South Africa":0,"New Zealand":0,"West Indies":0
};
const pointspercentage = {
    "Australia":0,"England":0,"India":0,"Sri Lanka":0,"Pakistan":0,"Bangladesh":0,"South Africa":0,"New Zealand":0,"West Indies":0
};

const dateVenue = ["Fri 16 Jun 3:30 PM - Edgbaston, Birmingham",
                    "Wed 28 Jun 3:30 PM - Lords, London",
                    "Thu 06 Jul 3:30 PM - Headingley, Leeds",
                    "Wed 19 Jul 3:30 PM - Old Trafford, Manchester",
                    "Thu 27 Jul 3:30 PM - The Oval, London",
                    "Sun 16 Jul 9:30 AM - Galle International Stadium, Galle",
                    "Mon 24 Jul 9:30 AM - Sinhalese Sports Club Ground, Colombo",
                    "Wed 12 Jul 7:30 PM - Sir Vivian Richards Stadium, Antigua",
                    "Thu 20 Jul 7:30 PM - Queen's Park Oval, Port of Spain",
                    "Tue 28 Nov 9:00 AM - Sylhet Stadium, Sylhet",
                    "Wed 06 Dec 9:00 AM - Shere Bangla National Stadium, Mirpur",
                    "Thu 14 Dec 7:50 AM - Perth Stadium, Perth",
                    "Tue 26 Dec 5:00 AM - Melbourne Cricket Ground, Melbourne",
                    "Wed 03 Jan 5:00 AM - Sydney Cricket Ground, Sydney",
                    "Tue 26 Dec 1:30 PM - SuperSport Park, Centurion",
                    "Wed 03 Jan 1:30 PM - Newlands, Cape Town",
                    "Wed 17 Jan 5:00 AM - Adelaide Oval, Adelaide",
                    "Thu 25 Jan 9:30 AM - Brisbane Cricket Ground, Brisbane",
                    "Thu 25 Jan 9:30 AM - Rajiv Gandhi Stadium, Hyderabad",
                    "Fri 02 Feb 9:30 AM - ACA-VDCA Stadium, Visakhapatnam",
                    "Thu 15 Feb 9:30 AM - Khandheri Stadium, Rajkot",
                    "Fri 23 Feb 9:30 AM - JSCA International Stadium Complex, Ranchi",
                    "Thu 07 Mar 9:30 AM - HPCA Stadium, Dharamsala",
                    "Sun 04 Feb 3:30 AM - Bay Oval, Mount Maunganui",
                    "Tue 13 Feb 3:30 AM - Seddon Park, Hamilton",
                    "Thu 29 Feb 3:30 AM - Basin Reserve, Wellington",
                    "Fri 08 Mar 3:30 AM - Hagley Oval, Christchurch",
                    "Fri 22 Mar 9:30 AM - Sylhet Stadium, Sylhet",
                    "Sat 30 Mar 9:30 AM - Zahur Ahmed Chowdhury Stadium, Chattogram",
                    "Wed 10 Jul 3:30 PM - Lords, London",
                    "Thu 18 Jul 3:30 PM - Trent Bridge, Nottingham",
                    "Fri 26 Jul 3:30 PM - Edgbaston, Birmingham",
                    "Aug 2024",
                    "Aug 2024",
                    "Aug 2024",
                    "Sep 2024",
                    "Wed 21 Aug 3:30 PM - Old Trafford, Manchester",
                    "Thu 29 Aug 3:30 PM - Lords, London",
                    "Fri 06 Sep 3:30 PM - The Oval, London",
                    "Sep 2024",
                    "Sep 2024",
                    "Sep 2024",
                    "Sep 2024",
                    "Oct 2024",
                    "Oct 2024",
                    "Oct 2024",
                    "Oct 2024",
                    "Oct 2024",
                    "Nov 2024",
                    "Oct 2024",
                    "Nov 2024",
                    "Nov 2024",
                    "Dec 2024",
                    "Dec 2024",
                    "Dec 2024 - Melbourne Cricket Ground, Melbourne",
                    "Jan 2025 - Sydney Cricket Ground, Sydney",
                    "Nov 2024",
                    "Nov 2024",
                    "Nov 2024",
                    "Dec 2024",
                    "Dec 2024",
                    "Nov 2024",
                    "Dec 2024",
                    "Dec 2024",
                    "Jan 2025",
                    "Jan 2025",
                    "Jan 2025",
                    "Jan 2025",
                    "Feb 2025"];


const team1 = ["England","England","England","England","England","Sri Lanka","Sri Lanka","West Indies","West Indies","Bangladesh","Bangladesh","Australia","Australia","Australia","South Africa","South Africa","Australia","Australia","India","India","India","India","India","New Zealand","New Zealand","New Zealand","New Zealand","Bangladesh","Bangladesh","England","England","England","West Indies","West Indies","Pakistan","Pakistan","England","England","England","India","India","Sri Lanka","Sri Lanka","Pakistan","Pakistan","Pakistan","India","India","India","Bangladesh","Bangladesh","Australia","Australia","Australia","Australia","Australia","West Indies","West Indies","New Zealand","New Zealand","New Zealand","South Africa","South Africa","South Africa","South Africa","Pakistan","Pakistan","Sri Lanka","Sri Lanka"];
const team2 = ["Australia","Australia","Australia","Australia","Australia","Pakistan","Pakistan","India","India","New Zealand","New Zealand","Pakistan","Pakistan","Pakistan","India","India","West Indies","West Indies","England","England","England","England","England","South Africa","South Africa","Australia","Australia","Sri Lanka","Sri Lanka","West Indies","West Indies","West Indies","South Africa","South Africa","Bangladesh","Bangladesh","Sri Lanka","Sri Lanka","Sri Lanka","Bangladesh","Bangladesh","New Zealand","New Zealand","England","England","England","New Zealand","New Zealand","New Zealand","South Africa","South Africa","India","India","India","India","India","Bangladesh","Bangladesh","England","England","England","Sri Lanka","Sri Lanka","Pakistan","Pakistan","West Indies","West Indies","Australia","Australia"];

function sortTableByPointsPercentage() {
    var table = document.getElementById("teams");
    var tbody = table.querySelector('tbody');
    var rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
        var pointsA = parseFloat(a.cells[7].textContent.trim());
        var pointsB = parseFloat(b.cells[7].textContent.trim());
        return pointsB - pointsA; 
    });

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    rows.forEach(row => {
        tbody.appendChild(row);
    });
}
 

let noOfMatches = dateVenue.length;
let matchesHTML = "";
matchesHTML = matchesHTML + `<div class = "resPred" style = "font-weight:bold;">Results and Predictions</div>`;
for(let i = 0; i<noOfMatches;i++){
    matchesHTML = matchesHTML + 
    `<div class="match">
        <div class="date">
            <p class = "dateVenue" >${dateVenue[i]}</p>
        </div>
        <div class="team12draw">
            <div class="team1 team">
                <p>${team1[i]}</p>
                <img src = "/icons/${team1[i]}.png" class = "countryIcon">
            </div> 
            <div class="draw">
            Draw
            </div>
            <div class="team2 team">
                <img src = "/icons/${team2[i]}.png" class = "countryIcon">
                <p>${team2[i]}</p>
            </div>
        </div> 
    </div>`
}
matchesHTML = matchesHTML + `<div class="finalMatch">
                                <div class="date">
                                    <h3 style = "margin-left:365px">Finals</h3>
                                    <p class = "dateVenue">June 2025 - Lords, London</p>
                                </div>
                                <div class="team12draw">
                                    <div class="team1 team">
                                        <p>Team 1</p>
                                    </div>
                                    <div class="draw">
                                    Draw
                                    </div>
                                    <div class="team2 team">
                                        <p>Team 2</p>
                                    </div>
                                </div> 
                            </div>`

document.querySelector(".completedMatches").innerHTML = matchesHTML



function generateTable() {
    const teams = Object.keys(points); // Get all team names

    let tableHtml = `<table id ="teams">
        <h3 class = "standing">Standings</h3>
        <tr>
            
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Draw</th>
            <th>Penalties</th>
            <th>Points</th>
            <th>Points%</th>
        </tr>`;
 
 
    teams.forEach(team => {
        let roundedPointsPercentage = pointspercentage[team].toFixed(2);
  
        tableHtml += `
            <tr>
                
                <td>${team}</td>
                <td>${played[team]}</td>
                <td>${won[team]}</td>
                <td>${lost[team]}</td>
                <td>${drawNo[team]}</td>
                <td>${penalties[team]}</td>
                <td>${points[team]}</td>
                <td>${parseFloat(roundedPointsPercentage)}%</td>
            </tr>`;
    });
 
    tableHtml += `</table>`;
    tableHtml += `<h3 class = "history">How to Use</h3>
                    <p class = "historyPara rules">For any match, you can select either of the two teams or a draw.</p>
                    <p class = "historyPara rules" style = "font-weight:bold;"><i>Win : 12 points</i></p>
                    <p class = "historyPara rules" style = "font-weight:bold;"><i>Draw : 4 points</i></p>
                    <p class = "historyPara rules">Top two teams of the standing will play the final in <span style = "font-weight:bold;">Lords, London<span></p>`
    tableHtml = tableHtml + ` <h3 class = "history">History</h3>
    <p class = "historyPara"><i>The ICC World Test Championship, also referred to as the Test World Cup, is the international championship of Test cricket. It is a league competition run by the International Cricket Council (ICC), with its inaugural season starting in 2019. In line with the ICC's goal of having one pinnacle tournament for each of the three formats of international cricket, it is the premier championship for Test cricket. Australia are the current champions, having defeated India in the 2023 final. India have played in each WTC final, finishing runners up in both.</i></p>
    <h2 class = "firstEdition history">
        2019-2020 tournament
    </h2>
    <p class = "historyPara">
    <i>The first tournament began with the 2019 Ashes series. In March 2020, matches were suspended due to the COVID-19 pandemic, not resuming before July 2020, with several rounds of matches being postponed or ultimately cancelled. New Zealand became the first team to qualify for the final, when it was confirmed that the series between South Africa and Australia would not proceed,followed by India. The inaugural World Test Championship Final was played between India and New Zealand from 18 to 23 June 2021 at Rose Bowl, Southampton, England. Despite the opening and fourth day of the final being washed out by rain, New Zealand managed to win in the final session of the reserve day and lifted the first World Test Championship trophy.</i>
    </p>
    <h2 class = "firstEdition history">
        2021-2023 tournament
    </h2>
    <p class = "historyPara">
    <i>The WTC 2021–23 cycle began in August 2021 with Pataudi Trophy (5 matches series between India and England). The International Cricket Council officially announced the full programme with a new points system. Australia qualified for the final by winning the 3rd Test Match of the 2022–23 Border-Gavaskar Trophy. India qualified after Sri Lanka failed to win the first match of their series in New Zealand, qualifying for the final for the second consecutive time. The final was played from 7 June to 11 June 2023 at The Oval, London, England, with Australia emerging as champions after defeating India by 209 runs. This was India's second consecutive defeat at the WTC final.</i>
    </p>`
    document.querySelector(".table").innerHTML = tableHtml;
 }
 generateTable();
 

let draws = document.querySelectorAll(".draw");

draws.forEach((draw) => {
    draw.addEventListener("click", ()=>{
        if(draw.classList.contains("selectedDraw")){
            draw.classList.remove("selectedDraw");

            let parent = draw.parentNode;
            let teams = parent.querySelectorAll(".team");
            let team1 = teams[0].innerText;
            let team2 = teams[1].innerText;

            played[team1] = played[team1]-1;
            played[team2] = played[team2]-1;
            points[team1] = points[team1] - 4;
            points[team2] = points[team2] - 4;
            drawNo[team1]--;
            drawNo[team2]--;
            
            if(played[team1] === 0)pointspercentage[team1] =0;
            else
            pointspercentage[team1] =((points[team1]+penalties[team1]) / (12*played[team1]))*100;
            if(played[team2] === 0)pointspercentage[team2] = 0;
            else pointspercentage[team2] = ((points[team2]+penalties[team2]) / (12*played[team2]))*100;

            draw.style.background = "#f5f5f5";
            draw.style.color = "black";

            generateTable();
            sortTableByPointsPercentage();
        }
        else{
            draw.classList.add("selectedDraw");
            let parent = draw.parentNode;
            let teams = parent.querySelectorAll(".team");
            let team1 = teams[0].innerText;
            let team2 = teams[1].innerText;
            played[team1] = played[team1]+1;
            played[team2] = played[team2]+1;
            points[team1] = points[team1] + 4;
            points[team2] = points[team2] + 4;
            drawNo[team1]++;
            drawNo[team2] = drawNo[team2]+1;

            if(played[team1] === 0)pointspercentage[team1] =0;
            else
            pointspercentage[team1] =((points[team1]+penalties[team1]) / (12*played[team1]))*100;
            if(played[team2] === 0)pointspercentage[team2] = 0;
            else pointspercentage[team2] = ((points[team2]+penalties[team2]) / (12*played[team2]))*100;

            draw.style.background = "linear-gradient(90deg, rgba(0,9,95,1) 0%, rgba(0,0,0,1) 100%)";
            draw.style.color = "white";

            generateTable();
            sortTableByPointsPercentage();
        }
    });
});
    

let teams = document.querySelectorAll(".team");


teams.forEach((team) =>{
   team.addEventListener("click",()=>{
    console.log(team.classList.contains("selected"));

    if(team.classList.contains("selected")){
        team.classList.remove("selected");
        let teamName = team.innerText;
        team.style.background = "#b6b6b6";
        team.style.color = "black"; 

        points[teamName] = points[teamName] - 12 ;
        won[teamName] = won[teamName] - 1;

        let parent = team.parentNode;
        let teams = parent.querySelectorAll(".team");
        let team1 = teams[0].innerText;
        let team2 = teams[1].innerText;
        if(team1 === teamName){
            lost[team2]--;
        }
        else{
            lost[team1]--;
        }

        played[team1] = played[team1] - 1;
        played[team2] = played[team2] - 1;

        if(played[team1] === 0)pointspercentage[team1] =0;
        else
        pointspercentage[team1] =((points[team1]+penalties[team1]) / (12*played[team1]))*100;
        if(played[team2] === 0)pointspercentage[team2] = 0;
        else pointspercentage[team2] = ((points[team2]+penalties[team2]) / (12*played[team2]))*100;


        generateTable();
        sortTableByPointsPercentage();
        }
    else{
        team.classList.add("selected");
        let teamName = team.innerText;
        team.style.background = background[teamName];
        team.style.color = "white"; 

        points[teamName] = points[teamName] + 12 ;
        won[teamName] = won[teamName] + 1;
        let parent = team.parentNode;
        let teams = parent.querySelectorAll(".team");
        let team1 = teams[0].innerText;
        let team2 = teams[1].innerText;

        if(team1 === teamName){
            lost[team2]++;
        }
        else{
            lost[team1]++;
        }

        played[team1] = played[team1] + 1;
        played[team2] = played[team2] + 1;

        pointspercentage[team1] =((points[team1]+penalties[team1]) / (12*played[team1]))*100;
        pointspercentage[team2] =((points[team2]+penalties[team2]) / (12*played[team2]))*100;
        
        generateTable();
        sortTableByPointsPercentage();
        }
   });
});
