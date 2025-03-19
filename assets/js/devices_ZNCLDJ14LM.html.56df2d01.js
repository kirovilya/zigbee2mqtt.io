"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[20407],{23656:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>i,data:()=>d});var a=t(6254);const n={},i=(0,t(58079).A)(n,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[11]||(o[11]=(0,a.Lk)("h1",{id:"aqara-zncldj14lm",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#aqara-zncldj14lm"},[(0,a.Lk)("span",null,"Aqara ZNCLDJ14LM")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZNCLDJ14LM")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Aqara"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("Aqara")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Curtain controller C2")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"cover (state, position), reverse_direction, hand_open, running, motor_state, power_outage_count")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZNCLDJ14LM.png",alt:"Aqara ZNCLDJ14LM"})])],-1))])]),o[12]||(o[12]=(0,a.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,a.Lk)("span",null,"OTA updates")])],-1)),(0,a.Lk)("p",null,[o[8]||(o[8]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>o[7]||(o[7]=[(0,a.eW)("OTA updates")]))),_:1}),o[9]||(o[9]=(0,a.eW)("."))]),o[13]||(o[13]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[10]||(o[10]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[14]||(o[14]=(0,a.Fv)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>limits_calibration</code>: Recalibrate the position limits. The value must be one of <code>calibrated</code>, <code>recalibrate</code>, <code>open</code>, <code>close</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. To read the current state of this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="reverse-direction-binary" tabindex="-1"><a class="header-anchor" href="#reverse-direction-binary"><span>Reverse direction (binary)</span></a></h3><p>Whether the curtain direction is inverted. Value can be found in the published state on the <code>reverse_direction</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;reverse_direction&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reverse_direction&quot;: NEW_VALUE}</code>. If value equals <code>true</code> reverse direction is ON, if <code>false</code> OFF.</p><h3 id="hand-open-binary" tabindex="-1"><a class="header-anchor" href="#hand-open-binary"><span>Hand open (binary)</span></a></h3><p>Pulling curtains by hand starts the motor. Value can be found in the published state on the <code>hand_open</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;hand_open&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;hand_open&quot;: NEW_VALUE}</code>. If value equals <code>true</code> hand open is ON, if <code>false</code> OFF.</p><h3 id="running-binary" tabindex="-1"><a class="header-anchor" href="#running-binary"><span>Running (binary)</span></a></h3><p>Whether the motor is moving or not. Value can be found in the published state on the <code>running</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> running is ON, if <code>false</code> OFF.</p><h3 id="motor-state-enum" tabindex="-1"><a class="header-anchor" href="#motor-state-enum"><span>Motor state (enum)</span></a></h3><p>The current state of the motor.. Value can be found in the published state on the <code>motor_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>closing</code>, <code>opening</code>, <code>stopped</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric"><span>Power outage count (numeric)</span></a></h3><p>Number of power outages (since last pairing). Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>',14))])}]]),d=JSON.parse('{"path":"/devices/ZNCLDJ14LM.html","title":"Aqara ZNCLDJ14LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara ZNCLDJ14LM control via MQTT","description":"Integrate your Aqara ZNCLDJ14LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-01-01T08:59:10.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Reverse direction (binary)","slug":"reverse-direction-binary","link":"#reverse-direction-binary","children":[]},{"level":3,"title":"Hand open (binary)","slug":"hand-open-binary","link":"#hand-open-binary","children":[]},{"level":3,"title":"Running (binary)","slug":"running-binary","link":"#running-binary","children":[]},{"level":3,"title":"Motor state (enum)","slug":"motor-state-enum","link":"#motor-state-enum","children":[]},{"level":3,"title":"Power outage count (numeric)","slug":"power-outage-count-numeric","link":"#power-outage-count-numeric","children":[]}]}],"git":{"updatedTime":1742360913000},"filePathRelative":"devices/ZNCLDJ14LM.md"}')}}]);