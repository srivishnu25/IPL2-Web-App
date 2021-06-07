var ab = location.search.substring(1);

console.log(ab);

var imgIcons =['https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png','https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg','https://image.flaticon.com/icons/png/512/147/147144.png']

var playersDetails = [
    {
      "id": 0,
      "playerName": "Hardik Pandya",
      "from": "MI",
      "price": "6.50 Cr",
      "isPlaying": true,
      "description": "All-rounder"
    },
    {
      "id": 1,
      "playerName": "Virat Kohli",
      "from": "RCB",
      "price": "8.00 Cr",
      "isPlaying": true,
      "description": "Batsman"
    },
    {
      "id": 2,
      "playerName": "Yuvraj Singh",
      "from": "MI",
      "price": "1.00 Cr",
      "isPlaying": false,
      "description": "Batsman"
    },
    {
      "id": 3,
      "playerName": "Chris Morris",
      "from": "RR",
      "price": "16.25 Cr",
      "isPlaying": true,
      "description": "All-rounder"
    },
    {
      "id": 4,
      "playerName": "Glenn Maxwell",
      "from": "RCB",
      "price": "14.25",
      "isPlaying": true,
      "description": "All-rounder"
    },
    {
      "id": 5,
      "playerName": "Rohit Sharma",
      "from": "MI",
      "price": "6.50 Cr",
      "isPlaying": true,
      "description": "Batsman"
    },
    {
      "id": 6,
      "playerName": "Ishan Kishan",
      "from": "MI",
      "price": "2.50 Cr",
      "isPlaying": true,
      "description": "Batsman"
    },
     {
      "id": 7,
      "playerName": "Chris Lynn",
      "from": "RR",
      "price": "6.50 Cr",
      "isPlaying": true,
      "description": "Batsman"
    },
    {
      "id": 8,
      "playerName": "AB de Villiers (wk)",
      "from": "RCB",
      "price": "8.00 Cr",
      "isPlaying": true,
      "description": "Batsman"
    },
    {
      "id": 9,
      "playerName": "Pavan Deshpande",
      "from": "RCB",
      "price": "1.00 Cr",
      "isPlaying": false,
      "description": "All-rounder"
    },
    {
      "id": 10,
      "playerName": "Washington Sundar",
      "from": "RR",
      "price": "16.25 Cr",
      "isPlaying": true,
      "description": "BatsMan"
    },
    {
      "id": 11,
      "playerName": "Lungi Ngidi",
      "from": "RR",
      "price": "14.25",
      "isPlaying": true,
      "description": "All-rounder"
    },
    {
      "id": 12,
      "playerName": "MS Dhoni",
      "from": "CSK",
      "price": "6.50 Cr",
      "isPlaying": true,
      "description": "BatsMan"
    },
    {
      "id": 13,
      "playerName": "Suresh Raina",
      "from": "CSK",
      "price": "2.50 Cr",
      "isPlaying": true,
      "description": "BatsMan"
    },
    {
      "id": 14,
      "playerName": "Deepak Chahar",
      "from": "CSK",
      "price": "1.00 Cr",
      "isPlaying": false,
      "description": "Batsman"
    },
    {
      "id": 15,
      "playerName": "R. Sai Kishore",
      "from": "CSK",
      "price": "16.25 Cr",
      "isPlaying": true,
      "description": "All-rounder"
    },
    {
      "id": 16,
      "playerName": "Imran Tahir",
      "from": "PK",
      "price": "14.25",
      "isPlaying": true,
      "description": "All-rounder"
    },
    {
      "id": 17,
      "playerName": "KM Asif",
      "from": "PK",
      "price": "6.50 Cr",
      "isPlaying": true,
      "description": "Batsman"
    },
    {
      "id": 18,
      "playerName": "Faf Du Plessis",
      "from": "PK",
      "price": "2.50 Cr",
      "isPlaying": true,
      "description": "Batsman"
    },
     {
      "id": 19,
      "playerName": "Ruturaj Gaikwad",
      "from": "PK",
      "price": "6.50 Cr",
      "isPlaying": true,
      "description": "Batsman"
    },
    {
      "id": 20,
      "playerName": "Dwayne Bravo",
      "from": "SRH",
      "price": "8.00 Cr",
      "isPlaying": true,
      "description": "Batsman"
    },
    {
      "id": 21,
      "playerName": "Mitchell Santner",
      "from": "SRH",
      "price": "1.00 Cr",
      "isPlaying": false,
      "description": "All-rounder"
    },
    {
      "id": 22,
      "playerName": "Shardul Thakur",
      "from": "SRH",
      "price": "16.25 Cr",
      "isPlaying": true,
      "description": "BatsMan"
    },
    {
      "id": 23,
      "playerName": "Karn Sharma",
      "from": "SRH",
      "price": "14.25",
      "isPlaying": true,
      "description": "All-rounder"
    },
    {
      "id": 24,
      "playerName": "Sanju Samson",
      "from": "DC",
      "price": "6.50 Cr",
      "isPlaying": true,
      "description": "BatsMan"
    },
    {
      "id": 25,
      "playerName": "Ben Stokes",
      "from": "DC",
      "price": "2.50 Cr",
      "isPlaying": true,
      "description": "BatsMan"
    },
    {
      "id": 26,
      "playerName": "Jofra Archer",
      "from": "DC",
      "price": "14.25",
      "isPlaying": true,
      "description": "All-rounder"
    },
    {
      "id": 27,
      "playerName": "Jaydev Unadkat",
      "from": "DC",
      "price": "6.50 Cr",
      "isPlaying": true,
      "description": "BatsMan"
    },
    {
      "id": 28,
      "playerName": "Mayank Markande",
      "from": "KKR",
      "price": "2.50 Cr",
      "isPlaying": true,
      "description": "BatsMan"
    },
    {
      "id": 29,
      "playerName": "David Miller",
      "from": "KKR",
      "price": "1.00 Cr",
      "isPlaying": false,
      "description": "Batsman"
    },
    {
      "id": 30,
      "playerName": "Manan Vohra",
      "from": "KKR",
      "price": "16.25 Cr",
      "isPlaying": true,
      "description": "All-rounder"
    },
    {
      "id": 31,
      "playerName": "Rahul Tewatia",
      "from": "KKR",
      "price": "14.25",
      "isPlaying": true,
      "description": "All-rounder"
    },
    {
      "id": 32,
      "playerName": "Yashasvi Jaiswal",
      "from": "KKR",
      "price": "6.50 Cr",
      "isPlaying": true,
      "description": "Batsman"
    }
  ]


