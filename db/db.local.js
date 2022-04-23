import testimg from '../public/assets/img/testimonials/testimonials-1.jpg'
import testimga from '../public/assets/img/testimonials/testimonials-1.jpg'
import testimgb from '../public/assets/img/testimonials/testimonials-1.jpg'
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs'
import { BiServer, BiHome, BiFolder, BiEnvelope, BiFileBlank, BiUser } from 'react-icons/bi'

module.exports.BlogData = [
        {
            id: 1,
            img: 'count.png',
            link: 'https://medium.com/@Zihadul-Islam-BD/website-visit-counter-in-just-few-second-39a3ab39595c',
            heading: 'Website Visit Counter in just few second',
            dec: 'How to set visit counter in your website. Step by step guide .'
        },
        {
            id: 2,
            img: 'Git.png',
            link: 'https://medium.com/@Zihadul-Islam-BD/most-interview-questions-git-vs-github-ac152efd97af',
            heading: 'Every Developer Know Git Vs GitHub',
            dec: 'Simply put, Git is a software that makes versioning work much easier.'
        },
        {
            id: 3,
            img: 'js.png',
            link: 'https://medium.com/@Zihadul-Islam-BD/just-simple-fun-with-javascript-eae400a65330',
            heading: 'JavaScript Ternary Operator',
            dec: 'A ternary operator evaluates a condition and executes a block of code based on the condition.'
        },
        {
            id: 4,
            img: 'css.png',
            link: 'https://medium.com/@Zihadul-Islam-BD/must-need-frontend-developer-link-207ffb9ba829',
            heading: 'Best CSS Framework in 2022',
            dec: 'A CSS framework is a library allowing for easier, more standards-compliant web design using the Cascading Style Sheets language.'
        }
    ]
module.exports.resumeDb = [
    {
        id: 1,
        companyName: 'Chearles Technologies Inc',
        description: 'With the world going mobile, the importance of apps is increasing by the day. App development hence refers to the creation of applications to be used on mobile devices. Today when we buy a smartphone',
        githubLink: '',
        liveLink: '',
    },
    {
        id: 2,
        companyName: 'sindabad-it-solution',
        description: 'With the world going mobile, the importance of apps is increasing by the day. App development hence refers to the creation of applications to be used on mobile devices. Today when we buy a smartphone',
        githubLink: '',
        liveLink: '',
    },
    {
        id: 1,
        companyName: 'Programing Hero Spical Endgame',
        description: 'With the world going mobile, the importance of apps is increasing by the day. App development hence refers to the creation of applications to be used on mobile devices. Today when we buy a smartphone',
        githubLink: '',
        liveLink: '',
    },
]
module.exports.headerLinkDb =
    [{
        id: 1, icon: <BiHome />,
        to: "hero", name: "Home"
    }, {
        id: 2, icon: <BiUser />,
        to: "about", name: "About"
    }, {
        id: 3, icon: <BiFileBlank />,
        to: "resume", name: "Resume"
    }, {
        id: 4, icon: <BiFolder />,
        to: "portfolio", name: "Portfolio"
    }, {
        id: 5, icon: <BiServer />,
        to: "services", name: "Services"
    },
    { id: 6, icon: <BiFileBlank />, to: "artical", name: "Artical" }
        ,
    { id: 7, icon: <BiEnvelope />, to: "contact", name: "Contact" }
    ]
module.exports.soicalLinkDb = [
    { id: 1, icon: <AiFillLinkedin />, link: 'https://www.linkedin.com/in/zihadul-islam-359b5321b/' },
    { id: 2, icon: <BsFacebook />, link: 'https://www.facebook.com/zihadul.islam.7140' },
    { id: 3, icon: <BsGithub />, link: 'https://github.com/zihadul10101' },
    { id: 4, icon: <BsTwitter />, link: 'https://twitter.com/Zihadul81183208' },
    { id: 5, icon: <BsInstagram />, link: 'https://www.instagram.com/zihadul18/?hl=en' },
]
module.exports.serviceTitle = [
    {
        id: 1,
        title: "Web design",
        name: "design",
        image: "Design.jpg"
    },

    {
        id: 2,
        title: "Figma to Html",
        name: "figma",
        image: "Develpoment.jpg"
    },
    {
        id: 3,
        title: "Frontend",
        name: "frontend",
        image: "Research.jpg"
    },
    {
        id: 4,
        title: "MERN",
        name: "mern",
        image: "Seo.jpg"
    },
    {
        id: 5,
        title: "Pdf To Html",
        name: "pdf",
        image: "Seo.jpg"
    },
    {
        id: 6,
        title: "Responsive",
        name: "responsive",
        image: "Seo.jpg"
    },
]
module.exports.servicedb = [
    {
        id: 1,
        title: "Web design",
        description: "The main purpose here is to make you able to use graphic design tools and techniques in a professional way. Graphic Design helps to build brand identity of a company. Thus it needs to be conceptual an...",
        name: "design",
        image: "Design.jpg"
    },

    {
        id: 2,
        title: "Figma to Html",
        description: "Going directly from Figma to HTML will allow you to create live web-based prototypes, deploy your own simple websites or landing pages, and hand developers clean code packages for the entire UI to speed up development",
        name: "figma",
        image: "figma.jpg",
    },
    {
        id: 3,
        title: "Frontend development",
        description: "Front-end frameworks are a powerful tool for developing complex user interfaces. They encourage you to build out a maintainable, modular, standalone architecture that makes it easy to build your application and collaborate with other developers.",
        name: "frontend",
        image: "frontend.jpg",
    },
    {
        id: 4,
        title: "MERN Stack Development",
        description: "The MERN stack is an excellent choice for companies wishing to develop high quality web applications. Indeed, this stack, in addition to using high-performance and customized technologies, allows for web applications and software to be developed very quickly!",
        name: "mern",
        image: "mern.jpg"
    },
    {
        id: 5,
        title: "Pdf To Html",
        description: "PDF is a document file format that contains text, images, data etc. This document type is Operating System independent. It is an open standard that compresses a document and vector graphics. It can be viewed in web browsers if the PDF plug-in is installed on the browser.",
        name: "pdf",
        image: "pdf.png"
    },
    {
        id: 6,
        title: "Responsive Website",
        description: "Reach the fastest growing group of Android users. Build for current and future devices. Learn about APIs that can help you manage resizing and responding to configurations. Build for current devices. Learn responsive layouts. Support for screen sizes. Create foldable apps.",
        name: "responsive",
        image: "responsive.jpg"
    },




]

