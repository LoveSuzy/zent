webpackJsonp([41],{1535:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function p(n){return y.default.createElement(n.tag,(0,u.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function e(n){return y.default.createElement(p,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function o(n){return y.default.createElement(p,{tag:"style",html:n.style})}function c(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),c(n.parentNode,a);return a}Object.defineProperty(a,"__esModule",{value:!0});var l=s(7),u=t(l),k=s(1),i=t(k),r=s(4),d=t(r),g=s(2),f=t(g),m=s(3),v=t(m),h=s(0),y=t(h),R=s(229),C=t(R),E=s(351),b=function(){var n=E.Radio.Group,a=function(a){function s(){var n,a,t,p;(0,i.default)(this,s);for(var e=arguments.length,o=Array(e),c=0;c<e;c++)o[c]=arguments[c];return a=t=(0,f.default)(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this].concat(o))),t.state={value:"male"},t.onChange=function(n){t.setState({value:n.target.value})},p=a,(0,f.default)(t,p)}return(0,v.default)(s,a),(0,d.default)(s,[{key:"render",value:function(){return y.default.createElement(n,{onChange:this.onChange,value:this.state.value},y.default.createElement(E.Radio,{value:"male"},"男"),y.default.createElement(E.Radio,{value:"female"},"女"))}}]),s}(h.Component);return y.default.createElement(a,null)},w=function(){var n=E.Radio.Group,a=function(a){function s(){var n,a,t,p;(0,i.default)(this,s);for(var e=arguments.length,o=Array(e),c=0;c<e;c++)o[c]=arguments[c];return a=t=(0,f.default)(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this].concat(o))),t.state={value:"male",valueCopy:"apple"},t.onChange=function(n){t.setState({value:n.target.value})},t.onChangeCopy=function(n){t.setState({valueCopy:n.target.value})},p=a,(0,f.default)(t,p)}return(0,v.default)(s,a),(0,d.default)(s,[{key:"render",value:function(){return y.default.createElement("div",null,y.default.createElement(n,{onChange:this.onChange,value:this.state.value,disabled:!0},y.default.createElement(E.Radio,{value:"male"},"男"),y.default.createElement(E.Radio,{value:"female"},"女")),y.default.createElement("br",null),y.default.createElement("br",null),y.default.createElement("br",null),y.default.createElement(n,{onChange:this.onChangeCopy,value:this.state.valueCopy},y.default.createElement(E.Radio,{value:"apple"},"苹果"),y.default.createElement(E.Radio,{value:"pears"},"梨子"),y.default.createElement(E.Radio,{value:"cucumber",disabled:!0},"黄瓜")))}}]),s}(y.default.Component);return y.default.createElement(a,null)},_=function(){var n=E.Radio.Group,a=E.Layout.Row,s=E.Layout.Col,t=function(t){function p(){var n,a,s,t;(0,i.default)(this,p);for(var e=arguments.length,o=Array(e),c=0;c<e;c++)o[c]=arguments[c];return a=s=(0,f.default)(this,(n=p.__proto__||Object.getPrototypeOf(p)).call.apply(n,[this].concat(o))),s.state={value:"A"},s.onChange=function(n){s.setState({value:n.target.value})},t=a,(0,f.default)(s,t)}return(0,v.default)(p,t),(0,d.default)(p,[{key:"render",value:function(){return y.default.createElement(n,{onChange:this.onChange,value:this.state.value,style:{width:"100%"}},y.default.createElement(a,null,y.default.createElement(s,{span:8},y.default.createElement(E.Radio,{value:"A"},"A")),y.default.createElement(s,{span:8},y.default.createElement(E.Radio,{value:"B"},"B")),y.default.createElement(s,{span:8},y.default.createElement(E.Radio,{value:"C"},"C")),y.default.createElement(s,{span:8},y.default.createElement(E.Radio,{value:"D"},"D")),y.default.createElement(s,{span:8},y.default.createElement(E.Radio,{value:"E"},"E")),y.default.createElement(s,{span:8},y.default.createElement(E.Radio,{value:"F"},"F"))))}}]),p}(y.default.Component);return y.default.createElement(t,null)},j=function(){var n=E.Radio.Group,a=function(a){function s(){var n,a,t,p;(0,i.default)(this,s);for(var e=arguments.length,o=Array(e),c=0;c<e;c++)o[c]=arguments[c];return a=t=(0,f.default)(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this].concat(o))),t.state={value:{foo:1}},t.onChange=function(n){t.setState({value:n.target.value})},p=a,(0,f.default)(t,p)}return(0,v.default)(s,a),(0,d.default)(s,[{key:"isValueEqual",value:function(n,a){return n&&a&&n.foo===a.foo}},{key:"render",value:function(){return y.default.createElement(n,{value:this.state.value,isValueEqual:this.isValueEqual,onChange:this.onChange},y.default.createElement(E.Radio,{value:{foo:1}},"Foo 1"),y.default.createElement(E.Radio,{value:{foo:2}},"Foo 2"))}}]),s}(y.default.Component);return y.default.createElement(a,null)},G=function(n){function a(){var n,s,t,p;(0,i.default)(this,a);for(var e=arguments.length,o=Array(e),c=0;c<e;c++)o[c]=arguments[c];return s=t=(0,f.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),t.state={showCode:!1},t.toggle=function(){t.setState({showCode:!t.state.showCode})},p=s,(0,f.default)(t,p)}return(0,v.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return y.default.createElement("div",{className:"zandoc-react-demo"},y.default.createElement("div",{className:"zandoc-react-demo__preview"},e),y.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.default.createElement("div",{className:"zandoc-react-demo__title"},y.default.createElement("p",null,s||"")),y.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.default.createElement("pre",{className:"zandoc-react-demo__code"},y.default.createElement(p,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(h.Component),A=function(n){function a(){return(0,i.default)(this,a),(0,f.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,v.default)(a,n),(0,d.default)(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'+n+'"]');a&&(0,C.default)(document.documentElement,0,c(a,-9))}}},{key:"render",value:function(){return y.default.createElement("div",{className:"zandoc-react-container",key:null},y.default.createElement(o,{style:""}),y.default.createElement(e,{html:'<h2 class="anchor-heading"><a href="#radio-dan-xuan">¶</a><a href="javascript:void(0)" id="radio-dan-xuan" class="anchor-point"></a>Radio 单选</h2>\n<p><code>RadioGroup</code> 是一个<a href="">受控组件</a>, 必须要设置 <code>onChange</code> 回调方法在组件外部处理 <code>value</code> 变化.</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),y.default.createElement(G,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> RadioGroup <span class="token operator">=</span> Radio<span class="token punctuation">.</span>Group<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'male\'</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RadioGroup</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>male<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>female<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>女<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RadioGroup</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(b)),y.default.createElement(G,{title:"禁用状态",id:"Demodisable",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span>\n\n<span class="token keyword">const</span> RadioGroup <span class="token operator">=</span> Radio<span class="token punctuation">.</span>Group<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'male\'</span><span class="token punctuation">,</span>\n    valueCopy<span class="token punctuation">:</span> <span class="token string">\'apple\'</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChangeCopy</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> valueCopy<span class="token punctuation">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RadioGroup</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>male<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>female<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>女<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RadioGroup</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RadioGroup</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChangeCopy<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>valueCopy<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>apple<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>苹果<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pears<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>梨子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cucumber<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>黄瓜<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RadioGroup</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(w)),y.default.createElement(G,{title:"布局",id:"Demolayout",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Radio<span class="token punctuation">,</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span>\n\n<span class="token keyword">const</span> RadioGroup <span class="token operator">=</span> Radio<span class="token punctuation">.</span>Group<span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> Row<span class="token punctuation">,</span> Col <span class="token punctuation">}</span> <span class="token operator">=</span> Layout\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'A\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>RadioGroup onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span> value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>D<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>D<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>E<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>F<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RadioGroup</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(_)),y.default.createElement(G,{title:"支持自定义比较函数",id:"Democompare",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span>\n\n<span class="token keyword">const</span> RadioGroup <span class="token operator">=</span> Radio<span class="token punctuation">.</span>Group<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      foo<span class="token punctuation">:</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">isValueEqual</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> a <span class="token operator">&amp;&amp;</span> b <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>foo <span class="token operator">===</span> b<span class="token punctuation">.</span>foo<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RadioGroup</span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n        <span class="token attr-name">isValueEqual</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>isValueEqual<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>Radio value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> foo<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Foo <span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>Radio value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> foo<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Foo <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RadioGroup</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(j)),y.default.createElement(e,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<h4 class="anchor-heading"><a href="#radiogroup">¶</a><a href="javascript:void(0)" id="radiogroup" class="anchor-point"></a>RadioGroup</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>用于设置当前选中的值</td>\n<td>any</td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>使组件不可用</td>\n<td>bool</td>\n<td></td>\n</tr>\n<tr>\n<td>readOnly</td>\n<td>使组件只读</td>\n<td>bool</td>\n<td></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>选项变化时的回调函数</td>\n<td>func(e: event)</td>\n<td></td>\n</tr>\n<tr>\n<td>isValueEqual</td>\n<td>可选参数，判断value值是否相等</td>\n<td>func(a, b)</td>\n<td><code>(a, b) => a === b</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#radio">¶</a><a href="javascript:void(0)" id="radio" class="anchor-point"></a>Radio</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>根据 value 进行比较，判断是否选中</td>\n<td>any</td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>使组件不可用</td>\n<td>bool</td>\n<td></td>\n</tr>\n<tr>\n<td>readOnly</td>\n<td>使组件只读</td>\n<td>bool</td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>width</td>\n<td>宽度</td>\n<td>string or number</td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(h.Component);a.default=A}});