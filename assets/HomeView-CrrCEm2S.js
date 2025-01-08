import{_ as r,o as a,c as n,a as m,w as h,b as e,t as f,r as l,p as g,d as _,F as c,e as y,f as b}from"./index-DK-TkF-2.js";const w={name:"HomeProjectCardView",props:["project"]},x={class:"column is-4"},C={class:"box m-1 p-0 pCanvas",style:{"border-radius":"10px",overflow:"hidden"}},j={class:"pCoverCanvas"},P=["src"],I={class:"px-5 mt-2"},k=["innerHTML"],H={class:"my-2 pDescription"};function A(d,t,s,p,i,v){const o=l("router-link");return a(),n("div",x,[m(o,{to:{name:"project",query:{pid:s.project.id}}},{default:h(()=>[e("div",C,[e("div",j,[e("img",{class:"pCover",src:s.project.photo,alt:"Project Photo"},null,8,P)]),e("div",I,[e("p",{class:"theme-color pTitle",innerHTML:s.project.title},null,8,k),e("div",H,f(s.project.description),1)])])]),_:1},8,["to"])])}const $=r(w,[["render",A],["__scopeId","data-v-91dcde49"]]),S="/assets/Personal-data-pana-Cbmh7C2u.png",V="/assets/Chatbot-rafiki-CfJoUobG.png",T="/assets/Chatbot-pana-CTJHS2OJ.png",B="/assets/Personalization-amico-CSgpaVH9.png",D={name:"HomeView",components:{HomeProjectCardView:$},data(){return{projectsData:g,teamDescription:"Our team is committed to conducting cutting-edge interdisciplinary research aimed at developing innovative and personalized AI applications that prioritize human well-being. We firmly believe that by combining the expertise of team members from diverse fields, including computer science, social sciences, creative arts, education, and cognitive sciences, we can create AI solutions that truly understand and cater to the unique needs of individuals."}},methods:{discoverBtnTap(){this.$router.push({name:"projects",params:{}})}}},z={class:"hero is-link"},L={class:"hero-body theme-background-color"},W={class:"container is-max-widescreen"},q={class:"content is-large"},M=["innerHTML"],E={class:"hero"},J={class:"hero-body pt-3"},N={class:"container is-max-widescreen"},O={class:"columns is-multiline"};function R(d,t,s,p,i,v){const o=l("HomeProjectCardView");return a(),n(c,null,[e("section",z,[e("div",L,[e("div",W,[t[0]||(t[0]=e("h1",{class:"title is-2"},"Intelligent Technology for Well-Being",-1)),t[1]||(t[1]=e("h2",{class:"subtitle is-3"},"Human-Centered AI, Conversational AI, Explainable AI",-1)),e("div",q,[e("p",{innerHTML:i.teamDescription},null,8,M)])])])]),t[3]||(t[3]=_('<section class="hero" data-v-989fe2c4><div class="hero-body pt-3 pb-0" data-v-989fe2c4><div class="container is-max-widescreen" data-v-989fe2c4><div class="content is-large" data-v-989fe2c4><p style="color:red;" data-v-989fe2c4> We are looking for motivated Research Assistant Professors, Research Assistants, and PhD students (education background in Computer Science, Information Systems, Psychology, or related majors). If you are interested, please send your CV with an optional research statement to Prof. Li Chen (<a href="mailto:lichen@comp.hkbu.edu.hk" style="color:red;text-decoration:underline;" data-v-989fe2c4>lichen@comp.hkbu.edu.hk</a>). The shortlisted candidates will be contacted for an interview. </p></div></div></div></section><hr data-v-989fe2c4><section class="hero" data-v-989fe2c4><div class="hero-body pb-3" data-v-989fe2c4><div class="container is-max-widescreen" data-v-989fe2c4><div class="columns" data-v-989fe2c4><div class="column is-3 is-text-center" data-v-989fe2c4><figure class="image" data-v-989fe2c4><img src="'+S+'" style="padding:20px;" alt="Small Photo" data-v-989fe2c4></figure><h5 class="subtitle is-5" style="width:100%;text-align:center;" data-v-989fe2c4>User-Centered Interaction Design</h5></div><div class="column is-3 is-text-center" data-v-989fe2c4><figure class="image" data-v-989fe2c4><img src="'+V+'" alt="Small Photo" data-v-989fe2c4></figure><h5 class="subtitle is-5" style="width:100%;text-align:center;" data-v-989fe2c4>Conversational AI</h5></div><div class="column is-3 is-text-center" data-v-989fe2c4><figure class="image" data-v-989fe2c4><img class="p-5" src="'+T+'" alt="Small Photo" data-v-989fe2c4></figure><h5 class="subtitle is-5" style="width:100%;text-align:center;" data-v-989fe2c4>Explainable AI</h5></div><div class="column is-3 is-text-center" data-v-989fe2c4><figure class="image" data-v-989fe2c4><img src="'+B+'" style="padding:20px;" alt="Small Photo" data-v-989fe2c4></figure><h5 class="subtitle is-5" style="width:100%;text-align:center;" data-v-989fe2c4>Personalized Recommender Systems</h5></div></div><div class="columns mt-3" data-v-989fe2c4><div class="column is-full" style="font-size:1.2rem;" data-v-989fe2c4><p class="pb-3" data-v-989fe2c4> By leveraging the power of advanced AI technologies, our research activities primarily focus on finding novel ways to promote human well-being, with a particular emphasis on education and mental health. We strive to revolutionize these areas by harnessing the potential of AI to deliver effective and impactful solutions. </p><p class="pb-3" data-v-989fe2c4> In our pursuit of developing AI-powered applications, we place great importance on empirical evidence. We aim to create applications that have been rigorously tested and scientifically proven to be effective. By relying on sound research methodologies and data-driven insights, we ensure that our applications are not only innovative but also reliable and trustworthy. </p><p data-v-989fe2c4> We believe in the importance of inclusivity and accessibility. Our goal is to develop applications that can serve a wide range of users, including the general population and specific groups with unique needs. To achieve this, we actively collaborate with different organizations, such as educational institutions, healthcare providers, and community groups, to understand the specific requirements of diverse user groups and tailor our applications accordingly. </p></div></div></div></div></section><hr data-v-989fe2c4>',4)),e("section",E,[e("div",J,[e("div",N,[t[2]||(t[2]=e("p",{class:"title mx-5",style:{color:"black"}}," Projects ",-1)),e("div",O,[(a(!0),n(c,null,y(i.projectsData.list,u=>(a(),b(o,{project:u},null,8,["project"]))),256))])])])])],64)}const U=r(D,[["render",R],["__scopeId","data-v-989fe2c4"]]);export{U as default};