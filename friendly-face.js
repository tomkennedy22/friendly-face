const svgs = {
  arm: {
    "arms-1": {
      gender_specific: false,
      frequency: 1,
      svg: `
            <path d="M789.806,770.263C789.806,770.263 775.006,842.891 774.552,851.414C774.099,859.937 653.139,852.788 653.139,852.788L652.871,829.938L657.768,786.927L789.806,770.263Z" style="fill:{{skin_color}};"/>
            <clipPath id="_clip1">
                <path d="M789.806,770.263C789.806,770.263 775.006,842.891 774.552,851.414C774.099,859.937 653.139,852.788 653.139,852.788L652.871,829.938L657.768,786.927L789.806,770.263Z"/>
            </clipPath>
            <g clip-path="url(#_clip1)">
                <g id="Right-Arm-Reflection" transform="matrix(1.15503,0,0,1.08913,82.9783,509.308)">
                    <path d="M583.087,332.03C584.144,347.777 475.557,347.777 476.614,332.03C477.067,325.268 477.803,320.17 479.533,315.911C481.48,311.117 484.548,307.194 487.222,299.498C493.313,281.961 489.831,256.687 490.44,237.402L554.547,228.193L596.119,232.699C596.728,251.984 582.634,325.268 583.087,332.03Z" style="fill:white;fill-opacity:0.15;"/>
                </g>
            </g>
            <path d="M789.806,770.263C789.806,770.263 775.006,842.891 774.552,851.414C774.099,859.937 653.139,852.788 653.139,852.788L652.871,829.938L657.768,786.927L789.806,770.263Z" style="fill:none;stroke:black;stroke-width:3.27px;"/>
            `,
    },
  },
  ear: {
    "ears-1": {
      gender_specific: false,
      frequency: 1,
      svg: `<path d="M588.585,341.542C593.233,337.498 599.257,333.729 608.539,330.609C616.121,329.517 617.573,344.324 615.997,363.551C615.603,368.359 615.458,374.987 614.66,379.91C614.747,386.852 604.829,394.314 595.859,396.946C589.414,398.836 583.448,398.145 582.085,393.384C579.128,383.054 588.585,341.542 588.585,341.542Z" style="fill:{{skin_color}};stroke:black;stroke-width:5px;"/>`,
    },
    "ears-2": {
      svg:  `<path d="M583.147,337.92L610.98,338.56C617.659,347.935 615.742,361.986 607.735,379.35C606.938,381.062 601.873,388.353 593.86,392.132C588.063,394.865 579.22,395.978 576.528,390.774C571.591,381.23 583.147,337.92 583.147,337.92Z" style="fill:{{skin_color}};stroke:black;stroke-width:5px;"/>`
    }
  },
  eyebrow: {
    "eyebrows-1": {
      gender_specific: false,
      frequency: 1,
      svg: `
            <g id="Eyebrows-2" >
                <g id="Left-Eyebrow" transform="matrix(-1,0,0,1,1013.11,0)">
                    <path d="M523.738,305.02C533.861,301.601 544.426,301.918 554.496,303.211C565.508,305.741 572.515,309.307 579.377,314.105C572.568,305.377 565.721,296.095 557.067,294.731C550.409,293.86 543.185,293.202 536.085,294.13C530.075,295.681 526.025,301.796 523.738,305.02Z" style="fill:{{hair_color}};stroke:{{hair_color}};stroke-width:0.42px;"/>
                </g>
                <path id="Left-Eyebrow1" d="M523.738,305.02C533.861,301.601 544.426,301.918 554.496,303.211C565.508,305.741 572.515,309.307 579.377,314.105C572.568,305.377 565.721,296.095 557.067,294.731C550.409,293.86 543.185,293.202 536.085,294.13C530.075,295.681 526.025,301.796 523.738,305.02Z" style="fill:{{hair_color}};stroke:{{hair_color}};stroke-width:0.42px;"/>
            </g>`,
    },
  },
  eye: {
    "eyes-1": {
      gender_specific: false,
      frequency: 1,
      svg: `
        <g transform="matrix(0.903923,0,0,1.0698,37.1147,-34.2008)">
            <ellipse cx="475.203" cy="330.502" rx="7.785" ry="6.871"/>
            <path d="M475.203,323.631C479.499,323.631 482.988,326.709 482.988,330.502C482.988,334.294 479.499,337.373 475.203,337.373C470.906,337.373 467.418,334.294 467.418,330.502C467.418,326.709 470.906,323.631 475.203,323.631ZM475.203,326.357C477.759,326.357 479.761,328.246 479.761,330.502C479.761,332.757 477.759,334.646 475.203,334.646C472.647,334.646 470.645,332.757 470.645,330.502C470.645,328.246 472.647,326.357 475.203,326.357Z"/>
        </g>
        <g transform="matrix(-0.933812,0,0,1.04746,989.761,-26.6733)">
            <ellipse cx="475.203" cy="330.502" rx="7.785" ry="6.871"/>
            <path d="M475.203,323.631C479.499,323.631 482.988,326.709 482.988,330.502C482.988,334.294 479.499,337.373 475.203,337.373C470.906,337.373 467.418,334.294 467.418,330.502C467.418,326.709 470.906,323.631 475.203,323.631ZM475.203,326.415C472.639,326.415 470.542,328.238 470.542,330.502C470.542,332.765 472.639,334.588 475.203,334.588C477.767,334.588 479.864,332.765 479.864,330.502C479.864,328.238 477.767,326.415 475.203,326.415Z"/>
        </g>
        <g transform="matrix(1,0,0,1,0.0564878,0.62005)">
            <path d="M445.802,321.466C460.276,308.993 476.226,308.662 486.956,321.602" style="fill:none;stroke:black;stroke-width:6.25px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:1.5;"/>
        </g>
        <g transform="matrix(-1,0,0,1,1012.81,0.62005)">
            <path d="M445.802,321.466C460.276,308.993 476.226,308.662 486.956,321.602" style="fill:none;stroke:black;stroke-width:6.25px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:1.5;"/>
        </g>`,
    },
  },
  hair_base: {
    "hair-base-1": {
      svg: `
        <defs>
          <linearGradient id="_hairBase" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.5025,151.059,-151.059,1.5025,501.658,150.065)"><stop offset="0" style="stop-color:{{hair_color}};stop-opacity:1"/><stop offset="0.65" style="stop-color:{{hair_color}};stop-opacity:0.86"/><stop offset="0.84" style="stop-color:{{hair_color}};stop-opacity:0.49"/><stop offset="1" style="stop-color:{{hair_color}};stop-opacity:0.06"/></linearGradient>
        </defs>
        <path d="M501.103,190.003C470.308,191.558 448.991,197.806 437.058,207.547C429.345,225.115 426.042,243.111 425.268,261.353C423.356,273.82 418.54,287.617 410.424,295.103C404.684,262.721 408.999,226.104 428.021,192.638C447.633,172.496 467.182,160.06 495.27,156.67C498.216,153.723 557.272,167.169 572.864,191.023C591.885,224.49 593.906,262.721 588.167,295.103C580.051,287.617 575.793,273.82 573.88,261.353C573.106,243.111 573.803,225.115 566.091,207.547C558.275,193.706 503.567,187.648 501.103,190.003Z" style="fill:url(#_hairBase);"/>
        
        `
    },
    "hair-base-2": {
      svg: `
      <g id="Side-Hair" serif:id="Side Hair">
          <g>
              <path id="Right-Hair-Side" serif:id="Right Hair Side" d="M581.354,252.132C590.912,262.007 586.458,283.301 585.576,284.893C584.208,287.363 583.147,290.396 584.809,292.678C591.569,301.966 599.395,319.464 595.369,335.28L600.885,335.257C606.354,313.377 607.942,290.111 607.096,265.975L581.354,252.132Z" style="fill:url(#_Linear5);"/>
              <g id="Left-Hair-Side" serif:id="Left Hair Side" transform="matrix(-1,0,0,1,1013.66,0)">
                  <path d="M581.354,252.132C590.912,262.007 585.458,283.301 584.576,284.893C583.208,287.363 582.147,290.396 583.809,292.678C590.569,301.966 599.395,319.464 595.369,335.28L600.885,335.257C606.354,313.377 607.942,290.111 607.096,265.975L581.354,252.132Z" style="fill:url(#_Linear5);"/>
              </g>
          </g>
      </g>
      `
    }
  },
  hair_top:{
    "hair-top-1": {
      svg: `
        <path id="Hair-Top" serif:id="Hair Top" d="M401.594,238.226C402.631,244.167 405.393,266.596 405.693,267.03C405.853,267.261 428.765,257.682 432.755,252.111C484.523,238.527 533.607,238.978 580.157,251.523C585.58,252.742 596.374,264.733 603.666,266.104C604.936,266.343 606.222,266.473 607.221,265.913C608.19,265.368 608.202,262.782 608.753,260.937C610.989,253.454 610.962,239.344 610.962,239.344L613.172,222.587C611.631,220.651 611.629,217.356 610.211,215.246C608.66,212.94 606.375,212.026 604.77,209.578C603.387,207.469 603.336,204.255 602.71,201.263C601.069,200.949 599.897,198.986 598.418,198.386C597.045,197.829 595.315,198.342 593.878,197.732C591.992,196.931 590.448,194.909 589.235,193.143C587.38,192.946 586.189,191.456 584.481,190.759C582.965,190.14 581.359,190.753 579.9,189.72C578.207,188.522 576.698,185.545 575.552,182.747L562.863,178.748C563.077,175.582 562.406,173.631 561.1,172.553C559.647,170.837 557.675,170.326 556.104,169.144C553.374,167.091 550.872,165.141 547.357,166.628C545.566,170.2 543.396,172.332 540.261,170.797L527.735,165.911C524.992,166.048 523.477,167.43 522.91,169.773L519.331,169.853C515.398,168.185 511.255,167.569 507.132,166.849C504.901,162.513 502.67,160.564 500.438,160.361C494.616,160.616 490.722,162.636 488.303,165.144C486.064,167.465 482.56,168.072 479.713,170.694C477.48,168.481 474.758,166.927 470.537,167.389C467.964,169.154 466.219,171.208 461.752,174.038C457.682,176.617 450.858,171.421 448.684,173.547C445.011,177.14 444.673,186.827 443.007,187.445L434.366,190.038C431.36,194.791 424.064,196.496 416.105,197.73L411.871,201.041C410.069,204.288 410.793,207.047 409.056,210.325C406.296,215.535 402.123,219.457 401.305,225.603L405.782,233.65L401.594,238.226Z" style="fill:url(#_Linear7);stroke:black;stroke-width:0.42px;"/>
      `
    }
  },
  face_base: {
    "face-base-1": {
      gender_specific: false,
      frequency: 1,
      svg: `<path id="Face-2" d="M496.805,173.482C497.438,173.444 502.172,173.394 503.04,173.373C506.407,173.292 509.782,173.451 513.122,173.896C517.724,174.508 522.247,175.673 526.565,177.381C530.501,178.937 534.253,180.934 537.799,183.24C545.314,188.13 551.875,194.328 558.139,200.702C560.619,203.226 563.058,205.791 565.499,208.354C566.436,209.337 567.371,210.322 568.31,211.303C568.625,211.633 568.965,211.941 569.257,212.292C569.38,212.441 569.45,212.626 569.546,212.794C569.838,213.301 570.126,213.811 570.411,214.323C571.195,215.73 571.954,217.152 572.687,218.586C575.394,223.883 577.758,229.353 579.789,234.944C586.103,252.321 589.157,270.789 589.39,289.254C589.447,293.737 589.339,298.223 589.077,302.699C588.98,304.362 588.862,306.024 588.722,307.684C588.712,307.807 588.559,309.585 588.542,309.705C585.114,334.033 581.71,358.364 578.208,382.681C578.173,382.922 578.026,383.133 577.934,383.358C577.748,383.817 577.56,384.275 577.371,384.732C576.676,386.411 575.962,388.082 575.229,389.745C572.903,395.02 570.388,400.213 567.673,405.299C565.468,409.431 563.13,413.493 560.64,417.46C554.887,426.626 548.311,435.386 540.516,442.926C535.063,448.202 528.965,452.895 522.165,456.307C517.311,458.743 512.108,460.494 506.73,461.301C505.556,461.477 495.443,462.325 495.397,461.775C456.989,460.081 430.59,411.393 419.035,382.681L408.7,309.705C404.629,266.433 415.622,233.59 427.986,212.292C448.243,191.167 464.655,171.57 496.805,173.482Z" style="fill:{{skin_color}};"/>`,
    },
    "face-base-2": {
      svg: `<path d="M487.897,168.522C491.521,168.34 506.254,168.285 510.257,168.592C538.829,170.779 571.21,202.21 586.747,239.423C598.246,266.964 596.703,300.889 589.861,325.084C586.545,340.242 578.794,367.857 575.471,382.191C572.772,393.835 571.106,406.756 566.426,416.532C560.382,429.154 551.049,437.1 542.825,446.24C533.034,457.122 516.191,463.883 498.528,463.114C480.865,463.883 464.022,457.122 454.23,446.24C446.006,437.1 436.674,429.154 430.63,416.532C425.949,406.756 424.283,393.835 421.584,382.191C418.261,367.857 410.51,340.242 407.195,325.084C400.353,300.889 398.809,266.964 410.308,239.423C426.045,201.732 459.061,169.973 487.897,168.522Z" style="fill:{{skin_color}};"/>`,
    },
  },
  face_light: {
    "face-light-1": {
      gender_specific: false,
      frequency: 1,
      svg: `
            <g id="Face-22" transform="matrix(0.83077,0,0,1.09121,75.6571,-21.2937)">
                <path d="M508.028,178.506C537.071,176.777 566.082,197.297 581.14,212.244C591.8,233.281 600.854,261.884 600.594,305.741L590.23,382.936C590.145,392.128 579.001,415.449 561.882,436.167C538.622,464.317 507.038,471.761 506.62,466.799C468.212,465.105 441.814,416.417 430.258,387.705L419.924,314.729C415.853,271.457 423.7,238.645 436.063,217.347C456.32,196.221 475.878,176.594 508.028,178.506Z" style="fill:white;fill-opacity:0.15;"/>
            </g>
        `,
    },
  },
  face_shadow: {
    "face-shadow-1": {
      gender_specific: false,
      frequency: 1,
      svg: `
            <g id="Cheek-Shadow">
                <g transform="matrix(1,0,0,1,-0.803312,16.0911)">
                    <path d="M589.406,296.623C578.255,296.292 535.326,418.317 539.701,427.657C573.195,499.146 655.334,298.58 589.406,296.623Z" style="fill:{{skin_color}};"/>
                </g>
                <g transform="matrix(-1,0,0,1,997.884,16.0911)">
                    <path d="M589.406,296.623C578.255,296.292 535.326,418.317 539.701,427.657C573.195,499.146 655.334,298.58 589.406,296.623Z" style="fill:{{skin_color}};"/>
                </g>
            </g>`,
    },
  },
  forehead_reflection: {
    "forehead-1": {
      gender_specific: false,
      frequency: 1,
      svg: `
            <path d="M620.332,205.938C620.331,221.545 567.614,276.921 570.488,291.85L561.592,300.968L527.778,302.555C524.116,303.951 519.526,308.812 513.965,317.305C508.883,315.527 503.959,315.479 499.222,317.469C494.89,310.568 490.575,305.023 486.304,302.937C472.33,298.022 459.405,298.428 447.306,303.032L441.611,294.601C445.69,277.612 372.954,220.07 373.462,202.572L497.839,173.46L620.332,205.938Z" style="fill:url(#_Linear6);"/>
        `,
    },
  },
  moustache: {
    "moustache-1": {
      gender_specific: false,
      frequency: 1,
      svg: `
            <path id="Moustache-2" d="M467.627,371.815C476.423,365.158 485.133,357.968 494.248,357.482C499.906,357.181 507.89,356.234 513.531,357.299C521.066,358.722 528.939,365.439 537.871,372.598" style="fill:none;stroke:{{hair_color}};stroke-opacity:0.75;stroke-width:8.33px;stroke-miterlimit:1.5;"/>
        `,
    },
  },
  mouth: {
    "mouth-1": {
      gender_specific: false,
      frequency: 1,
      svg: `
            <g id="Mouth-2">
                <path d="M468.686,378.438C490.387,359.216 514.914,358.543 536.312,378.061C514.445,402.173 489.935,401.583 468.686,378.438Z" style="fill:{{skin_color}};"/>
                <g transform="matrix(1,0,0,1,0.157349,0.950168)">
                    <path d="M471.288,377.31C490.7,380.375 511.236,380.66 533.246,377.5" style="fill:none;stroke:black;stroke-width:5.83px;stroke-miterlimit:1.5;"/>
                </g>
            </g>
        `,
    },
  },
  neck: {
    "neck-1": {
      gender_specific: false,
      frequency: 1,
      svg: `
            <g>
                <path id="Neck-Base" d="M431.817,396.085L431.661,536.582L579.697,537.77L581.154,394.253L431.817,396.085Z" style="fill:{{skin_color}};"/>
                <clipPath id="_clip3">
                    <path id="Neck-Base1" d="M431.817,396.085L431.661,536.582L579.697,537.77L581.154,394.253L431.817,396.085Z"/>
                </clipPath>
                <g clip-path="url(#_clip3)"  style="mix-blend-mode: overlay;">
                    <g id="Neck-Reflection" transform="matrix(0.834619,0,0,1,83.8646,0)">
                        <path d="M431.817,396.085L431.661,536.582L579.697,537.77L581.154,394.253L431.817,396.085Z" style="fill:white;fill-opacity:0.15;"/>
                    </g>
                </g>
                <path id="Neck-Base2" d="M431.817,396.085L431.661,536.582L579.697,537.77L581.154,394.253L431.817,396.085Z" style="fill:none;stroke:black;stroke-width:5.17px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:1.5;"/>
            </g>`,
    },
  },
  nose_dots: {
    "nose-dot-1": {
      gender_specific: false,
      frequency: 1,
      svg: `
            <g opacity="0.27">
                <g transform="matrix(0.780458,0.625208,0.625208,-0.780458,-118.421,318.649)">
                    <g id="Dots-2">
                        <path d="M510.578,357.765L512.77,359.515" style="fill:none;stroke:white;stroke-width:2.08px;"/>
                    </g>
                </g>
            </g>
        `,
    },
  },
  nose_side: {
    "nose-side-1": {
      gender_specific: false,
      frequency: 1,
      svg: `
            <path d="M513.718,304.01C513.969,308.591 512.947,323.471 512.604,327.539C511.917,335.69 519.82,347.924 526.105,346.041L513.718,304.01Z" style="fill:{{skin_color}};"/>
        `,
    },
  },
  nostrils: {
    "nostrils-1": {
      gender_specific: false,
      frequency: 1,
      svg: `
            <g id="Nose-2">
                <path d="M488.998,351.244C483.435,357.689 480.683,365.086 483.047,366.961C484.515,368.125 488.122,364.567 492.677,363.601L501.916,367.79L508.819,367.634L519.605,363.94C523.807,364.518 528.442,368.074 529.827,366.731C531.399,364.178 528.746,355.425 523.624,350.988" style="fill:none;stroke:black;stroke-width:5px;"/>
            </g>
        `,
    },
  },
  shirt: {
    "shirt-1": {
      gender_specific: false,
      frequency: 1,
      svg: `
        <g>
            <path d="M507.42,532.722C553.792,531.703 576.74,507.538 585.012,465.446L604.418,479.57C656.026,499.88 704.886,520.705 749.661,545.187C760.017,556.026 771.836,588.132 776.66,621.673C780.892,651.094 780.535,684.127 783.795,712.01C787.522,743.891 796.851,769.417 797.195,773.843C777.989,791.677 732.311,795.338 675.099,795.056L674.238,710.554L673.86,851.588L340.98,851.588L340.602,710.554L339.741,795.056C282.529,795.338 236.851,791.677 217.646,773.843C217.989,769.417 227.318,743.891 231.046,712.01C234.306,684.127 233.949,651.094 238.18,621.673C243.004,588.132 256.149,555.428 266.505,544.588C311.28,520.106 355.814,499.88 407.422,479.57L426.828,465.446C435.1,507.538 461.048,531.703 507.42,532.722Z" style="fill:{{shirt_color}};stroke:black;stroke-width:5.14px;stroke-miterlimit:1.5;"/>
        </g>`,
    },
  },
  soul_patch: {
    "soul-patch-1": {
      gender_specific: false,
      frequency: 1,
      svg: `
            <g id="Soul-Patch">
                <path id="Soul-Patch-2" d="M495.125,448.983C501.254,451.308 509.557,451.098 515.686,448.764C518.988,454.707 490.808,454.655 495.125,448.983Z" style="fill-opacity:0.75;"/>
            </g>`,
    },
  },
  templates: {
    "template-1": {
      gender_specific: false,
      frequency: 1,
      svg: `
                <svg width="100%" height="100%" viewBox="150 150 700 700" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;">
                    <g transform="matrix(1,0,0,1,-8.22338,-5.02399)">
                        <g id="Ears" transform="matrix(1,0,0,1,-3,0)">
                            <g id="Ears-2">
                                <g id="Left-Ear" transform="matrix(-1,0,0,1,1019.32,-22.1421)">
                                    {{ ear|safe }}
                                </g>
                                <g id="Right-Ear" transform="matrix(1,0,0,1,0.240088,-22.1421)">
                                    {{ ear|safe }}
                                </g>
                            </g>
                        </g>
                        <g id="Arms" transform="matrix(0.86578,0,0,0.91816,106.008,63.0382)">
                            <g>
                                <g id="Right-Arm" transform="matrix(1,0,0,1,-9.24022,0)">
                                    {{ arm|safe }}
                                </g>
                                <g id="Left-Arm" transform="matrix(-1,0,0,1,937.93,0)">
                                    {{ arm|safe }}
                                </g>
                            </g>
                        </g>
                        <g id="Neck" transform="matrix(0.931256,0,0,1,35.5428,0)">
                            {{ neck|safe }}
                        </g>
                        <g id="Shirt" transform="matrix(0.945664,0,0,1,28.3746,0)">
                            {{ shirt|safe }}
                        </g>
                        <g id="Face">
                            <g transform="matrix(1,0,0,1,8.22338,5.02399)">
                                <g id="Faces">
                                    {{ face_base|safe }}
                                    <clipPath id="_clip4">
                                        {{ face_base|safe }}
                                    </clipPath>

                                    <g id='face_light' clip-path="url(#_clip4)" style="mix-blend-mode: overlay;">
                                        {{ face_light|safe }}
                                    </g>
                                    <g id='face_shadow' clip-path="url(#_clip4)">
                                        {{ face_shadow|safe }}
                                        
                                        <g id='hair_base' transform="matrix(1,0,0,1,-0.803312,16.0911)">
                                          {{hair_base|safe}}
                                        </g>
                                    </g>
                                    {{ face_base|style( "fill:none;stroke:black;stroke-width:5px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:1.5;")|safe }}
                                </g>
                            </g>
                            <g id="hair_top">
                                {{hair_top|safe}}
                            </g>
                            <g id="Soul-Patch" transform="matrix(1,0,0,1,3.92409,-30.3131)">
                                {{soul_patch|safe}}
                            </g>
                            <g id="Moustache" transform="matrix(1,0,0,1,7.42007,18.1151)">
                                {{ moustache|safe }}
                            </g>
                            <g id="Forehead-Reflection" transform="matrix(1,0,0,1,0,-15)">
                                {{ forehead_reflection|safe }}
                            </g>
                            <g id="Nose" transform="matrix(1,0,0,1,0,-1)">
                                <g id="Nose-Side">
                                    {{nose_side|safe}}
                                </g>
                                <g id="Nose-Dots" transform="matrix(1,0,0,1,4,-2)">
                                    {{nose_dots|safe}}
                                </g>
                                <g transform="matrix(1,0,0,1,3.19559,-2.26554)">
                                    <g id="Nostrils">
                                        {{nostrils|safe}}
                                    </g>
                                </g>
                            </g>
                            <g id="Wrinkles" transform="matrix(1,0,0,1,0,-15)">
                                <g opacity="0.43">
                                    <g id="Upper-Wrinkles">
                                        <g id="Under-Eye-Wrinkles">
                                            {{wrinkles_under_eye|safe}}
                                        </g>
                                    </g>
                                    <g id="Chin-Wrinkles" transform="matrix(1,0,0,-1,4,880.036)">
                                    {{wrinkles_under_chin|safe}}

                                    </g>
                                </g>
                            </g>
                            <g id="Eyebrows" transform="matrix(1,0,0,1,0,-15)">
                                {{eyebrow|safe}}
                            </g>
                            <g transform="matrix(1,0,0,1,7.42007,21.1151)">
                                <g id="Mouth">
                                    {{mouth|safe}}
                                </g>
                            </g>
                            <g id="Eyes" transform="matrix(1,0,0,1,0,-15)">
                                {{eye|safe}}
                            </g>
                        </g>
                    </g>
                    <defs>
                        <linearGradient id="_Linear6" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.468924,117.149,-117.149,-0.468924,511.82,216.745)"><stop offset="0" style="stop-color:white;stop-opacity:0"/><stop offset="0.65" style="stop-color:white;stop-opacity:0.05"/><stop offset="0.84" style="stop-color:white;stop-opacity:0.18"/><stop offset="1" style="stop-color:white;stop-opacity:0.33"/></linearGradient>
                    </defs>
                </svg>
        `,
    },
  },
  wrinkles_under_eye: {
    "under-eye-wrinkles-1": {
      gender_specific: false,
      frequency: 1,
      svg: `
            <g id="Under-Eye-Wrinkles-1">
                <g transform="matrix(1,0,0,1,1.67944,2.43465)">
                    <path d="M515.193,318.505C519.154,322.682 524.472,326.002 529.833,328.079" style="fill:none;stroke:{{skin_color}};stroke-width:4.17px;"/>
                </g>
                <g transform="matrix(-1,0,0,1,1010.71,2.43465)">
                    <path d="M515.193,318.505C519.154,322.682 524.472,326.002 529.833,328.079" style="fill:none;stroke:{{skin_color}};stroke-width:4.17px;"/>
                </g>
            </g>
        `,
    },
  },
  wrinkles_under_chin: {
    "under-chin-wrinkles-1": {
      gender_specific: false,
      frequency: 1,
      svg: `
            <g id="Chin-Wrinkle-1">
                <path d="M487.839,427.197C499.254,431.46 510.668,431.847 522.083,426.574" style="fill:none;stroke:{{skin_color}};stroke-width:4.17px;"/>
            </g>
        `,
    },
  },
};

