(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),s=c.n(i),r=c(9),a=c.n(r),o=(c(16),c(2)),h=c(3),l=c(6),j=c(5),u=c(4),p=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"level-card ".concat(this.props.locked?"locked":""),onClick:this.props.handleClick,children:Object(n.jsx)("h1",{children:this.props.num})})}}]),c}(s.a.Component),b=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){for(var e=[],t=1;t<7;t++)1===t?e.push(Object(n.jsx)(p,{num:t,locked:!1,handleClick:this.props.handleClick},t)):e.push(Object(n.jsx)(p,{num:t,locked:!0},t));return Object(n.jsxs)("div",{className:"language-bar",children:[Object(n.jsx)("h3",{children:this.props.title}),Object(n.jsx)("div",{className:"card-list",children:e})]})}}]),c}(s.a.Component),d=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"homepage",children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h1",{children:"Tale Adventure"}),Object(n.jsxs)("h3",{children:[" ","This is a game where you will have an incredible voyage and learn a new language."]})]}),Object(n.jsx)("div",{className:"gradient-line"}),Object(n.jsx)(b,{title:"Learn Georgian \ud83c\uddec\ud83c\uddea",handleClick:this.props.handleClick}),Object(n.jsx)(b,{title:"\u10d8\u10e1\u10ec\u10d0\u10d5\u10da\u10d4 \u10d8\u10dc\u10d2\u10da\u10d8\u10e1\u10e3\u10e0\u10d8 \ud83c\uddfa\ud83c\uddf8"})]})}}]),c}(s.a.Component),O=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{children:this.props.score})}}]),c}(s.a.Component),k=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"line",children:[Object(n.jsx)("img",{src:this.props.image,alt:"person avatar",className:"person-icon"}),Object(n.jsx)("div",{className:"sentence",children:this.props.text})]})}}]),c}(s.a.Component),x=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){var e=this,t=this.props.isTrue;return Object(n.jsxs)("div",{className:"choice",children:[Object(n.jsx)("div",{className:"checkbox",onClick:function(c){return e.props.handleClickCheckbox(t,c)}}),Object(n.jsx)("div",{children:this.props.choiceText})]})}}]),c}(s.a.Component),C=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){var e=this,t=this.props.choices,c=this.props.correctChoice;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:this.props.questionTitle}),t.map((function(t,i){return i===c?Object(n.jsx)(x,{choiceText:t,isTrue:!0,handleClickCheckbox:e.props.handleClickCheckbox},i):Object(n.jsx)(x,{choiceText:t,isTrue:!1,handleClickCheckbox:e.props.handleClickCheckbox},i)}))]})}}]),c}(s.a.Component),v=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){var e=this,t=this.props.words,c=this.props.correctNum;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:this.props.questionTitle}),t.map((function(t,i){return i===c?Object(n.jsx)("div",{className:"word",onClick:function(t){return e.props.handleClickCheckbox(!0,t)},children:t},i):Object(n.jsx)("div",{className:"word",onClick:function(t){return e.props.handleClickCheckbox(!1,t)},children:t},i)}))]})}}]),c}(s.a.Component),m=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){for(var e=[Object(n.jsx)(k,{text:"\u10e1\u10d0\u10ee\u10d8\u10e4\u10d0\u10d7\u10dd \u10d3\u10d0\u10d5\u10d0\u10da\u10d4\u10d1\u10d4\u10d1\u10d8 \u10d2\u10d4\u10da\u10d8\u10e1! \u10d0\u10e0 \u10d2\u10d4\u10e8\u10d8\u10dc\u10d8\u10d0?",image:"http://placekitten.com/50/50"}),Object(n.jsx)(k,{text:"\u10d0\u10e0\u10d0, \u10d0\u10e0 \u10db\u10d4\u10e8\u10d8\u10dc\u10d8\u10d0!",image:"http://placekitten.com/g/50/50"}),Object(n.jsx)(C,{questionTitle:"Mario is scared",choices:["No, that\u2019s not right","Yes, that\u2019s true"],correctChoice:0,handleClickCheckbox:this.props.handleClickCheckbox}),Object(n.jsx)(k,{text:"\u10d3\u10e0\u10dd\u10d0 \u10ec\u10d0\u10d5\u10d8\u10d3\u10d4 \u10de\u10e0\u10d8\u10dc\u10ea\u10d4\u10e1\u10d0 \u10de\u10d8\u10e9\u10d8\u10e1 \u10d2\u10d0\u10d3\u10d0\u10e1\u10d0\u10e0\u10e9\u10d4\u10dc\u10d0\u10d3!",image:"http://placekitten.com/50/50"}),Object(n.jsx)(C,{questionTitle:"What is Mario's mission?",choices:["To stay home","To rescue princess peach","To kill princess peach"],correctChoice:1,handleClickCheckbox:this.props.handleClickCheckbox}),Object(n.jsx)(k,{text:"\u10e0\u10dd\u10d2\u10dd\u10e0\u10ea \u10ee\u10d4\u10d3\u10d0\u10d5, \u10d3\u10e6\u10d4\u10e1 \u10d9\u10d0\u10e0\u10d2\u10d8 \u10d0\u10db\u10d8\u10dc\u10d3\u10d8\u10d0.",image:"http://placekitten.com/g/50/50"}),Object(n.jsx)(v,{questionTitle:'Click on the word meaning "weather is":',words:["\u10ec\u10d5\u10d8\u10db\u10d0","\u10e5\u10d0\u10e0\u10d8","\u10d0\u10db\u10d8\u10dc\u10d3\u10d8\u10d0","\u10e0\u10dd\u10d2\u10dd\u10e0"],correctNum:2,handleClickCheckbox:this.props.handleClickCheckbox})],t=[],c=0;c<this.props.progress;c++)t.push(e[c]);return Object(n.jsx)("div",{children:t})}}]),c}(s.a.Component),f=c(10),g=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={score:0,progress:1,max:10},n.handleClickCheckbox=n.handleClickCheckbox.bind(Object(l.a)(n)),n.handleClickButton=n.handleClickButton.bind(Object(l.a)(n)),n}return Object(h.a)(c,[{key:"handleClickCheckbox",value:function(e,t){var c=t.nativeEvent.originalTarget;e?(c.classList.add("correct"),this.setState((function(e){return{score:e.score+1}}))):c.classList.add("incorrect")}},{key:"handleClickButton",value:function(){this.setState((function(e){return{progress:e.progress+1}}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{score:this.state.score}),Object(n.jsx)(f.a,{percent:10*this.state.progress,strokeColor:"red"}),Object(n.jsx)(m,{progress:this.state.progress,handleClickCheckbox:this.handleClickCheckbox}),Object(n.jsx)("div",{className:"next-button",onClick:this.handleClickButton,children:"next"})]})}}]),c}(s.a.Component),y=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={isHomepage:!0},n.handleClick=n.handleClick.bind(Object(l.a)(n)),n}return Object(h.a)(c,[{key:"handleClick",value:function(){this.state.isHomepage?this.setState({isHomepage:!1}):this.setState({isHomepage:!0})}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.isHomepage?Object(n.jsx)(d,{handleClick:this.handleClick}):Object(n.jsx)(g,{})})}}]),c}(s.a.Component);a.a.render(Object(n.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7b5c7b84.chunk.js.map