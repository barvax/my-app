(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,a){},31:function(e,t,a){e.exports=a(67)},36:function(e,t,a){},37:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},66:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABECAMAAAAV8YMOAAABBVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXEhgAAACnbxSaZhM4JxefahNJMheCVxWibBMgGBg1JReXZBOFWBF3UBKNXhFmRAxONAkdFRh+VA87KRdaPAtYOgpFLggkGAQTDQIKBwFmRRadaBN0TRCBVg9vSg1hQRZTOBaLXBBSNgo6JgcwIheRYRFwSg1sRw0wIAYmHBhCLhdBLRcqHhdONhZ/VRV9UxVkRBZAKgguHgUyIgZsG+NDAAAAI3RSTlMAmEqFeE7e7bSdfjsP44sv0vLMgWD3qhvHkSn61KlhRiD4YgcApb8AAAK0SURBVFjDrZh5X9pAEIYRFBAEBJV6VHvs+4ZAQrjvQ/EE76Pt9/8oDWk1xQISdp//eX6TYXd2Znyz2fBHDlOxJBySsd3DiH/D55m1+CamsBnwe7FEAzEA3ZuLQcHS6aBbhcHFTRdAMBBdUONfAdBunHAKtWYbwMoiYSXWAVRqJPXn02z+tiocqrf57OmTPnZVxqr9jzyrAJrnpNXLiCnUexZ53gSwOlfzNQy0SmTuXszkrkCWWkD402zPURKdoq3JiLnUc+RxB6HtWZ4AcKlRy4oPyWrULoHIdM8KUCaLplgAs0iWgb0ZngGNM7EgZwavgfj/ni1gxH5GLExd5wjYeu/ZBq6pXQkP5LVxTO8yvr+DMnXb48mks4zQ5CkI4weNuvBI3eAlwpPnuaPzUXjmjFrn3zOeAIo8Fktg/wxIvInW0aJlLiMyNbaw8lbEgBKzYimyPAf8bwE1mBNLkmPzNaQoUGJmWVF9HFL075muMCeWpsAKAo4oiBrvlxfdsYbgn1S3qQkJLLaddMfRYE9G1GPT+bbPKDAvI8rwBJv2e4ou+0KGqs4uNuwU3fBZSPHEn/jii+CCp3KiF1aw6ktjwKyc6JFlrPtSbq5lsr3ri8HirZzogUMEfd9gsConMqkh5ANIIUeVBnbUiZLo01TxaTEMlSRb3d+fxkjJgVR3RdbwS82llS8jwikjqgqbslKrrPireo7UPZDyT3bGebIVNhHybU0J8E80WlXpRku+9VPcjLrtcV6uPXYbds1jw37lNuwuR8BIZoRwiQPHEkON7Ji1p3LwUz+KunxfbDjOuMOx1Liec8f1DxYIDVtlvWSmBuMuEDyuNB5M5zJXzYfJlUZikY3PnCXLScNdsnhb+wz7Bm2M/vB17RMLRFUsouJrHiTuaiydCoYOYHMQCqbSc1djvwFhWC92qEAzIwAAAABJRU5ErkJggg=="},67:function(e,t,a){"use strict";a.r(t);var o=a(0),c=a.n(o),n=a(26),r=a.n(n),i=(a(36),a(9)),s=(a(37),a(27)),m=a.n(s);var l=function(e){var t=new Array(7);t[0]="Sunday",t[1]="Monday",t[2]="Tuesday",t[3]="Wednesday",t[4]="Thursday",t[5]="Friday",t[6]="Saturday";var a=new Array(10);a[0]="January",a[1]="February",a[2]="March",a[3]="April",a[4]="May",a[5]="June",a[6]="July",a[7]="August",a[8]="September",a[9]="October",a[10]="November",a[11]="December";var o=1e3*e,c=new Date(o).getHours(),n=new Date(o).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),r=a[new Date(o).getMonth()];return{day:t[new Date(o).getDay()],timeTolop:c,d:n,myMonth:r,dayOfMonth:new Date(o).getDate()}},f=a(28);a(25);var u=function(e){var t=Object(o.useState)(""),a=Object(i.a)(t,2),n=a[0],r=a[1];return c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(){e.cityLink("tel Aviv")}},e.city1),c.a.createElement("li",{onClick:function(){e.cityLink("jerusalem")}},e.city2),c.a.createElement("li",{onClick:function(){e.cityLink("london")}},e.city3),c.a.createElement("li",{onClick:function(){e.cityLink("amsterdam")}},e.city4),c.a.createElement("form",null,c.a.createElement("br",null),c.a.createElement("li",null,c.a.createElement("input",{onChange:function(e){var t=e.target.value;console.log(t),r(t)},value:n,placeholder:"Enter location"})),c.a.createElement("li",null,c.a.createElement("button",{onClick:function(t){e.changeCity(n),r(""),t.preventDefault()}},"Go.."))))};var d=function(e){return c.a.createElement("div",null,c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,e.title),c.a.createElement("td",{className:"tdValue"},e.value)))))};var A=function(e){return c.a.createElement("div",null,c.a.createElement("h5",{className:"leftSideTitle"},"Forcast  "),c.a.createElement("hr",null),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("div",{className:"day-forcast"},e.forcast),c.a.createElement("img",{className:"forcasicon",src:e.forcastIcon,alt:"forcasicon"})),c.a.createElement("br",null),c.a.createElement(d,{title:"MaxTemp",value:e.maxTemp+"\xb0"}),c.a.createElement(d,{title:"MinTemp",value:e.mintemp+"\xb0"}),c.a.createElement(d,{title:"ChanseOfRain",value:e.chanseOfRain+"%"}),c.a.createElement("br",null),c.a.createElement("h5",{className:"leftSideTitle"},"Weather Details "),c.a.createElement("hr",null),c.a.createElement(d,{title:"Wind",value:e.wind+" kph"}),c.a.createElement(d,{title:"Humidity",value:e.humidity+" %"}),c.a.createElement(d,{title:"Cloud",value:e.cloud+" %"}),c.a.createElement("h5",{className:"leftSideTitle"},"props Info "),c.a.createElement("hr",null),c.a.createElement(d,{title:"Precipitation",value:e.precip+" mm"}),c.a.createElement(d,{title:"UV",value:e.uv}),c.a.createElement("h5",{className:"leftSideTitle"},"Astro "),c.a.createElement("hr",null),c.a.createElement(d,{title:"Sunrise",value:e.sunrise}),c.a.createElement(d,{title:"SunSet",value:e.sunset}),c.a.createElement(d,{title:"Moon Rise",value:e.moonrise}),c.a.createElement(d,{title:"Moon Set",value:e.moonset}),c.a.createElement(d,{title:"Moon Phase",value:e.moon_phase}),c.a.createElement(d,{title:"Moon Ilomination",value:e.moon_illumination+"%"}),c.a.createElement("h5",{className:"leftSideTitle"},"Warnings "),c.a.createElement("hr",null),c.a.createElement("div",{className:"warnings"},e.warnings||"no wornings"),c.a.createElement("br",null),c.a.createElement("br",null))};var y=function(e){return c.a.createElement("div",null,c.a.createElement("h5",{className:"leftSideTitle"},"Another Location"),c.a.createElement("hr",null),c.a.createElement(u,{cityLink:e.LinkCity,city1:"Tel-Aviv",city2:"Jerusalem",city3:"London",city4:"Amsterdam",changeCity:e.TestMe}),c.a.createElement("br",null),c.a.createElement(A,{forcast:e.forcast,forcastIcon:e.forcastIcon,maxTemp:e.maxTemp,mintemp:e.mintemp,chanseOfRain:e.chanseOfRain,wind:e.wind,humidity:e.humidity,cloud:e.cloud,precip:e.precip,uv:e.uv,sunrise:e.sunrise,sunset:e.sunset,moonrise:e.moonrise,moonset:e.moonset,moon_phase:e.moon_phase,moon_illumination:e.moon_illumination,warnings:e.warnings}))},p=a(8),h=a(3),E=a.n(h);var x=function(e){return c.a.createElement("div",null,c.a.createElement("h5",{className:"forcastTemp"},e.temp),c.a.createElement("h5",null,e.condition),c.a.createElement("img",{className:"forcastImg",src:e.icon,alt:"icon"}),c.a.createElement("h5",{className:"forcastTime"}," ",e.time))};a(56),a(57);var v=function(e){var t=e.localtime_epoch;return c.a.createElement("div",null,c.a.createElement("div",{className:"mainCity-country"},e.country," "),c.a.createElement(p.b,{to:"/my-app/ron"}," ",c.a.createElement("button",{className:"button-17"},"next Day's Forcast in ",e.cityName)),c.a.createElement("div",{className:"mainData "},c.a.createElement("div",{className:"line"},c.a.createElement("div",{className:"mainTemp"},e.temp_c,"\xb0"),c.a.createElement("div",{className:"Namemain-cityName"},e.cityName,c.a.createElement("br",null),c.a.createElement("div",{className:"main-data"},l(t).d+"-",l(t).day+",",l(t).dayOfMonth+" ",l(t).myMonth+" ")),c.a.createElement("div",{className:"left-min600-buttom"},c.a.createElement("img",{className:"icon",src:e.icon,alt:"icon"}),c.a.createElement("h5",{className:"left-min600-buttom-text"},e.text))),c.a.createElement("div",null)))};a(66);var g=function(e){var t=e.localtime_epoch,a=Object(h.useState)(0),o=Object(i.a)(a,2),c=(o[0],o[1]),n=Object(h.useState)([e.forcast0,e.forcast1,e.forcast2,e.forcast3,e.forcast4,e.forcast5,e.forcast6,e.forcast7,e.forcast8,e.forcast9,e.forcast10,e.forcast11,e.forcast12,e.forcast13,e.forcast14,e.forcast15]),r=Object(i.a)(n,2),s=r[0],m=r[1];return console.log(l(t).timeTolop),Object(h.useEffect)((function(){m((function(e){return e.filter((function(e,a){if(3*a>l(t).timeTolop)return c(a),a<l(t).timeTolop/3+7}))}))}),[]),E.a.createElement("div",{className:"forcast-main"},E.a.createElement(p.b,{to:"/my-app"}," ",E.a.createElement("button",{className:"button-17"},"click me")),E.a.createElement("div",{className:"forcastHeader"},E.a.createElement("h1",{style:{paddingLeft:"20px"}},e.cityName," ",e.country),E.a.createElement("div",{style:{display:"flex"}},E.a.createElement("h2",{style:{paddingLeft:"20px"}},e.temp_c+"\xb0c"),E.a.createElement("h4",{style:{paddingLeft:"20px",marginTop:"27px"}},l(e.localtime_epoch).d),E.a.createElement("img",{className:"forcastImgMain",src:e.icon}))),E.a.createElement("div",{className:"forcast-div"},s.map((function(e,t){return E.a.createElement(x,{key:t,id:t,time:l(s[t].time).d,temp:s[t].temp+"\xb0c",condition:s[t].condition,icon:s[t].icon})}))))};var _=function(e){return c.a.createElement("div",{className:"nextDayHead"},c.a.createElement("h5",null,e.day),c.a.createElement("img",{src:e.icon}),c.a.createElement("h5",null,e.minTemp),c.a.createElement("h5",null,e.maxTemp))};var N=function(){return c.a.createElement("div",null,"im screen2",c.a.createElement(p.b,{to:"/"}," ",c.a.createElement("button",null,"click me")),c.a.createElement(_,{day:"today",icon:"sd",minTemp:"10\xb0c",maxTemp:"50\xb0c"}),c.a.createElement(_,{day:"today",icon:"sd",minTemp:"10\xb0c",maxTemp:"50\xb0c"}),c.a.createElement(_,{day:"today",icon:"sd",minTemp:"10\xb0c",maxTemp:"50\xb0c"}),c.a.createElement(_,{day:"today",icon:"sd",minTemp:"10\xb0c",maxTemp:"50\xb0c"}))},b=a(1);var F=function(e){return c.a.createElement(p.a,null,c.a.createElement("div",null,c.a.createElement("div",null),c.a.createElement("div",{className:"mainBoxRoot"},c.a.createElement("div",{className:"parent"},c.a.createElement("div",{className:"left-Screen"},c.a.createElement(b.c,null,c.a.createElement(b.a,{path:["/my-app","/efrat"],exact:!0,render:function(){return c.a.createElement(v,{country:e.country,localtime_epoch:e.localtime_epoch,cityName:e.cityName,temp_c:e.temp_c,icon:e.icon,text:e.text})}}),c.a.createElement(b.a,{path:"/my-app/ron",render:function(){return c.a.createElement(g,Object(f.a)({forcast0:e.forcast0,forcast1:e.forcast1,forcast2:e.forcast2,forcast3:e.forcast3,forcast4:e.forcast4,forcast5:e.forcast5,forcast6:e.forcast6,forcast7:e.forcast7,forcast8:e.forcast8,forcast9:e.forcast9,forcast10:e.forcast10,forcast11:e.forcast11,forcast12:e.forcast12,forcast13:e.forcast13,forcast14:e.forcast14,forcast15:e.forcast15,localtime_epoch:e.localtime_epoch,cityName:e.cityName,icon:e.icon,temp_c:e.temp_c,country:e.country},"localtime_epoch",e.localtime_epoch))}}))),c.a.createElement("div",{className:"right-Screen"},c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/my-app",exact:!0,render:function(){return c.a.createElement(y,{LinkCity:e.LinkCity,TestMe:e.TestMe,forcast:e.forcast,forcastIcon:e.forcastIcon,maxTemp:e.maxTemp,mintemp:e.mintemp,chanseOfRain:e.chanseOfRain,wind:e.wind,humidity:e.humidity,cloud:e.cloud,precip:e.precip,uv:e.uv,sunrise:e.sunrise,sunset:e.sunset,moonrise:e.moonrise,moonset:e.moonset,moon_phase:e.moon_phase,moon_illumination:e.moon_illumination,warnings:e.warnings})}}),c.a.createElement(b.a,{path:"/my-app/ron",component:N})))))))};var T=function(){var e=Object(o.useState)("tel aviv"),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)({}),s=Object(i.a)(r,2),f=s[0],u=s[1];return Object(o.useEffect)((function(){l(),m.a.get("https://api.weatherapi.com/v1/forecast.json?key=0a999350705440169d581411210111&q="+a+"&days=3&aqi=yes&alerts=yes").then((function(e){var t=e.data;console.log(t);var a={wind:t.current.wind_kph,humidity:t.current.humidity,cloud:t.current.cloud,uv:t.current.uv,icon:t.current.condition.icon,country:t.location.country,precip:t.current.precip_mm,maxTemp:t.forecast.forecastday[0].day.maxtemp_c,mintemp:t.forecast.forecastday[0].day.mintemp_c,chanseOfRain:t.forecast.forecastday[0].day.daily_chance_of_rain,forcast:t.forecast.forecastday[0].day.condition.text,sunrise:t.forecast.forecastday[0].astro.sunrise,sunset:t.forecast.forecastday[0].astro.sunset,moonrise:t.forecast.forecastday[0].astro.moonrise,moonset:t.forecast.forecastday[0].astro.moonset,moon_phase:t.forecast.forecastday[0].astro.moon_phase,moon_illumination:t.forecast.forecastday[0].astro.moon_illumination,forcastIcon:t.forecast.forecastday[0].day.condition.icon,temp_c:t.current.temp_c,cityName:t.location.name,localtime_epoch:t.location.localtime_epoch,text:t.current.condition.text,nextForcast0:{time:t.forecast.forecastday[0].hour[0].time_epoch,temp:t.forecast.forecastday[0].hour[0].temp_c,text:t.forecast.forecastday[0].hour[0].condition.text,icon:t.forecast.forecastday[0].hour[0].condition.icon},nextForcast1:{time:t.forecast.forecastday[0].hour[3].time_epoch,temp:t.forecast.forecastday[0].hour[3].temp_c,text:t.forecast.forecastday[0].hour[3].condition.text,icon:t.forecast.forecastday[0].hour[3].condition.icon},nextForcast2:{time:t.forecast.forecastday[0].hour[6].time_epoch,temp:t.forecast.forecastday[0].hour[6].temp_c,text:t.forecast.forecastday[0].hour[6].condition.text,icon:t.forecast.forecastday[0].hour[6].condition.icon},nextForcast3:{time:t.forecast.forecastday[0].hour[9].time_epoch,temp:t.forecast.forecastday[0].hour[9].temp_c,text:t.forecast.forecastday[0].hour[9].condition.text,icon:t.forecast.forecastday[0].hour[9].condition.icon},nextForcast4:{time:t.forecast.forecastday[0].hour[12].time_epoch,temp:t.forecast.forecastday[0].hour[12].temp_c,text:t.forecast.forecastday[0].hour[12].condition.text,icon:t.forecast.forecastday[0].hour[12].condition.icon},nextForcast5:{time:t.forecast.forecastday[0].hour[15].time_epoch,temp:t.forecast.forecastday[0].hour[15].temp_c,text:t.forecast.forecastday[0].hour[15].condition.text,icon:t.forecast.forecastday[0].hour[15].condition.icon},nextForcast6:{time:t.forecast.forecastday[0].hour[18].time_epoch,temp:t.forecast.forecastday[0].hour[18].temp_c,text:t.forecast.forecastday[0].hour[18].condition.text,icon:t.forecast.forecastday[0].hour[18].condition.icon},nextForcast7:{time:t.forecast.forecastday[0].hour[21].time_epoch,temp:t.forecast.forecastday[0].hour[21].temp_c,text:t.forecast.forecastday[0].hour[21].condition.text,icon:t.forecast.forecastday[0].hour[21].condition.icon},nextForcast8:{time:t.forecast.forecastday[1].hour[0].time_epoch,temp:t.forecast.forecastday[1].hour[0].temp_c,text:t.forecast.forecastday[1].hour[0].condition.text,icon:t.forecast.forecastday[1].hour[0].condition.icon},nextForcast9:{time:t.forecast.forecastday[1].hour[3].time_epoch,temp:t.forecast.forecastday[1].hour[3].temp_c,text:t.forecast.forecastday[1].hour[3].condition.text,icon:t.forecast.forecastday[1].hour[3].condition.icon},nextForcast10:{time:t.forecast.forecastday[1].hour[6].time_epoch,temp:t.forecast.forecastday[1].hour[6].temp_c,text:t.forecast.forecastday[1].hour[6].condition.text,icon:t.forecast.forecastday[1].hour[6].condition.icon},nextForcast11:{time:t.forecast.forecastday[1].hour[9].time_epoch,temp:t.forecast.forecastday[1].hour[9].temp_c,text:t.forecast.forecastday[1].hour[9].condition.text,icon:t.forecast.forecastday[1].hour[9].condition.icon},nextForcast12:{time:t.forecast.forecastday[1].hour[12].time_epoch,temp:t.forecast.forecastday[1].hour[12].temp_c,text:t.forecast.forecastday[1].hour[12].condition.text,icon:t.forecast.forecastday[1].hour[12].condition.icon},nextForcast13:{time:t.forecast.forecastday[1].hour[15].time_epoch,temp:t.forecast.forecastday[1].hour[15].temp_c,text:t.forecast.forecastday[1].hour[15].condition.text,icon:t.forecast.forecastday[1].hour[15].condition.icon},nextForcast14:{time:t.forecast.forecastday[1].hour[18].time_epoch,temp:t.forecast.forecastday[1].hour[18].temp_c,text:t.forecast.forecastday[1].hour[18].condition.text,icon:t.forecast.forecastday[1].hour[18].condition.icon},nextForcast15:{time:t.forecast.forecastday[1].hour[21].time_epoch,temp:t.forecast.forecastday[1].hour[21].temp_c,text:t.forecast.forecastday[1].hour[21].condition.text,icon:t.forecast.forecastday[1].hour[21].condition.icon}};u(a),console.log(f)})).catch((function(e){console.log(e)}))}),[a]),c.a.createElement("div",null,c.a.createElement(F,{forcast0:f.nextForcast0,forcast1:f.nextForcast1,forcast2:f.nextForcast2,forcast3:f.nextForcast3,forcast4:f.nextForcast4,forcast5:f.nextForcast5,forcast6:f.nextForcast6,forcast7:f.nextForcast7,forcast8:f.nextForcast8,forcast9:f.nextForcast9,forcast10:f.nextForcast10,forcast11:f.nextForcast11,forcast12:f.nextForcast12,forcast13:f.nextForcast13,forcast14:f.nextForcast14,forcast15:f.nextForcast15,LinkCity:function(e){n(e),console.log("link city"+a)},cityLink:a,TestMe:function(e){n(e),console.log("link city"+a)},country:f.country,localtime_epoch:f.localtime_epoch,temp_c:f.temp_c,cityName:f.cityName,icon:f.icon,text:f.text,forcast:f.forcast,forcastIcon:f.forcastIcon,maxTemp:f.maxTemp,mintemp:f.mintemp,chanseOfRain:f.chanseOfRain,wind:f.wind,humidity:f.humidity,cloud:f.cloud,precip:f.precip,uv:f.uv,sunrise:f.sunrise,sunset:f.sunset,moonrise:f.moonrise,moonset:f.moonset,moon_phase:f.moon_phase,moon_illumination:f.moon_illumination}))};r.a.render(c.a.createElement(T,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.0161f749.chunk.js.map