"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[58610],{15609:(n,s,e)=>{e.r(s),e.d(s,{comp:()=>t,data:()=>p});var a=e(6254);const i=e.p+"assets/img/frontend.e604ec0e.png",l={},t=(0,e(58079).A)(l,[["render",function(n,s){return(0,a.uX)(),(0,a.CE)("div",null,s[0]||(s[0]=[(0,a.Fv)('<h1 id="frontend" tabindex="-1"><a class="header-anchor" href="#frontend"><span>Frontend</span></a></h1><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Ongoing discussion about the frontend can be found <a href="https://github.com/Koenkk/zigbee2mqtt/issues/4266" target="_blank" rel="noopener noreferrer">here</a></p></div><p>Zigbee2MQTT has a built-in web-based frontend.</p><p><img src="'+i+'" alt="Frontend"></p><p>To enable the frontend add the following to your <code>configuration.yaml</code>. This will start the frontend on port <code>8080</code>.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">frontend</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="advanced-configuration" tabindex="-1"><a class="header-anchor" href="#advanced-configuration"><span>Advanced configuration</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">frontend</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">    <span class="token comment"># Optional, default 8080</span></span>\n<span class="line">    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span></span>\n<span class="line">    <span class="token comment"># Optional, empty by default to listen on both IPv4 and IPv6. Opens a unix socket when given a path instead of an address (e.g. &#39;/run/zigbee2mqtt/zigbee2mqtt.sock&#39;)</span></span>\n<span class="line">    <span class="token comment"># Don&#39;t set this if you use Docker or the Home Assistant add-on unless you&#39;re sure the chosen IP is available inside the container</span></span>\n<span class="line">    <span class="token key atrule">host</span><span class="token punctuation">:</span> 0.0.0.0</span>\n<span class="line">    <span class="token comment"># Optional, enables authentication, disabled by default, cleartext (no hashing required)</span></span>\n<span class="line">    <span class="token key atrule">auth_token</span><span class="token punctuation">:</span> your<span class="token punctuation">-</span>secret<span class="token punctuation">-</span>token</span>\n<span class="line">    <span class="token comment"># Optional, url on which the frontend can be reached, currently only used for the Home Assistant device configuration page</span></span>\n<span class="line">    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&#39;https://zigbee2mqtt.myhouse.org&#39;</span></span>\n<span class="line">    <span class="token comment"># Optional, certificate file path for exposing HTTPS. The sibling property &#39;ssl_key&#39; must be set for HTTPS to be activated</span></span>\n<span class="line">    <span class="token key atrule">ssl_cert</span><span class="token punctuation">:</span> /config/etc/letsencrypt/live/mydomain.com/fullchain.pem</span>\n<span class="line">    <span class="token comment"># Optional, private key file path for exposing HTTPS. The sibling property &#39;ssl_cert&#39; must be set for HTTPS to be activated</span></span>\n<span class="line">    <span class="token key atrule">ssl_key</span><span class="token punctuation">:</span> /config/etc/letsencrypt/live/mydomain.com/privkey.pem</span>\n<span class="line">    <span class="token comment"># Optional, base URL for the frontend, when served from a subpath, e.g. behind the proxy. Default value is &#39;/&#39;</span></span>\n<span class="line">    <span class="token key atrule">base_url</span><span class="token punctuation">:</span> /zigbee2mqtt</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To specify the <code>auth_token</code> in a different file set e.g. <code>auth_token: &#39;!secret.yaml auth_token&#39;</code>, create a file called <code>secret.yaml</code> next to <code>configuration.yaml</code> with content <code>auth_token: super-secret-token</code>.</p><p><strong>NOTE:</strong> If you are running Zigbee2MQTT via the Home Assistant addon you cannot change the port. The addon will force the frontend to run on port 8099 as Home Assistant Ingress requires this.</p><h2 id="nginx-proxy-configuration" tabindex="-1"><a class="header-anchor" href="#nginx-proxy-configuration"><span>Nginx proxy configuration</span></a></h2><p>In case you want to run the frontend behind a proxy you can use the following config as an example.</p><p>Due to <a href="https://bugs.webkit.org/show_bug.cgi?id=80362" target="_blank" rel="noopener noreferrer">WebKit Bug 80362</a>, which prevents basic authentication from being used with WebSockets, the frontend will not work in WebKit-based browsers when this type of authentication is configured. This includes desktop Safari on Mac and <em>all</em> browsers and web views on iOS. To work around the issue, configure the frontend&#39;s <code>auth_token</code> to configure application-level auth and remove <code>auth_basic</code> from the web server config.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">server {</span>\n<span class="line">    listen       80;</span>\n<span class="line">    server_name  zigbee2mqtt.mydomain.com;</span>\n<span class="line">    return 301   https://zigbee2mqtt.mydomain.com$request_uri;</span>\n<span class="line">}</span>\n<span class="line"></span>\n<span class="line">server {</span>\n<span class="line">    listen      443 ssl http2;</span>\n<span class="line">    listen      [::]:443 ssl http2;</span>\n<span class="line"></span>\n<span class="line">    # In case you want to use basic authentication:</span>\n<span class="line">    auth_basic &quot;Login&quot;;</span>\n<span class="line">    auth_basic_user_file /zigbee2mqtt_htpasswd;</span>\n<span class="line"></span>\n<span class="line">    ssl_certificate     /config/etc/letsencrypt/live/mydomain.com/fullchain.pem;</span>\n<span class="line">    ssl_certificate_key /config/etc/letsencrypt/live/mydomain.com/privkey.pem;</span>\n<span class="line"></span>\n<span class="line">    server_name zigbee2mqtt.mydomain.com;</span>\n<span class="line"></span>\n<span class="line">    location / {</span>\n<span class="line">        proxy_pass http://localhost:8080/;</span>\n<span class="line">        proxy_set_header Host $host;</span>\n<span class="line">        proxy_set_header X-Real-IP $remote_addr;</span>\n<span class="line">        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span>\n<span class="line">    }</span>\n<span class="line"></span>\n<span class="line">    location /api {</span>\n<span class="line">        proxy_pass         http://localhost:8080/api;</span>\n<span class="line">        proxy_set_header Host $host;</span>\n<span class="line"></span>\n<span class="line">        proxy_http_version 1.1;</span>\n<span class="line">        proxy_set_header Upgrade $http_upgrade;</span>\n<span class="line">        proxy_set_header Connection &quot;upgrade&quot;;</span>\n<span class="line">    }</span>\n<span class="line">}</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apache2-proxy-configuration" tabindex="-1"><a class="header-anchor" href="#apache2-proxy-configuration"><span>Apache2 proxy configuration</span></a></h2><p>Credit: <a href="https://stackoverflow.com/questions/38838567/proxy-websocket-wss-to-ws-apache/60506715#60506715" target="_blank" rel="noopener noreferrer">Florian Metzger-Noel</a></p><p>Enable these modules using <code>a2enmod proxy proxy_wstunnel proxy_http rewrite</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;VirtualHost *:80&gt;</span>\n<span class="line">   ServerName example.com</span>\n<span class="line">   ServerAdmin info@example.com</span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line">    ProxyRequests off</span>\n<span class="line">    ProxyVia on</span>\n<span class="line">    RewriteEngine On</span>\n<span class="line"></span>\n<span class="line">    RewriteEngine On</span>\n<span class="line">    RewriteCond %{HTTP:Connection} Upgrade [NC]</span>\n<span class="line">    RewriteCond %{HTTP:Upgrade} websocket [NC]</span>\n<span class="line">    RewriteRule /(.*) ws://localhost:8080/$1 [P,L]</span>\n<span class="line"></span>\n<span class="line">    ProxyPass               / http://localhost:8080/</span>\n<span class="line">    ProxyPassReverse        / http://localhost:8080/</span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line">   &lt;Proxy *&gt;</span>\n<span class="line">   Order deny,allow</span>\n<span class="line">   Allow from all</span>\n<span class="line">   &lt;/Proxy&gt;</span>\n<span class="line"></span>\n<span class="line">   ErrorLog ${APACHE_LOG_DIR}/company2-error.log</span>\n<span class="line">   CustomLog ${APACHE_LOG_DIR}/company2-access.log combined</span>\n<span class="line"></span>\n<span class="line">&lt;/VirtualHost&gt;</span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',18)]))}]]),p=JSON.parse('{"path":"/guide/configuration/frontend.html","title":"Frontend","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"headers":[{"level":2,"title":"Advanced configuration","slug":"advanced-configuration","link":"#advanced-configuration","children":[]},{"level":2,"title":"Nginx proxy configuration","slug":"nginx-proxy-configuration","link":"#nginx-proxy-configuration","children":[]},{"level":2,"title":"Apache2 proxy configuration","slug":"apache2-proxy-configuration","link":"#apache2-proxy-configuration","children":[]}],"git":{"updatedTime":1742360913000},"filePathRelative":"guide/configuration/frontend.md"}')}}]);