
Parse.initialize("6Wjb9qN60rilr4LKChBlxt1lNh1eMCI8InP31mPZ", "icCZ3TUR1UGNrgbZcFWeQ9N1WrrMdY0uEG1KFDJK");

$(document).ready(function() {
	headerAnimation();

});

function headerAnimation() {
	var controller = $.superscrollorama();
	controller.addTween('#scrollPoint',
	    (new TimelineLite())
	    .append([
	      // Move Entire Logo
	      TweenMax.fromTo($('#tsLogo'), .5,
	        {
	        	css:{ top: '-29px' },
	        	ease:Quad.easeInOut,
	        	immediateRender:true
	        },
	        {
	        	css:{ top: '-75px' },
	        	ease:Quad.easeInOut
	        }),
	      // Move Logo Background
	      TweenMax.fromTo($('#logoDiamond'), .5,
	        {
	        	css:{ scale: 1 },
	        	ease:Expo.easeOut,
	        	immediateRender:true},
	        {
	        	css:{ scale: .65 },
	        	ease:Quad.easeInOut
	        }),

	      // Move Inside Logo Graphic
	      TweenMax.fromTo($('#logoBig'), .25,
	        {
	        	css:{opacity: 1},
	        	immediateRender:true
	        },
	        {
	        	css:{opacity: 0}
	        }),
	      // Move TS
	      TweenMax.fromTo($('#logoSmall'), .4,
	        {
	        	css:{ opacity: 0 },
	        	ease:Expo.easeInOut,
	        	immediateRender:true},
	        {
	        	css:{ opacity: 1 },
	        	ease:Expo.easeInOut, delay:.15
	        })
	    ]),
	    0,
	  	0
	);
};

