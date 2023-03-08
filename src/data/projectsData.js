import {reactive} from 'vue'

export const projectsData = reactive({
    list: [
        {
            "id": 1,
            "photo": "/img/projects/SunnyBot.png",
            "photos": [],
            "shortTitle": "SunnyBot",
            "title": "SunnyBot: Design and Implementation of a Music Recommendation Chatbot for Lonely People",
            "subtitle": "",
            "author": "Mr. ZHAO, Xianglin and Dr. CHEN, Li",
            "collaborator": "",
            "description": "SunnyBot is a web-based chatbot designed to track users’ daily mood, assess their level of loneliness, and recommend music according to their mood.",
            "descriptionRest": "",
            "majorFundings": [],
            "features": [
                "<strong>Mood Diary</strong>: the system allows users to indicate their daily feelings and visualize their mood changes over time.",
                "<strong>Loneliness Interview</strong>: the system is able to assess users' loneliness status through conversation.",
                "<strong>Music Recommendation</strong>: the system can recommend music to users according to their current mood.",
            ],
            "reference": [
                "ZHAO, X., & CHEN, L. (2021). (rep.). Design and Implementation of a Music Recommendation Chatbot for Lonely People. M.Sc. Practicum Report, Hong Kong Baptist University.<br> <a href='https://zhaoxianglin.github.io/Files/MSc_Parcticium_Report_Xianglin_ZHAO.pdf' target='_blank'>Available: https://zhaoxianglin.github.io/Files/MSc_Parcticium_Report_Xianglin_ZHAO.pdf</a>"
            ],
            "video": "https://www.youtube.com/embed/S8sB3t7coi4",
        },
        {
            "id": 2,
            "photo": "/img/projects/Pistis Health.png",
            "photos": [],
            "shortTitle": "Pistis Health",
            "title": "Pistis Health: A Centralized Platform for Collecting and Personalizing Information about Mental Health Services to the Public",
            "subtitle": "",
            "author": "Mr. ZHANG, Yizhe and Dr. CHEN, Li",
            "collaborator": "",
            "description": "Pistis Health is a centralized information recommendation platform. It can  recommend psychological suggestions, articles, and service information to users. ",
            "descriptionRest": "",
            "majorFundings": [],
            "features": [
                "<strong>Centralized and Integrated Content Collection</strong>: the system can regularly collect and analyse service information and news articles about mental health from different sources, so that it can always provide the newest, up-to-date information.",
                "<strong>Conversational Assessment</strong>: the system is able to assess users' mental status via an interactive, conversational assessment tool.",
                "<strong>Automatic Information Recommendation</strong>: the system can automatically recommend articles and information to users according to the detected mental status.",
            ],
            "reference": [
                "ZHANG, Y., & CHEN, L. (2022). (rep.). A Mental Health Dialogue System. M.Sc. Practicum Report, Hong Kong Baptist University.<br> <a href='https://zhangyizhe.github.io/articles/MSc_Practicum_Report_Yizhe_ZHANG.pdf' target='_blank'>Available: https://zhangyizhe.github.io/articles/MSc_Practicum_Report_Yizhe_ZHANG.pdf</a>"
            ],
            "video": "https://www.youtube.com/embed/PkhFABofVg0",
        },
        {
            "id": 3,
            "photo": "/img/projects/PercyBot.png",
            "photos": [],
            "shortTitle": "PercyBot",
            "title": "PercyBot: Effects of Psychological Assessment Design on User Response to Open-Ended Questions in a Survey Chatbot for Youth Mental Health",
            "subtitle": "",
            "author": "Dr. JIN, Yucheng, Dr. CHEN, Li, Mr. ZHAO, Xianglin, and Dr. CAI, Wanling",
            "collaborator": "<strong>Collaborator</strong>: <a href='https://sa.hkbu.edu.hk/cdc' target='_blank'>Counselling and Development Centre, HKBU</a>",
            "description": "PercyBot is a chatbot designed for young adults who feel lonely.",
            "descriptionRest": "",
            "majorFundings": [],
            "features": [
                "<strong>Self-Assessment</strong>: PercyBot allows users to assess their feelings of loneliness and get empathetical responses via conversation with the chatbot.",
                "<strong>Timely Support</strong>: PercyBot cares about user emotions and provides useful mental health information.",
            ],
            "reference": [
                "Jin, Y., Chen, L., Zhao, X., & Cai, W. (2023). The Way You Test Me Matters: Effects of Psychological Assessment Design on User Response to Open-Ended Questions in a Survey Chatbot for Youth Mental Health (to be submitted)"
            ],
            "video": "https://www.youtube.com/embed/GJufdEYBDZ8",
        },
        {
            "id": 4,
            "photo": "/img/projects/MusicBot.png",
            "photos": [],
            "shortTitle": "MusicBot",
            "title": "“Listen to Music, Listen to Yourself”: Design of a Conversational Agent for Promoting Self-Awareness in Music Listening.",
            "subtitle": "",
            "author": "Dr. CAI, Wanling, Dr. JIN, Yucheng, Mr. ZHAO, Xianglin, and Dr. CHEN, Li",
            "collaborator": "",
            "description": "This music chatbot can guide users to become self-aware and express their thoughts when they listen to music.",
            "descriptionRest": "",
            "majorFundings": [],
            "features": [
                "<strong>Emotion-based Music Recommendation</strong>: The music chatbot can recommend music based on users’ current emotions to resonate with them and awaken their inner feelings and thoughts.",
                "<strong>Proactive Guidance</strong>:  The chatbot can proactivity guide users to follow the suggestions to express their thoughts, understand themselves better, and increase their self-awareness during listening to music.",
                "<strong>Social Information</strong>: The chatbot presents relevant music comments that other listeners have posted on the currently playing song. These comments can let users know what others have felt and thought to elicit their own resonance when listening to a song.",
            ],
            "reference": [
                "Cai, W., Jin, Y., Zhao, X., & Chen, L. (2023, April). “Listen to Music, Listen to Yourself”: Design of a Conversational Agent for Promoting Self-Awareness in Music Listening. In Proceedings of SIGCHI Conference on Human Factors in Computing Systems (CHI’23), April 23, 2023 (Hamburg, Germany)."
            ],
            "video": "https://www.youtube.com/embed/HLFLAHbyHCA",
        },
        {
            "id": 5,
            "photo": "/img/projects/Understanding Disclosure and Support.png",
            "photos": [
                {
                    "img": "/img/projects/socialMusicCommunity/ui_cscw.png",
                    "caption": "Fig.1 - UI Interfaces.",
                },
                {
                    "img": "/img/projects/socialMusicCommunity/result_cscw_2.png",
                    "caption": "Fig.2 - Result Data.",
                }
            ],
            "shortTitle": "Social Music Community",
            "title": "Social Music Community: Understanding Disclosure and Support in Social Music Communities for Youth Mental Health",
            "subtitle": "",
            "author": "Dr. JIN, Yucheng, Dr. CAI, Wanling, Dr. CHEN, Li, Ms. DAI, Yuwan , and Dr. JIANG, Tonglin",
            "collaborator": "",
            "description": "We used mixed methods to study mental health disclosure and support on NetEase Cloud Music (NCM), a large online social music community in China.",
            "descriptionRest": "In particular, we analysed rich music comments (N = 163) and the associated replies (N = 2,732) related to their psychological distress. Furthermore, we conducted an interview study with 13 young users to understand their perceptions of and motives for engaging in disclosure and support.",
            "majorFundings": [
                "NCM uses music to connect young people who share similar music tastes, and this becomes an emotional outlet that allows young people to self-disclose and seek social support. ",
                "The main types of comments involved experience sharing, and these comments often invoked peer support in the form of encouragement, caring, or self-disclosure.",
                "Music-induced and comment-induced emotional resonance was the main reason for their disclosure and support."
            ],
            "features": [],
            "reference": [
                "JIN, Y., Cai, W., Chen, L., Dai, Y., & Jiang, T. (2023). Understanding Disclosure and Support in Social Music Communities for Youth Mental Health. In Proceedings of ACM SIGCHI Conference on Computer-Supported Cooperative Work & Social Computing (CSCW’23), October 14, 2023 (Minneapolis, MN, USA)."
            ],
            "video": "",
        },
        {
            "id": 6,
            "photo": "/img/projects/Fact-Checking Chatbot.png",
            "photos": [],
            "shortTitle": "Fact-Checking Chatbot",
            "title": "Fact-Checking Chatbot: <br>Comparing Button-Based Chatbots with Webpages for Presenting Fact-Checking Results: A Case Study of Health Information",
            "subtitle": "",
            "author": "Mr. ZHAO, Xianglin, Dr. CHEN, Li, Dr. JIN, Yucheng, and Dr. ZHANG, Xinzhi",
            "collaborator": "",
            "description": "This fact-checking chatbot is designed to communicate health-related fact-checking results to users in a conversation. ",
            "descriptionRest": "",
            "majorFundings": [],
            "features": [
                "<strong>Button-based Interaction</strong>: This chatbot allows users to get fact-checking results about health-related information by tapping a few buttons in a conversation. In comparison with traditional fact-checking webpages, the chatbot can increase users’ perceived ease of use, which in turn increases the correction effectiveness. ",
                "<strong>Highlighted Expertise Cue</strong>: Our experiment shows that highlighting fact-checkers’ titles and avatars to convey the typical stereotypes of professionals tends to decrease users’ behavioural intentions of fact-checking, especially when interacting with webpages.",
            ],
            "reference": [
                "Zhao, X., Chen, L., Jin, Y., & Zhang, X. (2023). Comparing Button-based Chatbots with Webpages for Presenting Fact-Checking Results: A Case Study of Health Information. Information Processing & Management, 60(2), 103203."
            ],
            "video": "https://www.youtube.com/embed/ItcIC7eZiQo",
        },
        {
            "id": 7,
            "photo": "/img/projects/Wofoo Health Workshop.png",
            "photos": [
                {
                    img: "/img/projects/Wofoo Health Workshop.jpg",
                    caption: "Fig.1 - Workshop Activity.",
                },
                {
                    img: "/img/projects/wofooHealth/IMG_2053.JPG",
                    caption: "Fig.2 - Workshop Activity.",
                },
                {
                    img: "/img/projects/Wofoo Health Interface Widgets.jpg",
                    caption: "Fig.3 - Interface Design.",
                },
            ],
            "shortTitle": "Wofoo Health",
            "title": "Wofoo Health: Development of AI and Real-time Interactive App-based Platform for Tracking of Longitudinal Happiness and Healthy Aging Outcomes of the Aging Population",
            "subtitle": "",
            "author": "Prof. LAI, W. L. Daniel, Dr. CHEN, Li, Dr. JIN, Yucheng, Mr. ZHANG, Yizhe, Dr. CHAN, Helen, and Dr. CAI, Wanling",
            "collaborator": "<strong>Supported by</strong> <a href='http://www.wse.hk' target='_blank'>Wofoo Foundation Limited</a>",
            "description": "This project is to integrate the use of AI and data analytics in social and health sciences research to assess and track happiness and health outcomes of the ageing population in Hong Kong.",
            "descriptionRest": "The unique feature of this system is that through the use of AI technology, real time questions can be fed to users to capture their “here-and-now” responses to various social, health, and policy related measures, circumstances, and programming efforts. This proposed system will overcome the lag time limitation of traditional cross-sectional survey research methods in capturing happiness and health outcome status. The real time data could be adopted for building interactive database software that has the potential to provide useful longitudinal data visualisation and analytics for addressing healthy aging needs of the aging population in Hong Kong.",
            "majorFundings": [],
            "features": [],
            "reference": [],
            "video": "",
        }
    ]
})