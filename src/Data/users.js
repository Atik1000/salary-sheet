const users = [
    {
      id: 1,
      name: "Atik foysal",
      username: "Admin",
      yearlySalary:4858552,
      img:'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      email: "cm.dpi15@gmail.com",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "+8801795608405",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      },
      isClick:false,
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      yearlySalary:485852,
      img:'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618"
        }
      },
      phone: "+8801741784125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains"
      },
      isClick:false,
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      yearlySalary:85852,
      img:' https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=500&w=500',
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653"
        }
      },
      phone: "+8801785210247",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications"
      },
      isClick:false,
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      yearlySalary:85852,
      img:'https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: "Julianner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990"
        }
      },
      phone: "+8801547841257",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services"
      },
      isClick:false,
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      yearlySalary:85852,
      img:'https://images.pexels.com/photos/1277404/pexels-photo-1277404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: "Luciinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342"
        }
      },
      phone: "+8801777425748",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems"
      },
      isClick:false,
    },
    {
      id: 6,
      name: "Mrs. Dennis",
      username: "Leopoldo_Corkery",
      yearlySalary:85852,
      img:'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: "Karleach@jasper.info",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478"
        }
      },
      phone: "+8801310257418",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications"
      },
      isClick:false,
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      yearlySalary:185852,
      img:'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: "Telly.Hr@billy.biz",
      address: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099",
        geo: {
          lat: "24.8918",
          lng: "21.8984"
        }
      },
      phone: "+8801987809589",
      website: "elvis.io",
      company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers"
      },
      isClick:false,
    },
    {
      id: 8,
      name: "Nicholas  Vicky",
      username: "Maxime_Nienow",
      yearlySalary:85852,
      img:'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: "Sherwood@rosamond.me",
      address: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Aliyaview",
        zipcode: "45169",
        geo: {
          lat: "-14.3990",
          lng: "-120.7677"
        }
      },
      phone: "+8801380849209",
      website: "jacynthe.com",
      company: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers"
      },
      isClick:false,
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      yearlySalary:8545852,
      img:'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: "Chaim_McDt@dana.io",
      address: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109",
        geo: {
          lat: "24.6463",
          lng: "-168.8889"
        }
      },
      phone: "+8801752147841",
      website: "conrad.com",
      company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies"
      },
      isClick:false,
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      yearlySalary:85852,
      img:'https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: "Rey.P@karina.biz",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232"
        }
      },
      phone: "+8801798271587",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models"
      },
      isClick:false,
    },
    {
      id: 11,
      name: "Ama Watson",
      username: "Ama",
      yearlySalary:485852,
      img:'https://images.pexels.com/photos/756453/pexels-photo-756453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      email: "ama@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342"
        }
      },
      phone: "+8801712342329",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems"
      },
      isClick:false,
    },
    {
      id: 12,
      name: "Mr. Rabi",
      username: "Rabbi",
      yearlySalary:487752,
      img:'https://images.pexels.com/photos/3913401/pexels-photo-3913401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      email: "rabbi@jasper.info",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478"
        }
      },
      phone: "+8801750147841",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications"
      },
      isClick:false,
    },
    {
      id: 13,
      name: "Kurtis Weissnat",
      username: "waissant",
      yearlySalary:745852,
      img:'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: "waissant@billy.biz",
      address: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099",
        geo: {
          lat: "24.8918",
          lng: "21.8984"
        }
      },
      phone: "+8801750514741",
      website: "elvis.io",
      company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers"
      },
      isClick:false,
    },
    {
      id: 14,
      name: "Shakib  Islam",
      username: "Shakib",
      yearlySalary:4852852,
      img:'https://images.pexels.com/photos/3875645/pexels-photo-3875645.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      email: "shakib@rosamond.me",
      address: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Aliyaview",
        zipcode: "45169",
        geo: {
          lat: "-14.3990",
          lng: "-120.7677"
        }
      },
      phone: "+8801780849880",
      website: "jacynthe.com",
      company: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers"
      },
      isClick:false,
    },
    {
      id: 15,
      name: "Apu Roy",
      username: "apu",
      yearlySalary:1285852,
      img:'https://images.pexels.com/photos/1082962/pexels-photo-1082962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: "apuroy@dana.io",
      address: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109",
        geo: {
          lat: "24.6463",
          lng: "-168.8889"
        }
      },
      phone: "+8801780849889",
      website: "conrad.com",
      company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies"
      },
      isClick:false,
    }
  ] 
  
  export default users;