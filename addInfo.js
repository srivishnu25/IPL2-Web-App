var str = location.search.substring(1);
console.log(str)
var form1 = $('#first');
var form2 = $('#second');




if(str === '0'){
    form2.hide();

form1.append( 
    $('<legend>').text('ADD TEAM'),
    $("<input>", 
         { type:'text', 
           placeholder:'Full Name', 
           name:'fullName',
           id:'fullname', 
           style:'width:65%' }
     ),
     $("<input>", 
         { type:'text', 
           placeholder:'Key', 
           name:'key', 
           id:'key',
           style:'width:65%' }
     ),
     $("<input>", 
     { type:'number', 
       placeholder:'Championships Won', 
       name:'championshipsWon',
       id:'number' ,
       style:'width:65%' }
    ),
    $("<input>", 
    { type:'url', 
      placeholder:'enter image url', 
      name:'imageUrl',
      id:'imageUrl' ,
      style:'width:65%' }
   ),
    $("<input>", 
    { type:'submit', 
    placeholder:'Championships Won', 
    name:'Submit',
    id:'Submit1' ,
    style:'width:65%' }
    )
);
}



else{
form1.hide();
form2.append( 
    $('<legend>').text('ADD PLAYER'),
    $("<input>", 
         { type:'text', 
           placeholder:'Player Name', 
           name:'playerName',
           id:'playerName', 
           style:'width:65%' }
     ),
     $("<input>", 
         { type:'text', 
           placeholder:'Place', 
           name:'Place', 
           id:'from',
           style:'width:65%' }
     ),
     $("<input>", 
     { type:'text', 
       placeholder:'Description', 
       name:'Description', 
       id:'description',
       style:'width:65%' }
 ),
     $("<input>", 
     { type:'number', 
       placeholder:'Price in Crores', 
       name:'Price',
       id:'price' ,
       style:'width:65%' }
    ),
    $("<input>", 
    { type:'submit', 
    name:'Submit2',
    id:'Submit2' ,
    style:'width:65%' }
    )
);
}

$('#Submit1').click(function(e){
    console.log('clicked')
    if(fullname.value === '' ){
    alert('fill form completely!!')
    e.preventDefault();
    }
    else{
        //console.log(JSON.parse(localStorage.UpdatedteamData))
        
        var teamData = (localStorage.UpdatedteamData) == null ? JSON.parse(localStorage.getItem('teamData')) : JSON.parse(localStorage.UpdatedteamData);
        
       var id = teamData[teamData.length-1].id;
        //var id = teamData.pop();
        var obj={
            id: id+1,
            fullName: fullname.value,
            championshipsWon: parseInt(number.value),
            key: key.value,
            teamIcon:imageUrl.value
        }
        teamData.push(obj);
        console.log(teamData)
        localStorage.setItem('UpdatedteamData',JSON.stringify(teamData))
        
        console.log('Filled Successfully!')
        
        window.location.replace('./index.html')
        e.preventDefault();
    }
})




$('#Submit2').click(function(e){
    
    console.log('clicked')
    if(playerName.value === ''){
    alert('Fill the Form Completely!!');
    }
    else{
        //console.log(JSON.parse(localStorage.playersDetails))
        var playerData = (localStorage.UpdatedplayersDetails) == null ? JSON.parse(localStorage.getItem('playersDetails')) : JSON.parse(localStorage.UpdatedplayersDetails);
        ;
        var id = playerData[playerData.length-1].id;
        var obj2={
            id: id+1,
            playerName: playerName.value,
            from:from.value,
            description:description.value,
            price: parseInt(price.value)+"Cr"
        }
        playerData.push(obj2);
        console.log(playerData)
        localStorage.setItem('UpdatedplayersDetails',JSON.stringify(playerData))
        console.log('Filled Successfully!')
        window.location.replace('/index.html')
        e.preventDefault();
    }
   
})
