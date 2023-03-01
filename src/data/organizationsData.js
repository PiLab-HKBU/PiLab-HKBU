import {reactive} from 'vue'

export const organizationsData = reactive({
    list: [
        {
            photo: "/img/organizations/hkbu-cdc.jpg",
            displayName: "Counselling & Development Center, HKBU",
            cnName: "香港浸會大學輔導中心",
            website: "https://sa.hkbu.edu.hk/cdc",
            location: "Hong Kong SAR, China",
        },
        {
            photo: "/img/organizations/logo_cisl-2x.png",
            displayName: "Center for Innovative Service-Learning, HKBU",
            cnName: "香港浸會大學創新服務學習中心",
            website: "https://cisl.hkbu.edu.hk",
            location: "Hong Kong SAR, China",
        },
        {
            photo: "/img/organizations/wfl.jpg",
            displayName: "Wofoo Foundation",
            cnName: "和富慈善基金",
            website: "https://wse.hk/",
            location: "Hong Kong SAR, China",
        },
    ]
})