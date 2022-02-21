var knownRaiders = []
var knownRaidersDefault = [
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

var afkRaiders = []
var afkRaidersDefault = []

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
          "disabledTags" : [],
          "react" : "1SV3vg"
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
        "disabledTags" : [],
        "react" : "1SV2gorse"
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
          { name:'Cannons', value:"MagBomb"},
          { name:'Cannons', value:"MagBomb"}
        ],
        "disabledRoles" : [],
        "disabledTags" : [],
        "react" : "1SV1sab"
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
            { name:'Shroom', value:"mushroom"},
            { name:'Shroom', value:"mushroom"},
            { name:'Shroom', value:"mushroom"},
            { name:'Shroom', value:"mushroom"}
          ],
          "disabledRoles" : [],
          "disabledTags" : [],
          "react" : "1SP3sloth"
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
          { name:'Mortars', value:"MagBomb"},
          { name:'Saboteurs', value:"spy"}
        ],
        "disabledRoles" : [],
        "disabledTags" : [],
        "react" : "1SP2trio"
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
          { name:'Reflect', value:"mirror"}
        ],
        "disabledRoles" : [],
        "disabledTags" : [],
        "react" : "1SP1matt"
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
            { name:'Backwarg', value:"dog"}
          ],
          "disabledRoles" : [],
          "disabledTags" : [],
          "react" : "1SH3escort"
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
          { name:'Tank', value:"shield"}
        ],
        "disabledRoles" : [],
        "disabledTags" : [],
        "react" : "1SH2kc"
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
        "disabledTags" : [],
        "react" : "european_castle"
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
        "disabledTags" : [],
        "react" : "1SH1xera"
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
          "disabledTags" : [],
          "react" : "1BP4cairn"
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
          { name:'Claim', value:"regional_indicator_c"},
          { name:'Protect', value:"regional_indicator_p"},
          { name:'Dispel', value:"regional_indicator_d"}
        ],
        "disabledRoles" : [],
        "disabledTags" : [],
        "react" : "1BP3mo"
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
        "disabledTags" : [],
        "react" : "1BP2sam"
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
          { name:'Oil Kite', value:"oil"}
        ],
        "disabledRoles" : [],
        "disabledTags" : [],
        "react" : "1BP1deimos"
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
          "disabledTags" : [],
          "react" : "1HC3sh"
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
        "disabledTags" : [],
        "react" : "potable_water"
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
          { name:'Stun', value:"white_circle"},
          { name:'Stun', value:"white_circle"},
          { name:'Throw', value:"comet"},
          { name:'Throw', value:"comet"}
        ],
        "disabledRoles" : [],
        "disabledTags" : [],
        "react" : "1HC2rrstatues"
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
          { name:'Kite', value:"kite" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" },
          { name:'DPS', value:"crossed_swords" }
        ],
        "tags" : [
          { name:'Green 1', value:"one"},
          { name:'Green 2', value:"two"},
          { name:'Green 3', value:"three"},
          { name:'Tank', value:"shield"}
        ],
        "disabledRoles" : [
          { name:'Tank G3', value:"shield"}
        ],
        "disabledTags" : [],
        "react" : "1HC1dhuum"
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
            { name:'Swords', value:"knife"},
            { name:'Swords', value:"knife"},
            { name:'Shields', value:"shield"},
            { name:'Shields', value:"shield"}
          ],
          "disabledRoles" : [],
          "disabledTags" : [],
          "react" : "1MG3ca"
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
          { name:'Tank', value:"shield"},
          { name:'Tank', value:"shield"}
        ],
        "disabledRoles" : [],
        "disabledTags" : [],
        "react" : "1MG2largos"
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
          { name:'Mat Tank', value:"dragon_face"},
          { name:'Tank', value:"shield"},
          { name:'Lamp', value:"lamp"},
          { name:'Lamp', value:"lamp"}
        ],
        "disabledRoles" : [
          { name:'Firebrand', value:"0_guardian_firebrand"}
        ],
        "disabledTags" : [],
        "react" : "1MG1qadim"
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
            { name:'Bubble', value:"bubble_tea"}
          ],
          "disabledRoles" : [],
          "disabledTags" : [],
          "react" : "1KA2adina"
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
        "disabledTags" : [
          { name:'Wisps', value:"cloud_lightning"}
        ],
        "react" : "1KA2sabir"
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
        "disabledTags" : [],
        "react" : "1KA1qadim"
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
      "dragon_face" : "assets/dragFace.svg",
      "lamp" : "assets/lamp.svg",
}