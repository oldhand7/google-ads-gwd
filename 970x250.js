(function (lib, img, cjs, ss, an) {

	var p; // shortcut to reference prototypes
	lib.webFontTxtInst = {};
	var loadedTypekitCount = 0;
	var loadedGoogleCount = 0;
	var gFontsUpdateCacheList = [];
	var tFontsUpdateCacheList = [];
	lib.ssMetadata = [];



	lib.updateListCache = function (cacheList) {
		for (var i = 0; i < cacheList.length; i++) {
			if (cacheList[i].cacheCanvas)
				cacheList[i].updateCache();
		}
	};

	lib.addElementsToCache = function (textInst, cacheList) {
		var cur = textInst;
		while (cur != exportRoot) {
			if (cacheList.indexOf(cur) != -1)
				break;
			cur = cur.parent;
		}
		if (cur != exportRoot) {
			var cur2 = textInst;
			var index = cacheList.indexOf(cur);
			while (cur2 != cur) {
				cacheList.splice(index, 0, cur2);
				cur2 = cur2.parent;
				index++;
			}
		}
		else {
			cur = textInst;
			while (cur != exportRoot) {
				cacheList.push(cur);
				cur = cur.parent;
			}
		}
	};

	lib.gfontAvailable = function (family, totalGoogleCount) {
		lib.properties.webfonts[family] = true;
		var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
		for (var f = 0; f < txtInst.length; ++f)
			lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

		loadedGoogleCount++;
		if (loadedGoogleCount == totalGoogleCount) {
			lib.updateListCache(gFontsUpdateCacheList);
		}
	};

	lib.tfontAvailable = function (family, totalTypekitCount) {
		lib.properties.webfonts[family] = true;
		var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
		for (var f = 0; f < txtInst.length; ++f)
			lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

		loadedTypekitCount++;
		if (loadedTypekitCount == totalTypekitCount) {
			lib.updateListCache(tFontsUpdateCacheList);
		}
	};
	// symbols:



	(lib.bg1 = function () {
		this.initialize(img.bg1);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 969, 238);


	(lib.bg2 = function () {
		this.initialize(img.bg2);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 972, 254);


	(lib.bg3 = function () {
		this.initialize(img.bg3);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 511, 250);


	(lib.bg4 = function () {
		this.initialize(img.bg4);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 559, 250);


	(lib.bg5 = function () {
		this.initialize(img.bg5);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 556, 250);


	(lib.cta = function () {
		this.initialize(img.cta);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 177, 45);


	(lib.Group1404 = function () {
		this.initialize(img.Group1404);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 475, 121);


	(lib.t1 = function () {
		this.initialize(img.t1);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 312, 111);


	(lib.t10 = function () {
		this.initialize(img.t10);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 600, 42);


	(lib.t11 = function () {
		this.initialize(img.t11);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 512, 38);


	(lib.t2 = function () {
		this.initialize(img.t2);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 434, 78);


	(lib.t3 = function () {
		this.initialize(img.t3);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 467, 111);


	(lib.t4 = function () {
		this.initialize(img.t4);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 394, 154);


	(lib.t5 = function () {
		this.initialize(img.t5);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 418, 146);


	(lib.t6 = function () {
		this.initialize(img.t6);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 145, 78);


	(lib.t7 = function () {
		this.initialize(img.t7);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 418, 146);


	(lib.t8 = function () {
		this.initialize(img.t8);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 382, 74);


	(lib.t9 = function () {
		this.initialize(img.t9);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 430, 173);// helper functions:

	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}

	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
	}


	(lib.Symbol34 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.bg5();
		this.instance.parent = this;
		this.instance.setTransform(34, 0);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

		// Layer 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#001A64").s().p("EhMmATtMAAAgnZMCZNAAAMAAAAnZg");
		this.shape.setTransform(490.3, 126.1);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0, 0, 980.6, 252.2), null);


	(lib.Symbol31 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#EAAB00").s().p("Eh+WACgIAAk/MD8tAAAIAAE/g");
		this.shape.setTransform(156.7, 3.4);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-652, -12.5, 1617.4, 32), null);


	(lib.Symbol29 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#EEA7BF").s().p("Ai4PrIAA/VIFxAAIAAfVg");
		this.shape.setTransform(-186.1, -242.3);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-204.6, -342.6, 37.1, 200.6), null);


	(lib.Symbol26 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#2A918B").s().p("AjMZcMAAAgy3IGZAAMAAAAy3g");
		this.shape.setTransform(1177.7, -291.4);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(1157.3, -454.2, 41, 325.5), null);


	(lib.Symbol24 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#2A918B").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
		this.shape.setTransform(0, 0, 3.282, 1.048, 0, 0, 0, -150, -125);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0, 0, 984.6, 262.1), null);


	(lib.Symbol23 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#EEA7BF").s().p("Egk2ADKIAAmTMBJtAAAIAAGTg");
		this.shape.setTransform(66.8, -7.3);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-169, -27.5, 471.8, 40.4), null);


	(lib.Symbol22 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#3F9C35").s().p("Egg+AJdIAAy5MBB9AAAIAAS5g");
		this.shape.setTransform(207.7, 60.5);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-3.4, 0, 422.2, 121.1), null);


	(lib.Symbol21 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 2
		this.instance = new lib.Group1404();
		this.instance.parent = this;
		this.instance.setTransform(-1, 12);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-1, 12, 475, 121), null);


	(lib.Symbol20 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#2A918B").s().p("A6OIrIAAxWMA0dAAAIAARWg");
		this.shape.setTransform(618.5, 45.9);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(450.7, -9.7, 335.8, 111.1), null);


	(lib.Symbol19 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#001965").s().p("A9IH8IAAv3MA6RAAAIAAP3g");
		this.shape.setTransform(584.7, 82.8);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(398.2, 32, 373, 101.6), null);


	(lib.Symbol18 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.t6();
		this.instance.parent = this;
		this.instance.setTransform(468, 30);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(468, 30, 145, 78), null);


	(lib.Symbol17 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.t2();
		this.instance.parent = this;
		this.instance.setTransform(356, 37);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(356, 37, 434, 78), null);


	(lib.Symbol16 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.bg4();
		this.instance.parent = this;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

		// Layer 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#EEA7BF").ss(1, 1, 1).p("EhO0gWQMCdpAAAMAAAAshMidpAAAg");
		this.shape.setTransform(492.5, 125.5);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#001A64").s().p("EhO0AWRMAAAgshMCdoAAAMAAAAshg");
		this.shape_1.setTransform(492.5, 125.5);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-12.9, -17.9, 1010.9, 287), null);


	(lib.Symbol15 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.bg3();
		this.instance.parent = this;
		this.instance.setTransform(419, 0);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

		// Layer 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#001A64").s().p("EhMCAUaMAAAgoyMCYFAAAMAAAAoyg");
		this.shape.setTransform(483.3, 125.4);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-3.4, -5.1, 973.4, 261.1), null);


	(lib.Symbol14 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.bg2();
		this.instance.parent = this;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0, 0, 972, 254), null);


	(lib.Symbol13 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.bg1();
		this.instance.parent = this;
		this.instance.setTransform(0, 12);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0, 12, 969, 238), null);


	(lib.Symbol12 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.t4();
		this.instance.parent = this;
		this.instance.setTransform(20, -16);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(20, -16, 394, 154), null);


	(lib.Symbol11 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.cta();
		this.instance.parent = this;
		this.instance.setTransform(320, -2);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(320, -2, 177, 45), null);


	(lib.Symbol10 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.t3();
		this.instance.parent = this;
		this.instance.setTransform(9, 30);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(9, 30, 467, 111), null);


	(lib.Symbol9 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.t1();
		this.instance.parent = this;
		this.instance.setTransform(472, 0);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(472, 0, 312, 111), null);


	(lib.Symbol7 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 2
		this.instance = new lib.t7();
		this.instance.parent = this;
		this.instance.setTransform(603, 64);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(603, 64, 418, 146), null);


	(lib.Symbol6 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.t5();
		this.instance.parent = this;
		this.instance.setTransform(35, -9);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(35, -9, 418, 146), null);


	(lib.Symbol5 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F0A900").s().p("EgiDACvIAAldMBEHAAAIAAFdg");
		this.shape.setTransform(735.9, 213.4);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		// Layer 1
		this.instance = new lib.t9();
		this.instance.parent = this;
		this.instance.setTransform(518, 43);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(517.9, 43, 436, 187.9), null);


	(lib.Symbol3 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.t11();
		this.instance.parent = this;
		this.instance.setTransform(218, -17);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(218, -17, 512, 38), null);


	(lib.Symbol2 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.t10();
		this.instance.parent = this;
		this.instance.setTransform(186, -30);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(186, -30, 600, 42), null);


	(lib.Symbol1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.t8();
		this.instance.parent = this;
		this.instance.setTransform(563, 0);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(563, 0, 382, 74), null);


	(lib.ClipGroup = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 2 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("AiYBtIAAjZIExAAIAADZg");
		mask.setTransform(15.3, 10.9);

		// Layer 3
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#001965").s().p("AA7BtQgFgBgEgFQgDgEABgGQgBgGAEgFQAEgEAGgBQAEAAADACIAAgKQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIADAAIABABIAAAlQAAABAAAAQgBAAAAABQgBAAAAABQgBAAgBAAIgHABgAA3BUQgCAEAAAFQAAANAJAAQAFAAAAgDIAAgUQgDgCgCAAQgEAAgDADgAAGBrQgGgFAAgJQAAgIAGgFQADgDAEAAQAEAAAEADQAGAFgBAIQABAJgGAFQgEACgEAAQgDAAgEgCgAAIBTQgDAEAAAGQAAAGADAFQADACACAAQADAAACgCQADgFAAgGQAAgGgDgEQgCgCgDAAQgDAAgCACgAhBBrQgHgGACgIQgBgIAGgFQAEgDAEAAQAEAAADADQAHAFgBAIQABAJgHAFIgHACQgEAAgEgCgAg+BTQgEAFABAFQgBAFAEAGQABACAEAAQADAAACgCQADgGAAgFQAAgFgDgFQgCgCgDAAQgDAAgCACgAh2BrQgHgFABgJQgBgIAHgFQAEgDADAAQAEAAAEADQAHAFgBAIQABAJgHAFIgIACIgHgCgAh0BTQgDAFABAFQgBAGADAFQACACADAAQADABACgDQAEgFgBgGQABgGgEgEQgBgCgEAAQgDAAgCACgABjBtQgKAAAAgEQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIADABIAEACIAAAAQAGAAAAgFQAAgDgHgDQgIgEAAgFIAAgBQABgDADgDQACgCAEAAQAIAAAAAEQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQgCgCgEAAIAAAAQgFAAAAAEQAAADAHADQAHAEAAAFIAAABQAAAEgDACQgCACgDAAIgCAAgACEBsIgCgBIgKgOIgBgBIABAAQAHgFADgIQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIADAAIABABIgBABQgEAIgGAEIALAPIABABIgBAAgABzBsIgBgBIAAgnIABgBIACAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIAAAnQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAgABQBsIAAgBIAAgcIABgBIADAAIABABIAAAcIgBABgAAfBsIgBgBIAAgaQAAgBAAAAQABAAAAgBQAAAAABAAQABgBAAAAIAGgBQAIAAAAADIAAABQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAQgDgDgDAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABIAAAYQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAgAgHBsQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIAAgTQAAgHgGAAQgHAAAAACIAAAYQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgDAAIgBgBIAAgaQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAABAAQAEgCAFAAQALAAAAAKIAAAUIABAAIgBABgAhVBsIgBgBIgKgbIgBgBIABgBIAEAAIABABIAIAWIAIgWIAAgBIADAAIABABIAAAAIAAABIgKAbIgCABgAiEBsQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgTQAAgHgHAAQgHAAAAACIAAAYIgBABIgDAAIgBgBIAAgaQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAJgCQAMAAAAAKIAAAUIgBABgABPBGQAAgBAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBgACJBFQgDgDAAgEQAAgEADgDQACgCAEAAQAEAAADACQADADAAAEQAAAJgKAAQgEAAgCgCgACKA5QgCACAAADQAAAIAHAAQAIAAAAgIQAAgIgIAAQgDAAgCADgACSBDIgBgCQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIgBAAIAAAEIgCAAIAAgKIAEAAIADABIABACIAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIADACIABACgACNA+IACAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIgCAAgAAlBBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQASgfgNgSIgCAFQgBAHgCACQgQANgGAUIgCACIgBACQAAABAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgJAAQgBAAgBAAQAAAAAAgBQAAAAAAgBQAAgBABgBQAHgJAGgIQAMgRgBgOQAAgDgCgDQgEgEgIAHQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQgIgEgJACQgFABgCAFQgCAEABAFIAGASQAFAMABAGQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgBABIgBACQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgKAAQAAAAgBAAQgBAAAAgBQAAAAAAgBQAAgBAAgBIACgHIgBgMQgCgRgPgJQgDACgEANQgFANgBALIgBADQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIgCABIAAACQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgJAAQgBAAAAAAQgBAAAAgBQAAAAABgBQAAgBAAgBQAOgWABgXQABgGgDgGQgIgJgGgMQgCgFgFgBQgFAAgCgBIgEgFQgDgEACgCIAGgIIAAgCIAFgHQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAgBgBgBQgGgIAAgKQAAgGACAFQAFAOAOAEQANAFAMgIIADgCQAAgBABAAQAAAAABAAQAAgBAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAABQgGAHgIAEQgBABgBAAQAAAAAAABQAAAAAAAAQABABABAAIANAFQAUAHAVAAQAOAAATgCQAOgDAIAMQADAFABAQIAAATIAAAsQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAIgKAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAgAgsglQgCAAgCAEIgIAPQgEAIAGAJQAEAFAFACIAUAOQADACAAgEQABgNANgEQAMgCARABQALABAIAFQAHAFABgKIACgIQADgZgMAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAIACAEQACAFgEAFQgFAEgBgFQgEgPgIABQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIACAJQABAGgGABQgMAGgMgDQgHgBABgGIAAgJQAAgGgDAAIgDAAIAAAEQAAAPgLgBQgDAAAAgEIAAAAQABgGAAgHIgBgDIgFgDIgGgBIgBAAgAA2gTIAAAMQgCAGABAEIADAQQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIABgBQABgSgDgTIgBgCIgBACgAgJgbIAAAKQAAADAFACQALACAJgEQAEgCgBgFQAAgEgBgCQgCgEgEABIgSAAIgBAAQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABgAhLgzQgEADgBAEIgCAFIgDAEQgBABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIADAEIAFABQAEABADACQAEADAEAGQAAABAAAAQABAAAAAAQABAAAAgBQAAAAABgBIAJgUQAEgDgDgCIgKgGIgJgFIgDAAIgDABgAgbgfQAAAHgCAGQAAABAAABQABAAAAAAQABAAAAAAQABAAABgBQAEgCAAgLQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAIgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABgAAgggQAAAAgBABQAAAAgBAAQAAAAABABQAAAAAAABQAEAEABAGQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQABgGgDgEQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgCAAgAhMgqQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQABAAABAAQABAAAAAAQABAAAAAAQAAAAAAAAQgCAFgCAAIgCgBgAhIhEQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJIAAABQAAAJgHAHQgHAHgKAAQgJAAgHgHgAhChjQgFAFAAAGQAAAHAFAFQAFAEAGAAQAHAAAEgEQAFgFAAgHQAAgGgFgFQgEgEgHAAQgGAAgFAEg");
		this.shape.setTransform(15.3, 10.9);

		var maskedShapeInstanceList = [this.shape];

		for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0, 0, 30.6, 21.9), null);


	(lib._2022NovoNordiskAllrightsreservedUS22OB00224June2022 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#001965").s().p("AgRAbIAAgFIAOgOIAGgIIAEgFQACgDAAgDQAAgFgDgCQgCgCgEAAIgHABIgGAEIgDgFIAHgEQAEgCAFAAQAHAAAEAEQAFAEAAAGQAAAEgCAEIgFAGIgHAIIgKALIAAAAIAaAAIAAAGg");
		this.shape.setTransform(230.3, 3.7);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#001965").s().p("AgRAbIAAgFIAOgOIAGgIIAEgFQACgDAAgDQAAgFgDgCQgCgCgEAAIgHABIgGAEIgDgFIAHgEQAEgCAFAAQAHAAAEAEQAFAEAAAGQAAAEgCAEIgFAGIgHAIIgKALIAAAAIAaAAIAAAGg");
		this.shape_1.setTransform(226, 3.7);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#001965").s().p("AgMAVQgFgIAAgNQAAgIACgGQACgGAEgDQAEgDAFAAQAJgBAFAIQAEAHAAAMQAAAJgCAGQgCAGgEADQgDAEgHAAQgIgBgEgGgAgHgPQgDAFAAAKQAAALADAFQACAGAFAAQAGAAADgGQACgEAAgMQAAgKgCgFQgDgGgGAAQgFAAgCAGg");
		this.shape_2.setTransform(221.7, 3.7);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#001965").s().p("AgRAbIAAgFIAOgOIAGgIIAEgFQACgDAAgDQAAgFgDgCQgCgCgEAAIgHABIgGAEIgDgFIAHgEQAEgCAFAAQAHAAAEAEQAFAEAAAGQAAAEgCAEIgFAGIgHAIIgKALIAAAAIAaAAIAAAGg");
		this.shape_3.setTransform(217.4, 3.7);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#001965").s().p("AgHATQgEgDgDgEQgCgFAAgHQAAgFACgFQACgFAEgCQAEgDAFAAQAFAAAEADQADACACAEQACAEAAAFIAAADIgaAAQAAAHADAEQAEADAFAAIAGAAIAGgCIAAAFIgGACIgHABQgFAAgEgCgAgGgLQgDADAAAFIATAAQAAgFgCgDQgCgDgFAAQgEAAgDADg");
		this.shape_4.setTransform(211.2, 4.4);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#001965").s().p("AAKAUIAAgYQAAgKgJAAQgFAAgDAEQgCADgBAHIAAAUIgGAAIAAgmIAFAAIABAFIAAAAQACgDAEgCIAGgBQAIAAADADQAEAEAAAHIAAAZg");
		this.shape_5.setTransform(206.8, 4.4);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#001965").s().p("AgMARQgEgDAAgIIAAgZIAHAAIAAAYQgBAKAKAAQAFAAADgEQADgDgBgIIAAgTIAHAAIAAAnIgGAAIgBgGQgCAEgDABIgGABQgIAAgDgDg");
		this.shape_6.setTransform(202.1, 4.4);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#001965").s().p("AgGAiIgDgBIAAgGIADABIADAAIADgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIABgGIAAg0IAHAAIAAA0QAAAIgEADQgEAEgFAAIgDAAg");
		this.shape_7.setTransform(198.1, 4.4);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#001965").s().p("AAGAbIAAgMIgZAAIAAgGIAZgjIAGAAIAAAjIAIAAIAAAGIgIAAIAAAMgAAFgPIgDACIgOAWIASAAIAAgQIAAgHIAAgFIgBAEg");
		this.shape_8.setTransform(193.7, 3.7);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#001965").s().p("AgRAbIAAgFIAOgOIAGgIIAEgFQACgDAAgDQAAgFgDgCQgCgCgEAAIgHABIgGAEIgDgFIAHgEQAEgCAFAAQAHAAAEAEQAFAEAAAGQAAAEgCAEIgFAGIgHAIIgKALIAAAAIAaAAIAAAGg");
		this.shape_9.setTransform(189.3, 3.7);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#001965").s().p("AgRAbIAAgFIAOgOIAGgIIAEgFQACgDAAgDQAAgFgDgCQgCgCgEAAIgHABIgGAEIgDgFIAHgEQAEgCAFAAQAHAAAEAEQAFAEAAAGQAAAEgCAEIgFAGIgHAIIgKALIAAAAIAaAAIAAAGg");
		this.shape_10.setTransform(185, 3.7);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#001965").s().p("AgMAVQgFgIAAgNQAAgIACgGQACgGAEgDQAEgDAFAAQAJgBAFAIQAEAHAAAMQAAAJgCAGQgCAGgEADQgDAEgHAAQgIgBgEgGgAgHgPQgDAFAAAKQAAALADAFQACAGAFAAQAGAAADgGQACgEAAgMQAAgKgCgFQgDgGgGAAQgFAAgCAGg");
		this.shape_11.setTransform(180.7, 3.7);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#001965").s().p("AgMAVQgFgIAAgNQAAgIACgGQACgGAEgDQAEgDAFAAQAJgBAFAIQAEAHAAAMQAAAJgCAGQgCAGgEADQgDAEgHAAQgIgBgEgGgAgHgPQgDAFAAAKQAAALADAFQACAGAFAAQAGAAADgGQACgEAAgMQAAgKgCgFQgDgGgGAAQgFAAgCAGg");
		this.shape_12.setTransform(176.4, 3.7);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#001965").s().p("AgSAbIAAg1IAQAAQAJAAAEADQAGADAAAHQAAAFgCADQgDADgFABIAAABIAGABIAEAEQACACgBAFQAAAHgEAEQgGAEgIAAgAgLAVIALAAQAGAAACgDQADgCAAgFQAAgEgDgDQgCgCgHAAIgKAAgAgLgDIAKAAQAGAAADgCQACgCAAgFQAAgEgDgCQgDgCgGAAIgJAAg");
		this.shape_13.setTransform(172.1, 3.7);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#001965").s().p("AgNAYQgFgDgDgHQgDgFAAgJQAAgHADgHQADgFAFgEQAGgDAHAAQAIAAAGADQAFAEADAFQADAHAAAHQAAAJgDAFQgDAHgFADQgGAEgIAAQgHAAgGgEgAgMgOQgFAFAAAJQAAAKAFAGQAEAGAIAAQAJAAAEgGQAFgGAAgKQAAgJgFgFQgEgHgJAAQgIAAgEAHg");
		this.shape_14.setTransform(166.6, 3.7);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#001965").s().p("AgRAbIAAgFIAOgOIAGgIIAEgFQACgDAAgDQAAgFgDgCQgCgCgEAAIgHABIgGAEIgDgFIAHgEQAEgCAFAAQAHAAAEAEQAFAEAAAGQAAAEgCAEIgFAGIgHAIIgKALIAAAAIAaAAIAAAGg");
		this.shape_15.setTransform(161.5, 3.7);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#001965").s().p("AgRAbIAAgFIAOgOIAGgIIAEgFQACgDAAgDQAAgFgDgCQgCgCgEAAIgHABIgGAEIgDgFIAHgEQAEgCAFAAQAHAAAEAEQAFAEAAAGQAAAEgCAEIgFAGIgHAIIgKALIAAAAIAaAAIAAAGg");
		this.shape_16.setTransform(157.2, 3.7);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#001965").s().p("AgKAbIgGgCIAAgGIAHACIAIABQAFAAADgCQADgDAAgEIgBgEIgEgEIgGgDQgHgCgEgDQgDgEAAgGQAAgEACgDQACgDAEgBQAEgCAEAAIAIABIAHACIgCAGIgHgDIgGgBQgEAAgDACQgCADAAADIABAFIADADIAGADIAIADQAEACABACQACADAAAEQAAAIgFAEQgFAEgIAAIgJgBg");
		this.shape_17.setTransform(153, 3.7);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#001965").s().p("AgOAWQgGgFAAgJIAAgiIAHAAIAAAiQAAAGAEAEQADAEAGAAQAIgBADgEQADgEAAgFIAAgiIAHAAIAAAiQAAAFgDAEQgCAFgEADQgFACgHAAQgJAAgFgFg");
		this.shape_18.setTransform(148.2, 3.8);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#001965").s().p("AgDAEIgBgEIABgDIADgBIADABIABADIgBAEIgDABIgDgBg");
		this.shape_19.setTransform(142.5, 6);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#001965").s().p("AgMAYQgFgFAAgLQAAgJAFgFQAEgGAIAAQAEAAADACQADACABACIABAAIAAgDIgBgDIAAgQIAHAAIAAA4IgFAAIgBgFIgBAAIgEAEQgDACgEAAQgIAAgEgFgAgHgCQgDADAAAHQAAAIADAEQADAEAEAAQAGAAADgEQACgDAAgHIAAgCQAAgHgCgDQgCgEgHAAQgEAAgDAEg");
		this.shape_20.setTransform(139.1, 3.6);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#001965").s().p("AgHATQgEgDgDgEQgCgFAAgHQAAgFACgFQACgFAEgCQAEgDAFAAQAFAAAEADQADACACAEQACAEAAAFIAAADIgaAAQAAAHADAEQAEADAFAAIAGAAIAGgCIAAAFIgGACIgHABQgFAAgEgCgAgGgLQgDADAAAFIATAAQAAgFgCgDQgCgDgFAAQgEAAgDADg");
		this.shape_21.setTransform(134.8, 4.4);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#001965").s().p("AgDAUIgPgnIAHAAIAJAXIABADIABAEIAAADIABgDIABgEIACgDIAIgXIAHAAIgPAng");
		this.shape_22.setTransform(130.8, 4.4);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#001965").s().p("AgLAUIAAgmIAGAAIAAAGIABAAQABgCADgDQADgCAEAAIACAAIADAAIgBAGIgCgBIgDAAQgDABgCABQgCACgCADQgBADAAAEIAAAUg");
		this.shape_23.setTransform(127.6, 4.4);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#001965").s().p("AgHATQgEgDgDgEQgCgFAAgHQAAgFACgFQACgFAEgCQAEgDAFAAQAFAAAEADQADACACAEQACAEAAAFIAAADIgaAAQAAAHADAEQAEADAFAAIAGAAIAGgCIAAAFIgGACIgHABQgFAAgEgCgAgGgLQgDADAAAFIATAAQAAgFgCgDQgCgDgFAAQgEAAgDADg");
		this.shape_24.setTransform(123.6, 4.4);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#001965").s().p("AgIAUIgFgCIAAgGIAFADIAHABQAEAAADgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAAAIgBgDIgDgCIgFgDIgHgCIgEgEQgBgCAAgDQAAgFAEgDQAEgDAGAAIAGABIAGACIgCAFIgFgCIgGAAQgDAAgCABQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIABACIADADIAFACIAHACIAEAEQABACAAADQAAAGgEADQgEADgHAAIgHgBg");
		this.shape_25.setTransform(119.7, 4.4);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#001965").s().p("AgHATQgEgDgDgEQgCgFAAgHQAAgFACgFQACgFAEgCQAEgDAFAAQAFAAAEADQADACACAEQACAEAAAFIAAADIgaAAQAAAHADAEQAEADAFAAIAGAAIAGgCIAAAFIgGACIgHABQgFAAgEgCgAgGgLQgDADAAAFIATAAQAAgFgCgDQgCgDgFAAQgEAAgDADg");
		this.shape_26.setTransform(115.8, 4.4);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#001965").s().p("AgLAUIAAgmIAGAAIAAAGIABAAQABgCADgDQADgCAEAAIACAAIADAAIgBAGIgCgBIgDAAQgDABgCABQgCACgCADQgBADAAAEIAAAUg");
		this.shape_27.setTransform(112.4, 4.4);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#001965").s().p("AgIAUIgFgCIAAgGIAFADIAHABQAEAAADgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAAAIgBgDIgDgCIgFgDIgHgCIgEgEQgBgCAAgDQAAgFAEgDQAEgDAGAAIAGABIAGACIgCAFIgFgCIgGAAQgDAAgCABQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIABACIADADIAFACIAHACIAEAEQABACAAADQAAAGgEADQgEADgHAAIgHgBg");
		this.shape_28.setTransform(106.8, 4.4);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#001965").s().p("AAFAZIgFgBQgCgBgCgCQgBgEAAgEIAAgXIgGAAIAAgCIAGgDIACgJIADAAIAAAKIAMAAIAAAEIgMAAIAAAXQAAAEACABQABABAAAAQABAAAAAAQABABAAAAQABAAABAAIADAAIACgBIAAAFIgDABIgEAAg");
		this.shape_29.setTransform(103.6, 4);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#001965").s().p("AALAcIAAgZQgBgJgIAAQgHAAgCAEQgDACAAAIIAAAUIgGAAIAAg3IAGAAIAAAQIAAAGIAAAAQADgDADgCQADgBADAAQAHAAAEADQAEAEAAAGIAAAag");
		this.shape_30.setTransform(100, 3.6);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#001965").s().p("AgNAbIAAgGQAFADAIAAQAGAAACgDQADgDAAgGIAAgBIABgCIAAgDIgBAAQgEAGgHAAQgIAAgEgFQgFgFAAgJQAAgKAFgGQAEgGAIABQADAAADABQADABACADIABAAIABgEIAFAAIAAAnQAAAJgEAEQgFAEgJAAQgIABgFgDgAgHgTQgDAEAAAIQAAAHADADQADAEAEAAQAGAAADgEQADgDAAgGIAAgBQAAgJgDgDQgDgEgGAAQgEAAgDAEg");
		this.shape_31.setTransform(95.2, 5.3);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#001965").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIgBgDIABgEIACgBIADABIABAEIgBADIgDABIgCgBg");
		this.shape_32.setTransform(92.1, 3.6);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#001965").s().p("AgLAUIAAgmIAGAAIAAAGIABAAQABgCADgDQADgCAEAAIACAAIADAAIgBAGIgCgBIgDAAQgDABgCABQgCACgCADQgBADAAAEIAAAUg");
		this.shape_33.setTransform(89.8, 4.4);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#001965").s().p("AgCAcIAAg3IAFAAIAAA3g");
		this.shape_34.setTransform(85.1, 3.6);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#001965").s().p("AgCAcIAAg3IAFAAIAAA3g");
		this.shape_35.setTransform(83.1, 3.6);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#001965").s().p("AARAbIgGgQIgVAAIgGAQIgHAAIAVg1IAFAAIAVA1gAgBgOIgBADIgFAPIAQAAIgGgPIgBgCIgBgDIgBgDIgBAFg");
		this.shape_36.setTransform(79.8, 3.7);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#001965").s().p("AAIAcIgMgSIgFADIAAAPIgGAAIAAg3IAGAAIAAAcIAAADIgBAEIABAAIABgCIACgCIACgCIALgMIAIAAIgPAQIAQAWg");
		this.shape_37.setTransform(73.7, 3.6);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#001965").s().p("AgIAUIgFgCIAAgGIAFADIAHABQAEAAADgCQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAAAIgBgDIgDgCIgFgDIgHgCIgEgEQgBgCAAgDQAAgFAEgDQAEgDAGAAIAGABIAGACIgCAFIgFgCIgGAAQgDAAgCABQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIABACIADADIAFACIAHACIAEAEQABACAAADQAAAGgEADQgEADgHAAIgHgBg");
		this.shape_38.setTransform(69.6, 4.4);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#001965").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIgBgDIABgEIACgBIADABIABAEIgBADIgDABIgCgBg");
		this.shape_39.setTransform(66.8, 3.6);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#001965").s().p("AgMAYQgFgFAAgLQAAgJAFgFQAEgGAIAAQAEAAADACQADACABACIABAAIAAgDIgBgDIAAgQIAHAAIAAA4IgFAAIgBgFIgBAAIgEAEQgDACgEAAQgIAAgEgFgAgHgCQgDADAAAHQAAAIADAEQADAEAEAAQAGAAADgEQACgDAAgHIAAgCQAAgHgCgDQgCgEgHAAQgEAAgDAEg");
		this.shape_40.setTransform(63.4, 3.6);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#001965").s().p("AgLAUIAAgmIAGAAIAAAGIABAAQABgCADgDQADgCAEAAIACAAIADAAIgBAGIgCgBIgDAAQgDABgCABQgCACgCADQgBADAAAEIAAAUg");
		this.shape_41.setTransform(60, 4.4);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#001965").s().p("AgJATQgEgDgCgFQgDgEAAgHQAAgJAFgFQAFgGAIAAQAFAAAFADQAEACACAFQADAEAAAGQAAAKgFAGQgGAFgIAAQgFAAgEgCgAgIgKQgDAEAAAGQAAAHADAEQADAFAFAAQAGAAADgFQADgEAAgHQAAgGgDgEQgDgEgGAAQgFAAgDAEg");
		this.shape_42.setTransform(55.9, 4.4);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#001965").s().p("AAOAbIgcgsIAAAHIAAAIIAAAdIgGAAIAAg1IAIAAIAbAsIAAAAIAAgEIAAgFIAAgGIAAgdIAGAAIAAA1g");
		this.shape_43.setTransform(50.8, 3.7);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#001965").s().p("AgJATQgEgDgCgFQgDgEAAgHQAAgJAFgFQAFgGAIAAQAFAAAFADQAEACACAFQADAEAAAGQAAAKgFAGQgGAFgIAAQgFAAgEgCgAgIgKQgDAEAAAGQAAAHADAEQADAFAFAAQAGAAADgFQADgEAAgHQAAgGgDgEQgDgEgGAAQgFAAgDAEg");
		this.shape_44.setTransform(43.7, 4.4);

		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#001965").s().p("AgDAUIgPgnIAHAAIAIAXIACADIABAEIAAADIABgDIABgEIACgDIAIgXIAHAAIgPAng");
		this.shape_45.setTransform(39.5, 4.4);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#001965").s().p("AgJATQgEgDgCgFQgDgEAAgHQAAgJAFgFQAFgGAIAAQAFAAAFADQAEACACAFQADAEAAAGQAAAKgFAGQgGAFgIAAQgFAAgEgCgAgIgKQgDAEAAAGQAAAHADAEQADAFAFAAQAGAAADgFQADgEAAgHQAAgGgDgEQgDgEgGAAQgFAAgDAEg");
		this.shape_46.setTransform(35.3, 4.4);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#001965").s().p("AAOAbIgdgsIABAHIAAAIIAAAdIgGAAIAAg1IAIAAIAbAsIABAAIAAgEIgBgFIAAgGIAAgdIAGAAIAAA1g");
		this.shape_47.setTransform(30.2, 3.7);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#001965").s().p("AgRAbIAAgFIAOgOIAGgIIAEgFQACgDAAgDQAAgFgDgCQgCgCgEAAIgHABIgGAEIgDgFIAHgEQAEgCAFAAQAHAAAEAEQAFAEAAAGQAAAEgCAEIgFAGIgHAIIgKALIAAAAIAaAAIAAAGg");
		this.shape_48.setTransform(23.2, 3.7);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#001965").s().p("AgRAbIAAgFIAOgOIAGgIIAEgFQACgDAAgDQAAgFgDgCQgCgCgEAAIgHABIgGAEIgDgFIAHgEQAEgCAFAAQAHAAAEAEQAFAEAAAGQAAAEgCAEIgFAGIgHAIIgKALIAAAAIAaAAIAAAGg");
		this.shape_49.setTransform(18.9, 3.7);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#001965").s().p("AgMAVQgFgIAAgNQAAgIACgGQACgGAEgDQAEgDAFAAQAJgBAFAIQAEAHAAAMQAAAJgCAGQgCAGgEADQgDAEgHAAQgIgBgEgGgAgHgPQgDAFAAAKQAAALADAFQACAGAFAAQAGAAADgGQACgEAAgMQAAgKgCgFQgDgGgGAAQgFAAgCAGg");
		this.shape_50.setTransform(14.6, 3.7);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#001965").s().p("AgRAbIAAgFIAOgOIAGgIIAEgFQACgDAAgDQAAgFgDgCQgCgCgEAAIgHABIgGAEIgDgFIAHgEQAEgCAFAAQAHAAAEAEQAFAEAAAGQAAAEgCAEIgFAGIgHAIIgKALIAAAAIAaAAIAAAGg");
		this.shape_51.setTransform(10.3, 3.7);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#001965").s().p("AgKAZQgFgBgDgEQgFgEgCgEQgBgGAAgGQAAgFABgFQACgFAFgEQADgDAFgCQAFgCAFAAQAGAAAFACQAFACADADQAEAEADAFQACAFgBAFQABAGgCAGQgCAEgEAEQgEAEgFABQgFADgGAAQgFAAgFgDgAgLgUQgFAEgDAFQgDAGAAAFQAAAFACAFIAEAHQADADAFACQAEACAEAAQAFAAAEgCQAFgCADgDQADgDABgEQACgEABgGQgBgEgCgEQgBgEgDgDQgDgDgFgDQgDgBgGAAQgFAAgGACgAgJAMQgEgEAAgIQABgDACgEQABgEADgDQAEgBADAAQAFgBAFADIgCAFQgEgDgEAAQgCAAgDAEQgCADgBAEQAAAGACADQACADAEAAIAFAAIADgBIAAAEIgDABIgFABQgGAAgEgFg");
		this.shape_52.setTransform(3.1, 3.7);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

	}).prototype = getMCSymbolPrototype(lib._2022NovoNordiskAllrightsreservedUS22OB00224June2022, new cjs.Rectangle(-2, -3.6, 236.7, 14.2), null);


	(lib.Symbol30 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.ClipGroup();
		this.instance.parent = this;
		this.instance.setTransform(336.4, 17.4, 1, 1, 0, 0, 0, 15.3, 10.9);

		this.instance_1 = new lib._2022NovoNordiskAllrightsreservedUS22OB00224June2022();
		this.instance_1.parent = this;
		this.instance_1.setTransform(471.3, 26.2, 1, 1, 0, 0, 0, 116.4, 3.5);

		this.shape = new cjs.Shape();
		this.shape.graphics.f("#AAD3D1").s().p("EhLxAC5IAAlxMCXjAAAIAAFxg");
		this.shape.setTransform(485, 18.5);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }, { t: this.instance_1 }, { t: this.instance }] }).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0, 0, 970, 37), null);


	(lib.main = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// timeline functions:
		this.frame_719 = function () {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(719).call(this.frame_719).wait(1));

		// bar top
		this.instance = new lib.Symbol31();
		this.instance.parent = this;
		this.instance.setTransform(-10.8, 16, 1, 1, 0, 0, 0, 156.5, 16);
		this.instance.alpha = 0;
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(518).to({ _off: false }, 0).to({ x: 2.6, alpha: 1 }, 15).to({ x: 168.5 }, 186).wait(1));

		// cta
		this.instance_1 = new lib.Symbol11();
		this.instance_1.parent = this;
		this.instance_1.setTransform(148.4, 157.6, 1, 1, 0, 0, 0, 72, 14);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(575).to({ _off: false }, 0).to({ alpha: 1 }, 15, cjs.Ease.get(-1)).wait(130));

		// bt
		this.instance_2 = new lib.Symbol30();
		this.instance_2.parent = this;
		this.instance_2.setTransform(150, 231.5, 1, 1, 0, 0, 0, 150, 18.5);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(518).to({ _off: false }, 0).to({ alpha: 1 }, 15, cjs.Ease.get(-1)).wait(187));

		// t11
		this.instance_3 = new lib.Symbol3();
		this.instance_3.parent = this;
		this.instance_3.setTransform(150.1, 117, 1, 1, 0, 0, 0, 134.5, 10);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(544).to({ _off: false }, 0).to({ alpha: 1 }, 15, cjs.Ease.get(-1)).wait(161));

		// t10
		this.instance_4 = new lib.Symbol2();
		this.instance_4.parent = this;
		this.instance_4.setTransform(150, 89.4, 1, 1, 0, 0, 0, 150, 17);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(544).to({ _off: false }, 0).to({ alpha: 1 }, 15, cjs.Ease.get(-1)).wait(161));

		// bg6
		this.instance_5 = new lib.Symbol24();
		this.instance_5.parent = this;
		this.instance_5.setTransform(150, 125, 1, 1, 0, 0, 0, 150, 125);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(518).to({ _off: false }, 0).to({ alpha: 1 }, 17, cjs.Ease.get(1)).wait(185));

		// bar6
		this.instance_6 = new lib.Symbol29();
		this.instance_6.parent = this;
		this.instance_6.setTransform(359.2, 139.5, 1, 1, 0, 0, 0, 157.6, 6.5);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(415).to({ _off: false }, 0).to({ y: 243.5 }, 122).wait(183));

		// t9
		this.instance_7 = new lib.Symbol5();
		this.instance_7.parent = this;
		this.instance_7.setTransform(616, 46, 1, 1, 0, 0, 0, 139, 16);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(431).to({ _off: false }, 0).wait(1).to({ regX: 735.9, regY: 136.9, x: 1209.6, y: 166.9 }, 0).wait(1).to({ x: 1198.6 }, 0).wait(1).to({ x: 1178.3 }, 0).wait(1).to({ x: 1146.6 }, 0).wait(1).to({ x: 1102 }, 0).wait(1).to({ x: 1044.7 }, 0).wait(1).to({ x: 979.7 }, 0).wait(1).to({ x: 916 }, 0).wait(1).to({ x: 861.5 }, 0).wait(1).to({ x: 819.6 }, 0).wait(1).to({ x: 790.1 }, 0).wait(1).to({ x: 771.2 }, 0).wait(1).to({ x: 761 }, 0).wait(1).to({ regX: 139, regY: 16, x: 161, y: 46 }, 0).wait(275));

		// t8
		this.instance_8 = new lib.Symbol1();
		this.instance_8.parent = this;
		this.instance_8.setTransform(617.5, 22.5, 1, 1, 0, 0, 0, 137.5, 22.5);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(427).to({ _off: false }, 0).wait(1).to({ regX: 754, regY: 37, x: 1230.7, y: 37 }, 0).wait(1).to({ x: 1219.7 }, 0).wait(1).to({ x: 1199.4 }, 0).wait(1).to({ x: 1167.7 }, 0).wait(1).to({ x: 1123.1 }, 0).wait(1).to({ x: 1065.8 }, 0).wait(1).to({ x: 1000.8 }, 0).wait(1).to({ x: 937.1 }, 0).wait(1).to({ x: 882.6 }, 0).wait(1).to({ x: 840.7 }, 0).wait(1).to({ x: 811.2 }, 0).wait(1).to({ x: 792.3 }, 0).wait(1).to({ x: 782.1 }, 0).wait(1).to({ regX: 137.5, regY: 22.5, x: 162.5, y: 22.5 }, 0).wait(279));

		// bg5
		this.instance_9 = new lib.Symbol34();
		this.instance_9.parent = this;
		this.instance_9.setTransform(150, 125, 1, 1, 0, 0, 0, 150, 125);
		this.instance_9.alpha = 0;
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(397).to({ _off: false }, 0).to({ alpha: 1 }, 18, cjs.Ease.get(-1)).wait(305));

		// Layer 40 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		var mask_graphics_341 = new cjs.Graphics().p("A/2VHMAAAgqNMA/tAAAMAAAAqNg");

		this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: null, x: 0, y: 0 }).wait(341).to({ graphics: mask_graphics_341, x: 765, y: 130.6 }).wait(379));

		// t7
		this.instance_10 = new lib.Symbol7();
		this.instance_10.parent = this;
		this.instance_10.setTransform(-337, 68, 1, 1, 0, 0, 0, 71, 28);
		this.instance_10._off = true;

		var maskedShapeInstanceList = [this.instance_10];

		for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(341).to({ _off: false }, 0).wait(1).to({ regX: 812, regY: 137, x: 407, y: 177 }, 0).wait(1).to({ x: 416.6 }, 0).wait(1).to({ x: 434.5 }, 0).wait(1).to({ x: 462.2 }, 0).wait(1).to({ x: 501.1 }, 0).wait(1).to({ x: 550.8 }, 0).wait(1).to({ x: 607.6 }, 0).wait(1).to({ x: 664 }, 0).wait(1).to({ x: 712.8 }, 0).wait(1).to({ x: 750.8 }, 0).wait(1).to({ x: 777.8 }, 0).wait(1).to({ x: 795.1 }, 0).wait(1).to({ x: 804.5 }, 0).wait(1).to({ regX: 71, regY: 28, x: 66.4, y: 68 }, 0).wait(365));

		// Layer 38 (mask)
		var mask_1 = new cjs.Shape();
		mask_1._off = true;
		var mask_1_graphics_328 = new cjs.Graphics().p("EAk/AJFIAAqfIa/AAIAAKfg");

		this.timeline.addTween(cjs.Tween.get(mask_1).to({ graphics: null, x: 0, y: 0 }).wait(328).to({ graphics: mask_1_graphics_328, x: 409.4, y: 58.1 }).wait(392));

		// t6
		this.instance_11 = new lib.Symbol18();
		this.instance_11.parent = this;
		this.instance_11.setTransform(217, 57.5, 1, 1, 0, 0, 0, 25, 18);
		this.instance_11._off = true;

		var maskedShapeInstanceList = [this.instance_11];

		for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
		}

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(328).to({ _off: false }, 0).wait(1).to({ regX: 540.5, regY: 69, x: 732.5, y: 105 }, 0).wait(1).to({ y: 101.3 }, 0).wait(1).to({ y: 97.7 }, 0).wait(1).to({ y: 94.2 }, 0).wait(1).to({ y: 91.2 }, 0).wait(1).to({ y: 88.8 }, 0).wait(1).to({ y: 87 }, 0).wait(1).to({ y: 85.7 }, 0).wait(1).to({ y: 84.7 }, 0).wait(1).to({ y: 84 }, 0).wait(1).to({ y: 83.5 }, 0).wait(1).to({ y: 83.2 }, 0).wait(1).to({ y: 83 }, 0).wait(1).to({ y: 82.9 }, 0).wait(1).to({ regX: 25, regY: 18, x: 217, y: 31.9 }, 0).wait(377));

		// bg4
		this.instance_12 = new lib.Symbol16();
		this.instance_12.parent = this;
		this.instance_12.setTransform(150, 126, 1, 1, 0, 0, 0, 150, 126);
		this.instance_12.alpha = 0;
		this.instance_12._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(302).to({ _off: false }, 0).to({ alpha: 1 }, 18, cjs.Ease.get(-1)).wait(400));

		// Layer 39 (mask)
		var mask_2 = new cjs.Shape();
		mask_2._off = true;
		var mask_2_graphics_222 = new cjs.Graphics().p("Egg+ASwIAAy5MBB9AAAIAAS5g");

		this.timeline.addTween(cjs.Tween.get(mask_2).to({ graphics: null, x: 0, y: 0 }).wait(222).to({ graphics: mask_2_graphics_222, x: 207.7, y: 120 }).wait(498));

		// t5
		this.instance_13 = new lib.Symbol6();
		this.instance_13.parent = this;
		this.instance_13.setTransform(451, 156.2, 1, 1, 0, 0, 0, 58, 41);
		this.instance_13._off = true;

		var maskedShapeInstanceList = [this.instance_13];

		for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
		}

		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(222).to({ _off: false }, 0).wait(1).to({ regX: 244, regY: 64, x: 634.1, y: 179.2 }, 0).wait(1).to({ x: 624.8 }, 0).wait(1).to({ x: 607.5 }, 0).wait(1).to({ x: 580.7 }, 0).wait(1).to({ x: 543.2 }, 0).wait(1).to({ x: 495.3 }, 0).wait(1).to({ x: 440.5 }, 0).wait(1).to({ x: 385.7 }, 0).wait(1).to({ x: 337.8 }, 0).wait(1).to({ x: 300.3 }, 0).wait(1).to({ x: 273.5 }, 0).wait(1).to({ x: 256.2 }, 0).wait(1).to({ x: 246.9 }, 0).wait(1).to({ regX: 58, regY: 41, x: 58, y: 156.2 }, 0).wait(484));

		// t4
		this.instance_14 = new lib.Symbol12();
		this.instance_14.parent = this;
		this.instance_14.setTransform(-362, 64.9, 1, 1, 0, 0, 0, 48, 49);
		this.instance_14._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(204).to({ _off: false }, 0).wait(1).to({ regX: 217, regY: 61, x: -189.9, y: 76.9 }, 0).wait(1).to({ x: -179.9 }, 0).wait(1).to({ x: -161.5 }, 0).wait(1).to({ x: -132.9 }, 0).wait(1).to({ x: -93 }, 0).wait(1).to({ x: -41.9 }, 0).wait(1).to({ x: 16.6 }, 0).wait(1).to({ x: 75 }, 0).wait(1).to({ x: 126.1 }, 0).wait(1).to({ x: 166.1 }, 0).wait(1).to({ x: 194.6 }, 0).wait(1).to({ x: 213.1 }, 0).wait(1).to({ x: 223 }, 0).wait(1).to({ regX: 48, regY: 49, x: 57.1, y: 64.9 }, 0).wait(502));

		// box4
		this.instance_15 = new lib.Symbol22();
		this.instance_15.parent = this;
		this.instance_15.setTransform(61.5, -19.6, 1, 1, 0, 0, 0, 58, 111.5);
		this.instance_15._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(186).to({ _off: false }, 0).wait(1).to({ regX: 207.7, regY: 60.5, x: 211.1, y: -70.1 }, 0).wait(1).to({ y: -68.5 }, 0).wait(1).to({ x: 211, y: -65.7 }, 0).wait(1).to({ x: 210.9, y: -61.3 }, 0).wait(1).to({ x: 210.8, y: -55.3 }, 0).wait(1).to({ x: 210.6, y: -47.5 }, 0).wait(1).to({ x: 210.3, y: -37.9 }, 0).wait(1).to({ x: 210, y: -26.5 }, 0).wait(1).to({ x: 209.7, y: -14.1 }, 0).wait(1).to({ x: 209.4, y: -1.3 }, 0).wait(1).to({ x: 209.1, y: 10.9 }, 0).wait(1).to({ x: 208.8, y: 21.9 }, 0).wait(1).to({ x: 208.6, y: 31.2 }, 0).wait(1).to({ x: 208.4, y: 38.8 }, 0).wait(1).to({ x: 208.2, y: 44.9 }, 0).wait(1).to({ x: 208.1, y: 49.5 }, 0).wait(1).to({ x: 208, y: 52.8 }, 0).wait(1).to({ x: 207.9, y: 55 }, 0).wait(1).to({ y: 56.3 }, 0).wait(1).to({ regX: 58, regY: 111.5, x: 58.2, y: 107.6 }, 0).wait(514));

		// bar3
		this.instance_16 = new lib.Symbol26();
		this.instance_16.parent = this;
		this.instance_16.setTransform(-64.2, 140, 1, 1, 0, 0, 0, 162.8, 16);
		this.instance_16._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(186).to({ _off: false }, 0).to({ y: 223.1 }, 134).wait(400));

		// bg3
		this.instance_17 = new lib.Symbol15();
		this.instance_17.parent = this;
		this.instance_17.setTransform(150, 125, 1, 1, 0, 0, 0, 150, 125);
		this.instance_17.alpha = 0;
		this.instance_17._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(186).to({ _off: false }, 0).to({ alpha: 1 }, 18, cjs.Ease.get(1)).wait(516));

		// t3
		this.instance_18 = new lib.Symbol10();
		this.instance_18.parent = this;
		this.instance_18.setTransform(-427.5, 66.4, 1, 1, 0, 0, 0, 48.5, 26.5);
		this.instance_18._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(110).to({ _off: false }, 0).wait(1).to({ regX: 242.5, regY: 85.5, x: -230, y: 125.4 }, 0).wait(1).to({ x: -218.9 }, 0).wait(1).to({ x: -198.3 }, 0).wait(1).to({ x: -166.7 }, 0).wait(1).to({ x: -122.8 }, 0).wait(1).to({ x: -67.1 }, 0).wait(1).to({ x: -3.5 }, 0).wait(1).to({ x: 60.7 }, 0).wait(1).to({ x: 118.3 }, 0).wait(1).to({ x: 165.3 }, 0).wait(1).to({ x: 201 }, 0).wait(1).to({ x: 226.3 }, 0).wait(1).to({ x: 242.7 }, 0).wait(1).to({ x: 251.7 }, 0).wait(1).to({ regX: 48.5, regY: 26.5, x: 60.5, y: 66.4 }, 0).wait(595));

		// box3
		this.instance_19 = new lib.Symbol21();
		this.instance_19.parent = this;
		this.instance_19.setTransform(-428.9, 63.9, 1, 1, 0, 0, 0, 59, 36.5);
		this.instance_19._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(106).to({ _off: false }, 0).wait(1).to({ regX: 236.5, regY: 72.5, x: -248, y: 99.9 }, 0).wait(1).to({ x: -236.8 }, 0).wait(1).to({ x: -216.3 }, 0).wait(1).to({ x: -184.7 }, 0).wait(1).to({ x: -140.7 }, 0).wait(1).to({ x: -85 }, 0).wait(1).to({ x: -21.4 }, 0).wait(1).to({ x: 42.8 }, 0).wait(1).to({ x: 100.4 }, 0).wait(1).to({ x: 147.4 }, 0).wait(1).to({ x: 183 }, 0).wait(1).to({ x: 208.4 }, 0).wait(1).to({ x: 224.8 }, 0).wait(1).to({ x: 233.8 }, 0).wait(1).to({ regX: 59, regY: 36.5, x: 59, y: 63.9 }, 0).wait(599));

		// bg2
		this.instance_20 = new lib.Symbol14();
		this.instance_20.parent = this;
		this.instance_20.setTransform(150, 125, 1, 1, 0, 0, 0, 150, 125);
		this.instance_20.alpha = 0;
		this.instance_20._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(89).to({ _off: false }, 0).to({ alpha: 1 }, 18, cjs.Ease.get(1)).wait(613));

		// t2
		this.instance_21 = new lib.Symbol17();
		this.instance_21.parent = this;
		this.instance_21.setTransform(601.5, 146.1, 1, 1, 0, 0, 0, 44.5, 27.5);
		this.instance_21._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(18).to({ _off: false }, 0).wait(1).to({ regX: 573, regY: 76, x: 1127.4, y: 194.6 }, 0).wait(1).to({ x: 1119.2 }, 0).wait(1).to({ x: 1104 }, 0).wait(1).to({ x: 1080.5 }, 0).wait(1).to({ x: 1047.6 }, 0).wait(1).to({ x: 1005.5 }, 0).wait(1).to({ x: 957.3 }, 0).wait(1).to({ x: 909.1 }, 0).wait(1).to({ x: 867 }, 0).wait(1).to({ x: 834.1 }, 0).wait(1).to({ x: 810.6 }, 0).wait(1).to({ x: 795.4 }, 0).wait(1).to({ x: 787.2 }, 0).wait(1).to({ regX: 44.5, regY: 27.5, x: 256.2, y: 146.1 }, 0).wait(688));

		// t1
		this.instance_22 = new lib.Symbol9();
		this.instance_22.parent = this;
		this.instance_22.setTransform(594.7, 84.8, 1, 1, 0, 0, 0, 55, 32.5);
		this.instance_22._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(14).to({ _off: false }, 0).wait(1).to({ regX: 628, regY: 55.5, x: 1165.2, y: 107.8 }, 0).wait(1).to({ x: 1157 }, 0).wait(1).to({ x: 1141.8 }, 0).wait(1).to({ x: 1118.3 }, 0).wait(1).to({ x: 1085.3 }, 0).wait(1).to({ x: 1043.2 }, 0).wait(1).to({ x: 995.1 }, 0).wait(1).to({ x: 946.9 }, 0).wait(1).to({ x: 904.8 }, 0).wait(1).to({ x: 871.8 }, 0).wait(1).to({ x: 848.3 }, 0).wait(1).to({ x: 833.1 }, 0).wait(1).to({ x: 824.9 }, 0).wait(1).to({ regX: 55, regY: 32.5, x: 249.4, y: 84.8 }, 0).wait(692));

		// box2
		this.instance_23 = new lib.Symbol20();
		this.instance_23.parent = this;
		this.instance_23.setTransform(628.5, 82, 1, 1, 0, 0, 0, 56.5, 34.5);
		this.instance_23._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(8).to({ _off: false }, 0).wait(1).to({ regX: 618.5, regY: 45.9, x: 1187.7, y: 93.4 }, 0).wait(1).to({ x: 1178.5 }, 0).wait(1).to({ x: 1161.6 }, 0).wait(1).to({ x: 1135.3, y: 93.5 }, 0).wait(1).to({ x: 1098.6, y: 93.6 }, 0).wait(1).to({ x: 1051.6, y: 93.8 }, 0).wait(1).to({ x: 997.9, y: 93.9 }, 0).wait(1).to({ x: 944.1, y: 94.1 }, 0).wait(1).to({ x: 897.2, y: 94.2 }, 0).wait(1).to({ x: 860.4, y: 94.3 }, 0).wait(1).to({ x: 834.2, y: 94.4 }, 0).wait(1).to({ x: 817.2, y: 94.5 }, 0).wait(1).to({ x: 808 }, 0).wait(1).to({ regX: 56.5, regY: 34.5, x: 243.3, y: 83.1 }, 0).wait(698));

		// box1
		this.instance_24 = new lib.Symbol19();
		this.instance_24.parent = this;
		this.instance_24.setTransform(635.8, 145.5, 1, 1, 0, 0, 0, 49.5, 29);
		this.instance_24._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(11).to({ _off: false }, 0).wait(1).to({ regX: 584.7, regY: 82.7, x: 1168.2, y: 199.2 }, 0).wait(1).to({ x: 1159 }, 0).wait(1).to({ x: 1142 }, 0).wait(1).to({ x: 1115.8, y: 199.3 }, 0).wait(1).to({ x: 1079, y: 199.4 }, 0).wait(1).to({ x: 1032.1, y: 199.6 }, 0).wait(1).to({ x: 978.3, y: 199.7 }, 0).wait(1).to({ x: 924.6, y: 199.9 }, 0).wait(1).to({ x: 877.6, y: 200 }, 0).wait(1).to({ x: 840.9, y: 200.1 }, 0).wait(1).to({ x: 814.6, y: 200.2 }, 0).wait(1).to({ x: 797.7, y: 200.3 }, 0).wait(1).to({ x: 788.5 }, 0).wait(1).to({ regX: 49.5, regY: 29, x: 250.5, y: 146.6 }, 0).wait(695));

		// bar1
		this.instance_25 = new lib.Symbol23();
		this.instance_25.parent = this;
		this.instance_25.setTransform(-158.7, 15.5, 1, 1, 0, 0, 0, 150, 16.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_25).to({ x: -62.3 }, 107).wait(613));

		// bg1
		this.instance_26 = new lib.Symbol13();
		this.instance_26.parent = this;
		this.instance_26.setTransform(150, 101.5, 1, 1, 0, 0, 0, 150, 101.5);
		this.instance_26.alpha = 0;

		this.timeline.addTween(cjs.Tween.get(this.instance_26).to({ alpha: 1 }, 18, cjs.Ease.get(-1)).wait(702));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-477.8, -28.5, 1446.8, 278.6);


	// stage content:
	(lib._970x250 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.instance = new lib.main();
		this.instance.parent = this;
		this.instance.setTransform(150, 125, 1, 1, 0, 0, 0, 150, 125);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(7.2, 96.5, 1446.8, 278.6);
	// library properties:
	lib.properties = {
		width: 970,
		height: 250,
		fps: 30,
		color: "#2A918B",
		opacity: 1.00,
		webfonts: {},
		manifest: [
			{ src: "https://google-ads-gwd.vercel.app/images/bg1.jpg", id: "bg1" },
			{ src: "https://google-ads-gwd.vercel.app/images/bg2.jpg", id: "bg2" },
			{ src: "https://google-ads-gwd.vercel.app/images/bg3.jpg", id: "bg3" },
			{ src: "https://google-ads-gwd.vercel.app/images/bg4.jpg", id: "bg4" },
			{ src: "https://google-ads-gwd.vercel.app/images/bg5.jpg", id: "bg5" },
			{ src: "https://google-ads-gwd.vercel.app/images/cta.png", id: "cta" },
			{ src: "https://google-ads-gwd.vercel.app/images/Group1404.png", id: "Group1404" },
			{ src: "https://google-ads-gwd.vercel.app/images/t1.png", id: "t1" },
			{ src: "https://google-ads-gwd.vercel.app/images/t10.png", id: "t10" },
			{ src: "https://google-ads-gwd.vercel.app/images/t11.png", id: "t11" },
			{ src: "https://google-ads-gwd.vercel.app/images/t2.png", id: "t2" },
			{ src: "https://google-ads-gwd.vercel.app/images/t3.png", id: "t3" },
			{ src: "https://google-ads-gwd.vercel.app/images/t4.png", id: "t4" },
			{ src: "https://google-ads-gwd.vercel.app/images/t5.png", id: "t5" },
			{ src: "https://google-ads-gwd.vercel.app/images/t6.png", id: "t6" },
			{ src: "https://google-ads-gwd.vercel.app/images/t7.png", id: "t7" },
			{ src: "https://google-ads-gwd.vercel.app/images/t8.png", id: "t8" },
			{ src: "https://google-ads-gwd.vercel.app/images/t9.png", id: "t9" }
		],
		preloads: []
	};




})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib, images, createjs, ss, AdobeAn;