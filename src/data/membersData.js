import {reactive} from 'vue'

export const membersData = reactive({
    list: [
        {
            title: "Faculty Members",
            members: [
                {
                    photo: "https://www.comp.hkbu.edu.hk/v1/?pic_org=418",
                    displayName: "Dr. CHEN, Li",
                    cnName: "陳黎博士",
                    title: "",
                    position: "Associate Head (Research) and Associate Professor, Department of Computer Science, Hong Kong Baptist University",
                    contact: "lichen@comp.hkbu.edu.hk",
                    website: "https://www.comp.hkbu.edu.hk/~lichen",
                    location: "",
                },
                {
                    photo: "https://www.comp.hkbu.edu.hk/v1/?pic_org=1051",
                    displayName: "Dr. JIN, Yucheng",
                    cnName: "金昱成博士",
                    title: "",
                    position: "Research Assistant Professor, Department of Computer Science, Hong Kong Baptist University",
                    contact: "yuchengjin@comp.hkbu.edu.hk",
                    website: "https://www.comp.hkbu.edu.hk/~yuchengjin/",
                    location: "",
                },
            ]
        },
        {
            title: "Students",
            members: [
                {
                    photo: "https://www.comp.hkbu.edu.hk/~lichen/images/Zhaoxianglin.jpg",
                    displayName: "Mr. Xianglin Zhao",
                    cnName: "趙祥麟先生",
                    title: "",
                    position: "MPhil Student, Hong Kong Baptist University",
                    contact: "csxlzhao@comp.hkbu.edu.hk",
                    website: "https://github.com/ZhaoXianglin",
                    location: "",
                },
                {
                    photo: "https://www.comp.hkbu.edu.hk/~lichen/images/Yizhe_Zhang.jpg",
                    displayName: "Mr. ZHANG, Yizhe",
                    cnName: "張藝哲先生",
                    title: "",
                    position: "Research Assistant, Hong Kong Baptist University",
                    contact: "csyzzhang@comp.hkbu.edu.hk",
                    website: "https://elecoxy.com",
                    location: "",
                },
                {
                    photo: "https://wanlingcai.github.io/images/wanlingcai_dublin.jpg",
                    displayName: "Ms. Wanling Cai",
                    cnName: "蔡婉鈴小姐",
                    title: "",
                    position: "Postdoctoral researcher, Trinity College Dublin (TCD)",
                    contact: "-",
                    website: "https://wanlingcai.github.io/",
                    location: "",
                }
            ]
        }
    ]
})