import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-something-interesting",
  template: `
    <div class="face-container">
      <div class="ear ear-right"></div>

      <div class="ear ear-left"></div>

      <div class="face-base">
        <div
          class="beard beard-right"
          [ngStyle]="STATES[currentState].beardRight"
        ></div>
        <div
          class="beard beard-left"
          [ngStyle]="STATES[currentState].beardLeft"
        ></div>
        <div class="beard-cover-top"></div>
        <div class="beard-cover-bottom"></div>

        <!--
        <div class="ref-line-1"></div>
        <div class="ref-line-2"></div>
        -->

        <div class="gleam"></div>

        <div class="eyebrow eyebrow-right"></div>

        <div class="eye eye-right">
          <div class="iris">
            <div class="pupil"></div>
          </div>
        </div>

        <div class="eyebrow eyebrow-left"></div>

        <div class="eye eye-left">
          <div class="iris">
            <div class="pupil"></div>
          </div>
        </div>

        <div class="nose">
          <div class="nostril nostril-right"></div>
          <div class="nostril nostril-left"></div>
          <div class="bridge"></div>
        </div>

        <div class="mouth">
          <div class="lip lip-top"></div>
          <div class="lip lip-bottom"></div>
        </div>
      </div>

      <div class="razor" [ngStyle]="STATES[currentState].razor">
        <div class="handle"></div>
        <div class="handle-cover"></div>
        <div class="blade">
          <div class="blade-texture"></div>
        </div>
      </div>

      <p class="signature">Dominic Aquilina, your next great hire</p>
    </div>
  `,
  styles: [
    "* { transition: all 1s ease-in-out; }",
    ".face-container .ref-line-1 { position: absolute; left: 50%; top: 0; background-color: #000000; height: 100%; z-index: 9001; width: 1px; transform: translateX(-50%); }",
    ".face-container .ref-line-2 { position: absolute; left: 0; top: 50%; background-color: #000000; z-index: 9001; height: 1px; width: 100%; translateY: (-50%); }",
    ".face-container { position: relative; height: 400px; width: 400px; border: 1px solid #000000; border-radius: 5px; text-align: center; }",
    ".face-container .face-base { position: relative; top: 50%; background-color: #ffc3aa; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 75% 215px; border-top-right-radius: 75% 215px; height: 300px; width: 225px; margin: 0 auto; transform: translateY(-50%); overflow: hidden; }",
    ".face-container .face-base .gleam { position: absolute; right: 10px; top: 30px; width: 60px; height: 45px; display: inline-block; margin: 5px; border-top-right-radius: 13%; background: radial-gradient(farthest-side at right top, transparent 98%, rgb(255, 195, 170) 100%) 100% 19% / 29px 16% no-repeat, radial-gradient(116% 70% at left bottom, rgb(255, 195, 170) 123%, transparent 100%), radial-gradient(107% 100% at left bottom, rgb(255, 255, 255) 99%, transparent 100%); transform: rotate(15deg); }",
    ".face-container .face-base .eye { position: absolute; left: 20%; right: auto; top: 130px; background-color: #ffffff; border-radius: 100% 0; width: 40px; height: 40px; transform: rotate(50deg); overflow: hidden; z-index: 2; }",
    ".face-container .face-base .eye.eye-left { position: absolute; left: auto; right: 20%; transform: rotate(-50deg) scaleX(-1); }",
    ".face-container .face-base .eye .iris { position: absolute; left: 10px; top: 0px; background-color: brown; border-radius: 100%; height: 30px; width: 30px; }",
    ".face-container .face-base .eye .iris .pupil { position: absolute; left: 5px; top: 5px; background-color: #000000; border-radius: 100%; height: 20px; width: 20px; }",
    ".face-container .face-base .eyebrow { position: absolute; left: 120px; top: 110px; width: 60px; height: 45px; display: inline-block; margin: 5px; border-top-right-radius: 13%; background: radial-gradient(farthest-side at top left, transparent 98%, #ffc3aa 100%) 100% 19%/29px 16% no-repeat, radial-gradient(116% 70% at bottom right, #ffc3aa 99%, transparent 100%), radial-gradient(107% 100% at bottom right, #a52a2a 99%, transparent 100%); z-index: 1; }",
    ".face-container .face-base .eyebrow.eyebrow-left { left: 35px; transform: scaleX(-1); }",
    ".face-container .face-base .nose { position: absolute; top: 55%; left: 50%; height: 40px; width: 30px; transform: translateX(-50%); }",
    ".face-container .face-base .nose .bridge { position: absolute; bottom: 0; left: 0; right: 0; top: 0; background-color: #f0b8a0; border-bottom: 1px solid #000000; border-radius: 100% 100% 50% 50%; z-index: 2; }",
    ".face-container .face-base .nose .nostril { position: absolute; left: -7px; top: 20px; height: 15px; width: 15px; 50%; background-color: #f0b8a0; border-bottom: 1px solid #000000; border-radius: 100%; z-index: 1; }",
    ".face-container .face-base .nose .nostril.nostril-left { left: 23px; }",
    ".face-container .face-base .mouth { position: absolute; top: 235px; left: 50%; transform: translateX(-50%); }",
    ".face-container .face-base .mouth .lip { height: 8px; width: 40px; background-color: #f46e7b; border-radius: 100% 100% 0 0; }",
    ".face-container .face-base .mouth .lip.lip-bottom { background-color: #e35d6a; border-top: 1px solid #777777; border-radius: 0 0 100% 100%; }",
    ".face-container .face-base .beard { position: absolute; bottom: 0; left: 50%; right: 50%; top: 65%; background-color: #a52a2a; }",
    ".face-container .face-base .beard.beard-left { right: 0; }",
    ".face-container .face-base .beard.beard-right { left: 0; }",
    ".face-container .face-base .beard-cover-bottom { position: absolute; top: 230px; left: 35%; right: 35%; height: 30px; background-color: #ffc3aa; border-radius: 100%; }",
    ".face-container .face-base .beard-cover-top { position: absolute; top: 55%; left: 15%; right: 15%; bottom: 80px; background-color: #ffc3aa; border-radius: 100%; }",
    ".razor { position: absolute; top: 300px; left: 30px; height: 60px; width: 40px; transform: rotate(0deg); }",
    ".razor .handle { position: absolute; left: 50%; top: 10px; height: 50px; width: 5px; background-color: #999999; transform: translateX(-50%); }",
    ".razor .handle-cover { position: absolute; bottom: 0; left: 15px; right: 15px; top: 20px; background-color: black; }",
    ".razor .blade { position: absolute; left: 50%; top: 0px; background-color: #999999; height: 10px; width: 40px; transform: translateX(-50%); }",
    ".razor .blade .blade-texture { position: absolute; left: 0; right: 0; top: 0; background-color: #ababab; height: 3px; }",
    ".signature { position: absolute; bottom: 0px; right: 5px; margin: 0; }",
  ],
})
export class SomethingInterestingComponent implements OnDestroy, OnInit {
  STATES = [
    {
      razor: {
        left: "30px",
        rotate: "0deg",
        top: "300px",
      },
      beardLeft: {
        top: "65%",
      },
      beardRight: {
        top: "65%",
      },
    },
    {
      razor: {
        left: "110px",
        rotate: "-15deg",
        top: "225px",
      },
      beardLeft: {
        top: "65%",
      },
      beardRight: {
        top: "65%",
      },
    },
    {
      razor: {
        left: "180px",
        rotate: "-30deg",
        top: "360px",
      },
      beardLeft: {
        top: "65%",
      },
      beardRight: {
        top: "100%",
      },
    },
    {
      razor: {
        left: "260px",
        rotate: "15deg",
        top: "225px",
      },
      beardLeft: {
        top: "65%",
      },
      beardRight: {
        top: "100%",
      },
    },
    {
      razor: {
        left: "190px",
        rotate: "30deg",
        top: "360px",
      },
      beardLeft: {
        top: "100%",
      },
      beardRight: {
        top: "100%",
      },
    },
    {
      razor: {
        left: "30px",
        rotate: "0deg",
        top: "300px",
      },
      beardLeft: {
        opacity: "0.0",
        top: "100%",
      },
      beardRight: {
        opacity: "0.0",
        top: "100%",
      },
    },
    {
      razor: {
        left: "30px",
        rotate: "0deg",
        top: "300px",
      },
      beardLeft: {
        opacity: "0.0",
        top: "65%",
      },
      beardRight: {
        opacity: "0.0",
        top: "65%",
      },
    },
  ];

  currentState = 0;

  private _interval: number;

  ngOnDestroy(): void {
    clearInterval(this._interval);
  }

  ngOnInit(): void {
    this._interval = setInterval(() => {
      this.currentState = ++this.currentState % this.STATES.length;
    }, 1000);
  }
}
