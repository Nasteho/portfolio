(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"redesignanimation_atlas_", frames: [[0,0,3064,6629],[0,6631,672,376],[674,6631,607,320]]}
];


// symbols:



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["redesignanimation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Lag1 = function() {
	this.spriteSheet = ss["redesignanimation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Lag3 = function() {
	this.spriteSheet = ss["redesignanimation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-311.3,-673.6,0.203,0.177);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.3,-673.6,622.7,1347.2);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-311.3,-673.6,0.203,0.177);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.3,-673.6,622.7,1347.2);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lag 1
	this.instance = new lib.Lag1();
	this.instance.parent = this;
	this.instance.setTransform(11,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(719).to({y:0},0).wait(1));

	// Lag 2
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(339.4,692.6);

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(339.4,-335.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},719).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,y:-335.4},719).wait(1));

	// Lag 3
	this.instance_3 = new lib.Lag3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(44,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(719));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(361,186.5,672,1367.2);
// library properties:
lib.properties = {
	id: 'E12109B558014A5C84510E5A67C85D19',
	width: 700,
	height: 375,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"assets/images/redesignanimation_atlas_.png", id:"redesignanimation_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E12109B558014A5C84510E5A67C85D19'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
