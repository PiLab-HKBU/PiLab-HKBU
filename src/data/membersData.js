import {reactive} from 'vue'

export const membersData = reactive({
    list: [
        {
            title: "Faculty Members",
            members: [
                {
                    photo: "https://www.comp.hkbu.edu.hk/v1/?pic_org=418",
                    displayName: "CHEN, Li",
                    cnName: "陳黎教授",
                    title: "Prof. ",
                    position: "Associate Head (Research) and Professor<br>Department of Computer Science<br>Hong Kong Baptist University",
                    interests: "Conversational AI, Explainable AI, Recommender Systems, Human-Computer Interaction",
                    contact: "lichen@comp.hkbu.edu.hk",
                    website: "https://www.comp.hkbu.edu.hk/~lichen",
                    location: "Hong Kong SAR, China",
                },
                {
                    photo: "https://www.comp.hkbu.edu.hk/v1/?pic_org=1051",
                    displayName: "JIN, Yucheng",
                    cnName: "金昱成博士",
                    title: "Dr. ",
                    position: "Assistant Professor<br>Duke Kunshan University",
                    interests: "User Interaction with AI systems, Human Design Creativity through AI Technologies",
                    contact: "yj232@duke.edu",
                    website: "https://yucheng.gold/",
                    location: "Kunshan, China",
                },
                {
                    photo: "/img/members/Jiangtonglin.jpg",
                    displayName: "JIANG, Tonglin",
                    cnName: "姜佟琳博士",
                    title: "Dr. ",
                    position: "Tenure-track Assistant Professor<br>School of Psychological and Cognitive Sciences<br>Peking University",
                    interests: "Health Psychology for Mental Well-Being, especially Self-Concepts, Nostalgia, and Meaningful Existence",
                    contact: "tljiang@pku.edu.cn",
                    website: "http://www.psy.pku.edu.cn/szdw/qzjy/jsyjy/jtl/index.htm",
                    location: "Beijing, China",
                },
                {
                    photo: "/img/members/Daniel.jpg",
                    displayName: "LAI W. L., Daniel",
                    cnName: "黎永亮教授",
                    title: "Prof. ",
                    position: "Dean and Chair Professor<br>Faculty of Arts and Social Sciences<br>Hong Kong Baptist University",
                    interests: "Social work and Gerontology, Health and Aging, Culture and Immigration, and Outcome Evaluation",
                    contact: "daniel_lai@hkbu.edu.hk",
                    website: "https://sowk.hkbu.edu.hk/en/people/academic_staff_detail/35?back=%2Fen%2Fpeople%2F",
                    location: "Hong Kong SAR, China",
                },
                {
                    photo: "/img/members/dfkwong.png",
                    displayName: "WONG, Fu-keung, Daniel",
                    cnName: "黃富強教授",
                    title: "Prof. ",
                    position: "Chair Professor<br>Department of Social Work<br>Hong Kong Baptist University",
                    interests: "Evidence-based practice in mental health, Cognitive-behaviour therapy, and Community mental health issues",
                    contact: "dfkwong@hkbu.edu.hk",
                    website: "https://sowk.hkbu.edu.hk/en/people/academic_staff_detail/18/?back=%2Fen%2Fpeople%2F",
                    location: "Hong Kong SAR, China",
                },
                {
                    photo: "/img/members/zhuangxy.jpg",
                    displayName: "ZHUANG, Xiaoyu",
                    cnName: "莊曉宇博士",
                    title: "Dr. ",
                    position: "Assistant Professor<br>Department of Social Work<br>Hong Kong Baptist University",
                    interests: "Mental health of youth and families, Prevention and early intervention in mental health, Emotional resilience of diverse populations, Migration and psychological adaptation",
                    contact: "zhuangxy@hkbu.edu.hk",
                    website: "https://sowk.hkbu.edu.hk/en/people/academic_staff_detail/44?back=%2Fen%2Fpeople%2F",
                    location: "Hong Kong SAR, China",
                },
                {
                    photo: "/img/members/ZHANGXinzhi.jpg",
                    displayName: "ZHANG, Xinzhi",
                    cnName: "張昕之博士",
                    title: "Dr. ",
                    position: "Associate Professor<br>Department of Media and Communication<br>City University of Hong Kong",
                    interests: "Digital Public Health Campaigns, and Computational Social Science",
                    contact: "xzzhang2@gmail.com",
                    website: "https://drxinzhizhang.com/",
                    location: "Hong Kong SAR, China",
                },
                {
                    photo: "/img/members/wanlingcai_dublin.jpg",
                    displayName: "CAI, Wanling",
                    cnName: "蔡婉鈴博士",
                    title: "Dr. ",
                    position: "Postdoctoral Researcher<br>School of Computer Science and Statistics<br>Trinity College Dublin (TCD)",
                    interests: "Human-AI Interaction, Technology for Health and Well-being, Usable Security and Privacy, Recommender Systems",
                    contact: "-",
                    website: "https://wanlingcai.github.io/",
                    location: "Dublin, Ireland",
                },
                {
                    photo: "/img/members/leili.jpg",
                    displayName: "LI, Lei",
                    cnName: "李磊博士",
                    title: "Dr. ",
                    position: "Post-doctoral Research Fellow<br>Department of Computer Science<br>Hong Kong Baptist University",
                    interests: "Explainable Recommendation, Recommender Systems, Large Language Models, Natural Language Processing",
                    contact: "csleili@RemoveThis.comp.hkbu.edu.hk",
                    website: "https://lileipisces.github.io",
                    location: "Hong Kong SAR, China",
                },
                {
                    photo: "/img/members/yizhezhang.png",
                    displayName: "ZHANG, Yizhe",
                    cnName: "張藝哲先生",
                    title: "Mr. ",
                    position: "Ph.D. student<br>Department of Computer Science<br>KU Leuven, Belgium",
                    interests: "Recommender Systems, Human-Computer Interaction, Software Engineering",
                    contact: "",
                    website: "https://elecoxy.com/#/",
                    location: "Leuven, Belgium",
                },
                {
                    photo: "/img/members/YUSinan.jpg",
                    displayName: "YU, Sinan",
                    cnName: "余思南女士",
                    title: "Mrs. ",
                    position: "Ph.D. student<br>School of Communication<br>Hong Kong Baptist University",
                    interests: "Human-Computer Interaction, Art Design Psychology, Music Therapy",
                    contact: "sinanyu@life.hkbu.edu.hk",
                    website: "https://github.com/Yusi-sinanyu",
                    location: "Hong Kong SAR, China",
                },
                // {
                //     photo: "/img/members/wenfang_liang.jpg",
                //     displayName: "LEUNG, Manfong",
                //     cnName: "梁文芳博士",
                //     title: "Dr. ",
                //     position: "普通話培訓測試中心主任<br>高級講師<br>語文中心<br>香港浸會大學",
                //     interests: "語言評估, 漢語作為第二語言教學",
                //     contact: "mfleung@hkbu.edu.hk",
                //     website: "https://artsbu.hkbu.edu.hk/about-us/our-community-of-teachers-and-researchers/dr-leung-man-fong",
                //     location: "Hong Kong SAR, China",
                // },
                // {
                //     photo: "/img/members/jing_jin.jpg",
                //     displayName: "JIN, Jing",
                //     cnName: "金晶博士",
                //     title: "Dr. ",
                //     position: "副教授<br>語言教育中心主任<br>中國語言學系<br>香港教育大學",
                //     interests: "Chinese linguistics, Syntax-semantics interface, Syntax-pragmatics interface, and Formal approach to language acquisition",
                //     contact: "jjin@eduhk.hk",
                //     website: "https://pappl.eduhk.hk/rich/web/person.xhtml?pid=163248&name=JIN-Jing",
                //     location: "Hong Kong SAR, China",
                // },
            ]
            //     .sort((a, b) => {
            //     const nameA = a.displayName; // ignore upper and lowercase
            //     const nameB = b.displayName; // ignore upper and lowercase
            //
            //     return nameA > nameB ? 1 : -1;
            // })
        },
        {
            title: "Students",
            members: [

            ]
        }
    ]
})
