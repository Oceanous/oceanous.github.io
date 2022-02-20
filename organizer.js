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
  let name = document.getElementById("Name" + userNumber)
  let resp = await response.json()
  if (resp.code != null && resp.code == 0) {
    image.src = "assets/defaultAvatar.png"
    name.innerHTML = "Couldn't find user"
    return
  }
  image.src = `https://cdn.discordapp.com/avatars/${userId}/${resp.avatar}` + "?size=64"
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
  console.log(selectedReact)
  if (selectedReact && selectedReact in reactIconMap) {
    selectedImage.src = reactIconMap[selectedReact]
    selectedImage.style.display = "inline"
  } else {
    selectedImage.style.display = "none"
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
var raiderList = document.createElement("datalist")
raiderList.id = "raiderList"

function populateUsers() {
  for (var i = 0; i < knownRaiders.length; i++) {
    var opt = document.createElement('option')
    opt.value = knownRaiders[i].value
    // opt.label = knownRaiders[i].name
    opt.text = knownRaiders[i].name
    raiderList.appendChild(opt)
  }
}

function addNoneOption(ele) {
  var opt = document.createElement('option')
  opt.id = ele.id + "OptionNone"
  opt.className = "options"
  opt.value = "None"
  opt.disabled = true
  opt.hidden = true
  opt.selected = true
  opt.text = "-------"
  ele.appendChild(opt)
}

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
    discordId.setAttribute('list', 'raiderList')
    discordId.className = "selects"
    discordId.id = "User" + i
    discordId.addEventListener('keypress', idEntered)
    discordId.appendChild(raiderList)
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

      addNoneOption(role)
      roleCell.appendChild(role)

      var roleReset = document.createElement('input')
      roleReset.setAttribute('type', 'button')
      roleReset.value = "reset"
      roleReset.column = "RoleBoss" + j + "User"
      roleReset.user = i
      roleReset.className = "selects"
      roleReset.addEventListener('click', unsetSelect)
      roleCell.appendChild(roleReset)

      var roleReact = document.createElement('img')
      roleReact.id = "RoleBoss" + j + "User" + i + "Image"
      roleReact.height = "24"
      roleReact.style.display = "none"
      roleCell.appendChild(roleReact)

      var tagCell = row.insertCell(columnIndex + 1)
      var tag = document.createElement('select')
      tag.className = "selects"
      tag.column = "TagBoss" + j + "User"
      tag.user = i
      tag.id = "TagBoss" + j + "User" + i
      tag.addEventListener('change', somethingSelected)

      addNoneOption(tag)
      tagCell.appendChild(tag)

      var tagReset = document.createElement('input')
      tagReset.setAttribute('type', 'button')
      tagReset.value = "reset"
      tagReset.column = "TagBoss" + j + "User"
      tagReset.user = i
      tagReset.className = "selects"
      tagReset.addEventListener('click', unsetSelect)
      tagCell.appendChild(tagReset)

      var tagReact = document.createElement('img')
      tagReact.id = "TagBoss" + j + "User" + i + "Image"
      tagReact.height = "24"
      tagReact.style.display = "none"
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
  previousOptionValueJson[this.column + this.user] = "None"
}