var playersDetails1 = JSON.parse(localStorage.getItem('playersDetails')) == null ? localStorage.setItem('playersDetails',JSON.stringify(playersDetails)) : JSON.parse(localStorage.getItem('playersDetails'))
if(playersDetails1 === localStorage.setItem('playersDetails',JSON.stringify(playersDetails)))
playersDetails1 = JSON.parse(localStorage.getItem('playersDetails'));
//console.log(JSON.parse(localStorage.UpdatedplayersDetails))

if((localStorage.UpdatedplayersDetails)!=null){
    playersDetails1 = JSON.parse(localStorage.UpdatedplayersDetails)
}




var teamDetails = JSON.parse(localStorage.getItem('teamData'))
//var playersDetails1 = JSON.parse(localStorage.getItem('playersDetails'))

var section = $('section')
var teamWrapper = $("<div>").attr({id:'teamWrapper'});



for(var i=0;i<teamDetails.length;i++){
if(teamDetails[i].key == ab){
    $('#teamTitle').text(teamDetails[i].fullName);
    var teamImg=$('<img>').attr({src:teamDetails[i].teamIcon,class:"teamLogo"})
    var playersCount= $('<h4>').text('Player Count: '+4).addClass('teamNames')
    for(var j=0;j<playersDetails1.length;j++){
        if(teamDetails[i].key == playersDetails1[j].from){
    var topBatsman= $('<h4>').text("Top Batsman:"+playersDetails1[j].playerName).addClass('teamNames')
    var topBowler= $('<h4>').text("Top Bowler: "+playersDetails1[j+1].playerName).addClass('teamNames')
         break;
        }
    }
    var champs= $('<h4>').text("Championship Won Count: "+teamDetails[i].championshipsWon).addClass('teamNames')
    for(var j=0;j<playersDetails1.length;j++){
        if(teamDetails[i].key == playersDetails1[j].from){
            var k = (j%2 !== 0) ? 1 : 0;
            var cardWrapper = $('<div>').addClass("cardWrappers");
            teamWrapper.append(cardWrapper);
            var aTagWrapper = $('<a>').attr({href:"./playerDetails.html?"+j,class:"cards"});
            cardWrapper.append(aTagWrapper)
            var playerImg=$('<img>').attr({src:imgIcons[k],class:"teamLogos"})
            var playerName= $('<h5>').text("Name: "+playersDetails1[j].playerName).addClass('playerNames')
            var playerTeam= $('<h5>').text("Team: "+playersDetails1[j].from).addClass('playerNames')
            var playerPrice= $('<h5>').text("Price: "+playersDetails1[j].price).addClass('playerNames')
            var playerStats= $('<h5>').text("IsPlaying: "+playersDetails1[j].isPlaying).addClass('playerNames')
            var playerRole= $('<h5>').text("Role: "+playersDetails1[j].description).addClass('playerNames')
            
            aTagWrapper.append(playerImg,playerName,playerTeam,playerPrice,playerStats,playerRole)
        }
        
    }
    
    section.append(teamImg,playersCount,topBatsman,topBowler,champs,teamWrapper)
}
}

console.log(JSON.parse(localStorage.getItem('playersDetails1')))