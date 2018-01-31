webpackJsonp([2],{"./src/components/ui/DropDown/DropDown.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return m});var i,s,l=n("./src/components/ui/Portal.js"),c=n("./node_modules/react/react.js"),p=n.n(c),u=n("./node_modules/prop-types/index.js"),d=n.n(u),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=(s=i=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={open:!1,left:0,right:0,bottom:0,menuWidth:0,menuHeight:0},n.handleHide=n.handleHide.bind(n),n}return r(t,e),h(t,[{key:"componentDidUpdate",value:function(){if(this.refs.dropDownMenu){if(this.props.openAbove){var e=this.refs.dropDownMenu.getBoundingClientRect();e.width===this.state.menuWidth&&e.height===this.state.menuHeight||this.setState({menuWidth:e.width,menuHeight:e.height})}this.refs.dropDownMenu.focus()}}},{key:"render",value:function(){var e=this,t=this.props.width||"auto",n="calc( 100% - 20px)";this.props.width&&(!isNaN(parseFloat(t))&&isFinite(t)?(n=t-20+"px",t+="px"):n=-1!==t.indexOf("%")?"calc( 100% - 20px)":parseInt(t,10)-20+"px");var o=this.props.children;this.props.selectedListItem&&(o=p.a.Children.map(this.props.children,function(t,n){if(n===e.props.selectedItem){var o=e.props.selectedListItem;"function"==typeof o&&(o=o());var a=t;return e.props.selectedListItemStyle&&(a=p.a.cloneElement(t,{style:e.props.selectedListItemStyle})),p.a.cloneElement(o,{children:a})}return p.a.cloneElement(t)}));var a=window.pageYOffset,r=this.state.left+"px",i=this.state.bottom+a+"px";this.props.openAbove&&(i=this.state.top-this.state.menuHeight+"px"),"left"===this.props.position.toLowerCase()&&(r=this.state.right-parseInt(t,10)+"px");var s={top:i,left:r,width:t},c=p.a.createElement(l.a,{isOpened:!0},p.a.createElement("div",{"data-auto":this.props.dataAuto+"-items",ref:"dropDownMenu",tabIndex:1,onBlur:this.handleHide.bind(this),onClick:this.handleToggle.bind(this),className:"drop-down__menu "+this.props.menuClassName,style:s},o)),u=p.a.cloneElement(this.props.children[this.props.selectedItem],{isSelected:!0,width:n});return p.a.createElement("div",{ref:"dropdown",tabIndex:"0",className:"drop-down__container "+(this.props.disabled&&"drop-down--disabled-cursor"||"")+" "+this.props.wrapperClassName,style:{width:t},onClick:this.handleToggle.bind(this)},p.a.createElement("div",{className:"drop-down__select-box "+(this.props.disabled&&"drop-down--disabled"||"")+" "+this.props.selectBoxClassName,"data-auto":this.props.dataAuto},u," ",p.a.createElement("i",{className:"drop-down__caret "+(this.props.disabled&&"drop-down--disabled"||"")+" fa fa-caret-down",ref:"indicator"})),this.state.open?c:null)}},{key:"handleToggle",value:function(e){e.stopPropagation();var t=this.refs.dropdown.getBoundingClientRect(),n=t.left,o=t.bottom,a=t.top,r=this.refs.indicator.getBoundingClientRect(),i=r.right;this.setState({open:!this.state.open,left:n,bottom:o,right:i,top:a})}},{key:"handleHide",value:function(){var e=this;setTimeout(function(){e.state.open&&e.setState({open:!1})},105)}}]),t}(c.Component),i.displayName="DropDown",i.propTypes={children:d.a.node,selectedListItem:d.a.oneOfType([d.a.func,d.a.node]),selectedListItemStyle:d.a.oneOfType([d.a.object,d.a.array]),wrapperClassName:d.a.string,selectBoxClassName:d.a.string,menuClassName:d.a.string,dataAuto:d.a.string,onClick:d.a.func,disabled:d.a.bool,position:d.a.string,openAbove:d.a.bool,width:d.a.oneOfType([d.a.string,d.a.number]),selectedItem:d.a.any},i.defaultProps={selectedItem:0,position:"right",onClick:function(){}},s)},"./src/components/ui/DropDown/DropDownItem.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return m});var i,s,l=n("./node_modules/react/react.js"),c=n.n(l),p=n("./node_modules/prop-types/index.js"),u=n.n(p),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=(s=i=function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),h(t,[{key:"render",value:function(){var e=this.props.children;return"string"!=typeof e&&this.props.isSelected&&(e=c.a.Children.map(this.props.children,function(e){var t={};return"function"==typeof e.type&&(t.isSelected=!0),c.a.cloneElement(e,d({},t))})),c.a.createElement("div",{onClick:this.handleClick.bind(this),className:"drop-down__item\n          "+this.props.className+"\n          "+(this.props.isSelected&&"drop-down__item--active"||"")+"\n          "+(this.props.isSelected&&this.props.activeClassName||"")+"\n          "+(this.props.placeHolder&&"drop-down__place-holder"||""),style:{width:this.props.width}},e)}},{key:"handleClick",value:function(e){this.props.isSelected||this.props.onClick(this.props.value,e)}}]),t}(l.Component),i.displayName="DropDownItem",i.propTypes={children:u.a.node,onClick:u.a.func,placeHolder:u.a.bool,value:u.a.any,isSelected:u.a.bool,width:u.a.string,className:u.a.string,activeClassName:u.a.string},i.defaultProps={placeHolder:!1,onClick:function(){},className:""},s)},"./src/components/ui/DropDown/SelectedItem.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return h});var i,s,l=n("./node_modules/react/react.js"),c=n.n(l),p=n("./node_modules/prop-types/index.js"),u=n.n(p),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=(s=i=function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),d(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"drop-down__select-box--selected "+(this.props.className||"")},c.a.createElement("i",{style:{fontSize:"9px"},className:"fa fa-check"}),c.a.createElement("div",{className:"drop-down__inline-element"},c.a.cloneElement(this.props.children,{className:"drop-down__selected-item "+this.props.className})))}}]),t}(l.Component),i.displayName="SelectedItem",i.propTypes={children:u.a.node,className:u.a.string},s)},"./src/components/ui/Portal.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){for(;e;){if(e===t)return!0;e=e.parentNode}return!1}n.d(t,"a",function(){return y});var s,l,c=n("./node_modules/react/react.js"),p=n.n(c),u=n("./node_modules/prop-types/index.js"),d=n.n(u),h=n("./node_modules/react-dom/index.js"),m=n.n(h),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),y=(l=s=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={active:!1},e.openPortal=e.openPortal.bind(e),e.closePortal=e.closePortal.bind(e),e.handleOutsideMouseClick=e.handleOutsideMouseClick.bind(e),e.handleKeydown=e.handleKeydown.bind(e),e.handleScroll=e.handleScroll.bind(e),e.portal=null,e.node=null,e.throttleTime=0,e}return r(t,e),f(t,[{key:"componentWillMount",value:function(){this.props.isOpened&&this.openPortal(this.props)}},{key:"componentDidMount",value:function(){this.props.closeOnEsc&&document.addEventListener("keydown",this.handleKeydown),this.props.closeOnOutsideClick&&(document.addEventListener("mousedown",this.handleOutsideMouseClick),document.addEventListener("touchstart",this.handleOutsideMouseClick)),this.props.closeOnOutsideScroll&&document.addEventListener("scroll",this.handleScroll,!0)}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.isOpened&&(e.isOpened&&(this.state.active?this.renderPortal(e):this.openPortal(e)),!e.isOpened&&this.state.active&&this.closePortal()),void 0===e.isOpened&&this.state.active&&this.renderPortal(e)}},{key:"componentWillUnmount",value:function(){this.props.closeOnEsc&&document.removeEventListener("keydown",this.handleKeydown),this.props.closeOnOutsideClick&&(document.removeEventListener("mousedown",this.handleOutsideMouseClick),document.removeEventListener("touchstart",this.handleOutsideMouseClick)),this.props.closeOnOutsideScroll&&document.removeEventListener("scroll",this.handleScroll,!0),this.closePortal()}},{key:"render",value:function(){return this.props.openByClickOn?p.a.createElement("div",{className:"openByClickOn",onClick:this.openPortal.bind(this,this.props)},this.props.openByClickOn):null}},{key:"renderPortal",value:function(e){this.node||(this.node=document.createElement("div"),document.body.appendChild(this.node));var t=e.children;"function"==typeof e.children.type&&(t=cloneElement(e.children,{closePortal:this.closePortal})),this.portal=m.a.unstable_renderSubtreeIntoContainer(this,t,this.node,this.props.onUpdate)}},{key:"openPortal",value:function(e,t){t&&(t.preventDefault(),t.stopPropagation()),this.setState({active:!0}),this.renderPortal(e)}},{key:"closePortal",value:function(e){this.node&&(m.a.unmountComponentAtNode(this.node),document.body.removeChild(this.node)),this.portal=null,this.node=null,this.props.onClose&&this.props.onClose(e)}},{key:"handleOutsideMouseClick",value:function(e){this.state.active&&(i(e.target,m.a.findDOMNode(this.portal))||(e.stopPropagation(),this.closePortal(e.target)))}},{key:"handleKeydown",value:function(e){27===e.keyCode&&this.state.active&&this.closePortal()}},{key:"handleScroll",value:function(e){if(Date.now()>this.throttleTime+500){if(this.throttleTime=Date.now(),!this.state.active)return;if(i(e.target,this.portal))return;e.stopPropagation(),this.closePortal(e.target)}}}]),t}(c.Component),s.displayName="Portal",s.propTypes={children:d.a.element.isRequired,className:d.a.string,closeOnEsc:d.a.bool,closeOnOutsideClick:d.a.bool,isOpened:d.a.bool,onClose:d.a.func,openByClickOn:d.a.element,style:d.a.object},l)},"./src/pages/Admin.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return g});var i,s,l=n("./node_modules/react/react.js"),c=n.n(l),p=n("./node_modules/mobx-react/index.module.js"),u=n("./src/components/ui/DropDown/DropDown.js"),d=n("./src/components/ui/DropDown/DropDownItem.js"),h=n("./src/components/ui/DropDown/SelectedItem.js"),m=n("./node_modules/axios/index.js"),f=n.n(m),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),g=(i=Object(p.inject)("store"))(s=Object(p.observer)(s=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleFieldChanged=function(e){var t=y({},n.state.challenge);t[e.currentTarget.id]=e.currentTarget.value,n.setState({challenge:t})},n.handleCategoryChanged=function(e){n.setState({category:e.currentTarget.value})},n.handleSelection=function(e,t){var o=y({},n.state.challenge);o.category=t,n.setState({challenge:o})},n.validateInput=function(e,t,n){var o=e.which;if(0!==o){var a=String.fromCharCode(o);(!n.test(a)||e.target.value.length>=t)&&8!==e.which&&e.preventDefault()}},n.store=n.props.store,n.state={challenge:{title:"",category:0,points:0,description:"",flag:""},category:""},n.getCategories=n.getCategories.bind(n),n}return r(t,e),b(t,[{key:"addChallenge",value:function(){var e=this.state.challenge;return'mutation { addChallenge(flag: "'+e.flag+'" category: '+e.category+' title: "'+e.title+'" points: '+e.points+' description: "'+e.description+'") { status } }'}},{key:"addCategory",value:function(){return'mutation { addCategory(name: "'+this.state.category+'") { status } }'}},{key:"onSubmit",value:function(e){if(this.state.challenge.category){f.a.defaults.baseURL=location.protocol+"//"+location.hostname+":8000",f.a.defaults.withCredentials=!0;var t=this.addChallenge();f.a.post("/graphql/",{query:t,headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){})}}},{key:"onCategorySubmitted",value:function(e){f.a.defaults.baseURL=location.protocol+"//"+location.hostname+":8000";var t=this.addCategory();f.a.post("/graphql/",{query:t,headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){})}},{key:"getCategories",value:function(){var e=this,t=this.store.appState.categories,n=null;return 0!=t.length&&"test"===t[0].id||t.unshift({id:"test",name:"Please select a category",sid:0}),0!==t.length&&(t.sort(function(e,t){return e.sid>t.sid?1:t.sid>e.sid?-1:0}),n=t.map(function(t,n){return c.a.createElement(d.a,{onClick:e.handleSelection.bind(e,t),key:t.sid,value:t.sid},c.a.createElement("span",null,t.name))})),n}},{key:"render",value:function(){var e=this,t=this.getCategories();return t.sort(function(e,t){return e.sid>t.sid?1:t.sid>e.sid?-1:0}),c.a.createElement("div",{className:"page posts"},c.a.createElement("div",{className:"page-header"},"Admin Panel"),c.a.createElement("div",{className:"temp-section"},c.a.createElement("div",{className:"temp-header"},"Create Category"),c.a.createElement("div",{className:"temp-form"},c.a.createElement("ul",{className:"temp-flex"},c.a.createElement("li",null,c.a.createElement("label",null,"Category"),c.a.createElement("input",{type:"text",id:"title",className:"temp-input",placeholder:"Cool Category",onChange:this.handleCategoryChanged}),c.a.createElement("span",{className:"requiredStar"},"*")),c.a.createElement("li",null,c.a.createElement("small",{className:"requiredText"},"* required")),c.a.createElement("li",null,c.a.createElement("button",{type:"button",onClick:this.onCategorySubmitted.bind(this)},"Submit"))))),c.a.createElement("div",{className:"temp-section"},c.a.createElement("div",{className:"temp-header"},"Create Challenge"),c.a.createElement("div",{className:"temp-form"},c.a.createElement("ul",{className:"temp-flex"},c.a.createElement("li",null,c.a.createElement("label",null,"Category"),c.a.createElement(u.a,{width:460,selectedItem:this.state.challenge.category,selectedListItem:c.a.createElement(h.a,null)},t),c.a.createElement("span",{className:"requiredStar"},"*")),c.a.createElement("li",null,c.a.createElement("label",null,"Title"),c.a.createElement("input",{type:"text",id:"title",className:"temp-input",placeholder:"Awesome Laser Challenge",onChange:this.handleFieldChanged}),c.a.createElement("span",{className:"requiredStar"},"*")),c.a.createElement("li",null,c.a.createElement("label",null,"Points"),c.a.createElement("input",{type:"text",id:"points",className:"temp-input",placeholder:"It's over 9000",onKeyPress:function(t){e.validateInput(t,10,/^\d+$/)},onChange:this.handleFieldChanged}),c.a.createElement("span",{className:"requiredStar"},"*")),c.a.createElement("li",null,c.a.createElement("label",null,"Description"),c.a.createElement("textarea",{rows:"6",id:"description",className:"temp-input",placeholder:"Duck the lasers, steal the egg. Simple.",onChange:this.handleFieldChanged}),c.a.createElement("span",{className:"requiredStar"},"*")),c.a.createElement("li",null,c.a.createElement("label",null,"Flag"),c.a.createElement("input",{type:"text",id:"flag",className:"temp-input",placeholder:"ctf{flagformat}",onChange:this.handleFieldChanged}),c.a.createElement("span",{className:"requiredStar"},"*")),c.a.createElement("li",null,c.a.createElement("small",{className:"requiredText"},"* required")),c.a.createElement("li",null,c.a.createElement("button",{type:"button",onClick:this.onSubmit.bind(this)},"Submit"))))),c.a.createElement("div",{className:"temp-section"},c.a.createElement("div",{className:"temp-header"},"Challenge Status"),c.a.createElement("div",null)))}}]),t}(l.Component))||s)||s}});