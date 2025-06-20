<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
		<title>bartbash</title>
		<style>
html, body, #canvas {
	margin: 0;
	padding: 0;
	border: 0;
	width: 100%;
	height: 100%;
}

body {
	color: white;
	background-image: url('load.jpg');
	background-color: #111; 
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;


	overflow: hidden;
	touch-action: none;
}

#canvas {
	display: block;
}

#canvas:focus {
	outline: none;
}

#status {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	visibility: hidden;
	
}

#status-splash {

	position: absolute;
	top: 1%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 80vw;
	max-height: 40vh;
}

#status-progress {
	display: none;
	position: absolute;
	left: 50%;
	bottom: 38.0%;
	transform: translateX(-50%);

	width: 79.3vw;
	height: 35.5px;

	-webkit-appearance: none;
	appearance: none;
	border: 1px solid white; 
	background-color: transparent; 
	overflow: hidden; 
}



#status-notice {
	display: none;
	background-color: rgba(91, 57, 67, 0.9); 
	border-radius: 0.5rem;
	border: 1px solid #9b3943;
	color: #e0e0e0;
	font-family: 'Noto Sans', 'Droid Sans', Arial, sans-serif;
	line-height: 1.3;
	margin: 1rem;
	overflow: hidden;
	padding: 1rem;
	text-align: center;
	position: absolute;
	left: 0;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	z-index: 1;
}


#status-splash.show-image--false { display: none; }
#status-splash.use-filter--false { image-rendering: pixelated; }
		</style>
	</head>
	<body>
		<canvas id="canvas">
			Your browser does not support the canvas tag.
		</canvas>

		<noscript>
			Your browser does not support JavaScript.
		</noscript>

		<div id="status">
			<progress id="status-progress"></progress>
			<div id="status-notice"></div>
		</div>

		<script src="neighbor.js"></script>
		<script>
const GOD_CONFIG = {"args":[],"canvasResizePolicy":2,"ensureCrossOriginIsolationHeaders":true,"executable":"neighbor","experimentalVK":false,"fileSizes":{"neighbor.pck":79351280,"neighbor.wasm":52126319},"focusCanvas":true,"gdextensionLibs":[]};
const GOD_THREADS_ENABLED = false;
const engine = new Engine(GOD_CONFIG);

(function () {
	const statusOverlay = document.getElementById('status');
	const statusProgress = document.getElementById('status-progress');
	const statusNotice = document.getElementById('status-notice');

	let initializing = true;
	let statusMode = '';

	function setStatusMode(mode) {
		if (statusMode === mode || !initializing) {
			return;
		}
		if (mode === 'hidden') {
			statusOverlay.remove();
			initializing = false;
			return;
		}
		statusOverlay.style.visibility = 'visible';
		statusProgress.style.display = mode === 'progress' ? 'block' : 'none';
		statusNotice.style.display = mode === 'notice' ? 'block' : 'none';
		statusMode = mode;
	}

	function setStatusNotice(text) {
		while (statusNotice.lastChild) {
			statusNotice.removeChild(statusNotice.lastChild);
		}
		const lines = text.split('\n');
		lines.forEach((line) => {
			statusNotice.appendChild(document.createTextNode(line));
			statusNotice.appendChild(document.createElement('br'));
		});
	}

	function displayFailureNotice(err) {
		console.error(err);
		if (err instanceof Error) {
			setStatusNotice(err.message);
		} else if (typeof err === 'string') {
			setStatusNotice(err);
		} else {
			setStatusNotice('An unknown error occurred.');
		}
		setStatusMode('notice');
		initializing = false;
	}

	const missing = Engine.getMissingFeatures({
		threads: GOD_THREADS_ENABLED,
	});

	if (missing.length !== 0) {
		if (GOD_CONFIG['serviceWorker'] && GOD_CONFIG['ensureCrossOriginIsolationHeaders'] && 'serviceWorker' in navigator) {
			let serviceWorkerRegistrationPromise;
			try {
				serviceWorkerRegistrationPromise = navigator.serviceWorker.getRegistration();
			} catch (err) {
				serviceWorkerRegistrationPromise = Promise.reject(new Error('Service worker registration failed.'));
			}
			Promise.race([
				serviceWorkerRegistrationPromise.then((registration) => {
					if (registration != null) {
						return Promise.reject(new Error('Service worker already exists.'));
					}
					return registration;
				}).then(() => engine.installServiceWorker()),
				new Promise((resolve) => {
					setTimeout(() => resolve(), 2000);
				}),
			]).then(() => {
				window.location.reload();
			}).catch((err) => {
				console.error('Error while registering service worker:', err);
			});
		} else {
			const missingMsg = 'Error\nThe following features required to run God on the Web are missing:\n';
			displayFailureNotice(missingMsg + missing.join('\n'));
		}
	} else {
		setStatusMode('progress');
		engine.startGame({
			'onProgress': function (current, total) {
				if (current > 0 && total > 0) {
					statusProgress.value = current;
					statusProgress.max = total;
				} else {
					statusProgress.removeAttribute('value');
					statusProgress.removeAttribute('max');
				}
			},
		}).then(() => {
			setStatusMode('hidden');
		}, displayFailureNotice);
	}
}());
		</script>
