import React from 'react';
import './Banner.css'

function Banner(){
    
    return(
      <div>
        <header class="sans-serif">
          <div class="cover bg-left bg-center1">
            <div class="bg-black-80">
              <div class="tc-l ph3">
                <h1 class="f2 f1-l fw2 white-90 pt6 mt0 lh-title">This is your super impressive headline</h1>
                <h2 class="fw1 f3 pb6 mb0 white-80">Now a subheadline where explain your wonderful new startup even more</h2>
              </div>
            </div>
          </div> 
        </header>
      </div>
    );
}
export default Banner;