"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[90675],{93818:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>s});var a=o(6254);const r={},i=(0,o(58079).A)(r,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[7]||(t[7]=(0,a.Lk)("h1",{id:"tuya-te-1z",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-te-1z"},[(0,a.Lk)("span",null,"Tuya TE-1Z")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"TE-1Z")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Floor heating thermostat")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"state, climate (current_heating_setpoint, running_state, preset, local_temperature_calibration, local_temperature), child_lock, sensor_mode, high_temperature_protection_state, low_temperature_protection_state, high_temperature_protection_setting, low_temperature_protection_setting, temperature_sensor, deadzone_temperature, max_temperature, error_status")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TE-1Z.png",alt:"Tuya TE-1Z"})])],-1))])]),t[8]||(t[8]=(0,a.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="state-binary" tabindex="-1"><a class="header-anchor" href="#state-binary"><span>State (binary)</span></a></h3><p>Turn system on or standby mode. Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> state is ON, if <code>OFF</code> OFF.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>running_state</code>, <code>preset</code>, <code>local_temperature_calibration</code>, <code>local_temperature</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>auto</code>, <code>manual</code>, <code>mixed</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-9</code> and the maximum value is <code>9</code> with a step size of <code>1</code>.</li></ul><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="sensor-mode-enum" tabindex="-1"><a class="header-anchor" href="#sensor-mode-enum"><span>Sensor mode (enum)</span></a></h3><p>IN - internal sensor, no heat protection. OU - external sensor, no heat protection. AL - internal sensor for room temperature, external for heat protection. Value can be found in the published state on the <code>sensor_mode</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>IN</code>, <code>OU</code>, <code>AL</code>.</p><h3 id="high-temperature-protection-state-binary" tabindex="-1"><a class="header-anchor" href="#high-temperature-protection-state-binary"><span>High temperature protection state (binary)</span></a></h3><p>If temperature hit the HIGH temperature limit, it will turn off heating until it drops for amount of deadzone/hysteresis degrees. Value can be found in the published state on the <code>high_temperature_protection_state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_temperature_protection_state&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> high temperature protection state is ON, if <code>OFF</code> OFF.</p><h3 id="low-temperature-protection-state-binary" tabindex="-1"><a class="header-anchor" href="#low-temperature-protection-state-binary"><span>Low temperature protection state (binary)</span></a></h3><p>Value can be found in the published state on the <code>low_temperature_protection_state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_temperature_protection_state&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> low temperature protection state is ON, if <code>OFF</code> OFF.</p><h3 id="high-temperature-protection-setting-numeric" tabindex="-1"><a class="header-anchor" href="#high-temperature-protection-setting-numeric"><span>High temperature protection setting (numeric)</span></a></h3><p>Alarm temperature max. Value can be found in the published state on the <code>high_temperature_protection_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_temperature_protection_setting&quot;: NEW_VALUE}</code>. The minimal value is <code>20</code> and the maximum value is <code>70</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="low-temperature-protection-setting-numeric" tabindex="-1"><a class="header-anchor" href="#low-temperature-protection-setting-numeric"><span>Low temperature protection setting (numeric)</span></a></h3><p>Alarm temperature min. Value can be found in the published state on the <code>low_temperature_protection_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_temperature_protection_setting&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="temperature-sensor-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-sensor-numeric"><span>Temperature sensor (numeric)</span></a></h3><p>Floor temperature from external sensor. Value can be found in the published state on the <code>temperature_sensor</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="deadzone-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#deadzone-temperature-numeric"><span>Deadzone temperature (numeric)</span></a></h3><p>Hysteresis. Value can be found in the published state on the <code>deadzone_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;deadzone_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>9</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="max-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-numeric"><span>Max temperature (numeric)</span></a></h3><p>Maximum temperature. Value can be found in the published state on the <code>max_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>20</code> and the maximum value is <code>70</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="error-status-numeric" tabindex="-1"><a class="header-anchor" href="#error-status-numeric"><span>Error status (numeric)</span></a></h3><p>Error status. Value can be found in the published state on the <code>error_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>',26))])}]]),s=JSON.parse('{"path":"/devices/TE-1Z.html","title":"Tuya TE-1Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TE-1Z control via MQTT","description":"Integrate your Tuya TE-1Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-03-01T20:31:41.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"State (binary)","slug":"state-binary","link":"#state-binary","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Sensor mode (enum)","slug":"sensor-mode-enum","link":"#sensor-mode-enum","children":[]},{"level":3,"title":"High temperature protection state (binary)","slug":"high-temperature-protection-state-binary","link":"#high-temperature-protection-state-binary","children":[]},{"level":3,"title":"Low temperature protection state (binary)","slug":"low-temperature-protection-state-binary","link":"#low-temperature-protection-state-binary","children":[]},{"level":3,"title":"High temperature protection setting (numeric)","slug":"high-temperature-protection-setting-numeric","link":"#high-temperature-protection-setting-numeric","children":[]},{"level":3,"title":"Low temperature protection setting (numeric)","slug":"low-temperature-protection-setting-numeric","link":"#low-temperature-protection-setting-numeric","children":[]},{"level":3,"title":"Temperature sensor (numeric)","slug":"temperature-sensor-numeric","link":"#temperature-sensor-numeric","children":[]},{"level":3,"title":"Deadzone temperature (numeric)","slug":"deadzone-temperature-numeric","link":"#deadzone-temperature-numeric","children":[]},{"level":3,"title":"Max temperature (numeric)","slug":"max-temperature-numeric","link":"#max-temperature-numeric","children":[]},{"level":3,"title":"Error status (numeric)","slug":"error-status-numeric","link":"#error-status-numeric","children":[]}]}],"git":{"updatedTime":1742360913000},"filePathRelative":"devices/TE-1Z.md"}')}}]);