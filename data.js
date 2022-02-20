var knownRaiders = [
    { name: "Meito", value: "629992107783880705"},
    { name: "Oceanous", value: "268363012493017089"},
    { name: "Cloud", value: "134873718324199425"},
    { name: "Abraxus", value: "535273074048892946"},
    { name: "Ninya", value: "150713541236621312"},
    { name: "John", value: "229575872342917120"},
    { name: "Top Gun", value: "252747030365995009"},
    { name: "Muca", value: "184842730839605248"},
    { name: "Bored", value: "335016216316084224"},
    { name: "Mush", value: "202479353001410560"},
    { name: "Mason", value: "128307570799673344"},
    { name: "Aerin", value: "336275612865921025"},
]

var dataList

var wingRoleJsonDefault = {
    "wing1" : {
      "boss1": {
          "name" : "Vale Guardian",
          "roles" : [
            { name:'Druid', value:"0_ranger_druid" },
            { name:'Quickness', value:"Quickness" },
            { name:'Quickness', value:"Quickness" },
            { name:'Alacrity', value:"Alacrity" },
            { name:'Banners', value:"0_warrior_berserker" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" }
          ],
          "tags" : [
            { name:'Tank', value:"shield"}
          ],
          "disabledRoles" : [],
          "disabledTags" : []
      },
      "boss2": {
        "name" : "Gorseval",
        "roles" : [
          { name:'Druid', value:"0_ranger_druid" },
          { name:'Quickness', value:"Quickness" },
          { name:'Quickness', value:"Quickness" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Banners', value:"0_warrior_berserker" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
          { name:'Tank', value:"shield"}
        ],
        "disabledRoles" : [],
        "disabledTags" : []
      },
      "boss3": {
        "name" : "Sabetha",
        "roles" : [
          { name:'Druid', value:"0_ranger_druid" },
          { name:'Quickness', value:"Quickness" },
          { name:'Quickness', value:"Quickness" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Banners', value:"0_warrior_berserker" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
          { name:'Flak Kite', value:"kite"},
          { name:'Cannons 1', value:"cannons1"},
          { name:'Cannons 2', value:"cannons2"}
        ],
        "disabledRoles" : [],
        "disabledTags" : []
      },
      "boss4": {
        "name" : null
      }
    },
  
    "wing2" : {
      "boss1": {
          "name" : "Slothasor",
          "roles" : [
            { name:'Druid', value:"0_ranger_druid" },
            { name:'Quickness', value:"Quickness" },
            { name:'Quickness', value:"Quickness" },
            { name:'Alacrity', value:"Alacrity" },
            { name:'Banners', value:"0_warrior_berserker" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" }
          ],
          "tags" : [
            { name:'Shroom', value:"shroom1"},
            { name:'Shroom', value:"shroom2"},
            { name:'Shroom', value:"shroom3"},
            { name:'Shroom', value:"shroom4"}
          ],
          "disabledRoles" : [],
          "disabledTags" : []
      },
      "boss2": {
        "name" : "Bandit Trio",
        "roles" : [
          { name:'Druid', value:"0_ranger_druid" },
          { name:'Quickness', value:"Quickness" },
          { name:'Quickness', value:"Quickness" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Banners', value:"0_warrior_berserker" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
          { name:'Mortars', value:"mortars"},
          { name:'Saboteurs', value:"sabs"}
        ],
        "disabledRoles" : [],
        "disabledTags" : []
      },
      "boss3": {
        "name" : "Matthias",
        "roles" : [
          { name:'Druid', value:"0_ranger_druid" },
          { name:'Quickness', value:"Quickness" },
          { name:'Quickness', value:"Quickness" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Banners', value:"0_warrior_berserker" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
          { name:'Reflect', value:"reflect"}
        ],
        "disabledRoles" : [],
        "disabledTags" : []
      },
      "boss4": {
        "name" : null
      }
    },
  
    "wing3" : {
      "boss1": {
          "name" : "Escort",
          "roles" : [
            { name:'Druid', value:"0_ranger_druid" },
            { name:'Quickness', value:"Quickness" },
            { name:'Quickness', value:"Quickness" },
            { name:'Alacrity', value:"Alacrity" },
            { name:'Banners', value:"0_warrior_berserker" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'Tower', value:"0_mesmer_chronomancer" }
          ],
          "tags" : [
            { name:'Backwarg', value:"backwarg"}
          ],
          "disabledRoles" : [],
          "disabledTags" : []
      },
      "boss2": {
        "name" : "Keep Construct",
        "roles" : [
          { name:'Druid', value:"0_ranger_druid" },
          { name:'Quickness', value:"Quickness" },
          { name:'Quickness', value:"Quickness" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Banners', value:"0_warrior_berserker" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
          { name:'Tank', value:"shield"},
          { name:'Pusher', value:"pusher"}
        ],
        "disabledRoles" : [],
        "disabledTags" : []
      },
      "boss3": {
        "name" : "Twisted Castle",
        "roles" : [
          { name:'Druid', value:"0_ranger_druid" },
          { name:'Quickness', value:"Quickness" },
          { name:'Quickness', value:"Quickness" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Banners', value:"0_warrior_berserker" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
        ],
        "disabledRoles" : [],
        "disabledTags" : []
      },
      "boss4": {
        "name" : "Xera",
        "roles" : [
          { name:'Druid', value:"0_ranger_druid" },
          { name:'Quickness', value:"Quickness" },
          { name:'Quickness', value:"Quickness" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Banners', value:"0_warrior_berserker" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
          { name:'Tank', value:"shield"}
        ],
        "disabledRoles" : [],
        "disabledTags" : []
      }
    },
  
    "wing4" : {
      "boss1": {
          "name" : "Cairn",
          "roles" : [
            { name:'Druid', value:"0_ranger_druid" },
            { name:'Quickness', value:"Quickness" },
            { name:'Quickness', value:"Quickness" },
            { name:'Alacrity', value:"Alacrity" },
            { name:'Alacrity', value:"Alacrity" },
            { name:'Banners', value:"0_warrior_berserker" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" }
          ],
          "tags" : [
          ],
          "disabledRoles" : [],
          "disabledTags" : []
      },
      "boss2": {
        "name" : "Mursaat Overseer",
        "roles" : [
          { name:'Druid', value:"0_ranger_druid" },
          { name:'Quickness', value:"Quickness" },
          { name:'Quickness', value:"Quickness" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Banners', value:"0_warrior_berserker" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
          { name:'Claim', value:"claim"},
          { name:'Protect', value:"protect"},
          { name:'Dispel', value:"dispel"}
        ],
        "disabledRoles" : [],
        "disabledTags" : []
      },
      "boss3": {
        "name" : "Samarog",
        "roles" : [
          { name:'Druid', value:"0_ranger_druid" },
          { name:'Quickness', value:"Quickness" },
          { name:'Quickness', value:"Quickness" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Banners', value:"0_warrior_berserker" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
        ],
        "disabledRoles" : [],
        "disabledTags" : []
      },
      "boss4": {
        "name" : "Deimos",
        "roles" : [
          { name:'Druid', value:"0_ranger_druid" },
          { name:'Quickness', value:"Quickness" },
          { name:'Quickness', value:"Quickness" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Hand Kite', value:"kite" },
          { name:'Banners', value:"0_warrior_berserker" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
          { name:'Tank', value:"shield"},
          { name:'Oil Kite', value:"oilKite"}
        ],
        "disabledRoles" : [],
        "disabledTags" : []
      }
    },
  
    "wing5" : {
      "boss1": {
          "name" : "Soulless Horror",
          "roles" : [
            { name:'Druid', value:"0_ranger_druid" },
            { name:'Quickness', value:"Quickness" },
            { name:'Quickness', value:"Quickness" },
            { name:'Alacrity', value:"Alacrity" },
            { name:'Alacrity', value:"Alacrity" },
            { name:'Epi', value:"0_necromancer_scourge" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" }
          ],
          "tags" : [
            { name:'Tank', value:"shield"},
            { name:'Tank', value:"shield"}
          ],
          "disabledRoles" : [],
          "disabledTags" : []
      },
      "boss2": {
        "name" : "Rivers",
        "roles" : [
          { name:'Druid', value:"0_ranger_druid" },
          { name:'Quickness', value:"Quickness" },
          { name:'Quickness', value:"Quickness" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Superspeed', value:"0_engineer_scrapper" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
        ],
        "disabledRoles" : [],
        "disabledTags" : []
      },
      "boss3": {
        "name" : "Statues",
        "roles" : [
          { name:'Druid', value:"0_ranger_druid" },
          { name:'Quickness', value:"Quickness" },
          { name:'Quickness', value:"Quickness" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Banners', value:"0_warrior_berserker" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
          { name:'Tank', value:"shield"},
          { name:'Stun', value:"stun1"},
          { name:'Stun', value:"stun2"},
          { name:'Throw', value:"throw1"},
          { name:'Throw', value:"throw2"}
        ],
        "disabledRoles" : [],
        "disabledTags" : []
      },
      "boss4": {
        "name" : "Dhuum",
        "roles" : [
          { name:'Druid', value:"0_ranger_druid" },
          { name:'Quickness', value:"Quickness" },
          { name:'Quickness', value:"Quickness" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Banners', value:"0_warrior_berserker" },
          { name:'Kite', value:"Kite" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
          { name:'Green 1', value:"g1"},
          { name:'Green 2', value:"g2"},
          { name:'Green 3', value:"g3"},
          { name:'Tank', value:"shield"}
        ],
        "disabledRoles" : [],
        "disabledTags" : []
      }
    },
  
    "wing6" : {
      "boss1": {
          "name" : "Conjured Amalgamate",
          "roles" : [
            { name:'Druid', value:"0_ranger_druid" },
            { name:'Quickness', value:"Quickness" },
            { name:'Quickness', value:"Quickness" },
            { name:'Alacrity', value:"Alacrity" },
            { name:'Banners', value:"0_warrior_berserker" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" }
          ],
          "tags" : [
            { name:'Swords', value:"sword1"},
            { name:'Swords', value:"sword2"},
            { name:'Shields', value:"shield1"},
            { name:'Shields', value:"shield2"}
          ],
          "disabledRoles" : [],
          "disabledTags" : []
      },
      "boss2": {
        "name" : "Twin Largos",
        "roles" : [
          { name:'Quickness', value:"Quickness" },
          { name:'Quickness', value:"Quickness" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
          { name:'Tank', value:"tank1"},
          { name:'Tank', value:"tank2"}
        ],
        "disabledRoles" : [],
        "disabledTags" : []
      },
      "boss3": {
        "name" : "Qadim",
        "roles" : [
          { name:'Druid', value:"0_ranger_druid" },
          { name:'Quickness', value:"Quickness" },
          { name:'Chrono', value:"0_mesmer_chronomancer" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Banners', value:"0_warrior_berserker" },
          { name:'Kite', value:"kite" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
          { name:'Mat Tank', value:"matTank"},
          { name:'Tank', value:"shield"},
          { name:'Lamp', value:"lamp"},
          { name:'Lamp', value:"lamp"}
        ],
        "disabledRoles" : [],
        "disabledTags" : []
      },
      "boss4": {
        "name" : null
      }
    },
  
    "wing7" : {
      "boss1": {
          "name" : "Adina",
          "roles" : [
            { name:'Druid', value:"0_ranger_druid" },
            { name:'Quickness', value:"Quickness" },
            { name:'Quickness', value:"Quickness" },
            { name:'Alacrity', value:"Alacrity" },
            { name:'Banners', value:"0_warrior_berserker" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" },
            { name:'DPS', value:"crossed_swords" }
          ],
          "tags" : [
            { name:'Tank', value:"shield"},
            { name:'Bubble', value:"bubble"}
          ],
          "disabledRoles" : [],
          "disabledTags" : []
      },
      "boss2": {
        "name" : "Sabir",
        "roles" : [
          { name:'Quickness', value:"Quickness" },
          { name:'Quickness', value:"Quickness" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Tempest', value:"0_elementalist_tempest" },
          { name:'Tempest', value:"0_elementalist_tempest" },
          { name:'Banners', value:"0_warrior_berserker" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
        ],
        "disabledRoles" : [],
        "disabledTags" : []
      },
      "boss3": {
        "name" : "Qadim the Peerless",
        "roles" : [
          { name:'Druid', value:"0_ranger_druid" },
          { name:'Quickness', value:"Quickness" },
          { name:'Quickness', value:"Quickness" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Alacrity', value:"Alacrity" },
          { name:'Banners', value:"0_warrior_berserker" },
          { name:'Kite', value:"kite" },
          { name:'Kite', value:"kite" },
          { name:'Kite', value:"kite" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
          { name:'Tank', value:"shield"}
        ],
        "disabledRoles" : [],
        "disabledTags" : []
      },
      "boss4": {
        "name" : null
      }
    }
  }

  var reactIconMap = {
      "0_ranger_druid" : "assets/druid.webp",
      "Quickness" : "assets/quickness.webp",
      "Alacrity" : "assets/alacrity.webp",
      "0_warrior_berserker" : "assets/banners.webp",
      "0_necromancer_scourge" : "assets/scourge.webp",
      "crossed_swords" : "assets/crossed_swords.svg",
      "shield" : "assets/shield.svg",
      "kite" : "assets/kite.svg",
      "0_elementalist_tempest" : "assets/tempest.webp",
      "0_mesmer_chronomancer" : "assets/chrono.webp",
      "matTank" : "assets/dragFace.svg",
      "lamp" : "assets/lamp.svg"
  }