const option_html_template = `
<tr class='selection-group'>
    <td class="example square">
        <p>Shirt Color</p>
        <input type="text" class="coloris" id='shirt-color-picker' value='#e76f51'>
    </td>
    <td class="example square">
        <p>Skin Color</p>
        <input type="text" class="coloris" id='skin-color-picker' value='rgb(120,44,21)'>
    </td>
    <td class="example square">
        <p>Hair Color</p>
        <input type="text" class="coloris" id='hair-color-picker' value='#000'>
    </td>
</tr>
<tr class='selection-group dropdown-group'>
{% for svg_group_name, svg_options in svgs %}
<td>
<div class="dropdown" style='padding: 4px;'>
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       Choose {{svg_group_name}}
    </a>
    <ul class="dropdown-menu">
        {% for svg_item_name, svg_item_obj in svg_options%}
        <li class='dropdown-li' svg-id='{{svg_item_name}}' svg-group='{{svg_group_name}}'>
            <a>
            {{svg_item_name}} 
            </a>
            <!--<svg viewBox="0 0 100 100" preserveAspectRatio="none" style="width: 100%; height: 100%;" xmlns="http://www.w3.org/2000/svg">
                {{svg_item_obj.svg|safe}}
            </svg>-->
        </li>
        {% endfor %}
    </ul>
</div>
</td>


    {% if loop.index0 % 3 == 1 or loop.last%}
      </tr>
      {% if not loop.last%}
        <tr class='selection-group dropdown-group'>
      {% endif %}
    {%endif %}

{% endfor %}
`;

