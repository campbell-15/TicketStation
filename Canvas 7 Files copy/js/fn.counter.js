SEMICOLON.Core.getVars.fn.counter=n=>{const t=SEMICOLON.Core;t.loadJS({file:"plugins.counter.js",id:"canvas-counter-js",jsFolder:!0}),t.isFuncTrue(()=>jQuery().countTo).then(e=>!!e&&(t.initFunction({class:"has-plugin-counter",event:"pluginCounterReady"}),(n=t.getSelector(n)).length<1||void n.each(function(){let t=jQuery(this),e=t.find("span").attr("data-comma"),n=t.find("span").attr("data-sep")||",",a=t.find("span").attr("data-places")||3,s={comma:e,sep:n,places:Number(a)};if(t.hasClass("counter-instant"))CanvasRunCounter(t,s);else{let e=new IntersectionObserver((e,n)=>{e.forEach(e=>{e.isIntersecting&&(CanvasRunCounter(t,s),n.unobserve(e.target))})},{rootMargin:"-50px"});e.observe(t[0])}})))};const CanvasRunCounter=(n,a)=>{if("true"==a.comma){let e="\\B(?=(\\d{"+a.places+"})+(?!\\d))",t=new RegExp(e,"g");n.find("span").countTo({formatter:(e,n)=>e=(e=e.toFixed(n.decimals)).replace(t,a.sep)})}else n.find("span").countTo()};