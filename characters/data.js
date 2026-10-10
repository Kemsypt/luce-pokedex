window.CHARACTERS = [
  {
    "id": "barry",
    "name": "Barry",
    "category": "Story",
    "role": "Childhood friend and rival; begins alongside the player, repeatedly tests her team, and partners against Team Galactic.",
    "personality": "Impatient, energetic, boastful and loyal. His loss at Lake Acuity moves him towards responsibility and effort rather than simply winning.",
    "relationships": [
      "the player: childhood friend / rival",
      "Palmer: father and Tower Tycoon",
      "Mum and his mother: friends",
      "Crasher Wake: self-appointed mentor",
      "Jupiter: defeats him at Lake Acuity",
      "Cynthia: meets briefly at Valor Lakefront"
    ],
    "responsibilities": [
      "Chooses the starter strong against the player’s original starter slot",
      "Town Map delivery",
      "Six main-story rival battles",
      "Spear Pillar partner",
      "Fight Area partner and weekend rematches"
    ],
    "linkedChanges": [
      "Barry’s mother and Palmer dialogue",
      "Starter species slots and all 3 branches",
      "Name variables and scripted fines / collision jokes",
      "Crasher Wake apprenticeship",
      "Shared Cynthia / Barry lakefront scene",
      "Partner back sprite; rival front sprite; overworld sprite",
      "League entrance battle and postgame tiers"
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
      "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
      "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
      "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
    ],
    "encounters": [
      {
        "id": "opening-room",
        "title": "Opening visit",
        "location": "the player’s room, Twinleaf Town",
        "phase": "Main story",
        "optional": false,
        "summary": "Watches the Rowan TV programme with the player and proposes getting Pokémon.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "barry-house",
        "title": "Rush to prepare",
        "location": "Barry’s house, Twinleaf Town",
        "phase": "Main story",
        "optional": false,
        "summary": "Crashes into the player outside, then retrieves his Bag and Journal upstairs.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "starter",
        "title": "Starter selection + first battle",
        "location": "Route 201",
        "phase": "Main story",
        "optional": false,
        "summary": "Attempts to cross the grass; Rowan intervenes. Chooses the stronger starter slot and challenges the player. This battle can be lost without blocking progress.",
        "teams": [
          {
            "label": "Player chose Turtwig",
            "pokemon": [
              {
                "species": "Chimchar",
                "level": 5,
                "moves": [
                  "Scratch",
                  "Leer"
                ],
                "ability": "Blaze",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Chimchar",
            "pokemon": [
              {
                "species": "Piplup",
                "level": 5,
                "moves": [
                  "Pound",
                  "Growl"
                ],
                "ability": "Torrent",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Piplup",
            "pokemon": [
              {
                "species": "Turtwig",
                "level": 5,
                "moves": [
                  "Tackle",
                  "Withdraw"
                ],
                "ability": "Overgrow",
                "item": "None"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "lake-trip",
        "title": "Return to the lake",
        "location": "Route 201 → Verity Lakefront → Lake Verity",
        "phase": "Main story",
        "optional": false,
        "summary": "After the Running Shoes, proposes catching the legendary Pokémon. Encounters Cyrus and realises neither has Poké Balls.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "sandgem",
        "title": "Leaving the lab",
        "location": "Sandgem Town",
        "phase": "Main story",
        "optional": false,
        "summary": "Rushes out of Rowan’s laboratory and bumps into the player.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "school",
        "title": "Parcel and Town Map",
        "location": "Trainers’ School, Jubilife City",
        "phase": "Main story",
        "optional": false,
        "summary": "Receives the Parcel from his mother; gives the player the spare Town Map.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "route203",
        "title": "Rival battle 2",
        "location": "Route 203",
        "phase": "Main story",
        "optional": false,
        "summary": "Tests the player’s growing team before Oreburgh.",
        "teams": [
          {
            "label": "Player chose Turtwig",
            "pokemon": [
              {
                "species": "Starly",
                "level": 7,
                "moves": [
                  "Quick Attack",
                  "Growl"
                ],
                "ability": "Keen Eye",
                "item": "None"
              },
              {
                "species": "Chimchar",
                "level": 9,
                "moves": [
                  "Scratch",
                  "Leer"
                ],
                "ability": "Blaze",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Chimchar",
            "pokemon": [
              {
                "species": "Starly",
                "level": 7,
                "moves": [
                  "Quick Attack",
                  "Growl"
                ],
                "ability": "Keen Eye",
                "item": "None"
              },
              {
                "species": "Piplup",
                "level": 9,
                "moves": [
                  "Pound",
                  "Growl"
                ],
                "ability": "Torrent",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Piplup",
            "pokemon": [
              {
                "species": "Starly",
                "level": 7,
                "moves": [
                  "Quick Attack",
                  "Growl"
                ],
                "ability": "Keen Eye",
                "item": "None"
              },
              {
                "species": "Turtwig",
                "level": 9,
                "moves": [
                  "Tackle",
                  "Withdraw"
                ],
                "ability": "Overgrow",
                "item": "None"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "oreburgh-gym",
        "title": "Find Roark",
        "location": "Outside Oreburgh Gym",
        "phase": "Main story",
        "optional": false,
        "summary": "Explains that Roark is at the mine and compares him with his father.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "oreburgh-exit",
        "title": "Next Gym directions",
        "location": "Oreburgh City, near Oreburgh Gate",
        "phase": "Main story",
        "optional": false,
        "summary": "After the Coal Badge, discusses the blocked cycling slope and heads for Eterna.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "eterna-statue",
        "title": "Statue visit",
        "location": "Eterna City",
        "phase": "Main story",
        "optional": false,
        "summary": "Leads the player to the statue, sees Cyrus, and proposes his unrealistic perfect-battle strategy.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "route209",
        "title": "Rival battle 3",
        "location": "Route 209, leaving Hearthome",
        "phase": "Main story",
        "optional": false,
        "summary": "His perfect-battle strategy fails; decides to train properly.",
        "teams": [
          {
            "label": "Player chose Turtwig",
            "pokemon": [
              {
                "species": "Staravia",
                "level": 25,
                "moves": [
                  "Double Team",
                  "Wing Attack",
                  "Quick Attack",
                  "Endeavor"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Buizel",
                "level": 23,
                "moves": [
                  "Water Gun",
                  "Quick Attack",
                  "Growl",
                  "Pursuit"
                ],
                "ability": "Swift Swim",
                "item": "None"
              },
              {
                "species": "Roselia",
                "level": 23,
                "moves": [
                  "Stun Spore",
                  "Mega Drain",
                  "Poison Sting",
                  "Leech Seed"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Monferno",
                "level": 27,
                "moves": [
                  "Mach Punch",
                  "Leer",
                  "Flame Wheel",
                  "Fury Swipes"
                ],
                "ability": "Blaze",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Chimchar",
            "pokemon": [
              {
                "species": "Staravia",
                "level": 25,
                "moves": [
                  "Double Team",
                  "Wing Attack",
                  "Quick Attack",
                  "Endeavor"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Ponyta",
                "level": 23,
                "moves": [
                  "Tackle",
                  "Ember",
                  "Growl",
                  "Tail Whip"
                ],
                "ability": "Run Away",
                "item": "None"
              },
              {
                "species": "Roselia",
                "level": 23,
                "moves": [
                  "Stun Spore",
                  "Mega Drain",
                  "Poison Sting",
                  "Leech Seed"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Prinplup",
                "level": 27,
                "moves": [
                  "Growl",
                  "Peck",
                  "BubbleBeam",
                  "Metal Claw"
                ],
                "ability": "Torrent",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Piplup",
            "pokemon": [
              {
                "species": "Staravia",
                "level": 25,
                "moves": [
                  "Double Team",
                  "Wing Attack",
                  "Quick Attack",
                  "Endeavor"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Buizel",
                "level": 23,
                "moves": [
                  "Water Gun",
                  "Quick Attack",
                  "Growl",
                  "Pursuit"
                ],
                "ability": "Swift Swim",
                "item": "None"
              },
              {
                "species": "Ponyta",
                "level": 23,
                "moves": [
                  "Tackle",
                  "Ember",
                  "Growl",
                  "Tail Whip"
                ],
                "ability": "Run Away",
                "item": "None"
              },
              {
                "species": "Grotle",
                "level": 27,
                "moves": [
                  "Tackle",
                  "Razor Leaf",
                  "Absorb",
                  "Withdraw"
                ],
                "ability": "Overgrow",
                "item": "None"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "solaceon",
        "title": "Seals and ruins",
        "location": "Solaceon Town",
        "phase": "Main story",
        "optional": false,
        "summary": "Shows off Seals, mentions the ruins and Defog, but does not battle.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "pastoria-early",
        "title": "Wake absent",
        "location": "Pastoria City",
        "phase": "Main story",
        "optional": true,
        "summary": "If reached before the Cobble Badge, says Wake is at Veilstone.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Optional"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "pastoria-battle",
        "title": "Rival battle 4",
        "location": "Pastoria City, Gym entrance",
        "phase": "Main story",
        "optional": false,
        "summary": "Tests the player before Wake’s Gym; claims Wake as his mentor.",
        "teams": [
          {
            "label": "Player chose Turtwig",
            "pokemon": [
              {
                "species": "Staravia",
                "level": 34,
                "moves": [
                  "Double Team",
                  "Wing Attack",
                  "Quick Attack",
                  "Endeavor"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Buizel",
                "level": 32,
                "moves": [
                  "Aqua Jet",
                  "Quick Attack",
                  "Growl",
                  "Pursuit"
                ],
                "ability": "Swift Swim",
                "item": "None"
              },
              {
                "species": "Roselia",
                "level": 32,
                "moves": [
                  "Magical Leaf",
                  "Mega Drain",
                  "Poison Sting",
                  "Leech Seed"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Monferno",
                "level": 36,
                "moves": [
                  "Mach Punch",
                  "Leer",
                  "Flame Wheel",
                  "Fury Swipes"
                ],
                "ability": "Blaze",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Chimchar",
            "pokemon": [
              {
                "species": "Staravia",
                "level": 34,
                "moves": [
                  "Double Team",
                  "Wing Attack",
                  "Quick Attack",
                  "Endeavor"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Ponyta",
                "level": 32,
                "moves": [
                  "Stomp",
                  "Ember",
                  "Growl",
                  "Tail Whip"
                ],
                "ability": "Run Away",
                "item": "None"
              },
              {
                "species": "Roselia",
                "level": 32,
                "moves": [
                  "Magical Leaf",
                  "Mega Drain",
                  "Poison Sting",
                  "Leech Seed"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Prinplup",
                "level": 36,
                "moves": [
                  "Growl",
                  "Peck",
                  "BubbleBeam",
                  "Metal Claw"
                ],
                "ability": "Torrent",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Piplup",
            "pokemon": [
              {
                "species": "Staravia",
                "level": 34,
                "moves": [
                  "Double Team",
                  "Wing Attack",
                  "Quick Attack",
                  "Endeavor"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Buizel",
                "level": 32,
                "moves": [
                  "Aqua Jet",
                  "Quick Attack",
                  "Growl",
                  "Pursuit"
                ],
                "ability": "Swift Swim",
                "item": "None"
              },
              {
                "species": "Ponyta",
                "level": 32,
                "moves": [
                  "Stomp",
                  "Ember",
                  "Growl",
                  "Tail Whip"
                ],
                "ability": "Run Away",
                "item": "None"
              },
              {
                "species": "Grotle",
                "level": 36,
                "moves": [
                  "Bite",
                  "Razor Leaf",
                  "Mega Drain",
                  "Withdraw"
                ],
                "ability": "Overgrow",
                "item": "None"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "pastoria-bomb",
        "title": "Great Marsh bomb incident",
        "location": "Pastoria City",
        "phase": "Main story",
        "optional": false,
        "summary": "Warns Wake about Galactic’s bomb and remains behind while the player pursues the grunt. Croagunk board dialogue is part of this event.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "valor-message",
        "title": "Message during Cynthia meeting",
        "location": "Valor Lakefront",
        "phase": "Main story",
        "optional": false,
        "summary": "Reports that the Great Marsh explosion was not serious; briefly mistakes Cynthia for the player’s sister.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "canalave-battle",
        "title": "Rival battle 5",
        "location": "Canalave City bridge",
        "phase": "Main story",
        "optional": false,
        "summary": "Tests the player before Byron and recommends Iron Island.",
        "teams": [
          {
            "label": "Player chose Turtwig",
            "pokemon": [
              {
                "species": "Staraptor",
                "level": 36,
                "moves": [
                  "Aerial Ace",
                  "Take Down",
                  "Quick Attack",
                  "Double Team"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 37,
                "moves": [
                  "Brick Break",
                  "Aerial Ace",
                  "Night Slash",
                  "Horn Attack"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Floatzel",
                "level": 35,
                "moves": [
                  "Aqua Jet",
                  "Pursuit",
                  "Quick Attack",
                  "Swift"
                ],
                "ability": "Swift Swim",
                "item": "None"
              },
              {
                "species": "Roserade",
                "level": 35,
                "moves": [
                  "Giga Drain",
                  "Toxic Spikes",
                  "Leech Seed",
                  "GrassWhistle"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Infernape",
                "level": 38,
                "moves": [
                  "Brick Break",
                  "Flame Wheel",
                  "Mach Punch",
                  "Aerial Ace"
                ],
                "ability": "Blaze",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Chimchar",
            "pokemon": [
              {
                "species": "Staraptor",
                "level": 36,
                "moves": [
                  "Aerial Ace",
                  "Take Down",
                  "Quick Attack",
                  "Double Team"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 37,
                "moves": [
                  "Brick Break",
                  "Aerial Ace",
                  "Night Slash",
                  "Horn Attack"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Rapidash",
                "level": 35,
                "moves": [
                  "Fire Spin",
                  "Take Down",
                  "Stomp",
                  "Tail Whip"
                ],
                "ability": "Run Away",
                "item": "None"
              },
              {
                "species": "Roserade",
                "level": 35,
                "moves": [
                  "Giga Drain",
                  "Toxic Spikes",
                  "Leech Seed",
                  "GrassWhistle"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Empoleon",
                "level": 38,
                "moves": [
                  "BubbleBeam",
                  "Aerial Ace",
                  "Metal Claw",
                  "Fury Attack"
                ],
                "ability": "Torrent",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Piplup",
            "pokemon": [
              {
                "species": "Staraptor",
                "level": 36,
                "moves": [
                  "Aerial Ace",
                  "Take Down",
                  "Quick Attack",
                  "Double Team"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 37,
                "moves": [
                  "Brick Break",
                  "Aerial Ace",
                  "Night Slash",
                  "Horn Attack"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Floatzel",
                "level": 35,
                "moves": [
                  "Aqua Jet",
                  "Pursuit",
                  "Quick Attack",
                  "Swift"
                ],
                "ability": "Swift Swim",
                "item": "None"
              },
              {
                "species": "Rapidash",
                "level": 35,
                "moves": [
                  "Fire Spin",
                  "Take Down",
                  "Stomp",
                  "Tail Whip"
                ],
                "ability": "Run Away",
                "item": "None"
              },
              {
                "species": "Torterra",
                "level": 38,
                "moves": [
                  "Razor Leaf",
                  "Bite",
                  "Mega Drain",
                  "Leech Seed"
                ],
                "ability": "Overgrow",
                "item": "None"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "library",
        "title": "Lake assignment",
        "location": "Canalave Library",
        "phase": "Main story",
        "optional": false,
        "summary": "After Mine Badge and obtaining Strength, brings the player to Rowan. Learns his assignment is Lake Acuity; leaves after the Lake Valor explosion.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "acuity-entrance",
        "title": "Acuity approach",
        "location": "Acuity Lakefront",
        "phase": "Main story",
        "optional": false,
        "summary": "Explains the climb requires Snowpoint’s Badge and runs ahead.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "acuity-defeat",
        "title": "Defeat and resolve",
        "location": "Lake Acuity",
        "phase": "Main story",
        "optional": false,
        "summary": "Found after Jupiter beats him. Uxie has been captured; resolves to become stronger to protect Pokémon.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "spear",
        "title": "Partner against Mars and Jupiter",
        "location": "Spear Pillar",
        "phase": "Main story",
        "optional": false,
        "summary": "Joins the player in the double battle, then heals her team before leaving the climax to her.",
        "teams": [
          {
            "label": "Player chose Turtwig",
            "pokemon": [
              {
                "species": "Munchlax",
                "level": 40,
                "moves": [
                  "Body Slam",
                  "Screech",
                  "Stockpile",
                  "Swallow"
                ],
                "ability": "Pickup",
                "item": "None"
              },
              {
                "species": "Roserade",
                "level": 40,
                "moves": [
                  "Giga Drain",
                  "Ingrain",
                  "GrassWhistle",
                  "Toxic"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 42,
                "moves": [
                  "Close Combat",
                  "Night Slash",
                  "Brick Break",
                  "Aerial Ace"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Floatzel",
                "level": 40,
                "moves": [
                  "Pursuit",
                  "Iron Tail",
                  "Aqua Jet",
                  "Brick Break"
                ],
                "ability": "Swift Swim",
                "item": "None"
              },
              {
                "species": "Staraptor",
                "level": 42,
                "moves": [
                  "Quick Attack",
                  "Close Combat",
                  "Aerial Ace",
                  "Take Down"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Infernape",
                "level": 44,
                "moves": [
                  "Close Combat",
                  "Flame Wheel",
                  "Punishment",
                  "Will-O-Wisp"
                ],
                "ability": "Blaze",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Chimchar",
            "pokemon": [
              {
                "species": "Munchlax",
                "level": 40,
                "moves": [
                  "Body Slam",
                  "Screech",
                  "Stockpile",
                  "Swallow"
                ],
                "ability": "Pickup",
                "item": "None"
              },
              {
                "species": "Rapidash",
                "level": 40,
                "moves": [
                  "Fire Blast",
                  "Will-O-Wisp",
                  "Take Down",
                  "Stomp"
                ],
                "ability": "Run Away",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 42,
                "moves": [
                  "Close Combat",
                  "Night Slash",
                  "Brick Break",
                  "Aerial Ace"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Roserade",
                "level": 40,
                "moves": [
                  "Giga Drain",
                  "Ingrain",
                  "GrassWhistle",
                  "Toxic"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Staraptor",
                "level": 42,
                "moves": [
                  "Quick Attack",
                  "Close Combat",
                  "Aerial Ace",
                  "Take Down"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Empoleon",
                "level": 44,
                "moves": [
                  "Aqua Jet",
                  "Swagger",
                  "Aerial Ace",
                  "Metal Claw"
                ],
                "ability": "Torrent",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Piplup",
            "pokemon": [
              {
                "species": "Munchlax",
                "level": 40,
                "moves": [
                  "Body Slam",
                  "Screech",
                  "Stockpile",
                  "Swallow"
                ],
                "ability": "Pickup",
                "item": "None"
              },
              {
                "species": "Rapidash",
                "level": 40,
                "moves": [
                  "Fire Blast",
                  "Will-O-Wisp",
                  "Take Down",
                  "Stomp"
                ],
                "ability": "Run Away",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 42,
                "moves": [
                  "Close Combat",
                  "Night Slash",
                  "Brick Break",
                  "Aerial Ace"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Floatzel",
                "level": 40,
                "moves": [
                  "Pursuit",
                  "Iron Tail",
                  "Aqua Jet",
                  "Brick Break"
                ],
                "ability": "Swift Swim",
                "item": "None"
              },
              {
                "species": "Staraptor",
                "level": 42,
                "moves": [
                  "Quick Attack",
                  "Close Combat",
                  "Aerial Ace",
                  "Take Down"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Torterra",
                "level": 44,
                "moves": [
                  "Leech Seed",
                  "Bite",
                  "Synthesis",
                  "Giga Drain"
                ],
                "ability": "Overgrow",
                "item": "None"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Partner battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "sunyshore",
        "title": "Eight-Badge encouragement",
        "location": "Sunyshore City",
        "phase": "Main story",
        "optional": false,
        "summary": "After the Beacon Badge, acknowledges the player’s strength and races towards the League.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "league",
        "title": "Rival battle 6",
        "location": "Pokémon League entrance",
        "phase": "Main story",
        "optional": false,
        "summary": "Final main-story test before the Elite Four.",
        "teams": [
          {
            "label": "Player chose Turtwig",
            "pokemon": [
              {
                "species": "Staraptor",
                "level": 48,
                "moves": [
                  "Close Combat",
                  "Aerial Ace",
                  "Steel Wing",
                  "U-turn"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Floatzel",
                "level": 47,
                "moves": [
                  "Aqua Jet",
                  "Crunch",
                  "Ice Fang",
                  "Brick Break"
                ],
                "ability": "Swift Swim",
                "item": "None"
              },
              {
                "species": "Snorlax",
                "level": 49,
                "moves": [
                  "Body Slam",
                  "Crunch",
                  "Earthquake",
                  "Rest"
                ],
                "ability": "Immunity",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 48,
                "moves": [
                  "Aerial Ace",
                  "Close Combat",
                  "Night Slash",
                  "Rock Slide"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Roserade",
                "level": 47,
                "moves": [
                  "Giga Drain",
                  "GrassWhistle",
                  "Shadow Ball",
                  "Poison Jab"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Infernape",
                "level": 51,
                "moves": [
                  "Focus Blast",
                  "Shadow Claw",
                  "Flamethrower",
                  "Aerial Ace"
                ],
                "ability": "Blaze",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Chimchar",
            "pokemon": [
              {
                "species": "Staraptor",
                "level": 48,
                "moves": [
                  "Close Combat",
                  "Aerial Ace",
                  "Steel Wing",
                  "U-turn"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Rapidash",
                "level": 47,
                "moves": [
                  "Fire Blast",
                  "Sunny Day",
                  "Bounce",
                  "Will-O-Wisp"
                ],
                "ability": "Run Away",
                "item": "None"
              },
              {
                "species": "Snorlax",
                "level": 49,
                "moves": [
                  "Body Slam",
                  "Crunch",
                  "Earthquake",
                  "Rest"
                ],
                "ability": "Immunity",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 48,
                "moves": [
                  "Aerial Ace",
                  "Close Combat",
                  "Night Slash",
                  "Rock Slide"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Roserade",
                "level": 47,
                "moves": [
                  "Giga Drain",
                  "GrassWhistle",
                  "Shadow Ball",
                  "Poison Jab"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Empoleon",
                "level": 51,
                "moves": [
                  "Brine",
                  "Metal Claw",
                  "Aerial Ace",
                  "Shadow Claw"
                ],
                "ability": "Torrent",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Piplup",
            "pokemon": [
              {
                "species": "Staraptor",
                "level": 48,
                "moves": [
                  "Close Combat",
                  "Aerial Ace",
                  "Steel Wing",
                  "U-turn"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Rapidash",
                "level": 47,
                "moves": [
                  "Fire Blast",
                  "Sunny Day",
                  "Bounce",
                  "Will-O-Wisp"
                ],
                "ability": "Run Away",
                "item": "None"
              },
              {
                "species": "Floatzel",
                "level": 47,
                "moves": [
                  "Aqua Jet",
                  "Crunch",
                  "Ice Fang",
                  "Brick Break"
                ],
                "ability": "Swift Swim",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 48,
                "moves": [
                  "Aerial Ace",
                  "Close Combat",
                  "Night Slash",
                  "Rock Slide"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Snorlax",
                "level": 49,
                "moves": [
                  "Body Slam",
                  "Crunch",
                  "Earthquake",
                  "Rest"
                ],
                "ability": "Immunity",
                "item": "None"
              },
              {
                "species": "Torterra",
                "level": 51,
                "moves": [
                  "Leaf Storm",
                  "Earthquake",
                  "Crunch",
                  "Synthesis"
                ],
                "ability": "Overgrow",
                "item": "None"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "fight-area",
        "title": "Partner against Flint and Volkner",
        "location": "Fight Area",
        "phase": "Postgame",
        "optional": false,
        "summary": "Teams up with the player, then reunites with his father Palmer.",
        "teams": [
          {
            "label": "Player chose Turtwig",
            "pokemon": [
              {
                "species": "Staraptor",
                "level": 53,
                "moves": [
                  "Close Combat",
                  "Aerial Ace",
                  "Steel Wing",
                  "U-turn"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 53,
                "moves": [
                  "Aerial Ace",
                  "Close Combat",
                  "Night Slash",
                  "Rock Slide"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Snorlax",
                "level": 54,
                "moves": [
                  "Body Slam",
                  "Crunch",
                  "Earthquake",
                  "Rest"
                ],
                "ability": "Immunity",
                "item": "None"
              },
              {
                "species": "Floatzel",
                "level": 52,
                "moves": [
                  "Aqua Jet",
                  "Crunch",
                  "Ice Fang",
                  "Brick Break"
                ],
                "ability": "Swift Swim",
                "item": "None"
              },
              {
                "species": "Roserade",
                "level": 52,
                "moves": [
                  "Giga Drain",
                  "GrassWhistle",
                  "Shadow Ball",
                  "Poison Jab"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Infernape",
                "level": 56,
                "moves": [
                  "Focus Blast",
                  "Shadow Claw",
                  "Flamethrower",
                  "Aerial Ace"
                ],
                "ability": "Blaze",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Chimchar",
            "pokemon": [
              {
                "species": "Staraptor",
                "level": 53,
                "moves": [
                  "Close Combat",
                  "Aerial Ace",
                  "Steel Wing",
                  "U-turn"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 53,
                "moves": [
                  "Aerial Ace",
                  "Close Combat",
                  "Night Slash",
                  "Rock Slide"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Snorlax",
                "level": 54,
                "moves": [
                  "Body Slam",
                  "Crunch",
                  "Earthquake",
                  "Rest"
                ],
                "ability": "Immunity",
                "item": "None"
              },
              {
                "species": "Roserade",
                "level": 52,
                "moves": [
                  "Giga Drain",
                  "GrassWhistle",
                  "Shadow Ball",
                  "Poison Jab"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Rapidash",
                "level": 52,
                "moves": [
                  "Fire Blast",
                  "Sunny Day",
                  "Bounce",
                  "Will-O-Wisp"
                ],
                "ability": "Run Away",
                "item": "None"
              },
              {
                "species": "Empoleon",
                "level": 56,
                "moves": [
                  "Brine",
                  "Metal Claw",
                  "Aerial Ace",
                  "Shadow Claw"
                ],
                "ability": "Torrent",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Piplup",
            "pokemon": [
              {
                "species": "Staraptor",
                "level": 53,
                "moves": [
                  "Close Combat",
                  "Aerial Ace",
                  "Steel Wing",
                  "U-turn"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 53,
                "moves": [
                  "Aerial Ace",
                  "Close Combat",
                  "Night Slash",
                  "Rock Slide"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Snorlax",
                "level": 54,
                "moves": [
                  "Body Slam",
                  "Crunch",
                  "Earthquake",
                  "Rest"
                ],
                "ability": "Immunity",
                "item": "None"
              },
              {
                "species": "Rapidash",
                "level": 52,
                "moves": [
                  "Fire Blast",
                  "Sunny Day",
                  "Bounce",
                  "Will-O-Wisp"
                ],
                "ability": "Run Away",
                "item": "None"
              },
              {
                "species": "Floatzel",
                "level": 52,
                "moves": [
                  "Aqua Jet",
                  "Crunch",
                  "Ice Fang",
                  "Brick Break"
                ],
                "ability": "Swift Swim",
                "item": "None"
              },
              {
                "species": "Torterra",
                "level": 56,
                "moves": [
                  "Leaf Storm",
                  "Earthquake",
                  "Crunch",
                  "Synthesis"
                ],
                "ability": "Overgrow",
                "item": "None"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Partner battle",
          "Progression",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "route227",
        "title": "Wake and Battleground discussion",
        "location": "Route 227",
        "phase": "Postgame",
        "optional": false,
        "summary": "Requests Wake’s help getting into the Survival Area club before heading to the Frontier.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "villa-intro",
        "title": "New villa announcement",
        "location": "Resort Area villa",
        "phase": "Postgame",
        "optional": true,
        "summary": "When the player first receives the villa, volunteers to tell everyone.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "survival",
        "title": "Outside the Battleground",
        "location": "Survival Area",
        "phase": "Postgame",
        "optional": false,
        "summary": "After Stark Mountain, talks about loving Pokémon and becoming the greatest Trainer.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "weekend-base",
        "title": "Weekend rematch — base tier",
        "location": "Survival Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Saturday/Sunday battles after the Stark Mountain quest. Starter reaches Lv.65.",
        "teams": [
          {
            "label": "Player chose Turtwig",
            "pokemon": [
              {
                "species": "Staraptor",
                "level": 61,
                "moves": [
                  "Aerial Ace",
                  "Steel Wing",
                  "U-turn",
                  "Close Combat"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Floatzel",
                "level": 59,
                "moves": [
                  "Aqua Jet",
                  "Crunch",
                  "Ice Fang",
                  "Brick Break"
                ],
                "ability": "Swift Swim",
                "item": "None"
              },
              {
                "species": "Roserade",
                "level": 59,
                "moves": [
                  "Giga Drain",
                  "GrassWhistle",
                  "Shadow Ball",
                  "Poison Jab"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 61,
                "moves": [
                  "Megahorn",
                  "Rock Slide",
                  "Night Slash",
                  "Close Combat"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Snorlax",
                "level": 63,
                "moves": [
                  "Body Slam",
                  "Rest",
                  "Crunch",
                  "Earthquake"
                ],
                "ability": "Immunity",
                "item": "None"
              },
              {
                "species": "Infernape",
                "level": 65,
                "moves": [
                  "Flamethrower",
                  "Aerial Ace",
                  "Shadow Claw",
                  "Focus Blast"
                ],
                "ability": "Blaze",
                "item": "Sitrus Berry"
              }
            ]
          },
          {
            "label": "Player chose Chimchar",
            "pokemon": [
              {
                "species": "Staraptor",
                "level": 61,
                "moves": [
                  "Aerial Ace",
                  "Steel Wing",
                  "U-turn",
                  "Close Combat"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Roserade",
                "level": 59,
                "moves": [
                  "Giga Drain",
                  "GrassWhistle",
                  "Shadow Ball",
                  "Poison Jab"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Rapidash",
                "level": 59,
                "moves": [
                  "Fire Blast",
                  "Sunny Day",
                  "Bounce",
                  "Will-O-Wisp"
                ],
                "ability": "Run Away",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 61,
                "moves": [
                  "Megahorn",
                  "Rock Slide",
                  "Night Slash",
                  "Close Combat"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Snorlax",
                "level": 63,
                "moves": [
                  "Body Slam",
                  "Rest",
                  "Crunch",
                  "Earthquake"
                ],
                "ability": "Immunity",
                "item": "None"
              },
              {
                "species": "Empoleon",
                "level": 65,
                "moves": [
                  "Hydro Pump",
                  "Drill Peck",
                  "Shadow Claw",
                  "Metal Claw"
                ],
                "ability": "Torrent",
                "item": "Sitrus Berry"
              }
            ]
          },
          {
            "label": "Player chose Piplup",
            "pokemon": [
              {
                "species": "Staraptor",
                "level": 61,
                "moves": [
                  "Aerial Ace",
                  "Steel Wing",
                  "U-turn",
                  "Close Combat"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Rapidash",
                "level": 59,
                "moves": [
                  "Fire Blast",
                  "Sunny Day",
                  "Bounce",
                  "Will-O-Wisp"
                ],
                "ability": "Run Away",
                "item": "None"
              },
              {
                "species": "Floatzel",
                "level": 59,
                "moves": [
                  "Aqua Jet",
                  "Crunch",
                  "Ice Fang",
                  "Brick Break"
                ],
                "ability": "Swift Swim",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 61,
                "moves": [
                  "Megahorn",
                  "Rock Slide",
                  "Night Slash",
                  "Close Combat"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Snorlax",
                "level": 63,
                "moves": [
                  "Body Slam",
                  "Rest",
                  "Crunch",
                  "Earthquake"
                ],
                "ability": "Immunity",
                "item": "None"
              },
              {
                "species": "Torterra",
                "level": 65,
                "moves": [
                  "Leaf Storm",
                  "Leech Seed",
                  "Crunch",
                  "Earthquake"
                ],
                "ability": "Overgrow",
                "item": "Sitrus Berry"
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "weekend-high",
        "title": "Weekend rematch — after 20 Hall of Fame entries",
        "location": "Survival Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Uses the high tier after 20 Hall of Fame entries; starter reaches Lv.85. This is the actual next usable tier in unmodified Platinum.",
        "teams": [
          {
            "label": "Player chose Turtwig",
            "pokemon": [
              {
                "species": "Staraptor",
                "level": 81,
                "moves": [
                  "Brave Bird",
                  "Quick Attack",
                  "U-turn",
                  "Close Combat"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Floatzel",
                "level": 79,
                "moves": [
                  "Aqua Jet",
                  "Crunch",
                  "Ice Fang",
                  "Brick Break"
                ],
                "ability": "Swift Swim",
                "item": "None"
              },
              {
                "species": "Roserade",
                "level": 79,
                "moves": [
                  "Giga Drain",
                  "GrassWhistle",
                  "Shadow Ball",
                  "Sludge Bomb"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 81,
                "moves": [
                  "Megahorn",
                  "Stone Edge",
                  "Night Slash",
                  "Close Combat"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Snorlax",
                "level": 83,
                "moves": [
                  "Giga Impact",
                  "Zen Headbutt",
                  "Crunch",
                  "Earthquake"
                ],
                "ability": "Immunity",
                "item": "None"
              },
              {
                "species": "Infernape",
                "level": 85,
                "moves": [
                  "Flare Blitz",
                  "Aerial Ace",
                  "Shadow Claw",
                  "Focus Blast"
                ],
                "ability": "Blaze",
                "item": "Sitrus Berry"
              }
            ]
          },
          {
            "label": "Player chose Chimchar",
            "pokemon": [
              {
                "species": "Staraptor",
                "level": 81,
                "moves": [
                  "Brave Bird",
                  "Quick Attack",
                  "U-turn",
                  "Close Combat"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Roserade",
                "level": 79,
                "moves": [
                  "Giga Drain",
                  "GrassWhistle",
                  "Shadow Ball",
                  "Sludge Bomb"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Rapidash",
                "level": 79,
                "moves": [
                  "Fire Blast",
                  "Sunny Day",
                  "Megahorn",
                  "Will-O-Wisp"
                ],
                "ability": "Run Away",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 81,
                "moves": [
                  "Megahorn",
                  "Stone Edge",
                  "Night Slash",
                  "Close Combat"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Snorlax",
                "level": 83,
                "moves": [
                  "Giga Impact",
                  "Zen Headbutt",
                  "Crunch",
                  "Earthquake"
                ],
                "ability": "Immunity",
                "item": "None"
              },
              {
                "species": "Empoleon",
                "level": 85,
                "moves": [
                  "Hydro Pump",
                  "Drill Peck",
                  "Ice Beam",
                  "Metal Claw"
                ],
                "ability": "Torrent",
                "item": "Sitrus Berry"
              }
            ]
          },
          {
            "label": "Player chose Piplup",
            "pokemon": [
              {
                "species": "Staraptor",
                "level": 81,
                "moves": [
                  "Brave Bird",
                  "Quick Attack",
                  "U-turn",
                  "Close Combat"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Rapidash",
                "level": 79,
                "moves": [
                  "Fire Blast",
                  "Sunny Day",
                  "Megahorn",
                  "Will-O-Wisp"
                ],
                "ability": "Run Away",
                "item": "None"
              },
              {
                "species": "Floatzel",
                "level": 79,
                "moves": [
                  "Aqua Jet",
                  "Crunch",
                  "Ice Fang",
                  "Brick Break"
                ],
                "ability": "Swift Swim",
                "item": "None"
              },
              {
                "species": "Heracross",
                "level": 81,
                "moves": [
                  "Megahorn",
                  "Stone Edge",
                  "Night Slash",
                  "Close Combat"
                ],
                "ability": "Swarm",
                "item": "None"
              },
              {
                "species": "Snorlax",
                "level": 83,
                "moves": [
                  "Giga Impact",
                  "Zen Headbutt",
                  "Crunch",
                  "Earthquake"
                ],
                "ability": "Immunity",
                "item": "None"
              },
              {
                "species": "Torterra",
                "level": 85,
                "moves": [
                  "Leaf Storm",
                  "Stone Edge",
                  "Crunch",
                  "Earthquake"
                ],
                "ability": "Overgrow",
                "item": "Sitrus Berry"
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      },
      {
        "id": "villa",
        "title": "Villa guest",
        "location": "Resort Area villa",
        "phase": "Postgame",
        "optional": true,
        "summary": "Optional rotating visitor; talks about the Frontier, his father and the journey.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)/Platinum",
          "https://bulbapedia.bulbagarden.net/wiki/Talk:Barry_(game)/Platinum"
        ]
      }
    ],
    "sourceNotes": "Platinum only. Timeline rows are documented story checkpoints, with continuous scenes grouped. Optional visits and repeatable interactions are listed separately; this is a reference inventory, not an exhaustive event count. No team shown means no scripted Pokémon battle at that checkpoint. A Lv.75 starter intermediate tier exists in trainer data but is unused by the normal rematch script. It is excluded from encounter counts; the playable weekend tiers are Lv.65 and Lv.85 after 20 Hall of Fame entries.",
    "images": [
      {
        "label": "Portrait (Platinum)",
        "path": "barry-portrait.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/c/cb/Platinum_Barry.png/300px-Platinum_Barry.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)"
      },
      {
        "label": "Battle sprite (Platinum)",
        "path": "barry-1.png",
        "url": "https://archives.bulbagarden.net/media/upload/d/d5/Spr_Pt_Barry.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)"
      },
      {
        "label": "Overworld sprite",
        "path": "barry-2.png",
        "url": "https://archives.bulbagarden.net/media/upload/9/91/Barry_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)"
      },
      {
        "label": "Partner back sprite (Platinum)",
        "path": "barry-3.png",
        "url": "https://archives.bulbagarden.net/media/upload/2/21/Pt_Barry_Back.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Barry_(game)"
      }
    ],
    "image": "barry-portrait.png",
    "unusedTrainerTeams": [
      {
        "label": "Player chose Turtwig",
        "pokemon": [
          {
            "species": "Staraptor",
            "level": 71,
            "moves": [
              "Aerial Ace",
              "Quick Attack",
              "U-turn",
              "Close Combat"
            ],
            "ability": "Intimidate",
            "item": "None"
          },
          {
            "species": "Floatzel",
            "level": 69,
            "moves": [
              "Aqua Jet",
              "Crunch",
              "Ice Fang",
              "Brick Break"
            ],
            "ability": "Swift Swim",
            "item": "None"
          },
          {
            "species": "Roserade",
            "level": 69,
            "moves": [
              "Giga Drain",
              "GrassWhistle",
              "Shadow Ball",
              "Sludge Bomb"
            ],
            "ability": "Natural Cure",
            "item": "None"
          },
          {
            "species": "Heracross",
            "level": 71,
            "moves": [
              "Megahorn",
              "Rock Slide",
              "Night Slash",
              "Close Combat"
            ],
            "ability": "Swarm",
            "item": "None"
          },
          {
            "species": "Snorlax",
            "level": 73,
            "moves": [
              "Body Slam",
              "Zen Headbutt",
              "Crunch",
              "Earthquake"
            ],
            "ability": "Immunity",
            "item": "None"
          },
          {
            "species": "Infernape",
            "level": 75,
            "moves": [
              "Flare Blitz",
              "Aerial Ace",
              "Shadow Claw",
              "Focus Blast"
            ],
            "ability": "Blaze",
            "item": "Sitrus Berry"
          }
        ]
      },
      {
        "label": "Player chose Chimchar",
        "pokemon": [
          {
            "species": "Staraptor",
            "level": 71,
            "moves": [
              "Aerial Ace",
              "Quick Attack",
              "U-turn",
              "Close Combat"
            ],
            "ability": "Intimidate",
            "item": "None"
          },
          {
            "species": "Roserade",
            "level": 69,
            "moves": [
              "Giga Drain",
              "GrassWhistle",
              "Shadow Ball",
              "Sludge Bomb"
            ],
            "ability": "Natural Cure",
            "item": "None"
          },
          {
            "species": "Rapidash",
            "level": 69,
            "moves": [
              "Fire Blast",
              "Sunny Day",
              "Megahorn",
              "Will-O-Wisp"
            ],
            "ability": "Run Away",
            "item": "None"
          },
          {
            "species": "Heracross",
            "level": 71,
            "moves": [
              "Megahorn",
              "Rock Slide",
              "Night Slash",
              "Close Combat"
            ],
            "ability": "Swarm",
            "item": "None"
          },
          {
            "species": "Snorlax",
            "level": 73,
            "moves": [
              "Body Slam",
              "Zen Headbutt",
              "Crunch",
              "Earthquake"
            ],
            "ability": "Immunity",
            "item": "None"
          },
          {
            "species": "Empoleon",
            "level": 75,
            "moves": [
              "Hydro Pump",
              "Drill Peck",
              "Ice Beam",
              "Metal Claw"
            ],
            "ability": "Torrent",
            "item": "Sitrus Berry"
          }
        ]
      },
      {
        "label": "Player chose Piplup",
        "pokemon": [
          {
            "species": "Staraptor",
            "level": 71,
            "moves": [
              "Aerial Ace",
              "Quick Attack",
              "U-turn",
              "Close Combat"
            ],
            "ability": "Intimidate",
            "item": "None"
          },
          {
            "species": "Rapidash",
            "level": 69,
            "moves": [
              "Fire Blast",
              "Sunny Day",
              "Megahorn",
              "Will-O-Wisp"
            ],
            "ability": "Run Away",
            "item": "None"
          },
          {
            "species": "Floatzel",
            "level": 69,
            "moves": [
              "Aqua Jet",
              "Crunch",
              "Ice Fang",
              "Brick Break"
            ],
            "ability": "Swift Swim",
            "item": "None"
          },
          {
            "species": "Heracross",
            "level": 71,
            "moves": [
              "Megahorn",
              "Rock Slide",
              "Night Slash",
              "Close Combat"
            ],
            "ability": "Swarm",
            "item": "None"
          },
          {
            "species": "Snorlax",
            "level": 73,
            "moves": [
              "Body Slam",
              "Zen Headbutt",
              "Crunch",
              "Earthquake"
            ],
            "ability": "Immunity",
            "item": "None"
          },
          {
            "species": "Torterra",
            "level": 75,
            "moves": [
              "Leaf Storm",
              "Stone Edge",
              "Crunch",
              "Earthquake"
            ],
            "ability": "Overgrow",
            "item": "Sitrus Berry"
          }
        ]
      }
    ]
  },
  {
    "id": "cynthia",
    "name": "Cynthia",
    "category": "Champion",
    "role": "Sinnoh Champion and mythology researcher; guides the player through the central legendary crisis and becomes the final League opponent.",
    "personality": "Calm, curious, generous and polite; deeply interested in myths and the bond between Pokémon and people. Confident and demanding in battle.",
    "relationships": [
      "Rowan: former Pokédex mentor",
      "Grandmother: elder in Celestic Town",
      "the player: developing Trainer she helps",
      "Barry: brief Valor Lakefront conversation",
      "Cyrus: rejects his attempt to erase spirit"
    ],
    "responsibilities": [
      "HM01 Cut",
      "Togepi Egg",
      "SecretPotion clears Route 210",
      "Old Charm delivery",
      "Distortion World guidance and healing",
      "Champion and Hall of Fame"
    ],
    "linkedChanges": [
      "Champion era assignment remains undecided",
      "Grandmother and family references",
      "Togepi Egg species",
      "SecretPotion / Psyduck / Old Charm dialogue",
      "Distortion World speeches",
      "Champion front sprite, VS portrait and overworld",
      "League rematch after Stark Mountain",
      "Piano-triggered villa visit"
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Cynthia",
      "https://bulbapedia.bulbagarden.net/wiki/Cynthia/Quotes"
    ],
    "encounters": [
      {
        "id": "eterna",
        "title": "Introduction and Cut",
        "location": "Eterna City",
        "phase": "Main story",
        "optional": false,
        "summary": "Introduces her research and gives HM01 Cut.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia",
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia/Quotes"
        ]
      },
      {
        "id": "egg",
        "title": "Togepi Egg",
        "location": "Eterna City cycle shop",
        "phase": "Main story",
        "optional": false,
        "summary": "After Jupiter’s defeat, offers a Togepi Egg; party-space checks affect this scene.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Gift Pokémon"
        ],
        "giftPokemon": [
          "Togepi"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia",
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia/Quotes"
        ]
      },
      {
        "id": "valor",
        "title": "SecretPotion",
        "location": "Valor Lakefront",
        "phase": "Main story",
        "optional": false,
        "summary": "After chasing the Galactic grunt, supplies Psyduck medicine. Barry interrupts this conversation.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia",
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia/Quotes"
        ]
      },
      {
        "id": "route210",
        "title": "Old Charm",
        "location": "Route 210",
        "phase": "Main story",
        "optional": false,
        "summary": "After curing the Psyduck, asks the player to deliver an Old Charm to her grandmother.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia",
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia/Quotes"
        ]
      },
      {
        "id": "celestic",
        "title": "After the ruins incident",
        "location": "Celestic Town",
        "phase": "Main story",
        "optional": false,
        "summary": "Acknowledges Galactic’s danger and recommends Canalave Library.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia",
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia/Quotes"
        ]
      },
      {
        "id": "spear",
        "title": "Giratina revelation",
        "location": "Spear Pillar",
        "phase": "Main story",
        "optional": false,
        "summary": "Arrives after Giratina takes Cyrus; explains the danger and enters the portal with the player.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia",
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia/Quotes"
        ]
      },
      {
        "id": "distortion",
        "title": "Distortion World companion",
        "location": "Distortion World: entrance through Giratina chamber",
        "phase": "Main story",
        "optional": false,
        "summary": "Appears at several separated platforms. Explains the world, splits up to find the way, comments on the lake-guardian boulder puzzle, confronts Cyrus, heals the player’s party after his defeat and encourages the Giratina battle. Grouped as one continuous dungeon event.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia",
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia/Quotes"
        ]
      },
      {
        "id": "sendoff",
        "title": "Return and thanks",
        "location": "Sendoff Spring",
        "phase": "Main story",
        "optional": false,
        "summary": "After Giratina, thanks the player and asks her to visit Rowan. Her follow-up line changes after visiting him.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia",
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia/Quotes"
        ]
      },
      {
        "id": "league",
        "title": "Champion battle — before Stark Mountain",
        "location": "Pokémon League",
        "phase": "Main story",
        "optional": false,
        "summary": "Battle after Aaron, Bertha, Flint and Lucian. The same initial team is used for League repeats until Stark Mountain is completed.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Spiritomb",
                "level": 58,
                "moves": [
                  "Dark Pulse",
                  "Psychic",
                  "Silver Wind",
                  "Shadow Ball"
                ],
                "ability": "Pressure",
                "item": "None"
              },
              {
                "species": "Roserade",
                "level": 58,
                "moves": [
                  "Energy Ball",
                  "Sludge Bomb",
                  "Toxic",
                  "Extrasensory"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Togekiss",
                "level": 60,
                "moves": [
                  "Air Slash",
                  "Aura Sphere",
                  "Water Pulse",
                  "Shock Wave"
                ],
                "ability": "Hustle",
                "item": "None"
              },
              {
                "species": "Lucario",
                "level": 60,
                "moves": [
                  "Aura Sphere",
                  "ExtremeSpeed",
                  "Shadow Ball",
                  "Stone Edge"
                ],
                "ability": "Steadfast",
                "item": "None"
              },
              {
                "species": "Milotic",
                "level": 58,
                "moves": [
                  "Surf",
                  "Ice Beam",
                  "Mirror Coat",
                  "Dragon Pulse"
                ],
                "ability": "Marvel Scale",
                "item": "None"
              },
              {
                "species": "Garchomp",
                "level": 62,
                "moves": [
                  "Dragon Rush",
                  "Earthquake",
                  "Flamethrower",
                  "Giga Impact"
                ],
                "ability": "Sand Veil",
                "item": "Sitrus Berry"
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Progression",
          "Repeatable"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia",
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia/Quotes"
        ]
      },
      {
        "id": "hall",
        "title": "Hall of Fame",
        "location": "Pokémon League",
        "phase": "Main story",
        "optional": false,
        "summary": "Escorts the player into the Hall of Fame and records her victory with Rowan.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Progression",
          "Repeatable"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia",
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia/Quotes"
        ]
      },
      {
        "id": "snowpoint",
        "title": "Encouragement at the port",
        "location": "Snowpoint City",
        "phase": "Postgame",
        "optional": false,
        "summary": "After the first Hall of Fame, speaks when approaching the ship to the Battle Zone.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia",
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia/Quotes"
        ]
      },
      {
        "id": "ruins",
        "title": "Mythology interpretation",
        "location": "Celestic Ruins",
        "phase": "Postgame",
        "optional": true,
        "summary": "After the Hall of Fame, offers an optional interpretation of the mural and Original One.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia",
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia/Quotes"
        ]
      },
      {
        "id": "league-rematch",
        "title": "Champion rematch — after Stark Mountain",
        "location": "Pokémon League",
        "phase": "Postgame",
        "optional": true,
        "summary": "Stronger League team after resolving Stark Mountain.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Spiritomb",
                "level": 74,
                "moves": [
                  "Dark Pulse",
                  "Psychic",
                  "Silver Wind",
                  "Ominous Wind"
                ],
                "ability": "Pressure",
                "item": "None"
              },
              {
                "species": "Roserade",
                "level": 74,
                "moves": [
                  "Energy Ball",
                  "Sludge Bomb",
                  "Shadow Ball",
                  "Extrasensory"
                ],
                "ability": "Natural Cure",
                "item": "None"
              },
              {
                "species": "Togekiss",
                "level": 76,
                "moves": [
                  "Air Slash",
                  "Aura Sphere",
                  "Water Pulse",
                  "Psychic"
                ],
                "ability": "Hustle",
                "item": "None"
              },
              {
                "species": "Lucario",
                "level": 76,
                "moves": [
                  "Aura Sphere",
                  "Dragon Pulse",
                  "Psychic",
                  "Earthquake"
                ],
                "ability": "Steadfast",
                "item": "None"
              },
              {
                "species": "Milotic",
                "level": 74,
                "moves": [
                  "Surf",
                  "Ice Beam",
                  "Mirror Coat",
                  "Aqua Ring"
                ],
                "ability": "Marvel Scale",
                "item": "None"
              },
              {
                "species": "Garchomp",
                "level": 78,
                "moves": [
                  "Dragon Rush",
                  "Earthquake",
                  "Brick Break",
                  "Giga Impact"
                ],
                "ability": "Sand Veil",
                "item": "Sitrus Berry"
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia",
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia/Quotes"
        ]
      },
      {
        "id": "villa",
        "title": "Villa guest — piano",
        "location": "Resort Area villa",
        "phase": "Postgame",
        "optional": true,
        "summary": "Can visit after the piano is purchased and discusses music and research.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia",
          "https://bulbapedia.bulbagarden.net/wiki/Cynthia/Quotes"
        ]
      }
    ],
    "sourceNotes": "Platinum only. Timeline rows are documented story checkpoints, with continuous scenes grouped. Optional visits and repeatable interactions are listed separately; this is a reference inventory, not an exhaustive event count. No team shown means no scripted Pokémon battle at that checkpoint.",
    "images": [
      {
        "label": "Portrait (Diamond/Pearl era)",
        "path": "cynthia-portrait.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/3/38/Diamond_Pearl_Cynthia.png/300px-Diamond_Pearl_Cynthia.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Cynthia"
      },
      {
        "label": "Battle sprite (Platinum)",
        "path": "cynthia-1.png",
        "url": "https://archives.bulbagarden.net/media/upload/d/d2/Spr_Pt_Cynthia.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Cynthia"
      },
      {
        "label": "Overworld sprite (Generation IV)",
        "path": "cynthia-2.png",
        "url": "https://archives.bulbagarden.net/media/upload/e/e3/Cynthia_IV_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Cynthia"
      }
    ],
    "image": "cynthia-portrait.png"
  },
  {
    "id": "cyrus",
    "name": "Cyrus",
    "category": "Galactic",
    "role": "Leader of Team Galactic; tries to replace the universe with a world free of spirit, using the lake guardians, Dialga and Palkia.",
    "personality": "Cold, intense and controlling. Distrusts emotions; publicly promises his followers a new world while privately planning it for himself.",
    "relationships": [
      "Mars, Jupiter, Saturn, Charon: commanders",
      "the player: opposes his plan",
      "Cynthia: challenges his philosophy",
      "Looker: investigates Galactic",
      "Grandfather on Route 228: backstory"
    ],
    "responsibilities": [
      "Galactic central conflict",
      "Master Ball after HQ battle",
      "Red Chains and legendary summoning",
      "Distortion World final villain battle"
    ],
    "linkedChanges": [
      "All Galactic terminology and subordinate references",
      "Public HQ speech versus private goal",
      "Celestic mural dialogue",
      "Master Ball reward",
      "Red Chain / legendary species",
      "Route 228 grandfather backstory",
      "Three trainer parties and VS portrait"
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Cyrus"
    ],
    "encounters": [
      {
        "id": "verity",
        "title": "First sighting",
        "location": "Lake Verity",
        "phase": "Main story",
        "optional": false,
        "summary": "Leaves the lake early in the journey; no battle.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cyrus"
        ]
      },
      {
        "id": "eterna",
        "title": "Statue investigation",
        "location": "Eterna City statue",
        "phase": "Main story",
        "optional": false,
        "summary": "Discusses the mythological statue while Barry brings the player there.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cyrus"
        ]
      },
      {
        "id": "coronet",
        "title": "Mt. Coronet crossing",
        "location": "Mt. Coronet, Route 207 → 208 passage",
        "phase": "Main story",
        "optional": false,
        "summary": "Speaks about Sinnoh’s origin and the human spirit; no battle.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cyrus"
        ]
      },
      {
        "id": "celestic",
        "title": "Ruins battle",
        "location": "Celestic Ruins",
        "phase": "Main story",
        "optional": false,
        "summary": "Threatens the ruins and reveals his leadership of Galactic.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Sneasel",
                "level": 34,
                "moves": [
                  "Screech",
                  "Ice Punch",
                  "Slash",
                  "Quick Attack"
                ],
                "ability": "Inner Focus",
                "item": "None"
              },
              {
                "species": "Golbat",
                "level": 34,
                "moves": [
                  "Air Cutter",
                  "Poison Fang",
                  "Confuse Ray",
                  "Bite"
                ],
                "ability": "Inner Focus",
                "item": "None"
              },
              {
                "species": "Murkrow",
                "level": 36,
                "moves": [
                  "Night Shade",
                  "Faint Attack",
                  "Drill Peck",
                  "Astonish"
                ],
                "ability": "Insomnia",
                "item": "Sitrus Berry"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cyrus"
        ]
      },
      {
        "id": "speech",
        "title": "Speech to Team Galactic",
        "location": "Team Galactic HQ meeting room",
        "phase": "Main story",
        "optional": false,
        "summary": "the player and Looker witness the speech promising a new world.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cyrus"
        ]
      },
      {
        "id": "hq",
        "title": "Private confrontation",
        "location": "Team Galactic HQ office",
        "phase": "Main story",
        "optional": false,
        "summary": "Reveals his selfish goal, battles the player, then gives the Master Ball and allows her to release the lake guardians.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Sneasel",
                "level": 44,
                "moves": [
                  "Screech",
                  "Ice Punch",
                  "Slash",
                  "Quick Attack"
                ],
                "ability": "Inner Focus",
                "item": "None"
              },
              {
                "species": "Crobat",
                "level": 44,
                "moves": [
                  "Air Cutter",
                  "Poison Fang",
                  "Supersonic",
                  "Bite"
                ],
                "ability": "Inner Focus",
                "item": "None"
              },
              {
                "species": "Honchkrow",
                "level": 46,
                "moves": [
                  "Night Shade",
                  "Faint Attack",
                  "Drill Peck",
                  "Astonish"
                ],
                "ability": "Insomnia",
                "item": "Sitrus Berry"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cyrus"
        ]
      },
      {
        "id": "spear",
        "title": "Two Red Chains",
        "location": "Spear Pillar",
        "phase": "Main story",
        "optional": false,
        "summary": "Summons both Dialga and Palkia. Giratina interrupts and takes him into the Distortion World.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cyrus"
        ]
      },
      {
        "id": "distortion",
        "title": "Distortion World confrontation",
        "location": "Distortion World",
        "phase": "Main story",
        "optional": false,
        "summary": "Appears during the descent, then fights the final battle. After Giratina is resolved, refuses Cynthia’s reasoning and stays behind. No postgame rematch.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Houndoom",
                "level": 45,
                "moves": [
                  "Flamethrower",
                  "Dark Pulse",
                  "Will-O-Wisp",
                  "Thunder Fang"
                ],
                "ability": "Early Bird",
                "item": "None"
              },
              {
                "species": "Honchkrow",
                "level": 47,
                "moves": [
                  "Drill Peck",
                  "Night Slash",
                  "Heat Wave",
                  "Psychic"
                ],
                "ability": "Insomnia",
                "item": "None"
              },
              {
                "species": "Crobat",
                "level": 46,
                "moves": [
                  "Cross Poison",
                  "Air Slash",
                  "Toxic",
                  "Confuse Ray"
                ],
                "ability": "Inner Focus",
                "item": "None"
              },
              {
                "species": "Gyarados",
                "level": 46,
                "moves": [
                  "Waterfall",
                  "Ice Fang",
                  "Earthquake",
                  "Giga Impact"
                ],
                "ability": "Intimidate",
                "item": "None"
              },
              {
                "species": "Weavile",
                "level": 48,
                "moves": [
                  "Night Slash",
                  "Ice Punch",
                  "X-Scissor",
                  "Fake Out"
                ],
                "ability": "Pressure",
                "item": "Sitrus Berry"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Cyrus"
        ]
      }
    ],
    "sourceNotes": "Platinum only. Timeline rows are documented story checkpoints, with continuous scenes grouped. Optional visits and repeatable interactions are listed separately; this is a reference inventory, not an exhaustive event count. No team shown means no scripted Pokémon battle at that checkpoint.",
    "images": [
      {
        "label": "Portrait (Diamond/Pearl era)",
        "path": "cyrus-portrait.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/8/8a/Diamond_Pearl_Cyrus.png/300px-Diamond_Pearl_Cyrus.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Cyrus"
      },
      {
        "label": "Battle sprite (Platinum)",
        "path": "cyrus-1.png",
        "url": "https://archives.bulbagarden.net/media/upload/9/97/Spr_Pt_Cyrus.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Cyrus"
      },
      {
        "label": "Overworld sprite",
        "path": "cyrus-2.png",
        "url": "https://archives.bulbagarden.net/media/upload/5/53/Cyrus_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Cyrus"
      }
    ],
    "image": "cyrus-portrait.png"
  },
  {
    "id": "looker",
    "name": "Looker",
    "category": "Story",
    "role": "International Police investigator pursuing Team Galactic; assists infiltrations and resolves Charon’s postgame plot.",
    "personality": "Theatrical, earnest and eccentric; uses disguises and unusual phrasing but takes crime seriously.",
    "relationships": [
      "the player: informant and trusted ally",
      "Rowan / assistant: meets during early journey",
      "Cyrus: investigation target",
      "Charon: arrest target",
      "Buck: ally at Stark Mountain"
    ],
    "responsibilities": [
      "Vs. Recorder",
      "Warehouse access and HM02 Fly discovery",
      "Storage Key access to HQ",
      "Black Flute",
      "Charon arrest; Magma Stone recovery"
    ],
    "linkedChanges": [
      "International Police dialogue and disguise sprites",
      "Grunt disguise shared graphic",
      "Boulder-disguise event",
      "Fly / Storage Key / Black Flute",
      "Croagunk used in arrest (no battle team)",
      "European Game Corner dialogue differs"
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Looker",
      "https://bulbapedia.bulbagarden.net/wiki/Looker/Quotes"
    ],
    "encounters": [
      {
        "id": "jubilife",
        "title": "Introduction and Vs. Recorder",
        "location": "Jubilife City",
        "phase": "Main story",
        "optional": false,
        "summary": "Meets the player and the assistant, introduces his police work and gives the recorder. Trainer School/Pokétch hints are follow-ups in this visit.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Item / HM"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Looker",
          "https://bulbapedia.bulbagarden.net/wiki/Looker/Quotes"
        ]
      },
      {
        "id": "jubilife-return",
        "title": "Departure after Coal Badge",
        "location": "Jubilife City",
        "phase": "Main story",
        "optional": false,
        "summary": "Checks whether the player has a Pal Pad and leaves to investigate elsewhere.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Looker",
          "https://bulbapedia.bulbagarden.net/wiki/Looker/Quotes"
        ]
      },
      {
        "id": "windworks",
        "title": "Too late at Windworks",
        "location": "Valley Windworks",
        "phase": "Main story",
        "optional": false,
        "summary": "After Mars leaves, inspects the building and follows a tip to Eterna.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Looker",
          "https://bulbapedia.bulbagarden.net/wiki/Looker/Quotes"
        ]
      },
      {
        "id": "eterna",
        "title": "Galactic disguise",
        "location": "Team Galactic Eterna Building",
        "phase": "Main story",
        "optional": false,
        "summary": "Disguised as a grunt, warns about trap stairways.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Looker",
          "https://bulbapedia.bulbagarden.net/wiki/Looker/Quotes"
        ]
      },
      {
        "id": "gamecorner-early",
        "title": "Game Corner investigation",
        "location": "Veilstone Game Corner",
        "phase": "Main story",
        "optional": true,
        "summary": "Optional conversation before the Cobble Badge; suspects Galactic activity.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Optional"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Looker",
          "https://bulbapedia.bulbagarden.net/wiki/Looker/Quotes"
        ]
      },
      {
        "id": "warehouse-first",
        "title": "Pokédex rescue and Fly",
        "location": "Veilstone City → Galactic Warehouse",
        "phase": "Main story",
        "optional": false,
        "summary": "After the player and the assistant defeat grunts, investigates the warehouse and points out HM02 Fly. The inner door is locked.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Looker",
          "https://bulbapedia.bulbagarden.net/wiki/Looker/Quotes"
        ]
      },
      {
        "id": "route213",
        "title": "Bomb pursuit",
        "location": "Route 213 beach",
        "phase": "Main story",
        "optional": false,
        "summary": "During the chase, learns Galactic’s cargo was a bomb and pursues the grunt.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Looker",
          "https://bulbapedia.bulbagarden.net/wiki/Looker/Quotes"
        ]
      },
      {
        "id": "hotel",
        "title": "Hotel interviews",
        "location": "Hotel Grand Lake lobby, Route 213",
        "phase": "Main story",
        "optional": false,
        "summary": "Interviews guests during the pursuit and asks the player to search outside.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Looker",
          "https://bulbapedia.bulbagarden.net/wiki/Looker/Quotes"
        ]
      },
      {
        "id": "hq-key",
        "title": "Storage Key plan",
        "location": "Outside Team Galactic HQ",
        "phase": "Main story",
        "optional": false,
        "summary": "After Icicle Badge and Lake Acuity, offers the Storage Key route into HQ.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Looker",
          "https://bulbapedia.bulbagarden.net/wiki/Looker/Quotes"
        ]
      },
      {
        "id": "warehouse-key",
        "title": "Unlock the warehouse",
        "location": "Galactic Warehouse",
        "phase": "Main story",
        "optional": false,
        "summary": "Opens the locked door and advances inside.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Looker",
          "https://bulbapedia.bulbagarden.net/wiki/Looker/Quotes"
        ]
      },
      {
        "id": "hq-speech",
        "title": "Eavesdropping",
        "location": "Team Galactic HQ meeting room",
        "phase": "Main story",
        "optional": false,
        "summary": "Watches Cyrus’s speech with the player, then separates.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Looker",
          "https://bulbapedia.bulbagarden.net/wiki/Looker/Quotes"
        ]
      },
      {
        "id": "coronet",
        "title": "Black Flute and final appeal",
        "location": "Mt. Coronet, broken mural",
        "phase": "Main story",
        "optional": false,
        "summary": "Before Spear Pillar, asks the player to stop Cyrus and gives a Black Flute.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Item / HM"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Looker",
          "https://bulbapedia.bulbagarden.net/wiki/Looker/Quotes"
        ]
      },
      {
        "id": "stark",
        "title": "Charon’s arrest",
        "location": "Stark Mountain, Magma Stone room → exterior",
        "phase": "Postgame",
        "optional": false,
        "summary": "Reveals his boulder disguise; Croagunk retrieves the Magma Stone. Police arrest Charon; Looker explains the investigation outside and says farewell.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression",
          "Postgame"
        ],
        "featuredPokemon": [
          "Croagunk"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Looker",
          "https://bulbapedia.bulbagarden.net/wiki/Looker/Quotes"
        ]
      },
      {
        "id": "gamecorner-late",
        "title": "Peaceful Game Corner visit",
        "location": "Veilstone Game Corner",
        "phase": "Postgame",
        "optional": true,
        "summary": "After Stark Mountain, stays to teach moves to his Pokémon.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Looker",
          "https://bulbapedia.bulbagarden.net/wiki/Looker/Quotes"
        ]
      }
    ],
    "sourceNotes": "No battle with or against Looker exists in Platinum. Croagunk appears in the arrest cutscene, with no battle level or moves specified. Continuous warehouse/arrest conversations are grouped; Game Corner localisation varies.",
    "images": [
      {
        "label": "Portrait (Platinum)",
        "path": "looker-portrait.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/e/e4/Platinum_Looker.png/300px-Platinum_Looker.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Looker"
      },
      {
        "label": "Reference sprite (unused as battle opponent)",
        "path": "looker-1.png",
        "url": "https://archives.bulbagarden.net/media/upload/c/c4/Spr_Pt_Looker.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Looker"
      },
      {
        "label": "Overworld sprite",
        "path": "looker-2.png",
        "url": "https://archives.bulbagarden.net/media/upload/0/02/Looker_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Looker"
      }
    ],
    "image": "looker-portrait.png"
  },
  {
    "id": "rowan",
    "name": "Professor Rowan",
    "category": "Story",
    "role": "Pokémon Evolution researcher who gives the player her starter and Pokédex, assigns the lake investigation and recognises her Champion victory.",
    "personality": "Stern and patient, with a kind core, dry humour and a fondness for sweets.",
    "relationships": [
      "Lucas/Dawn: assistant",
      "Professor Oak: old colleague",
      "Cynthia: earlier Pokédex protégé",
      "the player and Barry: new Trainers"
    ],
    "responsibilities": [
      "Starter selection",
      "Pokédex",
      "TM27 Return",
      "Gym challenge encouragement",
      "Lake assignments",
      "Pokédex evaluations; National Dex event with Oak",
      "Hall of Fame recognition"
    ],
    "linkedChanges": [
      "Opening TV interview and naming intro",
      "Briefcase starter choices",
      "Lucas/Dawn branch",
      "Pokédex completion species totals",
      "Lake guardians and library assignments",
      "Return TM",
      "Rotom appliance event requires historical Secret Key"
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan",
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan/Quotes"
    ],
    "encounters": [
      {
        "id": "intro",
        "title": "Introduction and TV programme",
        "location": "New-game introduction / the player’s TV",
        "phase": "Main story",
        "optional": false,
        "summary": "Opening narration and TV programme introduce the Pokémon researcher.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan",
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan/Quotes"
        ]
      },
      {
        "id": "starter",
        "title": "Starter gifts",
        "location": "Route 201",
        "phase": "Main story",
        "optional": false,
        "summary": "Stops the player and Barry entering grass and entrusts them with Pokémon.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Gift Pokémon",
          "Progression"
        ],
        "giftPokemon": [
          "Turtwig",
          "Chimchar",
          "Piplup"
        ],
        "giftNote": "Choose one starter; these are the three possible species, not three simultaneous gifts.",
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan",
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan/Quotes"
        ]
      },
      {
        "id": "lab",
        "title": "Pokédex and Return",
        "location": "Sandgem laboratory → exterior",
        "phase": "Main story",
        "optional": false,
        "summary": "Checks the bond with the player’s starter, requests Pokédex help, and gives TM27 Return outside.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan",
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan/Quotes"
        ]
      },
      {
        "id": "jubilife",
        "title": "Research theft attempt",
        "location": "Jubilife City",
        "phase": "Main story",
        "optional": false,
        "summary": "After Coal Badge, Galactic tries to take his research. the player and assistant battle the grunts.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan",
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan/Quotes"
        ]
      },
      {
        "id": "library",
        "title": "Lake investigation",
        "location": "Canalave Library → exterior",
        "phase": "Main story",
        "optional": false,
        "summary": "After Mine Badge, assigns each Trainer a lake. The explosion at Lake Valor interrupts the meeting.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan",
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan/Quotes"
        ]
      },
      {
        "id": "verity",
        "title": "Help the assistant",
        "location": "Lake Verity",
        "phase": "Main story",
        "optional": false,
        "summary": "After the lake assignment, can be visited before Valor. Once Valor is checked, asks the player to help the assistant against Mars.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan",
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan/Quotes"
        ]
      },
      {
        "id": "after-distortion",
        "title": "Report the Distortion World",
        "location": "Sandgem laboratory",
        "phase": "Main story",
        "optional": false,
        "summary": "After the legendary crisis, welcomes the player back and directs the remaining journey.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan",
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan/Quotes"
        ]
      },
      {
        "id": "mesprit",
        "title": "Mesprit begins roaming",
        "location": "Lake Verity / Verity Cavern exit",
        "phase": "Main story",
        "optional": true,
        "summary": "After interacting with the released Mesprit, comments on the lake research and recommends the Marking Map.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Optional"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan",
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan/Quotes"
        ]
      },
      {
        "id": "hall",
        "title": "Champion recognition",
        "location": "Hall of Fame",
        "phase": "Main story",
        "optional": false,
        "summary": "Congratulates the player and joins Cynthia for the victory record.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan",
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan/Quotes"
        ]
      },
      {
        "id": "dex-evaluation",
        "title": "Pokédex evaluation",
        "location": "Sandgem laboratory / PC service",
        "phase": "Main story",
        "optional": true,
        "summary": "Evaluates how many Sinnoh Pokémon the player has seen; no fixed encounter total.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan",
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan/Quotes"
        ]
      },
      {
        "id": "national",
        "title": "National Pokédex upgrade",
        "location": "Sandgem laboratory",
        "phase": "Postgame",
        "optional": false,
        "summary": "After seeing all 210 Sinnoh entries, Professor Oak arrives and upgrades the Pokédex; Rowan hosts the event.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Item / HM",
          "Progression",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan",
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan/Quotes"
        ]
      },
      {
        "id": "sweets",
        "title": "Rage Candy Bar disappointment",
        "location": "Veilstone Department Store basement",
        "phase": "Postgame",
        "optional": true,
        "summary": "Optional postgame conversation about sweets and unusual Evolution locations.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan",
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan/Quotes"
        ]
      },
      {
        "id": "villa",
        "title": "Bookshelf visitor",
        "location": "Resort Area villa",
        "phase": "Postgame",
        "optional": true,
        "summary": "Can visit after the bookshelf purchase.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan",
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan/Quotes"
        ]
      },
      {
        "id": "rotom",
        "title": "Appliance discovery",
        "location": "Secret room, Team Galactic Eterna Building",
        "phase": "Special event",
        "optional": true,
        "summary": "Comments after Rotom first enters an appliance. Requires the distribution-only Secret Key in original Platinum.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Optional"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan",
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan/Quotes"
        ]
      }
    ],
    "sourceNotes": "Platinum only. Timeline rows are documented story checkpoints, with continuous scenes grouped. Optional visits and repeatable interactions are listed separately; this is a reference inventory, not an exhaustive event count. No team shown means no scripted Pokémon battle at that checkpoint.",
    "images": [
      {
        "label": "Portrait (Diamond/Pearl era)",
        "path": "rowan-portrait.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/a/a4/Diamond_Pearl_Rowan.png/300px-Diamond_Pearl_Rowan.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan"
      },
      {
        "label": "Reference / introduction sprite",
        "path": "rowan-1.png",
        "url": "https://archives.bulbagarden.net/media/upload/d/d8/Spr_DP_Rowan.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan"
      },
      {
        "label": "Overworld sprite",
        "path": "rowan-2.png",
        "url": "https://archives.bulbagarden.net/media/upload/7/78/Rowan_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Professor_Rowan"
      }
    ],
    "image": "rowan-portrait.png"
  },
  {
    "id": "lucas",
    "name": "Lucas",
    "category": "Story",
    "role": "Professor Rowan’s assistant when the female player branch is used; friendly guide and double-battle partner. If the player uses the male branch, Dawn fills this same role.",
    "personality": "Helpful, curious and modest; shares practical tools and encourages Pokédex progress.",
    "relationships": [
      "Rowan: employer and mentor",
      "the player: fellow Pokédex researcher",
      "Father: Rowan’s assistant",
      "Sister and grandfather: Sandgem family"
    ],
    "responsibilities": [
      "Catching tutorial and Poké Balls",
      "Vs. Seeker and Dowsing Machine",
      "Jubilife / Veilstone partner battles",
      "Lake Verity research",
      "Postgame Poké Radar guidance"
    ],
    "linkedChanges": [
      "Player gender branch determines Lucas versus Dawn",
      "Starter with type disadvantage against original chosen starter slot",
      "Assistant family and swarm reports",
      "Stolen Pokédex",
      "Partner back sprite and overworld outfits",
      "Gift tools and tutorial scripts"
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)",
      "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)/Quotes"
    ],
    "encounters": [
      {
        "id": "starter",
        "title": "Return Rowan’s briefcase",
        "location": "Route 201",
        "phase": "Main story",
        "optional": false,
        "summary": "Returns the briefcase from the lake during the starter event.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)/Quotes"
        ]
      },
      {
        "id": "sandgem",
        "title": "Laboratory escort and town tour",
        "location": "Sandgem Town",
        "phase": "Main story",
        "optional": false,
        "summary": "Welcomes the player, introduces the lab and demonstrates the Pokémon Center / Mart locations.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)/Quotes"
        ]
      },
      {
        "id": "catch",
        "title": "Catching tutorial",
        "location": "Route 202",
        "phase": "Main story",
        "optional": false,
        "summary": "Blocks departure until Mum has been told. Demonstrates catching Bidoof with a Lv.5 starter and gives Poké Balls. Tutorial, not a Trainer battle.",
        "teams": [
          {
            "label": "Player chose Turtwig",
            "pokemon": [
              {
                "species": "Piplup",
                "level": 5,
                "moves": [
                  "Pound",
                  "Growl"
                ],
                "ability": "Torrent",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Chimchar",
            "pokemon": [
              {
                "species": "Turtwig",
                "level": 5,
                "moves": [
                  "Tackle",
                  "Withdraw"
                ],
                "ability": "Overgrow",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Piplup",
            "pokemon": [
              {
                "species": "Chimchar",
                "level": 5,
                "moves": [
                  "Scratch",
                  "Leer"
                ],
                "ability": "Blaze",
                "item": "None"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Item / HM",
          "Progression",
          "Tutorial"
        ],
        "featuredPokemon": [
          "Bidoof"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)/Quotes"
        ]
      },
      {
        "id": "jubilife",
        "title": "Trainer School directions",
        "location": "Jubilife City",
        "phase": "Main story",
        "optional": false,
        "summary": "Introduces Looker and points the player towards the Trainer School.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)/Quotes"
        ]
      },
      {
        "id": "jubilife-battle",
        "title": "Partner battle against Galactic",
        "location": "Jubilife City",
        "phase": "Main story",
        "optional": false,
        "summary": "After Coal Badge, helps protect Rowan’s research.",
        "teams": [
          {
            "label": "Player chose Turtwig",
            "pokemon": [
              {
                "species": "Piplup",
                "level": 13,
                "moves": [
                  "Bubble",
                  "Pound"
                ],
                "ability": "Torrent",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Chimchar",
            "pokemon": [
              {
                "species": "Turtwig",
                "level": 13,
                "moves": [
                  "Absorb",
                  "Tackle"
                ],
                "ability": "Overgrow",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Piplup",
            "pokemon": [
              {
                "species": "Chimchar",
                "level": 13,
                "moves": [
                  "Ember",
                  "Scratch"
                ],
                "ability": "Blaze",
                "item": "None"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Partner battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)/Quotes"
        ]
      },
      {
        "id": "tools",
        "title": "Vs. Seeker and Dowsing Machine",
        "location": "Route 207",
        "phase": "Main story",
        "optional": false,
        "summary": "Offers both tools regardless of which hand the player chooses.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)/Quotes"
        ]
      },
      {
        "id": "veilstone-intro",
        "title": "Meeting near the Gym",
        "location": "Veilstone City",
        "phase": "Main story",
        "optional": false,
        "summary": "Checks the player’s progress around the Gym visit.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)/Quotes"
        ]
      },
      {
        "id": "veilstone-battle",
        "title": "Recover the stolen Pokédex",
        "location": "Veilstone Galactic Warehouse exterior",
        "phase": "Main story",
        "optional": false,
        "summary": "Asks for help after grunts steal the Pokédex; joins the double battle.",
        "teams": [
          {
            "label": "Player chose Turtwig",
            "pokemon": [
              {
                "species": "Clefairy",
                "level": 25,
                "moves": [
                  "Metronome",
                  "Sing",
                  "Gravity",
                  "Wake-Up Slap"
                ],
                "ability": "Cute Charm",
                "item": "None"
              },
              {
                "species": "Kadabra",
                "level": 25,
                "moves": [
                  "Psybeam",
                  "Psycho Cut",
                  "Reflect",
                  "Light Screen"
                ],
                "ability": "Synchronize",
                "item": "None"
              },
              {
                "species": "Prinplup",
                "level": 28,
                "moves": [
                  "BubbleBeam",
                  "Peck",
                  "Fury Attack",
                  "Metal Claw"
                ],
                "ability": "Torrent",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Chimchar",
            "pokemon": [
              {
                "species": "Clefairy",
                "level": 25,
                "moves": [
                  "Metronome",
                  "Sing",
                  "Gravity",
                  "Wake-Up Slap"
                ],
                "ability": "Cute Charm",
                "item": "None"
              },
              {
                "species": "Kadabra",
                "level": 25,
                "moves": [
                  "Psybeam",
                  "Psycho Cut",
                  "Reflect",
                  "Light Screen"
                ],
                "ability": "Synchronize",
                "item": "None"
              },
              {
                "species": "Grotle",
                "level": 28,
                "moves": [
                  "Razor Leaf",
                  "Mega Drain",
                  "Bite",
                  "Curse"
                ],
                "ability": "Overgrow",
                "item": "None"
              }
            ]
          },
          {
            "label": "Player chose Piplup",
            "pokemon": [
              {
                "species": "Clefairy",
                "level": 25,
                "moves": [
                  "Metronome",
                  "Sing",
                  "Gravity",
                  "Wake-Up Slap"
                ],
                "ability": "Cute Charm",
                "item": "None"
              },
              {
                "species": "Kadabra",
                "level": 25,
                "moves": [
                  "Psybeam",
                  "Psycho Cut",
                  "Reflect",
                  "Light Screen"
                ],
                "ability": "Synchronize",
                "item": "None"
              },
              {
                "species": "Monferno",
                "level": 28,
                "moves": [
                  "Flame Wheel",
                  "Ember",
                  "Mach Punch",
                  "Fury Swipes"
                ],
                "ability": "Blaze",
                "item": "None"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Partner battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)/Quotes"
        ]
      },
      {
        "id": "library",
        "title": "Lake assignment",
        "location": "Canalave Library",
        "phase": "Main story",
        "optional": false,
        "summary": "Assigned to Lake Verity during Rowan’s research meeting.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)/Quotes"
        ]
      },
      {
        "id": "verity",
        "title": "Defeated by Mars",
        "location": "Lake Verity",
        "phase": "Main story",
        "optional": false,
        "summary": "Needs the player’s help against Galactic, then reports the guardian has been taken.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)/Quotes"
        ]
      },
      {
        "id": "lab-followups",
        "title": "Research updates and legendary hints",
        "location": "Sandgem laboratory",
        "phase": "Main story",
        "optional": false,
        "summary": "Dialogue changes after Distortion World, Hall of Fame, the elder’s advice, catching Dialga/Palkia and Pokédex progress. Grouped repeatable dialogue states.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)/Quotes"
        ]
      },
      {
        "id": "radar",
        "title": "Poké Radar tutorial",
        "location": "Route 202",
        "phase": "Postgame",
        "optional": true,
        "summary": "After National Pokédex and related Sandgem dialogue, explains chaining.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Optional",
          "Postgame",
          "Tutorial"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)/Quotes"
        ]
      },
      {
        "id": "completion",
        "title": "National Pokédex congratulations",
        "location": "Sandgem laboratory",
        "phase": "Postgame",
        "optional": true,
        "summary": "Congratulates the player on completion and can recognise the player’s birthday.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)/Quotes"
        ]
      },
      {
        "id": "hall",
        "title": "Battle Hall supporter",
        "location": "Battle Hall lobby",
        "phase": "Postgame",
        "optional": true,
        "summary": "Can appear after successful Battle Hall performance.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame",
          "Facility"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)/Quotes"
        ]
      },
      {
        "id": "villa",
        "title": "Villa guest — small sofa",
        "location": "Resort Area villa",
        "phase": "Postgame",
        "optional": true,
        "repeatable": true,
        "summary": "Can visit after the small sofa purchase; comments about the furniture, research and Battle Zone.",
        "teams": [],
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)",
          "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)/Quotes"
        ]
      }
    ],
    "sourceNotes": "Lucas is Professor Rowan’s assistant when Dawn is the playable character; Dawn fills this role when Lucas is playable. Original Platinum has no battles AGAINST Lucas/Dawn. The Lv.5 party is the catching demonstration; Lv.13 and Lv.25/28 parties are partner battles. Sandgem postgame state changes are grouped instead of claiming an exact appearance total.",
    "images": [
      {
        "label": "Portrait (Platinum)",
        "path": "lucas-portrait.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/2/2f/Platinum_Lucas.png/300px-Platinum_Lucas.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)"
      },
      {
        "label": "Reference trainer sprite (Platinum)",
        "path": "lucas-1.png",
        "url": "https://archives.bulbagarden.net/media/upload/6/6b/Spr_Pt_Lucas.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)"
      },
      {
        "label": "Overworld walking sprite (Platinum)",
        "path": "lucas-2.png",
        "url": "https://archives.bulbagarden.net/media/upload/3/39/LucasPtwalkdown.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)"
      },
      {
        "label": "Partner back sprite (Platinum)",
        "path": "lucas-3.png",
        "url": "https://archives.bulbagarden.net/media/upload/1/15/Pt_Lucas_Back.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Lucas_(game)"
      }
    ],
    "image": "lucas-portrait.png"
  },
  {
    "id": "mars",
    "name": "Mars",
    "category": "Galactic",
    "role": "Team Galactic commander with a recurring boss role.",
    "personality": "Impulsive, competitive and loyal to Cyrus; dislikes Charon’s takeover.",
    "relationships": [
      "Cyrus: leader",
      "Jupiter: fellow commander / rival",
      "Charon: resents his leadership",
      "the player: recurring opponent"
    ],
    "responsibilities": [
      "Windworks occupation",
      "Mesprit capture at Verity",
      "Spear Pillar boss pair",
      "Stark Mountain final battle"
    ],
    "linkedChanges": [
      "Valley Windworks worker rescue",
      "Mars / Charon shared scene",
      "Lake Verity assistant rescue",
      "Shared Spear Pillar battle",
      "Stark Mountain exit"
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Mars"
    ],
    "encounters": [
      {
        "id": "windworks",
        "title": "Valley Windworks boss",
        "location": "Valley Windworks",
        "phase": "Main story",
        "optional": false,
        "summary": "First major Galactic boss; withdraws with Charon after the player wins.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Zubat",
                "level": 15,
                "moves": [
                  "Bite",
                  "Leech Life",
                  "Toxic"
                ],
                "ability": "Inner Focus",
                "item": "None"
              },
              {
                "species": "Purugly",
                "level": 17,
                "moves": [
                  "Faint Attack",
                  "Scratch",
                  "Fake Out"
                ],
                "ability": "Thick Fat",
                "item": "Oran Berry"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Mars"
        ]
      },
      {
        "id": "verity",
        "title": "Lake Verity boss",
        "location": "Lake Verity",
        "phase": "Main story",
        "optional": false,
        "summary": "Guards the captured Mesprit operation; the player helps Rowan and the assistant.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Golbat",
                "level": 38,
                "moves": [
                  "Air Cutter",
                  "Bite",
                  "Toxic",
                  "Supersonic"
                ],
                "ability": "Inner Focus",
                "item": "None"
              },
              {
                "species": "Bronzor",
                "level": 38,
                "moves": [
                  "Gyro Ball",
                  "Extrasensory",
                  "Iron Defense",
                  "Confuse Ray"
                ],
                "ability": "Levitate",
                "item": "None"
              },
              {
                "species": "Purugly",
                "level": 40,
                "moves": [
                  "Slash",
                  "Faint Attack",
                  "Hypnosis",
                  "Fake Out"
                ],
                "ability": "Thick Fat",
                "item": "Sitrus Berry"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Mars"
        ]
      },
      {
        "id": "spear",
        "title": "Double battle with Jupiter",
        "location": "Spear Pillar",
        "phase": "Main story",
        "optional": false,
        "summary": "Battles the player and Barry together. Only Mars’s three Pokémon are shown here; Jupiter has the other three.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Bronzor",
                "level": 44,
                "moves": [
                  "Gyro Ball",
                  "Extrasensory",
                  "Light Screen",
                  "Confuse Ray"
                ],
                "ability": "Levitate",
                "item": "None"
              },
              {
                "species": "Golbat",
                "level": 44,
                "moves": [
                  "Air Cutter",
                  "Bite",
                  "Poison Fang",
                  "Confuse Ray"
                ],
                "ability": "Inner Focus",
                "item": "None"
              },
              {
                "species": "Purugly",
                "level": 46,
                "moves": [
                  "Slash",
                  "Shadow Claw",
                  "Aerial Ace",
                  "Hypnosis"
                ],
                "ability": "Thick Fat",
                "item": "Sitrus Berry"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Mars"
        ]
      },
      {
        "id": "stark",
        "title": "Final battle and resignation",
        "location": "Stark Mountain entrance chamber",
        "phase": "Postgame",
        "optional": false,
        "summary": "Battled before Jupiter, then leaves to look for Cyrus after rejecting Charon’s leadership.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Bronzong",
                "level": 58,
                "moves": [
                  "Gyro Ball",
                  "Extrasensory",
                  "Light Screen",
                  "Confuse Ray"
                ],
                "ability": "Levitate",
                "item": "None"
              },
              {
                "species": "Golbat",
                "level": 58,
                "moves": [
                  "Air Cutter",
                  "Bite",
                  "Poison Fang",
                  "Confuse Ray"
                ],
                "ability": "Inner Focus",
                "item": "None"
              },
              {
                "species": "Purugly",
                "level": 60,
                "moves": [
                  "Slash",
                  "Shadow Claw",
                  "Aerial Ace",
                  "Hypnosis"
                ],
                "ability": "Thick Fat",
                "item": "Sitrus Berry"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Mars"
        ]
      }
    ],
    "sourceNotes": "Platinum only. Timeline rows are documented story checkpoints, with continuous scenes grouped. Optional visits and repeatable interactions are listed separately; this is a reference inventory, not an exhaustive event count. No team shown means no scripted Pokémon battle at that checkpoint.",
    "images": [
      {
        "label": "Portrait (Diamond/Pearl era)",
        "path": "mars-portrait.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/c/ce/Diamond_Pearl_Mars.png/300px-Diamond_Pearl_Mars.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Mars"
      },
      {
        "label": "Battle sprite",
        "path": "mars-1.png",
        "url": "https://archives.bulbagarden.net/media/upload/b/ba/Spr_DP_Mars.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Mars"
      },
      {
        "label": "Overworld sprite",
        "path": "mars-2.png",
        "url": "https://archives.bulbagarden.net/media/upload/6/64/Mars_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Mars"
      }
    ],
    "image": "mars-portrait.png"
  },
  {
    "id": "jupiter",
    "name": "Jupiter",
    "category": "Galactic",
    "role": "Team Galactic commander with a recurring boss role.",
    "personality": "Cool, dismissive and cutting; confident in her power and unimpressed with Barry.",
    "relationships": [
      "Cyrus: leader",
      "Mars: rival commander",
      "Barry: defeats him at Acuity",
      "Charon: rejects his leadership"
    ],
    "responsibilities": [
      "Eterna bicycle-shop Pokémon rescue",
      "Uxie capture / Barry defeat",
      "Spear Pillar boss pair",
      "Stark Mountain final battle"
    ],
    "linkedChanges": [
      "Rad Rickshaw and Bicycle reward",
      "Barry defeat scene",
      "Shared Spear Pillar battle",
      "Postgame resignation"
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Jupiter"
    ],
    "encounters": [
      {
        "id": "eterna",
        "title": "Eterna Galactic building boss",
        "location": "Team Galactic Eterna Building",
        "phase": "Main story",
        "optional": false,
        "summary": "Holds Rad Rickshaw’s Pokémon; defeat frees the cycle shop owner.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Zubat",
                "level": 21,
                "moves": [
                  "Giga Drain",
                  "Wing Attack",
                  "Bite"
                ],
                "ability": "Inner Focus",
                "item": "None"
              },
              {
                "species": "Skuntank",
                "level": 23,
                "moves": [
                  "Night Slash",
                  "Poison Gas",
                  "Screech",
                  "SmokeScreen"
                ],
                "ability": "Stench",
                "item": "Sitrus Berry"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Jupiter"
        ]
      },
      {
        "id": "acuity",
        "title": "After defeating Barry",
        "location": "Lake Acuity",
        "phase": "Main story",
        "optional": false,
        "summary": "Seen after beating Barry and taking Uxie. the player does not battle her here.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Jupiter"
        ]
      },
      {
        "id": "spear",
        "title": "Double battle with Mars",
        "location": "Spear Pillar",
        "phase": "Main story",
        "optional": false,
        "summary": "Battles the player and Barry; only Jupiter’s three Pokémon are listed on this page.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Bronzor",
                "level": 44,
                "moves": [
                  "Gyro Ball",
                  "Extrasensory",
                  "Rock Slide",
                  "Reflect"
                ],
                "ability": "Levitate",
                "item": "None"
              },
              {
                "species": "Golbat",
                "level": 44,
                "moves": [
                  "Sludge Bomb",
                  "Air Cutter",
                  "Giga Drain",
                  "Mean Look"
                ],
                "ability": "Inner Focus",
                "item": "None"
              },
              {
                "species": "Skuntank",
                "level": 46,
                "moves": [
                  "Night Slash",
                  "Poison Jab",
                  "Flamethrower",
                  "SmokeScreen"
                ],
                "ability": "Stench",
                "item": "Sitrus Berry"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Jupiter"
        ]
      },
      {
        "id": "stark",
        "title": "Final battle and resignation",
        "location": "Stark Mountain entrance chamber",
        "phase": "Postgame",
        "optional": false,
        "summary": "Battled after Mars, then leaves to seek Cyrus; no repeatable Galactic rematch.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Bronzong",
                "level": 58,
                "moves": [
                  "Gyro Ball",
                  "Extrasensory",
                  "Rock Slide",
                  "Reflect"
                ],
                "ability": "Levitate",
                "item": "None"
              },
              {
                "species": "Golbat",
                "level": 58,
                "moves": [
                  "Sludge Bomb",
                  "Air Cutter",
                  "Giga Drain",
                  "Mean Look"
                ],
                "ability": "Inner Focus",
                "item": "None"
              },
              {
                "species": "Skuntank",
                "level": 60,
                "moves": [
                  "Night Slash",
                  "Poison Jab",
                  "Flamethrower",
                  "SmokeScreen"
                ],
                "ability": "Stench",
                "item": "Sitrus Berry"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Jupiter"
        ]
      }
    ],
    "sourceNotes": "Platinum only. Timeline rows are documented story checkpoints, with continuous scenes grouped. Optional visits and repeatable interactions are listed separately; this is a reference inventory, not an exhaustive event count. No team shown means no scripted Pokémon battle at that checkpoint.",
    "images": [
      {
        "label": "Portrait (Diamond/Pearl era)",
        "path": "jupiter-portrait.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/d/d0/Diamond_Pearl_Jupiter.png/300px-Diamond_Pearl_Jupiter.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Jupiter"
      },
      {
        "label": "Battle sprite",
        "path": "jupiter-1.png",
        "url": "https://archives.bulbagarden.net/media/upload/6/69/Spr_DP_Jupiter.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Jupiter"
      },
      {
        "label": "Overworld sprite",
        "path": "jupiter-2.png",
        "url": "https://archives.bulbagarden.net/media/upload/9/96/Jupiter_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Jupiter"
      }
    ],
    "image": "jupiter-portrait.png"
  },
  {
    "id": "saturn",
    "name": "Saturn",
    "category": "Galactic",
    "role": "Team Galactic commander with a recurring boss role.",
    "personality": "Serious and pragmatic; follows Galactic’s orders but later questions Cyrus’s true intentions.",
    "relationships": [
      "Cyrus: former leader",
      "Charon: laboratory colleague",
      "Mars / Jupiter: fellow commanders"
    ],
    "responsibilities": [
      "Azelf capture at Valor",
      "Laboratory button releasing lake guardians",
      "Galactic HQ aftermath"
    ],
    "linkedChanges": [
      "Lake Valor bomb aftermath",
      "HQ holding room and release button",
      "Charon shared laboratory scene",
      "Post-Cyrus dialogue at HQ"
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Saturn"
    ],
    "encounters": [
      {
        "id": "valor",
        "title": "Lake Valor boss",
        "location": "Valor Cavern",
        "phase": "Main story",
        "optional": false,
        "summary": "Leads the lake operation after the explosion and battles the player.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Golbat",
                "level": 38,
                "moves": [
                  "Air Cutter",
                  "Bite",
                  "Toxic",
                  "Supersonic"
                ],
                "ability": "Inner Focus",
                "item": "None"
              },
              {
                "species": "Bronzor",
                "level": 38,
                "moves": [
                  "Gyro Ball",
                  "Shadow Ball",
                  "Rock Tomb",
                  "Iron Defense"
                ],
                "ability": "Levitate",
                "item": "None"
              },
              {
                "species": "Toxicroak",
                "level": 40,
                "moves": [
                  "Poison Jab",
                  "Revenge",
                  "Mud Bomb",
                  "Faint Attack"
                ],
                "ability": "Anticipation",
                "item": "Sitrus Berry"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Saturn"
        ]
      },
      {
        "id": "hq",
        "title": "Captive guardian laboratory",
        "location": "Team Galactic HQ",
        "phase": "Main story",
        "optional": false,
        "summary": "Seen with Charon; battles after Cyrus’s office fight. Defeat allows the player to press the release button.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Golbat",
                "level": 42,
                "moves": [
                  "Air Cutter",
                  "Bite",
                  "Poison Fang",
                  "Confuse Ray"
                ],
                "ability": "Inner Focus",
                "item": "None"
              },
              {
                "species": "Bronzor",
                "level": 42,
                "moves": [
                  "Gyro Ball",
                  "Extrasensory",
                  "Shadow Ball",
                  "Confuse Ray"
                ],
                "ability": "Levitate",
                "item": "None"
              },
              {
                "species": "Toxicroak",
                "level": 44,
                "moves": [
                  "Poison Jab",
                  "Brick Break",
                  "X-Scissor",
                  "Faint Attack"
                ],
                "ability": "Anticipation",
                "item": "Sitrus Berry"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Saturn"
        ]
      },
      {
        "id": "hq-after",
        "title": "Galactic aftermath",
        "location": "Team Galactic HQ",
        "phase": "Main story",
        "optional": true,
        "summary": "After Cyrus vanishes, remains at HQ and reflects on how Cyrus deceived them. No additional battle.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Saturn"
        ]
      }
    ],
    "sourceNotes": "Platinum only. Timeline rows are documented story checkpoints, with continuous scenes grouped. Optional visits and repeatable interactions are listed separately; this is a reference inventory, not an exhaustive event count. No team shown means no scripted Pokémon battle at that checkpoint.",
    "images": [
      {
        "label": "Portrait (Diamond/Pearl era)",
        "path": "saturn-portrait.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/3/34/Diamond_Pearl_Saturn.png/300px-Diamond_Pearl_Saturn.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Saturn"
      },
      {
        "label": "Battle sprite",
        "path": "saturn-1.png",
        "url": "https://archives.bulbagarden.net/media/upload/e/e5/Spr_DP_Saturn.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Saturn"
      },
      {
        "label": "Overworld sprite",
        "path": "saturn-2.png",
        "url": "https://archives.bulbagarden.net/media/upload/8/89/Saturn_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Saturn"
      }
    ],
    "image": "saturn-portrait.png"
  },
  {
    "id": "mum",
    "name": "Johanna",
    "category": "Family",
    "role": "The player’s mother and home support; also an accomplished Super Contest participant.",
    "personality": "Warm, encouraging and independent; supports the journey while reminding the player to care for Pokémon.",
    "relationships": [
      "the player: daughter / player",
      "Barry’s mother: friend",
      "Keira: Contest friend",
      "Jumpy: contest Kangaskhan"
    ],
    "responsibilities": [
      "Running Shoes",
      "Journal",
      "Home party healing",
      "Contest Dress / Tuxedo",
      "Postgame ship hint"
    ],
    "linkedChanges": [
      "Louisa name and dialogue",
      "References to player’s father",
      "Barry’s mother references",
      "Home healing",
      "Contest outfit and Master Rank appearances",
      "Villa / Battle Hall visits"
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Johanna",
      "https://bulbapedia.bulbagarden.net/wiki/Johanna/Quotes"
    ],
    "encounters": [
      {
        "id": "opening",
        "title": "Send-off and safety warning",
        "location": "Player’s house, Twinleaf Town",
        "phase": "Main story",
        "optional": false,
        "summary": "Warns about tall grass and comments on Barry rushing away.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Johanna",
          "https://bulbapedia.bulbagarden.net/wiki/Johanna/Quotes"
        ]
      },
      {
        "id": "shoes",
        "title": "Running Shoes",
        "location": "Player’s house",
        "phase": "Main story",
        "optional": false,
        "summary": "After first rival battle, gives Running Shoes and asks the player to thank Rowan.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Johanna",
          "https://bulbapedia.bulbagarden.net/wiki/Johanna/Quotes"
        ]
      },
      {
        "id": "journal",
        "title": "Journal and Parcel delivery",
        "location": "Player’s house",
        "phase": "Main story",
        "optional": false,
        "summary": "After the Sandgem visit, gives the Journal. Barry’s mother arrives with the Parcel for the player to deliver.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Johanna",
          "https://bulbapedia.bulbagarden.net/wiki/Johanna/Quotes"
        ]
      },
      {
        "id": "home",
        "title": "Rest at home",
        "location": "Player’s house",
        "phase": "Main story",
        "optional": true,
        "summary": "Repeatable party healing and changing family dialogue.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Johanna",
          "https://bulbapedia.bulbagarden.net/wiki/Johanna/Quotes"
        ]
      },
      {
        "id": "contest-intro",
        "title": "Contest Hall meeting",
        "location": "Hearthome Super Contest Hall",
        "phase": "Main story",
        "optional": true,
        "summary": "Introduces Keira and supplies the appropriate Dress / Tuxedo.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Item / HM",
          "Optional",
          "Contest"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Johanna",
          "https://bulbapedia.bulbagarden.net/wiki/Johanna/Quotes"
        ]
      },
      {
        "id": "master-contest",
        "title": "Master Rank contest entrant",
        "location": "Hearthome Super Contest Hall",
        "phase": "Main story",
        "optional": true,
        "summary": "Occasionally competes with Kangaskhan nicknamed Jumpy. A contest opponent, not a battle team; level is not specified.",
        "teams": [
          {
            "label": "Contest Pokémon — level not specified",
            "pokemon": [
              {
                "species": "Kangaskhan (Jumpy)",
                "level": null,
                "moves": [
                  "Dizzy Punch",
                  "Endure",
                  "Reversal",
                  "Outrage"
                ],
                "ability": "Not specified",
                "item": "Not specified",
                "levelNote": "Not applicable (Contest)"
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Contest"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Johanna",
          "https://bulbapedia.bulbagarden.net/wiki/Johanna/Quotes"
        ]
      },
      {
        "id": "post-league",
        "title": "Barry’s ship message",
        "location": "Player’s house",
        "phase": "Postgame",
        "optional": false,
        "summary": "After first Hall of Fame, says Barry wants the player to take the Snowpoint ship.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Johanna",
          "https://bulbapedia.bulbagarden.net/wiki/Johanna/Quotes"
        ]
      },
      {
        "id": "battlehall",
        "title": "Battle Hall supporter",
        "location": "Battle Hall lobby",
        "phase": "Postgame",
        "optional": true,
        "summary": "Can appear after the player performs well in the facility.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame",
          "Facility"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Johanna",
          "https://bulbapedia.bulbagarden.net/wiki/Johanna/Quotes"
        ]
      },
      {
        "id": "villa",
        "title": "Villa guest",
        "location": "Resort Area villa",
        "phase": "Postgame",
        "optional": true,
        "summary": "Optional rotating visitor.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Johanna",
          "https://bulbapedia.bulbagarden.net/wiki/Johanna/Quotes"
        ]
      }
    ],
    "sourceNotes": "Johanna has no Trainer battle in Platinum. Jumpy’s contest moves are documented, but no battle level, held item or ability should be invented; anime Glameow/Umbreon are not her Platinum party. No unique official game portrait is supplied; the exact Generation IV overworld sprite is shown.",
    "images": [
      {
        "label": "Overworld sprite",
        "path": "mum-1.png",
        "url": "https://archives.bulbagarden.net/media/upload/4/4e/Johanna_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Johanna"
      }
    ],
    "image": "mum-1.png"
  },
  {
    "id": "charon",
    "name": "Charon",
    "category": "Galactic",
    "role": "Galactic scientist / commander who attempts a profitable Heatran scheme after Cyrus’s disappearance.",
    "personality": "Self-important, calculating and opportunistic; values money and leverage more than Cyrus’s ideal world.",
    "relationships": [
      "Mars: distrusts him",
      "Saturn: shared laboratory",
      "Cyrus: former boss",
      "Looker: arrests him",
      "Buck: opposes his Stark Mountain scheme"
    ],
    "responsibilities": [
      "Windworks research presence",
      "HQ lake-guardian laboratory",
      "Stark Mountain postgame plot",
      "Rotom notebook connection"
    ],
    "linkedChanges": [
      "Mars shared scenes",
      "Charon’s takeover dialogue",
      "Heatran and Magma Stone",
      "Looker arrest and police sprites",
      "Secret Key room notebook author credit",
      "Indirect reference: mysterious Rotom-room notebook names Charon; older notebook authorship is uncertain. Requires Secret Key in original Platinum. Not an in-person appearance."
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Charon"
    ],
    "encounters": [
      {
        "id": "windworks",
        "title": "First commander appearance",
        "location": "Valley Windworks",
        "phase": "Main story",
        "optional": false,
        "summary": "Stands with Mars during the occupation; comments after her defeat.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Charon"
        ]
      },
      {
        "id": "hq",
        "title": "Lake-guardian laboratory",
        "location": "Team Galactic HQ",
        "phase": "Main story",
        "optional": false,
        "summary": "Seen with Saturn around the captive guardians and their release button.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Charon"
        ]
      },
      {
        "id": "stark-entry",
        "title": "New Galactic leadership",
        "location": "Stark Mountain entrance chamber",
        "phase": "Postgame",
        "optional": false,
        "summary": "Leads the remaining group; Mars and Jupiter battle the player then quit.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Charon"
        ]
      },
      {
        "id": "stark-arrest",
        "title": "Magma Stone and arrest",
        "location": "Stark Mountain inner chamber",
        "phase": "Postgame",
        "optional": false,
        "summary": "Tries to take the Magma Stone, but Looker’s Croagunk retrieves it and police arrest him.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Charon"
        ]
      }
    ],
    "sourceNotes": "Charon is never battled in original Platinum and has no scripted battle team. His illustrated trainer sprite exists, but does not imply a playable fight. The Rotom notebook is an indirect reference and should be excluded from in-person appearance counts.",
    "images": [
      {
        "label": "Portrait (Platinum)",
        "path": "charon-portrait.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/0/0b/Platinum_Charon.png/300px-Platinum_Charon.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Charon"
      },
      {
        "label": "Reference sprite (unused as battle opponent)",
        "path": "charon-1.png",
        "url": "https://archives.bulbagarden.net/media/upload/e/e6/Spr_Pt_Charon.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Charon"
      },
      {
        "label": "Overworld sprite",
        "path": "charon-2.png",
        "url": "https://archives.bulbagarden.net/media/upload/d/d3/Charon_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Charon"
      }
    ],
    "image": "charon-portrait.png"
  },
  {
    "id": "grandmother",
    "name": "Cynthia’s grandmother",
    "category": "Story",
    "role": "Unnamed Celestic Town elder who explains Sinnoh’s legends and supports progression through the ruins.",
    "personality": "Knowledgeable and forthright; protective of the town and its history.",
    "relationships": [
      "Cynthia: granddaughter",
      "the player: Old Charm courier",
      "Cyrus: confronts his threat to the ruins"
    ],
    "responsibilities": [
      "Old Charm delivery",
      "Ruins myth explanation",
      "HM03 Surf",
      "Postgame Dialga / Palkia guidance"
    ],
    "linkedChanges": [
      "Family relationship if Cynthia becomes a Taylor era",
      "Old Charm meaning",
      "Surf HM award",
      "Mural / lake guardians / legendary references",
      "Generic elderly-woman overworld sprite may be shared"
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Carolina"
    ],
    "encounters": [
      {
        "id": "celestic",
        "title": "Old Charm delivery and ruins crisis",
        "location": "Celestic Town → Celestic Ruins",
        "phase": "Main story",
        "optional": false,
        "summary": "After the player deals with the grunt, receives Cynthia’s Old Charm, explains the mural and challenges Cyrus’s claims. After the Cyrus battle, gives HM03 Surf.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Carolina"
        ]
      },
      {
        "id": "town",
        "title": "Elder’s follow-up dialogue",
        "location": "Celestic Town elder’s house",
        "phase": "Main story",
        "optional": true,
        "summary": "Optional returns for changing local and legendary dialogue.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Carolina"
        ]
      },
      {
        "id": "legendaries",
        "title": "Dialga and Palkia advice",
        "location": "Celestic Town elder’s house",
        "phase": "Postgame",
        "optional": true,
        "summary": "Postgame discussion explains returning to Spear Pillar with the Adamant and Lustrous Orbs; no battle.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Professor_Carolina"
        ]
      }
    ],
    "sourceNotes": "The game does not call Cynthia’s grandmother Professor Carolina; that name belongs to her animation counterpart. A unique Platinum portrait and Pokémon battle team are not established in the linked references. The Celestic delivery and Cyrus event are grouped as one continuous encounter.",
    "images": [],
    "image": ""
  },
  {
    "id": "buck",
    "name": "Buck",
    "category": "Companion",
    "role": "Defensive specialist, Stark Mountain partner and Battleground host; helps resolve the Heatran / Charon postgame story.",
    "personality": "Confident and protective of Stark Mountain; wants to earn his strength through effort.",
    "relationships": [
      "Flint: older brother",
      "Grandfather: runs the Battleground",
      "the player: temporary partner",
      "Looker: helps restore Magma Stone",
      "Barry: meets at Fight Area"
    ],
    "responsibilities": [
      "Stark Mountain party healing",
      "Magma Stone restoration",
      "Battleground access",
      "Repeatable Battleground battle",
      "Battle Tower multi partner"
    ],
    "linkedChanges": [
      "Flint family references despite Taylor-era Elite Four",
      "Survival Area grandfather / club",
      "Partner back sprite and front battle sprite",
      "Claydol partner party",
      "Heatran unlock sequence"
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Buck",
      "https://bulbapedia.bulbagarden.net/wiki/Buck/Quotes"
    ],
    "encounters": [
      {
        "id": "fight",
        "title": "Fight Area spectator",
        "location": "Fight Area",
        "phase": "Postgame",
        "optional": false,
        "summary": "Watches the player and Barry fight Flint / Volkner, then introduces himself.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Buck",
          "https://bulbapedia.bulbagarden.net/wiki/Buck/Quotes"
        ]
      },
      {
        "id": "route227",
        "title": "Patrol request",
        "location": "Route 227",
        "phase": "Postgame",
        "optional": false,
        "summary": "Asks the player to investigate vandals at Stark Mountain.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Buck",
          "https://bulbapedia.bulbagarden.net/wiki/Buck/Quotes"
        ]
      },
      {
        "id": "stark-partner",
        "title": "Stark Mountain partner",
        "location": "Stark Mountain main cavern",
        "phase": "Postgame",
        "optional": false,
        "summary": "Joins the player after the Mars / Jupiter fights, uses Claydol and keeps the player’s party healed.",
        "teams": [
          {
            "label": "Partner Pokémon",
            "pokemon": [
              {
                "species": "Claydol",
                "level": 63,
                "moves": [
                  "Psychic",
                  "Light Screen",
                  "Reflect",
                  "AncientPower"
                ],
                "ability": "Levitate",
                "item": "None"
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Partner battle",
          "Progression",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Buck",
          "https://bulbapedia.bulbagarden.net/wiki/Buck/Quotes"
        ]
      },
      {
        "id": "magma",
        "title": "Magma Stone recovery",
        "location": "Stark Mountain inner chamber → exterior",
        "phase": "Postgame",
        "optional": false,
        "summary": "Confronts Charon with the player, then takes the recovered stone from Looker and returns it.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Buck",
          "https://bulbapedia.bulbagarden.net/wiki/Buck/Quotes"
        ]
      },
      {
        "id": "survival",
        "title": "Battleground introduction",
        "location": "Survival Area / Battleground",
        "phase": "Postgame",
        "optional": false,
        "summary": "Invites the player into his place and explains its tough-Trainer membership.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Buck",
          "https://bulbapedia.bulbagarden.net/wiki/Buck/Quotes"
        ]
      },
      {
        "id": "battle",
        "title": "Battleground rematch",
        "location": "Battleground, Survival Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Part of the rotating daily opponent roster after the Stark Mountain quest.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Shuckle",
                "level": 61,
                "moves": [
                  "Toxic",
                  "Protect",
                  "Sandstorm",
                  "Rest"
                ],
                "ability": "Sturdy",
                "item": "None"
              },
              {
                "species": "Umbreon",
                "level": 62,
                "moves": [
                  "Dark Pulse",
                  "Confuse Ray",
                  "Double Team",
                  "Psychic"
                ],
                "ability": "Synchronize",
                "item": "None"
              },
              {
                "species": "Torkoal",
                "level": 61,
                "moves": [
                  "Protect",
                  "Will-O-Wisp",
                  "Earthquake",
                  "Eruption"
                ],
                "ability": "White Smoke",
                "item": "None"
              },
              {
                "species": "Dusknoir",
                "level": 63,
                "moves": [
                  "Fire Punch",
                  "Ice Punch",
                  "ThunderPunch",
                  "Shadow Ball"
                ],
                "ability": "Pressure",
                "item": "None"
              },
              {
                "species": "Claydol",
                "level": 65,
                "moves": [
                  "Psychic",
                  "Earth Power",
                  "Calm Mind",
                  "AncientPower"
                ],
                "ability": "Levitate",
                "item": "Sitrus Berry"
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame",
          "Facility"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Buck",
          "https://bulbapedia.bulbagarden.net/wiki/Buck/Quotes"
        ]
      },
      {
        "id": "tower",
        "title": "Battle Tower multi partner",
        "location": "Battle Tower partner room",
        "phase": "Postgame",
        "optional": true,
        "summary": "Optional AI partner in Multi Battles. Pokémon are selected from a facility roster; level is governed by the selected format (Lv.50 / Open Level), so there is no single fixed party.",
        "teams": [
          {
            "label": "Facility selection pool — NOT a simultaneous party; two selected, Lv.50 / Open Level format",
            "pokemon": [
              {
                "species": "Cloyster",
                "level": null,
                "item": "Leftovers",
                "moves": [
                  "Avalanche",
                  "Dive",
                  "Toxic",
                  "Protect"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Impish",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Articuno",
                "level": null,
                "item": "Icy Rock",
                "moves": [
                  "Blizzard",
                  "Fly",
                  "Roost",
                  "Hail"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Docile",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "-",
                  "Sp. Atk": "252",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Articuno",
                "level": null,
                "item": "Wacan Berry",
                "moves": [
                  "Avalanche",
                  "Aerial Ace",
                  "Facade",
                  "Reflect"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Brave",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Articuno",
                "level": null,
                "item": "Wise Glasses",
                "moves": [
                  "Ice Beam",
                  "Signal Beam",
                  "Ominous Wind",
                  "Water Pulse"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Modest",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "252",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Articuno",
                "level": null,
                "item": "Charti Berry",
                "moves": [
                  "Ice Beam",
                  "Air Cutter",
                  "AncientPower",
                  "Sheer Cold"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Modest",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "-",
                  "Sp. Atk": "252",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Umbreon",
                "level": null,
                "item": "Leftovers",
                "moves": [
                  "Payback",
                  "Confuse Ray",
                  "Curse",
                  "Baton Pass"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Careful",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Umbreon",
                "level": null,
                "item": "Leftovers",
                "moves": [
                  "Toxic",
                  "Mean Look",
                  "Double Team",
                  "Confuse Ray"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Impish",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Umbreon",
                "level": null,
                "item": "Lax Incense",
                "moves": [
                  "Faint Attack",
                  "Swagger",
                  "Psych Up",
                  "Screech"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Impish",
                "evs": {
                  "HP": "252",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Umbreon",
                "level": null,
                "item": "BrightPowder",
                "moves": [
                  "Payback",
                  "Trump Card",
                  "Curse",
                  "Moonlight"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Impish",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Steelix",
                "level": null,
                "item": "Passho Berry",
                "moves": [
                  "Earthquake",
                  "Iron Head",
                  "Crunch",
                  "Sandstorm"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Impish",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Steelix",
                "level": null,
                "item": "Shuca Berry",
                "moves": [
                  "Earthquake",
                  "Fire Fang",
                  "Thunder Fang",
                  "Ice Fang"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Adamant",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Steelix",
                "level": null,
                "item": "Iron Ball",
                "moves": [
                  "Gyro Ball",
                  "Payback",
                  "Swagger",
                  "Curse"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Relaxed",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Shuckle",
                "level": null,
                "item": "Lax Incense",
                "moves": [
                  "Stone Edge",
                  "Bug Bite",
                  "Swagger",
                  "Power Trick"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Impish",
                "evs": {
                  "HP": "170",
                  "Attack": "-",
                  "Defense": "170",
                  "Sp. Atk": "-",
                  "Sp. Def": "170",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Shuckle",
                "level": null,
                "item": "Grip Claw",
                "moves": [
                  "Wrap",
                  "Swagger",
                  "Attract",
                  "Toxic"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Careful",
                "evs": {
                  "HP": "170",
                  "Attack": "-",
                  "Defense": "170",
                  "Sp. Atk": "-",
                  "Sp. Def": "170",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Shuckle",
                "level": null,
                "item": "Lax Incense",
                "moves": [
                  "Gyro Ball",
                  "Substitute",
                  "Double Team",
                  "Power Trick"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Impish",
                "evs": {
                  "HP": "170",
                  "Attack": "-",
                  "Defense": "170",
                  "Sp. Atk": "-",
                  "Sp. Def": "170",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Shuckle",
                "level": null,
                "item": "Leftovers",
                "moves": [
                  "Toxic",
                  "Substitute",
                  "Double Team",
                  "Sandstorm"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Calm",
                "evs": {
                  "HP": "170",
                  "Attack": "-",
                  "Defense": "170",
                  "Sp. Atk": "-",
                  "Sp. Def": "170",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Skarmory",
                "level": null,
                "item": "Occa Berry",
                "moves": [
                  "Drill Peck",
                  "Steel Wing",
                  "Spikes",
                  "Roar"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Impish",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Skarmory",
                "level": null,
                "item": "Leftovers",
                "moves": [
                  "Fly",
                  "Toxic",
                  "Double Team",
                  "Roost"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Careful",
                "evs": {
                  "HP": "170",
                  "Attack": "-",
                  "Defense": "170",
                  "Sp. Atk": "-",
                  "Sp. Def": "170",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Skarmory",
                "level": null,
                "item": "Razor Claw",
                "moves": [
                  "Drill Peck",
                  "Slash",
                  "Payback",
                  "Night Slash"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Impish",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Skarmory",
                "level": null,
                "item": "Life Orb",
                "moves": [
                  "Brave Bird",
                  "Steel Wing",
                  "X-Scissor",
                  "Rock Slide"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Adamant",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Suicune",
                "level": null,
                "item": "Focus Sash",
                "moves": [
                  "Surf",
                  "Icy Wind",
                  "Ominous Wind",
                  "Mirror Coat"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Calm",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "-",
                  "Sp. Atk": "252",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Suicune",
                "level": null,
                "item": "King's Rock",
                "moves": [
                  "Waterfall",
                  "Ice Fang",
                  "Iron Head",
                  "Bite"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Jolly",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "-",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "252"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Suicune",
                "level": null,
                "item": "Lum Berry",
                "moves": [
                  "Hydro Pump",
                  "Blizzard",
                  "Shadow Ball",
                  "Hail"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Bold",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "252",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Suicune",
                "level": null,
                "item": "Wacan Berry",
                "moves": [
                  "Surf",
                  "Ice Beam",
                  "Extrasensory",
                  "Calm Mind"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Modest",
                "evs": {
                  "HP": "252",
                  "Attack": "-",
                  "Defense": "-",
                  "Sp. Atk": "252",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Claydol",
                "level": null,
                "item": "Kasib Berry",
                "moves": [
                  "Earthquake",
                  "Zen Headbutt",
                  "Grass Knot",
                  "Trick Room"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Brave",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Claydol",
                "level": null,
                "item": "Rindo Berry",
                "moves": [
                  "Earth Power",
                  "AncientPower",
                  "Signal Beam",
                  "Shadow Ball"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Modest",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "252",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Claydol",
                "level": null,
                "item": "Wise Glasses",
                "moves": [
                  "Earth Power",
                  "Psychic",
                  "Charge Beam",
                  "Ice Beam"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Modest",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "-",
                  "Sp. Atk": "252",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Metagross",
                "level": null,
                "item": "BrightPowder",
                "moves": [
                  "Zen Headbutt",
                  "Bullet Punch",
                  "Facade",
                  "Light Screen"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Adamant",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Metagross",
                "level": null,
                "item": "Wise Glasses",
                "moves": [
                  "Psychic",
                  "Flash Cannon",
                  "Shadow Ball",
                  "Sludge Bomb"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Modest",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "252",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Metagross",
                "level": null,
                "item": "Occa Berry",
                "moves": [
                  "Hammer Arm",
                  "ThunderPunch",
                  "Ice Punch",
                  "Aerial Ace"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Adamant",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Regirock",
                "level": null,
                "item": "Leftovers",
                "moves": [
                  "Rock Slide",
                  "Earthquake",
                  "Brick Break",
                  "Sandstorm"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Impish",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Regirock",
                "level": null,
                "item": "Razor Claw",
                "moves": [
                  "Fire Punch",
                  "ThunderPunch",
                  "Ice Punch",
                  "Drain Punch"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Adamant",
                "evs": {
                  "HP": "252",
                  "Attack": "252",
                  "Defense": "-",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Regirock",
                "level": null,
                "item": "Chesto Berry",
                "moves": [
                  "Stone Edge",
                  "Hammer Arm",
                  "Rest",
                  "Curse"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Careful",
                "evs": {
                  "HP": "252",
                  "Attack": "-",
                  "Defense": "-",
                  "Sp. Atk": "-",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Regice",
                "level": null,
                "item": "Lum Berry",
                "moves": [
                  "Ice Beam",
                  "Signal Beam",
                  "Charge Beam",
                  "Amnesia"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Modest",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "-",
                  "Sp. Atk": "252",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Regice",
                "level": null,
                "item": "Leftovers",
                "moves": [
                  "Avalanche",
                  "Hammer Arm",
                  "Double Team",
                  "Curse"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Impish",
                "evs": {
                  "HP": "252",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Regice",
                "level": null,
                "item": "Chesto Berry",
                "moves": [
                  "Ice Beam",
                  "Flash Cannon",
                  "AncientPower",
                  "Rest"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Bold",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "252",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Regice",
                "level": null,
                "item": "Shell Bell",
                "moves": [
                  "Ice Beam",
                  "Thunderbolt",
                  "Hyper Beam",
                  "Focus Blast"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Modest",
                "evs": {
                  "HP": "252",
                  "Attack": "-",
                  "Defense": "-",
                  "Sp. Atk": "252",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Registeel",
                "level": null,
                "item": "Lum Berry",
                "moves": [
                  "Flash Cannon",
                  "Thunderbolt",
                  "Thunder Wave",
                  "Amnesia"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Modest",
                "evs": {
                  "HP": "252",
                  "Attack": "-",
                  "Defense": "-",
                  "Sp. Atk": "252",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Registeel",
                "level": null,
                "item": "Leftovers",
                "moves": [
                  "Iron Head",
                  "Toxic",
                  "Double Team",
                  "Iron Defense"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Adamant",
                "evs": {
                  "HP": "170",
                  "Attack": "-",
                  "Defense": "170",
                  "Sp. Atk": "-",
                  "Sp. Def": "170",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Registeel",
                "level": null,
                "item": "Razor Claw",
                "moves": [
                  "Shadow Claw",
                  "Aerial Ace",
                  "ThunderPunch",
                  "Ice Punch"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Adamant",
                "evs": {
                  "HP": "252",
                  "Attack": "252",
                  "Defense": "-",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Registeel",
                "level": null,
                "item": "Shell Bell",
                "moves": [
                  "Iron Head",
                  "Hammer Arm",
                  "Earthquake",
                  "Curse"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Adamant",
                "evs": {
                  "HP": "170",
                  "Attack": "-",
                  "Defense": "170",
                  "Sp. Atk": "-",
                  "Sp. Def": "170",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Bastiodon",
                "level": null,
                "item": "Focus Band",
                "moves": [
                  "Iron Head",
                  "Stone Edge",
                  "Swagger",
                  "Taunt"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Impish",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Bastiodon",
                "level": null,
                "item": "Persim Berry",
                "moves": [
                  "AncientPower",
                  "Flamethrower",
                  "Thunderbolt",
                  "Ice Beam"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Modest",
                "evs": {
                  "HP": "252",
                  "Attack": "-",
                  "Defense": "-",
                  "Sp. Atk": "252",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Bastiodon",
                "level": null,
                "item": "Leftovers",
                "moves": [
                  "Iron Head",
                  "Fissure",
                  "Double Team",
                  "Iron Defense"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Careful",
                "evs": {
                  "HP": "252",
                  "Attack": "-",
                  "Defense": "-",
                  "Sp. Atk": "-",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Bastiodon",
                "level": null,
                "item": "Focus Sash",
                "moves": [
                  "Metal Burst",
                  "Stone Edge",
                  "Avalanche",
                  "Curse"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Adamant",
                "evs": {
                  "HP": "252",
                  "Attack": "252",
                  "Defense": "-",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Bronzong",
                "level": null,
                "item": "King's Rock",
                "moves": [
                  "Extrasensory",
                  "Iron Head",
                  "Rock Slide",
                  "Trick Room"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Impish",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Bronzong",
                "level": null,
                "item": "Lum Berry",
                "moves": [
                  "Dream Eater",
                  "Hypnosis",
                  "Signal Beam",
                  "Trick Room"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Calm",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Bronzong",
                "level": null,
                "item": "Leftovers",
                "moves": [
                  "Psychic",
                  "Shadow Ball",
                  "Charge Beam",
                  "Signal Beam"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Modest",
                "evs": {
                  "HP": "252",
                  "Attack": "-",
                  "Defense": "-",
                  "Sp. Atk": "252",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Hippowdon",
                "level": null,
                "item": "Persim Berry",
                "moves": [
                  "Earthquake",
                  "Crunch",
                  "Slack Off",
                  "Curse"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Impish",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Hippowdon",
                "level": null,
                "item": "Sitrus Berry",
                "moves": [
                  "Earthquake",
                  "Swagger",
                  "Sand Tomb",
                  "Yawn"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Impish",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Hippowdon",
                "level": null,
                "item": "White Herb",
                "moves": [
                  "Superpower",
                  "Fire Fang",
                  "Ice Fang",
                  "Fissure"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Adamant",
                "evs": {
                  "HP": "252",
                  "Attack": "252",
                  "Defense": "-",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Hippowdon",
                "level": null,
                "item": "Quick Claw",
                "moves": [
                  "Earthquake",
                  "Stone Edge",
                  "Crunch",
                  "Thunder Fang"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Adamant",
                "evs": {
                  "HP": "252",
                  "Attack": "252",
                  "Defense": "-",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Tangrowth",
                "level": null,
                "item": "Coba Berry",
                "moves": [
                  "Energy Ball",
                  "Sludge Bomb",
                  "Focus Blast",
                  "Sleep Powder"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Modest",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "252",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Tangrowth",
                "level": null,
                "item": "Big Root",
                "moves": [
                  "Giga Drain",
                  "Leech Seed",
                  "Toxic",
                  "Double Team"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Bold",
                "evs": {
                  "HP": "170",
                  "Attack": "-",
                  "Defense": "170",
                  "Sp. Atk": "170",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Tangrowth",
                "level": null,
                "item": "Heat Rock",
                "moves": [
                  "SolarBeam",
                  "Wring Out",
                  "Synthesis",
                  "Sunny Day"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Modest",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "252",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Tangrowth",
                "level": null,
                "item": "Lax Incense",
                "moves": [
                  "Power Whip",
                  "Earthquake",
                  "Aerial Ace",
                  "Brick Break"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Adamant",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Leafeon",
                "level": null,
                "item": "Scope Lens",
                "moves": [
                  "Leaf Blade",
                  "Aerial Ace",
                  "Double Team",
                  "Baton Pass"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Jolly",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "-",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "252"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Leafeon",
                "level": null,
                "item": "BrightPowder",
                "moves": [
                  "Leaf Blade",
                  "Last Resort",
                  "Curse",
                  "GrassWhistle"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Jolly",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "-",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "252"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Leafeon",
                "level": null,
                "item": "Heat Rock",
                "moves": [
                  "Leaf Blade",
                  "X-Scissor",
                  "Synthesis",
                  "Sunny Day"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Adamant",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Leafeon",
                "level": null,
                "item": "Quick Claw",
                "moves": [
                  "Leaf Blade",
                  "X-Scissor",
                  "Aerial Ace",
                  "Bite"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Adamant",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Probopass",
                "level": null,
                "item": "Cheri Berry",
                "moves": [
                  "AncientPower",
                  "Magnet Bomb",
                  "Thunder Wave",
                  "Protect"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Brave",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "-",
                  "Sp. Atk": "252",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Probopass",
                "level": null,
                "item": "Chople Berry",
                "moves": [
                  "Iron Head",
                  "Fire Punch",
                  "ThunderPunch",
                  "Ice Punch"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Adamant",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "-",
                  "Sp. Atk": "-",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Probopass",
                "level": null,
                "item": "Life Orb",
                "moves": [
                  "Flash Cannon",
                  "Power Gem",
                  "Earth Power",
                  "Thunderbolt"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Modest",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "-",
                  "Sp. Atk": "252",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Dusknoir",
                "level": null,
                "item": "Iron Ball",
                "moves": [
                  "Shadow Punch",
                  "Fling",
                  "Will-O-Wisp",
                  "Trick Room"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Brave",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "-",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Dusknoir",
                "level": null,
                "item": "Leftovers",
                "moves": [
                  "Curse",
                  "Pain Split",
                  "Confuse Ray",
                  "Attract"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Careful",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Dusknoir",
                "level": null,
                "item": "Scope Lens",
                "moves": [
                  "Shadow Punch",
                  "Fire Punch",
                  "ThunderPunch",
                  "Ice Punch"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Adamant",
                "evs": {
                  "HP": "-",
                  "Attack": "252",
                  "Defense": "-",
                  "Sp. Atk": "-",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              },
              {
                "species": "Dusknoir",
                "level": null,
                "item": "Muscle Band",
                "moves": [
                  "Shadow Punch",
                  "Earthquake",
                  "Brick Break",
                  "Rock Slide"
                ],
                "ability": "Not specified in published facility roster",
                "nature": "Adamant",
                "evs": {
                  "HP": "-",
                  "Attack": "-",
                  "Defense": "252",
                  "Sp. Atk": "-",
                  "Sp. Def": "252",
                  "Speed": "-"
                },
                "levelNote": "Format dependent"
              }
            ],
            "pool": true
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Partner battle",
          "Repeatable",
          "Optional",
          "Postgame",
          "Facility"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Buck",
          "https://bulbapedia.bulbagarden.net/wiki/Buck/Quotes"
        ]
      }
    ],
    "sourceNotes": "Original Platinum: partner Claydol is Lv.63 (Diamond/Pearl uses Lv.58). Battleground party is fixed. Battle Tower selection pool is provided with moves/items/natures/EVs; two are chosen for Multi Battles. The format controls levels, so null levels mean format-dependent, not Lv.0. Published roster does not specify the ability selection. These pool records are not extra appearances.",
    "images": [
      {
        "label": "Portrait (Diamond/Pearl era)",
        "path": "buck-portrait.png",
        "url": "https://archives.bulbagarden.net/media/upload/f/fa/Diamond_Pearl_Buck.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Buck"
      },
      {
        "label": "Battle sprite (Platinum)",
        "path": "buck-1.png",
        "url": "https://archives.bulbagarden.net/media/upload/9/9a/Spr_Pt_Buck.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Buck"
      },
      {
        "label": "Overworld sprite",
        "path": "buck-2.png",
        "url": "https://archives.bulbagarden.net/media/upload/d/d5/Buck_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Buck"
      },
      {
        "label": "Partner back sprite",
        "path": "buck-3.png",
        "url": "https://archives.bulbagarden.net/media/upload/5/51/DP_Buck_Back.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Buck"
      }
    ],
    "image": "buck-portrait.png"
  },
  {
    "id": "player",
    "name": "Dawn",
    "category": "Player",
    "role": "A playable protagonist in Pokémon Platinum; begins in Twinleaf Town and journeys through Sinnoh.",
    "personality": "A silent, player-controlled protagonist. The player chooses her name and guides her exploration, battles and Pokémon team.",
    "relationships": [
      "Johanna: mother",
      "Barry: childhood friend and rival",
      "Professor Rowan: Pokédex mentor",
      "Lucas: research companion when Dawn is playable",
      "Cynthia: mentor and Champion"
    ],
    "responsibilities": [
      "Player naming and gender branch",
      "All field movement sprites",
      "Starter choice",
      "Eight Badges and League",
      "Galactic / Distortion World resolution"
    ],
    "linkedChanges": [
      "Walking / running / cycling / surfing / fishing sprites",
      "Battle back sprite and trainer-card portrait",
      "Contest outfit / bag / intro graphics",
      "Gender-dependent dialogue and Dress/Tuxedo",
      "Name variable versus hardcoded name",
      "Andi, Rory and Percy starter slots"
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Dawn_(game)"
    ],
    "encounters": [
      {
        "id": "identity",
        "title": "Identity and home",
        "location": "New game → Twinleaf Town",
        "phase": "Main story",
        "optional": false,
        "summary": "The player chooses a protagonist and name, then begins at home in Twinleaf Town. Johanna is the player’s mother, and Barry is their childhood friend.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Dawn_(game)"
        ]
      },
      {
        "id": "starter",
        "title": "Starter selection",
        "location": "Route 201",
        "phase": "Main story",
        "optional": false,
        "summary": "Professor Rowan offers Turtwig, Chimchar or Piplup on Route 201. The player chooses one; Barry and the assistant’s Pokémon depend on that choice.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Dawn_(game)"
        ]
      },
      {
        "id": "journey",
        "title": "Journey and Badges",
        "location": "All eight Gym cities",
        "phase": "Main story",
        "optional": false,
        "summary": "Player participates in the whole main story, so an NPC-style appearance count is not meaningful.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Dawn_(game)"
        ]
      },
      {
        "id": "climax",
        "title": "Galactic and Giratina climax",
        "location": "Spear Pillar → Distortion World",
        "phase": "Main story",
        "optional": false,
        "summary": "Works with Barry then Cynthia; defeats Cyrus and resolves Giratina.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Dawn_(game)"
        ]
      },
      {
        "id": "champion",
        "title": "League and Hall of Fame",
        "location": "Pokémon League",
        "phase": "Main story",
        "optional": false,
        "summary": "Becomes Champion, then unlocks postgame exploration.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Dawn_(game)"
        ]
      },
      {
        "id": "postgame",
        "title": "Postgame and optional facilities",
        "location": "Battle Zone / other optional locations",
        "phase": "Postgame",
        "optional": true,
        "summary": "After the Hall of Fame, the player explores the Battle Zone, optional areas and battle facilities.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Dawn_(game)"
        ]
      }
    ],
    "sourceNotes": "The protagonist is continuously present. These six story milestones organise the journey rather than count individual appearances. Dawn is shown as the playable branch; Lucas is the alternative protagonist. The player’s team and levels depend on their choices.",
    "images": [
      {
        "label": "Original Dawn portrait (Platinum reference)",
        "path": "player-portrait.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/6/6f/Platinum_Dawn.png/300px-Platinum_Dawn.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Dawn_(game)"
      },
      {
        "label": "Original Dawn trainer sprite (Platinum)",
        "path": "player-battle.png",
        "url": "https://archives.bulbagarden.net/media/upload/d/d6/Spr_Pt_Dawn.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Dawn_(game)"
      },
      {
        "label": "Original Dawn walking sprite (Platinum)",
        "path": "player-overworld.png",
        "url": "https://archives.bulbagarden.net/media/upload/c/cf/DawnPtwalkdown.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Dawn_(game)"
      },
      {
        "label": "Original Dawn battle back sprite (Platinum)",
        "path": "player-back.png",
        "url": "https://archives.bulbagarden.net/media/upload/5/59/Pt_Dawn_Back.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Dawn_(game)"
      }
    ],
    "image": "player-portrait.png",
    "imageAlt": "Dawn official Pokémon Platinum artwork"
  },
  {
    "id": "roark",
    "name": "Roark",
    "category": "Gym Leaders",
    "role": "Rock specialist; first Gym Leader, Oreburgh City.",
    "personality": "Earnest young miner, proud of fossils and working safely; wants to live up to his father.",
    "relationships": "Byron is his father; the Underground Man is related to the family. Riley recommended Roark for the Gym.",
    "responsibilities": [
      "Coal Badge; TM76 Stealth Rock; permits Rock Smash."
    ],
    "linkedChanges": [
      "Mine introduction",
      "Underground tutorial",
      "Byron and Riley references",
      "badge and TM reward."
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Roark",
      "https://bulbapedia.bulbagarden.net/wiki/Roark/Quotes",
      "https://bulbapedia.bulbagarden.net/wiki/Villa",
      "https://www.serebii.net/platinum/toptrainercafe.shtml"
    ],
    "encounters": [
      {
        "id": "roark-mine",
        "title": "Oreburgh Mine introduction",
        "location": "Oreburgh Mine",
        "phase": "Main story",
        "optional": false,
        "summary": "Shows Rock Smash, introduces himself and returns to the Gym.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Roark",
          "https://bulbapedia.bulbagarden.net/wiki/Roark/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "roark-gym",
        "title": "First Gym battle",
        "location": "Oreburgh Gym",
        "phase": "Main story",
        "optional": false,
        "summary": "First badge challenge; unlocks Rock Smash use.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Geodude",
                "level": 12,
                "ability": "Rock Head",
                "item": "None",
                "moves": [
                  "Rock Throw",
                  "Stealth Rock"
                ]
              },
              {
                "species": "Onix",
                "level": 12,
                "ability": "Rock Head",
                "item": "None",
                "moves": [
                  "Rock Throw",
                  "Screech",
                  "Stealth Rock"
                ]
              },
              {
                "species": "Cranidos",
                "level": 14,
                "ability": "Mold Breaker",
                "item": "None",
                "moves": [
                  "Headbutt",
                  "Pursuit",
                  "Leer"
                ]
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Roark",
          "https://bulbapedia.bulbagarden.net/wiki/Roark/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "roark-underground",
        "title": "Underground welcome",
        "location": "Sinnoh Underground",
        "phase": "Main story",
        "optional": true,
        "summary": "Welcomes the player on their first Underground visit and explains features.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Optional",
          "Tutorial"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Roark",
          "https://bulbapedia.bulbagarden.net/wiki/Roark/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "roark-battleground",
        "title": "Daily Battleground rematch",
        "location": "Battleground, Survival Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Available after the Stark Mountain Galactic quest. Daily random selection; at most one battle per trainer per day.",
        "teams": [
          {
            "label": "Battleground rematch",
            "pokemon": [
              {
                "species": "Aerodactyl",
                "level": 62,
                "ability": "Rock Head",
                "item": "None",
                "moves": [
                  "Stone Edge",
                  "Earthquake",
                  "Dragon Claw",
                  "Aerial Ace"
                ]
              },
              {
                "species": "Probopass",
                "level": 61,
                "ability": "Sturdy",
                "item": "None",
                "moves": [
                  "Stone Edge",
                  "Earth Power",
                  "Discharge",
                  "Stealth Rock"
                ]
              },
              {
                "species": "Golem",
                "level": 61,
                "ability": "Rock Head",
                "item": "None",
                "moves": [
                  "Stone Edge",
                  "Earthquake",
                  "Brick Break",
                  "Flamethrower"
                ]
              },
              {
                "species": "Rampardos",
                "level": 63,
                "ability": "Mold Breaker",
                "item": "None",
                "moves": [
                  "Head Smash",
                  "Earthquake",
                  "Zen Headbutt",
                  "Avalanche"
                ]
              },
              {
                "species": "Tyranitar",
                "level": 65,
                "ability": "Sand Stream",
                "item": "Sitrus Berry",
                "moves": [
                  "Stone Edge",
                  "Crunch",
                  "Fire Fang",
                  "Aerial Ace"
                ]
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame",
          "Facility"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Roark",
          "https://bulbapedia.bulbagarden.net/wiki/Roark/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "roark-villa",
        "title": "Optional Villa visits",
        "location": "Player’s Villa, Resort Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Repeatable visiting dialogue; not a fixed number of encounters. ",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Roark",
          "https://bulbapedia.bulbagarden.net/wiki/Roark/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      }
    ],
    "image": "roark-artwork.png",
    "images": [
      {
        "label": "Original reference artwork",
        "path": "roark-artwork.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/8/86/Diamond_Pearl_Roark.png/110px-Diamond_Pearl_Roark.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Roark"
      },
      {
        "label": "Platinum battle sprite",
        "path": "roark-battle.png",
        "url": "https://archives.bulbagarden.net/media/upload/3/38/Spr_Pt_Roark.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Roark"
      },
      {
        "label": "Platinum overworld sprite",
        "path": "roark-overworld.png",
        "url": "https://archives.bulbagarden.net/media/upload/b/bc/Roark_IV_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Roark"
      }
    ],
    "sourceNotes": "Platinum only. Timeline counts group continuous scenes; repeatable dialogue and visits are listed separately, never treated as a finite appearance total. Minor ambient and TV dialogue is not counted as a physical appearance.",
    "appearanceCounts": {
      "scripted": 3,
      "battleEncounters": 1,
      "repeatableEncounterTypes": 2
    }
  },
  {
    "id": "gardenia",
    "name": "Gardenia",
    "category": "Gym Leaders",
    "role": "Grass specialist; second Gym Leader, Eterna City.",
    "personality": "Lively and enthusiastic about plants; uncomfortable with ghost stories.",
    "relationships": "Associated with Eterna Forest and the Old Chateau.",
    "responsibilities": [
      "Forest Badge; TM86 Grass Knot; permits Cut."
    ],
    "linkedChanges": [
      "Old Chateau warning",
      "Eterna Gym puzzle",
      "Forest Badge",
      "houseplant-triggered Villa dialogue."
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Gardenia",
      "https://bulbapedia.bulbagarden.net/wiki/Gardenia/Quotes",
      "https://bulbapedia.bulbagarden.net/wiki/Villa",
      "https://www.serebii.net/platinum/toptrainercafe.shtml"
    ],
    "encounters": [
      {
        "id": "gardenia-gym-intro",
        "title": "Gym introduction",
        "location": "Eterna Gym entrance",
        "phase": "Main story",
        "optional": false,
        "summary": "Introduces the Gym and its challengers before the Grass-type test.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Gardenia",
          "https://bulbapedia.bulbagarden.net/wiki/Gardenia/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "gardenia-gym",
        "title": "Second Gym battle",
        "location": "Eterna Gym",
        "phase": "Main story",
        "optional": false,
        "summary": "Grass team with weather and status moves; Cut permission follows victory.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Turtwig",
                "level": 20,
                "ability": "Overgrow",
                "item": "None",
                "moves": [
                  "Grass Knot",
                  "Razor Leaf",
                  "Sunny Day",
                  "Reflect"
                ]
              },
              {
                "species": "Cherrim",
                "level": 20,
                "ability": "Flower Gift",
                "item": "None",
                "moves": [
                  "Grass Knot",
                  "Magical Leaf",
                  "Leech Seed",
                  "Safeguard"
                ]
              },
              {
                "species": "Roserade",
                "level": 22,
                "ability": "Natural Cure",
                "item": "Sitrus Berry",
                "moves": [
                  "Grass Knot",
                  "Magical Leaf",
                  "Poison Sting",
                  "Stun Spore"
                ]
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Gardenia",
          "https://bulbapedia.bulbagarden.net/wiki/Gardenia/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "gardenia-chateau",
        "title": "Old Chateau warning",
        "location": "Eterna Forest / Old Chateau entrance",
        "phase": "Main story",
        "optional": true,
        "summary": "Warns about ghost stories at the mansion.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Optional"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Gardenia",
          "https://bulbapedia.bulbagarden.net/wiki/Gardenia/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "gardenia-battleground",
        "title": "Daily Battleground rematch",
        "location": "Battleground, Survival Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Available after the Stark Mountain Galactic quest. Daily random selection; at most one battle per trainer per day.",
        "teams": [
          {
            "label": "Battleground rematch",
            "pokemon": [
              {
                "species": "Jumpluff",
                "level": 61,
                "ability": "Chlorophyll",
                "item": "None",
                "moves": [
                  "Sunny Day",
                  "Toxic",
                  "Silver Wind",
                  "Bounce"
                ]
              },
              {
                "species": "Cherrim",
                "level": 62,
                "ability": "Flower Gift",
                "item": "None",
                "moves": [
                  "Toxic",
                  "Leech Seed",
                  "Sunny Day",
                  "SolarBeam"
                ]
              },
              {
                "species": "Bellossom",
                "level": 61,
                "ability": "Chlorophyll",
                "item": "None",
                "moves": [
                  "Sunny Day",
                  "Ingrain",
                  "Giga Drain",
                  "Drain Punch"
                ]
              },
              {
                "species": "Torterra",
                "level": 63,
                "ability": "Overgrow",
                "item": "None",
                "moves": [
                  "Wood Hammer",
                  "Earthquake",
                  "Stone Edge",
                  "Crunch"
                ]
              },
              {
                "species": "Roserade",
                "level": 65,
                "ability": "Natural Cure",
                "item": "Sitrus Berry",
                "moves": [
                  "Sludge Bomb",
                  "Shadow Ball",
                  "Hyper Beam",
                  "Leaf Storm"
                ]
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame",
          "Facility"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Gardenia",
          "https://bulbapedia.bulbagarden.net/wiki/Gardenia/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "gardenia-villa",
        "title": "Optional Villa visits",
        "location": "Player’s Villa, Resort Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Repeatable visiting dialogue; not a fixed number of encounters. Houseplant purchase guarantees a Gardenia visit.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Gardenia",
          "https://bulbapedia.bulbagarden.net/wiki/Gardenia/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      }
    ],
    "image": "gardenia-artwork.png",
    "images": [
      {
        "label": "Original reference artwork",
        "path": "gardenia-artwork.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/e/e9/Diamond_Pearl_Gardenia.png/144px-Diamond_Pearl_Gardenia.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Gardenia"
      },
      {
        "label": "Platinum battle sprite",
        "path": "gardenia-battle.png",
        "url": "https://archives.bulbagarden.net/media/upload/0/07/Spr_Pt_Gardenia.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Gardenia"
      },
      {
        "label": "Platinum overworld sprite",
        "path": "gardenia-overworld.png",
        "url": "https://archives.bulbagarden.net/media/upload/e/e7/Gardenia_IV_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Gardenia"
      }
    ],
    "sourceNotes": "Platinum only. Timeline counts group continuous scenes; repeatable dialogue and visits are listed separately, never treated as a finite appearance total. Minor ambient and TV dialogue is not counted as a physical appearance.",
    "appearanceCounts": {
      "scripted": 3,
      "battleEncounters": 1,
      "repeatableEncounterTypes": 2
    }
  },
  {
    "id": "fantina",
    "name": "Fantina",
    "category": "Gym Leaders",
    "role": "Ghost specialist; third Gym Leader, Hearthome City; Contest performer.",
    "personality": "Flamboyant dancer, confident performer; mixes French with English.",
    "relationships": "Competes in Super Contests with Drifblim (Loony); admires Dahlia.",
    "responsibilities": [
      "Relic Badge; TM65 Shadow Claw; permits Defog in Platinum."
    ],
    "linkedChanges": [
      "Contest Hall introduction",
      "Contest opponent identity",
      "third-Gym ordering",
      "Villa dialogue."
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Fantina",
      "https://bulbapedia.bulbagarden.net/wiki/Fantina/Quotes",
      "https://bulbapedia.bulbagarden.net/wiki/Villa",
      "https://www.serebii.net/platinum/toptrainercafe.shtml"
    ],
    "encounters": [
      {
        "id": "fantina-contest",
        "title": "Contest Hall introduction",
        "location": "Hearthome Contest Hall",
        "phase": "Main story",
        "optional": false,
        "summary": "Meeting Fantina here makes the Gym challenge available.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression",
          "Contest"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Fantina",
          "https://bulbapedia.bulbagarden.net/wiki/Fantina/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "fantina-gym",
        "title": "Third Gym battle",
        "location": "Hearthome Gym",
        "phase": "Main story",
        "optional": false,
        "summary": "Ghost challenge; Relic Badge enables Defog.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Duskull",
                "level": 24,
                "ability": "Levitate",
                "item": "None",
                "moves": [
                  "Will-O-Wisp",
                  "Future Sight",
                  "Shadow Sneak",
                  "Pursuit"
                ]
              },
              {
                "species": "Haunter",
                "level": 24,
                "ability": "Levitate",
                "item": "None",
                "moves": [
                  "Shadow Claw",
                  "Sucker Punch",
                  "Confuse Ray",
                  "Hypnosis"
                ]
              },
              {
                "species": "Mismagius",
                "level": 26,
                "ability": "Levitate",
                "item": "Sitrus Berry",
                "moves": [
                  "Shadow Ball",
                  "Psybeam",
                  "Magical Leaf",
                  "Confuse Ray"
                ]
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Fantina",
          "https://bulbapedia.bulbagarden.net/wiki/Fantina/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "fantina-super-contests",
        "title": "Optional Super Contest opponent",
        "location": "Hearthome Contest Hall",
        "phase": "Main story",
        "optional": true,
        "summary": "Can appear as an opponent using her Drifblim, Loony. Contest entries are not trainer-battle teams; no battle level applies.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Contest"
        ],
        "featuredPokemon": [
          "Drifblim"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Fantina",
          "https://bulbapedia.bulbagarden.net/wiki/Fantina/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "fantina-battleground",
        "title": "Daily Battleground rematch",
        "location": "Battleground, Survival Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Available after the Stark Mountain Galactic quest. Daily random selection; at most one battle per trainer per day.",
        "teams": [
          {
            "label": "Battleground rematch",
            "pokemon": [
              {
                "species": "Banette",
                "level": 61,
                "ability": "Insomnia",
                "item": "None",
                "moves": [
                  "Shadow Claw",
                  "Faint Attack",
                  "Thunderbolt",
                  "Will-O-Wisp"
                ]
              },
              {
                "species": "Mismagius",
                "level": 63,
                "ability": "Levitate",
                "item": "None",
                "moves": [
                  "Shadow Ball",
                  "Thunderbolt",
                  "Psychic",
                  "Magical Leaf"
                ]
              },
              {
                "species": "Drifblim",
                "level": 61,
                "ability": "Aftermath",
                "item": "None",
                "moves": [
                  "Psychic",
                  "Silver Wind",
                  "Ominous Wind",
                  "Baton Pass"
                ]
              },
              {
                "species": "Dusknoir",
                "level": 62,
                "ability": "Pressure",
                "item": "None",
                "moves": [
                  "Shadow Punch",
                  "Rock Slide",
                  "Double Team",
                  "Protect"
                ]
              },
              {
                "species": "Gengar",
                "level": 65,
                "ability": "Levitate",
                "item": "Sitrus Berry",
                "moves": [
                  "Focus Blast",
                  "Thunder",
                  "Shadow Ball",
                  "Psychic"
                ]
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame",
          "Facility"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Fantina",
          "https://bulbapedia.bulbagarden.net/wiki/Fantina/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "fantina-villa",
        "title": "Optional Villa visits",
        "location": "Player’s Villa, Resort Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Repeatable visiting dialogue; not a fixed number of encounters. ",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Fantina",
          "https://bulbapedia.bulbagarden.net/wiki/Fantina/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      }
    ],
    "image": "fantina-artwork.png",
    "images": [
      {
        "label": "Original reference artwork",
        "path": "fantina-artwork.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/e/ef/Diamond_Pearl_Fantina.png/199px-Diamond_Pearl_Fantina.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Fantina"
      },
      {
        "label": "Platinum battle sprite",
        "path": "fantina-battle.png",
        "url": "https://archives.bulbagarden.net/media/upload/3/33/Spr_Pt_Fantina.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Fantina"
      },
      {
        "label": "Platinum overworld sprite",
        "path": "fantina-overworld.png",
        "url": "https://archives.bulbagarden.net/media/upload/0/0c/Fantina_IV_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Fantina"
      }
    ],
    "sourceNotes": "Platinum only. Timeline counts group continuous scenes; repeatable dialogue and visits are listed separately, never treated as a finite appearance total. Minor ambient and TV dialogue is not counted as a physical appearance.",
    "appearanceCounts": {
      "scripted": 2,
      "battleEncounters": 1,
      "repeatableEncounterTypes": 3
    }
  },
  {
    "id": "maylene",
    "name": "Maylene",
    "category": "Gym Leaders",
    "role": "Fighting specialist; fourth Gym Leader, Veilstone City.",
    "personality": "Modest about her strength, devoted to physical training; walks barefoot through snow.",
    "relationships": "Her father visits the Game Corner; she admires and trains with Candice.",
    "responsibilities": [
      "Cobble Badge; TM60 Drain Punch; permits Fly."
    ],
    "linkedChanges": [
      "Wake’s references to Maylene",
      "Route 217 and Snowpoint scenes",
      "Candice relationship",
      "family and Villa dialogue."
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Maylene",
      "https://bulbapedia.bulbagarden.net/wiki/Maylene/Quotes",
      "https://bulbapedia.bulbagarden.net/wiki/Villa",
      "https://www.serebii.net/platinum/toptrainercafe.shtml"
    ],
    "encounters": [
      {
        "id": "maylene-gym",
        "title": "Fourth Gym battle",
        "location": "Veilstone Gym",
        "phase": "Main story",
        "optional": false,
        "summary": "Fighting challenge; Fly permission follows victory.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Meditite",
                "level": 28,
                "ability": "Pure Power",
                "item": "None",
                "moves": [
                  "Drain Punch",
                  "Confusion",
                  "Fake Out",
                  "Rock Tomb"
                ]
              },
              {
                "species": "Machoke",
                "level": 29,
                "ability": "Guts",
                "item": "None",
                "moves": [
                  "Karate Chop",
                  "Strength",
                  "Focus Energy",
                  "Rock Tomb"
                ]
              },
              {
                "species": "Lucario",
                "level": 32,
                "ability": "Steadfast",
                "item": "None",
                "moves": [
                  "Drain Punch",
                  "Metal Claw",
                  "Bone Rush",
                  "Force Palm"
                ]
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Maylene",
          "https://bulbapedia.bulbagarden.net/wiki/Maylene/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "maylene-snow-route",
        "title": "Snow training encounter",
        "location": "Route 217 entrance",
        "phase": "Main story",
        "optional": false,
        "summary": "Walks toward Snowpoint instead of flying, training herself in the cold.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Maylene",
          "https://bulbapedia.bulbagarden.net/wiki/Maylene/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "maylene-snow-center",
        "title": "Visits Candice",
        "location": "Snowpoint Pokémon Center",
        "phase": "Main story",
        "optional": true,
        "summary": "Talks about admiring Candice and training with her.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Optional"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Maylene",
          "https://bulbapedia.bulbagarden.net/wiki/Maylene/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "maylene-battleground",
        "title": "Daily Battleground rematch",
        "location": "Battleground, Survival Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Available after the Stark Mountain Galactic quest. Daily random selection; at most one battle per trainer per day.",
        "teams": [
          {
            "label": "Battleground rematch",
            "pokemon": [
              {
                "species": "Hitmontop",
                "level": 62,
                "ability": "Intimidate",
                "item": "None",
                "moves": [
                  "Fake Out",
                  "Triple Kick",
                  "Aerial Ace",
                  "Quick Attack"
                ]
              },
              {
                "species": "Medicham",
                "level": 63,
                "ability": "Pure Power",
                "item": "None",
                "moves": [
                  "Hi Jump Kick",
                  "ThunderPunch",
                  "Ice Punch",
                  "Fire Punch"
                ]
              },
              {
                "species": "Breloom",
                "level": 62,
                "ability": "Effect Spore",
                "item": "None",
                "moves": [
                  "Spore",
                  "Mach Punch",
                  "Seed Bomb",
                  "Stone Edge"
                ]
              },
              {
                "species": "Machamp",
                "level": 64,
                "ability": "Guts",
                "item": "None",
                "moves": [
                  "Cross Chop",
                  "Rock Climb",
                  "Stone Edge",
                  "Earthquake"
                ]
              },
              {
                "species": "Lucario",
                "level": 66,
                "ability": "Steadfast",
                "item": "None",
                "moves": [
                  "Close Combat",
                  "ExtremeSpeed",
                  "Drain Punch",
                  "Bone Rush"
                ]
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame",
          "Facility"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Maylene",
          "https://bulbapedia.bulbagarden.net/wiki/Maylene/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "maylene-villa",
        "title": "Optional Villa visits",
        "location": "Player’s Villa, Resort Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Repeatable visiting dialogue; not a fixed number of encounters. Can appear together with Candice.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Maylene",
          "https://bulbapedia.bulbagarden.net/wiki/Maylene/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      }
    ],
    "image": "maylene-artwork.png",
    "images": [
      {
        "label": "Original reference artwork",
        "path": "maylene-artwork.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/1/15/Diamond_Pearl_Maylene.png/193px-Diamond_Pearl_Maylene.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Maylene"
      },
      {
        "label": "Platinum battle sprite",
        "path": "maylene-battle.png",
        "url": "https://archives.bulbagarden.net/media/upload/5/52/Spr_Pt_Maylene.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Maylene"
      },
      {
        "label": "Platinum overworld sprite",
        "path": "maylene-overworld.png",
        "url": "https://archives.bulbagarden.net/media/upload/6/61/Maylene_IV_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Maylene"
      }
    ],
    "sourceNotes": "Platinum only. Timeline counts group continuous scenes; repeatable dialogue and visits are listed separately, never treated as a finite appearance total. Minor ambient and TV dialogue is not counted as a physical appearance.",
    "appearanceCounts": {
      "scripted": 3,
      "battleEncounters": 1,
      "repeatableEncounterTypes": 2
    }
  },
  {
    "id": "crasher-wake",
    "name": "Crasher Wake",
    "category": "Gym Leaders",
    "role": "Water specialist; fifth Gym Leader, Pastoria City; wrestler.",
    "personality": "Boisterous and generous; sings his theme, values entertaining battles.",
    "relationships": "Barry wants him as a mentor; meets Maylene and appears around Buck’s mountain quest.",
    "responsibilities": [
      "Fen Badge; TM55 Brine; permits Surf; responds to Galactic’s Marsh bomb."
    ],
    "linkedChanges": [
      "Veilstone scene",
      "Barry mentor dialogue",
      "Great Marsh explosion",
      "Route 226 and Stark Mountain dialogue",
      "TV wrestling references."
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake",
      "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake/Quotes",
      "https://bulbapedia.bulbagarden.net/wiki/Villa",
      "https://www.serebii.net/platinum/toptrainercafe.shtml"
    ],
    "encounters": [
      {
        "id": "crasher-wake-veilstone",
        "title": "Meets you beside Maylene",
        "location": "Veilstone Gym entrance",
        "phase": "Main story",
        "optional": false,
        "summary": "Introduces himself to you and the professor’s assistant outside Maylene’s Gym; praises Maylene’s skill.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake",
          "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "crasher-wake-gym",
        "title": "Fifth Gym battle",
        "location": "Pastoria Gym",
        "phase": "Main story",
        "optional": false,
        "summary": "Water challenge; Fen Badge enables Surf.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Gyarados",
                "level": 33,
                "ability": "Intimidate",
                "item": "None",
                "moves": [
                  "Brine",
                  "Waterfall",
                  "Bite",
                  "Twister"
                ]
              },
              {
                "species": "Quagsire",
                "level": 34,
                "ability": "Damp",
                "item": "None",
                "moves": [
                  "Water Pulse",
                  "Mud Shot",
                  "Rock Tomb",
                  "Yawn"
                ]
              },
              {
                "species": "Floatzel",
                "level": 37,
                "ability": "Swift Swim",
                "item": "Sitrus Berry",
                "moves": [
                  "Brine",
                  "Crunch",
                  "Ice Fang",
                  "Aqua Jet"
                ]
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake",
          "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "crasher-wake-marsh",
        "title": "Barry’s mentor and Galactic bomb incident",
        "location": "Pastoria Gym / Great Marsh entrance",
        "phase": "Main story",
        "optional": false,
        "summary": "Barry wants Wake as a mentor. Wake responds to the explosion while you pursue the fleeing grunt.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake",
          "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "crasher-wake-zone",
        "title": "Mountain-route conversation with Barry",
        "location": "Route 227",
        "phase": "Postgame",
        "optional": false,
        "summary": "Discusses Barry’s wish to train, warns about Stark Mountain’s strong wild Pokémon, then leaves to prepare for a tournament.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake",
          "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "crasher-wake-battleground",
        "title": "Daily Battleground rematch",
        "location": "Battleground, Survival Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Available after the Stark Mountain Galactic quest. Daily random selection; at most one battle per trainer per day.",
        "teams": [
          {
            "label": "Battleground rematch",
            "pokemon": [
              {
                "species": "Sharpedo",
                "level": 61,
                "ability": "Rough Skin",
                "item": "None",
                "moves": [
                  "Night Slash",
                  "Slash",
                  "Aqua Jet",
                  "Endure"
                ]
              },
              {
                "species": "Quagsire",
                "level": 61,
                "ability": "Damp",
                "item": "None",
                "moves": [
                  "Surf",
                  "Earthquake",
                  "Stone Edge",
                  "Yawn"
                ]
              },
              {
                "species": "Floatzel",
                "level": 63,
                "ability": "Swift Swim",
                "item": "None",
                "moves": [
                  "Brine",
                  "Crunch",
                  "Ice Fang",
                  "Aqua Jet"
                ]
              },
              {
                "species": "Gyarados",
                "level": 62,
                "ability": "Intimidate",
                "item": "None",
                "moves": [
                  "Bite",
                  "Avalanche",
                  "Aqua Tail",
                  "Giga Impact"
                ]
              },
              {
                "species": "Ludicolo",
                "level": 65,
                "ability": "Swift Swim",
                "item": "Sitrus Berry",
                "moves": [
                  "Surf",
                  "Energy Ball",
                  "Ice Beam",
                  "Focus Blast"
                ]
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame",
          "Facility"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake",
          "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "crasher-wake-villa",
        "title": "Optional Villa visits",
        "location": "Player’s Villa, Resort Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Repeatable visiting dialogue; not a fixed number of encounters. ",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake",
          "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      }
    ],
    "image": "crasher_wake-artwork.png",
    "images": [
      {
        "label": "Original reference artwork",
        "path": "crasher_wake-artwork.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/a/a1/Diamond_Pearl_Crasher_Wake.png/205px-Diamond_Pearl_Crasher_Wake.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake"
      },
      {
        "label": "Platinum battle sprite",
        "path": "crasher_wake-battle.png",
        "url": "https://archives.bulbagarden.net/media/upload/0/06/Spr_Pt_Crasher_Wake.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake"
      },
      {
        "label": "Platinum overworld sprite",
        "path": "crasher_wake-overworld.png",
        "url": "https://archives.bulbagarden.net/media/upload/3/3b/Crasher_Wake_IV_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake"
      }
    ],
    "sourceNotes": "Platinum only. Timeline counts group continuous scenes; repeatable dialogue and visits are listed separately, never treated as a finite appearance total. Minor ambient and TV dialogue is not counted as a physical appearance.",
    "appearanceCounts": {
      "scripted": 4,
      "battleEncounters": 1,
      "repeatableEncounterTypes": 2
    }
  },
  {
    "id": "byron",
    "name": "Byron",
    "category": "Gym Leaders",
    "role": "Steel specialist; sixth Gym Leader, Canalave City.",
    "personality": "Hearty older miner; proud but sometimes awkward about his son’s growing independence.",
    "relationships": "Roark’s father; connected to Riley and the Underground Man.",
    "responsibilities": [
      "Mine Badge; TM91 Flash Cannon; permits Strength; Metal Coat gift."
    ],
    "linkedChanges": [
      "Roark family references",
      "Iron Island house and Metal Coat",
      "Riley dialogue",
      "Villa and paired Battleground dialogue."
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Byron",
      "https://bulbapedia.bulbagarden.net/wiki/Byron/Quotes",
      "https://bulbapedia.bulbagarden.net/wiki/Villa",
      "https://www.serebii.net/platinum/toptrainercafe.shtml"
    ],
    "encounters": [
      {
        "id": "byron-gym",
        "title": "Sixth Gym battle",
        "location": "Canalave Gym",
        "phase": "Main story",
        "optional": false,
        "summary": "Steel challenge; Mine Badge enables Strength.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Magneton",
                "level": 37,
                "ability": "Magnet Pull",
                "item": "None",
                "moves": [
                  "Flash Cannon",
                  "Thunderbolt",
                  "Tri Attack",
                  "Metal Sound"
                ]
              },
              {
                "species": "Steelix",
                "level": 38,
                "ability": "Rock Head",
                "item": "None",
                "moves": [
                  "Flash Cannon",
                  "Earthquake",
                  "Ice Fang",
                  "Sandstorm"
                ]
              },
              {
                "species": "Bastiodon",
                "level": 41,
                "ability": "Sturdy",
                "item": "Sitrus Berry",
                "moves": [
                  "Metal Burst",
                  "Stone Edge",
                  "Iron Defense",
                  "Taunt"
                ]
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Byron",
          "https://bulbapedia.bulbagarden.net/wiki/Byron/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "byron-metal-coat",
        "title": "Metal Coat gift",
        "location": "Iron Island house",
        "phase": "Postgame",
        "optional": true,
        "summary": "After the National Pokédex, reflects on Roark and gives a Metal Coat.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Item / HM",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Byron",
          "https://bulbapedia.bulbagarden.net/wiki/Byron/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "byron-battleground",
        "title": "Daily Battleground rematch",
        "location": "Battleground, Survival Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Available after the Stark Mountain Galactic quest. Daily random selection; at most one battle per trainer per day.",
        "teams": [
          {
            "label": "Battleground rematch",
            "pokemon": [
              {
                "species": "Skarmory",
                "level": 61,
                "ability": "Keen Eye",
                "item": "None",
                "moves": [
                  "Drill Peck",
                  "Night Slash",
                  "Rock Tomb",
                  "Stealth Rock"
                ]
              },
              {
                "species": "Magnezone",
                "level": 62,
                "ability": "Magnet Pull",
                "item": "None",
                "moves": [
                  "Thunderbolt",
                  "Flash Cannon",
                  "Thunder Wave",
                  "Supersonic"
                ]
              },
              {
                "species": "Steelix",
                "level": 61,
                "ability": "Rock Head",
                "item": "None",
                "moves": [
                  "Gyro Ball",
                  "Ice Fang",
                  "DragonBreath",
                  "Sandstorm"
                ]
              },
              {
                "species": "Bastiodon",
                "level": 63,
                "ability": "Sturdy",
                "item": "None",
                "moves": [
                  "Metal Burst",
                  "AncientPower",
                  "Iron Defense",
                  "Rest"
                ]
              },
              {
                "species": "Aggron",
                "level": 65,
                "ability": "Sturdy",
                "item": "Sitrus Berry",
                "moves": [
                  "Metal Burst",
                  "Stone Edge",
                  "Earthquake",
                  "Avalanche"
                ]
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame",
          "Facility"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Byron",
          "https://bulbapedia.bulbagarden.net/wiki/Byron/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "byron-villa",
        "title": "Optional Villa visits",
        "location": "Player’s Villa, Resort Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Repeatable visiting dialogue; not a fixed number of encounters. ",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Byron",
          "https://bulbapedia.bulbagarden.net/wiki/Byron/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      }
    ],
    "image": "byron-artwork.png",
    "images": [
      {
        "label": "Original reference artwork",
        "path": "byron-artwork.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/2/25/Diamond_Pearl_Byron.png/120px-Diamond_Pearl_Byron.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Byron"
      },
      {
        "label": "Platinum battle sprite",
        "path": "byron-battle.png",
        "url": "https://archives.bulbagarden.net/media/upload/f/f0/Spr_Pt_Byron.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Byron"
      },
      {
        "label": "Platinum overworld sprite",
        "path": "byron-overworld.png",
        "url": "https://archives.bulbagarden.net/media/upload/7/78/Byron_IV_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Byron"
      }
    ],
    "sourceNotes": "Platinum only. Timeline counts group continuous scenes; repeatable dialogue and visits are listed separately, never treated as a finite appearance total. Minor ambient and TV dialogue is not counted as a physical appearance.",
    "appearanceCounts": {
      "scripted": 2,
      "battleEncounters": 1,
      "repeatableEncounterTypes": 2
    }
  },
  {
    "id": "candice",
    "name": "Candice",
    "category": "Gym Leaders",
    "role": "Ice specialist; seventh Gym Leader, Snowpoint City.",
    "personality": "Warm, friendly and determined; emphasises focus and friendship before battle.",
    "relationships": "Maylene admires her and helps her train against Fighting types.",
    "responsibilities": [
      "Icicle Badge; TM72 Avalanche; permits Rock Climb; authorises Snowpoint Temple entry."
    ],
    "linkedChanges": [
      "Maylene training scenes",
      "Snowpoint Temple permission",
      "Villa visits",
      "seventh badge and reward."
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Candice",
      "https://bulbapedia.bulbagarden.net/wiki/Candice/Quotes",
      "https://bulbapedia.bulbagarden.net/wiki/Villa",
      "https://www.serebii.net/platinum/toptrainercafe.shtml"
    ],
    "encounters": [
      {
        "id": "candice-gym",
        "title": "Seventh Gym battle",
        "location": "Snowpoint Gym",
        "phase": "Main story",
        "optional": false,
        "summary": "Ice challenge; Icicle Badge enables Rock Climb.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Sneasel",
                "level": 40,
                "ability": "Keen Eye",
                "item": "None",
                "moves": [
                  "Faint Attack",
                  "Ice Shard",
                  "Slash",
                  "Aerial Ace"
                ]
              },
              {
                "species": "Piloswine",
                "level": 40,
                "ability": "Oblivious",
                "item": "None",
                "moves": [
                  "Hail",
                  "Earthquake",
                  "Stone Edge",
                  "Avalanche"
                ]
              },
              {
                "species": "Abomasnow",
                "level": 42,
                "ability": "Snow Warning",
                "item": "None",
                "moves": [
                  "Wood Hammer",
                  "Focus Blast",
                  "Water Pulse",
                  "Avalanche"
                ]
              },
              {
                "species": "Froslass",
                "level": 44,
                "ability": "Snow Cloak",
                "item": "Sitrus Berry",
                "moves": [
                  "Shadow Ball",
                  "Double Team",
                  "Psychic",
                  "Blizzard"
                ]
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Candice",
          "https://bulbapedia.bulbagarden.net/wiki/Candice/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "candice-temple",
        "title": "Snowpoint Temple permission",
        "location": "Snowpoint Temple entrance",
        "phase": "Postgame",
        "optional": true,
        "summary": "After the National Pokédex, tells the guard to allow you inside.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Candice",
          "https://bulbapedia.bulbagarden.net/wiki/Candice/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "candice-battleground",
        "title": "Daily Battleground rematch",
        "location": "Battleground, Survival Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Available after the Stark Mountain Galactic quest. Daily random selection; at most one battle per trainer per day.",
        "teams": [
          {
            "label": "Battleground rematch",
            "pokemon": [
              {
                "species": "Weavile",
                "level": 62,
                "ability": "Pressure",
                "item": "None",
                "moves": [
                  "Faint Attack",
                  "Slash",
                  "Taunt",
                  "Avalanche"
                ]
              },
              {
                "species": "Mamoswine",
                "level": 61,
                "ability": "Oblivious",
                "item": "None",
                "moves": [
                  "Hail",
                  "Earthquake",
                  "AncientPower",
                  "Avalanche"
                ]
              },
              {
                "species": "Abomasnow",
                "level": 61,
                "ability": "Snow Warning",
                "item": "None",
                "moves": [
                  "Wood Hammer",
                  "Ingrain",
                  "GrassWhistle",
                  "Avalanche"
                ]
              },
              {
                "species": "Froslass",
                "level": 63,
                "ability": "Snow Cloak",
                "item": "None",
                "moves": [
                  "Hail",
                  "Ominous Wind",
                  "Confuse Ray",
                  "Blizzard"
                ]
              },
              {
                "species": "Glaceon",
                "level": 65,
                "ability": "Snow Cloak",
                "item": "Sitrus Berry",
                "moves": [
                  "Blizzard",
                  "Shadow Ball",
                  "Water Pulse",
                  "Mirror Coat"
                ]
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame",
          "Facility"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Candice",
          "https://bulbapedia.bulbagarden.net/wiki/Candice/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "candice-villa",
        "title": "Optional Villa visits",
        "location": "Player’s Villa, Resort Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Repeatable visiting dialogue; not a fixed number of encounters. Can appear together with Maylene.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Candice",
          "https://bulbapedia.bulbagarden.net/wiki/Candice/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      }
    ],
    "image": "candice-artwork.png",
    "images": [
      {
        "label": "Original reference artwork",
        "path": "candice-artwork.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/1/1a/Diamond_Pearl_Candice.png/128px-Diamond_Pearl_Candice.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Candice"
      },
      {
        "label": "Platinum battle sprite",
        "path": "candice-battle.png",
        "url": "https://archives.bulbagarden.net/media/upload/8/88/Spr_Pt_Candice.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Candice"
      },
      {
        "label": "Platinum overworld sprite",
        "path": "candice-overworld.png",
        "url": "https://archives.bulbagarden.net/media/upload/c/ce/Candice_IV_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Candice"
      }
    ],
    "sourceNotes": "Platinum only. Timeline counts group continuous scenes; repeatable dialogue and visits are listed separately, never treated as a finite appearance total. Minor ambient and TV dialogue is not counted as a physical appearance.",
    "appearanceCounts": {
      "scripted": 2,
      "battleEncounters": 1,
      "repeatableEncounterTypes": 2
    }
  },
  {
    "id": "volkner",
    "name": "Volkner",
    "category": "Gym Leaders",
    "role": "Electric specialist; eighth Gym Leader, Sunyshore City.",
    "personality": "Talented but bored by weak challengers; regains enthusiasm after your battle.",
    "relationships": "Flint is his friend and Multi Battle partner.",
    "responsibilities": [
      "Beacon Badge; TM57 Charge Beam; permits Waterfall; all traded Pokémon obey."
    ],
    "linkedChanges": [
      "Flint’s Sunyshore scenes",
      "lighthouse and blackout dialogue",
      "Fight Area battle",
      "Villa conversations."
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Volkner",
      "https://bulbapedia.bulbagarden.net/wiki/Volkner/Quotes",
      "https://bulbapedia.bulbagarden.net/wiki/Villa",
      "https://www.serebii.net/platinum/toptrainercafe.shtml"
    ],
    "encounters": [
      {
        "id": "volkner-lighthouse",
        "title": "Finds a worthy challenger",
        "location": "Vista Lighthouse, Sunyshore",
        "phase": "Main story",
        "optional": false,
        "summary": "Agrees to return to his Gym after Flint directs you to him.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Volkner",
          "https://bulbapedia.bulbagarden.net/wiki/Volkner/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "volkner-gym",
        "title": "Eighth Gym battle",
        "location": "Sunyshore Gym",
        "phase": "Main story",
        "optional": false,
        "summary": "Battle rekindles his interest; Beacon Badge enables Waterfall.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Jolteon",
                "level": 46,
                "ability": "Volt Absorb",
                "item": "None",
                "moves": [
                  "Charge Beam",
                  "Thunder Wave",
                  "Iron Tail",
                  "Quick Attack"
                ]
              },
              {
                "species": "Raichu",
                "level": 46,
                "ability": "Static",
                "item": "None",
                "moves": [
                  "Charge Beam",
                  "Signal Beam",
                  "Focus Blast",
                  "Quick Attack"
                ]
              },
              {
                "species": "Luxray",
                "level": 48,
                "ability": "Rivalry",
                "item": "None",
                "moves": [
                  "Thunder Fang",
                  "Ice Fang",
                  "Fire Fang",
                  "Crunch"
                ]
              },
              {
                "species": "Electivire",
                "level": 50,
                "ability": "Motor Drive",
                "item": "Sitrus Berry",
                "moves": [
                  "ThunderPunch",
                  "Fire Punch",
                  "Giga Impact",
                  "Quick Attack"
                ]
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Item / HM",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Volkner",
          "https://bulbapedia.bulbagarden.net/wiki/Volkner/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "volkner-frontier",
        "title": "Fight Area Multi Battle with Flint",
        "location": "Fight Area / Battle Frontier entrance",
        "phase": "Postgame",
        "optional": false,
        "summary": "You and Barry battle Volkner and Flint together.",
        "teams": [
          {
            "label": "Volkner — opponent team",
            "pokemon": [
              {
                "species": "Luxray",
                "level": 56,
                "ability": "Rivalry",
                "item": "None",
                "moves": [
                  "Ice Fang",
                  "Thunder Fang",
                  "Crunch",
                  "Fire Fang"
                ]
              },
              {
                "species": "Jolteon",
                "level": 56,
                "ability": "Volt Absorb",
                "item": "None",
                "moves": [
                  "Pin Missile",
                  "Charge Beam",
                  "Double Kick",
                  "Quick Attack"
                ]
              },
              {
                "species": "Electivire",
                "level": 58,
                "ability": "Motor Drive",
                "item": "Sitrus Berry",
                "moves": [
                  "ThunderPunch",
                  "Fire Punch",
                  "Brick Break",
                  "Giga Impact"
                ]
              }
            ]
          },
          {
            "label": "Flint — other opponent",
            "pokemon": [
              {
                "species": "Houndoom",
                "level": 56,
                "ability": "Flash Fire",
                "item": "None",
                "moves": [
                  "Flamethrower",
                  "Sludge Bomb",
                  "Dark Pulse",
                  "Sunny Day"
                ]
              },
              {
                "species": "Flareon",
                "level": 56,
                "ability": "Flash Fire",
                "item": "None",
                "moves": [
                  "Overheat",
                  "Giga Impact",
                  "Quick Attack",
                  "Will-O-Wisp"
                ]
              },
              {
                "species": "Magmortar",
                "level": 58,
                "ability": "Flame Body",
                "item": "Sitrus Berry",
                "moves": [
                  "Flamethrower",
                  "Thunderbolt",
                  "SolarBeam",
                  "Hyper Beam"
                ]
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Volkner",
          "https://bulbapedia.bulbagarden.net/wiki/Volkner/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "volkner-battleground",
        "title": "Daily Battleground rematch",
        "location": "Battleground, Survival Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Available after the Stark Mountain Galactic quest. Daily random selection; at most one battle per trainer per day.",
        "teams": [
          {
            "label": "Battleground rematch",
            "pokemon": [
              {
                "species": "Jolteon",
                "level": 61,
                "ability": "Volt Absorb",
                "item": "None",
                "moves": [
                  "Charge Beam",
                  "Double Kick",
                  "Pin Missile",
                  "Quick Attack"
                ]
              },
              {
                "species": "Raichu",
                "level": 61,
                "ability": "Static",
                "item": "None",
                "moves": [
                  "Charge Beam",
                  "Brick Break",
                  "Light Screen",
                  "Thunder Wave"
                ]
              },
              {
                "species": "Luxray",
                "level": 62,
                "ability": "Rivalry",
                "item": "None",
                "moves": [
                  "Thunder Fang",
                  "Ice Fang",
                  "Fire Fang",
                  "Crunch"
                ]
              },
              {
                "species": "Lanturn",
                "level": 63,
                "ability": "Volt Absorb",
                "item": "None",
                "moves": [
                  "Surf",
                  "Discharge",
                  "Ice Beam",
                  "Signal Beam"
                ]
              },
              {
                "species": "Electivire",
                "level": 65,
                "ability": "Motor Drive",
                "item": "Sitrus Berry",
                "moves": [
                  "ThunderPunch",
                  "Fire Punch",
                  "Brick Break",
                  "Giga Impact"
                ]
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame",
          "Facility"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Volkner",
          "https://bulbapedia.bulbagarden.net/wiki/Volkner/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      },
      {
        "id": "volkner-villa",
        "title": "Optional Villa visits",
        "location": "Player’s Villa, Resort Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Repeatable visiting dialogue; not a fixed number of encounters. Can include paired dialogue with Flint.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Volkner",
          "https://bulbapedia.bulbagarden.net/wiki/Volkner/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/toptrainercafe.shtml"
        ]
      }
    ],
    "image": "volkner-artwork.png",
    "images": [
      {
        "label": "Original reference artwork",
        "path": "volkner-artwork.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/8/83/Diamond_Pearl_Volkner.png/132px-Diamond_Pearl_Volkner.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Volkner"
      },
      {
        "label": "Platinum battle sprite",
        "path": "volkner-battle.png",
        "url": "https://archives.bulbagarden.net/media/upload/8/8a/Spr_Pt_Volkner.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Volkner"
      },
      {
        "label": "Platinum overworld sprite",
        "path": "volkner-overworld.png",
        "url": "https://archives.bulbagarden.net/media/upload/9/9a/Volkner_IV_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Volkner"
      }
    ],
    "sourceNotes": "Platinum only. Timeline counts group continuous scenes; repeatable dialogue and visits are listed separately, never treated as a finite appearance total. Minor ambient and TV dialogue is not counted as a physical appearance.",
    "appearanceCounts": {
      "scripted": 3,
      "battleEncounters": 2,
      "repeatableEncounterTypes": 2
    }
  },
  {
    "id": "aaron",
    "name": "Aaron",
    "category": "Elite Four",
    "role": "Bug specialist; first Elite Four member.",
    "personality": "Enthusiastic about Bug Pokémon; values both their beauty and strength.",
    "relationships": "League colleague of Bertha, Flint, Lucian and Cynthia.",
    "responsibilities": [
      "First required battle of each Elite Four run."
    ],
    "linkedChanges": [
      "League intro, defeat and post-battle text",
      "trainer sprite, VS portrait and both team level sets",
      "Taylor era assignment."
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Aaron",
      "https://bulbapedia.bulbagarden.net/wiki/Aaron/Quotes",
      "https://bulbapedia.bulbagarden.net/wiki/Villa",
      "https://www.serebii.net/platinum/elitefour.shtml"
    ],
    "encounters": [
      {
        "id": "aaron-league",
        "title": "Bug specialist — League battle",
        "location": "Pokémon League — Aaron room",
        "phase": "Main story",
        "optional": false,
        "summary": "Required League encounter; defeat advances you to the next room.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Yanmega",
                "level": 49,
                "ability": "Speed Boost",
                "item": "None",
                "moves": [
                  "Bug Buzz",
                  "Air Slash",
                  "U-turn",
                  "Double Team"
                ]
              },
              {
                "species": "Scizor",
                "level": 49,
                "ability": "Swarm",
                "item": "None",
                "moves": [
                  "X-Scissor",
                  "Iron Head",
                  "Night Slash",
                  "Quick Attack"
                ]
              },
              {
                "species": "Heracross",
                "level": 51,
                "ability": "Swarm",
                "item": "None",
                "moves": [
                  "Megahorn",
                  "Close Combat",
                  "Night Slash",
                  "Stone Edge"
                ]
              },
              {
                "species": "Vespiquen",
                "level": 50,
                "ability": "Pressure",
                "item": "None",
                "moves": [
                  "Attack Order",
                  "Defend Order",
                  "Heal Order",
                  "Power Gem"
                ]
              },
              {
                "species": "Drapion",
                "level": 53,
                "ability": "Battle Armor",
                "item": "Sitrus Berry",
                "moves": [
                  "X-Scissor",
                  "Cross Poison",
                  "Ice Fang",
                  "Aerial Ace"
                ]
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Aaron",
          "https://bulbapedia.bulbagarden.net/wiki/Aaron/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/elitefour.shtml"
        ]
      },
      {
        "id": "aaron-league-rematch",
        "title": "League rematches before Stark Mountain",
        "location": "Pokémon League — Aaron room",
        "phase": "Postgame",
        "optional": true,
        "summary": "Repeat League runs before completing Stark Mountain use the original levels and team.",
        "teams": [
          {
            "label": "Before Stark Mountain",
            "pokemon": [
              {
                "species": "Yanmega",
                "level": 49,
                "ability": "Speed Boost",
                "item": "None",
                "moves": [
                  "Bug Buzz",
                  "Air Slash",
                  "U-turn",
                  "Double Team"
                ]
              },
              {
                "species": "Scizor",
                "level": 49,
                "ability": "Swarm",
                "item": "None",
                "moves": [
                  "X-Scissor",
                  "Iron Head",
                  "Night Slash",
                  "Quick Attack"
                ]
              },
              {
                "species": "Heracross",
                "level": 51,
                "ability": "Swarm",
                "item": "None",
                "moves": [
                  "Megahorn",
                  "Close Combat",
                  "Night Slash",
                  "Stone Edge"
                ]
              },
              {
                "species": "Vespiquen",
                "level": 50,
                "ability": "Pressure",
                "item": "None",
                "moves": [
                  "Attack Order",
                  "Defend Order",
                  "Heal Order",
                  "Power Gem"
                ]
              },
              {
                "species": "Drapion",
                "level": 53,
                "ability": "Battle Armor",
                "item": "Sitrus Berry",
                "moves": [
                  "X-Scissor",
                  "Cross Poison",
                  "Ice Fang",
                  "Aerial Ace"
                ]
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Aaron",
          "https://bulbapedia.bulbagarden.net/wiki/Aaron/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/elitefour.shtml"
        ]
      },
      {
        "id": "aaron-strong-rematch",
        "title": "Stronger League rematches",
        "location": "Pokémon League — Aaron room",
        "phase": "Postgame",
        "optional": true,
        "summary": "After completing the Stark Mountain Galactic quest, levels increase. Species, moves, abilities and held items stay the same in Platinum.",
        "teams": [
          {
            "label": "After Stark Mountain",
            "pokemon": [
              {
                "species": "Yanmega",
                "level": 65,
                "ability": "Speed Boost",
                "item": "None",
                "moves": [
                  "Bug Buzz",
                  "Air Slash",
                  "U-turn",
                  "Double Team"
                ]
              },
              {
                "species": "Scizor",
                "level": 65,
                "ability": "Swarm",
                "item": "None",
                "moves": [
                  "X-Scissor",
                  "Iron Head",
                  "Night Slash",
                  "Quick Attack"
                ]
              },
              {
                "species": "Heracross",
                "level": 67,
                "ability": "Swarm",
                "item": "None",
                "moves": [
                  "Megahorn",
                  "Close Combat",
                  "Night Slash",
                  "Stone Edge"
                ]
              },
              {
                "species": "Vespiquen",
                "level": 66,
                "ability": "Pressure",
                "item": "None",
                "moves": [
                  "Attack Order",
                  "Defend Order",
                  "Heal Order",
                  "Power Gem"
                ]
              },
              {
                "species": "Drapion",
                "level": 69,
                "ability": "Battle Armor",
                "item": "Sitrus Berry",
                "moves": [
                  "X-Scissor",
                  "Cross Poison",
                  "Ice Fang",
                  "Aerial Ace"
                ]
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Aaron",
          "https://bulbapedia.bulbagarden.net/wiki/Aaron/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/elitefour.shtml"
        ]
      }
    ],
    "image": "aaron-artwork.png",
    "images": [
      {
        "label": "Original reference artwork",
        "path": "aaron-artwork.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/b/bc/Diamond_Pearl_Aaron.png/240px-Diamond_Pearl_Aaron.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Aaron"
      },
      {
        "label": "Platinum battle sprite",
        "path": "aaron-battle.png",
        "url": "https://archives.bulbagarden.net/media/upload/8/8e/Spr_Pt_Aaron.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Aaron"
      },
      {
        "label": "Platinum overworld sprite",
        "path": "aaron-overworld.png",
        "url": "https://archives.bulbagarden.net/media/upload/3/39/Aaron_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Aaron"
      }
    ],
    "sourceNotes": "Platinum only. Timeline counts group continuous scenes; repeatable dialogue and visits are listed separately, never treated as a finite appearance total. Minor ambient and TV dialogue is not counted as a physical appearance.",
    "appearanceCounts": {
      "scripted": 1,
      "battleEncounters": 1,
      "repeatableEncounterTypes": 2
    }
  },
  {
    "id": "bertha",
    "name": "Bertha",
    "category": "Elite Four",
    "role": "Ground specialist; second Elite Four member.",
    "personality": "Composed, experienced and encouraging; expects a trainer’s best effort.",
    "relationships": "League colleague of Aaron, Flint, Lucian and Cynthia.",
    "responsibilities": [
      "Second required battle of each Elite Four run."
    ],
    "linkedChanges": [
      "League intro, defeat and post-battle text",
      "trainer sprite, VS portrait and both team level sets",
      "Taylor era assignment."
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Bertha",
      "https://bulbapedia.bulbagarden.net/wiki/Bertha/Quotes",
      "https://bulbapedia.bulbagarden.net/wiki/Villa",
      "https://www.serebii.net/platinum/elitefour.shtml"
    ],
    "encounters": [
      {
        "id": "bertha-league",
        "title": "Ground specialist — League battle",
        "location": "Pokémon League — Bertha room",
        "phase": "Main story",
        "optional": false,
        "summary": "Required League encounter; defeat advances you to the next room.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Whiscash",
                "level": 50,
                "ability": "Oblivious",
                "item": "None",
                "moves": [
                  "Earth Power",
                  "Aqua Tail",
                  "Zen Headbutt",
                  "Sandstorm"
                ]
              },
              {
                "species": "Gliscor",
                "level": 53,
                "ability": "Hyper Cutter",
                "item": "None",
                "moves": [
                  "Earthquake",
                  "Ice Fang",
                  "Fire Fang",
                  "Thunder Fang"
                ]
              },
              {
                "species": "Hippowdon",
                "level": 52,
                "ability": "Sand Stream",
                "item": "None",
                "moves": [
                  "Earthquake",
                  "Stone Edge",
                  "Crunch",
                  "Yawn"
                ]
              },
              {
                "species": "Golem",
                "level": 52,
                "ability": "Rock Head",
                "item": "None",
                "moves": [
                  "Earthquake",
                  "Fire Punch",
                  "ThunderPunch",
                  "Sandstorm"
                ]
              },
              {
                "species": "Rhyperior",
                "level": 55,
                "ability": "Lightningrod",
                "item": "Sitrus Berry",
                "moves": [
                  "Earthquake",
                  "Rock Wrecker",
                  "Megahorn",
                  "Avalanche"
                ]
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Bertha",
          "https://bulbapedia.bulbagarden.net/wiki/Bertha/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/elitefour.shtml"
        ]
      },
      {
        "id": "bertha-league-rematch",
        "title": "League rematches before Stark Mountain",
        "location": "Pokémon League — Bertha room",
        "phase": "Postgame",
        "optional": true,
        "summary": "Repeat League runs before completing Stark Mountain use the original levels and team.",
        "teams": [
          {
            "label": "Before Stark Mountain",
            "pokemon": [
              {
                "species": "Whiscash",
                "level": 50,
                "ability": "Oblivious",
                "item": "None",
                "moves": [
                  "Earth Power",
                  "Aqua Tail",
                  "Zen Headbutt",
                  "Sandstorm"
                ]
              },
              {
                "species": "Gliscor",
                "level": 53,
                "ability": "Hyper Cutter",
                "item": "None",
                "moves": [
                  "Earthquake",
                  "Ice Fang",
                  "Fire Fang",
                  "Thunder Fang"
                ]
              },
              {
                "species": "Hippowdon",
                "level": 52,
                "ability": "Sand Stream",
                "item": "None",
                "moves": [
                  "Earthquake",
                  "Stone Edge",
                  "Crunch",
                  "Yawn"
                ]
              },
              {
                "species": "Golem",
                "level": 52,
                "ability": "Rock Head",
                "item": "None",
                "moves": [
                  "Earthquake",
                  "Fire Punch",
                  "ThunderPunch",
                  "Sandstorm"
                ]
              },
              {
                "species": "Rhyperior",
                "level": 55,
                "ability": "Lightningrod",
                "item": "Sitrus Berry",
                "moves": [
                  "Earthquake",
                  "Rock Wrecker",
                  "Megahorn",
                  "Avalanche"
                ]
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Bertha",
          "https://bulbapedia.bulbagarden.net/wiki/Bertha/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/elitefour.shtml"
        ]
      },
      {
        "id": "bertha-strong-rematch",
        "title": "Stronger League rematches",
        "location": "Pokémon League — Bertha room",
        "phase": "Postgame",
        "optional": true,
        "summary": "After completing the Stark Mountain Galactic quest, levels increase. Species, moves, abilities and held items stay the same in Platinum.",
        "teams": [
          {
            "label": "After Stark Mountain",
            "pokemon": [
              {
                "species": "Whiscash",
                "level": 66,
                "ability": "Oblivious",
                "item": "None",
                "moves": [
                  "Earth Power",
                  "Aqua Tail",
                  "Zen Headbutt",
                  "Sandstorm"
                ]
              },
              {
                "species": "Gliscor",
                "level": 69,
                "ability": "Hyper Cutter",
                "item": "None",
                "moves": [
                  "Earthquake",
                  "Ice Fang",
                  "Fire Fang",
                  "Thunder Fang"
                ]
              },
              {
                "species": "Hippowdon",
                "level": 68,
                "ability": "Sand Stream",
                "item": "None",
                "moves": [
                  "Earthquake",
                  "Stone Edge",
                  "Crunch",
                  "Yawn"
                ]
              },
              {
                "species": "Golem",
                "level": 68,
                "ability": "Rock Head",
                "item": "None",
                "moves": [
                  "Earthquake",
                  "Fire Punch",
                  "ThunderPunch",
                  "Sandstorm"
                ]
              },
              {
                "species": "Rhyperior",
                "level": 71,
                "ability": "Lightningrod",
                "item": "Sitrus Berry",
                "moves": [
                  "Earthquake",
                  "Rock Wrecker",
                  "Megahorn",
                  "Avalanche"
                ]
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Bertha",
          "https://bulbapedia.bulbagarden.net/wiki/Bertha/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/elitefour.shtml"
        ]
      }
    ],
    "image": "bertha-artwork.png",
    "images": [
      {
        "label": "Original reference artwork",
        "path": "bertha-artwork.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/5/5e/Diamond_Pearl_Bertha.png/150px-Diamond_Pearl_Bertha.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Bertha"
      },
      {
        "label": "Platinum battle sprite",
        "path": "bertha-battle.png",
        "url": "https://archives.bulbagarden.net/media/upload/f/fa/Spr_Pt_Bertha.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Bertha"
      },
      {
        "label": "Platinum overworld sprite",
        "path": "bertha-overworld.png",
        "url": "https://archives.bulbagarden.net/media/upload/d/d0/Bertha_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Bertha"
      }
    ],
    "sourceNotes": "Platinum only. Timeline counts group continuous scenes; repeatable dialogue and visits are listed separately, never treated as a finite appearance total. Minor ambient and TV dialogue is not counted as a physical appearance.",
    "appearanceCounts": {
      "scripted": 1,
      "battleEncounters": 1,
      "repeatableEncounterTypes": 2
    }
  },
  {
    "id": "flint",
    "name": "Flint",
    "category": "Elite Four",
    "role": "Fire specialist; third Elite Four member; Sunyshore story guide.",
    "personality": "Energetic and expressive; cares about restoring his friend’s enthusiasm.",
    "relationships": "Volkner’s friend; Buck’s older brother; their grandfather runs the Battleground.",
    "responsibilities": [
      "Encourages the Sunyshore Gym challenge; third Elite Four battle; Fight Area partner battle."
    ],
    "linkedChanges": [
      "Volkner dialogue",
      "Sunyshore door event",
      "Buck family references",
      "Fight Area team",
      "paired Villa visit",
      "Taylor era assignment."
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Flint",
      "https://bulbapedia.bulbagarden.net/wiki/Flint/Quotes",
      "https://bulbapedia.bulbagarden.net/wiki/Villa",
      "https://www.serebii.net/platinum/elitefour.shtml"
    ],
    "encounters": [
      {
        "id": "flint-sunyshore",
        "title": "Sunyshore arrival",
        "location": "Sunyshore City entrance",
        "phase": "Main story",
        "optional": false,
        "summary": "Asks you to restore Volkner’s enjoyment of battling.",
        "teams": [],
        "repeatable": false,
        "tags": [],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Flint",
          "https://bulbapedia.bulbagarden.net/wiki/Flint/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/elitefour.shtml"
        ]
      },
      {
        "id": "flint-gym-door",
        "title": "Gym door follow-up",
        "location": "Sunyshore Gym entrance",
        "phase": "Main story",
        "optional": false,
        "summary": "Directs you to Volkner at the lighthouse; moves aside after you find him.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Flint",
          "https://bulbapedia.bulbagarden.net/wiki/Flint/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/elitefour.shtml"
        ]
      },
      {
        "id": "flint-league",
        "title": "Third Elite Four battle",
        "location": "Pokémon League — Flint room",
        "phase": "Main story",
        "optional": false,
        "summary": "Fire team in the first League challenge.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Houndoom",
                "level": 52,
                "ability": "Early Bird",
                "item": "None",
                "moves": [
                  "Flamethrower",
                  "Sludge Bomb",
                  "Dark Pulse",
                  "Sunny Day"
                ]
              },
              {
                "species": "Flareon",
                "level": 55,
                "ability": "Flash Fire",
                "item": "None",
                "moves": [
                  "Overheat",
                  "Giga Impact",
                  "Quick Attack",
                  "Will-O-Wisp"
                ]
              },
              {
                "species": "Rapidash",
                "level": 53,
                "ability": "Run Away",
                "item": "None",
                "moves": [
                  "Flare Blitz",
                  "SolarBeam",
                  "Bounce",
                  "Sunny Day"
                ]
              },
              {
                "species": "Infernape",
                "level": 55,
                "ability": "Blaze",
                "item": "None",
                "moves": [
                  "Flare Blitz",
                  "ThunderPunch",
                  "Mach Punch",
                  "Earthquake"
                ]
              },
              {
                "species": "Magmortar",
                "level": 57,
                "ability": "Flame Body",
                "item": "Sitrus Berry",
                "moves": [
                  "Flamethrower",
                  "Thunderbolt",
                  "SolarBeam",
                  "Hyper Beam"
                ]
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Flint",
          "https://bulbapedia.bulbagarden.net/wiki/Flint/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/elitefour.shtml"
        ]
      },
      {
        "id": "flint-frontier",
        "title": "Fight Area Multi Battle with Volkner",
        "location": "Fight Area / Battle Frontier entrance",
        "phase": "Postgame",
        "optional": false,
        "summary": "You and Barry face Flint and Volkner together.",
        "teams": [
          {
            "label": "Flint — opponent team",
            "pokemon": [
              {
                "species": "Houndoom",
                "level": 56,
                "ability": "Flash Fire",
                "item": "None",
                "moves": [
                  "Flamethrower",
                  "Sludge Bomb",
                  "Dark Pulse",
                  "Sunny Day"
                ]
              },
              {
                "species": "Flareon",
                "level": 56,
                "ability": "Flash Fire",
                "item": "None",
                "moves": [
                  "Overheat",
                  "Giga Impact",
                  "Quick Attack",
                  "Will-O-Wisp"
                ]
              },
              {
                "species": "Magmortar",
                "level": 58,
                "ability": "Flame Body",
                "item": "Sitrus Berry",
                "moves": [
                  "Flamethrower",
                  "Thunderbolt",
                  "SolarBeam",
                  "Hyper Beam"
                ]
              }
            ]
          },
          {
            "label": "Volkner — other opponent",
            "pokemon": [
              {
                "species": "Luxray",
                "level": 56,
                "ability": "Rivalry",
                "item": "None",
                "moves": [
                  "Ice Fang",
                  "Thunder Fang",
                  "Crunch",
                  "Fire Fang"
                ]
              },
              {
                "species": "Jolteon",
                "level": 56,
                "ability": "Volt Absorb",
                "item": "None",
                "moves": [
                  "Pin Missile",
                  "Charge Beam",
                  "Double Kick",
                  "Quick Attack"
                ]
              },
              {
                "species": "Electivire",
                "level": 58,
                "ability": "Motor Drive",
                "item": "Sitrus Berry",
                "moves": [
                  "ThunderPunch",
                  "Fire Punch",
                  "Brick Break",
                  "Giga Impact"
                ]
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Flint",
          "https://bulbapedia.bulbagarden.net/wiki/Flint/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/elitefour.shtml"
        ]
      },
      {
        "id": "flint-villa",
        "title": "Paired Villa visit with Volkner",
        "location": "Player’s Villa, Resort Area",
        "phase": "Postgame",
        "optional": true,
        "summary": "Optional visit and conversations with Volkner; no battle.",
        "teams": [],
        "repeatable": true,
        "tags": [
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Flint",
          "https://bulbapedia.bulbagarden.net/wiki/Flint/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/elitefour.shtml"
        ]
      },
      {
        "id": "flint-league-rematch",
        "title": "League rematches before Stark Mountain",
        "location": "Pokémon League — Flint room",
        "phase": "Postgame",
        "optional": true,
        "summary": "Repeat League runs before completing Stark Mountain use the original levels and team.",
        "teams": [
          {
            "label": "Before Stark Mountain",
            "pokemon": [
              {
                "species": "Houndoom",
                "level": 52,
                "ability": "Early Bird",
                "item": "None",
                "moves": [
                  "Flamethrower",
                  "Sludge Bomb",
                  "Dark Pulse",
                  "Sunny Day"
                ]
              },
              {
                "species": "Flareon",
                "level": 55,
                "ability": "Flash Fire",
                "item": "None",
                "moves": [
                  "Overheat",
                  "Giga Impact",
                  "Quick Attack",
                  "Will-O-Wisp"
                ]
              },
              {
                "species": "Rapidash",
                "level": 53,
                "ability": "Run Away",
                "item": "None",
                "moves": [
                  "Flare Blitz",
                  "SolarBeam",
                  "Bounce",
                  "Sunny Day"
                ]
              },
              {
                "species": "Infernape",
                "level": 55,
                "ability": "Blaze",
                "item": "None",
                "moves": [
                  "Flare Blitz",
                  "ThunderPunch",
                  "Mach Punch",
                  "Earthquake"
                ]
              },
              {
                "species": "Magmortar",
                "level": 57,
                "ability": "Flame Body",
                "item": "Sitrus Berry",
                "moves": [
                  "Flamethrower",
                  "Thunderbolt",
                  "SolarBeam",
                  "Hyper Beam"
                ]
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Flint",
          "https://bulbapedia.bulbagarden.net/wiki/Flint/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/elitefour.shtml"
        ]
      },
      {
        "id": "flint-strong-rematch",
        "title": "Stronger League rematches",
        "location": "Pokémon League — Flint room",
        "phase": "Postgame",
        "optional": true,
        "summary": "After completing the Stark Mountain Galactic quest, levels increase. Species, moves, abilities and held items stay the same in Platinum.",
        "teams": [
          {
            "label": "After Stark Mountain",
            "pokemon": [
              {
                "species": "Houndoom",
                "level": 68,
                "ability": "Early Bird",
                "item": "None",
                "moves": [
                  "Flamethrower",
                  "Sludge Bomb",
                  "Dark Pulse",
                  "Sunny Day"
                ]
              },
              {
                "species": "Flareon",
                "level": 71,
                "ability": "Flash Fire",
                "item": "None",
                "moves": [
                  "Overheat",
                  "Giga Impact",
                  "Quick Attack",
                  "Will-O-Wisp"
                ]
              },
              {
                "species": "Rapidash",
                "level": 69,
                "ability": "Run Away",
                "item": "None",
                "moves": [
                  "Flare Blitz",
                  "SolarBeam",
                  "Bounce",
                  "Sunny Day"
                ]
              },
              {
                "species": "Infernape",
                "level": 71,
                "ability": "Blaze",
                "item": "None",
                "moves": [
                  "Flare Blitz",
                  "ThunderPunch",
                  "Mach Punch",
                  "Earthquake"
                ]
              },
              {
                "species": "Magmortar",
                "level": 73,
                "ability": "Flame Body",
                "item": "Sitrus Berry",
                "moves": [
                  "Flamethrower",
                  "Thunderbolt",
                  "SolarBeam",
                  "Hyper Beam"
                ]
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Flint",
          "https://bulbapedia.bulbagarden.net/wiki/Flint/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/elitefour.shtml"
        ]
      }
    ],
    "image": "flint-artwork.png",
    "images": [
      {
        "label": "Original reference artwork",
        "path": "flint-artwork.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/a/a8/Diamond_Pearl_Flint.png/150px-Diamond_Pearl_Flint.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Flint"
      },
      {
        "label": "Platinum battle sprite",
        "path": "flint-battle.png",
        "url": "https://archives.bulbagarden.net/media/upload/9/97/Spr_Pt_Flint.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Flint"
      },
      {
        "label": "Platinum overworld sprite",
        "path": "flint-overworld.png",
        "url": "https://archives.bulbagarden.net/media/upload/c/c7/Flint_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Flint"
      }
    ],
    "sourceNotes": "Platinum only. Timeline counts group continuous scenes; repeatable dialogue and visits are listed separately, never treated as a finite appearance total. Minor ambient and TV dialogue is not counted as a physical appearance.",
    "appearanceCounts": {
      "scripted": 4,
      "battleEncounters": 2,
      "repeatableEncounterTypes": 3
    }
  },
  {
    "id": "lucian",
    "name": "Lucian",
    "category": "Elite Four",
    "role": "Psychic specialist; fourth and final Elite Four member.",
    "personality": "Reserved, thoughtful and scholarly; reads whenever he can.",
    "relationships": "League colleague of Aaron, Bertha, Flint and Cynthia.",
    "responsibilities": [
      "Final Elite Four gate before Cynthia; optional Canalave Library conversation."
    ],
    "linkedChanges": [
      "League text",
      "library postgame dialogue",
      "both team level sets",
      "Taylor era assignment."
    ],
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Lucian",
      "https://bulbapedia.bulbagarden.net/wiki/Lucian/Quotes",
      "https://bulbapedia.bulbagarden.net/wiki/Villa",
      "https://www.serebii.net/platinum/elitefour.shtml"
    ],
    "encounters": [
      {
        "id": "lucian-league",
        "title": "Psychic specialist — League battle",
        "location": "Pokémon League — Lucian room",
        "phase": "Main story",
        "optional": false,
        "summary": "Required League encounter; defeat advances you to the next room.",
        "teams": [
          {
            "label": "Original Platinum team",
            "pokemon": [
              {
                "species": "Mr. Mime",
                "level": 53,
                "ability": "Soundproof",
                "item": "None",
                "moves": [
                  "Psychic",
                  "Thunderbolt",
                  "Reflect",
                  "Light Screen"
                ]
              },
              {
                "species": "Espeon",
                "level": 55,
                "ability": "Synchronize",
                "item": "None",
                "moves": [
                  "Psychic",
                  "Shadow Ball",
                  "Quick Attack",
                  "Signal Beam"
                ]
              },
              {
                "species": "Bronzong",
                "level": 54,
                "ability": "Levitate",
                "item": "None",
                "moves": [
                  "Psychic",
                  "Gyro Ball",
                  "Earthquake",
                  "Calm Mind"
                ]
              },
              {
                "species": "Alakazam",
                "level": 56,
                "ability": "Synchronize",
                "item": "None",
                "moves": [
                  "Psychic",
                  "Energy Ball",
                  "Focus Blast",
                  "Recover"
                ]
              },
              {
                "species": "Gallade",
                "level": 59,
                "ability": "Steadfast",
                "item": "Sitrus Berry",
                "moves": [
                  "Drain Punch",
                  "Psycho Cut",
                  "Leaf Blade",
                  "Stone Edge"
                ]
              }
            ]
          }
        ],
        "repeatable": false,
        "tags": [
          "Battle",
          "Progression"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucian",
          "https://bulbapedia.bulbagarden.net/wiki/Lucian/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/elitefour.shtml"
        ]
      },
      {
        "id": "lucian-library",
        "title": "Postgame reading visit",
        "location": "Canalave Library",
        "phase": "Postgame",
        "optional": true,
        "summary": "After you become Champion, finds time to read in the library; still returns to the League for rematches.",
        "teams": [],
        "repeatable": false,
        "tags": [
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucian",
          "https://bulbapedia.bulbagarden.net/wiki/Lucian/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/elitefour.shtml"
        ]
      },
      {
        "id": "lucian-league-rematch",
        "title": "League rematches before Stark Mountain",
        "location": "Pokémon League — Lucian room",
        "phase": "Postgame",
        "optional": true,
        "summary": "Repeat League runs before completing Stark Mountain use the original levels and team.",
        "teams": [
          {
            "label": "Before Stark Mountain",
            "pokemon": [
              {
                "species": "Mr. Mime",
                "level": 53,
                "ability": "Soundproof",
                "item": "None",
                "moves": [
                  "Psychic",
                  "Thunderbolt",
                  "Reflect",
                  "Light Screen"
                ]
              },
              {
                "species": "Espeon",
                "level": 55,
                "ability": "Synchronize",
                "item": "None",
                "moves": [
                  "Psychic",
                  "Shadow Ball",
                  "Quick Attack",
                  "Signal Beam"
                ]
              },
              {
                "species": "Bronzong",
                "level": 54,
                "ability": "Levitate",
                "item": "None",
                "moves": [
                  "Psychic",
                  "Gyro Ball",
                  "Earthquake",
                  "Calm Mind"
                ]
              },
              {
                "species": "Alakazam",
                "level": 56,
                "ability": "Synchronize",
                "item": "None",
                "moves": [
                  "Psychic",
                  "Energy Ball",
                  "Focus Blast",
                  "Recover"
                ]
              },
              {
                "species": "Gallade",
                "level": 59,
                "ability": "Steadfast",
                "item": "Sitrus Berry",
                "moves": [
                  "Drain Punch",
                  "Psycho Cut",
                  "Leaf Blade",
                  "Stone Edge"
                ]
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucian",
          "https://bulbapedia.bulbagarden.net/wiki/Lucian/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/elitefour.shtml"
        ]
      },
      {
        "id": "lucian-strong-rematch",
        "title": "Stronger League rematches",
        "location": "Pokémon League — Lucian room",
        "phase": "Postgame",
        "optional": true,
        "summary": "After completing the Stark Mountain Galactic quest, levels increase. Species, moves, abilities and held items stay the same in Platinum.",
        "teams": [
          {
            "label": "After Stark Mountain",
            "pokemon": [
              {
                "species": "Mr. Mime",
                "level": 69,
                "ability": "Soundproof",
                "item": "None",
                "moves": [
                  "Psychic",
                  "Thunderbolt",
                  "Reflect",
                  "Light Screen"
                ]
              },
              {
                "species": "Espeon",
                "level": 71,
                "ability": "Synchronize",
                "item": "None",
                "moves": [
                  "Psychic",
                  "Shadow Ball",
                  "Quick Attack",
                  "Signal Beam"
                ]
              },
              {
                "species": "Bronzong",
                "level": 70,
                "ability": "Levitate",
                "item": "None",
                "moves": [
                  "Psychic",
                  "Gyro Ball",
                  "Earthquake",
                  "Calm Mind"
                ]
              },
              {
                "species": "Alakazam",
                "level": 72,
                "ability": "Synchronize",
                "item": "None",
                "moves": [
                  "Psychic",
                  "Energy Ball",
                  "Focus Blast",
                  "Recover"
                ]
              },
              {
                "species": "Gallade",
                "level": 75,
                "ability": "Steadfast",
                "item": "Sitrus Berry",
                "moves": [
                  "Drain Punch",
                  "Psycho Cut",
                  "Leaf Blade",
                  "Stone Edge"
                ]
              }
            ]
          }
        ],
        "repeatable": true,
        "tags": [
          "Battle",
          "Repeatable",
          "Optional",
          "Postgame"
        ],
        "sources": [
          "https://bulbapedia.bulbagarden.net/wiki/Lucian",
          "https://bulbapedia.bulbagarden.net/wiki/Lucian/Quotes",
          "https://bulbapedia.bulbagarden.net/wiki/Villa",
          "https://www.serebii.net/platinum/elitefour.shtml"
        ]
      }
    ],
    "image": "lucian-artwork.png",
    "images": [
      {
        "label": "Original reference artwork",
        "path": "lucian-artwork.png",
        "url": "https://archives.bulbagarden.net/media/upload/thumb/e/e1/Diamond_Pearl_Lucian.png/200px-Diamond_Pearl_Lucian.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Lucian"
      },
      {
        "label": "Platinum battle sprite",
        "path": "lucian-battle.png",
        "url": "https://archives.bulbagarden.net/media/upload/9/99/Spr_Pt_Lucian.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Lucian"
      },
      {
        "label": "Platinum overworld sprite",
        "path": "lucian-overworld.png",
        "url": "https://archives.bulbagarden.net/media/upload/c/c2/Lucian_OD.png",
        "source": "https://bulbapedia.bulbagarden.net/wiki/Lucian"
      }
    ],
    "sourceNotes": "Platinum only. Timeline counts group continuous scenes; repeatable dialogue and visits are listed separately, never treated as a finite appearance total. Minor ambient and TV dialogue is not counted as a physical appearance.",
    "appearanceCounts": {
      "scripted": 2,
      "battleEncounters": 1,
      "repeatableEncounterTypes": 2
    }
  }
];