function setBosses(wing) {
  var noData = false
  for (let i = 1; i <= 4; i++) {
    var boss = wingRoleJson[wing]["boss" + i]
    var bossNameHeader = document.getElementById("Boss" + i)
    var bossDiv = document.getElementById("Boss" + i + "Div")
    var bossEnable = document.createElement("input")
    bossEnable.setAttribute('type', 'checkbox')
    bossEnable.id = "boss" + i + "Enable"
    bossDiv.appendChild(bossEnable)
    if (boss['name'] == null) {
      bossDiv.innerText = "N/A"
      noData = true
    } else {
      bossDiv.innerText = boss['name']
    }
    for(let j = 1; j <= 10; j++) {
      var roleBoss = document.getElementById("RoleBoss" + i + "User" + j)
      clearOptions(roleBoss)
      addNoneOption(roleBoss)

      var tagBoss = document.getElementById("TagBoss" + i + "User" + j)
      clearOptions(tagBoss)
      addNoneOption(tagBoss)

      var roleReact = document.getElementById("RoleBoss" + i + "User" + j + "Image")
      roleReact.style.display = "none"
      var tagReact = document.getElementById("TagBoss" + i + "User" + j + "Image")
      tagReact.style.display = "none"

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

function setRoleBosses() {
  var bossSelect = document.getElementById("bossRoles")
  var roleSelect = document.getElementById("roleSelect")
  var tagSelect = document.getElementById("tagSelect")
  clearOptions(bossSelect)
  clearOptions(roleSelect)
  clearOptions(tagSelect)
  addNoneOption(bossSelect)
  addNoneOption(roleSelect)
  addNoneOption(tagSelect)
  clearRoleAndTagEditor()
  setRoleButtons(true)
  setTagButtons(true)

  for (let i = 1; i <= 4; i++) {
    var boss = wingRoleJson[this.value]["boss" + i]
    if (boss['name'] != null) {
      var opt = document.createElement('option')
      opt.id = "boss" + i
      opt.className = "options"
      opt.text = boss['name']
      opt.value = "boss" + i
      bossRoles.add(opt)
    } 
  }
}

function setRoles(ele) {
  var wingSelector = document.getElementById("wingRoles")
  var roleSelect = document.getElementById("roleSelect")
  clearOptions(roleSelect)
  addNoneOption(roleSelect)
  setRoleButtons(false)
  var roleList = wingRoleJson[wingSelector.value][ele.value].roles
  for (let i = 0; i < roleList.length; i++) {
    var opt = document.createElement('option')
    opt.id = "role" + i
    opt.className = "options"
    opt.text = roleList[i]['name']
    opt.value = roleList[i]['value']
    opt.ena = true
    roleSelect.add(opt)
  }
  var disabledRoleList = wingRoleJson[wingSelector.value][ele.value].disabledRoles
  for (let i = 0; i < disabledRoleList.length; i++) {
    var opt = document.createElement('option')
    opt.id = "disabledRole" + i
    opt.className = "disabledOptions"
    opt.text = disabledRoleList[i]['name']
    opt.value = disabledRoleList[i]['value']
    opt.ena = false
    roleSelect.add(opt)
  }
}

function setTags(ele) {
  var wingSelector = document.getElementById("wingRoles")
  var tagSelect = document.getElementById("tagSelect")
  clearOptions(tagSelect)
  addNoneOption(tagSelect)
  setTagButtons(false)
  var tagList = wingRoleJson[wingSelector.value][ele.value].tags
  for (let i = 0; i < tagList.length; i++) {
    var opt = document.createElement('option')
    opt.id = "tag" + i
    opt.className = "options"
    opt.text = tagList[i]['name']
    opt.value = tagList[i]['value']
    opt.ena = true
    tagSelect.add(opt)
  }  
  var disabledTagList = wingRoleJson[wingSelector.value][ele.value].disabledTags
  for (let i = 0; i < disabledTagList.length; i++) {
    var opt = document.createElement('option')
    opt.id = "disabledTag" + i
    opt.className = "disabledOptions"
    opt.text = disabledTagList[i]['name']
    opt.value = disabledTagList[i]['value']
    opt.ena = false
    tagSelect.add(opt)
  }
}

function setRolesAndTag() {
  setRoles(this)
  setRoleButtons(false)
  setTagButtons(false)
  setTags(this)
  clearRoleAndTagEditor()
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

function roleEditorSelect() {
  var roleEnable = document.getElementById("roleEnable")
  roleEnable.disabled = false
  roleEnable.checked = this.options[this.selectedIndex].ena
  var nameText = document.getElementById("roleNameText")
  var reactText = document.getElementById("roleReactText")
  nameText.disabled = false
  reactText.disabled = false
  nameText.value = this.options[this.selectedIndex].text
  reactText.value = this.value
}

function tagEditorSelect() {
  var tagEnable = document.getElementById("tagEnable")
  tagEnable.disabled = false
  tagEnable.checked = false
  tagEnable.checked = this.options[this.selectedIndex].ena
  var nameText = document.getElementById("tagNameText")
  var reactText = document.getElementById("tagReactText")
  nameText.disabled = false
  reactText.disabled = false
  nameText.value = this.options[this.selectedIndex].text
  reactText.value = this.value
}

function clearRoleAndTagEditor() {
  clearRoleEditor()
  clearTagEditor()
}

function setRoleButtons(disabled) {
  var roleAdd = document.getElementById("roleAdd")
  roleAdd.disabled = disabled
  var roleDelete = document.getElementById("roleDelete")
  roleDelete.disabled = disabled
  var roleSubmit = document.getElementById("roleSubmit")
  roleSubmit.disabled = disabled
}
 
function setTagButtons(disabled) {
  var tagAdd = document.getElementById("tagAdd")
  tagAdd.disabled = disabled
  var tagDelete = document.getElementById("tagDelete")
  tagDelete.disabled = disabled
  var tagSubmit = document.getElementById("tagSubmit")
  tagSubmit.disabled = disabled
}

function clearRoleEditor() {
  var roleEnable = document.getElementById("roleEnable")
  roleEnable.disabled = true
  roleEnable.checked = false
  var roleNameText = document.getElementById("roleNameText")
  roleNameText.disabled = true
  roleNameText.value = ""
  var roleReactText = document.getElementById("roleReactText")
  roleReactText.disabled = true
  roleReactText.value = ""
}

function clearTagEditor() {
  var tagEnable = document.getElementById("tagEnable")
  tagEnable.disabled = true
  tagEnable.checked = false
  var tagNameText = document.getElementById("tagNameText")
  tagNameText.disabled = true
  tagNameText.value = ""
  var tagReactText = document.getElementById("tagReactText")
  tagReactText.disabled = true
  tagReactText.value = ""
}

function checkAndGetCookie() {
  newJson = {}
  var cookieExists = true
  for (var i = 1; i <= 7; i++) {
    wingCookie = getCookie("wing" + i)
    if (!wingCookie) {
      cookieExists = false
      continue
    }
    var wingJson = JSON.parse(getCookie("wing" + i))
    newJson["wing" + i] = wingJson
  }
  if (!cookieExists) {
    console.log("No cookies set")
    resetToDefaultJson()
  } else {
    wingRoleJson = newJson
    console.log("cookies retrieved")
  }
}

function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded .split('; ');
  let res;
  cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res;
}

function setRACookies() {
  var keys = Object.keys(wingRoleJson)
  for (var i = 0; i < keys.length; i++) {
    setCookie(keys[i], JSON.stringify(wingRoleJson[keys[i]]), 30)
  }
}

function setRole() {
  var roleSelector = document.getElementById("roleSelect")
  var opt = roleSelector.options[roleSelector.selectedIndex]
  var enableBox = document.getElementById("roleEnable")
  var nameBox = document.getElementById("roleNameText")
  var reactBox = document.getElementById("roleReactText")

  opt.text = nameBox.value
  opt.value = reactBox.value
  opt.ena = enableBox.checked
  if (enableBox.checked) {
    opt.className = "options"
  } else {
    opt.className = "disabledOptions"
  }
  updateRoles()
  setRoles(document.getElementById("bossRoles"))
  clearRoleEditor()
}

function addRole() {
  var roleSelector = document.getElementById("roleSelect")
  var enableBox = document.getElementById("roleEnable")
  var nameBox = document.getElementById("roleNameText")
  var reactBox = document.getElementById("roleReactText")

  var opt = document.createElement('option')
  opt.selected = true
  opt.text = "New Role"
  nameBox.value = "New Role"
  opt.value = "React"
  reactBox.value = "React"
  opt.ena = false
  enableBox.checked = false
  roleSelector.add(opt)
  if (enableBox.checked) {
    opt.className = "options"
  } else {
    opt.className = "disabledOptions"
  }
  updateRoles()
  setRoles(document.getElementById("bossRoles"))
  clearRoleEditor()
}

function removeRole() {
  var roleSelector = document.getElementById("roleSelect")
  roleSelector.remove(roleSelector.selectedIndex)

  updateRoles()
  setRoles(document.getElementById("bossRoles"))
  clearRoleEditor()
}

function removeTag() {
  var tagSelector = document.getElementById("tagSelect")
  tagSelector.remove(tagSelector.selectedIndex)

  updateTags()
  setTags(document.getElementById("bossRoles"))
  clearRoleEditor()
}

function addTag() {
  var tagSelector = document.getElementById("tagSelect")
  var enableBox = document.getElementById("tagEnable")
  var nameBox = document.getElementById("tagNameText")
  var reactBox = document.getElementById("tagReactText")

  var opt = document.createElement('option')
  opt.selected = true
  opt.text = "New Tag"
  nameBox.value = "New Tag"
  opt.value = "React"
  reactBox.value = "React"
  opt.ena = false
  enableBox.checked = false
  tagSelector.add(opt)
  if (enableBox.checked) {
    opt.className = "options"
  } else {
    opt.className = "disabledOptions"
  }
  updateTags()
  setTags(document.getElementById("bossRoles"))
  clearTagEditor()
 }

function setTag() {
  var tagSelector = document.getElementById("tagSelect")
  var opt = tagSelector.options[tagSelector.selectedIndex]
  var enableBox = document.getElementById("tagEnable")
  var nameBox = document.getElementById("tagNameText")
  var reactBox = document.getElementById("tagReactText")

  opt.text = nameBox.value
  opt.value = reactBox.value
  opt.ena = enableBox.checked
  if (enableBox.checked) {
    opt.className = "options"
  } else {
    opt.className = "disabledOptions"
  }
  updateTags()
  setTags(document.getElementById("bossRoles"))
  clearTagEditor()
}

function updateRoles() {
  var wingSelector = document.getElementById("wingRoles")
  var bossSelector = document.getElementById("bossRoles")
  var roleSelector = document.getElementById("roleSelect")
  var roleList = wingRoleJson[wingSelector.value][bossSelector.value].roles
  roleList = []
  var disabledRoleList = wingRoleJson[wingSelector.value][bossSelector.value].disabledRoles
  disabledRoleList = []
  for (var i = 0; i < roleSelector.options.length; i++) {
    var opt = roleSelector.options[i]
    if (opt.value == "None") {
      continue
    }
    var jsonRole = new Object()
    jsonRole.name = opt.text
    jsonRole.value = opt.value
    if (opt.ena) {
      roleList.push(jsonRole)
    } else {
      disabledRoleList.push(jsonRole)
    }
  }
  wingRoleJson[wingSelector.value][bossSelector.value].roles = roleList
  wingRoleJson[wingSelector.value][bossSelector.value].disabledRoles = disabledRoleList
  setRACookies()
}

function updateTags() {
  var wingSelector = document.getElementById("wingRoles")
  var bossSelector = document.getElementById("bossRoles")
  var tagSelector = document.getElementById("tagSelect")
  var tagList = wingRoleJson[wingSelector.value][bossSelector.value].tags
  tagList = []
  var disabledTagList = wingRoleJson[wingSelector.value][bossSelector.value].disabledTags
  disabledTagList = []
  for (var i = 0; i < tagSelector.options.length; i++) {
    var opt = tagSelector.options[i]
    if (opt.value == "None") {
      continue
    }
    var jsonRole = new Object()
    jsonRole.name = opt.text
    jsonRole.value = opt.value
    if (opt.ena) {
      tagList.push(jsonRole)
    } else {
      disabledTagList.push(jsonRole)
    }
  }
  wingRoleJson[wingSelector.value][bossSelector.value].tags = tagList
  wingRoleJson[wingSelector.value][bossSelector.value].disabledTags = disabledTagList
  setRACookies()
}

function showSnackbar() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  copyToClipboard(generatePing())
}

function setCookie(cName, cValue, expDays) {
  let date = new Date();
  date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + ";";
}

function resetToDefaultJson() {
  wingRoleJson = wingRoleJsonDefault
  setRACookies()
}

function generatePing() {
  var text = "|"
  var wing = document.getElementById("wing").value
  var tagsSet = [false, false, false, false, false]
  var nums = [":zero:", ":one:", ":two:", ":three:", ":four:"]
  for (var k = 1; k <= 4; k++) {
    var boss = wingRoleJson[wing]["boss" + k]
    var bossEnable = document.getElementById("Boss" + k + "Enable")
    if (boss["name"] == null || bossEnable.checked == false) {
      continue
    } else {
      for (var l = 1; l <= 10; l++) {
        var tagElement = document.getElementById("TagBoss" + k + "User" + l)
        if (tagElement.value != "None") {
          tagsSet[k] = true
        }
      }
      if (wingRoleJson[wing]["boss" +k]["react"]) {
        text += ":" + wingRoleJson[wing]["boss" + k]["react"] + ":"
      } else {
        text += nums[k]
      }
      if (tagsSet[k]) {
        text += ":black_large_square:"
      }
    }   
    text += "|"
  }
  text += "\r\n"
  for (var i = 1; i <= 10; i++) {
    text += "|"
    for (var j = 1; j <= 4; j++) {
      var boss = wingRoleJson[wing]["boss" + j]
      var bossEnable = document.getElementById("Boss" + j + "Enable")
      if (boss["name"] == null || bossEnable.checked == false) {
        continue
      }
      var bossRole = document.getElementById("RoleBoss" + j + "User" + i)
      if (bossRole.value == "None") {
        text += ":black_large_square:"
      } else {
        var selectedReact = bossRole.options[bossRole.selectedIndex].react
        text += ":" + selectedReact + ":"
      }
      if (!tagsSet[j]) {
        text += "|"
        continue
      }

      var bossTag = document.getElementById("TagBoss" + j + "User" + i)
      if (bossTag.value == "None") {
        text += ":black_large_square:"
      } else {
        var selectedReact = bossTag.options[bossTag.selectedIndex].react
        text += ":" + selectedReact + ":"
      }
      text += "|"
    }
    var userId = document.getElementById("User" + i)
    text += " <@" + userId.value +">\r\n"
  }
  return text
}

function checkAndGetRaidersCookie() {
  newJson = {}
  var cookieExists = true
  for (var i = 1; i <= 7; i++) {
    raiderCookie = getCookie("raiders" + i)
    if (!wingCookie) {
      cookieExists = false
      continue
    }
    var wingJson = JSON.parse(getCookie("wing" + i))
    newJson["wing" + i] = wingJson
  }
  if (!cookieExists) {
    console.log("No cookies set")
    resetToDefaultJson()
  } else {
    wingRoleJson = newJson
    console.log("cookies retrieved")
  }
}

function copyToClipboard(text){
  navigator.clipboard.writeText(text);
}

function mainOnload () {
  checkAndGetCookie()
  populateUsers()
  populateTable()
  var wingSelector = document.getElementById("wing")
  wingSelector.addEventListener('change', wingSelect)
  wingSelector.value = "wing1"
  setBosses("wing1")
}

function rolesOnload () {
  checkAndGetCookie()
  var wingSelector = document.getElementById("wingRoles")
  wingSelector.addEventListener('change', setRoleBosses)
  var bossSelector = document.getElementById("bossRoles")
  bossSelector.addEventListener('change', setRolesAndTag)
  var roleSelector = document.getElementById("roleSelect")
  roleSelector.addEventListener('change', roleEditorSelect)
  var tagSelector = document.getElementById("tagSelect")
  tagSelector.addEventListener('change', tagEditorSelect)
  setRoleButtons(true)
  setTagButtons(true)
}