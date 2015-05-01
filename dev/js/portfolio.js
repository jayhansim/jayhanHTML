(function(e){"use strict";e.jribbble={};var t=function(t,s){e.ajax({type:"GET",url:"http://api.dribbble.com"+t,data:s[1]||{},dataType:"jsonp",success:function(e){e===undefined?s[0]({error:!0}):s[0](e)}})},s={getShotById:"/shots/$/",getReboundsOfShot:"/shots/$/rebounds/",getShotsByList:"/shots/$/",getShotsByPlayerId:"/players/$/shots/",getShotsThatPlayerFollows:"/players/$/shots/following/",getPlayerById:"/players/$/",getPlayerFollowers:"/players/$/followers/",getPlayerFollowing:"/players/$/following/",getPlayerDraftees:"/players/$/draftees/",getCommentsOfShot:"/shots/$/comments/",getShotsThatPlayerLikes:"/players/$/shots/likes/"},o=function(e){return function(){var s=[].slice.call(arguments),o=e.replace("$",s.shift());t(o,s)}};for(var r in s)e.jribbble[r]=o(s[r])})(jQuery,window,document);

$(document).ready(function(){

	$.jribbble.getShotsByPlayerId('jayhan', function(playerShots){
		var html = [];

		$.each(playerShots.shots, function (i, shot){
			html.push('<div class="shot">');
			html.push('<img src="' + shot.image_url + '" alt="' + shot.title + '">');
			html.push('<a href="' + shot.url + '" target="_blank"><h3 class="h4">' + shot.title + '</h3></a>');
			html.push('</div>');
		});

		$('#dribbble').html(html.join(''));
		$('.portfolio__loading').fadeOut();
	}, {page: 1, per_page: 12});

});