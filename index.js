var teamData = [{
    id : 1,
    fullName: 'Mumbai Indians',
    key: 'MI',
    championshipsWon: 5,
    teamIcon: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/300px-Mumbai_Indians_Logo.svg.png'
    },
    {
        id : 2,
        fullName: 'Chennai Super Kings',
        key: 'CSK',
        championshipsWon: 3,
        teamIcon: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/300px-Chennai_Super_Kings_Logo.svg.png'
     },
     {
        id : 3,
        fullName: 'Royal Challengers Bangalore',
        key: 'RCB',
        championshipsWon: 0,
        teamIcon: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/300px-Royal_Challengers_Bangalore_2020.svg.png'
     },
     {
        id : 4,
        fullName: 'Kolkata Knight Riders',
        key: 'KKR',
        championshipsWon: 2,
        teamIcon: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/300px-Kolkata_Knight_Riders_Logo.svg.png'
     },
     {
        id : 5,
        fullName: 'Sunrisers Hyderabad',
        key: 'SRH',
        championshipsWon: 1,
        teamIcon: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/300px-Sunrisers_Hyderabad.svg.png'
     },
     {
        id : 6,
        fullName: 'Delhi Capitals',
        key: 'DC',
        championshipsWon: 0,
        teamIcon: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/300px-Delhi_Capitals_Logo.svg.png'
     },
     {
        id : 7,
        fullName: 'Rajasthan Royals',
        key: 'RR',
        championshipsWon: 1,
        teamIcon: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/300px-Rajasthan_Royals_Logo.svg.png'
     },
     {
        id : 8,
        fullName: 'Punjab Kings',
        key: 'PK',
        championshipsWon: 0,
        teamIcon: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Punjab_Kings_logo_2021.png'
     }
]




var teamData1 = JSON.parse(localStorage.getItem('teamData')) == null ? localStorage.setItem('teamData',JSON.stringify(teamData)) : JSON.parse(localStorage.getItem('teamData'))

if(teamData1 === localStorage.setItem('teamData',JSON.stringify(teamData)))
teamData1 = JSON.parse(localStorage.getItem('teamData'));
//console.log(JSON.parse(localStorage.UpdatedteamData))

if((localStorage.UpdatedteamData)!=null){
  teamData1 = JSON.parse(localStorage.UpdatedteamData)
}
// localStorage.setItem("playersDetails",JSON.stringify(playersDetails))
{/* <div class="cardWrapper">
<a href="#">
    <img src="" alt="team-logo"/>
    <h4>Team Name</h4>
</a>
</div> */}
//var teamData1=JSON.parse(localStorage.getItem('teamData')) ? 
var teamWrapper = $("#teamWrapper");


   for(var i=0;i<teamData1.length;i++){
    var cardWrapper = $('<div>').addClass("cardWrapper");
    teamWrapper.append(cardWrapper);
    var aTagWrapper = $('<a>').attr({href:"./teamInfo.html?"+teamData1[i].key,class:"cards"});
    cardWrapper.append(aTagWrapper)
    var teamImg=$('<img>').attr({src:teamData1[i].teamIcon,class:"teamLogos"})
    var teamName= $('<h4>').text(teamData1[i].fullName).addClass('teamName')
    aTagWrapper.append(teamImg,teamName)

   }

  $('#addTeam').click(function() {
    window.location='./addInfo.html?'+0;
  });

  $('#addPlayer').click(function() {
    window.location='./addInfo.html?'+1;
  });
$('form').click(function(e){
    e.preventDefault();
})
$("#search1").keypress(function (e) {
    if(e.which == 13){
    console.log(this.value);
    for(var b=0;b<teamData1.length;b++){
        if(this.value.toUpperCase() == teamData1[b].key)
        window.location='./teamInfo.html?'+teamData1[b].key;
    }
    e.preventDefault();
}
})
 