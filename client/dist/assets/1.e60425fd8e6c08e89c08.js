webpackJsonp([1],{"./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/styles/main.scss":function(n,e,o){e=n.exports=o("./node_modules/css-loader/lib/css-base.js")(void 0),e.push([n.i,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\n.posts .subheader,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  vertical-align: baseline;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  font: inherit;\n  font-size: 100%;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          flex: 1;\n          flex-direction: column;\n  margin: 0;\n  padding: 0;\n  overflow-y: scroll;\n}\n\n.wrapper {\n  min-height: 100vh;\n}\n\n#root,\n.wrapper,\n.page,\n.authComponent {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          flex: 1;\n          flex-direction: column;\n}\n\nfooter {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          flex: 0 1 auto;\n          align-items: center;\n          justify-content: center;\n  border-top: 1px solid #eee;\n  padding: 18px 0;\n  width: 100%;\n  height: 60px;\n  color: #666;\n  font-size: 13px;\n}\n\nfooter a {\n  margin-left: .5ch;\n}\n\nfooter a:first-child {\n  margin-right: .5ch;\n}\n\nhtml {\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  font-size: 100%;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.5;\n  text-rendering: optimizeLegibility;\n}\n\nbody {\n  color: #666;\n  line-height: 1.333;\n}\n\nh1 {\n  margin-top: 0;\n  font-size: 3.998em;\n}\n\nh1 {\n  font-size: 2.827em;\n}\n\nh2 {\n  font-size: 1.999em;\n}\n\nh3 {\n  font-size: 1.7em;\n}\n\nh4,\n.posts .subheader {\n  font-size: 1.414em;\n}\n\nsmall,\n.font_small {\n  font-size: 0.707em;\n}\n\na {\n  cursor: pointer;\n  color: rgba(0, 0, 0, .9);\n  text-decoration: none;\n}\n\na:hover {\n  color: black;\n}\n\na.active {\n  color: black;\n}\n\n.form-control {\n  -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n  display: block;\n  transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: .25rem;\n  background-clip: padding-box;\n  background-color: #fff;\n  background-image: none;\n  padding: 8px 12px;\n  padding: .5rem .75rem;\n  width: 100%;\n  color: #464a4c;\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 1.25;\n}\n\nheader {\n  position: relative;\n  background: -webkit-gradient(linear, left top, right top, from(#fc3476), to(#ff1111)) no-repeat center center fixed;\n  background: linear-gradient(90deg, #fc3476, #ff1111) no-repeat center center fixed;\n  height: 60vh;\n}\n\nh1 {\n  margin: 0px 0px 0px -5px;\n  padding: 50px 0;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 125px;\n  font-weight: 100;\n  letter-spacing: -6px;\n  text-align: center;\n  text-transform: lowercase;\n}\n\n.red {\n  color: #9c0404;\n  /* #ffc500; */\n  letter-spacing: -10px;\n}\n\nheader {\n  color: white;\n}\n\nsvg {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 25vh;\n  /* set height to pixels if you want angle to change with screen width */\n}\n\n.topbar {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n          flex: 0 1 auto;\n          align-items: center;\n  z-index: 2;\n  background: transparent;\n  padding: 0 24px;\n  width: 100%;\n  height: 60px;\n}\n\n.topbar .button {\n  color: rgba(0, 0, 0, .5);\n  font-weight: 600;\n}\n\n.topbar .button:hover {\n  color: black;\n}\n\n.team-name {\n  padding: 0px 20px 0px 0px;\n}\n\n.team-name a {\n  color: rgba(0, 0, 0, .5);\n}\n\n.team-name:hover {\n  cursor: pointer;\n}\n\n.team-name:hover a {\n  color: black;\n}\n\n.push-right {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          flex: 1;\n}\n\n.topbar nav {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          flex: 1;\n}\n\n.topbar nav a {\n  margin-right: 24px;\n  color: rgba(0, 0, 0, .5);\n  font-weight: 500;\n}\n\n.topbar nav a:hover {\n  color: black;\n}\n\n.topbar nav a.active {\n  color: black;\n}\n\n.page {\n  background: #fff;\n}\n\n.page-header {\n  margin: 40px 0px 20px;\n  font-family: sans-serif;\n  font-size: 32px;\n  font-weight: 100;\n}\n\n.temp-section {\n  margin-bottom: 30px;\n  background: rgba(243, 243, 243, 0.95294);\n  padding: 20px;\n}\n\n.temp-header {\n  border-bottom: 1px solid #e3e3e3;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.temp-form {\n  margin: 0 auto;\n  width: 80%;\n}\n\n.temp-form * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.temp-flex {\n  margin: 0 auto;\n  padding: 0;\n  list-style-type: none;\n}\n\n.temp-flex li {\n  -ms-flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n      flex-wrap: wrap;\n          align-items: center;\n}\n\n.temp-flex li label {\n  padding: 8px;\n  font-weight: 300;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n}\n\n.temp-flex li input,\n.temp-flex li textarea,\n.temp-flex li select {\n  border: none;\n  background-color: white;\n  padding: 15px;\n}\n\n.temp-flex > li:not(:last-child) {\n  margin-bottom: 20px;\n}\n\n.temp-flex > li > label {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 120px;\n          flex: 1 0 120px;\n  max-width: 220px;\n}\n\n.temp-flex > li > label + * {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 220px;\n          flex: 1 0 220px;\n}\n\n.temp-flex li button {\n  margin-left: auto;\n  border: none;\n  border-radius: 2px;\n  background: #333;\n  padding: 8px 16px;\n  color: #f2f2f2;\n  letter-spacing: .09em;\n  text-transform: uppercase;\n}\n\n.requiredText {\n  margin-left: auto;\n}\n\n.requiredStar {\n  margin-left: 10px;\n}\n\n.category-horizontal {\n  border-bottom: 1px solid #ccc;\n}\n\n.category-horizontal .challengeRowCol .horizontal {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          flex-direction: row;\n          align-items: center;\n}\n\n.category-vertical .challengeRowCol {\n  margin-top: 60px;\n}\n\n.category-vertical .challengeRowCol .vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          flex-direction: column;\n          align-items: center;\n}\n\n.challengeCategory {\n  min-width: 150px;\n}\n\n.post-vertical {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n  -ms-flex-pack: distribute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          flex-direction: row;\n      justify-content: space-around;\n  text-align: center;\n}\n\n.post-horizontal {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          align-items: center;\n  padding-top: 100px !important;\n}\n\n.legend {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          align-items: center;\n          justify-content: center;\n  margin-top: 15px;\n  width: 100%;\n}\n\n.legend .solved-key {\n  display: inline-block;\n  margin-right: 5px;\n  background-color: green;\n  width: 30px;\n  height: 20px;\n}\n\n.legend .unsolved-key {\n  display: inline-block;\n  margin: 0px 5px 0px 15px;\n  background-color: blue;\n  width: 30px;\n  height: 20px;\n}\n\n.home .hero-unit {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          flex: 0 1 auto;\n          flex-flow: row wrap;\n          align-items: center;\n          justify-content: center;\n  width: 100%;\n}\n\n.home header {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          justify-content: center;\n}\n\n.home main {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          flex-flow: row wrap;\n  z-index: 2;\n  margin: 0 auto;\n  margin-top: -40vh;\n  padding: 96px 0 0 0;\n  min-width: 960px;\n  max-width: 960px;\n}\n\n.home main .section-header {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  padding-bottom: 72px;\n  width: 100%;\n  color: #fff;\n  text-align: center;\n}\n\n.home main .section-header h3 {\n  font-weight: 500;\n}\n\n.home main .section-header.extras {\n  margin-top: 48px;\n}\n\n.home main .section-header.extras h4,\n.home main .section-header.extras .posts .subheader,\n.posts .home main .section-header.extras .subheader {\n  color: #000;\n  font-weight: 700;\n}\n\n.home main .section-header.extras ul {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          flex: 1;\n          flex-flow: row nowrap;\n  margin: 36px auto 0 auto;\n  width: 100%;\n  max-width: 720px;\n}\n\n.home main .section-header.extras ul li {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n  -ms-flex-line-pack: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          flex: 1;\n      align-content: center;\n          justify-content: center;\n}\n\n.home main .section-header hr {\n  margin: 24px auto 0px;\n  border: none;\n  background-color: #ddd;\n  max-width: 96px;\n  height: 1px;\n  color: #ddd;\n}\n\n.home main .section-item {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          flex: 0 1 auto;\n          flex-flow: row nowrap;\n  margin: 0px 24px 48px 24px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  background: white;\n  padding: 15px;\n  width: calc(50% - 48px);\n}\n\n.home main .section-item .section-logo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 24px;\n  background: url("+o("./src/images/react.png")+");\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 80px;\n  height: 80px;\n}\n\n.home main .section-item .section-logo.mobx {\n  background: url("+o("./src/images/mobx.png")+");\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.home main .section-item .section-logo.django {\n  background: url("+o("./src/images/django.png")+");\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.home main .section-item .section-logo.rethinkdb {\n  background: url("+o("./src/images/rethinker.png")+");\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.home main .section-item .section-item-content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.home main .section-item h4,\n.home main .section-item .posts .subheader,\n.posts .home main .section-item .subheader {\n  color: #000;\n  font-weight: 500;\n}\n\n.home main .section-item small {\n  color: #999;\n  font-weight: 500;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n.home main .section-item p {\n  margin-top: 12px;\n}\n\n.github-buttons {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          flex: 0 1 auto;\n          align-items: center;\n          justify-content: center;\n  margin: 36px 0;\n  width: 100%;\n}\n\n.github-buttons a {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          align-items: center;\n  border: 1px solid #000;\n  border-radius: 2px;\n  padding: 18px 24px;\n  color: #000;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.github-buttons a:before {\n  margin-right: 12px;\n  background: url("+o("./src/images/GitHub-Mark-32px.png")+");\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n  content: '';\n}\n\n.github-buttons a:hover {\n  background: #000;\n  color: #fff;\n}\n\n.github-buttons a:hover:before {\n  background: url("+o("./src/images/GitHub-Mark-Light-32px.png")+');\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.posts {\n  margin: 0 auto;\n  padding: 48px 24px;\n  min-width: 960px;\n  max-width: 960px;\n  /*    ul {\n        display: flex;\n        flex-flow: row wrap;\n        li {\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            flex: 0 1 auto;\n            margin-right: 36px;\n            width: calc(50% - 36px);\n            margin-bottom: 36px;\n            a {\n                display: block;\n                font-weight: 700;\n                margin-bottom: 12px;\n                h1 {\n                    @extend h4;\n                    line-height: 1.2;\n                    &::first-letter {\n                        text-transform: uppercase;\n                    }\n                }\n            }\n            p {\n                font-weight: 400;\n                &::first-letter {\n                    text-transform: uppercase;\n                }\n            }\n        }\n    }*/\n}\n\n.posts h1 {\n  margin-bottom: 9px;\n  color: #000;\n  font-weight: 700;\n}\n\n.posts .subheader {\n  font-weight: 300;\n}\n\n.posts hr {\n  margin-top: 48px;\n  margin-bottom: 48px;\n  border: none;\n  background-color: #ddd;\n  width: 100%;\n  height: 1px;\n  color: red;\n}\n\n.post {\n  margin: 0 auto;\n  padding: 48px 24px;\n  min-width: 960px;\n  max-width: 960px;\n}\n\n.post a {\n  margin: 0 0 72px 0;\n}\n\n.post h1 {\n  margin-bottom: 24px;\n  color: #000;\n  font-weight: 700;\n}\n\n.post h1::first-letter {\n  text-transform: uppercase;\n}\n\n.post p::first-letter {\n  text-transform: uppercase;\n}\n\n.login {\n  margin-top: 200px;\n}\n\n.login-inputs input {\n  width: 268px;\n}\n\n.login-button {\n  cursor: pointer;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  border-color: #0285fc;\n  background-color: #52a6fa;\n  padding: 9px 19px;\n  width: 130px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.login-button:hover {\n  background-color: #0285fc;\n}\n\n.login-window {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          flex-direction: column;\n  margin: 0 auto;\n  border: 1px solid #aaa;\n  padding: 15px;\n  width: 300px;\n}\n\n.login-button-row {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          justify-content: space-between;\n  margin-top: 15px;\n}\n\n.error-message {\n  margin-top: 15px;\n  border: 1px solid red;\n  border-radius: 5px;\n  background-color: pink;\n  padding: 5px 10px;\n  color: red;\n  font-size: 12px;\n}\n\n.success-message {\n  margin-top: 15px;\n  border: 1px solid green;\n  border-radius: 5px;\n  background-color: #ade3c3;\n  padding: 5px 10px;\n  color: green;\n  font-size: 12px;\n}\n\n.disabled {\n  border-color: grey;\n  background-color: #aaa;\n}\n\n.disabled:hover {\n  cursor: not-allowed;\n  border-color: grey;\n  background-color: #aaa;\n}\n\n.jeopardy-button {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          justify-content: center;\n  margin: 15px;\n  border-radius: 5px;\n  padding: 10px 20px;\n  max-width: 120px;\n}\n\n.jeopardy-button:hover {\n  cursor: pointer;\n}\n\n.jeopardy-button .button {\n  color: #fff;\n}\n\n/*.modal {\n  position: absolute;\n  background: #eee;\n  display: flex;\n  width: 300px;\n  height: 400px;\n  z-index: 3;\n  top: 100px;\n  left: calc(50%-150px);\n}  */\n\n.modal-overlay {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n  -webkit-transition: all 0.3s;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n          align-items: center;\n          justify-content: center;\n  z-index: 2;\n  transition: all 0.3s;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, .5);\n  width: 100%;\n  height: 100%;\n}\n\n.modal {\n  -webkit-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, .3);\n  -webkit-transition: all 0.8s;\n  top: 100px;\n  left: calc(50% - 150px);\n  transition: all 0.8s;\n          box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, .3);\n  border-radius: 3px;\n  background: #fff;\n  width: 500px;\n  font-family: "Open Sans", sans-serif;\n}\n\n.modal-header {\n  border-bottom: 1px solid #999;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n  background: #e9e9e9;\n  padding: 7px 11px 7px;\n}\n\n.modal-title {\n  display: inline-block;\n  color: #333;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.modal-close {\n  float: right;\n  cursor: pointer;\n  margin-top: 3px;\n  background: url('+o("./src/images/x-close.png")+');\n  width: 11px;\n  height: 12px;\n  color: #999;\n}\n\n.modal-content {\n  padding: 30px;\n  max-height: 75vh;\n  font-size: 13px;\n}\n\n.modal-footer {\n  border-top: 1px solid #ccc;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  padding: 10px;\n  text-align: right;\n}\n\n.challenge-modal {\n  padding: 20px;\n  height: 400px;\n}\n\n/** @define drop-down */\n\n.drop-down__container {\n  position: relative;\n  /*border: 1px solid #ccc;*/\n  border-radius: 3px;\n  width: 207px;\n}\n\n.drop-down__menu {\n  -webkit-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .5);\n  position: absolute;\n  z-index: 9999;\n  outline: 0;\n          box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .5);\n  background: #fff;\n  padding: 10px 0;\n  width: 100%;\n}\n\n.drop-down__caret {\n  padding-right: 5px;\n}\n\n.drop-down--disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n.drop-down--disabled--cursor {\n  cursor: not-allowed;\n}\n\n.drop-down__select-box {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n          align-items: center;\n          justify-content: space-between;\n  cursor: pointer;\n  background-color: white;\n  padding: 2px;\n  line-height: 16px;\n          user-select: none;\n  /* item in the menu that\'s been selected, so the style of the opened menu */\n}\n\n.drop-down__select-box--selected {\n  padding: 6px 5px 6px 7px;\n  white-space: nowrap;\n}\n\n.drop-down__select-box--selected:hover {\n  background-color: #52a6fa;\n  color: #fff;\n}\n\n.drop-down__select-box--disabled {\n  border: 1px solid rgba(204, 204, 204, .3);\n}\n\n.drop-down__place-holder {\n  display: none;\n  color: #ccc;\n}\n\n.drop-down__place-holder:hover {\n  color: #ccc;\n}\n\n.drop-down__item {\n  display: block;\n  cursor: pointer;\n  padding: 6px 0 6px 20px;\n  font-family: "Open Sans", sans-serif;\n  font-size: 11px;\n  /* Current element being show in the dropdown */\n}\n\n.drop-down__item:hover {\n  background-color: #52a6fa;\n  color: #fff;\n}\n\n.drop-down__item--active {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n  display: inline-block;\n  padding: 6px 5px 6px 13px;\n          user-select: none;\n}\n\n.drop-down__item--active:hover {\n  background-color: #fff;\n  color: #000;\n}\n\n.drop-down__selected-item {\n  padding: 0;\n}\n\n.drop-down__inline-element {\n  display: inline-block;\n  padding: 0 0 0 4px;\n}\n\n@media screen and (max-width: 960px) {\n  .home header {\n    padding: 24px;\n    text-align: center;\n  }\n\n  .home header h1 {\n    font-size: 6vmax;\n  }\n  .home main .section-header.extras ul {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n  }\n\n  .home main .section-header.extras ul li {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    margin-bottom: 18px;\n    width: 100%;\n  }\n  .home main {\n    padding: 48px 24px;\n    min-width: 100%;\n    max-width: 100%;\n  }\n\n  .home main .section-item {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    margin-right: 0;\n    width: 100%;\n  }\n  .posts {\n    padding: 48px 24px;\n    min-width: 100%;\n    max-width: 100%;\n    /*    \tul li {\n    \t\tflex: 0 1 auto;\n    \t\twidth: 100%;\n            margin-right: 0;\n    \t}*/\n  }\n  .post {\n    padding: 48px 24px;\n    min-width: 100%;\n    max-width: 100%;\n  }\n}\n\n',""])},"./node_modules/css-loader/lib/css-base.js":function(n,e){function o(n,e){var o=n[1]||"",i=n[3];if(!i)return o;if(e&&"function"==typeof btoa){var r=t(i);return[o].concat(i.sources.map(function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"})).concat([r]).join("\n")}return[o].join("\n")}function t(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=o(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,o){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(t[r]=!0)}for(i=0;i<n.length;i++){var a=n[i];"number"==typeof a[0]&&t[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),e.push(a))}},e}},"./node_modules/style-loader/lib/addStyles.js":function(n,e,o){function t(n,e){for(var o=0;o<n.length;o++){var t=n[o],i=f[t.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](t.parts[r]);for(;r<t.parts.length;r++)i.parts.push(p(t.parts[r],e))}else{for(var a=[],r=0;r<t.parts.length;r++)a.push(p(t.parts[r],e));f[t.id]={id:t.id,refs:1,parts:a}}}}function i(n,e){for(var o=[],t={},i=0;i<n.length;i++){var r=n[i],a=e.base?r[0]+e.base:r[0],l=r[1],s=r[2],d=r[3],p={css:l,media:s,sourceMap:d};t[a]?t[a].parts.push(p):o.push(t[a]={id:a,parts:[p]})}return o}function r(n,e){var o=u(n.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=w[w.length-1];if("top"===n.insertAt)t?t.nextSibling?o.insertBefore(e,t.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),w.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(e)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=w.indexOf(n);e>=0&&w.splice(e,1)}function l(n){var e=document.createElement("style");return n.attrs.type="text/css",d(e,n.attrs),r(n,e),e}function s(n){var e=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",d(e,n.attrs),r(n,e),e}function d(n,e){Object.keys(e).forEach(function(o){n.setAttribute(o,e[o])})}function p(n,e){var o,t,i,r;if(e.transform&&n.css){if(!(r=e.transform(n.css)))return function(){};n.css=r}if(e.singleton){var d=h++;o=g||(g=l(e)),t=c.bind(null,o,d,!1),i=c.bind(null,o,d,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=s(e),t=b.bind(null,o,e),i=function(){a(o),o.href&&URL.revokeObjectURL(o.href)}):(o=l(e),t=x.bind(null,o),i=function(){a(o)});return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else i()}}function c(n,e,o,t){var i=o?"":t.css;if(n.styleSheet)n.styleSheet.cssText=y(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function x(n,e){var o=e.css,t=e.media;if(t&&n.setAttribute("media",t),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}function b(n,e,o){var t=o.css,i=o.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(t=k(t)),i&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([t],{type:"text/css"}),l=n.href;n.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}var f={},m=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),u=function(n){var e={};return function(o){return void 0===e[o]&&(e[o]=n.call(this,o)),e[o]}}(function(n){return document.querySelector(n)}),g=null,h=0,w=[],k=o("./node_modules/style-loader/lib/urls.js");n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=m()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=i(n,e);return t(o,e),function(n){for(var r=[],a=0;a<o.length;a++){var l=o[a],s=f[l.id];s.refs--,r.push(s)}if(n){t(i(n,e),e)}for(var a=0;a<r.length;a++){var s=r[a];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete f[s.id]}}}};var y=function(){var n=[];return function(e,o){return n[e]=o,n.filter(Boolean).join("\n")}}()},"./node_modules/style-loader/lib/urls.js":function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var o=e.protocol+"//"+e.host,t=o+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return n;var r;return r=0===i.indexOf("//")?i:0===i.indexOf("/")?o+i:t+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}},"./src/images/GitHub-Mark-32px.png":function(n,e,o){n.exports=o.p+"b43e6d142955649010c5120a58ba549f.png"},"./src/images/GitHub-Mark-Light-32px.png":function(n,e,o){n.exports=o.p+"3450d4d8256afcddf3262210e286e03e.png"},"./src/images/django.png":function(n,e,o){n.exports=o.p+"b7c7fcb424dec51b522890d6a5e96e49.png"},"./src/images/mobx.png":function(n,e,o){n.exports=o.p+"76071b683a2da3207618392068cc57de.png"},"./src/images/react.png":function(n,e,o){n.exports=o.p+"b29617a8a053686273d56e6c8193ba0b.png"},"./src/images/rethinker.png":function(n,e,o){n.exports=o.p+"6efbefdd7c780b250915e10b4891389d.png"},"./src/images/x-close.png":function(n,e,o){n.exports=o.p+"ddefec9d9c77938abba7ff61c5ce6c40.png"},"./src/styles/main.scss":function(n,e,o){var t=o("./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/styles/main.scss");"string"==typeof t&&(t=[[n.i,t,""]]);var i={};i.transform=void 0;o("./node_modules/style-loader/lib/addStyles.js")(t,i);t.locals&&(n.exports=t.locals)}});