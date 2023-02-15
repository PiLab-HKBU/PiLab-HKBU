import {reactive} from 'vue'

export const projectsData = reactive({
    list: [
        {
            "id": 1,
            "photo": "./img/projects/SunnyBot.png",
            "shortTitle": "SunnyBot",
            "title": "SunnyBot: Design and Implementation of a Music Recommendation Chatbot for Lonely People",
            "subtitle": "",
            "author": "Mr. Xianglin Zhao and Dr. Li Chen ",
            "description": "SunnyBot is a web-based chatbot designed to track users’ daily mood, assess their level of loneliness, and recommend music according to their mood.",
            "features": [
                "Mood Diary: the system allows users to indicate their daily feelings and visualize their mood changes over time.",
                "Loneliness Interview: the system is able to assess users' loneliness status through conversation.",
                "Music Recommendation: the system can recommend music to users according to their current mood.",
            ],
            "reference": [
                "ZHAO, X., & CHEN, L. (2021). (rep.). Design and Implementation of a Music Recommendation Chatbot for Lonely People. M.Sc. Practicum Report, Hong Kong Baptist University.<br> <a href='https://zhaoxianglin.github.io/Files/MSc_Parcticium_Report_Xianglin_ZHAO.pdf' target='_blank'>Available: https://zhaoxianglin.github.io/Files/MSc_Parcticium_Report_Xianglin_ZHAO.pdf</a>"
            ],
            "video": "https://www.youtube.com/embed/S8sB3t7coi4",
        },
        {
            "id": 2,
            "photo": "./img/projects/Pistis Health.png",
            "shortTitle": "Pistis Health",
            "title": "Pistis Health: A Mental Health Support System with Service and Article Recommendations",
            "subtitle": "",
            "author": "Mr. Yizhe Zhang and Dr. Li Chen",
            "description": "Pistis Health is a mental health dialogue platform. The chatbot can talk to users to create their behavioral profiles for recommending suitable psychological suggestions and articles. ",
            "features": [
                "Centralized and Integrated Content Database: the system can regularly collect and analyse news articles about mental health from different sources to expand our database, so that it can always provide the newest, up-to-date information.",
                "Conversational Assessment: the system is able to assess users' mental status via an interactive, conversational assessment tool. ",
                "Automatic Article Recommendation: the system can automatically recommend articles to users according to the detected mental status.",
            ],
            "reference": [
                "ZHANG, Y., & CHEN, L. (2022). (rep.). A Mental Health Dialogue System. M.Sc. Practicum Report, Hong Kong Baptist University.<br> <a href='https://zhangyizhe.github.io/articles/MSc_Practicum_Report_Yizhe_ZHANG.pdf' target='_blank'>Available: https://zhangyizhe.github.io/articles/MSc_Practicum_Report_Yizhe_ZHANG.pdf</a>"
            ],
            "video": "https://www.youtube.com/embed/PkhFABofVg0",
        },
        {
            "id": 3,
            "photo": "./img/projects/PercyBot.png",
            "shortTitle": "PercyBot",
            "title": "PercyBot: Effects of Psychometric Assessment Design on User Response Quality for Open-ended Questions in a Mental Health Survey Chatbot",
            "subtitle": "",
            "author": "Dr. Yucheng Jin, Dr. Li Chen, Dr. Wanling Cai, and Mr. Xianglin Zhao \n" +
                "Collaborator: Counselling and Development Centre, HKBU",
            "description": "PercyBot is a chatbot designed for young adults who feel lonely.",
            "features": [
                "Self-Assessment: PercyBot allows users to assess their feeling of loneliness and get empathetical responses via conversation with the chatbot.",
                "Timely Support: PercyBot cares about user emotions and provides useful mental health information.",
            ],
            "reference": [
                "Jin, Y., Chen, L., Zhao, X., & Cai, W. (2023). The Way You Test Me Matters: Effects of Psychometric Assessment Design on User Response Quality for Open-ended Questions in a Mental Health Survey Chatbot."
            ],
            "video": "https://www.youtube.com/embed/GJufdEYBDZ8",
        },
        {
            "id": 4,
            "photo": "./img/projects/MusicBot.png",
            "shortTitle": "MusicBot",
            "title": "“Listen to Music, Listen to Yourself”: Support Self-Awareness While Listening to Music",
            "subtitle": "",
            "author": "Dr. Wanling Cai, Dr. Yucheng Jin, Mr. Xianglin Zhao, and Dr. Li Chen",
            "description": "We designed and implemented a music chatbot that can guide users to become self-aware and express their thoughts when they listen to music.",
            "features": [
                "Emotion-based Music Recommendation: The music chatbot can recommend music based on users’ current emotions to resonate with them and awaken their inner feelings and thoughts.",
                "Proactive Guidance:  The chatbot can proactivity guide users to follow the suggestions to express their thoughts, understand themselves better, and increase their self-awareness during listening to music.",
                "Social Information: The chatbot presents relevant music comments that other listeners posted on the currently playing song. These comments can let users know what others have felt and thought to elicit users’ resonance when listening to a song.",
            ],
            "reference": [
                "Cai, W., Jin, Y., Zhao, X., & Chen, L. (2023, April). “Listen to Music, Listen to Yourself”: Design of a Conversational Agent for Promoting Self-Awareness in Music Listening. In CHI Conference on Human Factors in Computing Systems (CHI ’23) "
            ],
            "video": "https://www.youtube.com/embed/HLFLAHbyHCA",
        },
        {
            "id": 5,
            "photo": "./img/projects/Understanding Disclosure and Support.png",
            "shortTitle": "Social Music Communities",
            "title": "Understanding Disclosure and Support in Social Music Communities for Youth Mental Health",
            "subtitle": "",
            "author": "Dr. Yucheng Jin, Dr. Wanling Cai, Dr. Li Chen, Ms. Yuwan Dai (School of Psychological and Cognitive Sciences, Peking University, China), and Dr. Tonglin Jiang (School of Psychological and Cognitive Sciences, Peking University, China) ",
            "description": "We used mixed methods to study mental health disclosure and support on NetEase Cloud Music, a large online social music community in China. In particular, we analysed rich music comments (N = 163) and the associated replies (N = 2,732) related to their psychological distress. Furthermore, we conducted an interview study with 13 young users to understand their perceptions of and motives for engaging in disclosure and support. ",
            "features": [
                "NCM uses music to connect young people who share similar music tastes, and this becomes an emotional outlet that allows young people to self-disclose and seek social support. ",
                "The main types of comments involved experience sharing, and these comments often invoked peer support in the form of encouragement, caring, or self-disclosure.",
                "Music-induced and comment-induced emotional resonance was the main reason for their disclosure and support."
            ],
            "reference": [
                "Y., Cai, W., Chen, L., Dai, Y., & Jiang, T. (2023). Understanding Disclosure and Support in Social Music Communities for Youth Mental Health. In Proceedings of the ACM on Human-Computer Interaction (CSCW). "
            ],
            "video": "",
        },
        {
            "id": 6,
            "photo": "./img/projects/Fact-Checking Chatbot.png",
            "shortTitle": "Fact-Checking Chatbot",
            "title": "Fact-Checking Chatbot: Comparing Button-Based Chatbots with Webpages for Presenting<br>Fact-Checking Results: A Case Study of Health Information",
            "subtitle": "",
            "author": "Mr. Xianglin Zhao, Dr. Li Chen, Dr. Yucheng Jin, and Dr. Xinzhi Zhang (School of Communication, HKBU) ",
            "description": "This fact-checking chatbot is designed to communicate health-related fact-checking results to users in a conversation. ",
            "features": [
                "Button-based Interaction: This chatbot allows users to get fact-checking results about health-related information by tapping a few buttons in a conversation. In comparison with traditional fact-checking webpages, the chatbot can increase users’ perceived ease of use, which in turn increases the correction effectiveness. ",
                "High-lighted Expertise Cue: Our experiment shows that highlighting fact-checkers’ titles and avatars to convey the typical stereotypes of professionals tends to decrease users’ behavioural intentions of fact-checking, especially when interacting with webpages.",
            ],
            "reference": [
                "Zhao, X., Chen, L., Jin, Y., & Zhang, X. (2023). Comparing button-based chatbots with webpages for presenting fact-checking results: A case study of health information. Information Processing & Management, 60(2), 103203."
            ],
            "video": "https://www.youtube.com/embed/ItcIC7eZiQo",
        }
    ]
})