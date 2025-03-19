"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[3162],{78764:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>o,data:()=>i});var s=a(6254);const n={},o=(0,a(58079).A)(n,[["render",function(e,t){const a=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[t[8]||(t[8]=(0,s.Lk)("h1",{id:"saswell-sea801-zigbee-sea802-zigbee",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#saswell-sea801-zigbee-sea802-zigbee"},[(0,s.Lk)("span",null,"Saswell SEA801-Zigbee/SEA802-Zigbee")])],-1)),(0,s.Lk)("table",null,[t[7]||(t[7]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th"),(0,s.Lk)("th")])],-1)),(0,s.Lk)("tbody",null,[t[2]||(t[2]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Model"),(0,s.Lk)("td",null,"SEA801-Zigbee/SEA802-Zigbee")],-1)),(0,s.Lk)("tr",null,[t[1]||(t[1]=(0,s.Lk)("td",null,"Vendor",-1)),(0,s.Lk)("td",null,[(0,s.bF)(a,{to:"/supported-devices/#v=Saswell"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("Saswell")]))),_:1})])]),t[3]||(t[3]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Description"),(0,s.Lk)("td",null,"Thermostatic radiator valve")],-1)),t[4]||(t[4]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Exposes"),(0,s.Lk)("td",null,"battery_low, switch (state), child_lock, heating, climate (current_heating_setpoint, local_temperature, system_mode, running_state, local_temperature_calibration)")],-1)),t[5]||(t[5]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Picture"),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SEA801-Zigbee-SEA802-Zigbee.png",alt:"Saswell SEA801-Zigbee/SEA802-Zigbee"})])],-1)),t[6]||(t[6]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"White-label"),(0,s.Lk)("td",null,"HiHome WZB-TRVL, Hama 00176592, Maginon WT-1, RTX ZB-RT1, SETTI+ TRV001, Royal Thermo RTE 77.001B")],-1))])]),t[9]||(t[9]=(0,s.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><ul><li>SEA801-Zigbee (LCD display on the front, several buttons): Long hold the &quot;AUTO/MANU&quot; and &quot;+&quot; Button until the LCD display shows &quot;----&quot;</li><li>SEA802-Z01 (white LED display on the side, rotary plate): Turn the rotary plate to decrease the temperature until the LED dots show &quot;OF&quot;, then long press until the display changes to &quot;--&quot;</li></ul><h3 id="weekly-schedule" tabindex="-1"><a class="header-anchor" href="#weekly-schedule"><span>Weekly Schedule</span></a></h3><p>It&#39;s not possible to read (<code>/get</code>) this value. To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload</p><p><code>dayofweek</code> 1-7, 1=sunday <code>transitionTime</code> Minutes after midnight <code>numoftrans</code> It seems that the maximum number of transitions is 4</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token property">&quot;weekly_schedule&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token property">&quot;dayofweek&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">      <span class="token property">&quot;numoftrans&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>\n<span class="line">      <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">      <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>\n<span class="line">        <span class="token punctuation">{</span></span>\n<span class="line">          <span class="token property">&quot;transitionTime&quot;</span><span class="token operator">:</span> <span class="token number">360</span><span class="token punctuation">,</span></span>\n<span class="line">          <span class="token property">&quot;heatSetpoint&quot;</span><span class="token operator">:</span> <span class="token number">23</span></span>\n<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token punctuation">{</span></span>\n<span class="line">          <span class="token property">&quot;transitionTime&quot;</span><span class="token operator">:</span> <span class="token number">570</span><span class="token punctuation">,</span></span>\n<span class="line">          <span class="token property">&quot;heatSetpoint&quot;</span><span class="token operator">:</span> <span class="token number">2200</span></span>\n<span class="line">        <span class="token punctuation">}</span></span>\n<span class="line">      <span class="token punctuation">]</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="window-detection-switch" tabindex="-1"><a class="header-anchor" href="#window-detection-switch"><span>Window detection (switch)</span></a></h3><p>The current state of this switch is in the published state under the <code>window_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;window_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;window_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="away-mode-switch" tabindex="-1"><a class="header-anchor" href="#away-mode-switch"><span>Away mode (switch)</span></a></h3><p>The current state of this switch is in the published state under the <code>away_mode</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_mode&quot;: &quot;ON&quot;}</code>, <code>{&quot;away_mode&quot;: &quot;OFF&quot;}</code> or <code>{&quot;away_mode&quot;: &quot;undefined&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="heating-binary" tabindex="-1"><a class="header-anchor" href="#heating-binary"><span>Heating (binary)</span></a></h3><p>Device valve is open or closed (heating or not). Value can be found in the published state on the <code>heating</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>ON</code> heating is ON, if <code>OFF</code> OFF.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>, <code>local_temperature_calibration</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>, <code>auto</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-6</code> and the maximum value is <code>6</code> with a step size of <code>1</code>.</li></ul>',21))])}]]),i=JSON.parse('{"path":"/devices/SEA801-Zigbee_SEA802-Zigbee.html","title":"Saswell SEA801-Zigbee/SEA802-Zigbee control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Saswell SEA801-Zigbee/SEA802-Zigbee control via MQTT","description":"Integrate your Saswell SEA801-Zigbee/SEA802-Zigbee via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-12-30T11:31:00.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Weekly Schedule","slug":"weekly-schedule","link":"#weekly-schedule","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Window detection (switch)","slug":"window-detection-switch","link":"#window-detection-switch","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Away mode (switch)","slug":"away-mode-switch","link":"#away-mode-switch","children":[]},{"level":3,"title":"Heating (binary)","slug":"heating-binary","link":"#heating-binary","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]}]}],"git":{"updatedTime":1742360913000},"filePathRelative":"devices/SEA801-Zigbee_SEA802-Zigbee.md"}')}}]);