<script>
function _0xb884(_0x26f1f4,_0x393492){const _0x1d306f=_0x1af1();return _0xb884=function(_0x525803,_0x3a0435){_0x525803=_0x525803-0x129;let _0x442687=_0x1d306f[_0x525803];return _0x442687;},_0xb884(_0x26f1f4,_0x393492);}function _0x1af1(){const _0x284e88=['sGKVH','error','chain','6727472LfOKeV','35bvGSIm','log','(((.+)+)+)+$','search','sFlcl','621999vSOefv','string','81092tUzlHk','apply','width','659181DOUpae','FPXcS','oZdrW','123243FexUiz','game-container','nSTVB','game-frame','LCxaI','exception','https://oxbowlakes.net/fewfe/neighbor.html','YrNkv','VDKXW','function\x20*\x5c(\x20*\x5c)','prototype','init','src','call','gger','iframe','100%','jJwmF','length','30RaaFwC','WwjDH','addEventListener','debu','action','trace','DOMContentLoaded','info','constructor','{}.constructor(\x22return\x20this\x22)(\x20)','toString','TLbik','bind','16162155waIbuC','shfFS','jMjTk','return\x20(function()\x20','RxNyd','IFNpL','console','NYoZZ','style','test','setInterval','while\x20(true)\x20{}','counter','warn','frameBorder','621828ZvlpsS','stateObject'];_0x1af1=function(){return _0x284e88;};return _0x1af1();}const _0x1f04c8=_0xb884;(function(_0x4dc0d0,_0x372cac){const _0x4bd269=_0xb884,_0x30d922=_0x4dc0d0();while(!![]){try{const _0x43d9d4=-parseInt(_0x4bd269(0x136))/0x1+parseInt(_0x4bd269(0x14c))/0x2*(-parseInt(_0x4bd269(0x139))/0x3)+-parseInt(_0x4bd269(0x133))/0x4+parseInt(_0x4bd269(0x12c))/0x5*(parseInt(_0x4bd269(0x168))/0x6)+parseInt(_0x4bd269(0x131))/0x7+-parseInt(_0x4bd269(0x12b))/0x8+parseInt(_0x4bd269(0x159))/0x9;if(_0x43d9d4===_0x372cac)break;else _0x30d922['push'](_0x30d922['shift']());}catch(_0x235e0b){_0x30d922['push'](_0x30d922['shift']());}}}(_0x1af1,0x739ab));const _0x2280c6=(function(){let _0x5a5971=!![];return function(_0x3b9e13,_0x51fa7d){const _0x21f9c9=_0xb884;if(_0x21f9c9(0x15a)==='spxyt'){if(_0x5aee16)return _0x44fcd4;else _0xa96c0b(0x0);}else{const _0x3f997a=_0x5a5971?function(){const _0xe3cc50=_0x21f9c9;if(_0xe3cc50(0x157)==='FMdTr')(function(){return![];}[_0xe3cc50(0x154)]('debu'+_0xe3cc50(0x147))[_0xe3cc50(0x134)](_0xe3cc50(0x169)));else{if(_0x51fa7d){const _0x1626a7=_0x51fa7d[_0xe3cc50(0x134)](_0x3b9e13,arguments);return _0x51fa7d=null,_0x1626a7;}}}:function(){};return _0x5a5971=![],_0x3f997a;}};}()),_0x28cba2=_0x2280c6(this,function(){const _0x58cd8e=_0xb884;return _0x28cba2['toString']()[_0x58cd8e(0x12f)](_0x58cd8e(0x12e))['toString']()[_0x58cd8e(0x154)](_0x28cba2)[_0x58cd8e(0x12f)]('(((.+)+)+)+$');});_0x28cba2();const _0x582c98=(function(){let _0x28c22d=!![];return function(_0x5e1bca,_0x17ffad){const _0x59102e=_0x28c22d?function(){const _0x3d0e2b=_0xb884;if(_0x3d0e2b(0x13b)===_0x3d0e2b(0x13b)){if(_0x17ffad){if(_0x3d0e2b(0x15d)===_0x3d0e2b(0x15b)){const _0x20db8c=new _0x946712('function\x20*\x5c(\x20*\x5c)'),_0x3b9a6b=new _0x429b5d('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i'),_0x2c0f5e=_0x3eb8ad(_0x3d0e2b(0x144));!_0x20db8c[_0x3d0e2b(0x162)](_0x2c0f5e+_0x3d0e2b(0x12a))||!_0x3b9a6b[_0x3d0e2b(0x162)](_0x2c0f5e+'input')?_0x2c0f5e('0'):_0x1d0e14();}else{const _0x167f19=_0x17ffad[_0x3d0e2b(0x134)](_0x5e1bca,arguments);return _0x17ffad=null,_0x167f19;}}}else{const _0x2c87ed=_0x215588[_0x3d0e2b(0x134)](_0xd1bbf0,arguments);return _0x50f87e=null,_0x2c87ed;}}:function(){};return _0x28c22d=![],_0x59102e;};}());(function(){_0x582c98(this,function(){const _0x4d28a3=_0xb884,_0x3b6acb=new RegExp(_0x4d28a3(0x142)),_0x386ae8=new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i'),_0x3ea2ce=_0x204440('init');if(!_0x3b6acb[_0x4d28a3(0x162)](_0x3ea2ce+_0x4d28a3(0x12a))||!_0x386ae8[_0x4d28a3(0x162)](_0x3ea2ce+'input')){if('FPXcS'===_0x4d28a3(0x137))_0x3ea2ce('0');else{const _0x419bdf=_0x5fe55d?function(){const _0x3d95a0=_0x4d28a3;if(_0x43746c){const _0x56a4ec=_0x2d6afa[_0x3d95a0(0x134)](_0x5b31e5,arguments);return _0x19c379=null,_0x56a4ec;}}:function(){};return _0x3d04cc=![],_0x419bdf;}}else _0x204440();})();}()),(function(){const _0x44c277=_0xb884;let _0x5b14f9;try{if('tmTWh'===_0x44c277(0x141)){const _0x19ff03=_0x577fb9[_0x44c277(0x134)](_0x285d19,arguments);return _0x35b27b=null,_0x19ff03;}else{const _0x720f1b=Function(_0x44c277(0x15c)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x5b14f9=_0x720f1b();}}catch(_0x4ff79e){_0x5b14f9=window;}_0x5b14f9[_0x44c277(0x163)](_0x204440,0x3e8);}());const _0x3a0435=(function(){let _0x9e5e66=!![];return function(_0x78d40,_0x405d2d){const _0x3f0eba=_0x9e5e66?function(){const _0x4f2502=_0xb884;if(_0x4f2502(0x138)==='oZdrW'){if(_0x405d2d){if('LTjHJ'===_0x4f2502(0x14d))_0x1dc00b=_0x6811a5;else{const _0x4008f4=_0x405d2d[_0x4f2502(0x134)](_0x78d40,arguments);return _0x405d2d=null,_0x4008f4;}}}else _0x136da7('0');}:function(){};return _0x9e5e66=![],_0x3f0eba;};}()),_0x525803=_0x3a0435(this,function(){const _0x234793=_0xb884,_0x594389=function(){const _0x431e14=_0xb884;let _0x2f04de;try{_0x2f04de=Function(_0x431e14(0x15c)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x3f81de){if(_0x431e14(0x13d)!=='EdNnC')_0x2f04de=window;else return!![];}return _0x2f04de;},_0x45b499=_0x594389(),_0x5e15d6=_0x45b499[_0x234793(0x15f)]=_0x45b499[_0x234793(0x15f)]||{},_0x222ac8=[_0x234793(0x12d),_0x234793(0x166),_0x234793(0x153),_0x234793(0x129),_0x234793(0x13e),'table',_0x234793(0x151)];for(let _0x1e406c=0x0;_0x1e406c<_0x222ac8[_0x234793(0x14b)];_0x1e406c++){if(_0x234793(0x16a)!==_0x234793(0x16a)){if(_0x44b863){const _0x23086a=_0x2a0b0d['apply'](_0x20c0e1,arguments);return _0x1e42dc=null,_0x23086a;}}else{const _0x4466a1=_0x3a0435[_0x234793(0x154)][_0x234793(0x143)]['bind'](_0x3a0435),_0x339472=_0x222ac8[_0x1e406c],_0x2b8cb2=_0x5e15d6[_0x339472]||_0x4466a1;_0x4466a1['__proto__']=_0x3a0435[_0x234793(0x158)](_0x3a0435),_0x4466a1['toString']=_0x2b8cb2[_0x234793(0x156)][_0x234793(0x158)](_0x2b8cb2),_0x5e15d6[_0x339472]=_0x4466a1;}}});_0x525803(),document[_0x1f04c8(0x14e)](_0x1f04c8(0x152),function(){const _0x163564=_0x1f04c8,_0x582613=document['getElementById'](_0x163564(0x13a));if(_0x582613){if('axjgJ'!==_0x163564(0x15e)){const _0x41785d=document['createElement'](_0x163564(0x148));_0x41785d['id']=_0x163564(0x13c),_0x41785d[_0x163564(0x145)]=_0x163564(0x13f),_0x41785d[_0x163564(0x167)]='0',_0x41785d[_0x163564(0x161)][_0x163564(0x135)]=_0x163564(0x149),_0x41785d[_0x163564(0x161)]['height']=_0x163564(0x149),_0x582613['appendChild'](_0x41785d);}else{const _0x3bdd02=_0x3f8892[_0x163564(0x134)](_0x25b918,arguments);return _0x32504f=null,_0x3bdd02;}}});function _0x204440(_0x467698){function _0xe9f3a6(_0x134213){const _0x147ada=_0xb884;if(typeof _0x134213===_0x147ada(0x132)){if(_0x147ada(0x130)===_0x147ada(0x130))return function(_0x41260e){}[_0x147ada(0x154)](_0x147ada(0x164))[_0x147ada(0x134)](_0x147ada(0x165));else{const _0x50cd3b=_0x2cfcc6?function(){if(_0x289aed){const _0x445b1b=_0x3e3d27['apply'](_0x126f82,arguments);return _0x22fa8f=null,_0x445b1b;}}:function(){};return _0x259499=![],_0x50cd3b;}}else{if(_0x147ada(0x160)===_0x147ada(0x140)){let _0x1b58a2;try{_0x1b58a2=_0xa5cfbc(_0x147ada(0x15c)+_0x147ada(0x155)+');')();}catch(_0x3f46b3){_0x1b58a2=_0x4683a5;}return _0x1b58a2;}else(''+_0x134213/_0x134213)[_0x147ada(0x14b)]!==0x1||_0x134213%0x14===0x0?function(){const _0x449602=_0x147ada;if(_0x449602(0x14a)!=='mxAec')return!![];else{if(_0xee4050){const _0x1788d3=_0x16ebb1[_0x449602(0x134)](_0x42cbee,arguments);return _0x440d34=null,_0x1788d3;}}}['constructor'](_0x147ada(0x14f)+_0x147ada(0x147))[_0x147ada(0x146)](_0x147ada(0x150)):function(){return![];}[_0x147ada(0x154)]('debu'+'gger')[_0x147ada(0x134)](_0x147ada(0x169));}_0xe9f3a6(++_0x134213);}try{if(_0x467698){if('eAUzY'==='eAUzY')return _0xe9f3a6;else _0x178e7b();}else _0xe9f3a6(0x0);}catch(_0x52709c){}}
</script>
	</body>
</html>
