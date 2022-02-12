async function catFact() {
  let response = await fetch('https://catfact.ninja/fact');
  let data = await response.text();
  console.log(data);
}

function updateBossOptions() {
  var x = document.getElementById("boss1");
  var option = new Option('Option Text','Option Value');
  x.options.add(option);
}

async function getAvatar(userId) {
  let data = {userId:`${userId}`}
  console.log(userId)
  console.log(JSON.stringify(data))
  let response = await fetch(`https://2xtju1ecpi.execute-api.us-west-1.amazonaws.com/DiscordProxy`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  let image = document.getElementById("testAvi");
  let resp = await response.json();
  console.log(resp)
  image.src = `https://cdn.discordapp.com/avatars/${userId}/${resp.avatar}`;
}

function entered(e, ele) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if(code == 13) { //Enter keycode
    getAvatar(ele.value)
  }
}