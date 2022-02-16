async function catFact() {
  let response = await fetch('https://catfact.ninja/fact')
  let data = await response.text()
  console.log(data)
}

async function getUserData(userId, userNumber) {
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
  let image = document.getElementById("Avatar" + userNumber)
  let resp = await response.json()
  console.log(resp)
  image.src = `https://cdn.discordapp.com/avatars/${userId}/${resp.avatar}` + "?size=64"
  let name = document.getElementById("Name" + userNumber)
  console.log(userNumber)
  name.innerHTML = resp.username
}


function idEntered(e) {
  var code = (e.keyCode ? e.keyCode : e.which)
  if(code == 13) { //Enter keycode
    getUserData(this.value, this.id)
  }
}

function somethingSelected(e) {
  prevValue = previousOptionValueJson[this.column + this.user]
  previousOptionValueJson[this.column + this.user] = this.value
  var selectedImage = document.getElementById(this.column + this.user + "Image")
  var selectedReact = this.options[this.selectedIndex].react
  if (selectedReact && selectedReact in reactIconMap) {
    selectedImage.src = reactIconMap[selectedReact]
    selectedImage.style.display = "inline"
  } 
  for (var i = 1; i <= 10; i++) {
    var otherUserSelect = document.getElementById(this.column + i)
    if (i == this.user || otherUserSelect == null) {
      continue
    }
    otherUserSelectOptionNew = document.getElementById(this.column + i + "Option" + this.value)
    otherUserSelectOptionNew.disabled = true
    if (prevValue != "None") {
      otherUserSelectOptionOld = document.getElementById(this.column + i + "Option" + prevValue)
      otherUserSelectOptionOld.disabled = false
    }
  }  
}

var previousOptionValueJson = {}

function initiatePrevOptions() {
  for (let i = 1; i <= 4; i++) {
    for(let j = 1; j <= 10; j++) {
      var roleKey = "RoleBoss" + i + "User" + j
      var value = "None"
      var tagKey = "TagBoss" + i + "User" + j
      previousOptionValueJson[roleKey] = value
      previousOptionValueJson[tagKey] = value
    }
  }
}
initiatePrevOptions()

function populateTable() {
  var table = document.getElementById("table")
  for (var i = 1; i <= 10; i++) {
    var row = table.insertRow(i)
    row.style.height = "85"
    var avatarCell = row.insertCell(0)
    var avatar = document.createElement('img')
    avatar.id = "AvatarUser" + i
    avatar.alt = "Avi"
    avatar.src = "assets/defaultAvatar.png"
    avatar.height = "64"
    avatarCell.appendChild(avatar)

    var discordIdCell = row.insertCell(1)
    var discordId = document.createElement('input')
    discordId.setAttribute('type', 'text')
    discordId.className = "selects"
    discordId.id = "User" + i
    discordId.addEventListener('keypress', idEntered)
    discordIdCell.appendChild(discordId)

    var nameCell = row.insertCell(2)
    var name = document.createElement('p')
    var nameText = document.createTextNode("Username");
    name.id = "NameUser" + i
    name.appendChild(nameText)
    nameCell.appendChild(name)

    for (var j = 1; j <= 4; j++) {
      var columnIndex = 3 + (j - 1) * 2
      var roleCell = row.insertCell(columnIndex)
      var role = document.createElement('select')
      role.column = "RoleBoss" + j + "User"
      role.className = "selects"
      role.user = i
      role.id = "RoleBoss" + j + "User" + i
      role.addEventListener('change', somethingSelected)

      var opt = document.createElement('option')
      opt.id = "RoleBoss" + j + "User" + i + "OptionNone"
      opt.className = "options"
      opt.value = "None"
      opt.disabled = true
      opt.hidden = true
      opt.selected = true
      opt.text = "-------"
      role.appendChild(opt)
      roleCell.appendChild(role)

      var roleReset = document.createElement('input')
      roleReset.setAttribute('type', 'button')
      roleReset.value = "reset"
      roleReset.column = "RoleBoss" + j + "User"
      roleReset.user = i
      roleReset.addEventListener('click', unsetSelect)
      roleCell.appendChild(roleReset)

      var roleReact = document.createElement('img')
      roleReact.id = "RoleBoss" + j + "User" + i + "Image"
      roleReact.height = "24"
      roleCell.appendChild(roleReact)

      var tagCell = row.insertCell(columnIndex + 1)
      var tag = document.createElement('select')
      tag.className = "selects"
      tag.column = "TagBoss" + j + "User"
      tag.user = i
      tag.id = "TagBoss" + j + "User" + i
      tag.addEventListener('change', somethingSelected)

      var opt2 = document.createElement('option')
      opt2.id = "TagBoss" + j + "User" + i + "OptionNone"
      opt2.className = "options"
      opt2.value = "None"
      opt2.disabled = true
      opt2.hidden = true
      opt2.selected = true
      opt2.text = "-------"
      tag.appendChild(opt2)
      tagCell.appendChild(tag)

      var tagReset = document.createElement('input')
      tagReset.setAttribute('type', 'button')
      tagReset.value = "reset"
      tagReset.column = "TagBoss" + j + "User"
      tagReset.user = i
      tagReset.addEventListener('click', unsetSelect)
      tagCell.appendChild(tagReset)

      var tagReact = document.createElement('img')
      tagReact.id = "TagBoss" + j + "User" + i + "Image"
      tagReact.height = "24"
      tagCell.appendChild(tagReact)
    }
  }
}