let nunjucks_env = new nunjucks.Environment();

nunjucks_env.addFilter("style", function (element, added_style) {
  if (!element) {
    return "";
  }

  const parser = new DOMParser();
  const fragment = parser.parseFromString(element, "text/html");
  const pathElement = fragment.querySelector("path");

  pathElement.setAttribute("style", added_style);

  return pathElement.outerHTML;
});

const draw_template = async (body_chosen, colors_chosen) => {
  let template = svgs.templates["template-1"].svg;
  let container = document.getElementById("image-container");

  console.log({
    body_chosen:body_chosen,
    colors_chosen:colors_chosen
  })

  let body_svgs = {}

  Object.entries(body_chosen).forEach(async function (body_part_obj) {
    let part_name = body_part_obj[0];
    let chosen_part = body_part_obj[1];

    body_svgs[part_name] = svgs[part_name][chosen_part].svg;
  });

  console.log({
    body_svgs: body_svgs,
    colors_chosen: colors_chosen,
  });

  let template_filled = await nunjucks_env.renderString(template, body_svgs);
  template_filled = await nunjucks_env.renderString(template_filled, colors_chosen);

  container.innerHTML = template_filled;
};

const get_colors = () => {
  let shirt_color_picker = document.getElementById("shirt-color-picker");
  let skin_color_picker = document.getElementById("skin-color-picker");
  let hair_color_picker = document.getElementById("hair-color-picker");

  let colors_chosen = {};

  if (skin_color_picker && skin_color_picker.parentElement){
    colors_chosen.skin_color = skin_color_picker.parentElement.style.color || skin_color_picker.getAttribute("value")
  }
  else {
    colors_chosen.skin_color = "rgb(120,44,21)";
  }

  if (shirt_color_picker && shirt_color_picker.parentElement){
    colors_chosen.shirt_color = shirt_color_picker.parentElement.style.color || shirt_color_picker.getAttribute("value");
  }
  else {
    colors_chosen.shirt_color = "#e76f51";
  }

  if (hair_color_picker && hair_color_picker.parentElement){
    colors_chosen.hair_color = hair_color_picker.parentElement.style.color || hair_color_picker.getAttribute("value");
  }
  else {
    colors_chosen.hair_color = "#000";
  }

  return colors_chosen;
}

