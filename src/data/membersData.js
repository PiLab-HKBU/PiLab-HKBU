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
                    title: "Head of HCI group",
                    position: "Associate Head (Research) and Associate Professor, Department of Computer Science",
                    contact: "lichen@comp.hkbu.edu.hk",
                    website: "https://www.comp.hkbu.edu.hk/~lichen",
                    location: "DLB632",
                },
                {
                    photo: "https://www.comp.hkbu.edu.hk/v1/?pic_org=1051",
                    displayName: "Dr. JIN, Yucheng",
                    cnName: "金昱成博士",
                    title: "Research Assistant Professor",
                    position: "Research Assistant Professor, Department of Computer Science",
                    contact: "yuchengjin@comp.hkbu.edu.hk",
                    website: "https://www.comp.hkbu.edu.hk/~yuchengjin/",
                    location: "DLB802",
                },
            ]
        },
        {
            title: "Students",
            members: [
                {
                    photo: "https://www.comp.hkbu.edu.hk/~lichen/images/WanlingCAI.jpg",
                    displayName: "Ms. Wanling Cai",
                    cnName: "蔡婉鈴小姐",
                    title: "Postdoctoral researcher",
                    position: "Postdoctoral researcher",
                    contact: "-",
                    website: "https://wanlingcai.github.io/",
                    location: "-",
                },
                {
                    photo: "https://www.comp.hkbu.edu.hk/~lichen/images/Zhaoxianglin.jpg",
                    displayName: "Mr. Xianglin Zhao",
                    cnName: "趙祥麟先生",
                    title: "MPhil Student",
                    position: "MPhil Student",
                    contact: "csxlzhao@comp.hkbu.edu.hk",
                    website: "https://github.com/ZhaoXianglin",
                    location: "DLB625",
                },
                {
                    photo: "https://www.comp.hkbu.edu.hk/~lichen/images/Yizhe_Zhang.jpg",
                    displayName: "Mr. ZHANG, Yizhe",
                    cnName: "張藝哲先生",
                    title: "Research Assistant",
                    position: "Research Assistant",
                    contact: "csyzzhang@comp.hkbu.edu.hk",
                    website: "https://elecoxy.com",
                    location: "DLB625",
                }
            ]
        }
    ]
})