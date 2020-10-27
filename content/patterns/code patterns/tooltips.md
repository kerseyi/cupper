+++
title = "Tooltips"
weight = 1
toc = true
tags = ["tooltips"]
+++

## Accessible Tooltips

### Demo

{{<demo caption="Accessible Tooltip">}}
<style>
    [role="tooltip"] {
  display: none;
  border: 2px solid black;
  padding: 10px;
  border-radius: 5px;
  width: 40%;
}
.arrow_box {
    position: relative;
    background: #fff;
    border: 2px solid #000;
    margin-top: 10px;
}
.arrow_box:after, .arrow_box:before {
    bottom: 100%;
    left: 15%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.arrow_box:after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #fff;
    border-width: 20px;
    margin-left: -20px;
}
.arrow_box:before {
    border-color: rgba(0, 0, 0, 0);
    border-bottom-color: #000;
    border-width: 23px;
    margin-left: -23px;
}

button:hover + [role="tooltip"],  
button:focus + [role="tooltip"] {  
  display: block;
}
 button {
            font-size: 1.25rem;
            border-radius: 0.33em;
            font-family: inherit;
            width: 50px;
            height: 50px;
            color: #fefefe;
            padding: 0.75rem;
            border: 0;
            background: #fff;
        }
svg {
    width: 100%;
}
</style>
<button class="notifications" aria-labelledby="tooltip-label">  
  <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><path d="M13,17h-2v-2h2V17z"></path><g><path d="M12,4c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S7.6,4,12,4 M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10   C22,6.5,17.5,2,12,2L12,2z"></path></g><g><path d="M11,14c0-1.4,0.6-1.9,1.1-2.4c0.3-0.2,0.5-0.5,0.6-0.8c0.2-0.3,0.2-0.6,0.2-1c0-0.4-0.1-0.7-0.3-1   c-0.2-0.2-0.4-0.4-0.8-0.4c-0.3,0-1,0.1-1,1.5H9l0-0.4c0-0.9,0.3-1.5,0.8-2C10.4,7.2,11.1,7,11.9,7c1,0,1.7,0.2,2.2,0.8   s0.8,1.2,0.8,2c0,2.4-2,2.5-2,4.2H11z"></path></g></svg>
</button>  
<div class="arrow_box" role="tooltip" id="tooltip-label">Hi, I'm tooltip text! Hopefully, something useful and brief.</div>
{{</demo>}}

### Code

