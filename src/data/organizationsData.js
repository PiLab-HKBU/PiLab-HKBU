import {reactive} from 'vue'

export const organizationsData = reactive({
    list: [
        {
            photo: "/img/organizations/ss-logo.png",
            displayName: "The Faculty of Social Sciences, HKBU",
            cnName: "香港浸會大學社會科學院",
            website: "https://sosc.hkbu.edu.hk",
            location: "Hong Kong SAR, China",
        },
        {
            photo: "/img/organizations/hkbu-cdc.jpg",
            displayName: "Counselling & Development Center, HKBU",
            cnName: "香港浸會大學輔導中心",
            website: "https://sa.hkbu.edu.hk/cdc",
            location: "Hong Kong SAR, China",
        },
        {
            photo: "/img/organizations/wfl.jpg",
            displayName: "Wofoo Foundation",
            cnName: "和富慈善基金",
            website: "http://www.wfl.com.hk",
            location: "Hong Kong SAR, China",
        },
    ]
})