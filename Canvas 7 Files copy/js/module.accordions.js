export default function(e){const s=SEMICOLON.Core;if(s.initFunction({class:"has-plugin-accordions",event:"pluginAccordionsReady"}),(e=s.getSelector(e)).length<1)return!0;e.each(function(){let o=jQuery(this),e=o.attr("data-state"),t=o.attr("data-active")||1,a=o.attr("data-active-class")||"",n=o.attr("data-collapsible")||"false",i=location.hash,c;t=Number(t)-1,void 0!==i&&""!=i&&(c=o.find(".accordion-header"+i),0<c.length&&(t=c.index()/2)),o.find(".accordion-content").hide(),"closed"!=e&&o.find(".accordion-header:eq("+Number(t)+")").addClass("accordion-active "+a).next().show(),o.find(".accordion-header").off("click").on("click",function(){let e=jQuery(this);return e.next().is(":hidden")?(o.find(".accordion-header").removeClass("accordion-active "+a).next().slideUp("normal"),e.toggleClass("accordion-active "+a,!0).next().stop(!0,!0).slideDown("normal",function(){(jQuery("body").hasClass("device-sm")||jQuery("body").hasClass("device-xs"))&&o.hasClass("scroll-on-open")&&jQuery("html,body").stop(!0,!0).animate({scrollTop:e.offset().top-(SEMICOLON.initialize.topScrollOffset()-40)},800,"easeOutQuad"),s.runContainerModules(e.next()[0])})):"true"==n&&e.toggleClass("accordion-active "+a,!1).next().stop(!0,!0).slideUp("normal"),!1})})}