function unsetSelect() {
  var ele = document.getElementById(this.column + this.user)
  var selectedOption = ele.options[ele.selectedIndex]
  ele.value = "None"
  var selectedImage = document.getElementById(this.column + this.user + "Image")
  selectedImage.style.display = "none"
  for (var i = 1; i <= 10; i++) {
    var otherUserSelect = document.getElementById(this.column + i)
    if (otherUserSelect == null) {
      continue
    }
    otherUserOption = document.getElementById(this.column + i + "Option" + selectedOption.value)
    otherUserOption.disabled = false
  }
  previousOptionValueJson[this.column + this.user] = "None"}

function setBosses(wing) {
  var noData = false
  for (let i = 1; i <= 4; i++) {
    var boss = wingRoleJson[wing]["boss" + i]
    var bossNameHeader = document.getElementById("Boss" + i)
    if (boss['name'] == null) {
      bossNameHeader.innerText = "N/A"
      noData = true
    } else {
      bossNameHeader.innerText = boss['name']
    }
    for(let j = 1; j <= 10; j++) {
      var roleBoss = document.getElementById("RoleBoss" + i + "User" + j)
      clearOptions(roleBoss)
      var opt = document.createElement('option')
      opt.id = "RoleBoss" + i + "User" + j + "OptionNone"
      opt.className = "options"
      opt.value = "None"
      opt.disabled = true
      opt.hidden = true
      opt.selected = true
      opt.text = "-------"
      roleBoss.appendChild(opt)

      var tagBoss = document.getElementById("TagBoss" + i + "User" + j)
      clearOptions(tagBoss)
      var opt2 = document.createElement('option')
      opt2.id = "TagBoss" + i + "User" + j + "OptionNone"
      opt2.className = "options"
      opt2.value = "None"
      opt2.disabled = true
      opt2.hidden = true
      opt2.selected = true
      opt2.text = "-------"
      tagBoss.appendChild(opt2)

      if (noData) {
        continue
      }

      var roleArray = boss['roles']
      for (var k = 0; k < roleArray.length; k++) {
        var role = roleArray[k]
        var opt = document.createElement('option');
        opt.id = "RoleBoss" + i + "User" + j + "Option" + k
        opt.className = "options"
        opt.text = role.name
        opt.value = k
        opt.react = role.value
        roleBoss.add(opt)
      }

      var tagArray = boss['tags']
      for (var k = 0; k < tagArray.length; k++) {
        var tag = tagArray[k]
        var opt = document.createElement('option');
        opt.id = "TagBoss" + i + "User" + j + "Option" + k
        opt.className = "options"
        opt.text = tag.name
        opt.value = k
        opt.react = tag.value
        tagBoss.add(opt)
      }
    }
  }
}

function clearOptions(ele) {
  var i, L = ele.options.length - 1;
  for(i = L; i >= 0; i--) {
     ele.remove(i);
  }
}

function wingSelect() {
  setBosses(this.value)
}

function todoOnload () {
  populateTable()
  let wingSelector = document.getElementById("wing")
  wing.addEventListener('change', wingSelect)
}