module.exports.skillTitledb = [
    { "title": "Frontend", "name": "Frontend" },
    { "title": "Backend", "name": "Backend" },
    { "title": "Tools", "name": "Tools" },
   
]

module.exports.skilldb = [
    {
        id: 1,
        title: "Html5",
        description: "The main purpose here is to make you able to use graphic design tools and techniques in a professional way. Graphic Design helps to build brand identity of a company. Thus it needs to be conceptual an...",
        name: "Frontend",
        image: "html.png"
    },

    {
        id: 2,
        title: "Javascript(Es6)",
        description: "Web Development consists of two segments front end development and backend development. Front-end Developers work with visual designs of a website and build the sites with using of code. The front end...",
        name: "Frontend",
        image: "js.png"
    },
    {
        id: 3,
        title: "React Js",
        description: "With the world going mobile, the importance of apps is increasing by the day. App development hence refers to the creation of applications to be used on mobile devices. Today when we buy a smartphone...",
        name: "Frontend",
        image: "react.png"
    },
    {
        id: 4,
        title: "Redux",
        description: "Digital Marketing is taking over the traditional marketing rapidly. More and more people are engaging with online information and getting habituated with online shopping. It is the platform for all. I...",
        name: "Frontend",
        image: "redux.png"
    },
    {
        id: 5,
        title: "Bootstrap",
        description: "Digital Marketing is taking over the traditional marketing rapidly. More and more people are engaging with online information and getting habituated with online shopping. It is the platform for all. I...",
        name: "Frontend",
        image: "bootstrap.png"
    },
    {
        id: 6,
        title: "Css3",
        description: "Digital Marketing is taking over the traditional marketing rapidly. More and more people are engaging with online information and getting habituated with online shopping. It is the platform for all. I...",
        name: "Frontend",
        image: "css.png"
    },
    {
        id: 7,
        title: "Node Js",
        description: "Digital Marketing is taking over the traditional marketing rapidly. More and more people are engaging with online information and getting habituated with online shopping. It is the platform for all. I...",
        name: "Backend",
        image: "node.png"
    },
    {
        id: 8,
        title: "MongoDb",
        description: "Digital Marketing is taking over the traditional marketing rapidly. More and more people are engaging with online information and getting habituated with online shopping. It is the platform for all. I...",
        name: "Backend",
        image: "mongodb.png"
    },
    {
        id: 9,
        title: "Mongoose",
        description: "Digital Marketing is taking over the traditional marketing rapidly. More and more people are engaging with online information and getting habituated with online shopping. It is the platform for all. I...",
        name: "Backend",
        image: "mongoose.png"
    },

    {
        id: 10,
        title: "Chrom Dev Tools",
        description: "The main purpose here is to make you able to use graphic design tools and techniques in a professional way. Graphic Design helps to build brand identity of a company. Thus it needs to be conceptual an...",
        name: "Tools",
        image: "chrom.png"
    },

    {
        id: 12,
        title: "Vs Code",
        description: "Web Development consists of two segments front end development and backend development. Front-end Developers work with visual designs of a website and build the sites with using of code. The front end...",
        name: "Tools",
        image: "vscode.png"
    },
    {
        id: 13,
        title: "Git",
        description: "With the world going mobile, the importance of apps is increasing by the day. App development hence refers to the creation of applications to be used on mobile devices. Today when we buy a smartphone...",
        name: "Tools",
        image: "git.png"
    },
    {
        id: 14,
        title: "Npm & Yarn",
        description: "With the world going mobile, the importance of apps is increasing by the day. App development hence refers to the creation of applications to be used on mobile devices. Today when we buy a smartphone...",
        name: "Tools",
        image: "npm.png"
    },
    {
        id: 15,
        title: "Firebase",
        description: "With the world going mobile, the importance of apps is increasing by the day. App development hence refers to the creation of applications to be used on mobile devices. Today when we buy a smartphone...",
        name: "Backend",
        image: "database.png"
    },
    {
        id: 15,
        title: "Heroku",
        description: "With the world going mobile, the importance of apps is increasing by the day. App development hence refers to the creation of applications to be used on mobile devices. Today when we buy a smartphone...",
        name: "Backend",
        image: "heroku.png"
    },


]

