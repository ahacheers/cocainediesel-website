const news = [
	{
		title: '0.0.0.1',
		date: 'Nov 8, 2018',
		changes: ["wow it's finally out (linux only)"],
	},
	{
		title: '0.0.0.2',
		date: 'Nov 8, 2018',
		changes: ['fixed missing sdl dll'],
	},
	{
		title: '0.0.0.3',
		date: 'Nov 8, 2018',
		changes: ['this is the real deal'],
	},
	{
		title: '0.0.0.4',
		date: 'Nov 8, 2018',
		changes: [
			'was some bugfixe',
			'fixed the linux build',
			"i don't remember what else went in",
		],
	},
	{
		title: '0.0.0.5',
		date: 'Nov 9, 2018',
		changes: ['made some assets smaller and fixed a launcher bug iirc'],
	},
	{
		title: '0.0.0.6',
		date: 'Nov 9, 2018',
		changes: [
			'no team blocking and team knockback',
			'added moto maps',
			'normalize health to 100',
			'fixed the texture bug revealed by 0.0.0.5',
		],
	},
	{
		title: '0.0.0.7',
		date: 'Nov 9, 2018',
		changes: ['chat fix'],
	},
	{
		title: '0.0.1.0',
		date: 'Nov 10, 2018',
		changes: [
			'new hud',
			'new grenades',
			'new menu background',
			'fixed lava texture',
			'readded missing sounds',
			'nuked a bunch of trash',
		],
	},
	{
		title: '0.0.1.1',
		date: 'Nov 11, 2018',
		changes: [
			'fixed lots of ui shit',
			'fixed server browser',
			'drained the swamp some more',
		],
	},
	{
		title: '0.0.1.2',
		date: 'Nov 12, 2018',
		changes: [
			'fresh weapon icons',
			'upped the font game',
			'removed mg and strong gb from shop',
			'more ui fixes',
			'daily trash removal',
		],
	},
	{
		title: '0.0.1.3',
		date: 'Nov 13, 2018',
		changes: [
			'increased max name length',
			'dropped snd_qf and added hrtf positional sound',
			'added option to disable bicubic filtering',
			'fixed obituaries misalignment',
			'remade levelshots',
			'removed delay on kill command',
			'removed chat beep',
			'removed more unused crap',
		],
	},
	{
		title: '0.0.1.4',
		date: 'Nov 13, 2018',
		changes: [
			'removed stun',
			'better player shadows',
			'removed pointless vsays',
			'fixed drug fueled doppler effect',
			'fixed menu stuff',
			'fixed round timer',
			'added team colored gibs',
			'the trash purge is still on',
		],
	},
	{
		title: '0.0.1.5',
		date: 'Nov 14, 2018',
		changes: [
			'illuminati gibs trashed',
			'vsay shutup readded',
			'banding fixed. shit is smooth as lard now',
			'top secret lg beam cvars! expect more news soon!',
			'some callvotes stuff',
			'misc fixes',
			'ofc we removed more trash. like & subscribe',
		],
	},
	{
		title: '0.0.1.6',
		date: 'Nov 15, 2018',
		changes: [
			'put the shop back in esc menu',
			'added opengl 2 support',
			'fixed crosshair. now draws on top of other hud elements',
			'fixed server browser',
			'added new bomb site indicator',
		],
	},
	{
		title: '0.0.1.7',
		date: 'Nov 15, 2018',
		changes: ['bugfix release'],
	},
	{
		title: '0.0.1.8',
		date: 'Nov 15, 2018',
		changes: ['renamed maps', 'added carentan', 'removed emwarehouse'],
	},
	{
		title: '0.0.1.9',
		date: 'Nov 15, 2018',
		changes: ['fixed linux cgame/game modules'],
	},
	{
		title: 'new website',
		date: 'Nov 16, 2018',
		changes: [
			'canned the gif-laden 90s site for a leet 90s site built from scratch. posts are stored in json now despite mike and msc recommending a shitty markdown approach, but screw them. website is responsive so you can download the launcher on your android phone and use the claw grip technique to fail miserably. aha cheers! use tor!',
		],
		news: true,
	},
	{
		title: '0.0.1.10',
		date: 'Nov 16, 2018',
		changes: [
			'reverted walljump to warsow 2.1 state',
			'added cg_crosshair_size, cg_crosshair_size 0 for a dot',
			'removed randomness from rg spread',
			'stopped bombsite indicator from tricking people',
			'fixed glsl version detection for opengl2 losers',
			'game remembers your loadout',
			'removed reactors',
		],
	},
	{
		title: '0.0.1.11',
		date: 'Nov 17, 2018',
		changes: [
			'fixed rockets and plasma magic',
			'server tweaks that might help a bit or might fuck up the whole game',
			'explosion fx tweaks',
			'another GL2 fix',
			'rolled back to 2.1 lg beam',
			'just kidding cheers',
			"mike's a funny boi",
		],
	},
	{
		title: '0.0.1.12',
		date: 'Nov 21, 2018',
		changes: [
			'buffed rg',
			'slightly better lg/pg/blood effects',
			'rolled back yolo server changes',
			'fixed rockets going through the floor',
			'next level obituaries',
			'instagibbed instagib',
			'a lot of trash taking out',
		],
	},
	{
		title: '0.0.1.13',
		date: 'Nov 21, 2018',
		changes: [
			"you're now able change your weapons with mousewheel and set your name in the menu. wow!",
		],
	},
	{
		title: '0.0.1.14',
		date: 'Nov 22, 2018',
		changes: ['broken release. gg mike'],
	},
	{
		title: '0.0.1.15',
		date: 'Nov 22, 2018',
		changes: ['was toast too'],
	},
	{
		title: '0.0.1.16',
		date: 'Nov 22, 2018',
		changes: [
			'launcher retries failed downloads',
			"some menu tweaks that don't matter",
		],
	},
	{
		title: '0.0.1.18',
		date: 'Nov 24, 2018',
		changes: [
			'what happened to 0.0.1.17?',
			'tweaked rocket launcher model and muzzle flash',
			'site indicators are always visible and guide you to the site',
			'this is the first iteration and we plan to expand on this a lot!',
			'add match point/overtime to the HUD',
			'show dead players on the hud',
			"don't award bongos when people leave",
		],
	},
	{
		title: '0.0.1.19',
		date: 'Nov 27, 2018',
		changes: [
			'bomb site indicators should be more stable',
			'removed most awards and some hud text from bomb',
			'removed black bars when speccing a dead gay',
			'fixed one of the window resizing bugs',
			'try opengl 3.3 before falling back to 2.1 because it makes my life easier',
			'also segfaults at launch on linux heh',
		],
	},
	{
		title: '0.0.1.20',
		date: 'Nov 27, 2018',
		changes: ['fixed crash at startup'],
	},
	{
		title: '0.0.1.21',
		date: 'Nov 27, 2018',
		changes: [
			'better bomb carrier assignment',
			"don't bongo for less than 3 kills",
		],
	},
	{
		title: '0.0.1.22',
		date: 'Nov 28, 2018',
		changes: [
			'add instructions to bomb site indicators',
			'add a bomb indicator',
			'fix bomb spinning forever if it ever gets dropped',
			'fix map change crash',
		],
	},
	{
		title: '0.0.1.23',
		date: 'Nov 28, 2018',
		changes: ['fix startup crash on windows'],
	},
	{
		title: '0.0.1.24',
		date: 'Nov 29, 2018',
		changes: ['indicator tweaks'],
	},
	{
		title: '0.0.1.25',
		date: 'Nov 29, 2018',
		changes: [
			'shitty wip discord integration in the launcher',
			'install the game over https',
		],
	},
	{
		title: '0.0.1.26',
		date: 'Nov 29, 2018',
		changes: [
			'damage numbers when you shoot someone',
			'respawn sound removed',
			'nerfed chat protection penalty',
			"don't show who has the bomb on the scoreboard",
			'maybe fix alt + enter',
		],
	},
	{
		title: '0.0.1.27',
		date: 'Dec 1, 2018',
		changes: [
			'fix the console ^ bug, germans rejoice',
			'floating mini obituaries when you kill someone',
			"remove autoswitch when you run out of ammo cuz it's cheesy",
			'scr_conspeed 0 for instant console',
			'unspecified combat changes',
		],
	},
	{
		title: '0.0.1.28',
		date: 'Dec 1, 2018',
		changes: [
			'new lg model',
			'new weapon icons',
			'remove carrier frag messages',
			'remove scoreboard loadouts',
			'remove lg shooting through people',
			'diesel:// handler so you can click links to start the game. run the installer to get it, no need to uninstall',
			'fixed mini obituary color for beta players',
		],
	},
	{
		title: '0.0.1.29',
		date: 'Dec 2, 2018',
		changes: [
			'fix 0 ammo bug',
			'rename cg_teamALPHAcolor etc cvars to cg_ally* and cg_enemy*. so you need to set teamcolours again',
			'force models by default, shoot at pigs',
			"show 'press b to change loadout prompt'",
			'allow loadout changes during warmup',
		],
	},
	{
		title: '0.0.1.30',
		date: 'Dec 3, 2018',
		changes: [
			'cg_damageNumbers so you can turn them off',
			'fix future of europe after changing maps',
			'rename sites to A/B',
			'fix teamcolours while spectating',
			"add 'weapon #' command to select weapons by slot, now bound to 1-4 by default",
			'tweak explosive knockback a bit',
		],
	},
	{
		title: '0.0.1.31',
		date: 'Dec 4, 2018',
		changes: [
			'add a headless updater for servers',
			'fs_usehomedir 0 by default for servers',
			'remove coaches',
		],
	},
	{
		title: '0.0.1.32',
		date: 'Dec 4, 2018',
		changes: [
			"don't wait 5mins for first server heartbeat",
			'headlessupdater compatibility fixes for older Linux systems',
		],
	},
	{
		title: '0.0.1.33',
		date: 'Dec 13, 2018',
		changes: [
			'delete callvote announcer',
			'game should feel smoother now (this got added silently a few releases ago, people noticed so I guess it worked heh)',
			'RG nerfed',
			'LG tweaked',
			'fix bicubic lightmaps being offset slightly',
		],
	},
	{
		title: '0.0.1.34',
		date: 'Dec 14, 2018',
		changes: ['revert to 2.1 lg beam', 'paintball eb impact decal'],
	},
	{
		title: '0.0.1.35',
		date: 'Dec 16, 2018',
		changes: [
			'autoplant removed',
			'plant stops and you get the bomb back if you move too far away',
			'defuse resets if you move too far away',
			"corpses don't block projectiles",
		],
	},
	{
		title: '0.0.1.36',
		date: 'Dec 16, 2018',
		changes: [
			'fix explosions',
			'fix saving loadout in warmup',
			'remove callvote rebalance/restart/shuffle',
		],
	},
	{
		title: '0.0.1.37',
		date: 'Dec 19, 2018',
		changes: [
			'possible fix for terrible gl drivers',
			'show chat messages for longer',
			'fix callvotes with g_inactivity_maxtime 0',
			'plant time reduced to 5s',
		],
	},
	{
		title: '0.0.1.38',
		date: 'Dec 21, 2018',
		changes: [
			'fix LG sound bug',
			'try out a new visual style. we are rushing this out so we can try it and revert if it sucks. lots of stuff is ugly',
			'plant time 5s -> 1s, round time 30s -> 45s. nobody likes carrying the bomb in warsow, this should help remedy that',
			'play a noise when you start planting',
			'unspecified weapon changes',
			'remove the ugly grate on town A spot',
		],
	},
	{
		title: '0.0.1.39',
		date: 'Dec 21, 2018',
		changes: [
			'graphical fixes',
			'fix respawning if you change loadouts while dead in warmup',
		],
	},
	{
		title: '0.0.1.40',
		date: 'Dec 22, 2018',
		changes: ['lock down r_wall/floorcolor'],
	},
	{
		title: '0.0.1.41',
		date: 'Dec 23, 2018',
		changes: ['fog nerfed', 'callvotes expire after 20s, down from 40s'],
	},
	{
		title: '0.0.1.42',
		date: 'Dec 23, 2018',
		changes: ['fix projectile models', '50th cd release in 46 days'],
	},
	{
		title: '0.0.2.0 (#raceto2.2)',
		date: 'Jan 05, 2019',
		changes: [
			'This release took longer than usual thanks to Christmas and the 2.2 beta, and some larger changes. Unfortunately one project was unsuccessful and is not being shipped today, but we will get around to it.',
			"NEW UI. librocket is in the dumpster where it belongs. the new UI looks like the default skin for some developer tool because that's exactly what it is. it's not pretty yet and some non-critical stuff is missing",
			'SHOP HOTKEYS. b26 picks RL/LG/GL',
			"SOUND FIX? the code behind looping sounds has been simplified a little. this one is a little tricky because it doesn't seem to happen with low ping, e.g. when testing locally on my machine. fingers crossed things have improved",
			'VIDEO MODE CLEANUP. the vid_ cvars got merged into one vid_mode cvar. the video mode gets reset when you exit the game. the video mode code is a lot more robust overall, but you should still restart after changing resolution',
			'SCREENSHOTS HAVE BEEN MOVED from CD/base/screenshots to CD/screenshots. same with demos/demoavi/etc',
			'MOST DLLS REMOVED. cgame/angelwrap/ui are now just part of client.exe',
			'MANY CVARS REMOVED. I forgot the list I just went and deleted some easy ones',
			"160K LINES OF CODE. more than half of the qfusion codebase has been nuked. this is important and good because it's less work for us to maintain and makes it easier for hypothetical new contributors to get up to speed",
			'LOTS OF RANDOM STUFF. misc cleanup, updates should be smaller now, ...',
		],
	},
	{
		title: '0.0.2.1',
		date: 'Jan 05, 2019',
		changes: ['fix config path on Windows'],
	},
	{
		title: '0.0.2.2',
		date: 'Jan 05, 2019',
		changes: ['fix the game for opengl2', 'fix kukumene sky', 'mwaga iced'],
	},
	{
		title: '0.0.2.3',
		date: 'Jan 08, 2019',
		changes: [
			'sound bug fixed for real this time',
			'fix crosshair/killfeed after a map change',
			'menu_quick console spam removed',
			'new rocket visuals',
			'wider lg beam effect',
			'unspecified weapon changes',
		],
	},
	{
		title: '0.0.2.4',
		date: 'Jan 08, 2019',
		changes: [
			'fix menus on old AMD GPUs',
			'vsays nerfed',
			'EB damage nerfed from 37.5 to 35. should have zero impact on gameplay just nicer damage numbers',
		],
	},
	{
		title: '0.0.2.5',
		date: 'Jan 14, 2019',
		changes: [
			'this release is 100mb because you have to redownload all the maps',
			'fix menus on old AMD GPUs aha cheers',
			'less tacky rocket trails',
			'try to use the good GPU when you have two of them (like nv optimus)',
			"versioned builds. so the menu shows the correct version and doesn't show old servers etc",
			'remove a bunch of unused textures and fix texture issues on some maps, mainly dust/summer',
			"removed lighting from the engine/maps, we weren't using it so the game looks no different but it's smaller now",
		],
	},
	{
		title: '0.0.2.6',
		date: 'Jan 17, 2019',
		changes: [
			'team colours restricted to blue/red/green/yellow. we might add other colours if people want them but we want to keep the palette small',
			'team coloured explosions',
			'fix silent lg bug',
			'fix switching spec view',
			'allow teles during countdown',
			'remove colour correction',
		],
	},
	{
		title: '0.0.2.7',
		date: 'Jan 24, 2019',
		changes: [
			'welcome dexter and obani to the dev team',
			'unspecified weapon changes',
			'draw one damage number for RG shots so you can actually see how much you did',
			'remove team telefrags',
			'green 2.0 and yellow 2.0 team colours',
			'maybe fix dual GPU laptop setups',
			'ship uninstall.exe updates for maximum rq efficiency',
		],
	},
	{
		title: '0.0.2.8',
		date: 'Feb 04, 2019',
		changes: [
			'a new map, TRAIN, exclusive to Cocaine Diesel',
			'vsays buffed',
			'reduce max plant speed. should make accidental cancels happen less often',
			'gibs tweaks. explosive weapons gib more often now. more damage = more gibs',
			'drop support for 10 year old cpus. progress!',
			"new console. you can select and copy text in the input box. it has a scrollbar. potentially better non-english support. this paves the way to being able to copy text from the console too but qf's renderer can't handle it atm",
			'new sky renderer. simpler mapping, no more glitches, and faster than fastsky',
			'please ready up announcer nuked',
			'really ship new uninstall.exe',
		],
	},
	{
		title: '0.0.2.9',
		date: 'Feb 05, 2019',
		changes: [
			'moved the game to a cdn so you should get better download speeds',
			'console fixes',
		],
	},
	{
		title: '0.0.2.10',
		date: 'Feb 08, 2019',
		changes: [
			'new launcher design',
			'add a space after tab completing something',
			"drop cpu requirements to SSE3 (2006 intel, last year's AMD)",
		],
	},
	{
		title: '0.0.2.11',
		date: 'Mar 17, 2019',
		changes: [
			'gladiator beta release',
			'a new gametype, GLADIATOR, exclusive to cocaine diesel',
			'a new map, GLADIATOR, exclusive to cocaine diesel',
			'exciting environmental hazards for gladiator',
			'non-animated GLTF model support',
			'fix RG damage numbers',
		],
	},
	{
		title: '0.0.2.12',
		date: 'Mar 21, 2019',
		changes: ['gladiator fixes'],
	},
	{
		title: '0.0.2.13',
		date: 'Apr 06, 2019',
		changes: ['fix spec bug', 'fix arm.ogg console spam'],
	},
	{
		title: '0.0.2.14',
		date: 'Apr 11, 2019',
		changes: ['fix self knockback', 'fix gladiator weapon selection'],
	},
	{
		title: '0.0.2.15',
		date: 'May 15, 2019',
		changes: [
			'GB airdash, remove auto GB',
			'give topscorers a crown in gladiator so you know who to focus',
			'make spikes more deadly',
			'fix a couple crashes',
			'buff vsays',
		],
	},
	{
		title: '0.0.2.16',
		date: 'May 20, 2019',
		changes: ['surprise MG changes', 'below 140k LOC'],
	},
	{
		title: '0.0.2.17',
		date: 'May 21, 2019',
		changes: ['LG sound bug fixed for real', 'surprise R&S features'],
	},
	{
		title: '0.0.2.18',
		date: 'May 24, 2019',
		changes: ['buff fog on cocaine', 'compiler/library updates'],
	},
	{
		title: '0.0.2.19',
		date: 'July 18, 2019',
		changes: [
			"new animation engine. there shouldn't be any visible changes but the new engine is far simpler and will allow us to bring animations up to 2005 standard",
			"nuke iqm and add animated gltf support. again there shouldn't be any visible changes but this makes it much easier to change and add player models",
			'remove bigvic. we wanted to keep it but the original model is very messed up and none of the tools we tried could save it',
			'remove gb airdash. we want more recovery options in gladiator but airdash was too bad and has been removed',
			'remove gb gladi rounds',
			'buff gb damage and range',
			'keep bodies around on gib',
			'tweak some sounds',
			'remove angelscript from the client. it was used for mouse accel and stuff',
			'fix crash when adding democams',
			'update to vs2019/static crt for the launcher on windows',
			'update to gcc9 on linux',
		],
	},
	{
		title: '0.0.2.20',
		date: 'Jul 19, 2019',
		changes: [
			'static libstdc++ for libgame.so. fixes running the game on decade old linux',
		],
	},
	{
		title: '0.0.2.21',
		date: 'Jul 21, 2019',
		changes: [
			"bigvic is back from the dead courtesy of MSC's incredible dumpster diving talent (google.com)",
		],
	},
	{
		title: '0.0.2.22',
		date: 'Jul 31, 2019',
		changes: [
			"new text renderer based on MSDF. it adds text outlines so your pileexterminations don't get lost in the sky, and subpixel positioning so site indicators don't wobble as you move",
			'rng improvements. client effects rng is seeded every frame with entropy from a cryptographically secure psuedorandom number generator. now you can use obituaries to safely make purchases online',
			'this release marks the start of the big renderer overhaul, stay tuned for months of flaming in #neckbeards',
			'lots of misc cleanup. we are dancing with 135k loc but will not be able to break through until neko cleans his room',
		],
	},
	{
		title: '0.0.9.0',
		date: 'Oct 09, 2019',
		changes: [
			'this is a test build for the upcoming 0.1 release',
			'0.1 will be by far the largest cd release to date and marks the completion of several long term goals',
			'0.0.9.0 is a test release however and contains no changes',
			'you can watch me continue to not make any changes at twitch.tv/cocainediesel',
		],
	},
	{
		title: '0.0.9.1',
		date: 'Oct 10, 2019',
		changes: [
			"rename font atlases so the updater doesn't break the game. if you broke your game by updating to 0.0.9.0 you can repair it by updating again",
			'new weapon icons',
			'fix the hole in carfentanil (wip)',
			'fix beams',
			'fix weapon sounds',
			'fix corpse darkening',
			'lots of hud fixes',
		],
	},
	{
		title: '0.0.9.2',
		date: 'Oct 23, 2019',
		changes: [
			'replace the old loadout menu with a cash shop',
			'new particle engine and particle editor',
			'bring back gibs with extra gore',
			'add callvote HUD',
			'nuke quake style color tokens',
			'fix UI z ordering',
			'fix hp in gladiator',
			'fix lean animations',
			'fix fall sound',
			'fix the white border around the whole screen with MSAA enabled',
		],
	},
	{
		title: '0.0.9.3',
		date: 'Oct 27, 2019',
		changes: [
			"depth discontinuity outlines. they're not perfect yet but they should pick up outlines on curbs and stairs a bit better",
			'bomb silhouette visible through walls',
			'add mg bullet tracers and impact sparks',
			'new explosion effect',
			'fix scoreboard while speccing',
			'hud fixes',
		],
	},
	{
		title: '0.0.9.4',
		date: 'Oct 28, 2019',
		changes: [
			'faster and better quality outlines, thanks msc',
			'gunblade slashes in a wide arc and has been rebalanced accordingly',
		],
	},
	{
		title: '0.0.9.5',
		date: 'Nov 1, 2019',
		changes: [
			'better spatialisation for laser beam sounds',
			'add SFX configs',
			'add sound hotloading',
			'properly randomise spawn point selection',
			'remove game.dll and statically link the server',
		],
	},
	{
		title: '0.0.9.6',
		date: 'Jan 14, 2020',
		changes: [
			'add reloading',
			'add recoil',
			'fix firstperson lg sound',
			'fix menu music',
			'texture/material hotloading',
			'particle system improvements',
			'fix UI locking if you press escape with ingame menu and chat open',
			'lots of engine cleanup, below 100k LOC',
			'add bugs aha cheers thanks again',
		],
	},
	{
		title: '0.0.9.7',
		date: 'Jan 16, 2020',
		changes: ['many bug fixes'],
	},
	{
		title: '0.0.9.8',
		date: 'Jan 17, 2020',
		changes: ['fix weapnext crash', 'unspecified weapon changes'],
	},
	{
		title: '0.0.9.9',
		date: 'Jan 26, 2020',
		changes: [
			'fix crash with lots of players on the server',
			'rl/lg sound tweaks',
			'unspecified weapon changes',
			'weapon 5/6 bindable from the menus and add',
			'many little fixes',
		],
	},
	{
		title: '0.0.9.10',
		date: 'Jan 27, 2020',
		changes: [
			'lots of new sounds',
			'new skybox',
			'add rg tracers',
			'add rg/lg impact sparks',
			'fix blood',
			'unspecified weapon changes',
			'unspecified r&s changes',
		],
	},
	{
		title: '0.0.9.11',
		date: 'Feb 05, 2020',
		changes: [
			'add two new guns, 9mm and deagle',
			'other unspecified weapon changes',
			'add chat obituaries',
			'add soft rate limiting to crouch',
			'new cinematic typing experience',
			'louder bigvic jump sound',
			'move chaser hud out of the way of chat',
		],
	},
	{
		title: '0.0.9.12',
		date: 'Feb 06, 2020',
		changes: [
			'buff sounds',
			'add tracer anti-aliasing',
			'better semiauto ergonomics',
			'better damage number ergonomics',
			'fix grenade sounds',
			'unspecified weapon changes',
		],
	},
	{
		title: '0.0.9.13',
		date: 'Feb 07, 2020',
		changes: [
			'add sniper',
			'add lg beam sound',
			'remove warsow/em maps we never play',
			'fix certain sounds not playing',
			'fix zombies',
			'fix vanishing bomb silhouette',
			'fix some obituaries',
		],
	},
	{
		title: '0.0.9.14',
		date: 'Feb 09, 2020',
		changes: [
			'multi monitor support. we nuked sdl and replaced it with glfw, which lets us support multiple monitors properly and should also fix the other annoying window bugs',
			'show server info in the browser\\EOT',
			'obituary fun',
			'fix missing sniper equip sound',
		],
	},
	{
		title: '0.0.9.15',
		date: 'Feb 10, 2020',
		changes: ['unbreak alt-tab in fullscreen', 'readd borderless'],
	},
	{
		title: '0.0.9.16',
		date: 'Feb 10, 2020',
		changes: ['carfentanil upgrades', 'add wallbangs'],
	},
	{
		title: '0.0.9.17',
		date: 'Feb 13, 2020',
		changes: [
			'carfentanil upgrades',
			'nerf trombone',
			'make wallbangs do full damage',
			'railgun wallbangs',
		],
	},
	{
		title: '0.0.9.18',
		date: 'Feb 15, 2020',
		changes: [
			'dexter is back from warfork sabbatical',
			'show binds on weapon bar',
			'new gladiator arenas',
			'fast arena switching',
			'carfentanil upgrades',
			'day/night cycle',
		],
	},
	{
		title: '0.0.9.19',
		date: 'Feb 16, 2020',
		changes: ['fix joining servers'],
	},
	{
		title: '0.0.9.20',
		date: 'Feb 16, 2020',
		changes: [
			'carfentanil upgrades to distract from gladiator bugs',
			'fix disconnecting from servers',
			'fix lg sound',
			'resurrect postmatch scoreboard',
		],
	},
	{
		title: '0.0.9.21',
		date: 'Feb 16, 2020',
		changes: ['mariner 1 bugfix to stop gladiator server crashes'],
	},
	{
		title: '0.0.9.22',
		date: 'Feb 23, 2020',
		changes: [
			'fix maps dying after a match',
			'gladiator upgrades',
			'add assault rifle',
			'remove zoom from everything except sniper and ar, where it replaces dash/wj instead',
			'semi-auto ergonomics',
			'unspecified weapon changes',
			'fix showing outdated scoreboard in postmatch',
			'hide players in postmatch',
			'mwaga iced again',
		],
	},
	{
		title: '0.0.9.23',
		date: 'Feb 23, 2020',
		changes: [
			'new gladiator arenas',
			'add option to disable hotkey messages in the hud',
			'maybe fix chat weirdness',
			'unspecified weapon changes',
		],
	},
	{
		title: '0.0.9.24',
		date: 'Feb 27, 2020',
		changes: ['map fixes', 'faster outlines shader, thanks msc'],
	},
	{
		title: '0.0.9.25',
		date: 'Mar 19, 2020',
		changes: [
			'fix scope with msaa enabled',
			'add rifle',
			'readd predicted weapon switches',
			'disable zoom during gladiator preround',
			'bullet hisses',
			'auto join teams when joining a server',
			'ui improvements',
			'ui regressions',
			'unspecified weapon changes',
		],
	},
	{
		title: '0.0.9.26',
		date: 'Mar 24, 2020',
		changes: [
			'2020 menu theme',
			'fix crash when bomb explodes',
			'new rifle sound',
			'gltf hotloading',
			'reload progress bar until we have weapon models thanks again',
			'maybe fix demos',
			'maybe fix getting stuck on walls',
			'unspecified weapon changes',
		],
	},
	{
		title: '0.0.9.27',
		date: 'Apr 6, 2020',
		changes: [
			'fix gl crash',
			'add weapon models',
			'rearrangeable inventory',
			'unspecified weapon changes',
		],
	},
	{
		title: '0.0.9.28',
		date: 'Apr 12, 2020',
		changes: [
			"yolo vic's collision fixes. should fix corner shooting and getting stuck on walls",
			'optimise startup time, nearly -50% on a 6700k',
			'fix maxfps in demos',
		],
	},
	{
		title: '0.0.9.29',
		date: 'Apr 13, 2020',
		changes: ['fix the game on windows 7', 'fix the uninstaller'],
	},
	{
		title: '0.0.9.30',
		date: 'Apr 26, 2020',
		changes: [
			'fix gladiator',
			'palette swap',
			'add a new gun',
			'many demo playback fixes',
			'unspecified weapon changes',
			'include weapons in player silhouettes',
			'hardcode fov and remove crouch as a social experiment',
		],
	},
	{
		title: '0.0.9.31',
		date: 'Apr 26, 2020',
		changes: [
			'add a new map, krach',
			'fix planting',
			'fix site indicators',
			'ladder quality of life changes',
			'new explosion effect',
			'unspecified weapon changes',
		],
	},
	{
		title: '0.0.9.32',
		date: 'Apr 27, 2020',
		changes: ['new weapon skins', 'map fixes', 'chat window fixes'],
	},
	{
		title: '0.0.9.33',
		date: 'May 6, 2020',
		changes: [
			'add a new map, suicide',
			'fix scoreboard crash',
			'little hud tweaks',
		],
	},
	{
		title: '0.0.9.34',
		date: 'May 14, 2020',
		changes: [
			'add cosmetic headshots',
			'deterministic vsays',
			'nerf trombone',
			'unspecified weapon changes',
		],
	},
	{
		title: '0.0.9.35',
		date: 'May 18, 2020',
		changes: [
			'fix significant performance regression in the client and server',
			"fix she doesn't even go here vsay",
			'fix reload bar border',
			'add bugs related to vec3_t purge',
		],
	},
	{
		title: '0.0.9.36',
		date: 'May 18, 2020',
		changes: ['fix ladders', 'fix selfdmg crash', 'add m_invertY'],
	},
	{
		title: '0.0.9.37',
		date: 'May 20, 2020',
		changes: [
			'fix jumppads',
			'fix defuse',
			'fix memory leak',
			'unspecified weapon changes',
		],
	},
	{
		title: '0.0.9.38',
		date: 'Jul 22, 2020',
		changes: [
			'add bullet holes/explosion scorch marks etc',
			'add sprays',
			'add weapon switch animation',
			'allow rearranging inventory after countdown',
			'rename bomb map entities to use words that describe what they are',
			'fix jumppads',
			'fix corpse interpolation',
			'fix corpses not keeping momentum',
			'unspecified weapon changes',
		],
	},
	{
		title: '0.0.9.39',
		date: 'Jul 26, 2020',
		changes: ['unspecified changes'],
	},
	{
		title: '0.0.9.40',
		date: 'Jul 26, 2020',
		changes: [
			'add sand, a goochie original map',
			'update bomb model',
			'push for 18+ rating',
			'remove crosshair size cvar in response to complaints',
			'fix crash when changing map/resizing window',
			'fix gladiator jumppads',
			'unspecified movement changes',
		],
	},
	{
		title: '0.0.9.41',
		date: 'Jul 27, 2020',
		changes: [
			'sand update',
			'retire reload progress bar',
			'little visual upgrades and fixes',
			'fix broken sprays and associated console spam',
			'fix buy menu crashing the server',
		],
	},
	{
		title: '0.0.9.42',
		date: 'Jul 31, 2020',
		changes: [
			'primary/secondary/backup loadout selection',
			'pbr weapon skins',
			'bomb defuse sound',
			'sand updates',
			'more sprays',
			'more vfx',
			'fix joining white team in bomb',
		],
	},
	{
		title: '0.0.9.43',
		date: 'Aug 5, 2020',
		changes: [
			'sand updates',
			'nerf hit effect',
			'new bigvic sounds',
			'more vfx',
			'unspecified weapon changes',
		],
	},
	{
		title: '0.0.9.44',
		date: 'Aug 8, 2020',
		changes: [
			'fix map downloads',
			'fix wj not always triggering',
			'more logging to help find "Invalid Value" crash',
			'unspecified weapon changes',
		],
	},
	{
		title: '0.0.9.45',
		date: 'Aug 14, 2020',
		changes: [
			'sand updates',
			'hud updates',
			'unspecified weapon changes',
			'fix demoget',
			'fix screenshots',
		],
	},
	{
		title: '0.0.9.46',
		date: 'Oct 4, 2020',
		changes: [
			'gpu particles courtesy of msc',
			'new recoil courtesy of msc',
			'misc hud fixes',
		],
	},
	{
		title: '0.0.9.47',
		date: 'Oct 25, 2020',
		changes: [
			'fix linux',
			'fix crash when playing demos after playing a match',
			'fix disappearing outlines on corpses',
			'vfx buffs',
			'decal rendering optimisations',
			'unspecified weapon changes',
		],
	},
	{
		title: '0.0.9.48',
		date: 'Nov 11, 2020',
		changes: [
			'new player model',
			'new sky',
			'new font',
			'buffed vfx',
			'fix invisible damage numbers after map change'
		],
	},
	{
		title: '0.0.9.50',
		date: 'Dec 5, 2020',
		changes: [
			'broken'
		],
	},
	{
		title: '0.0.9.51',
		date: 'Dec 5, 2020',
		changes: [
			'add kill assists (thanks dexter, you fat fuck)',
			'add new void effect'
		],
	},
	{
		title: '0.0.9.52',
		date: 'Jan 5, 2021',
		changes: [
			'was released 2 weeks ago but we never wrote patch notes',
			'add krach rework',
			'fix a config crash',
		],
	},
	{
		title: '0.0.9.52',
		date: 'Jan 5, 2021',
		changes: [
			'vfx improvements',
			'2020 obituary pack',
			'unspecified combat changes',
		],
	},
	{
		title: '0.1',
		date: 'Jan 13, 2021',
		changes: [
			'0.1 was supposed to commemorate the new renderer but it never seemed like a good time to pull the trigger. We\'ve made huge visual improvements recently, almost entirely driven by MSC, and the art style is finally something we\'re all happy to call 0.1.',
			'add shadows and a sun light',
			'new plasma vfx and other vfx tweaks',
			'sfx tweaks',
			'unspecified gameplay changes'
		],
	},
	{
		title: '0.1.0.1',
		date: 'Jan 13, 2021',
		changes: [
			'fix shaders on everything that\'s not nvidia'
		],
	},
	{
		title: '0.1.0.2',
		date: 'Jan 20, 2021',
		changes: [
			'add user vsay pack',
			'add guyman vsay pack',
			'add audio device setting',
			'the usual sfx/vfx improvements',
			'unspecified weapon changes'
		],
	},
	{
		title: '0.1.0.3',
		date: 'Jan 24, 2021',
		changes: [
			'add a new map, TOWER',
			'add helena vsays',
			'fix glitchy movement through bomb and some other ents',
			'unspecified weapon changes',
		],
	},
	{
		title: '0.1.0.4',
		date: 'Jan 31, 2021',
		changes: [
			'tower updates',
			'add yolodemo command to force load old demos',
			'show damage numbers while spectating',
			'make projectiles go through teammates at close range',
			'respawn the bomb if it gets voided',
			'fix floating name tags bug',
			'fix invisible lg bug',
			'unspecified weapon changes',
		],
	},
	{
		title: '0.1.0.5',
		date: 'Feb 1, 2021',
		changes: [
			'fix plasma hang',
			'fix assert when changing maps with players connected',
		],
	},
	{
		title: '0.1.0.6',
		date: 'Feb 3, 2021',
		changes: [
			'fix server browser query spam',
		],
	},
	{
		title: '0.1.0.7',
		date: 'Feb 15, 2021',
		changes: [
			'more sprays',
			'more obituaries',
			'fix damage numbers in demos',
		],
	},
	{
		title: '0.1.0.8',
		date: 'Feb 16, 2021',
		changes: [
			'add last weapon bind (q by default)',
			'weapon scrolling tweaks',
			'possibly fix the getting stuck in walls bug',
			'make server browser refresh at startup again',
		],
	},
	{
		title: '0.1.0.9',
		date: 'Feb 16, 2021',
		changes: [
			'fix fog',
		],
	},
	{
		title: '0.1.0.10',
		date: 'Feb 17, 2021',
		changes: [
			'fix splash damage/defusing',
		],
	},
	{
		title: '0.1.0.11',
		date: 'Feb 18, 2021',
		changes: [
			'add a new weapon',
			'fix hitching when moving through allied bubbles',
			'unspecified weapon changes',
		],
	},
	{
		title: '0.1.0.12',
		date: 'Feb 21, 2021',
		changes: [
			'add a new weapon',
			'fix multiple connections from the same LAN',
		],
	},
	{
		title: '0.1.0.13',
		date: 'Mar 6, 2021',
		changes: [
			'more obituaries',
			'better sound hotloading',
			'renamed some callvotes',
			'fix holes in pipes',
			'fix shotgun overloading the decal renderer',
			'fix missing rifle material',
			'fix sniper scope for some players',
		],
	},
	{
		title: '0.1.0.14',
		date: 'Mar 20, 2021',
		changes: [
			'recoil episode 3',
			'cinematic bomb explosion',
			'remove cocaine/kukumene/train',
		],
	},
	{
		title: '0.1.0.15',
		date: 'Mar 21, 2021',
		changes: [
			'better bomb effects',
		],
	},
	{
		title: '0.1.0.16',
		date: 'Apr 5, 2021',
		changes: [
			'recoil fixes',
			'fix winning the same round multiple times',
		],
	},
	{
		title: '0.1.0.17',
		date: 'Apr 11, 2021',
		changes: [
			'huge engine changes that are mostly not user visible lol',
			'performance and vram optimisations',
			'integrate netflix for spectators',
			'rtx on for player models',
			'mostly fix the game not working with non-english folder names',
			'fix OBS game capture',
		],
	},
	{
		title: '0.1.0.18',
		date: 'Apr 11, 2021',
		changes: [
			'hotfix',
		],
	},
	{
		title: '0.1.0.19',
		date: 'Apr 15, 2021',
		changes: [
			'shiny world',
			'shiny guns',
			'add colourblind mode',
			'fix gladiator',
			'fix fresh installs not saving configs',
		],
	},
	{
		title: '0.1.0.20',
		date: 'Apr 20, 2021',
		changes: [
			'add dynamic lights',
			'rendering optimisations',
			'fix server config path',
			'fix demoget',
			'fix configs not saving in some cases',
			'retire mwaga icon',
		],
	},
	{
		title: '0.1.0.21',
		date: 'May 2, 2021',
		changes: [
			'add road gun and minigun',
			'bump max playing sounds so we see less too many playing sounds warnings',
			'add sniper tracer',
			'fix assistor colour when someone dies to world hazards',
			'change how weapons work under the hood, should not be user visible unless there are bugs cheers',
		],
	},
];
