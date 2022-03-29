var D=Object.defineProperty;var G=(a,e,t)=>e in a?D(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var o=(a,e,t)=>(G(a,typeof e!="symbol"?e+"":e,t),t);import"./vendor.d4751c75.js";const P=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}};P();var C="./assets/particle.302dcde6.png",w="./assets/gasp.a7266c19.mp3",O="./assets/space-debris.5bf46d2a.png";const l=1080,r=1920,x={sheet:"space-debris-sheet"},R=20;class v{constructor(){o(this,"sprites")}preload(e){e.load.spritesheet(x.sheet,O,{frameWidth:54,frameHeight:54,margin:0,spacing:0})}create(e){this.sprites=[];for(let t=0;t<R;t++){const n=Phaser.Math.Between(-64,e.game.scale.width),s=Phaser.Math.Between(-64,e.game.scale.height),i=e.add.image(n,s,x.sheet,Math.floor(Math.random()*4));i.setTint(6710886),i.scale=(.2+2*Math.random())*r/1e3,this.sprites.push({s:i,velocity:(.1+Math.random()*.5)*r/1e3,angularV:(.5-Math.random())*.3})}}update(e){const t=e.game.scale.height+100,n=-100;for(let s=0;s<this.sprites.length;s++){const i=this.sprites[s].s;i.y+=this.sprites[s].velocity,i.angle+=this.sprites[s].angularV,i.y>t&&(i.y=n)}}}const M=3,F=4212632,H=1,q=.8,K=9449520,N=6303792,m=r/60;class f{constructor(e){o(this,"scene");o(this,"sceneText");o(this,"graphics");o(this,"rect");o(this,"width",0);o(this,"boxRestColor",3618615);o(this,"boxColor",this.boxRestColor);o(this,"onPress",()=>{});this.scene=e,this.sceneText=e.add.text(50,50,"will-be-replaced-text"),this.sceneText.setFontSize(r/30),this.sceneText.setAlign("center"),this.sceneText.setOrigin(.5),this.sceneText.setInteractive(),this.sceneText.style.setTestString("\u4C9C\u7B11\u3046\u72ED\u3044\u53CB\u9054|\u9031\u6F22\u5B57"),this.sceneText.setWordWrapWidth(80*l/100,!0),this.graphics=this.scene.add.graphics(),this.graphics.setScrollFactor(0),this.rect=e.add.rectangle(),this.rect.setOrigin(0,0),this.rect.setScrollFactor(0),this.rect.setInteractive(),this.rect.on("pointerover",()=>this.enterButtonHoverState()).on("pointerout",()=>this.enterButtonRestState()).on("pointerdown",()=>this.enterButtonActiveState()).on("pointerup",()=>{this.enterButtonHoverState(),this.onPress()}),this.setXY(0,0),this.rect.depth=11,this.sceneText.depth=10,this.graphics.depth=9}enterButtonHoverState(){this.boxColor=N,this.fixGraphics()}enterButtonRestState(){this.boxColor=this.boxRestColor,this.fixGraphics()}enterButtonActiveState(){this.boxColor=K,this.fixGraphics()}fixGraphics(){this.graphics.clear();let e=this.sceneText.width+m*2;const t=this.sceneText.height+m*2,n=this.sceneText.getBounds();let s=n.x-m;const i=n.y-m;this.width&&(e=this.width,s=this.sceneText.x-this.width/2),this.rect.x=s,this.rect.y=i,this.rect.displayWidth=e,this.rect.displayHeight=t,this.graphics.fillStyle(this.boxColor,q),this.graphics.fillRect(s,i,e-1,t-1),this.graphics.lineStyle(M,F,H),this.graphics.strokeRect(s,i,e,t)}setText(e){this.sceneText.setText(e),this.fixGraphics()}setXY(e,t){this.sceneText.x=e,this.sceneText.y=t,this.fixGraphics()}setRestColor(e){this.boxRestColor=e,this.enterButtonRestState()}}var A=`\u3044\u308B:\u3044\u308B:to exist (living things)
\u3059\u308B:\u3059\u308B:to do
\u4F55:\u4F55[\u306A\u306B]:what
\u3053\u308C:\u3053\u308C:this
\u5B66\u6821:\u5B66\u6821[\u304C\u3063\u3053\u3046]:school
\u884C\u304F:\u884C[\u3044]\u304F:to go
\u305F\u304F\u3055\u3093:\u305F\u304F\u3055\u3093:a lot
\u5B50\u4F9B:\u5B50\u4F9B[\u3053\u3069\u3082]:"child, children"
\u9023\u308C\u308B:\u9023[\u3064]\u308C\u308B:to take (a person along)
\u72AC:\u72AC[\u3044\u306C]:dog
\u5BBF\u984C:\u5BBF\u984C[\u3057\u3085\u304F\u3060\u3044]:homework
\u79C1:\u79C1[\u308F\u305F\u3057]:I
\u5C4B:\u5C4B[\u3084]:(something) shop
\u3042\u308B:\u3042\u308B:to exist (inanimate objects)
\u3042\u305D\u3053:\u3042\u305D\u3053:over there
\u4EBA:\u4EBA[\u3072\u3068]:person
\u6559\u5BA4:\u6559\u5BA4[\u304D\u3087\u3046\u3057\u3064]:classroom
\u305D\u3093\u306A:\u305D\u3093\u306A:"such (actions, ideas), like that, that sort of"
\u9CF4\u308B:\u9CF4[\u306A]\u308B:"to sound, to ring"
\u8CB7\u3046:\u8CB7[\u304B]\u3046:to buy
\u672C:\u672C[\u307B\u3093]:book
\u6709\u540D:\u6709\u540D[\u3086\u3046\u3081\u3044]:famous
\u8AAD\u3080:\u8AAD[\u3088]\u3080:to read
\u4E0A\u304C\u308B:\u4E0A[\u3042]\u304C\u308B:"to ascend, to go up, to be raised, to lift"
\u6210\u7E3E:\u6210\u7E3E[\u305B\u3044\u305B\u304D]:grades (school)
\u3053\u3053:\u3053\u3053:here
\u8A00\u3046:\u8A00[\u3044]\u3046:"to say, speak"
\u3053\u306E:\u3053\u306E:this (thing)
\u554F\u984C:\u554F\u984C[\u3082\u3093\u3060\u3044]:"problem, question"
\u8003\u3048\u308B:\u8003[\u304B\u3093\u304C]\u3048\u308B:to think (about something)
\u5F8C:\u5F8C[\u3042\u3068]:"later, after"
\u6BCE\u65E5:\u6BCE\u65E5[\u307E\u3044\u306B\u3061]:every day
\u5F7C:\u5F7C[\u304B\u308C]:"he, him"
\u6765\u308B:\u6765[\u304F]\u308B:to come
\u5F7C\u6C0F:\u5F7C\u6C0F[\u304B\u308C\u3057]:boyfriend
\u96FB\u8A71:\u96FB\u8A71[\u3067\u3093\u308F]:phone
\u96C6\u307E\u308B:\u96C6[\u3042\u3064]\u307E\u308B:"to gather, to collect, to assemble"
\u4E8B:\u4E8B[\u3053\u3068]:"thing, matter"
\u597D\u304D:\u597D[\u3059]\u304D:"liking, fondness, love, being attractive (to)"
\u50D5:\u50D5[\u307C\u304F]:"I, me (male)"
\u52C9\u5F37:\u52C9\u5F37[\u3079\u3093\u304D\u3087\u3046]:study
\u82F1\u8A9E:\u82F1\u8A9E[\u3048\u3044\u3054]:english
\u6559\u3048\u308B:\u6559[\u304A\u3057]\u3048\u308B:"to teach, to tell"
\u5206\u304B\u308B:\u5206[\u308F]\u304B\u308B:"to understand, to comprehend"
\u624B:\u624B[\u3066]:hand
\u4E0A\u3052\u308B:\u4E0A[\u3042]\u3052\u308B:to raise
\u541B:\u541B[\u304D\u307F]:you
\u5168\u7136:\u5168\u7136[\u305C\u3093\u305C\u3093]:not at all (with neg. verb)
\u53CB\u9054:\u53CB\u9054[\u3068\u3082\u3060\u3061]:"friend, companion"
\u4F1A\u3046:\u4F1A[\u3042]\u3046:to meet
\u751F\u5F92:\u751F\u5F92[\u305B\u3044\u3068]:"pupil, student"
\u5144:\u5144[\u3042\u306B]:older brother
\u5927\u5B66:\u5927\u5B66[\u3060\u3044\u304C\u304F]:"university, college"
\u90E8:\u90E8[\u3076]:"department, club"
\u65B9:\u65B9[\u307B\u3046]:"side (of an argument, etc.)"
\u3088\u308A:\u3088\u308A:than
\u529B:\u529B[\u3061\u304B\u3089]:"strength, power"
\u732B:\u732B[\u306D\u3053]:cat
\u4E0A:\u4E0A[\u3046\u3048]:above
\u7F6E\u304F:\u7F6E[\u304A]\u304F:"to put, to place"
\u8272\u3005:\u8272\u3005[\u3044\u308D\u3044\u308D]:"various, all sorts of"
\u304B\u3070\u3093:\u304B\u3070\u3093:bag
\u5BB6:\u5BB6[\u3044\u3048]:house
\u7F8E\u5473\u3057\u3044:\u7F8E\u5473[\u304A\u3044]\u3057\u3044:delicious
\u904A\u3076:\u904A[\u3042\u305D]\u3076:"to play, to hang out"
\u660E\u65E5:\u660E\u65E5[\u3042\u3057\u305F]:tomorrow
\u6599\u7406:\u6599\u7406[\u308A\u3087\u3046\u308A]:"cooking, cuisine"
\u305D\u3046:\u305D\u3046:"appearing that, seeming that"
\u7ACB\u3064:\u7ACB[\u305F]\u3064:to stand
\u304F\u3060\u3055\u3044:\u304F\u3060\u3055\u3044:please (give/do for me)
\u3086\u3063\u304F\u308A:\u3086\u3063\u304F\u308A:"slowly, at ease"
\u4F5C\u308B:\u4F5C[\u3064\u304F]\u308B:"to create, to make"
\u305D\u306E:\u305D\u306E:that (thing)
\u901A\u308B:\u901A[\u3068\u304A]\u308B:to pass
\u9AD8\u6821:\u9AD8\u6821[\u3053\u3046\u3053\u3046]:high school
\u5F7C\u5973:\u5F7C\u5973[\u304B\u306E\u3058\u3087]:"she, her; girlfriend"
\u624B\u4F1D\u3046:\u624B\u4F1D[\u3066\u3064\u3060]\u3046:"to help, to assist"
\u4E21\u89AA:\u4E21\u89AA[\u308A\u3087\u3046\u3057\u3093]:parents
\u3082\u3089\u3046:\u3082\u3089\u3046:to recieve
\u624B\u7D19:\u624B\u7D19[\u3066\u304C\u307F]:letter
\u304F\u308C\u308B:\u304F\u308C\u308B:to give
\u305D\u3053:\u305D\u3053:that (a little distant)
\u5834\u6240:\u5834\u6240[\u3070\u3057\u3087]:"place, location"
\u3042\u308A\u304C\u3068\u3046:\u3042\u308A\u304C\u3068\u3046:thank you (informal)
\u69D8:\u69D8[\u3055\u307E]:"Mr., Mrs., Ms. (very formal)"
\u3044\u3089\u3063\u3057\u3083\u308B:\u3044\u3089\u3063\u3057\u3083\u308B:to be (honorific version of \u3044\u308B)
\u6570\u5B66:\u6570\u5B66[\u3059\u3046\u304C\u304F]:mathematics
\u89E3\u304F:\u89E3[\u3068]\u304F:"to untie, to unfasten, to solve"
\u96E3\u3057\u3044:\u96E3[\u3080\u305A\u304B]\u3057\u3044:"difficult, hard"
\u3068\u3066\u3082:\u3068\u3066\u3082:very
\u4E2D:\u4E2D[\u306A\u304B]:"middle, within"
\u5FD9\u3057\u3044:\u5FD9[\u3044\u305D\u304C]\u3057\u3044:busy
\u4ED5\u4E8B:\u4ED5\u4E8B[\u3057\u3054\u3068]:"work, job"
\u75B2\u308C\u308B:\u75B2[\u3064\u304B]\u308C\u308B:"to get tired, to be worn out"
\u4F11\u61A9:\u4F11\u61A9[\u304D\u3085\u3046\u3051\u3044]:break (from doing something)
\u53D6\u308B:\u53D6[\u3068]\u308B:to take
\u4EFB\u305B\u308B:\u4EFB[\u307E\u304B]\u305B\u308B:to entrust (a task) to another
\u65B0\u3057\u3044:\u65B0[\u3042\u305F\u3089]\u3057\u3044:new
\u524D:\u524D[\u307E\u3048]:"in front (of), before"
\u671D:\u671D[\u3042\u3055]:morning
\u964D\u308B:\u964D[\u3075]\u308B:"to fall (rain, snow, etc)"
\u65E5:\u65E5[\u3072]:day
\u306A\u308B:\u306A\u308B:to become
\u805E\u304F:\u805E[\u304D]\u304F:to listen
\u5148\u751F:\u5148\u751F[\u305B\u3093\u305B\u3044]:teacher
\u4ECA\u5E74:\u4ECA\u5E74[\u3053\u3068\u3057]:this year
\u51AC:\u51AC[\u3075\u3086]:winter (season)
\u5BD2\u3044:\u5BD2[\u3055\u3080]\u3044:cold (weather)
\u8AB0:\u8AB0[\u3060\u308C]:who
\u5E97:\u5E97[\u307F\u305B]:"store, shop"
\u5165\u308B:\u5165[\u306F\u3044]\u308B:to enter
\u672C\u5F53:\u672C\u5F53[\u307B\u3093\u3068\u3046]:"really, truth"
\u59B9:\u59B9[\u3044\u3082\u3046\u3068]:younger sister
\u8CB7\u3044\u7269:\u8CB7[\u304B]\u3044 \u7269[\u3082\u306E]:shopping
\u643A\u5E2F:\u643A\u5E2F[\u3051\u3044\u305F\u3044]:cell phone
\u4ECA\u65E5:\u4ECA\u65E5[\u304D\u3087\u3046]:today
\u6691\u3044:\u6691[\u3042\u3064]\u3044:hot (weather)
\u3061\u3087\u3063\u3068:\u3061\u3087\u3063\u3068:a little bit
\u898B\u308B:\u898B[\u307F]\u308B:"to see, to look, to watch"
\u4E00\u7DD2:\u4E00\u7DD2[\u3044\u3063\u3057\u3087]:"together, at the same time"
\u6620\u753B:\u6620\u753B[\u3048\u3044\u304C]:movie
\u9762\u767D\u3044:\u9762\u767D[\u304A\u3082\u3057\u308D]\u3044:"interesting, amusing"
\u5468\u308A:\u5468[\u307E\u308F]\u308A:surroundings
\u3082\u3061\u308D\u3093:\u3082\u3061\u308D\u3093:of course
\u77E5\u308B:\u77E5[\u3057]\u308B:"to know, to be aware of"
\u3059\u3054\u3044:\u3059\u3054\u3044:"amazing, terrific"
\u307F\u3093\u306A:\u307F\u3093\u306A:"everyone, everybody, all"
\u540D\u524D:\u540D\u524D[\u306A\u307E\u3048]:"name, first name"
\u601D\u3044:\u601D[\u304A\u3082]\u3044:"thought, feeling"
\u51FA\u3059:\u51FA[\u3060]\u3059:to take out
\u5FD8\u308C\u308B:\u5FD8[\u308F\u3059]\u308C\u308B:to forget
\u6065\u305A\u304B\u3057\u3044:\u6065[\u306F]\u305A\u304B\u3057\u3044:"shameful, embarrassing"
\u4E7E\u304B\u3059:\u4E7E[\u304B\u308F]\u304B\u3059:to dry
\u9AEA:\u9AEA[\u304B\u307F]:hair (on the head)
\u5909\u308F\u308B:\u5909[\u304B]\u308F\u308B:"to change, to be transformed, to be altered"
\u9577\u3044:\u9577[\u306A\u304C]\u3044:"long (length, time)"
\u8DB3:\u8DB3[\u3042\u3057]:"leg, foot"
\u5F37\u3044:\u5F37[\u3064\u3088]\u3044:"strong, tough"
\u5225:\u5225[\u3079\u3064]:"separate, different"
\u8272:\u8272[\u3044\u308D]:color
\u307E\u3060:\u307E\u3060:not yet
\u6B73:\u6B73[\u3055\u3044]:age counter
\u751F\u304D\u308B:\u751F[\u3044]\u304D\u308B:to live
\u4E8C\u4EBA:\u4E8C\u4EBA[\u3075\u305F\u308A]:two people
\u74B0\u5883:\u74B0\u5883[\u304B\u3093\u304D\u3087\u3046]:environment
\u606F\u5B50:\u606F\u5B50[\u3080\u3059\u3053]:son
\u53D7\u3051\u308B:\u53D7[\u3046]\u3051\u308B:"to take (a test), to accept (a challenge), to receive"
\u6388\u696D:\u6388\u696D[\u3058\u3085\u304E\u3087\u3046]:"lesson, class (school)"
\u7D42\u308F\u308B:\u7D42[\u304A]\u308F\u308B:"to finish, to end"
\u4FFA:\u4FFA[\u304A\u308C]:"I, me (male)"
\u3082\u3046:\u3082\u3046:"now, soon, already, yet"
\u5F85\u3064:\u5F85[\u307E]\u3064:to wait
\u6905\u5B50:\u6905\u5B50[\u3044\u3059]:chair
\u3059\u3050:\u3059\u3050:"immediately, right away"
\u8A66\u5408:\u8A66\u5408[\u3057\u3042\u3044]:"match, game"
\u59CB\u307E\u308B:\u59CB[\u306F\u3058]\u307E\u308B:"to begin, to start"
\u5E74:\u5E74[\u3068\u3057]:year
\u6642:\u6642[\u3068\u304D]:when
\u7D4C\u3064:\u7D4C[\u305F]\u3064:to elapse (time)
\u6700\u8FD1:\u6700\u8FD1[\u3055\u3044\u304D\u3093]:"nowadays, recently"
\u5EA7\u308B:\u5EA7[\u3059\u308F]\u308B:to sit
\u8D70\u308B:\u8D70[\u306F\u3057]\u308B:to run
\u5FC5\u6B7B:\u5FC5\u6B7B[\u3072\u3063\u3057]:"frantic, desperate"
\u673A:\u673A[\u3064\u304F\u3048]:desk
\u925B\u7B46:\u925B\u7B46[\u3048\u3093\u3074\u3064]:pencil
\u5B50:\u5B50[\u3053]:child
\u904B\u52D5:\u904B\u52D5[\u3046\u3093\u3069\u3046]:exercise (physical)
\u3082\u3063\u3068:\u3082\u3063\u3068:(some) more
\u5922:\u5922[\u3086\u3081]:dream
\u4E0D\u601D\u8B70:\u4E0D\u601D\u8B70[\u3075\u3057\u304E]:"wonder, mystery"
\u6B4C:\u6B4C[\u3046\u305F]:song
\u4E0A\u624B:\u4E0A\u624B[\u3058\u3087\u3046\u305A]:"good (at), skilled"
\u7D75:\u7D75[\u3048]:"drawing, painting, sketch"
\u4E0A\u624B\u3044:\u4E0A\u624B[\u3046\u307E]\u3044:"good, skilled"
\u3069\u308C:\u3069\u308C:which
\u304F\u3089\u3044:\u304F\u3089\u3044:approximately
\u8912\u3081\u308B:\u8912[\u307B]\u3081\u308B:to praise
\u306A\u304B\u306A\u304B:\u306A\u304B\u306A\u304B:quite
\u7720\u308B:\u7720[\u306D\u3080]\u308B:to sleep
\u601D\u3046:\u601D[\u304A\u3082]\u3046:to think
\u7DBA\u9E97:\u7DBA\u9E97[\u304D\u308C\u3044]:"clean, beautiful"
\u82B1:\u82B1[\u306F\u306A]:flower
\u54B2\u304F:\u54B2[\u3055]\u304F:to bloom
\u685C:\u685C[\u3055\u304F\u3089]:cherry blossom
\u6625:\u6625[\u306F\u308B]:spring (season)
\u516C\u5712:\u516C\u5712[\u3053\u3046\u3048\u3093]:park
\u591C:\u591C[\u3088\u308B]:night
\u98A8\u5442:\u98A8\u5442[\u3075\u308D]:bath
\u8131\u3050:\u8131[\u306C]\u3050:to take off (clothes)
\u90E8\u5C4B:\u90E8\u5C4B[\u3078\u3084]:room
\u7247\u4ED8\u3051\u308B:\u7247\u4ED8[\u304B\u305F\u3065]\u3051\u308B:to organize
\u4E00\u4EBA:\u4E00\u4EBA[\u3072\u3068\u308A]:one person
\u98DF\u3079\u308B:\u98DF[\u305F]\u3079\u308B:to eat
\u5168\u90E8:\u5168\u90E8[\u305C\u3093\u3076]:"all, entire, whole, altogether"
\u6708:\u6708[\u3064\u304D]:moon
\u670D:\u670D[\u3075\u304F]:clothes
\u5C71:\u5C71[\u3084\u307E]:mountain
\u898B\u3048\u308B:\u898B[\u307F]\u3048\u308B:"be able to see, to be in sight"
\u4ECA\u591C:\u4ECA\u591C[\u3053\u3093\u3084]:"this evening, tonight"
\u512A\u3057\u3044:\u512A[\u3084\u3055]\u3057\u3044:"kind, nice"
\u5BFE\u3059\u308B:\u5BFE[\u305F\u3044]\u3059\u308B:relating to something
\u53B3\u3057\u3044:\u53B3[\u304D\u3073]\u3057\u3044:strict
\u3069\u3046:\u3069\u3046:how
\u3042\u306A\u305F:\u3042\u306A\u305F:you
\u9803:\u9803[\u3053\u308D]:(approximate) time
\u5C0F\u5B66\u751F:\u5C0F\u5B66\u751F[\u3057\u3087\u3046\u304C\u304F\u305B\u3044]:elementary school student
\u3069\u3093\u3069\u3093:\u3069\u3093\u3069\u3093:more and more
\u97F3:\u97F3[\u304A\u3068]:"sound, noise"
\u96E8:\u96E8[\u3042\u3081]:rain
\u805E\u3053\u3048\u308B:\u805E[\u304D]\u3053\u3048\u308B:"to be audible, can hear"
\u6D77:\u6D77[\u3046\u307F]:"sea, ocean"
\u6CE2:\u6CE2[\u306A\u307F]:wave (ocean)
\u306F\u3063\u304D\u308A:\u306F\u3063\u304D\u308A:"clearly, plainly, distinctly"
\u5FDC\u63F4:\u5FDC\u63F4[\u304A\u3046\u3048\u3093]:"to cheer for, to support"
\u9078\u624B:\u9078\u624B[\u305B\u3093\u3057\u3085]:"player (sports), athlete"
\u76EE\u6307\u3059:\u76EE\u6307[\u3081\u3056]\u3059:"to aim at (for, to do, to become)"
\u5C06\u6765:\u5C06\u6765[\u3057\u3087\u3046\u3089\u3044]:future (near term)
\u91CE\u7403:\u91CE\u7403[\u3084\u304D\u3085\u3046]:baseball
\u7269:\u7269[\u3082\u306E]:"item, thing"
\u59C9:\u59C9[\u3042\u306D]:older sister
\u3084\u308B:\u3084\u308B:to do
\u81EA\u5206:\u81EA\u5206[\u3058\u3076\u3093]:oneself
\u9AD8\u3044:\u9AD8[\u305F\u304B]\u3044:"high, tall; expensive"
\u9078\u3076:\u9078[\u3048\u3089]\u3076:"to choose, to select"
\u9593\u9055\u3046:\u9593\u9055[\u307E\u3061\u304C]\u3046:"to be incorrect, to be mistaken"
\u7B54\u3048:\u7B54[\u3053\u305F]\u3048:"answer, reply, response"
\u3057\u307E\u3046:\u3057\u307E\u3046:"to complete, to finish"
\u6FE1\u308C\u308B:\u6FE1[\u306C]\u308C\u308B:to get wet
\u6B62\u307E\u308B:\u6B62[\u3068]\u307E\u308B:to come to a stop
\u96EA:\u96EA[\u3086\u304D]:snow
\u6226\u4E89:\u6226\u4E89[\u305B\u3093\u305D\u3046]:war
\u4E16\u754C:\u4E16\u754C[\u305B\u304B\u3044]:"the world, society"
\u5E73\u548C:\u5E73\u548C[\u3078\u3044\u308F]:peace
\u5F1F:\u5F1F[\u304A\u3068\u3046\u3068]:"younger brother, little brother"
\u8ECA:\u8ECA[\u304F\u308B\u307E]:car
\u591A\u3044:\u591A[\u304A\u304A]\u3044:"frequent, many"
\u5371\u306A\u3044:\u5371[\u3042\u3076]\u306A\u3044:"dangerous, risky, hazardous"
\u9053:\u9053[\u307F\u3061]:road
\u7236\u89AA:\u7236\u89AA[\u3061\u3061\u304A\u3084]:father
\u75C5\u9662:\u75C5\u9662[\u3073\u3087\u3046\u3044\u3093]:hospital
\u6C17\u6301\u3061:\u6C17\u6301[\u304D\u3082]\u3061:"feeling, emotion, mood"
\u4F1D\u3048\u308B:\u4F1D[\u3064\u305F]\u3048\u308B:"to convey, to communicate"
\u98F2\u3080:\u98F2[\u306E]\u3080:to drink
\u9152:\u9152[\u3055\u3051]:alcohol
\u98A8:\u98A8[\u304B\u305C]:wind
\u51B7\u305F\u3044:\u51B7[\u3064\u3081]\u305F\u3044:cold (to touch)
\u5439\u304F:\u5439[\u3075]\u304F:to blow
\u3069\u3093\u306A:\u3069\u3093\u306A:what kind of
\u5371\u967A:\u5371\u967A[\u304D\u3051\u3093]:danger
\u3053\u3093\u306A:\u3053\u3093\u306A:this kind of
\u521D\u3081\u3066:\u521D[\u306F\u3058]\u3081\u3066:for the first time
\u8089:\u8089[\u306B\u304F]:meat
\u6628\u65E5:\u6628\u65E5[\u304D\u306E\u3046]:yesterday
\u899A\u3048\u308B:\u899A[\u304A\u307C]\u3048\u308B:"to memorize, to remember"
\u4ECA:\u4ECA[\u3044\u307E]:now
\u8A71\u3059:\u8A71[\u306F\u306A]\u3059:"to talk, to converse, to speak"
\u4E00\u756A:\u4E00\u756A[\u3044\u3061\u3070\u3093]:"number one, first"
\u5916:\u5916[\u305D\u3068]:outside
\u96FB\u6C17:\u96FB\u6C17[\u3067\u3093\u304D]:electricity
\u6697\u3044:\u6697[\u304F\u3089]\u3044:dark
\u6C17\u3092\u3064\u3051\u308B:\u6C17[\u304D]\u3092\u3064\u3051\u308B:to be careful
\u8FCE\u3048\u308B:\u8FCE[\u3080\u304B]\u3048\u308B:"to receive, to welcome, to greet"
\u8CEA\u554F:\u8CEA\u554F[\u3057\u3064\u3082\u3093]:question
\u7B54\u3048\u308B:\u7B54[\u3053\u305F]\u3048\u308B:to answer
\u51FA\u6765\u308B:\u51FA\u6765[\u3067\u304D]\u308B:"can, to be able to do"
\u7948\u308B:\u7948[\u3044\u306E]\u308B:to pray
\u53D7\u9A13:\u53D7\u9A13[\u3058\u3085\u3051\u3093]:taking an examination (school and university entrance)
\u5408\u683C:\u5408\u683C[\u3054\u3046\u304B\u304F]:passing (exam)
\u4F11\u3080:\u4F11[\u3084\u3059]\u3080:"to rest, to take a day off"
\u3057\u3070\u3089\u304F:\u3057\u3070\u3089\u304F:for the time being
\u5199\u771F:\u5199\u771F[\u3057\u3083\u3057\u3093]:"photo, picture"
\u5BB6\u65CF:\u5BB6\u65CF[\u304B\u305E\u304F]:family
\u98FE\u308B:\u98FE[\u304B\u3056]\u308B:to decorate
\u58C1:\u58C1[\u304B\u3079]:wall
\u5857\u308B:\u5857[\u306C]\u308B:"to paint, to spread"
\u65C5\u884C:\u65C5\u884C[\u308A\u3087\u3053\u3046]:"travel, trip"
\u5E30\u308B:\u5E30[\u304B\u3048]\u308B:to return home
\u9045\u308C\u308B:\u9045[\u304A\u304F]\u308C\u308B:to be late
\u4ECA\u671D:\u4ECA\u671D[\u3051\u3055]:this morning
\u3054\u3081\u3093:\u3054\u3081\u3093:sorry
\u6642\u9593:\u6642\u9593[\u3058\u304B\u3093]:time hours (period of)
\u5927\u304D\u3044:\u5927[\u304A\u304A]\u304D\u3044:"big, large"
\u5352\u696D:\u5352\u696D[\u305D\u3064\u304E\u3087\u3046]:graduation
\u4F1A\u793E:\u4F1A\u793E[\u304B\u3044\u3057\u3083]:"company, corporation"
\u50CD\u304F:\u50CD[\u306F\u305F\u3089]\u304F:to work
\u639B\u3051\u308B:\u639B[\u304B]\u3051\u308B:to hang
\u8D77\u304D\u308B:\u8D77[\u304A]\u304D\u308B:"to wake up, to be awake"
\u65E9\u3044:\u65E9[\u306F\u3084]\u3044:early
\u51FA\u308B:\u51FA[\u3067]\u308B:"to leave, to come out"
\u60AA\u3044:\u60AA[\u308F\u308B]\u3044:bad
\u697D\u3057\u3044:\u697D[\u305F\u306E]\u3057\u3044:"enjoyable, fun"
\u6C17:\u6C17[\u304D]:"mood, spirit, mind"
\u610F\u5473:\u610F\u5473[\u3044\u307F]:meaning
\u5F97\u610F:\u5F97\u610F[\u3068\u304F\u3044]:one's strong point
\u6BCD\u89AA:\u6BCD\u89AA[\u306F\u306F\u304A\u3084]:mother
\u6B32\u3057\u3044:\u6B32[\u307B]\u3057\u3044:"want, wanted, desired"
\u3060\u3051:\u3060\u3051:"only, just"
\u9811\u5F35\u308B:\u9811\u5F35[\u304C\u3093\u3070]\u308B:"good luck, do your best"
\u6301\u3064:\u6301[\u3082]\u3064:"to possess, to have, to carry, to hold"
\u75DB\u3044:\u75DB[\u3044\u305F]\u3044:"ouch, painful"
\u982D:\u982D[\u3042\u305F\u307E]:head
\u4EBA\u6C17:\u4EBA\u6C17[\u306B\u3093\u304D]:popular
\u5546\u54C1:\u5546\u54C1[\u3057\u3087\u3046\u3072\u3093]:"product (business), merchandise"
\u6255\u3046:\u6255[\u306F\u3089]\u3046:"to pay (money, bill, etc.)"
\u91D1:\u91D1[\u304B\u306D]:money
\u5C0F\u3055\u3044:\u5C0F[\u3061\u3044]\u3055\u3044:"small, little"
\u5973\u512A:\u5973\u512A[\u3058\u3087\u3086\u3046]:actress
\u52DD\u3064:\u52DD[\u304B]\u3064:"to win, to gain victory"
\u305F\u3081:\u305F\u3081:"sake, purpose"
\u4F53:\u4F53[\u304B\u3089\u3060]:body
\u5F53\u305F\u308A\u524D:\u5F53\u305F\u308A\u524D[\u3042\u305F\u308A\u307E\u3048]:"of course, obvious, commonplace, the norm"
\u904E\u304E\u308B:\u904E[\u3059]\u304E\u308B:"to exceed, to surpass"
\u592A\u308B:\u592A[\u3075\u3068]\u308B:to fatten
\u4E16\u8A71:\u4E16\u8A71[\u305B\u308F]:care (for)
\u9593:\u9593[\u3042\u3044\u3060]:"period of time (during, while), between"
\u98DF\u3046:\u98DF[\u304F]\u3046:to eat (informal)
\u98EF:\u98EF[\u3081\u3057]:meal
\u7740\u304F:\u7740[\u3064]\u304F:to arrive
\u8A71:\u8A71[\u306F\u306A\u3057]:"story, conversation"
\u58F0:\u58F0[\u3053\u3048]:voice
\u7537:\u7537[\u304A\u3068\u3053]:man
\u3044\u3064\u3082:\u3044\u3064\u3082:always
\u5408\u3046:\u5408[\u3042]\u3046:"to fit, to match, to suit"
\u901A\u308A:\u901A[\u3068\u304A]\u308A:"avenue, street, way, road"
\u3044\u3063\u3071\u3044:\u3044\u3063\u3071\u3044:full
\u82E5\u3044:\u82E5[\u308F\u304B]\u3044:young
\u5973:\u5973[\u304A\u3093\u306A]:woman
\u3069\u3053:\u3069\u3053:where
\u5411\u304B\u3046:\u5411[\u3080]\u304B\u3046:"to go towards, to head towards"
\u6B21:\u6B21[\u3064\u304E]:next (in sequence)
\u98DB\u3076:\u98DB[\u3068]\u3076:to fly
\u6253\u3064:\u6253[\u3046]\u3064:"to hit, to strike, to knock, to beat"
\u63A2\u3059:\u63A2[\u3055\u304C]\u3059:"to search (for something desired, needed, lost), to look for"
\u6355\u307E\u308B:\u6355[\u3064\u304B]\u307E\u308B:to be caught
\u4E8B\u4EF6:\u4E8B\u4EF6[\u3058\u3051\u3093]:"incident, affair"
\u9003\u3052\u308B:\u9003[\u306B]\u3052\u308B:"to escape, to run away"
\u72AF\u4EBA:\u72AF\u4EBA[\u306F\u3093\u306B\u3093]:"offender, criminal"
\u73FE\u5B9F:\u73FE\u5B9F[\u3052\u3093\u3058\u3064]:"reality, actuality"
\u63CF\u304F:\u63CF[\u3048\u304C]\u304F:"to draw, to paint, to sketch"
\u3051\u304C:\u3051\u304C:injury
\u305B\u3044:\u305B\u3044:"reason, cause"
\u5909:\u5909[\u3078\u3093]:strange
\u69D8\u5B50:\u69D8\u5B50[\u3088\u3046\u3059]:"appearance, condition"
\u898B\u3064\u3051\u308B:\u898B[\u307F]\u3064\u3051\u308B:"to find, to discover"
\u3084\u3063\u3068:\u3084\u3063\u3068:finally
\u7D20\u6575:\u7D20\u6575[\u3059\u3066\u304D]:"lovely, wonderful"
\u99C5:\u99C5[\u3048\u304D]:train station
\u98DF\u4E8B:\u98DF\u4E8B[\u3057\u3087\u304F\u3058]:meal
\u773C\u93E1:\u773C\u93E1[\u3081\u304C\u306D]:glasses
\u753A:\u753A[\u307E\u3061]:town
\u3042\u308C:\u3042\u308C:that (distant)
\u6D17\u3046:\u6D17[\u3042\u3089]\u3046:to wash
\u9854:\u9854[\u304B\u304A]:face
\u5C11\u3057:\u5C11[\u3059\u3053]\u3057:"small quantity, little, few"
\u4F7F\u3046:\u4F7F[\u3064\u304B]\u3046:"to use (a thing, method, etc.)"
\u983C\u3080:\u983C[\u305F\u306E]\u3080:"to rely on, to entrust to, to request, to order"
\u9055\u3046:\u9055[\u3061\u304C]\u3046:to differ
\u7A7A:\u7A7A[\u305D\u3089]:sky
\u9CE5:\u9CE5[\u3068\u308A]:bird
\u305D\u308D\u305D\u308D:\u305D\u308D\u305D\u308D:"soon, momentarily"
\u59CB\u3081\u308B:\u59CB[\u306F\u3058]\u3081\u308B:"to start, to begin"
\u4E57\u308B:\u4E57[\u306E]\u308B:to ride
\u751F\u6D3B:\u751F\u6D3B[\u305B\u3044\u304B\u3064]:"living, life (one's daily existence)"
\u9031\u9593:\u9031\u9593[\u3057\u3085\u3046\u304B\u3093]:week (period of time)
\u7D9A\u304F:\u7D9A[\u3064\u3065]\u304F:to continue (without a break)
\u8D64\u3044:\u8D64[\u3042\u304B]\u3044:red
\u7740\u308B:\u7740[\u304D]\u308B:to wear clothes (shoulders down)
\u5973\u306E\u5B50:\u5973\u306E\u5B50[\u304A\u3093\u306A\u306E\u3053]:"young woman, girl"
\u6CE3\u304F:\u6CE3[\u306A]\u304F:to cry
\u8A18\u61B6:\u8A18\u61B6[\u304D\u304A\u304F]:memory
\u5931\u3046:\u5931[\u3046\u3057\u306A]\u3046:to lose
\u6614:\u6614[\u3080\u304B\u3057]:a long time ago
\u305D\u308C:\u305D\u308C:that
\u7121\u7406:\u7121\u7406[\u3080\u308A]:"impossible, can't"
\u3054\u98EF:\u3054 \u98EF[\u306F\u3093]:"meal, rice"
\u7D76\u5BFE:\u7D76\u5BFE[\u305C\u3063\u305F\u3044]:"absolutely, certainly"
\u6012\u308B:\u6012[\u304A\u3053]\u308B:"to get angry, to scold"
\u3061\u3083\u3093\u3068:\u3061\u3083\u3093\u3068:"sufficiently, properly"
\u5012\u308C\u308B:\u5012[\u305F\u304A]\u308C\u308B:to collapse
\u5E2D:\u5E2D[\u305B\u304D]:seat
\u8001\u4EBA:\u8001\u4EBA[\u308D\u3046\u3058\u3093]:elderly person
\u52A9\u3051\u308B:\u52A9[\u305F\u3059]\u3051\u308B:"to help, to rescue"
\u6368\u3066\u308B:\u6368[\u3059]\u3066\u308B:"to throw away, to discard"
\u6240:\u6240[\u3068\u3053\u308D]:place
\u9759\u304B:\u9759[\u3057\u305A]\u304B:quiet
\u590F\u4F11\u307F:\u590F\u4F11[\u306A\u3064\u3084\u3059]\u307F:summer vacation
\u6700\u5F8C:\u6700\u5F8C[\u3055\u3044\u3054]:"final, last"
\u6226\u3046:\u6226[\u305F\u305F\u304B]\u3046:"to fight, to struggle (against adversities, etc.)"
\u8ABF\u3079\u308B:\u8ABF[\u3057\u3089]\u3079\u308B:"to look up, to investigate"
\u60C5\u5831:\u60C5\u5831[\u3058\u3087\u3046\u307B\u3046]:"information, data"
\u8FD1\u304F:\u8FD1[\u3061\u304B]\u304F:"near, shortly"
\u4F4F\u3080:\u4F4F[\u3059]\u3080:to live (of humans)
\u56DE\u308B:\u56DE[\u307E\u308F]\u308B:"to turn, to revolve"
\u6C7A\u307E\u308B:\u6C7A[\u304D]\u307E\u308B:to be decided
\u5F53\u305F\u308B:\u5F53[\u3042]\u305F\u308B:"to be hit, to be successful"
\u5197\u8AC7:\u5197\u8AC7[\u3058\u3087\u3046\u3060\u3093]:joke
\u4ED8\u304F:\u4ED8[\u3064]\u304F:"to be attached, to be connected with, to lit (fire, turn on TV)"
\u5931\u6557:\u5931\u6557[\u3057\u3063\u3071\u3044]:"failure, mistake, blunder"
\u4E88\u5B9A:\u4E88\u5B9A[\u3088\u3066\u3044]:"plans, arrangement"
\u6BB4\u308B:\u6BB4[\u306A\u3050]\u308B:to punch
\u8A98\u3046:\u8A98[\u3055\u305D]\u3046:to invite
\u66AE\u3089\u3059:\u66AE[\u304F]\u3089\u3059:"to live, to get along"
\u307E\u305F:\u307E\u305F:again
\u3044\u3064:\u3044\u3064:when
\u3069\u3046\u3044\u3046:\u3069\u3046\u3044\u3046:"what kind of, in what way"
\u95A2\u4FC2:\u95A2\u4FC2[\u304B\u3093\u3051\u3044]:"relationship, connection"
\u6642\u8A08:\u6642\u8A08[\u3068\u3051\u3044]:"clock, watch"
\u5927\u304D\u306A:\u5927[\u304A\u304A]\u304D\u306A:"big, loud"
\u639B\u304B\u308B:\u639B[\u304B]\u304B\u308B:to hang
\u9177\u3044:\u9177[\u3072\u3069]\u3044:"awful, terrible"
\u304A\u304B\u3052:\u304A\u304B\u3052:thanks to ...
\u3051\u3093\u304B:\u3051\u3093\u304B:fight
\u89AA:\u89AA[\u304A\u3084]:parents
\u5B89\u3044:\u5B89\u3044:cheap
\u5927\u597D\u304D:\u5927\u597D[\u3060\u3044\u3059]\u304D:love
\u53EF\u611B\u3044:\u53EF\u611B[\u304B\u308F\u3044]\u3044:cute
\u304B\u306A\u308A:\u304B\u306A\u308A:considerably
\u6570:\u6570[\u304B\u305A]:"number, quantity"
\u6E1B\u308B:\u6E1B[\u3078]\u308B:to decrease
\u96A3:\u96A3[\u3068\u306A\u308A]:next to
\u8CB8\u3059:\u8CB8[\u304B]\u3059:"to lend, to loan"
\u983C\u308B:\u983C[\u305F\u3088]\u308B:to rely on
\u96C6\u4E2D:\u96C6\u4E2D[\u3057\u3085\u3046\u3061\u3085\u3046]:concentration
\u58CA\u308C\u308B:\u58CA[\u3053\u308F]\u308C\u308B:to be broken
\u9B5A:\u9B5A[\u3055\u304B\u306A]:fish
\u97F3\u697D:\u97F3\u697D[\u304A\u3093\u304C\u304F]:music
\u697D\u3057\u3080:\u697D[\u305F\u306E]\u3057\u3080:to enjoy (oneself)
\u81EA\u7136:\u81EA\u7136[\u3057\u305C\u3093]:nature
\u8C4A\u304B:\u8C4A[\u3086\u305F]\u304B:abundant
\u8868\u60C5:\u8868\u60C5[\u3072\u3087\u3046\u3058\u3087\u3046]:facial expression
\u4F53\u529B:\u4F53\u529B[\u305F\u3044\u308A\u3087\u304F]:"endurance, physical strength"
\u5438\u3046:\u5438[\u3059]\u3046:to smoke
\u90E8\u6D3B:\u90E8\u6D3B[\u3076\u304B\u3064]:club activity
\u8CA0\u3051\u308B:\u8CA0[\u307E]\u3051\u308B:to lose
\u8F9E\u3081\u308B:\u8F9E[\u3084]\u3081\u308B:to resign; to quit
\u8FD1\u3065\u304F:\u8FD1[\u3061\u304B]\u3065\u304F:to approach
\u524A\u308B:\u524A[\u3051\u305A]\u308B:to sharpen
\u53E3:\u53E3[\u304F\u3061]:mouth
\u8A00\u8449:\u8A00\u8449[\u3053\u3068\u3070]:word
\u6211\u3005:\u6211\u3005[\u308F\u308C\u308F\u308C]:we (formal)
\u4EBA\u9593:\u4EBA\u9593[\u306B\u3093\u3052\u3093]:human
\u7B11\u3046:\u7B11[\u308F\u3089]\u3046:"to laugh, to smile"
\u6B69\u304F:\u6B69[\u3042\u308B]\u304F:to walk
\u304A\u7236\u3055\u3093:\u304A \u7236[\u3068\u3046]\u3055\u3093:father
\u75C5\u6C17:\u75C5\u6C17[\u3073\u3087\u3046\u304D]:"illness, disease"
\u6B7B\u306C:\u6B7B[\u3057]\u306C:to die
\u958B\u304F:\u958B[\u3072\u3089]\u304F:to open
\u6BBA\u3059:\u6BBA[\u3053\u308D]\u3059:to kill
\u623B\u308B:\u623B[\u3082\u3069]\u308B:"to return, to go back"
\u5165\u308C\u308B:\u5165[\u3044]\u308C\u308B:to put in
\u6575:\u6575[\u3066\u304D]:"enemy, opponent, adversary"
\u4EE5\u4E0A:\u4EE5\u4E0A[\u3044\u3058\u3087\u3046]:more than ...
\u632F\u308B:\u632F[\u3075]\u308B:"to wave, to shake, to turn down (somebody)"
\u52D5\u304F:\u52D5[\u3046\u3054]\u304F:to move
\u5FC5\u8981:\u5FC5\u8981[\u3072\u3064\u3088\u3046]:"need, necessity"
\u4ED6:\u4ED6[\u307B\u304B]:other
\u66F8\u304F:\u66F8[\u304B]\u304F:to write
\u843D\u3061\u308B:\u843D[\u304A]\u3061\u308B:to fall
\u5F15\u304F:\u5F15[\u3072]\u304F:to pull
\u7DF4\u7FD2:\u7DF4\u7FD2[\u308C\u3093\u3057\u3085\u3046]:practice
\u7D9A\u3051\u308B:\u7D9A[\u3064\u3065]\u3051\u308B:to continue
\u884C\u3046:\u884C[\u304A\u3053\u306A]\u3046:"to perform, to do, to conduct oneself, to carry out"
\u6B8B\u308B:\u6B8B[\u306E\u3053]\u308B:"to remain, to be left"
\u305A\u3063\u3068:\u305A\u3063\u3068:"always, throughout, continuously in some state (for a long time, distance)"
\u4ECA\u5EA6:\u4ECA\u5EA6[\u3053\u3093\u3069]:next time
\u5305\u4E01:\u5305\u4E01[\u307B\u3046\u3061\u3087\u3046]:knife
\u65B0\u9BAE:\u65B0\u9BAE[\u3057\u3093\u305B\u3093]:fresh
\u8FB2\u5BB6:\u8FB2\u5BB6[\u306E\u3046\u304B]:farmer
\u7551:\u7551[\u306F\u305F\u3051]:"field (fruits, vegetables)"
\u91CE\u83DC:\u91CE\u83DC[\u3084\u3055\u3044]:vegetable
\u5207\u308B:\u5207[\u304D]\u308B:"to cut, to hang up (the phone)"
\u3042\u3093\u306A:\u3042\u3093\u306A:that sort of
\u5974:\u5974[\u3084\u3064]:person (derogatory)
\u9A5A\u304F:\u9A5A[\u304A\u3069\u308D]\u304F:to be surprised
\u9ED9\u308B:\u9ED9[\u3060\u307E]\u308B:to be silent
\u8AAC\u660E:\u8AAC\u660E[\u305B\u3064\u3081\u3044]:explanation
\u4F3C\u308B:\u4F3C[\u306B]\u308B:"to be alike, to resemble, to look like"
\u6025:\u6025[\u304D\u3085\u3046]:"sudden, unexpected, urgent"
\u56F0\u308B:\u56F0[\u3053\u307E]\u308B:"to be troubled, to have difficulty, to be in a fix, to be at a loss, to be stumped"
\u501F\u308A\u308B:\u501F[\u304B]\u308A\u308B:"to borrow, to rent"
\u8FD4\u3059:\u8FD4[\u304B\u3048]\u3059:to return (something)
\u5927\u4E08\u592B:\u5927\u4E08\u592B[\u3060\u3044\u3058\u3087\u3046\u3076]:"undoubtedly safe, all right"
\u6642\u4EE3:\u6642\u4EE3[\u3058\u3060\u3044]:"era, time period"
\u4EE5\u5916:\u4EE5\u5916[\u3044\u304C\u3044]:"with the exception of, except"
\u6C17\u5206:\u6C17\u5206[\u304D\u3076\u3093]:"feeling, mood"
\u96A0\u3059:\u96A0[\u304B\u304F]\u3059:to hide
\u4EF2\u9593:\u4EF2\u9593[\u306A\u304B\u307E]:"friends, colleauges"
\u9001\u308B:\u9001[\u304A\u304F]\u308B:"to send (a thing), to take or escort (a person somewhere)"
\u8A31\u3059:\u8A31[\u3086\u308B]\u3059:"to forgive, to permit, to allow"
\u3069\u3046\u305E:\u3069\u3046\u305E:"please, by all means, go ahead"
\u3053\u3061\u3089:\u3053\u3061\u3089:this (directional)
\u5411\u304F:\u5411[\u3080]\u304F:"to turn toward, to look (up, down, etc.), to to go in the direction of"
\u8D77\u3053\u3059:\u8D77[\u304A]\u3053\u3059:"to wake up, to cause"
\u7D50\u679C:\u7D50\u679C[\u3051\u3063\u304B]:"result, outcome"
\u8A8D\u3081\u308B:\u8A8D[\u307F\u3068]\u3081\u308B:"to acknowledge, to admit"
\u5730\u9707:\u5730\u9707[\u3058\u3057\u3093]:earthquake
\u7A81\u7136:\u7A81\u7136[\u3068\u3064\u305C\u3093]:"abrupt, sudden, unexpected"
\u7C21\u5358:\u7C21\u5358[\u304B\u3093\u305F\u3093]:"easy, simple"
\u6016\u3044:\u6016[\u3053\u308F]\u3044:"(I'm) afraid, scary"
\u78BA\u8A8D:\u78BA\u8A8D[\u304B\u304F\u306B\u3093]:"confirmation, verification, validation"
\u751F\u307E\u308C\u308B:\u751F[\u3046]\u307E\u308C\u308B:to be born
\u5168\u54E1:\u5168\u54E1[\u305C\u3093\u3044\u3093]:"all members (group), the whole crew"
\u9014\u4E2D:\u9014\u4E2D[\u3068\u3061\u3085\u3046]:"in the middle of, en route"
\u6025\u3050:\u6025[\u3044\u305D]\u3050:"to hurry, to rush, to hasten"
\u629C\u304F:\u629C[\u306C]\u304F:"to extract, to omit, to draw out"
\u5642:\u5642[\u3046\u308F\u3055]:"rumor, gossip"
\u52DD\u624B\u306B:\u52DD\u624B[\u304B\u3063\u3066]\u306B:selfishly
\u52DD\u624B:\u52DD\u624B[\u304B\u3063\u3066]:selfish
\u7D04\u675F:\u7D04\u675F[\u3084\u304F\u305D\u304F]:promise
\u9045\u3044:\u9045[\u304A\u305D]\u3044:"late, slow"
\u8CBC\u308B:\u8CBC[\u306F]\u308B:"to stick, to paste, to affix"
\u5C4A\u304F:\u5C4A[\u3068\u3069]\u304F:to be delivered
\u6328\u62F6:\u6328\u62F6[\u3042\u3044\u3055\u3064]:greetings
\u5148\u8F29:\u5148\u8F29[\u305B\u3093\u3071\u3044]:senior (at work or school)
\u9023\u7D61:\u9023\u7D61[\u308C\u3093\u3089\u304F]:"to contact, to get in touch with"
\u6E21\u3059:\u6E21[\u308F\u305F]\u3059:to hand over
\u5FC5\u305A:\u5FC5[\u304B\u306A\u3089]\u305A:"without exception, invariably"
\u7279\u306B:\u7279[\u3068\u304F]\u306B:"particularly, especially"
\u7121\u4E8B:\u7121\u4E8B[\u3076\u3058]:"safe, unharmed"
\u6E08\u3080:\u6E08[\u3059]\u3080:to be completed
\u5927\u4EBA:\u5927\u4EBA[\u304A\u3068\u306A]:adult
\u58F2\u308B:\u58F2[\u3046]\u308B:to sell
\u6E96\u5099:\u6E96\u5099[\u3058\u3085\u3093\u3073]:preparation
\u5B09\u3057\u3044:\u5B09[\u3046\u308C]\u3057\u3044:"happy, glad, pleasant"
\u96E2\u3059:\u96E2[\u306F\u306A]\u3059:"to separate, to part, to divide, to keep apart"
\u89E6\u308B:\u89E6[\u3055\u308F]\u308B:"to touch, to feel"
\u7656:\u7656[\u304F\u305B]:habit
\u5927\u4E8B:\u5927\u4E8B[\u3060\u3044\u3058]:"important, serious"
\u9375:\u9375[\u304B\u304E]:"key, lock"
\u4ECA\u56DE:\u4ECA\u56DE[\u3053\u3093\u304B\u3044]:this time
\u596A\u3046:\u596A[\u3046\u3070]\u3046:"to snatch away, to steal"
\u306A\u304F\u306A\u308B:\u306A\u304F\u306A\u308B:"to be used up, to be consumed, to die"
\u63B4\u3080:\u63B4[\u3064\u304B]\u3080:"to grasp, to grip, to grab, to clutch, to hold"
\u307E\u308B\u3067:\u307E\u308B\u3067:"entirely, completely"
\u7A93:\u7A93[\u307E\u3069]:window
\u666F\u8272:\u666F\u8272[\u3051\u3057\u304D]:scenery
\u7D75\u753B:\u7D75\u753B[\u304B\u3044\u304C]:"painting, picture"
\u672C\u7269:\u672C\u7269[\u307B\u3093\u3082\u306E]:"genuine, the real thing"
\u6C17\u4ED8\u304F:\u6C17\u4ED8[\u304D\u3065]\u304F:"to notice, to realize"
\u5ACC\u3044:\u5ACC[\u304D\u3089]\u3044:"hate, dislike"
\u9762\u5012:\u9762\u5012[\u3081\u3093\u3069\u3046]:"trouble, bother"
\u8FF7\u60D1:\u8FF7\u60D1[\u3081\u3044\u308F\u304F]:"trouble, bother, annoyance"
\u52A9\u304B\u308B:\u52A9[\u305F\u3059]\u304B\u308B:"to be saved, to be rescued"
\u796D:\u796D[\u307E\u3064\u308A]:festival
\u82B1\u706B:\u82B1\u706B[\u306F\u306A\u3073]:fireworks
\u6253\u3061\u4E0A\u3052:\u6253[\u3046]\u3061\u4E0A[\u3042]\u3052:launch
\u53C2\u52A0:\u53C2\u52A0[\u3055\u3093\u304B]:participation
\u5E78\u305B:\u5E78[\u3057\u3042\u308F]\u305B:happiness
\u604B\u4EBA:\u604B\u4EBA[\u3053\u3044\u3073\u3068]:person who someone is dating
\u5BC2\u3057\u3044:\u5BC2[\u3055\u3073]\u3057\u3044:"lonely, lonesome"
\u904E\u3054\u3059:\u904E[\u3059]\u3054\u3059:"to overdo, to do too much; to pass (time)"
\u65AD\u308B:\u65AD[\u3053\u3068\u308F]\u308B:"to refuse, to reject, to turn down, to decline"
\u771F\u5263:\u771F\u5263[\u3057\u3093\u3051\u3093]:"serious, earnest"
\u3053\u3046:\u3053\u3046:"in this way, such"
\u3070\u304B\u308A:\u3070\u304B\u308A:"only, just (started, finished, etc.)"
\u9802\u304F:\u9802[\u3044\u305F\u3060]\u304F:to receive (formal)
\u5206:\u5206[\u3075\u3093]:minutes
\u4E00\u5EA6:\u4E00\u5EA6[\u3044\u3061\u3069]:once
\u4FE1\u3058\u308B:\u4FE1[\u3057\u3093]\u3058\u308B:to believe
\u6210\u529F:\u6210\u529F[\u305B\u3044\u3053\u3046]:success
\u671B\u3080:\u671B[\u306E\u305E]\u3080:"to wish for, to desire"
\u304A\u304B\u3057\u3044:\u304A\u304B\u3057\u3044:"strange, unusual"
\u3046\u308B\u3055\u3044:\u3046\u308B\u3055\u3044:"annoying, troublesome"
\u5927\u4F53:\u5927\u4F53[\u3060\u3044\u305F\u3044]:mostly
\u306A\u308B\u307B\u3069:\u306A\u308B\u307B\u3069:"I see, indeed"
\u5618:\u5618[\u3046\u305D]:lie
\u9593\u306B\u5408\u3046:\u9593[\u307E]\u306B \u5408[\u3042]\u3046:to be in time (for)
\u3069\u3046\u305B:\u3069\u3046\u305B:"in any case, at any rate"
\u898B\u3064\u304B\u308B:\u898B[\u307F]\u3064\u304B\u308B:"to find, to discover"
\u9593\u9055\u3044:\u9593\u9055[\u307E\u3061\u304C]\u3044:mistake
\u4E45\u3057\u3076\u308A:\u4E45[\u3072\u3055]\u3057\u3076\u308A:for the first time in a while
\u81F4\u3059:\u81F4[\u3044\u305F]\u3059:to do (formal)
\u7E4B\u3050:\u7E4B[\u3064\u306A]\u3050:to connect
\u3044\u304D\u306A\u308A:\u3044\u304D\u306A\u308A:"suddenly, abruptly"
\u3073\u3063\u304F\u308A:\u3073\u3063\u304F\u308A:suprise
\u304A\u6BCD\u3055\u3093:\u304A \u6BCD[\u304B\u3042]\u3055\u3093:mother
\u304A\u308B:\u304A\u308B:to exist (living things) {formal}
\u558B\u308B:\u558B[\u3057\u3083\u3079]\u308B:"to chat, to talk"
\u69CB\u3046:\u69CB[\u304B\u307E]\u3046:to be concerned about
\u8A70\u307E\u308B:\u8A70[\u3064]\u307E\u308B:to be packed (with)
\u4EF2:\u4EF2[\u306A\u304B]:relationship
\u6687:\u6687[\u3072\u307E]:free-time
\u8179:\u8179[\u306F\u3089]:"abdomen, stomach"
\u3069\u306E:\u3069\u306E:which
\u53C2\u308B:\u53C2[\u307E\u3044]\u308B:"to go, to come, to call"
\u82E6\u624B:\u82E6\u624B[\u306B\u304C\u3066]:poor (at)
\u63C3\u3046:\u63C3[\u305D\u308D]\u3046:"to be complete, to be satisfied (of conditions)"
\u3055\u3066:\u3055\u3066:"well, now then"
\u5927\u4F1A:\u5927\u4F1A[\u305F\u3044\u304B\u3044]:tournament
\u6094\u3057\u3044:\u6094[\u304F\u3084]\u3057\u3044:"frustrating, regrettable"
\u8155:\u8155[\u3046\u3067]:arm
\u60A9\u3080:\u60A9[\u306A\u3084]\u3080:"to be worried, to be troubled"
\u8FF7\u3046:\u8FF7[\u307E\u3088]\u3046:to get lost\u200B
\u884C\u52D5:\u884C\u52D5[\u3053\u3046\u3069\u3046]:"action, conduct"
\u5B66\u5E74:\u5B66\u5E74[\u304C\u304F\u306D\u3093]:year/grade in school
\u72D9\u3046:\u72D9[\u306D\u3089]\u3046:to aim at
\u5165\u5B66:\u5165\u5B66[\u306B\u3085\u3046\u304C\u304F]:entry to school or university
\u5E0C\u671B:\u5E0C\u671B[\u304D\u307C\u3046]:"hope, wish, aspiration"
\u71B1\u3044:\u71B1[\u3042\u3064]\u3044:hot (to touch)
\u4E0B\u304C\u308B:\u4E0B[\u3055]\u304C\u308B:to go down
\u304A\u793C:\u304A \u793C[\u308C\u3044]:"thanks, gratitude\u200B"
\u7D20\u76F4:\u7D20\u76F4[\u3059\u306A\u304A]:"honest, frank"
\u76F4\u308B:\u76F4[\u306A\u304A]\u308B:to be fixed
\u5ACC\u3046:\u5ACC[\u304D\u3089]\u3046:to hate
\u6A5F\u4F1A:\u6A5F\u4F1A[\u304D\u304B\u3044]:opportunity
\u307E\u304F\u308B:\u307E\u304F\u308B:to roll up (sleeves)\u200B
\u53F1\u308B:\u53F1[\u3057\u304B]\u308B:to scold
\u6563\u3005:\u6563\u3005[\u3055\u3093\u3056\u3093]:"severely, harshly"
\u65E5\u3005:\u65E5\u3005[\u3072\u3073]:"daily, day after day"
\u683C\u597D:\u683C\u597D[\u304B\u3063\u3053\u3046]:appearance; outfit
\u3081\u3063\u3061\u3083:\u3081\u3063\u3061\u3083:"excessive, extreme"
\u5927\u4EBA\u3057\u3044:\u5927\u4EBA[\u304A\u3068\u306A]\u3057\u3044:"docile, quiet\u200B"
\u62FE\u3046:\u62FE[\u3072\u308D]\u3046:to pick up
\u8A08\u753B:\u8A08\u753B[\u3051\u3044\u304B\u304F]:plan
\u6B62\u3081\u308B:\u6B62[\u3068]\u3081\u308B:to stop
\u5065\u5EB7:\u5065\u5EB7[\u3051\u3093\u3053\u3046]:health
\u3084\u3081\u308B:\u3084\u3081\u308B:to quit
\u9045\u523B:\u9045\u523B[\u3061\u3053\u304F]:late
\u6F2B\u753B:\u6F2B\u753B[\u307E\u3093\u304C]:comic
\u5F8C\u6094:\u5F8C\u6094[\u3053\u3046\u304B\u3044]:regret
\u4E0A\u53F8:\u4E0A\u53F8[\u3058\u3087\u3046\u3057]:"(one's) superior, (one's) boss"
\u3081\u3061\u3083\u304F\u3061\u3083:\u3081\u3061\u3083\u304F\u3061\u3083:"incredibly, really"
\u9774\u4E0B:\u9774\u4E0B[\u304F\u3064\u3057\u305F]:socks
\u7D19:\u7D19[\u304B\u307F]:paper
\u65B9\u5411:\u65B9\u5411[\u307B\u3046\u3053\u3046]:direction
\u78E8\u304F:\u78E8[\u307F\u304C]\u304F:to polish
\u5E8A:\u5E8A[\u3086\u304B]:floor
\u5915\u65B9:\u5915\u65B9[\u3086\u3046\u304C\u305F]:"evening, dusk\u200B"
\u7159:\u7159[\u3051\u3080\u308A]:smoke
\u91E3\u308A:\u91E3[\u3064]\u308A:fishing
\u8DA3\u5473:\u8DA3\u5473[\u3057\u3085\u307F]:hobby
\u96C6\u3081\u308B:\u96C6[\u3042\u3064]\u3081\u308B:to collect
\u77AC\u9593:\u77AC\u9593[\u3057\u3085\u3093\u304B\u3093]:"moment, second"
\u8A66\u3059:\u8A66[\u305F\u3081]\u3059:to try
\u7D50\u3076:\u7D50[\u3080\u3059]\u3076:"to tie, to bind"
\u72ED\u3044:\u72ED[\u305B\u307E]\u3044:narrow
\u5897\u3084\u3059:\u5897[\u3075]\u3084\u3059:to increase
\u5B66\u3076:\u5B66[\u307E\u306A]\u3076:to learn
\u76EE:\u76EE[\u3081]:eye
\u305D\u3057\u3066:\u305D\u3057\u3066:"and then, thus, and finally"
\u5FC3:\u5FC3[\u3053\u3053\u308D]:"heart, mind, spirit, vitality"
\u540C\u3058:\u540C[\u304A\u306A]\u3058:"same, identical"
\u9060\u3044:\u9060[\u3068\u304A]\u3044:"far, distant"
\u59FF:\u59FF[\u3059\u304C\u305F]:"figure, form"
\u76F8\u624B:\u76F8\u624B[\u3042\u3044\u3066]:"partner, other party, opponent (sports, etc.)"
\u5148:\u5148[\u3055\u304D]:"before, ahead, prior, former"
\u80F8:\u80F8[\u3080\u306D]:"chest, breasts"
\u547C\u3076:\u547C[\u3088]\u3076:"to call, to call out (to)"
\u6C34:\u6C34[\u307F\u305A]:water
\u898B\u305B\u308B:\u898B[\u307F]\u305B\u308B:to show
\u5A18:\u5A18[\u3080\u3059\u3081]:daughter
\u795E:\u795E[\u304B\u307F]:"god, deity"
\u5F97\u308B:\u5F97[\u3048]\u308B:"to earn, to acquire, to gain"
\u5B58\u5728:\u5B58\u5728[\u305D\u3093\u3056\u3044]:"existence, being"
\u78BA\u304B:\u78BA[\u305F\u3057]\u304B:"If I'm not mistaken, If I remember correctly"
\u6D88\u3048\u308B:\u6D88[\u304D]\u3048\u308B:"to go out, to vanish, to disappear"
\u6700\u521D:\u6700\u521D[\u3055\u3044\u3057\u3087]:"beginning, first"
\u304D\u3063\u3068:\u304D\u3063\u3068:"surely, almost certainly, most likely (90 percent)"
\u5834\u5408:\u5834\u5408[\u3070\u3042\u3044]:"case, situation"
\u611F\u3058:\u611F[\u304B\u3093]\u3058:"feeling, sense, impression"
\u5FC3\u914D:\u5FC3\u914D[\u3057\u3093\u3071\u3044]:"worry, concern, anxiety"
\u96E2\u308C\u308B:\u96E2[\u306F\u306A]\u308C\u308B:"to be separated, to be apart, to be distant"
\u601D\u3044\u51FA\u3059:\u601D\u3044\u51FA[\u304A\u3082\u3044\u3060]\u3059:"to recall, to remember"
\u70B9:\u70B9[\u3066\u3093]:"score (exams), dot, point"
\u7406\u7531:\u7406\u7531[\u308A\u3086\u3046]:reason
\u62BC\u3059:\u62BC[\u304A]\u3059:"to push, to press"
\u7537\u306E\u5B50:\u7537\u306E\u5B50[\u304A\u3068\u3053\u306E\u3053]:boy
\u60F3\u50CF:\u60F3\u50CF[\u305D\u3046\u305E\u3046]:imagination
\u8FD1\u3044:\u8FD1[\u3061\u304B]\u3044:"near (distance), close (in time)"
\u5973\u6027:\u5973\u6027[\u3058\u3087\u305B\u3044]:"woman, feminine gender"
\u4E8B\u5B9F:\u4E8B\u5B9F[\u3058\u3058\u3064]:"fact, truth, reality"
\u5BDD\u308B:\u5BDD[\u306D]\u308B:"to lie down, to go to sleep"
\u7406\u89E3:\u7406\u89E3[\u308A\u304B\u3044]:"understanding, comprehension"
\u9032\u3080:\u9032[\u3059\u3059]\u3080:"to advance, to go forward"
\u72B6\u614B:\u72B6\u614B[\u3058\u3087\u3046\u305F\u3044]:"current status, condition, situation"
\u304B\u3057\u3089:\u304B\u3057\u3089:I wonder (female)
\u5B8C\u5168:\u5B8C\u5168[\u304B\u3093\u305C\u3093]:"perfection, completeness"
\u5F53\u7136:\u5F53\u7136[\u3068\u3046\u305C\u3093]:"of course, obviously"
\u5411\u3053\u3046:\u5411[\u3080]\u3053\u3046:"over there, that way"
\u6B8B\u3059:\u6B8B[\u306E\u3053]\u3059:"to leave (behind, over), to save, to reserve"
\u666E\u901A:\u666E\u901A[\u3075\u3064\u3046]:"general, ordinary, usual, normally"
\u661F:\u661F[\u307B\u3057]:star
\u5B88\u308B:\u5B88[\u307E\u3082]\u308B:"to protect, to keep (a promise)"
\u547D:\u547D[\u3044\u306E\u3061]:life
\u5B87\u5B99:\u5B87\u5B99[\u3046\u3061\u3085\u3046]:"universe, cosmos, space"
\u5909\u3048\u308B:\u5909[\u304B]\u3048\u308B:"to change, to reform, to revise, to amend"
\u91CD\u3044:\u91CD[\u304A\u3082]\u3044:heavy (weight)
\u307E\u3055\u304B:\u307E\u3055\u304B:"It couldn't be, something unexpected"
\u843D\u3068\u3059:\u843D[\u304A]\u3068\u3059:to drop
\u4F8B:\u4F8B[\u308C\u3044]:example
\u65B9\u6CD5:\u65B9\u6CD5[\u307B\u3046\u307B\u3046]:method
\u72B6\u6CC1:\u72B6\u6CC1[\u3058\u3087\u3046\u304D\u3087\u3046]:"state of affairs (around you), situation, circumstances"
\u81EA\u7531:\u81EA\u7531[\u3058\u3086\u3046]:"freedom, liberty"
\u6C7A\u3081\u308B:\u6C7A[\u304D]\u3081\u308B:"to decide, to choose"
\u7D50\u5C40:\u7D50\u5C40[\u3051\u3063\u304D\u3087\u304F]:"ultimately, in the end"
\u7528\u610F:\u7528\u610F[\u3088\u3046\u3044]:"preparation, arrangements"
\u79D8\u5BC6:\u79D8\u5BC6[\u3072\u307F\u3064]:secret
\u5831\u544A:\u5831\u544A[\u307B\u3046\u3053\u304F]:report
\u5302\u3044:\u5302[\u306B\u304A]\u3044:"scent, smell"
\u8ABF\u5B50:\u8ABF\u5B50[\u3061\u3087\u3046\u3057]:"condition, state of health"
\u7DCA\u5F35:\u7DCA\u5F35[\u304D\u3093\u3061\u3087\u3046]:nervousness
\u5B89\u5FC3:\u5B89\u5FC3[\u3042\u3093\u3057\u3093]:"relief, peace of mind"
\u4ED6\u4EBA:\u4ED6\u4EBA[\u305F\u306B\u3093]:"other people, strangers"
\u4E00\u4F53:\u4E00\u4F53[\u3044\u3063\u305F\u3044]:what the ...
\u5927\u5909:\u5927\u5909[\u305F\u3044\u3078\u3093]:"greatly, terribly"
\u590F:\u590F[\u306A\u3064]:summer
\u7D50\u5A5A:\u7D50\u5A5A[\u3051\u3063\u3053\u3093]:marriage
\u8208\u5473:\u8208\u5473[\u304D\u3087\u3046\u307F]:"interest (in something), curiosity (about something)"
\u4E8B\u60C5:\u4E8B\u60C5[\u3058\u3058\u3087\u3046]:"circumstances, consideration, situation, state of affairs"
\u5C11\u306A\u3044:\u5C11[\u3059\u304F]\u306A\u3044:"few, a little, insufficient"
\u7518\u3044:\u7518[\u3042\u307E]\u3044:sweet
\u5143\u6C17:\u5143\u6C17[\u3052\u3093\u304D]:"healthy, doing well"
\u4F5C\u6226:\u4F5C\u6226[\u3055\u304F\u305B\u3093]:"tactics, strategy"
\u6559\u5E2B:\u6559\u5E2B[\u304D\u3087\u3046\u3057]:teacher (fomral)
\u671F\u5F85:\u671F\u5F85[\u304D\u305F\u3044]:"expectation, anticipation, hope"
\u559C\u3076:\u559C[\u3088\u308D\u3053]\u3076:"to be delighted, to be glad"
\u76F8\u8AC7:\u76F8\u8AC7[\u305D\u3046\u3060\u3093]:"consultation, advice"
\u843D\u3061\u7740\u304F:\u843D\u3061\u7740[\u304A\u3061\u3064]\u304F:"to calm down, to be calm"
\u6B63\u76F4:\u6B63\u76F4[\u3057\u3087\u3046\u3058\u304D]:"honestly, frankly"
\u5473:\u5473[\u3042\u3058]:"(sense of) taste, flavor"
\u81EA\u4FE1:\u81EA\u4FE1[\u3058\u3057\u3093]:"self-confidence, confidence (in oneself)"
\u899A\u609F:\u899A\u609F[\u304B\u304F\u3054]:"resolution, readiness, preparedness"
\u7D50\u69CB:\u7D50\u69CB[\u3051\u3063\u3053\u3046]:"sufficient, quite, ok"
\u99C4\u76EE:\u99C4\u76EE[\u3060\u3081]:"hopeless, wasted, purposeless, no good, not allowed"
\u90AA\u9B54:\u90AA\u9B54[\u3058\u3083\u307E]:"hindrance, obstacle, nuisance"
\u4EE3\u308F\u308A:\u4EE3[\u304B]\u308F\u308A:"second helping, seconds; substitute"
\u672C\u6C17:\u672C\u6C17[\u307B\u3093\u304D]:serious
\u610F\u5916:\u610F\u5916[\u3044\u304C\u3044]:"unexpected, surprising"
\u5931\u793C:\u5931\u793C[\u3057\u3064\u308C\u3044]:"excuse me, rude"
\u8A3C\u62E0:\u8A3C\u62E0[\u3057\u3087\u3046\u3053]:"evidence, proof"
\u7279\u5225:\u7279\u5225[\u3068\u304F\u3079\u3064]:special
\u5927\u5207:\u5927\u5207[\u305F\u3044\u305B\u3064]:"important, necessary, indispensable"
\u5341\u5206:\u5341\u5206[\u3058\u3085\u3046\u3076\u3093]:"plenty, enough, sufficient, satisfactory, adequate"
\u7ACB\u6D3E:\u7ACB\u6D3E[\u308A\u3063\u3071]:"praiseworthy, creditable, splendid, fine, elegant"
\u4EBA\u751F:\u4EBA\u751F[\u3058\u3093\u305B\u3044]:(human) life
\u6B8B\u5FF5:\u6B8B\u5FF5[\u3056\u3093\u306D\u3093]:unfortunate
\u713C\u304F:\u713C[\u3084]\u304F:"to bake, to grill, to bake, to burn"
\u672C\u4EBA:\u672C\u4EBA[\u307B\u3093\u306B\u3093]:the person himself
\u91CE\u90CE:\u91CE\u90CE[\u3084\u308D\u3046]:guy (derogatory)
\u6211\u6162:\u6211\u6162[\u304C\u307E\u3093]:"patience, endurance"
\u8CAC\u4EFB:\u8CAC\u4EFB[\u305B\u304D\u306B\u3093]:responsibility
\u5168\u3066:\u5168[\u3059\u3079]\u3066:"all, entirely"
\u8336:\u8336[\u3061\u3083]:tea
\u591A\u5206:\u591A\u5206[\u305F\u3076\u3093]:"perhaps, probably"
\u5F31\u3044:\u5F31[\u3088\u308F]\u3044:"weak, frail"
\u5076\u7136:\u5076\u7136[\u3050\u3046\u305C\u3093]:"coincidence, by chance"
\u9858\u3046:\u9858[\u306D\u304C]\u3046:"to desire, to wish, to request, to implore"
\u6D3B\u52D5:\u6D3B\u52D5[\u304B\u3064\u3069\u3046]:"activity, action"
\u89AA\u7236:\u89AA\u7236[\u304A\u3084\u3058]:"one's father, middle aged man"
\u5225\u308C\u308B:\u5225[\u308F\u304B]\u308C\u308B:to break up
\u51FA\u4F1A\u3046:\u51FA\u4F1A[\u3067\u3042]\u3046:"to meet (by chance), to come across"
\u4ED8\u3051\u308B:\u4ED8[\u3064]\u3051\u308B:"to attach, to turn on (light)"
\u672A\u6765:\u672A\u6765[\u307F\u3089\u3044]:the future (usually distant)
\u4E00\u5FDC:\u4E00\u5FDC[\u3044\u3061\u304A\u3046]:"more or less, tentatively"
\u5354\u529B:\u5354\u529B[\u304D\u3087\u3046\u308A\u3087\u304F]:"cooperation, collaboration"
\u4E00\u751F:\u4E00\u751F[\u3044\u3063\u3057\u3087\u3046]:"whole life, a lifetime"
\u6700\u9AD8:\u6700\u9AD8[\u3055\u3044\u3053\u3046]:"best, wonderful, finest"
\u540C\u58EB:\u540C\u58EB[\u3069\u3046\u3057]:"fellow, mutual, companion, comrade"
\u611F\u8B1D:\u611F\u8B1D[\u304B\u3093\u3057\u3083]:"thanks, gratitude"
\u7D39\u4ECB:\u7D39\u4ECB[\u3057\u3087\u3046\u304B\u3044]:introduction
\u5973\u5B50:\u5973\u5B50[\u3058\u3087\u3057]:girl
\u305B\u3081\u3066:\u305B\u3081\u3066:at least
\u5E73\u6C17:\u5E73\u6C17[\u3078\u3044\u304D]:"calmness, composure, unconcern"
\u4E8B\u6545:\u4E8B\u6545[\u3058\u3053]:"accident, incident"
\u8DB3\u308A\u308B:\u8DB3[\u305F]\u308A\u308B:"to be sufficient, to be enough"
\u52DD\u8CA0:\u52DD\u8CA0[\u3057\u3087\u3046\u3076]:"match, contest, game"
\u604B:\u604B[\u3053\u3044]:(romantic) love
\u771F\u9762\u76EE:\u771F\u9762\u76EE[\u307E\u3058\u3081]:"serious, earnest"
\u6383\u9664:\u6383\u9664[\u305D\u3046\u3058]:cleaning
\u4F3C\u5408\u3046:\u4F3C\u5408[\u306B\u3042]\u3046:"to suit, to match"
\u4F59\u8A08:\u4F59\u8A08[\u3088\u3051\u3044]:"excessive, superfluous"
\u7533\u3057\u8A33:\u7533\u3057\u8A33[\u3082\u3046\u3057\u308F\u3051]:"apology, excuse"
\u6B4C\u3046:\u6B4C[\u3046\u305F]\u3046:to sing
\u7121\u3044:\u7121[\u306A]\u3044:to not exist (inanimate objects)
\u826F\u3044:\u826F[\u3088]\u3044:"good, nice"
\u304A\u524D:\u304A \u524D[\u307E\u3048]:you (slightly derogatory)
\u8A33:\u8A33[\u308F\u3051]:"reason, rationale"
\u3084\u3063\u3071\u308A:\u3084\u3063\u3071\u308A:"as expected, after all"
\u3042\u3044\u3064:\u3042\u3044\u3064:him (informal)
\u307E\u307E:\u307E\u307E:as it is (moment in time)
\u99AC\u9E7F:\u99AC\u9E7F[\u3070\u304B]:"idiot, stupid"
\u5ACC:\u5ACC[\u3044\u3084]:"unpleasant, detestable"
\u305F\u3060:\u305F\u3060:"simply, merely"
\u306F\u305A:\u306F\u305A:"should be, must be"
\u9054:\u9054[\u305F\u3061]:pluralizing suffix (for people and animals)
\u3064\u3082\u308A:\u3064\u3082\u308A:intention
\u3055\u3063\u304D:\u3055\u3063\u304D:a short while ago
\u5168\u304F:\u5168[\u307E\u3063\u305F]\u304F:"truly, entirely"
\u5B9F:\u5B9F[\u3058\u3064]:"truth, reality"
\u306A\u305C:\u306A\u305C:why (formal)
\u3057\u304B\u3057:\u3057\u304B\u3057:however
\u7956\u6BCD:\u7956\u6BCD[\u305D\u307C]:grandmother
\u307B\u3069:\u307B\u3069:"degree, extent"
\u3055\u3059\u304C:\u3055\u3059\u304C:as you'd expect
\u3053\u3044\u3064:\u3053\u3044\u3064:this (informal)
\u3042\u307E\u308A:\u3042\u307E\u308A:"not much, not very"
\u304A\u306F\u3088\u3046:\u304A\u306F\u3088\u3046:good morning
\u8005:\u8005[\u3082\u306E]:person
\u307E\u3058:\u307E\u3058:serious
\u307E\u305A:\u307E\u305A:first
\u3068\u306B\u304B\u304F:\u3068\u306B\u304B\u304F:anyway
\u7956\u7236:\u7956\u7236[\u305D\u3075]:grandfather
\u305D\u3061\u3089:\u305D\u3061\u3089:there (location)
\u304A\u9858\u3044:\u304A \u9858[\u306D\u304C]\u3044:favor
\u4ED8\u304D\u5408\u3046:\u4ED8[\u3064]\u304D \u5408[\u3042]\u3046:to go out with (romantically)
\u4ECA\u307E\u3067:\u4ECA[\u3044\u307E]\u307E\u3067:until now
\u3069\u3063\u3061:\u3069\u3063\u3061:which
\u4E0B:\u4E0B[\u3057\u305F]:below
\u306A\u3069:\u306A\u3069:etc
\u3057\u3063\u304B\u308A:\u3057\u3063\u304B\u308A:dependable
\u8F9B\u3044:\u8F9B[\u304B\u3089]\u3044:spicy
\u305B\u3063\u304B\u304F:\u305B\u3063\u304B\u304F:"with trouble, at great pains"
\u3057\u304B\u3082:\u3057\u304B\u3082:moreover
\u5186:\u5186[\u3048\u3093]:yen
\u3064\u307E\u308A:\u3064\u307E\u308A:in other words
\u5F62:\u5F62[\u304B\u305F\u3061]:shape
\u3044\u304F\u3089:\u3044\u304F\u3089:how much
\u7121\u3057:\u7121[\u306A]\u3057:without
\u3068\u308A\u3042\u3048\u305A:\u3068\u308A\u3042\u3048\u305A:"for now, at once"
\u4ED5\u65B9\u306A\u3044:\u4ED5\u65B9[\u3057\u304B\u305F]\u306A\u3044:"cannot be helped, unavoidable"
\u8AE6\u3081\u308B:\u8AE6[\u3042\u304D\u3089]\u3081\u308B:to give up
\u305F\u3060\u3044\u307E:\u305F\u3060\u3044\u307E:I'm home!
\u8B1D\u308B:\u8B1D[\u3042\u3084\u307E]\u308B:to apologize
\u304A\u5144\u3061\u3083\u3093:\u304A \u5144[\u306B\u3044]\u3061\u3083\u3093:older brother (informal)
\u3082\u3057\u3082\u3057:\u3082\u3057\u3082\u3057:hello (on phone)
\u611F\u3058\u308B:\u611F[\u304B\u3093]\u3058\u308B:to feel
\u3042\u3063\u3061:\u3042\u3063\u3061:over there
\u7121\u99C4:\u7121\u99C4[\u3080\u3060]:"waste (of time, etc), pointlessness"
\u4F55\u5EA6:\u4F55\u5EA6[\u306A\u3093\u3069]:how many times
\u4EF6:\u4EF6[\u3051\u3093]:"matter, incident"
\u3061\u3087\u3046\u3069:\u3061\u3087\u3046\u3069:exact
\u968F\u5206:\u968F\u5206[\u305A\u3044\u3076\u3093]:"considerably, awfully"
\u3084\u3070\u3044:\u3084\u3070\u3044:"terrible, crap (slang)"
\u7B2C:\u7B2C[\u3060\u3044]:prefix for forming ordinal numbers
\u697D\u3057\u307F:\u697D[\u305F\u306E]\u3057\u307F:"enjoyment, anticipation"
\u5074:\u5074[\u305D\u3070]:near
\u3070\u308C\u308B:\u3070\u308C\u308B:"to be exposed (a lie, etc.)"
\u756A:\u756A[\u3070\u3093]:"number (in a series), turn (in line)"
\u304A\u8179:\u304A \u8179[\u306A\u304B]:stomach
\u308F\u3056\u308F\u3056:\u308F\u3056\u308F\u3056:"especially, taking the trouble (to do)"
\u307E\u305A\u3044:\u307E\u305A\u3044:bad (taste)
\u4F2F\u7236:\u4F2F\u7236[\u304A\u3058]:uncle
\u3044\u3044\u52A0\u6E1B:\u3044\u3044 \u52A0\u6E1B[\u304B\u3052\u3093]:"irresponsible, careless"
\u304A\u3081\u3067\u3068\u3046:\u304A\u3081\u3067\u3068\u3046:congratulations
\u8EAB:\u8EAB[\u307F]:"body, oneself"
\u304F\u305D:\u304F\u305D:"damn, shit"
\u3044\u308D\u3093\u306A:\u3044\u308D\u3093\u306A:various
\u53EF\u80FD\u6027:\u53EF\u80FD\u6027[\u304B\u306E\u3046\u305B\u3044]:"possibly, potentially"
\u4E92\u3044:\u4E92[\u305F\u304C]\u3044:"each other, one another\u200B"
\u81ED\u3044:\u81ED[\u304F\u3055]\u3044:smelly
\u611B\u3059\u308B:\u611B[\u3042\u3044]\u3059\u308B:to love
\u305F\u307E\u306B:\u305F\u307E\u306B:occasionally
\u3055\u3063\u3055\u3068:\u3055\u3063\u3055\u3068:quickly
\u4ECA\u66F4:\u4ECA\u66F4[\u3044\u307E\u3055\u3089]:now (when it is already much too late)
\u77E5\u308A\u5408\u3044:\u77E5[\u3057]\u308A \u5408[\u3042]\u3044:acquaintance
\u3064\u3044:\u3064\u3044:unintentionally
\u5927\u3057\u305F:\u5927[\u305F\u3044]\u3057\u305F:considerable
\u5049\u3044:\u5049[\u3048\u3089]\u3044:distinguished
\u4E00\u8A00:\u4E00\u8A00[\u3072\u3068\u3053\u3068]:a few words
\u76F8\u5909\u308F\u3089\u305A:\u76F8\u5909[\u3042\u3044]\u308F\u3089\u305A:as usual
\u307B\u3068\u3093\u3069:\u307B\u3068\u3093\u3069:"mostly, nearly"
\u3088\u308D\u3057\u3044:\u3088\u308D\u3057\u3044:"OK, all right"
\u5DE5\u4E8B:\u5DE5\u4E8B[\u3053\u3046\u3058]:construction
\u3070\u3070\u3042:\u3070\u3070\u3042:old woman (informal)
\u3069\u3061\u3089:\u3069\u3061\u3089:which
\u5897\u3048\u308B:\u5897[\u3075]\u3048\u308B:to increase
\u305D\u3082\u305D\u3082:\u305D\u3082\u305D\u3082:in the first place
\u9006:\u9006[\u304E\u3083\u304F]:opposite
\u88CF:\u88CF[\u3046\u3089]:opposite side
\u4E0D\u5B89:\u4E0D\u5B89[\u3075\u3042\u3093]:"anxiety, uneasiness"
\u65E2\u306B:\u65E2[\u3059\u3067]\u306B:already
\u305D\u3044\u3064:\u305D\u3044\u3064:person (informal)
\u6DF1\u3044:\u6DF1[\u3075\u304B]\u3044:deep
\u9650\u308A:\u9650[\u304B\u304E]\u308A:limit
\u73CD\u3057\u3044:\u73CD[\u3081\u305A\u3089]\u3057\u3044:rare
\u50B7\u3064\u304F:\u50B7[\u304D\u305A]\u3064\u304F:to hurt
\u7D0D\u5F97:\u7D0D\u5F97[\u306A\u3063\u3068\u304F]:"agreement, understanding"
\u61F8\u547D:\u61F8\u547D[\u3051\u3093\u3081\u3044]:"earnest, with utmost effort"
\u307E\u3042\u307E\u3042:\u307E\u3042\u307E\u3042:so-so
\u6163\u308C\u308B:\u6163[\u306A]\u308C\u308B:to get used to
\u53EF\u54C0\u60F3:\u53EF\u54C0\u60F3[\u304B\u308F\u3044\u305D\u3046]:pitiful\u200B
\u73FE\u308C\u308B:\u73FE[\u3042\u3089\u308F]\u308C\u308B:to show
\u5143\u3005:\u5143\u3005[\u3082\u3068\u3082\u3068]:originally
\u76F4\u3059:\u76F4[\u306A\u304A]\u3059:to repair
\u52D8\u9055\u3044:\u52D8\u9055[\u304B\u3093\u3061\u304C]\u3044:"misunderstanding, mistaken idea"
\u8FBA:\u8FBA[\u3078\u3093]:area
\u65E9\u901F:\u65E9\u901F[\u3055\u3063\u305D\u304F]:"at once, immediately"
\u5834:\u5834[\u3070]:place
\u5E74\u9593:\u5E74\u9593[\u306D\u3093\u304B\u3093]:period of years
\u7D20\u6674\u3089\u3057\u3044:\u7D20\u6674[\u3059\u3070]\u3089\u3057\u3044:"great, amazing"
\u6B63\u3057\u3044:\u6B63[\u305F\u3060]\u3057\u3044:correct
\u904B\u3076:\u904B[\u306F\u3053]\u3076:to carry
\u6C42\u3081\u308B:\u6C42[\u3082\u3068]\u3081\u308B:to request
\u82E6\u3057\u3044:\u82E6[\u304F\u308B]\u3057\u3044:painful
\u4ECA\u5F8C:\u4ECA\u5F8C[\u3053\u3093\u3054]:"from now on, hereafter"
\u4F11\u307F:\u4F11[\u3084\u3059]\u307F:rest
\u7FA8\u307E\u3057\u3044:\u7FA8[\u3046\u3089\u3084]\u307E\u3057\u3044:envious
\u9060\u616E:\u9060\u616E[\u3048\u3093\u308A\u3087]:restraint
\u4EE5\u6765:\u4EE5\u6765[\u3044\u3089\u3044]:"since, henceforth"
\u53D7\u3051\u53D6\u308B:\u53D7[\u3046]\u3051 \u53D6[\u3068]\u308B:to take
\u6700\u60AA:\u6700\u60AA[\u3055\u3044\u3042\u304F]:worst
\u610F\u8B58:\u610F\u8B58[\u3044\u3057\u304D]:consciousness
\u8D8A\u3048\u308B:\u8D8A[\u3053]\u3048\u308B:to pass (through/over)
\u6B63\u9762:\u6B63\u9762[\u3057\u3087\u3046\u3081\u3093]:front
\u5B8C\u74A7:\u5B8C\u74A7[\u304B\u3093\u307A\u304D]:perfect
\u666E\u6BB5:\u666E\u6BB5[\u3075\u3060\u3093]:"usually, normally"
\u8AA4\u89E3:\u8AA4\u89E3[\u3054\u304B\u3044]:misunderstanding
\u4E0B\u624B:\u4E0B\u624B[\u3078\u305F]:poor (at)
\u305F\u3068\u3048:\u305F\u3068\u3048:"even if, no matter (what)"
\u56FA\u3044:\u56FA[\u304B\u305F]\u3044:hard
\u304D\u3064\u3044:\u304D\u3064\u3044:tight
\u7A7A\u6C17:\u7A7A\u6C17[\u304F\u3046\u304D]:air
\u5177\u5408:\u5177\u5408[\u3050\u3042\u3044]:condition
\u9055\u3044:\u9055[\u3061\u304C]\u3044:difference
\u304A\u59C9\u3061\u3083\u3093:\u304A \u59C9[\u306D\u3048]\u3061\u3083\u3093:older sister (informal)
\u3061\u306A\u307F\u306B:\u3061\u306A\u307F\u306B:by the way
\u601D\u3044\u51FA:\u601D[\u304A\u3082]\u3044\u51FA[\u3067]:memory
\u5185\u5BB9:\u5185\u5BB9[\u306A\u3044\u3088\u3046]:contents
\u306A\u3081\u308B:\u306A\u3081\u308B:"to look down on (someone), to make fun of"
\u663C:\u663C[\u3072\u308B]:"daytime, midday"
\u53BB\u5E74:\u53BB\u5E74[\u304D\u3087\u306D\u3093]:last year
\u6E29\u304B\u3044:\u6E29[\u3042\u305F\u305F]\u304B\u3044:warm
\u304D\u3063\u304B\u3051:\u304D\u3063\u304B\u3051:chance
\u624B\u524D:\u624B\u524D[\u3066\u307E\u3048]:"before oneself, in front of one"
\u30D0\u30A4\u30C8:\u30D0\u30A4\u30C8:part-time job
\u5E74\u751F:\u5E74\u751F[\u306D\u3093\u305B\u3044]:grade (school year)
\u6CF3\u3050:\u6CF3[\u304A\u3088]\u3050:to swim
\u7740\u66FF\u3048\u308B:\u7740\u66FF[\u304D\u304C]\u3048\u308B:change clothes
\u7537\u5B50:\u7537\u5B50[\u3060\u3093\u3057]:boy
\u6C34\u7740:\u6C34\u7740[\u307F\u305A\u304E]:swimsuit
\u30BB\u30EA\u30D5:\u30BB\u30EA\u30D5:"speech, words"
\u5C11\u5973:\u5C11\u5973[\u3057\u3087\u3046\u3058\u3087]:little girl
\u4F1A\u8A71:\u4F1A\u8A71[\u304B\u3044\u308F]:conversation
\u5909\u614B:\u5909\u614B[\u3078\u3093\u305F\u3044]:pervert
\u8863\u88C5:\u8863\u88C5[\u3044\u3057\u3087\u3046]:clothing
\u52DD\u3061:\u52DD[\u304B]\u3061:victory
\u604B\u611B:\u604B\u611B[\u308C\u3093\u3042\u3044]:love
\u304A\u5F01\u5F53:\u304A \u5F01\u5F53[\u3079\u3093\u3068\u3046]:box lunch
\u5236\u670D:\u5236\u670D[\u305B\u3044\u3075\u304F]:uniform (clothing)
\u958B\u59CB:\u958B\u59CB[\u304B\u3044\u3057]:start
\u7981\u6B62:\u7981\u6B62[\u304D\u3093\u3057]:prohibited
\u4F53\u8ABF:\u4F53\u8ABF[\u305F\u3044\u3061\u3087\u3046]:body condition
\u544A\u767D:\u544A\u767D[\u3053\u304F\u306F\u304F]:confession
\u3069\u304D\u3069\u304D:\u3069\u304D\u3069\u304D:to beat fast (of one's heart) in excitement
\u307E\u3057:\u307E\u3057:better
\u4E2D\u5B66:\u4E2D\u5B66[\u3061\u3085\u3046\u304C\u304F]:middle school
\u7528\u4E8B:\u7528\u4E8B[\u3088\u3046\u3058]:errand
\u6CCA\u307E\u308B:\u6CCA[\u3068]\u307E\u308B:to stay overnight
\u30AC\u30AD:\u30AC\u30AD:"brat (small, annoying kid)"
\u5168\u529B:\u5168\u529B[\u305C\u3093\u308A\u3087\u304F]:"all one's power (strength, energy, efforts)"
\u6307:\u6307[\u3086\u3073]:finger
\u8A71\u3057\u639B\u3051\u308B:\u8A71[\u306F\u306A]\u3057 \u639B[\u304B]\u3051\u308B:to start a conversation
\u53CD\u5FDC:\u53CD\u5FDC[\u306F\u3093\u306E\u3046]:"reaction, response"
\u6C17\u5408\u3044:\u6C17\u5408[\u304D\u3042]\u3044:"(fighting) spirit, motivation"
\u8A66\u9A13:\u8A66\u9A13[\u3057\u3051\u3093]:test
\u3084\u308B\u6C17:\u3084\u308B \u6C17[\u304D]:"willingness (to do something), eagerness"
\u52C7\u6C17:\u52C7\u6C17[\u3086\u3046\u304D]:courage
\u7A74:\u7A74[\u3042\u306A]:hole
\u3042\u308A\u304C\u305F\u3044:\u3042\u308A\u304C\u305F\u3044:appreciated
\u79D2:\u79D2[\u3073\u3087\u3046]:second (time)
\u5ECA\u4E0B:\u5ECA\u4E0B[\u308D\u3046\u304B]:hallway
\u5149:\u5149[\u3072\u304B\u308A]:light
\u307E\u3055\u306B:\u307E\u3055\u306B:"surely, certainly"
\u521D:\u521D[\u306F\u3064]:first
\u7D42\u4E86:\u7D42\u4E86[\u3057\u3085\u3046\u308A\u3087\u3046]:"end, termination"
\u907F\u3051\u308B:\u907F[\u3055]\u3051\u308B:to avoid
\u653B\u6483:\u653B\u6483[\u3053\u3046\u3052\u304D]:attack
\u80CC\u4E2D:\u80CC\u4E2D[\u305B\u306A\u304B]:back (human body)
\u53CB\u4EBA:\u53CB\u4EBA[\u3086\u3046\u3058\u3093]:friend
\u6027\u683C:\u6027\u683C[\u305B\u3044\u304B\u304F]:personality
\u5E83\u3044:\u5E83[\u3072\u308D]\u3044:"wide, spacious"
\u624B\u4F1D\u3044:\u624B\u4F1D[\u3066\u3064\u3060]\u3044:"help, assistance"
\u904A\u5712\u5730:\u904A\u5712\u5730[\u3086\u3046\u3048\u3093\u3061]:amusement park
\u5F85\u3061\u5408\u308F\u305B:\u5F85[\u307E]\u3061 \u5408[\u3042]\u308F\u305B:appointment
\u90F5\u4FBF\u5C40:\u90F5\u4FBF\u5C40[\u3086\u3046\u3073\u3093\u304D\u3087\u304F]:post office
\u5F15\u3063\u8D8A\u3059:\u5F15[\u3072]\u3063\u8D8A[\u3053]\u3059:to move (house)
\u6559\u79D1\u66F8:\u6559\u79D1\u66F8[\u304D\u3087\u3046\u304B\u3057\u3087]:textbook
\u6587\u623F\u5177:\u6587\u623F\u5177[\u3076\u3093\u307C\u3046\u3050]:stationary
\u5929\u4E95:\u5929\u4E95[\u3066\u3093\u3058\u3087\u3046]:ceiling
\u6295\u3052\u308B:\u6295[\u306A]\u3052\u308B:to throw
\u98FD\u304D\u308B:\u98FD[\u3042]\u304D\u308B:"to get tired of, to lose interest in"
\u5B8C\u4E86:\u5B8C\u4E86[\u304B\u3093\u308A\u3087\u3046]:"completion, conclusion"
\u904E\u53BB:\u904E\u53BB[\u304B\u3053]:"the past, bygone days"
\u89E6\u308C\u308B:\u89E6[\u3075]\u308C\u308B:"to touch, to feel"
\u5FAE\u5999:\u5FAE\u5999[\u3073\u307F\u3087\u3046]:"difficult, complex, subtle"
\u8A73\u3057\u3044:\u8A73[\u304F\u308F]\u3057\u3044:detailed
\u6D88\u3059:\u6D88[\u3051]\u3059:"to extinguish, to put out"
\u307E\u3068\u3081\u308B:\u307E\u3068\u3081\u308B:to summarize
\u6BD4\u3079\u308B:\u6BD4[\u304F\u3089]\u3079\u308B:to compare
`;function E(a){for(var e=a.length,t;e!==0;)t=Math.floor(Math.random()*e),e--,[a[e],a[t]]=[a[t],a[e]];return a}function y(a,e){return new Promise(t=>{e.onComplete=t,a.tweens.add(e)})}function X(a){return new Promise(e=>setTimeout(e,a))}let g=[];function z(){g.length===0&&(g=L())}function L(){const a=A.split(`
`),e=[];for(const t of a){const[n,s,i]=t.split(":");e.push({id:`${n}:${s}`,english:i,kanji:n,hiragana:s})}return e}const k=3,S=48;class V{constructor(e){o(this,"level",1);o(this,"learningWords",[]);o(this,"buttonWords",[]);o(this,"nextQuestionIndex",0);o(this,"correctWordIndex",0);o(this,"corrects",0);o(this,"mistakes",0);this.level=e||1,z();const t=Math.floor(g.length/S),n=(e-1)*t;if(this.learningWords=g.slice(n,n+t),E(this.learningWords),this.learningWords.length<=k)throw new Error("popNextWord will have an infinite loop");this.fillButtonWords()}popNextWord(){let e;for(;e=this.learningWords[this.nextQuestionIndex],this.nextQuestionIndex++,this.nextQuestionIndex>=this.learningWords.length&&(this.nextQuestionIndex=0),this.buttonWords.indexOf(e)>=0;);return this.correctWordIndex=Math.floor(Math.random()*this.buttonWords.length),e}fillButtonWords(){for(;this.buttonWords.length<k;){const e=this.popNextWord();this.buttonWords.push(e)}}getAnswerWord(){return this.buttonWords[this.correctWordIndex]}remainingWords(){return this.learningWords.length-this.corrects}totalWords(){return this.learningWords.length}tryAnswer(e){if(e===this.correctWordIndex){this.corrects++;const t=this.popNextWord();this.buttonWords[e]=t;let n=!1;return this.remainingWords()<=0&&(n=!0),this.fillButtonWords(),{success:!0,gameOver:n}}else return this.mistakes++,{success:!1,gameOver:!1}}score(){return this.corrects-this.mistakes}}function W(a){return"best-speed-"+a}const b={bestSpeed:{get(a){const e=localStorage.getItem(W(a));if(e)return+e},set(a,e){localStorage.setItem(W(a),e.toString())}}},T="MenuScene";class j extends Phaser.Scene{constructor(){super({key:T});o(this,"startKey");o(this,"background",new v);o(this,"stuff",[this.background]);o(this,"buttons")}preload(){this.stuff.map(e=>e.preload(this)),this.startKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),this.startKey.isDown=!1,this.load.image("particle",C),this.load.audio("gasp",w)}create(){this.buttons=[],this.stuff.map(n=>n.create(this)),this.add.text(l/2,r/30,"Nihongo Shooter",{fontSize:.05*r+"px",fontFamily:"Helvetica",align:"center"}).setOrigin(.5);const t=6;for(let n=0;n<S;n++){const s=n+1,i=new f(this);i.width=l*.115,b.bestSpeed.get(s)&&i.setRestColor(10083737),this.buttons.push(i),i.setText(""+s);const h=(1.5+1.4*(n%t))*l/10,u=(1.5+1*Math.floor(n/t))*r/10;i.setXY(h,u),i.onPress=()=>{this.sound.play("gasp"),this.scene.start("GameScene",{level:s})}}}update(){this.stuff.map(e=>{e.update&&e.update(this)}),this.startKey.isDown}}var Y="./assets/ship-01.02fb062b.png",U="./assets/ship-01-thrust.25de50ff.png",$="./assets/rays.f5dead39.png";class J{constructor(){o(this,"rays");o(this,"container")}preload(e){e.load.spritesheet("rays-sheet",$,{frameWidth:64,frameHeight:224,margin:0,spacing:0})}create(e){e.anims.create({key:"rays-charging",frames:e.anims.generateFrameNumbers("rays-sheet",{frames:[0,1,2,3,4]}),frameRate:15,repeat:-1}),e.anims.create({key:"rays-fire",frames:e.anims.generateFrameNumbers("rays-sheet",{frames:[4,8,9,10]}),frameRate:15,repeat:0,hideOnComplete:!0}),this.rays=[e.add.sprite(0,100,"rays"),e.add.sprite(0,230,"rays"),e.add.sprite(0,428,"rays")],this.container=e.add.container(0,0,this.rays),this.container.scale=r/600,this.container.setDepth(5),this.rays.map(t=>{t.setRotation(Math.PI),t.setVisible(!1)})}setX(e){this.container.x=e}fire(){this.rays.map(e=>{e.setVisible(!0)}),this.rays.map(e=>e.play("rays-fire"))}fireBlocked(){this.rays.map(e=>e.setVisible(!0)),this.rays[0].setVisible(!1),this.rays[1].setVisible(!1),this.rays.map(e=>e.play("rays-fire"))}}var Q="./assets/explosion.89d24dce.png";const d={sheet:"explosion-sheet",animBoom:"boom",animShield:"shield"};class _{constructor(){o(this,"sprite");o(this,"text");o(this,"scene")}preload(e){this.scene=e,e.load.spritesheet(d.sheet,Q,{frameWidth:32,frameHeight:32,margin:0,spacing:0})}create(e){e.anims.create({key:d.animBoom,frames:e.anims.generateFrameNumbers(d.sheet,{start:0,end:7}),frameRate:20,repeat:0,hideOnComplete:!0}),e.anims.create({key:d.animShield,frames:e.anims.generateFrameNumbers(d.sheet,{frames:[3,6,7]}),frameRate:15,repeat:0,hideOnComplete:!0}),this.sprite=e.add.sprite(100,100,d.animBoom),this.sprite.scale=2.5*l/300,this.sprite.alpha=.8,this.sprite.setVisible(!1),this.sprite.depth=20,this.text=e.add.text(0,0,"\u9055"),this.text.setFontSize(r*.12),this.text.setAlign("center"),this.text.setOrigin(.5),this.text.setColor("#6666ff"),this.text.depth=20,this.text.setVisible(!1)}shield(){this.text.setVisible(!0),this.text.scale=1,this.text.alpha=1,y(this.scene,{targets:this.text,scale:2,alpha:0,duration:300})}fire(){this.sprite.setVisible(!0),this.sprite.clearTint(),this.sprite.play(d.animBoom)}setXY(e,t){this.sprite.x=e,this.sprite.y=t,this.text.x=e,this.text.y=t}}const B="LevelDoneScene";class Z extends Phaser.Scene{constructor(){super({key:B});o(this,"levelDoneData");o(this,"background",new v);o(this,"buttons");o(this,"stuff",[this.background])}init(e){console.log("props",e),this.levelDoneData=e}preload(){this.stuff.map(e=>e.preload(this)),this.load.audio("gasp",w)}create(){this.buttons=[],this.stuff.map(u=>u.create(this));const e=`LEVEL ${this.levelDoneData.level}`,t=this.add.text(l/2,.05*r,e,{fontSize:.06*r+"px",fontFamily:"Helvetica",align:"center"});t.setOrigin(.5);const n=["Hits: "+this.levelDoneData.corrects,"Misses: "+this.levelDoneData.mistakes,`In: ${this.levelDoneData.duration} seconds`],s=b.bestSpeed.get(this.levelDoneData.level);let i=!1;this.levelDoneData.mistakes==0&&(!s||s&&this.levelDoneData.duration<s)&&(b.bestSpeed.set(this.levelDoneData.level,this.levelDoneData.duration),i=!0),i?n.push("New best speed!"):s?n.push(`Best: ${s} seconds`):n.push(`Get zero misses
to beat the level`);for(const[u,I]of n.entries())this.add.text(l/8,(20+u*7)*r/100,I,{fontSize:.04*r+"px",fontFamily:"Helvetica"}),t.setOrigin(.5);const h=new f(this);this.buttons.push(h),h.setText("COOL"),h.setXY(this.game.scale.width/2,this.game.scale.height*.8),h.onPress=()=>{this.scene.start(T)}}update(){this.stuff.map(e=>{e.update&&e.update(this)})}}class ee{constructor(){o(this,"rect")}preload(e){}create(e){this.rect=e.add.rectangle(0,0,l,r*.03),this.rect.setOrigin(0,0),this.rect.setFillStyle(13369344),this.rect.depth=10}setPercent(e){this.rect.displayWidth=l*e/100}}var te="./assets/enemies.75c6c4b6.png";const c={sheet:"enemies-sheet",animGreen:"agreen",animBlue:"ablue",animRed:"ared"};class ne{constructor(){o(this,"sprite")}preload(e){e.load.spritesheet(c.sheet,te,{frameWidth:48,frameHeight:48,margin:0,spacing:0})}create(e){e.anims.create({key:c.animGreen,frames:e.anims.generateFrameNumbers(c.sheet,{start:0,end:4}),frameRate:1,repeat:-1}),e.anims.create({key:c.animBlue,frames:e.anims.generateFrameNumbers(c.sheet,{start:5,end:8}),frameRate:1,repeat:-1}),e.anims.create({key:c.animRed,frames:e.anims.generateFrameNumbers(c.sheet,{start:10,end:13}),frameRate:1,repeat:-1}),this.sprite=e.add.sprite(300,300,c.animGreen),this.sprite.scale=2.5*l/100,this.sprite.play(c.animGreen),this.sprite.depth=1,y(e,{targets:this.sprite,x:"+="+l/2,duration:8e3,repeat:-1,yoyo:!0}),y(e,{targets:this.sprite,y:"+="+r*.1,duration:4500,repeat:-1,yoyo:!0})}chooseEnemy(e){const t=[c.animGreen,c.animBlue,c.animRed];this.sprite.play(t[e%t.length])}setXY(e,t){this.sprite.x=e,this.sprite.y=t}}var oe="./assets/explosion2.ea4ac2f3.png";const p={sheet:"explosion2-sheet",animBoom:"boom2"};class se{constructor(){o(this,"sprites")}preload(e){e.load.spritesheet(p.sheet,oe,{frameWidth:80,frameHeight:80,margin:0,spacing:0})}create(e){this.sprites=[],e.anims.create({key:p.animBoom,frames:e.anims.generateFrameNumbers(p.sheet,{start:0,end:6}),frameRate:20,repeat:2,hideOnComplete:!0});for(let t=0;t<10;t++){const n=e.add.sprite(0,0,p.animBoom);this.sprites.push(n),n.scale=2.5*l/300,n.alpha=.8,n.x=Math.random()*l,n.y=Math.random()*r*.5,n.setVisible(!1),n.depth=20}}async fire(){const e=[];for(const t of this.sprites){const n=(async()=>{await X(Math.random()*1e3),t.setVisible(!0),t.play(p.animBoom)})();e.push(n)}return Promise.all(e)}}const ie="GameScene",{LEFT:ae,RIGHT:re,UP:le,ONE:he,TWO:ce,THREE:de}=Phaser.Input.Keyboard.KeyCodes,ue={left:ae,right:re,up:le,one:he,two:ce,three:de};class pe extends Phaser.Scene{constructor(){super({key:ie});o(this,"level",1);o(this,"ship");o(this,"buttons");o(this,"definitionBox");o(this,"wordsGame");o(this,"scoreText");o(this,"rays",new J);o(this,"explosion",new _);o(this,"manyExplosions",new se);o(this,"background",new v);o(this,"hpBar",new ee);o(this,"enemy",new ne);o(this,"stuff",[this.rays,this.explosion,this.background,this.hpBar,this.enemy,this.manyExplosions]);o(this,"startTime");o(this,"isGameOver",!1);o(this,"keys")}init(e){this.level=e.level||1,this.startTime=Date.now()}preload(){console.log("level",this.level),this.stuff.map(e=>e.preload(this)),this.wordsGame=new V(this.level),this.buttons=[],this.isGameOver=!1,this.load.spritesheet("ship-sheet",Y,{frameWidth:48,frameHeight:48,margin:0,spacing:0}),this.load.spritesheet("ship-thrust-sheet",U,{frameWidth:16,frameHeight:10,margin:0,spacing:0}),this.load.audio("gasp",w)}create(){this.stuff.map(n=>n.create(this));for(const n of this.wordsGame.buttonWords){const s=new f(this);this.buttons.push(s)}this.definitionBox=new f(this),this.definitionBox.setXY(this.game.scale.width/2,.3*this.game.scale.height),this.scoreText=this.add.text(0,0,"HP: 100",{fontSize:3*r/100+"px",fontFamily:"Helvetica"}),this.scoreText.depth=11,this.enemy.chooseEnemy(this.level),this.updateWordButtons(),this.anims.create({key:"player-idle",frames:this.anims.generateFrameNumbers("ship-sheet",{frames:[0,1,0,3,4,0]}),frameRate:5,repeat:-1});const e=this.add.sprite(0,0,"ship");e.play("player-idle"),this.anims.create({key:"thrust-idle",frames:this.anims.generateFrameNumbers("ship-thrust-sheet",{frames:[0,1]}),frameRate:4,repeat:-1});const t=this.add.sprite(0,20,"ship-thrust");t.play("thrust-idle"),this.ship=this.add.container(0,0,[e,t]),this.ship.x=l/2,this.ship.y=r*.86,this.ship.scale=r/600,this.keys=this.input.keyboard.addKeys(ue)}update(){this.isGameOver||(this.stuff.map(e=>{e.update&&e.update(this)}),(Phaser.Input.Keyboard.JustDown(this.keys.left)||Phaser.Input.Keyboard.JustDown(this.keys.one))&&this.guessAnswer(0),(Phaser.Input.Keyboard.JustDown(this.keys.up)||Phaser.Input.Keyboard.JustDown(this.keys.two))&&this.guessAnswer(1),(Phaser.Input.Keyboard.JustDown(this.keys.right)||Phaser.Input.Keyboard.JustDown(this.keys.three))&&this.guessAnswer(2))}enemyX(e){const t=this.game.scale.width;return[t*.25,t*.5,t*.75][e]}enemyY(e){return(57+e%2*14)*r/100}async guessAnswer(e){if(this.isGameOver)return;const t=this.wordsGame.tryAnswer(e);if(this.ship.setX(this.enemyX(e)),this.rays.setX(this.enemyX(e)),this.explosion.setXY(this.enemyX(e),this.enemyY(e)),t.success?(this.rays.fire(),this.explosion.fire()):(this.rays.fireBlocked(),this.explosion.shield()),t.gameOver){this.isGameOver=!0;const i={duration:(Date.now()-this.startTime)/1e3,mistakes:this.wordsGame.mistakes,corrects:this.wordsGame.corrects,level:this.level};console.log("level over",i);try{await this.manyExplosions.fire()}catch(h){console.warn("strange error",h)}this.scene.start(B,i)}else this.updateWordButtons()}updateWordButtons(){for(const[n,s]of this.wordsGame.buttonWords.entries()){const i=this.buttons[n];i.setText(s.kanji+`
`+s.hiragana),i.setXY(this.enemyX(n),this.enemyY(n)),i.onPress=()=>{console.log("press",n,s.id),this.guessAnswer(n)}}const e=this.wordsGame.getAnswerWord();this.definitionBox.setText(e.english);const t=100*this.wordsGame.remainingWords()/this.wordsGame.totalWords();this.hpBar.setPercent(t),this.scoreText.setText("HP: "+this.wordsGame.remainingWords()*10)}}const me={title:"Nihongo Shooter",url:"https://github.com/ubershmekel/nihongo-shooter",version:"2.0",width:l,height:r,type:Phaser.AUTO,parent:"app",scene:[j,pe,Z],input:{keyboard:!0},physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}},backgroundColor:"#000020",render:{pixelArt:!1,antialias:!0},scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,fullscreenTarget:"app",expandParent:!1}};class fe extends Phaser.Game{constructor(e){super(e)}}window.toggleFullscreen=()=>{var a;document.exitFullscreen?window._game.scale.toggleFullscreen():(a=document.getElementById("app"))==null||a.scrollIntoView()};window.addEventListener("load",()=>{window._game=new fe(me)});
