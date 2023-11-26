import * as Icons from "../components/Icons";

export const navMenu = [
    {
        id: 'Home',
        href: '/',
    },
    {
        id: 'Services',
        href: '/services',
    },
    {
        id: 'About',
        href: '/about',
    },
    {
        id: 'Resume',
        href: '/resume',
    },
]

export const projects = [
    {
        title: 'WH Tech Solutions',
        src: '/assets/images/projects/wh2.png',
        altText: 'Screenshot of WHtechSolution home page',
        ariaLabel: "Opens modal window with more information about the WHtechSolution web project",
        details: {
            description: "WHtech Solutions, nestled in the vibrant heart of London, stands as a beacon of innovation in the digital realm. As a dynamic tech company, we specialize in crafting bespoke digital solutions that empower businesses to thrive in the ever-evolving digital landscape. team's expertise spans a wide spectrum of cutting-edge technologies, including React, enabling us to engineer responsive and user-friendly web applications. With a passion for pushing the boundaries of what's possible in the digital world, WHtech Solutions is your trusted partner for turning visionary ideas into tangible, tech-driven realities. Join us on a journey where innovation knows no bounds.",
            technologies: [
                {
                    title: 'HTML',
                    Icon: Icons.HtmlIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
                {
                    title: 'WordPress',
                    Icon: Icons.WordPressIcon,

                },
                {
                    title: 'PHP',
                    Icon: Icons.PHPIcon,
                },
                {
                    title: 'BackEnd',
                    Icon: Icons.DatabaseIcon,
                },
                {
                    title: 'jQuery',
                    Icon: Icons.JQueryIcon,
                },
                {
                    title: 'API',
                    Icon: Icons.APIIcon,
                },
            ],
            url: 'https://whtechsolutions.com/',
            githubUrl: null,
        },
    },
    {
        title: 'Ideas Foundation',
        src: '/assets/images/projects/ideas2.png',
        altText: 'Screenshot of Ideas Foundation home page',
        ariaLabel: "Opens modal window with more information about the Ideas Foundation web project",
        details: {
            description: "IdeasFoundation is a non-profit organization located in Pakistan. Their mission is to provide educational, employment, and entrepreneurial opportunities that build self-esteem and empowers those in need to become self-sufficient. their motto is , Be the Blessing for Everyone , ",
            technologies: [
                {
                    title: 'HTML',
                    Icon: Icons.HtmlIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
                {
                    title: 'WordPress',
                    Icon: Icons.WordPressIcon,
                },
                {
                    title: 'PHP',
                    Icon: Icons.PHPIcon,
                },
                {
                    title: 'BackEnd',
                    Icon: Icons.DatabaseIcon,
                },
            ],
            url: 'https://www.ideasfoundation.pk/',
            githubUrl: null,
        },
    },
    {
        title: 'Eidcarosse',
        src: '/assets/images/projects/ed3.png',
        altText: 'Screenshot of Eidcarosse home page',
        ariaLabel: "Opens modal window with more information about the Eidcarosse web project",
        details: {
            description: "An online Marketplace to list classified ads for cars, they sell cars in Switzerland and i made a website for them. First it was on php now converting it into MERN stack.",
            technologies: [
                {
                    title: 'HTML',
                    Icon: Icons.HtmlIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
                {
                    title: 'jQuery',
                    Icon: Icons.JQueryIcon,
                },
            ],
            url: "https://emagestore.com",
            githubUrl: "https://github.com/OmranSuleiman",
        },
    },
]

export const testimonials = [
    {
        quote: "I am incredibly grateful for Omran's remarkable efforts of completely revamping our  website. His dedication and expertise in enhancing the site's Functionality and speed while also ensuring a seamless user experience has been nothing short of exceptional. The new website not only boasts a great infrastructure and made it beautiful , i recommend you all to hire Omran to solve all your problems.",
        name: ' Haider Ali Zaidi.',
        title: 'CTO of Tech Sculpture',
        src: '/assets/images/testimonials/zaidi.jpg',
        altText: 'Profile of Zaidi.',
    }
]

export const socialMedias = [
    {
        href: 'mailto:Suleimanomran00@gmail.com',
        ariaLabel: 'Compose an email to Omran',
        title: 'Write an Email to Omran',
        Icon: Icons.EmailIcon,
    },
    {
        href: 'https://www.linkedin.com/in/omran-suleiman-497262210',
        ariaLabel: 'Goes to Omran&apos;s LinkedIn profile',
        title: 'Omran Linkedin',
        Icon: Icons.LinkedInIcon,
    },
    {
        href: 'https://github.com/OmranSuleiman ',
        ariaLabel: 'Goes to Omran&apos;s GitHub profile',
        title: 'Omran Github',
        Icon: Icons.GitHubIcon,
    },
    {
        href: 'https://twitter.com/OmranSulei3025',
        ariaLabel: 'Goes to Omran&apos;s Twitter profile',
        title: 'Omran Twitter',
        Icon: Icons.TwitterIcon,
    },
];

export const techSkills = [
    {
        category: 'Front-End Development',
        skills: [
            {
                title: 'HTML',
                Icon: Icons.HtmlIcon,
            },
            {
                title: 'CSS',
                Icon: Icons.CSSIcon,
            },
            {
                title: 'React',
                Icon: Icons.ReactIcon,
            },
            {
                title: 'Tailwind CSS',
                Icon: Icons.TailwindCSSIcon,
            },
            {
                title: 'JavaScript',
                Icon: Icons.JavascriptIcon,
            },
            
            {
                title: 'jQuery',
                Icon: Icons.JQueryIcon,
            },
        ],
    },
    {
        category: 'Back-End Development',
        skills: [
            {
                title: 'PHP',
                Icon: Icons.PHPIcon,
            },
            {
                title: 'NodeJS',
                Icon: Icons.NodeJSIcon,
            },
            {
                title: 'ExpressJS',
                Icon: Icons.ExpressJSIcon,
            },
            {
                title: 'SQL Server',
                Icon: Icons.SqlServerIcon,
            },
            {
                title: 'MongoDB',
                Icon: Icons.MongoDBIcon,
            },
            {
                title: 'SSRS',
                Icon: Icons.SsrsIcon,
            },
        ],
    },
    {
        category: 'Programming Languages',
        skills: [
            {
                title: 'C#',
                Icon: Icons.CsharpIcon,
            },
            {
                title: 'Java',
                Icon: Icons.JavaIcon,
            },
            // {
            //     title: 'Python',
            //     Icon: Icons.VBIcon,
            // },
        ],
    },
    {
        category: 'Content Management Systems',
        skills: [
            {
                title: 'WordPress',
                Icon: Icons.WordPressIcon,
            },
            {
                title: 'Webflow',
                Icon: Icons.WebflowIcon,
            },
            {
                title: 'Wix',
                Icon: Icons.WixIcon,
            },
        ],
    },
    {
        category: 'Build Tools, Frameworks, and Versioning',
        skills: [
            {
                title: 'Vite',
                Icon: Icons.ViteIcon,
            },
            {
                title: 'Git',
                Icon: Icons.GitIcon,
            },
            {
                title: 'GitHub',
                Icon: Icons.GitHubIcon,
            },
        ],
    },
    {
        category: 'Design and Prototyping',
        skills: [
            {
                title: 'Responsive Design',
                Icon: Icons.ResponsiveDesignIcon,
            },
            {
                title: 'Pen and Paper',
                Icon: Icons.SketchingIcon,
            },
            {
                title: 'Figma',
                Icon: Icons.FigmaIcon,
            },
        ],
    },
    {
        category: 'Microsoft Products',
        skills: [
            {
                title: 'Sharepoint',
                Icon: Icons.SharepointIcon,
            },
            {
                title: 'Excel',
                Icon: Icons.ExcelIcon,
            },
            {
                title: 'Access',
                Icon: Icons.AccessIcon,
            },
        ],
    },
    {
        category: 'Others',
        skills: [
            {
                title: 'APIs',
                Icon: Icons.APIIcon,
            },
            {
                title: 'REST APIs',
                Icon: Icons.RestAPIIcon,
            },
        ],
    },
];

export const softSkills = [
    {
        title: 'Creativity',
        Icon: Icons.BrightIdeaIcon,
    },
    {
        title: 'Teamwork',
        Icon: Icons.TeamworkIcon,
    },
    {
        title: 'Public Speaking',
        Icon: Icons.PublicSpeakingIcon,
    },
    {
        title: 'Time Management',
        Icon: Icons.ScheduleIcon,
    },
];

export const workExp = [
    {
        company: 'Tech Sculpture',
        location: 'Birmingham, United Kingdom ',
        positions: [
            {
                title: 'Solution Engeenier',
                startDate: new Date(2019, 9),
                endDate: 'present',
            },
        ],
        tasks: [
            "Collaborate directly with clients to gather project requirements, provide regular updates, and deliver solutions that tailored to their specific needs",
            "Conduct competitor analysis to identify clients' opportunities for differentiation and growth",
            "Leverage strong problem-solving skills to troubleshoot and resolve technical challenges, resulting in seamless and functional websites",
            "Demonstrate expertise in designing custom WordPress themes and plugins, enhancing website functionality and user interactivity",
        ],
    },
    {
        company: 'Eidcarosse',
        location: 'Zurich , Switzerland',
        positions: [
            {
                title: 'Full Stack Developer',
                startDate: new Date(2023, 6),
                endDate: 'present',
            },
        ],
        tasks: [
            "Designed semantically structured and responsive websites for mobile and desktop devices",
            "Collaborated with a team of developers to construct full-stack web applications",
            "Utilized agile methodologies such as SCRUM for project management",
        ],
    },
    {
        company: 'Centangle Interactive',
        location: 'Islamabad, Pakistan',
        positions: [
            {
                title: 'Data Analysis Intern',
                startDate: new Date(2022, 6),
                endDate: new Date(2022, 9),
            },
        ],
        tasks: [
            "Worked as a Data Analysis Intern at Centangle Interactive , and worked with many tools",
            "Worked with the team of 20 people which horns my interpersonal and collaborative skils.",
            "Provided technical support for remote production sites to facilitate the completion of device configurations",
            "Collaborated with a small team to improve processes",
            "Worked on PowerBI and othere analysis tools to provide statistical analysis to the sales team",
            "Wrote  queries for statistical analysis",
        ],
    },
];

export const extracurriculars = [
    {
        company: 'Ideas Foundation',
        location: 'Islamabad, PK',
        positions: [
            {
                title: 'Core Team Member ',
                startDate: new Date(2021, 6),
                endDate: 'present',
            },
            {
                title: 'Chapter Head FAST',
                startDate: new Date(2022, 4),
                endDate: new Date(2023, 6),
            },
        ],
        tasks: [
            "Develop strategies to promote the club to the community, potential members, and guests",
            "Manage the club's social media accounts and website to share club events, achievements, and information",
            "Create content that showcases the club's activities and benefits",
        ],
    },
    {
        company: 'Takhleeq',
        location: 'FAST-NUCES,Islamabad ',
        positions: [
            {
                title: 'Secretary Dramatics',
                startDate: new Date(2022, 6),
                endDate: new Date(2023, 4),
            },
        ],
        tasks: [
            "Design Workshops and activites for the Dramatics Team",
            "Manage Events and Plays",
            "Recognized for outstanding Plays and films ",
        ],
    },
];

export const educations = [
    {
        degree: 'B.S. Computer Science',
        school: 'FAST NUCES , Islamabad',
        startDate: new Date(2019, 8),
        endDate: new Date(2023, 6),
        location: 'Islamabad, PK',
    },
];

export const dessertImages = [
    {
        src: '/assets/images/desserts/1.jpg',
        altText: 'My boys playing Badminton',
        value: 'Fast-Badminton',
        label: 'Fast Badminton',
    },
    {
        src: '/assets/images/desserts/2.jpg',
        altText: 'Khas Dost',
        value: 'khas-dost',
        label: 'Halal Boys Forever',
    },
    {
        src: '/assets/images/desserts/3.jpg',
        altText: 'مولا جٹ عثمان',
        value: 'Omran',
        label: 'مولا جٹ عثمان',
    },
    {
        src: '/assets/images/desserts/4.png',
        altText: 'uziee',
        value: 'uziee',
        label: 'Uziee',
    },
    {
        src: '/assets/images/desserts/6.png',
        altText: 'Psychosis 4.48',
        value: 'dr.uziee',
        label: 'Psychosis 4.48',
    },
    {
        src: '/assets/images/desserts/5.png',
        altText: 'ننھے ستارے',
        value: 'ideas',
        label: 'ننھے ستارے',
    },
];

export const generalServices = [
    {
        title: 'Consulting and Strategy',
        description: "I work closely alongside you to understand your goals, target audience, and business objectives. Using this insight, I develop a strategic plan designed to seamlessly transform your goals into a captivating digital presence.",
        Icon: Icons.HandshakeIcon,
    },
    {
        title: 'Branding',
        description: "Let's craft a distinctive visual identity that resonates with your brand. An identity that not only establishes a strong visual presence, but also forges a profound connection with your audience, fostering a sense of trust and authenticity.",
        Icon: Icons.BrightIdeaIcon,
    },
    {
        title: 'Competitor Analysis',
        description: "Through my competitor analysis service, I delve deep into the strategies employed within your industry or niche. Armed with this insight, you gain a distinct advantage, positioning yourself uniquely from others.",
        Icon: Icons.TargetIcon,
    },
    {
        title: 'Front-End Development',
        description: "Infusing artistry into functionality, my web design prowess creates visually stunning and intuitive interfaces that captivate your audience. Aesthetics and usability should go hand in hand.",
        Icon: Icons.WebDesignIcon,
    },
    {
        title: 'Back-End Development',
        description: "Fueling your website's functionality behind the scenes, I create dynamic processes that bridge your business requirements and your website. Expect nothing less than efficient, user-friendly functionality that adds value to their experience.",
        Icon: Icons.ServerIcon,
    },
    {
        title: 'Responsive Design',
        description: "Your website will be flawlessly showcased across all screens for optimal viewing experience. Responsive design ensures your online presence adapts seamlessly to devices of all sizes.",
        Icon: Icons.DesktopMobileIcon,
    },
];

export const specialties = [
    {
        title: 'Web Hosting and Deployment',
        Icon: Icons.DatabaseIcon,
    },
    {
        title: 'API Development and Integration',
        Icon: Icons.APIIcon,
    },
    {
        title: 'Custom Web Applications',
        Icon: Icons.ProgrammingIcon,
    },
    {
        title: 'Portfolio Websites',
        Icon: Icons.PortfolioIcon,
    },
    {
        title: 'CMS Development and Customization',
        Icon: Icons.WebContentIcon,
    },
    {
        title: 'Web Performance Optimization',
        Icon: Icons.RocketIcon,
    },
    {
        title: 'Website Maintenance',
        Icon: Icons.ToolsIcon,
    },
    {
        title: 'Website Migration',
        Icon: Icons.LeftRightArrowsIcon,
    },
];