module.exports.projectTitledb = [
    { "title": "ALL PROJECT", "name": "all" },
    { "title": "TEAM PROJECT", "name": "team" },
    { "title": "MERN STACK", "name": "mernstack" },
    { "title": "REST API", "name": "restApi" },
    { "title": "HTML CSS", "name": "htmlCss" },
    { "title": "JavaScript", "name": "js" },
]

module.exports.projectdb = [

    {
        id: "1",
        name: ["restApi", "all"],
        project: {
            projectImg: "slider.png",
            liveLink: "https://zihadul10101.github.io/fancy-slider-bug/index.html",
            githubLink: "https://github.com/zihadul10101/fancy-slider-bug",
        }
    }
    , {
        id: "2",
        name: ["htmlCss", "all"],
        project: {
            projectImg: "javlen.png",
            liveLink: "https://zihadul10101.github.io/programing-plant-html-css/index.html",
            githubLink: "https://github.com/zihadul10101/programing-plant-html-css",
        }
    },
    {
        id: "3",
        name: ["js", "all"],
        project: {
            projectImg: "bank.png",
            liveLink: "https://zihadul10101.github.io/pioneer-bank/",
            githubLink: "https://github.com/zihadul10101/pioneer-bank",
        }
    },
    {
        id: "4",
        name: ["team", "all"],
        project: {
            projectImg: "sindabad.png",
            liveLink: "https://flamboyant-aryabhata-7b11bc.netlify.app/",
            githubLink: "https://github.com/SindabadIT/sindabad-it-solution",
        }
    },
    {
        id: "5",
        name: ["mernstack", "all"],
        project: {
            projectImg: "evaly.png",
            liveLink: "https://e-valy.netlify.app/",
            githubLink: "https://github.com/zihadul10101/evaly-client-side",
        }
    },
    {
        id: "6",
        name: ["htmlCss", "all"],
        project: {
            projectImg: "panda.png",
            liveLink: "https://zihadul10101.github.io/panda-commerce-bootstrap/#subscribe",
            githubLink: "https://github.com/zihadul10101/panda-commerce-bootstrap",
        }
    },
    {
        id: "7",
        name: ["js", "all"],
        project: {
            projectImg: "bus.png",
            liveLink: "https://zihadul10101.github.io/bus-ticket-book/",
            githubLink: "https://github.com/zihadul10101/bus-ticket-book",
        }
    },
    {
        id: "8",
        name: ["restApi", "all"],
        project: {
            projectImg: "food.png",
            liveLink: "https://zihadul10101.github.io/themealdb-api-js/",
            githubLink: "https://github.com/zihadul10101/themealdb-api-js",
        }
    }
    ,
    {
        id: "9",
        name: ["team", "all"],
        project: {
            projectImg: "localc.png",
            liveLink: "https://f-express.web.app/",
            githubLink: "https://github.com/zihadul10101/Fast-Express",
        }
    }

]
module.exports.reviewdb = [
    {
        id: 1,
        title: '15 Javascript codes you will always need',
        name: 'Zihadul Islam',
        date: '20 mars 2029 - 6 min read',
        rating: 5,
        photo: testimga,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, odio corporis. Consectetur inventore consequatur atque voluptatem ipsa nam, architecto saepe earum dolorem quae possimus tempore alias sed.'
    },
    {
        id: 2,
        title: 'রেসপন্সিভ ওয়েব ডিজাইন নিয়ে কিছু কথা ও টিপসঃ',
        name: 'Zihadul Islam',
        date: '20 mars 2029 - 6 min read',
        rating: 5,
        photo: testimg,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, odio corporis. Consectetur inventore consequatur atque voluptatem ipsa nam, architecto saepe earum dolorem quae possimus tempore alias sed.'
    },
    {
        id: 3,
        title: 'মেথড ( HTTP Methods )',
        name: 'Zihadul Islam',
        date: '20 mars 2029 - 6 min read',
        rating: 5,
        photo: testimgb,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, odio corporis. Consectetur inventore consequatur atque voluptatem ipsa nam, architecto saepe earum dolorem quae possimus tempore alias sed.'
    },
    {
        id: 4,
        title: 'Tips needed to make Good Front-end Developer',
        name: 'Zihadul Islam',
        date: '20 mars 2029 - 6 min read',
        rating: 5,
        photo: testimg,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, odio corporis. Consectetur inventore consequatur atque voluptatem ipsa nam, architecto saepe earum dolorem quae possimus tempore alias sed.'
    },
]