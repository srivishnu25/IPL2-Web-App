var x = location.search.substring(1);
var playersDetails = JSON.parse(localStorage.getItem('playersDetails'))

var imgIcons =['https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png','https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg','https://image.flaticon.com/icons/png/512/147/147144.png']
var k = (x%2 !== 0) ? 1 : 0;


var section = $('section')

$('#playerTitle').text(playersDetails[x].playerName);
var playerImg=$('<img>').attr({src:imgIcons[k],class:"teamLogo1"})
var playerTeam= $('<h5>').text("Team: "+playersDetails[x].from).addClass('playerNames1')
var playerPrice= $('<h5>').text("Price: "+playersDetails[x].price).addClass('playerNames1')
var playerStats= $('<h5>').text("IsPlaying: "+playersDetails[x].isPlaying).addClass('playerNames1')
var playerRole= $('<h5>').text("Role: "+playersDetails[x].description).addClass('playerNames1')

section.append(playerImg,playerTeam,playerPrice,playerStats,playerRole)