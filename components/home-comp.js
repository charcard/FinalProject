"use strict";
console.log("home comp!");

const homeComponent = {
    template: `
    <header class="home-header">
    <img class="logo" src="images/logo.png">
        <a href="#!/home-comp" id="headerlink">
            <h1>Blank Canvas</h1>
        </a>
    </header>
    
    <div class="container">
        <img class="image" src="images/igor-miske-177849-unsplash.jpg" alt="museum">
    </div>

    <section class="text-flex">
        <div class="text-wrapper">The Art of Discovery</div>
        <p>search for art by...</p>
    </section>

    <section class="homebuttoncontainer">
    <a href="#!/color-comp" div class="homebutton"</a>
        <img src="images/colors.jpg" alt="Paint">
    <div class="imagebuttonoverlay"><p>color</p></div>
    </div>
    <a href="#!/type-comp" div class="homebutton"</a>
        <img src="images/stained-glass.jpg" alt="Stained Glass">
    <div class="imagebuttonoverlay"><p>type</p></div>
    </div>
    <a href="#!/culture-comp" div class="homebutton"</a>
        <img src="images/redlanterns.jpg" alt="Lanterns">
    <div class="imagebuttonoverlay"><p>culture</p></div>
    </div>
    </section>
`,

}



angular
.module("app")
.component("homeComponent", homeComponent);

/* 
<section class="mainbuttons">


        <a href="#!/color-comp" class="colorlink">color</a>

    
        <a href="#!/type-comp" class="typelink">type</a>


        <a href="#!/culture-comp" class="culturelink">culture</a>


  </section>

*/ 