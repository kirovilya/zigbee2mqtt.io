"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[86121],{6533:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>s,data:()=>o});var i=n(6254);const a={},s=(0,n(58079).A)(a,[["render",function(e,t){const n=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[9]||(t[9]=(0,i.Lk)("h1",{id:"xiaomi-wxkg01lm",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#xiaomi-wxkg01lm"},[(0,i.Lk)("span",null,"Xiaomi WXKG01LM")])],-1)),(0,i.Lk)("table",null,[t[7]||(t[7]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"WXKG01LM")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(n,{to:"/supported-devices/#v=Xiaomi"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Xiaomi")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Mi wireless switch")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"battery, voltage, power_outage_count, action")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WXKG01LM.png",alt:"Xiaomi WXKG01LM"})])],-1)),t[6]||(t[6]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"White-label"),(0,i.Lk)("td",null,"Xiaomi YTC4040GL, Xiaomi YTC4006CN, Xiaomi YTC4017CN, Xiaomi ZHTZ02LM")],-1))])]),t[10]||(t[10]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="battery-type" tabindex="-1"><a class="header-anchor" href="#battery-type"><span>Battery Type</span></a></h3><p>Uses a CR2032 battery</p><h3 id="deprecated-click-event" tabindex="-1"><a class="header-anchor" href="#deprecated-click-event"><span>Deprecated click event</span></a></h3><p>By default this device exposes a deprecated <code>click</code> event. It&#39;s recommended to use the <code>action</code> event instead.</p><p>To disable the <code>click</code> event, set <code>legacy: false</code> for this device in <code>configuration.yaml</code>. Example:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">devices</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_device</span>\n<span class="line">    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). After this the device will automatically join.</p><p>If that doesn&#39;t work press the link button for a few seconds and the LED will flash. After this first phase, you have to make quick clicks on the button (normal clicks on the device, not on the link button) until the LED flashes again. After this second flashing phase the device will be paired.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding"><span>Binding</span></a></h3><p>This device does <strong>not</strong> support binding.</p><h3 id="troubleshooting-device-stops-sending-messages-disconnects-from-network" tabindex="-1"><a class="header-anchor" href="#troubleshooting-device-stops-sending-messages-disconnects-from-network"><span>Troubleshooting: device stops sending messages/disconnects from network</span></a></h3><p>Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network. Most of the times this happens because of the following reasons:</p><ul><li>Device has a weak signal, you can see the signal quality in the published messages as <code>linkquality</code>. A linkquality &lt; 20 is considered weak.</li><li>Low battery voltage, this can even happen when the battery still appears full. Try a different battery.</li><li>The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, Legrand, OSRAM, Sylvania, SmartThings, Securifi. A possible solution is to connect the device directly to the central coordinator by pushing the reset button while being physically close to it.</li></ul><p>More detailed information about this can be found <a href="https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623" target="_blank" rel="noopener noreferrer">here</a>.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',17)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[8]||(t[8]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[11]||(t[11]=(0,i.Fv)('<ul><li><p><code>hold_timeout</code>: The WXKG01LM only reports a button press and release.By default, a hold action is published when there is at least 1000 ms between both events. It could be that due to delays in the network the release message is received late. This causes a single click to be identified as a hold action. If you are experiencing this you can try experimenting with this option (e.g. set it to 2000) (value is in ms). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>hold_timeout_expire</code>: Sometimes it happens that the button does not send a release. To avoid problems a release is automatically send after a timeout. The default timeout is 4000 ms, you can increase it with this option (value is in ms). The value must be a number with a minimum value of <code>0</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric"><span>Power outage count (numeric)</span></a></h3><p>Number of power outages. Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>, <code>triple</code>, <code>quadruple</code>, <code>hold</code>, <code>release</code>, <code>many</code>.</p>',10))])}]]),o=JSON.parse('{"path":"/devices/WXKG01LM.html","title":"Xiaomi WXKG01LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Xiaomi WXKG01LM control via MQTT","description":"Integrate your Xiaomi WXKG01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Battery Type","slug":"battery-type","link":"#battery-type","children":[]},{"level":3,"title":"Deprecated click event","slug":"deprecated-click-event","link":"#deprecated-click-event","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Binding","slug":"binding","link":"#binding","children":[]},{"level":3,"title":"Troubleshooting: device stops sending messages/disconnects from network","slug":"troubleshooting-device-stops-sending-messages-disconnects-from-network","link":"#troubleshooting-device-stops-sending-messages-disconnects-from-network","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Power outage count (numeric)","slug":"power-outage-count-numeric","link":"#power-outage-count-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1742360913000},"filePathRelative":"devices/WXKG01LM.md"}')}}]);