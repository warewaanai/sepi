(this.webpackJsonpsrsi_front=this.webpackJsonpsrsi_front||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(1),r=n.n(c),a=n(13),s=n.n(a),o=n(17),l=(n(35),n(2)),j=n(5),d=(n(36),n(3)),u=function(e){var t=Object(c.useState)(0),n=Object(d.a)(t,2),r=n[0],a=n[1],s=e.cps?e.cps:100,o=!!e.blink&&e.blink;return Object(c.useEffect)((function(){0===r||"string"!=typeof e.children?window.setTimeout((function(){return a({text:"_",counter:0})}),100):r.counter<=e.children.length?window.setTimeout((function(){return a({text:e.children.slice(0,r.counter)+(r.counter%2||r.counter<e.children.length?"_":""),counter:r.counter+1})}),s):window.setTimeout((function(){return a({text:e.children.slice(0,r.counter)+(r.counter%2&&o?"_":""),counter:r.counter+1})}),700)})),Object(i.jsxs)(i.Fragment,{children:[" ",r?r.text:null," "]})},b=(n(37),function(e){return 3===e.length?"rgb(".concat(e[0],", ").concat(e[1],", ").concat(e[2],")"):4===e.length?"rgba(".concat(e[0],", ").concat(e[1],", ").concat(e[2],", ").concat(e[3],")"):void 0}),h=function(e){var t=Object(c.useRef)(null),n=Object(c.useState)(0),r=Object(d.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){if(0===a){s(1);var e=t.current.getContext("2d"),n=420,i=0;window.setTimeout((function t(){var c=function(t,n,i){e.beginPath(),e.arc(t,n,150,0,2*Math.PI),e.strokeStyle="rgba(0, 0, 0, 0)",e.fillStyle=b(i.slice(0,4)),e.shadowColor=b(i.slice(0,3)),e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowBlur=20,e.fill(),e.stroke()};if(i<140){e.fillStyle="white",e.fillRect(0,0,1e4,1e4);var r=1-i/n;e.font="24px JetBrainsMono, Courier, monospace",c(300,300+150*r,[0,200,0,.4]),c(300-150*Math.cos(Math.PI/6)*r,300-150*Math.sin(Math.PI/6)*r,[255,0,0,.5]),c(300+150*Math.cos(Math.PI/6)*r,300-150*Math.sin(Math.PI/6)*r,[0,0,255,.45]),e.fillStyle="white",e.font="22px JetBrainsMono, Courier, monospace",e.shadowColor="white",e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowBlur=20,e.fillText("Informatic\u0103",170-150*Math.cos(Math.PI/6)*r,280-150*Math.sin(Math.PI/6)*r),e.fillText("Excelen\u021b\u0103",300+150*Math.cos(Math.PI/6)*r,280-150*Math.sin(Math.PI/6)*r),e.fillText("Performan\u021b\u0103",225,320+200*r),window.setTimeout(t,1e3/30)}else if(i<n){e.fillStyle="white",e.fillRect(0,0,1e4,1e4);var a=i/n;e.font="24px JetBrainsMono, Courier, monospace",c(300,400,[0,200,0,.4]),c(300-150*Math.cos(Math.PI/6)*2/3,300-150*Math.sin(Math.PI/6)*2/3,[255,0,0,.5]),c(300+150*Math.cos(Math.PI/6)*2/3,300-150*Math.sin(Math.PI/6)*2/3,[0,0,255,.45]),e.fillStyle="white",e.font="22px JetBrainsMono, Courier, monospace",e.shadowColor="white",e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowBlur=20,e.fillText("Informatic\u0103",170-150*Math.cos(Math.PI/6)*2/3,280-150*Math.sin(Math.PI/6)*2/3),e.fillText("Excelen\u021b\u0103",300+150*Math.cos(Math.PI/6)*2/3,280-150*Math.sin(Math.PI/6)*2/3),e.fillText("Performan\u021b\u0103",225,320+400/3),e.font="24px JetBrainsMono, Courier, monospace",e.fillStyle=b([255,255,255,3*(a-1/3)/2]),e.fillText("SEPI",270,310),window.setTimeout(t,1e3/30)}i+=1}),1e3/30)}})),Object(i.jsx)("div",{id:"prezentare",children:Object(i.jsxs)("div",{id:"PrezentareScreen",children:[Object(i.jsx)("div",{id:"VennDiagramContainer",children:Object(i.jsx)("canvas",{ref:t,id:"VennDiagram",width:"600px",height:"600px"})}),Object(i.jsxs)("div",{id:"PrezentareText",children:[" ",Object(i.jsx)("div",{className:"TextContainer",children:Object(i.jsxs)("span",{style:{fontSize:"18px"},children:[Object(i.jsx)("br",{}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"SEPI"})," este o asocia\u021bie care-\u0219i propune s\u0103 promoveze \xeenv\u0103\u021b\u0103m\xe2ntul informatic rom\xe2nesc de performan\u021b\u0103."]}),Object(i.jsx)("p",{children:"Membrii SEPI sunt coordonatori \u0219i membri ai Comisiilor Na\u021bionale ale Olimpiadei Na\u021bionale de Informatic\u0103, ai Comisiilor de selec\u021bie a Loturilor reprezentative ale Rom\xe2niei pe parcursul celor aproape 30 de ani \xeen care Rom\xe2nia a reprezentat una dintre for\u021bele recunoscute pe plan mondial \xeen domeniu."}),Object(i.jsx)("p",{children:"\xcen asocia\u021bie se reg\u0103sesc cadre didactice cu o preg\u0103tire profesional\u0103 de excep\u021bie, fo\u0219ti olimpici na\u021bionali \u0219i interna\u021bionali - studen\u021bi la renumite universit\u0103\u021bi din \u021bar\u0103 \u0219i din str\u0103in\u0103tate, speciali\u0219ti \xeen domeniul IT, to\u021bi uni\u021bi de pasiuni comune: informatica, programarea \u0219i algoritmica."})]})})]})]})})},O=function(e){return Object(i.jsxs)("div",{id:"misiune",children:[Object(i.jsx)("h1",{children:Object(i.jsx)(u,{children:"Proiectele Noastre"})}),Object(i.jsx)("span",{style:{fontSize:"16px"},children:Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("h3",{children:Object(i.jsx)(l.b,{to:"/osepi",style:{textDecoration:"none",color:"black"},children:"OSEPI - Olimpiada Societ\u0103\u021bii pentru Excelen\u021b\u0103 \u0219i Performan\u021b\u0103 \xeen Informatic\u0103"})}),Object(i.jsx)("p",{children:"Competi\u021bia se dore\u0219te a suplini lipsa \xeen acest an a etapelor Olimpiadei de Informatic\u0103 \u0219i a Taberelor de Lot Na\u021bional. Odat\u0103 cu InfoPro s-a testat \u0219i o platform\u0103 online care s\u0103 sus\u021bin\u0103 un concurs cu c\xe2teva sute de participan\u021bi simultan. Ne place s\u0103 credem c\u0103 avem infrastructura necesar\u0103 pentru a ne adresa unui num\u0103r mare de elevi care s\u0103 participe la diverse etape de selec\u021bie (jude\u021bean\u0103, na\u021bional\u0103, de alegere a loturilor reprezentative). Olimpiada se va desf\u0103\u0219ura \xeen mai multe etape \xeen perioada martie-aprilie 2021."})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("h3",{children:Object(i.jsx)("a",{href:"https://infopro.lrmd.ro/",target:"_blank",style:{textDecoration:"none",color:"black"},children:"InfoPro"})}),Object(i.jsx)("p",{children:"Concursul a ap\u0103rut din dorin\u021ba comunit\u0103\u021bii formate \xeen jurul olimpiadelor \u0219i loturilor na\u021bionale de a sprijini elevii \xeen condi\u021biile dificile provocate de pandemie. Anularea Olimpiadei Na\u021bionale \xeen anul 2020 \u0219i apoi a tuturor etapelor pentru 2021 a avut un efect demobilizator \xeen r\xe2ndul elevilor rom\xe2ni. Comunitatea din jurul Olimpiadelor a r\u0103spuns mai \xeent\xe2i prin organizarea selec\u021biei din var\u0103 \xeen scopul form\u0103rii echipelor care apoi ne-au reprezentat la competi\u021biile interna\u021bionale. Efectul: 17 medalii (3 de aur, 8 de argint \u0219i 6 de bronz). InfoPro s-a dorit a fi semnalul dat unei mai largi categorii de elevi pentru a le readuce \xeencrederea c\u0103 lucrurile nu stau pe loc la noi \u0219i c\u0103 totul va fi bine."})]})]})})]})},p=function(e){var t=e.external?e.pic:"/static/"+e.pic,n=window.innerWidth>600&&e.float&&"center"!==e.float?e.float:null;return Object(i.jsxs)("div",{style:{maxWidth:"95%",width:e.width,height:e.height,float:n,margin:"center"===e.float?"auto":"15px",padding:"5px",borderRadius:"7px",boxShadow:"3px 5px 5px 5px #999"},children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:t,alt:e.children,style:{height:"100%",width:"100%",borderRadius:"5px"}})}),Object(i.jsx)("div",{style:{fontSize:"14px"},children:e.children})]})},x=(n(39),function(e){if(console.log(e.content),window.innerWidth<800)return e.content.map((function(e){return Object(i.jsx)(i.Fragment,{children:e.map((function(e){return Object(i.jsxs)("a",{href:e.link,children:[Object(i.jsx)("img",{src:e.pic,style:{width:"100%"}})," "]})}))})}));var t=0,n=e.content.map((function(e){var n=e.map((function(e){return Object(i.jsx)("div",{className:"PictureFrame",children:Object(i.jsx)("a",{target:"_blank",href:e.link,children:Object(i.jsx)("img",{src:e.pic,className:"CarouselPic"})})})}));return t+=1,Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"CarouselRow",children:[Object(i.jsxs)("div",{className:"slice",style:{animation:(t%2===0?"slideSliceRight":"slideSliceLeft")+" ".concat(15+t%2*(t/2>=1?5:0),"s linear infinite")},children:[" ",n," "]}),Object(i.jsxs)("div",{className:"slice",style:{animation:(t%2===0?"slideSliceRight":"slideSliceLeft")+" ".concat(15+t%2*(t/2>=1?5:0),"s linear infinite")},children:[" ",n," "]})]})})}));return console.log(n),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"Carousel",width:e.width,children:n})})}),m=(n(40),n.p+"media/infoarena.d5f5add2.png"),f=n.p+"media/pbinfo.28a498e8.png",v=n.p+"media/acc.28fb01b7.png",g=n.p+"media/ssmr.4672754b.png",S=n.p+"media/unibuc.23830358.jpg",I=n.p+"media/universitaria.5000052d.png",P=n.p+"media/uvt.a0707e23.jpg",w=n.p+"media/upir.e60875e6.gif",E=n.p+"media/univiasi.8a643c53.jpg",k=n.p+"media/babes_bolyai.d9dd75b1.gif",C=function(e){return Object(i.jsxs)("div",{className:"Parteneri",children:[Object(i.jsx)("h1",{children:Object(i.jsx)(u,{children:"Partenerii no\u0219tri"})}),Object(i.jsx)(x,{content:[[{link:"https://pbinfo.ro/",pic:f},{link:"http://upir.ro/index.php/ro/",pic:w},{link:"https://profs.info.uaic.ro/~consortiu/index.html",pic:I}],[{link:"https://infoarena.ro/",pic:m},{link:"https://www.info.uaic.ro/",pic:"data:image/png;base64,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"},{link:"https://www.uaic.ro/",pic:E},{link:"https://liceecentenare.ro/",pic:v}],[{link:"https://rms.unibuc.ro/",pic:g},{link:"https://www.uvt.ro/ro/",pic:P},{link:"https://unibuc.ro/",pic:S},{link:"https://www.ubbcluj.ro/ro/",pic:k}]]})]})},y=n.p+"media/warning.38c6403f.png",M=function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(h,{}),Object(i.jsx)(O,{}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{style:{margin:"0 auto",textAlign:"center",border:"solid",width:"max-content",padding:"4px"},children:Object(i.jsxs)(l.b,{to:"/osepi",style:{color:"black",textDecoration:"none"},children:[Object(i.jsx)("img",{src:y,alt:"warningsign",width:"32px",style:{display:"inline"}}),Object(i.jsx)("span",{style:{fontSize:"32px",fontWeight:"bold"},children:"Vezi ultimele anun\u021buri"})]})}),Object(i.jsx)("br",{}),Object(i.jsx)(C,{})]})},N=(n(41),n(42),n.p+"media/defaultAvatar.c3f94521.png"),z=function(e){var t=e.avatar?e.avatar:N,n=e.name;e.small;return console.assert(n),Object(i.jsx)(l.b,{to:"/membri/"+e.name,className:"MemberLink",children:Object(i.jsxs)("div",{className:"PersonalCard",children:[Object(i.jsx)("div",{className:"AvatarContainer",children:Object(i.jsx)("img",{className:"Avatar",alt:e.name,src:t})}),Object(i.jsxs)("div",{className:"PersonalTldr",children:[e.name?Object(i.jsxs)(i.Fragment,{children:["  ",Object(i.jsx)("h2",{children:Object(i.jsxs)("u",{children:[" ",e.name," "]})}),"  "]}):null,e.institution?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("span",{children:[" ",e.institution," "]})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{})," "]}):null,e.role?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("span",{children:[" ",e.role," "]})," ",Object(i.jsx)("br",{})," "]}):null]})]})})},B=function(e){var t=Object(c.useState)(0),n=Object(d.a)(t,2),r=n[0],a=n[1];Object(c.useEffect)((function(){0===r||r===[]?fetch(window.HOST+"/api/list_members").then((function(e){return e.json()})).then((function(e){return a(e)})):console.log(r)}));var s=[];for(var o in r){var l=JSON.parse(r[o]);s.push(Object(i.jsx)(z,{avatar:window.HOST+l.avatar,name:l.name,institution:l.institution,role:l.role},o))}return console.log(s),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("h1",{children:[" ",Object(i.jsx)(u,{blink:!0,children:"Membrii SEPI"})," "]}),Object(i.jsx)("div",{id:"MemberTable",children:s})]})},T=(n(43),n(16)),A=n.n(T),Q=function(e){var t=Object(c.useState)(0),n=Object(d.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(1),o=Object(d.a)(s,2),j=o[0],b=o[1],h=e.match.params.name;return Object(c.useEffect)((function(){0===r&&fetch(window.HOST+"/api/content_member/"+h).then((function(e){return e.json()})).then((function(e){return a(e.text)})),1===j&&fetch(window.HOST+"/api/meta_member/"+h).then((function(e){return e.json()})).then((function(e){return b(e)}))})),console.log(j),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:Object(i.jsx)(u,{children:h})}),Object(i.jsxs)("div",{children:[Object(i.jsx)(p,{float:"right",width:"360px",external:!0,pic:window.HOST+j.mainpic}),Object(i.jsx)(A.a,{disableKeyGeneration:!1,components:{Card:p,Link:l.b},jsx:" ".concat(r," ")})]}),Object(i.jsx)("br",{}),Object(i.jsx)(l.b,{to:"/membri",children:"Lista tuturor membrilor"})]})},H=(n(55),function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:Object(i.jsx)(u,{children:"OSEPI - \xcenscriere"})}),Object(i.jsxs)("p",{children:["\xcenscrierea elevilor la OSEPI se face de c\u0103tre \u0219coli. Fiecare \u0219coal\u0103 va transmite ",Object(i.jsx)("a",{target:"_blank",href:"".concat(window.HOST,"/static/formular_inscriere.xlsx"),children:"acest formular"})," completat cu elevii care doresc s\u0103 participe la competi\u021bie. Formularul trebuie transmis pe adresa ",Object(i.jsx)("a",{href:"mailto:inscriere.scoli@sepi.ro",children:"inscriere.scoli@sepi.ro"})," p\xe2n\u0103 cel t\xe2rziu ",Object(i.jsx)("b",{children:"vineri, 19 februarie 2021"}),"."]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Aten\u021bie:"})," Profesorul de la clas\u0103 \u0219i elevul sunt exclusiv responsabili de corectitudinea datelor."]}),Object(i.jsx)("p",{children:"Se recomand\u0103 ca fiecare \u0219coal\u0103 s\u0103 se \xeencadreze \xeen num\u0103rul total de participan\u021bi la etapa jude\u021bean\u0103 din anul anterior. \xcen cazul \xeen care acest num\u0103r este semnificativ dep\u0103\u0219it \u0219i Societatea consider\u0103 c\u0103 baza material\u0103 (serverele de concurs) nu poate sus\u021bine num\u0103rul de participan\u021bi, \u0219coala va fi \xeen\u0219tiin\u021bat\u0103 pentru reducerea num\u0103rului de \xeenscri\u0219i."}),Object(i.jsx)("p",{children:"Odat\u0103 centralizate, aceste date vor fi trimise reprezentan\u021bilor OSEPI din jude\u021be pentru verificare."}),Object(i.jsxs)("p",{children:["P\xe2n\u0103 cel t\xe2rziu ",Object(i.jsx)("b",{children:"luni, 22 februarie 2021"}),", lista elevilor \xeenscri\u0219i va fi publicat\u0103 pe site."]}),Object(i.jsx)("p",{children:"Odat\u0103 cu afi\u0219area listelor, va fi anun\u021bat\u0103 o adres\u0103 de email unde pot fi semnalate eventualele probleme \xeent\xe2mpinate la \xeenscriere iar reprezentan\u021bii SEPI \xee\u0219i rezerv\u0103 dreptul a \xeenregistra \xeen concurs \u0219i al\u021bi elevi \xeen urma analiz\u0103rii solicit\u0103rilor primite."})]})}),L=(n(56),function(e,t,n){return e+"@"+t+"."+n}),R=function(e,t,n){var c=L(e,t,n);return Object(i.jsxs)("a",{href:"mailto:".concat(c),children:[" ",c," "]})},Y=function(e){L("adrian.panaete","gmail","com"),L("opritapetru","yahoo","com");return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:Object(i.jsx)(u,{cps:50,children:"Contact"})}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Societatea pentru Excelen\u021b\u0103 \u0219i Performan\u021b\u0103 \xeen Informatic\u0103:"})," ",R("contact","sepi","ro")]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Sediu:"})," Mun. Boto\u0219ani, str. Nicolae Iorga, nr. 19, jud. Boto\u0219ani"]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Conducerea:"}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)(l.b,{to:"/membri/Adrian%20Panaete",children:"Panaete Adrian"}),", Pre\u0219edinte SEPI, Coordonator al Lotului Na\u021bional de Seniori, ",R("adrian.panaete","gmail","com")]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(l.b,{to:"/membri/Marius%20Nicoli",children:"Nicoli Marius"}),", Coordonator al Loturilor Na\u021bionale, Coordonator OSEPI 2021, ",R("mariusnicoli","gmail","com")]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(l.b,{to:"/membri/Petru%20Simion%20Opri\u021ba",children:"Opri\u021ba Petru Simion"}),", Vicepre\u0219edinte SEPI, Coordonator Comisie Tehnic\u0103 OSEPI 2021, ",R("opritapetru","yahoo","com")]})]})]})]})},G=n(10),J=(n(57),function(e){var t="".concat(e.date," - ").concat(e.title,":");return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:Object(i.jsx)(u,{children:t})}),Object(i.jsx)(A.a,{disableKeyGeneration:!1,components:{Card:p,Link:l.b},jsx:e.content}),Object(i.jsx)("br",{}),Object(i.jsx)("hr",{}),Object(i.jsx)("br",{})]})}),Z=function(e){var t=Object(c.useState)(0),n=Object(d.a)(t,2),r=n[0],a=n[1];Object(c.useEffect)((function(){0===r||r===[]?fetch(window.HOST+"/api/list_announcements").then((function(e){return e.json()})).then((function(e){return a(e)})):console.log(r)}));var s=[];if(0!==r&&r!==[]){for(var o in r)s.push(Object(i.jsx)(J,Object(G.a)({},r[o])));s.reverse()}return Object(i.jsxs)("div",{id:"osepi",children:[Object(i.jsxs)("h2",{children:[" ",Object(i.jsx)(u,{children:"OSEPI - Anun\u021buri"})," "]}),s,Object(i.jsx)("br",{})]})},F=(n(58),function(e,t){return fetch(window.HOST+"/api/results/"+e+"/"+t).then((function(e){return e.json()})).catch((function(e){return console.error(e)}))}),W=function(e,t,n){return F(e,t).then((function(e){var t=0;return"general"==n?{head:["Index"].concat(e.head),body:e.body.map((function(e){return[++t].concat(e)}))}:{head:["Index"].concat(e.head),body:e.body.filter((function(e){return e[0]==n})).map((function(e){return[++t].concat(e)}))}}))},D=(n(59),function(e){console.log(e);var t=Object(c.useState)(0),n=Object(d.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){W(e.contest,e.level,e.county).then((function(e){return a(e)}))}),[e]),0==r?Object(i.jsx)("p",{children:"empty"}):Object(i.jsxs)("table",{id:"scoreboard",style:{width:"100%"},children:[Object(i.jsx)("tr",{children:r.head.map((function(e){return Object(i.jsx)("th",{children:e})}))}),r.body.map((function(e){return Object(i.jsx)("tr",{children:e.map((function(e){return Object(i.jsx)("td",{children:e})}))})}))]})}),q=function(){return{general:"Clasament na\u021bional",AB:"Alba",AR:"Arad",AG:"Arge\u0219",BC:"Bac\u0103u",BH:"Bihor",BN:"Bistri\u021ba-N\u0103s\u0103ud",BT:"Boto\u0219ani",BR:"Br\u0103ila",BV:"Bra\u0219ov",B:"Bucure\u0219ti",BZ:"Buz\u0103u",CL:"C\u0103l\u0103ra\u0219i",CS:"Cara\u0219-Severin",CJ:"Cluj",CT:"Constan\u021ba",CV:"Covasna",DB:"D\xe2mbovi\u021ba",DJ:"Dolj",GL:"Gala\u021bi",GR:"Giurgiu",GJ:"Gorj",HR:"Harghita",HD:"Hunedoara",IL:"Ialomi\u021ba",IS:"Ia\u0219i",IF:"Ilfov",MM:"Maramure\u0219",MH:"Mehedin\u021bi",MS:"Mure\u0219",NT:"Neam\u021b",OT:"Olt",PH:"Prahova",SJ:"S\u0103laj",SM:"Satu Mare",SB:"Sibiu",SV:"Suceava",TR:"Teleorman",TM:"Timi\u0219",TL:"Tulcea",VL:"V\xe2lcea",VS:"Vaslui",VN:"Vrancea"}},U=function(){return{OJI:"Etapa jude\u021bean\u0103"}},K=function(){for(var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[],n=5;n<=12;n+=1)t.push(n.toString());return e||t.push("baraj"),t},V=function(e){var t=Object(c.useState)("OJI"),n=Object(d.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)("general"),o=Object(d.a)(s,2),l=o[0],j=o[1],b=Object(c.useState)("5"),h=Object(d.a)(b,2),O=h[0],p=h[1],x=Object(c.useState)(Object(i.jsx)(D,{county:l,level:"5",contest:"OJI"})),m=Object(d.a)(x,2),f=m[0],v=m[1],g=q(),S=U(),I=K();return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h1",{children:[" ",Object(i.jsx)(u,{blink:!0,children:"Rezultate OSEPI"})," "]}),Object(i.jsxs)("form",{onSubmit:function(e){v(Object(i.jsx)(D,{county:l,level:O,contest:"OJI"})),e.preventDefault()},children:[Object(i.jsx)("select",{value:r,onChange:function(e){return a(e.target.value)},children:Object.keys(S).map((function(e){return Object(i.jsx)("option",{value:e,children:S[e]})}))}),Object(i.jsx)("select",{value:l,onChange:function(e){return j(e.target.value)},children:Object.keys(g).map((function(e){return Object(i.jsx)("option",{value:e,children:g[e]})}))}),Object(i.jsx)("select",{value:O,onChange:function(e){return p(e.target.value)},children:I.map((function(e){return Object(i.jsx)("option",{value:e,children:e})}))}),Object(i.jsx)("input",{type:"submit",value:"Filtreaz\u0103"})]}),f,Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Pentru gimnaziu:"})," ",Object(i.jsx)("br",{}),"Rezultatele sunt provizorii (\xeenainte de analizarea materialelor video). Apar numai concuren\u021bii care au fost prezen\u021bi \u0219i au ob\u021binut puncte."]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Pentru liceu:"})," ",Object(i.jsx)("br",{}),"Apar numai concuren\u021bii care au fost prezen\u021bi, au ob\u021binut puncte \u0219i au fost valida\u021bi \xeen urma analiz\u0103rii materialelor audio-video \u0219i a verific\u0103rii surselor cu soft pentru detectarea plagiatului."]})]})},X=(n(60),n.p+"media/logo.b86c36aa.jpg"),_=n.p+"media/menuIcon.7f471b33.png",$=Object(o.b)((function(e){return{menuOn:e.menuOn}}),(function(e){return{dispatch:e}}))((function(e){var t=Object(c.useState)(0),n=Object(d.a)(t,2),r=(n[0],n[1],function(){e.dispatch({type:"MENU_TOGGLE"})}),a=function(){e.dispatch({type:"MENU_TURN_OFF"})};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{id:"Menu",children:[Object(i.jsx)("div",{id:"logo",children:Object(i.jsxs)(l.b,{to:"/",onClick:a,style:{color:"black",textDecoration:"none"},children:[" ",Object(i.jsx)("img",{alt:"logo SEPI",src:X,height:"64px"})," "]})}),Object(i.jsx)("div",{id:"Nume",children:Object(i.jsxs)(l.b,{to:"/",onClick:a,style:{color:"black",textDecoration:"none"},children:[Object(i.jsx)("span",{style:{fontSize:"24px"},children:"Societatea pentru Excelen\u021b\u0103 \u0219i Performan\u021b\u0103 \xeen Informatic\u0103 "})," "]})}),Object(i.jsx)("div",{id:"Menus",children:Object(i.jsx)("img",{id:"MenuButton",alt:"Menu Button",src:_,onClick:r})})]}),Object(i.jsxs)("div",{id:"NavMenu",className:e.menuOn?"NavMenuOpened":"NavMenuClosed",children:[Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{}),Object(i.jsxs)(l.b,{to:"/",onClick:r,children:[" ",Object(i.jsx)("span",{className:"MenuLink",children:"SEPI"})," "]})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{}),Object(i.jsxs)(l.b,{to:"/osepi",onClick:r,children:[" ",Object(i.jsx)("span",{className:"MenuLink",children:"OSEPI"})," "]})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{}),Object(i.jsxs)("div",{style:{marginLeft:"20px"},children:["> ",Object(i.jsx)(l.b,{to:"/osepi",onClick:r,children:Object(i.jsx)("span",{className:"MenuLink",children:"Anun\u021buri"})})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{}),"> ",Object(i.jsx)(l.b,{to:"/osepi/inscriere",onClick:r,children:Object(i.jsx)("span",{className:"MenuLink",children:"\xcenscriere"})})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{}),"> ",Object(i.jsx)("a",{target:"_blank",href:"".concat(window.HOST,"/static/regulament.pdf"),onClick:r,children:Object(i.jsx)("span",{className:"MenuLink",children:"Regulament"})})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{}),"> ",Object(i.jsx)("a",{target:"_blank",href:"".concat(window.HOST,"/static/participanti_final.pdf"),onClick:r,children:Object(i.jsx)("span",{className:"MenuLink",children:"Participan\u021bi"})})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{}),"> ",Object(i.jsx)(l.b,{to:"/rezultate",onClick:r,children:Object(i.jsx)("span",{className:"MenuLink",children:"Rezultate"})})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{}),"> ",Object(i.jsx)(l.b,{to:"/calificati",onClick:r,children:Object(i.jsx)("span",{className:"MenuLink",children:"Califica\u021bi na\u021bional\u0103"})})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{}),"> ",Object(i.jsx)(l.b,{to:"/etape",onClick:r,children:Object(i.jsx)("span",{className:"MenuLink",children:"Etape precedente"})})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{})]}),Object(i.jsxs)("a",{target:"_blank",href:"https://infopro.lrmd.ro",onClick:r,children:[" ",Object(i.jsx)("span",{className:"MenuLink",children:"InfoPro"})," "]})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{}),Object(i.jsxs)(l.b,{to:"/membri",onClick:r,children:[" ",Object(i.jsx)("span",{className:"MenuLink",children:"Membri"})," "]})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{}),Object(i.jsxs)("a",{href:"".concat(window.HOST,"/static/STATUTUL%20SEPI.pdf"),onClick:r,children:[" ",Object(i.jsx)("span",{className:"MenuLink",children:"Statutul SEPI"})," "]})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{}),Object(i.jsxs)(l.b,{to:"/sponsori",onClick:r,children:[" ",Object(i.jsx)("span",{className:"MenuLink",children:"Sponsori"})," "]})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{}),Object(i.jsxs)(l.b,{to:"/contact",onClick:r,children:[" ",Object(i.jsx)("span",{className:"MenuLink",children:"Contact"})," "]})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{})]})]})})),ee=(n(61),function(){var e=Object(c.useState)("general"),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("9"),s=Object(d.a)(a,2),o=s[0],l=s[1],j=Object(c.useState)(Object(i.jsx)(D,{county:n,level:"9",contest:"qualified"})),b=Object(d.a)(j,2),h=b[0],O=b[1],p=q();p.general="Toate jude\u021bele";var x=K(!0);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:Object(i.jsx)(u,{blink:!0,children:"Califica\u021bi la etapa na\u021bional\u0103"})}),Object(i.jsxs)("form",{onSubmit:function(e){O(Object(i.jsx)(D,{county:n,level:o,contest:"qualified"})),e.preventDefault()},children:[Object(i.jsx)("select",{value:n,onChange:function(e){return r(e.target.value)},children:Object.keys(p).map((function(e){return Object(i.jsx)("option",{value:e,children:p[e]})}))}),Object(i.jsx)("select",{value:o,onChange:function(e){return l(e.target.value)},children:x.map((function(e){return Object(i.jsx)("option",{value:e,children:e})}))}),Object(i.jsx)("input",{type:"submit",value:"Filtreaz\u0103"})]}),h,Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Format PDF"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{target:"_blank",href:"".concat(window.HOST,"/static/qualified/9q.pdf"),children:"Clasa a 9-a "})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{target:"_blank",href:"".concat(window.HOST,"/static/qualified/10q.pdf"),children:"Clasa a 10-a"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{target:"_blank",href:"".concat(window.HOST,"/static/qualified/11q.pdf"),children:"Clasa a 11-a"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{target:"_blank",href:"".concat(window.HOST,"/static/qualified/12q.pdf"),children:"Clasa a 12-a"})})]})]})]})}),te=(n(62),function(e){console.log(e);var t="SponsorLogoContainer";return e.horizontal&&(t="SponsorHorizontalLogoContainer"),Object(i.jsx)("a",{class:"SponsorLink",href:e.link,children:Object(i.jsxs)("div",{class:"SponsorCard",children:[Object(i.jsx)("div",{class:t,children:Object(i.jsx)("img",{class:"SponsorLogo",src:e.logo})}),Object(i.jsx)("div",{class:"SponsorName",children:e.name})]})})}),ne=function(e){var t=Object(c.useState)(),n=Object(d.a)(t,2),r=n[0],a=n[1];Object(c.useEffect)((function(){fetch(window.HOST+"/api/list_sponsors").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]);var s=[];for(var o in r){var l=JSON.parse(r[o]);console.log(l),s.push(Object(i.jsx)(te,{name:o,logo:window.HOST+l.logo,link:l.link,horizontal:l.horizontal}))}return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("h1",{children:[" ",Object(i.jsx)(u,{blink:!0,children:"Sponsorii SEPI"})," "]}),Object(i.jsx)("div",{id:"SponsorTable",children:s})]})},ie=function(){for(var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new Object,n=["V","VI","VII","VIII","IX","X"],i=5;i<=10;i+=1)t[i.toString()]="Clasa a "+n[i-5]+"-a";return t["11-12"]="Clasele XI-XII",e||(t.baraj="Baraj"),t},ce=(n(63),function(e){var t=Object(c.useState)(0),n=Object(d.a)(t,2),r=n[0],a=n[1],s=ie(!0);return Object(c.useEffect)((function(){fetch(window.HOST+"/api/round/oji").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("h1",{children:[" ",Object(i.jsx)(u,{blink:!0,children:"Etape precedente"})," "]}),Object(i.jsx)("h3",{children:"Etapa jude\u021bean\u0103"}),Object(i.jsx)("ul",{children:Object.keys(r).map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:r[e],children:s[e]})})}))})]})}),re=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(l.a,{children:[Object(i.jsx)($,{}),Object(i.jsx)("div",{id:"hiderLeft"}),Object(i.jsx)("div",{id:"hiderRight"}),Object(i.jsx)("div",{id:"main",children:Object(i.jsx)("div",{id:"middler",children:Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/",component:M}),Object(i.jsx)(j.a,{exact:!0,path:"/contact",component:Y}),Object(i.jsx)(j.a,{exact:!0,path:"/osepi",component:Z}),Object(i.jsx)(j.a,{exact:!0,path:"/osepi/inscriere",component:H}),Object(i.jsx)(j.a,{exact:!0,path:"/membri",component:B}),Object(i.jsx)(j.a,{exact:!0,path:"/membri/:name",component:Q}),Object(i.jsx)(j.a,{exact:!0,path:"/rezultate",component:V}),Object(i.jsx)(j.a,{exact:!0,path:"/calificati",component:ee}),Object(i.jsx)(j.a,{exact:!0,path:"/sponsori",component:ne}),Object(i.jsx)(j.a,{exact:!0,path:"/etape",component:ce})]})})})]})})},ae=n(15),se={menuOn:!1},oe=Object(ae.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENU_TOGGLE":return console.log(e),Object(G.a)(Object(G.a)({},e),{},{menuOn:!e.menuOn});case"MENU_TURN_ON":return Object(G.a)(Object(G.a)({},e),{},{menuOn:!0});case"MENU_TURN_OFF":return Object(G.a)(Object(G.a)({},e),{},{menuOn:!1});default:return e}}));window.store=oe,s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(o.a,{store:oe,children:Object(i.jsx)(re,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.97b2520d.chunk.js.map