const draw_options = async () => {

  let menus = document.getElementsByClassName('dropdown-menu');
  console.log({
    menus:menus
  })

  let body_chosen = {}
  Object.keys(svgs).forEach(k => body_chosen[k] = (body_chosen[k] ||  Object.keys(svgs[k])[0]));

  console.log({
    body_chosen:body_chosen
  })

  let colors_chosen = get_colors();

  let template_filled = await nunjucks_env.renderString(option_html_template, { svgs: svgs });
  template_filled = await nunjucks_env.renderString(template_filled, colors_chosen);

  const elements = document.querySelectorAll('.dropdown-group');
  elements.forEach(e => e.remove())

  let container = document.getElementById("selection-container");
  container.innerHTML += template_filled;

  Coloris({
    el: ".coloris",
    swatches: [
      "#264653",
      "#2a9d8f",
      "#e9c46a",
      "#f4a261",
      "#e76f51",
      "#d62828",
      "#023e8a",
      "#0077b6",
      "#0096c7",
      "#00b4d8",
      "#48cae4",
    ],
  });
  
  Coloris.setInstance("#shirt-color-picker", {
    theme: "pill",
    themeMode: "dark",
    formatToggle: true,
    alpha: false,
    swatches: ["#067bc2", "#84bcda", "#80e377", "#ecc30b", "#f37748", "#d56062"],
    // onChange: draw_template,
    defaultColor: colors_chosen.shirt_color,
  });
  
  Coloris.setInstance("#skin-color-picker", {
    theme: "pill",
    themeMode: "dark",
    formatToggle: true,
    alpha: false,
    swatches: ["#F08D4B", "#EA8E46", "#782514", "#A2412A", "#F6954E", "#FDA26B", "rgb(120,44,21)"],
    // onChange: draw_template,
    defaultColor: colors_chosen.skin_color,
  });
  
  Coloris.setInstance("#hair-color-picker", {
    theme: "pill",
    themeMode: "dark",
    formatToggle: true,
    alpha: true,
    swatches: ["#000", "rgb(120,44,21)"],
    // onChange: draw_template,
    defaultColor: colors_chosen.hair_color,
  });

  document.addEventListener('coloris:pick', event => {
    console.log({event:event, this:this});
    colors_chosen = get_colors();
    draw_template(body_chosen, colors_chosen);
  });


  draw_template(body_chosen, colors_chosen);

  const dropdown_lis = document.querySelectorAll(".dropdown-li");

  dropdown_lis.forEach(li => {
    li.onclick = function() {
      console.log({li:li})
      let svg_id = li.getAttribute('svg-id');
      let svg_group = li.getAttribute('svg-group');
      body_chosen[svg_group] = svg_id;
      draw_template(body_chosen, colors_chosen)
    };
  });
};

draw_options()


// draw_options();
