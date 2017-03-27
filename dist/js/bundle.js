!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/js",e(e.s=4)}([function(t,e){t.exports=Detector={canvas:!!window.CanvasRenderingContext2D,webgl:function(){try{var t=document.createElement("canvas");return!(!window.WebGLRenderingContext||!t.getContext("webgl")&&!t.getContext("experimental-webgl"))}catch(t){return!1}}(),workers:!!window.Worker,fileapi:window.File&&window.FileReader&&window.FileList&&window.Blob,getWebGLErrorMessage:function(){var t=document.createElement("div");return t.id="webgl-error-message",t.style.fontFamily="monospace",t.style.fontSize="13px",t.style.fontWeight="normal",t.style.textAlign="center",t.style.background="#fff",t.style.color="#000",t.style.padding="1.5em",t.style.width="400px",t.style.margin="5em auto 0",this.webgl||(t.innerHTML=window.WebGLRenderingContext?['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n"):['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n")),t},addGetWebGLMessage:function(t){var e,n,i;t=t||{},e=void 0!==t.parent?t.parent:document.body,n=void 0!==t.id?t.id:"oldie",i=Detector.getWebGLErrorMessage(),i.id=n,e.appendChild(i)}},t.exports=Detector},function(t,e){t.exports={circular:function(){function t(t){var e=t.x-a[0],r=t.y-a[1],s=Math.sqrt(e*e+r*r);if(s+=1e-9,!s||s>=o)return{x:t.x,y:t.y,z:s>=o?1:10};var u=n*(1-Math.exp(-s*i))/s*.75+.25;return{x:a[0]+e*u,y:a[1]+r*u,z:Math.min(u,10)}}function e(){return n=Math.exp(r),n=n/(n-1)*o,i=r/o,t}var n,i,o=200,r=2,a=[0,0];return t.radius=function(t){return arguments.length?(o=+t,e()):o},t.distortion=function(t){return arguments.length?(r=+t,e()):r},t.focus=function(e){return arguments.length?(a=e,t):a},e()}}},function(t,e,n){(function(n){var i,o,r=r||function(){var t=[];return{getAll:function(){return t},removeAll:function(){t=[]},add:function(e){t.push(e)},remove:function(e){var n=t.indexOf(e);n!==-1&&t.splice(n,1)},update:function(e,n){if(0===t.length)return!1;var i=0;for(e=void 0!==e?e:r.now();i<t.length;)t[i].update(e)||n?i++:t.splice(i,1);return!0}}}();"undefined"==typeof window&&"undefined"!=typeof n?r.now=function(){var t=n.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?r.now=window.performance.now.bind(window.performance):void 0!==Date.now?r.now=Date.now:r.now=function(){return(new Date).getTime()},r.Tween=function(t){var e,n=t,i={},o={},a={},s=1e3,u=0,c=!1,l=!1,d=!1,f=0,m=null,h=r.Easing.Linear.None,p=r.Interpolation.Linear,g=[],w=null,v=!1,y=null,E=null,b=null;this.to=function(t,e){return o=t,void 0!==e&&(s=e),this},this.start=function(t){r.add(this),l=!0,v=!1,m=void 0!==t?t:r.now(),m+=f;for(var e in o){if(o[e]instanceof Array){if(0===o[e].length)continue;o[e]=[n[e]].concat(o[e])}void 0!==n[e]&&(i[e]=n[e],i[e]instanceof Array==!1&&(i[e]*=1),a[e]=i[e]||0)}return this},this.stop=function(){return l?(r.remove(this),l=!1,null!==b&&b.call(n,n),this.stopChainedTweens(),this):this},this.end=function(){return this.update(m+s),this},this.stopChainedTweens=function(){for(var t=0,e=g.length;t<e;t++)g[t].stop()},this.delay=function(t){return f=t,this},this.repeat=function(t){return u=t,this},this.repeatDelay=function(t){return e=t,this},this.yoyo=function(t){return c=t,this},this.easing=function(t){return h=t,this},this.interpolation=function(t){return p=t,this},this.chain=function(){return g=arguments,this},this.onStart=function(t){return w=t,this},this.onUpdate=function(t){return y=t,this},this.onComplete=function(t){return E=t,this},this.onStop=function(t){return b=t,this},this.update=function(t){var r,l,b;if(t<m)return!0;v===!1&&(null!==w&&w.call(n,n),v=!0),l=(t-m)/s,l=l>1?1:l,b=h(l);for(r in o)if(void 0!==i[r]){var x=i[r]||0,M=o[r];M instanceof Array?n[r]=p(M,b):("string"==typeof M&&(M="+"===M.charAt(0)||"-"===M.charAt(0)?x+parseFloat(M):parseFloat(M)),"number"==typeof M&&(n[r]=x+(M-x)*b))}if(null!==y&&y.call(n,b),1===l){if(u>0){isFinite(u)&&u--;for(r in a){if("string"==typeof o[r]&&(a[r]=a[r]+parseFloat(o[r])),c){var I=a[r];a[r]=o[r],o[r]=I}i[r]=a[r]}return c&&(d=!d),m=void 0!==e?t+e:t+f,!0}null!==E&&E.call(n,n);for(var T=0,_=g.length;T<_;T++)g[T].start(m+s);return!1}return!0}},r.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1)}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-r.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*r.Easing.Bounce.In(2*t):.5*r.Easing.Bounce.Out(2*t-1)+.5}}},r.Interpolation={Linear:function(t,e){var n=t.length-1,i=n*e,o=Math.floor(i),a=r.Interpolation.Utils.Linear;return e<0?a(t[0],t[1],i):e>1?a(t[n],t[n-1],n-i):a(t[o],t[o+1>n?n:o+1],i-o)},Bezier:function(t,e){for(var n=0,i=t.length-1,o=Math.pow,a=r.Interpolation.Utils.Bernstein,s=0;s<=i;s++)n+=o(1-e,i-s)*o(e,s)*t[s]*a(i,s);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,o=Math.floor(i),a=r.Interpolation.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(o=Math.floor(i=n*(1+e))),a(t[(o-1+n)%n],t[o],t[(o+1)%n],t[(o+2)%n],i-o)):e<0?t[0]-(a(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(a(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):a(t[o?o-1:0],t[o],t[n<o+1?n:o+1],t[n<o+2?n:o+2],i-o)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=r.Interpolation.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,o){var r=.5*(n-t),a=.5*(i-e),s=o*o,u=o*s;return(2*e-2*n+r+a)*u+(-3*e+3*n-2*r-a)*s+r*o+e}}},function(n){i=[],o=function(){return r}.apply(e,i),!(void 0!==o&&(t.exports=o))}(this)}).call(e,n(3))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function r(t){if(d===clearTimeout)return clearTimeout(t);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function a(){p&&m&&(p=!1,m.length?h=m.concat(h):g=-1,h.length&&s())}function s(){if(!p){var t=o(a);p=!0;for(var e=h.length;e;){for(m=h,h=[];++g<e;)m&&m[g].run();g=-1,e=h.length}m=null,p=!1,r(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var l,d,f=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(t){d=i}}();var m,h=[],p=!1,g=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new u(t,e)),1!==h.length||p||o(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,n){function i(){if(R=document.getElementById("container"),Detector.webgl){z=new THREE.WebGLRenderer({antialias:!1,alpha:!0,logarithmicDepthBuffer:!0});z.context.getSupportedExtensions();at="jpg"}else z=new THREE.CanvasRenderer({antialias:!1,alpha:!0}),at="jpg",ft=!0,mosaics=canvas_mosaics;z.setClearColor(3355443),z.setPixelRatio(window.devicePixelRatio),z.setSize(window.innerWidth,window.innerHeight),R.appendChild(z.domElement);for(var t=0;t<mosaics.length;t++)S+=mosaics[t].tiles;var e=collection.map(function(t){return t.embedding_x}),n=collection.map(function(t){return t.embedding_y});e.sort(function(t,e){return t-e}),n.sort(function(t,e){return t-e});var i=Math.floor(.01*S),o=Math.floor(.99*S);tt=1.1*(e[o]-e[i]),et=1.1*(n[o]-n[i]),dt=e[S-1],lt=e[0],maxY=n[S-1],minY=n[0],W=Math.sqrt(Math.PI*Math.pow((tt+et)/4,2)/S);var r=5,s=10*W;C=Z.circular().radius(s).distortion(r);var u=Math.exp(r)/(Math.exp(r)-1)*s;rt=(u*(1-Math.exp(-.001*r/s))/.001*.75+.25)*ct;var c=T(tt,et),l=window.innerWidth/window.innerHeight,d=W/Math.tan(.5*c*Math.PI/180);d=l>1?d:d/l,it=ct+.564*d,ot=rt+2.336*d,H=new THREE.PerspectiveCamera(c,window.innerWidth/window.innerHeight,10,3500),H.position.z=2e3,L=new THREE.Scene,void 0!==I(pt.id)&&(mt=I(pt.id),ut=new THREE.Vector3(collection[mt].embedding_x,collection[mt].embedding_y,ct+2)),D=new THREE.Geometry;for(var t=0;t<S;t++){var f=collection[t].image_width*collection[t].image_height,m=W/Math.sqrt(f);collection[t].draw_width=collection[t].image_width*m,collection[t].draw_height=collection[t].image_height*m;var h=new THREE.PlaneGeometry(collection[t].draw_width,collection[t].draw_height),g=new THREE.Mesh(h);g.position.x=collection[t].embedding_x,g.position.y=collection[t].embedding_y,mt==t?g.position.z=ct+2.1:g.position.z=ct+1e-4*t,g.updateMatrix(),D.merge(g.geometry,g.matrix)}var w=function(){for(var t=[],e=0,n=0;n<X;n++){for(var i=mosaics[n].mosaicWidth,o=mosaics[n].tileSize,r=mosaics[n].pixelWidth,a=0;a<mosaics[n].tiles;a++){var s=a%i*o/r,u=Math.floor(a/i)*o/r,c=s+o/r,l=u+o/r;ft&&(u=1-u,l=1-l);var d=[new THREE.Vector2(s,u),new THREE.Vector2(s,l),new THREE.Vector2(c,l),new THREE.Vector2(c,u)];D.faceVertexUvs[0][2*e]=[d[0],d[1],d[3]],D.faceVertexUvs[0][2*e+1]=[d[1],d[2],d[3]],D.faces[2*e].materialIndex=n,D.faces[2*e+1].materialIndex=n,e+=1}t[n]=new THREE.MeshBasicMaterial({map:y[n],overdraw:!0})}t[X]=new THREE.MeshBasicMaterial({overdraw:!0});var f=new THREE.MultiMaterial(t);if(D=(new THREE.BufferGeometry).fromGeometry(D),void 0!==I(pt.id)){var m=new THREE.MeshBasicMaterial({color:16777198,transparent:!0,opacity:.3,overdraw:!0}),h=new THREE.CircleGeometry(1*Math.sqrt(1*W*W),32);st=new THREE.Mesh(h,m),st.position.set(ut.x,ut.y,ut.z),L.add(st)}P=new THREE.Mesh(D,f),L.add(P),p()},v=0;X=mosaics.length;var y=[];U=new ht.jpg,j=new ht[at];for(var t=0;t<X;t++){var E=j.load(nt+mosaics[t].image[at],function(t){t.flipY=!1,v+=1,v==X&&w()});y[t]=E}Y=new THREE.Raycaster,O=new THREE.Vector2,B=new THREE.TrackballControls(H),B.minDistance=it,B.maxDistance=2200,B.noRotate=!0,B.noMouseZoom=!0,B.panSpeed=.5,B.staticMoving=!0,B.enabled=!1,B.maxPanX=dt,B.minPanX=lt,B.maxPanY=maxY,B.minPanY=minY,B.unprojectZ=ct,window.addEventListener("resize",a,!1)}function o(t){O.x=t.clientX/window.innerWidth*2-1,O.y=2*-(t.clientY/window.innerHeight)+1,G=[O.x,O.y]}function r(t){J=!1;var e=t.clientX/window.innerWidth*2-1,n=2*-(t.clientY/window.innerHeight)+1,i=G[0],o=G[1],r=Math.sqrt((e-i)*(e-i)+(n-o)*(n-o));if(F>=0&&r<.01){var a=collection[F].identifier,s="http://samling.nasjonalmuseet.no/no/object/"+a.replace("&","_");window.open(s,"_blank")}}function a(){H.fov=T(tt,et),H.aspect=window.innerWidth/window.innerHeight,H.updateProjectionMatrix(),z.setSize(window.innerWidth,window.innerHeight),B.handleResize()}function s(t){A=-1}function u(t){return t.preventDefault(),K&&(K=!1,B.unprojectZ=rt,B.minDistance=ot),B.ismousedown?void(A=-1):(O.x=t.clientX/window.innerWidth*2-1,O.y=2*-(t.clientY/window.innerHeight)+1,l(O),void(A==-1&&c(O)))}function c(t,e){if(void 0===e&&(e=!0),e){var n=new THREE.Vector3;n.set(t.x,t.y,1),n.unproject(H);var i=n.sub(H.position).normalize(),o=(rt-H.position.z)/i.z;t=H.position.clone().add(i.multiplyScalar(o))}C.focus([t.x,t.y]);for(var r=0;r<collection.length;r++){var a=collection[r].embedding_x,s=collection[r].embedding_y,u=C({x:a,y:s}),c=collection[r].draw_width/2,l=collection[r].draw_height/2,d=c+.7*(u.z-1)*c,f=l+.7*(u.z-1)*l,m=u.x,h=u.y;if(mt==r)var p=u.z*ct+2.1;else var p=u.z*ct+1e-4*r;D.attributes.position.setXYZ(6*r,m-d,h+f,p),D.attributes.position.setXYZ(6*r+1,m-d,h-f,p),D.attributes.position.setXYZ(6*r+2,m+d,h+f,p),D.attributes.position.setXYZ(6*r+3,m-d,h-f,p),D.attributes.position.setXYZ(6*r+4,m+d,h-f,p),D.attributes.position.setXYZ(6*r+5,m+d,h+f,p)}if(D.attributes.position.needsUpdate=!0,mt>=0){var u=C({x:ut.x,y:ut.y}),c=W/2,d=c+.7*(u.z-1)*c;st.scale.x=d/c,st.scale.y=d/c,st.position.x=u.x,st.position.y=u.y,st.position.z=u.z*ct+2}}function l(t){var e=new THREE.Vector3(t.x,t.y,0),n=e.length();A=n>q&&n<N?e:-1}function d(t){K||(K=!0,B.minDistance=it,B.unprojectZ=ct)}function f(t){$=!0}function m(t){t.preventDefault(),O.x=t.changedTouches[0].pageX/window.innerWidth*2-1,O.y=2*-(t.changedTouches[0].pageY/window.innerHeight)+1;var e=F;if(!$&&(g(),F>=0)){var n=collection[F].identifier,i="http://samling.nasjonalmuseet.no/no/object/"+n.replace("&","_");F!=e||J||window.open(i,"_blank");var o=collection[F];document.getElementById("imageinfo").innerHTML="<p><strong>"+o.artist+", <a href='"+i+"' target='_blank'><em>"+o.title+"</em></a></strong>. "+o.yearstring+".</p>"}J&&(J=!1),$=!1}function h(t){if(t.preventDefault(),t.stopPropagation(),F>=0){var e=collection[F].identifier,n="http://samling.nasjonalmuseet.no/no/object/"+e.replace("&","_");window.open(n,"_blank")}}function p(){if(A!=-1&&!B.ismousedown){var t=A.clone(),e=(Math.min(t.length(),N)-q)/(N-q),n=1.5*Math.sin(e*Math.PI);t.x*=n,t.y*=n;var i=B.target.x+A.x,o=B.target.y+A.y;A.x<0&&i<lt&&(t.x=0),A.x>0&&i>dt&&(t.x=0),A.y<0&&o<minY&&(t.y=0),A.y>0&&o>maxY&&(t.y=0),H.position.addVectors(H.position,t),B.target.addVectors(B.target,t);var r={x:A.x,y:A.y};c(r)}requestAnimationFrame(p),B.update(),w(),V.update()}function g(){Y.setFromCamera(O,H);var t=Y.intersectObject(P);if(t.length>0){var e=Math.floor(t[0].face.a/6);if(F==-1){var n=collection[e];if(document.getElementById("imageinfo").innerHTML="<p><strong>"+n.artist+", <em>"+n.title+"</em></strong>. "+n.yearstring+".</p>",document.getElementById("imageinfo").style.display="block",document.getElementById("container").setAttribute("class","clickable"),F=e,K){for(var i=0;i<6;i++)D.attributes.position.setZ(6*F+i,D.attributes.position.getZ(6*F+i)+2);D.attributes.position.needsUpdate=!0}setTimeout(function(){F==e&&v(e)},100)}else if(e!=F){var n=collection[e];if(document.getElementById("imageinfo").innerHTML="<p><strong>"+n.artist+", <em>"+n.title+"</em></strong>. "+n.yearstring+".</p>",y(F),K){for(var i=0;i<6;i++)D.attributes.position.setZ(6*F+i,D.attributes.position.getZ(6*F+i)-2),D.attributes.position.setZ(6*e+i,D.attributes.position.getZ(6*e+i)+2);D.attributes.position.needsUpdate=!0}F=e,setTimeout(function(){F==e&&v(e)},100)}}else if(F!=-1){if(K){for(var i=0;i<6;i++)D.attributes.position.setZ(6*F+i,D.attributes.position.getZ(6*F+i)-2);D.attributes.position.needsUpdate=!0}y(F),F=-1,document.getElementById("imageinfo").style.display="none",document.getElementById("container").setAttribute("class","")}}function w(){if(K||g(),z.render(L,H),Q){if(document.getElementById("message").style.display="none",z.domElement.addEventListener("mousemove",u,!1),document.addEventListener("mousewheel",E,!1),document.addEventListener("DOMMouseScroll",E,!1),document.addEventListener("touchstart",d,!1),z.domElement.addEventListener("touchmove",f,!1),document.addEventListener("touchcancel",m,!1),z.domElement.addEventListener("touchend",m,!1),document.addEventListener("mouseout",s,!1),z.domElement.addEventListener("mousedown",o,!1),z.domElement.addEventListener("mouseup",r,!1),document.getElementById("imageinfo").addEventListener("touchend",h,!1),document.getElementById("ui_zoom_in").addEventListener("click",b,!1),document.getElementById("ui_zoom_in").addEventListener("touchend",b,!1),document.getElementById("ui_zoom_out").addEventListener("click",x,!1),document.getElementById("ui_zoom_out").addEventListener("touchend",x,!1),document.getElementById("ui_reset").addEventListener("click",M,!1),document.getElementById("ui_reset").addEventListener("touchend",M,!1),B.enabled=!0,void 0!==pt.id){var t=I(pt.id),e=[collection[t].embedding_x,collection[t].embedding_y];void 0!==e&&(gt(e),J=!0)}Q=!1}}function v(t){var e=""+collection[t].sequence_id;"0000".substring(0,4-e.length)+e;k=U.load("https://mm.dimu.org/image/"+collection[t].image_id+"?dimension=400x400",function(e){if(F==t){P.material.materials[X].map=e,P.material.materials[X].needsUpdate=!0,P.material.needsUpdate=!0,P.geometry.attributes.uv.setXY(6*t,0,1),P.geometry.attributes.uv.setXY(6*t+1,0,0),P.geometry.attributes.uv.setXY(6*t+2,1,1),P.geometry.attributes.uv.setXY(6*t+3,0,0),P.geometry.attributes.uv.setXY(6*t+4,1,0),P.geometry.attributes.uv.setXY(6*t+5,1,1),P.geometry.attributes.uv.needsUpdate=!0;var n=Math.floor(t/mosaics[0].tiles);P.geometry.clearGroups();for(var i=0,o=0;o<X;o++){if(o==n){var r=t-i;P.geometry.addGroup(6*i,6*r,o),P.geometry.addGroup(6*t,6,X),P.geometry.addGroup(6*(i+r+1),6*(mosaics[o].tiles-r-1),o)}else P.geometry.addGroup(6*i,6*mosaics[o].tiles,o);i+=mosaics[o].tiles}P.geometry.groupsNeedUpdate=!0}})}function y(t){highResImageIndex=-1;var e=Math.floor(t/mosaics[0].tiles),n=t%mosaics[0].tiles,i=mosaics[e].mosaicWidth,o=mosaics[e].tileSize,r=mosaics[e].pixelWidth,a=n%i*o/r,s=Math.floor(n/i)*o/r,u=a+o/r,c=s+o/r;ft&&(s=1-s,c=1-c),P.geometry.clearGroups();for(var l=0,n=0;n<mosaics.length;n++)P.geometry.addGroup(6*l,6*mosaics[n].tiles,n),l+=mosaics[n].tiles;P.geometry.groupsNeedUpdate=!0,P.geometry.attributes.uv.setXY(6*t,a,s),P.geometry.attributes.uv.setXY(6*t+1,a,c),P.geometry.attributes.uv.setXY(6*t+2,u,s),P.geometry.attributes.uv.setXY(6*t+3,a,c),P.geometry.attributes.uv.setXY(6*t+4,u,c),P.geometry.attributes.uv.setXY(6*t+5,u,s),P.geometry.attributes.uv.needsUpdate=!0,k&&k.dispose()}function E(t){var e=.05,n=t.clientX/window.innerWidth*2-1,i=2*-(t.clientY/window.innerHeight)+1,o=new THREE.Vector3(n,i,1);o.unproject(H),o.sub(H.position);var r=o.setLength(H.position.length()*e);t.deltaY<0||t.detail<0?(r.z+H.position.z<B.minDistance&&(r.z=B.minDistance-H.position.z),r.z<0&&(H.position.addVectors(H.position,r),r.z=0,B.target.addVectors(B.target,r))):(H.position.z-r.z>B.maxDistance&&(r.z=H.position.z-B.maxDistance),r.z<0&&(H.position.subVectors(H.position,r),r.z=0,B.target.subVectors(B.target,r)))}function b(t){t.preventDefault(),t.stopPropagation(),B.zoomIn()}function x(t){t.preventDefault(),t.stopPropagation(),B.zoomOut()}function M(t){t.preventDefault(),t.stopPropagation(),B.reset()}function I(t){for(var e=0;e<collection.length;e++)if(collection[e].identifier==t)return e}function T(t,e){var n=2e3,i=window.innerWidth/window.innerHeight,o=2*Math.atan(1.1*t/i/(2*n))*(180/Math.PI),r=2*Math.atan(1.1*e/(2*n))*(180/Math.PI),a=o>r?o:r;return a}function _(t,e){var n=document.createElement("script");n.src=t,n.onload=e,document.body.appendChild(n)}var R,H,L,z,Y,O,B,P,D,W,C,G,X,j,U,k,V=n(2),Z=n(1),F=(n(0),-1),S=0,A=-1,q=.4,N=.98,Q=!0,J=!1,K=!0,$=!1;THREE.ImageUtils.crossOrigin="";var tt,et,nt,it,ot,rt,at,st,ut,ct=20,lt=minY=1/0,dt=maxY=-(1/0),ft=!1,mt=-1,ht={s3tc:THREE.DDSLoader,pvrtc:THREE.PVRLoader,jpg:THREE.TextureLoader},pt=function(t){if(""==t)return{};for(var e={},n=0;n<t.length;++n){var i=t[n].split("=",2);1==i.length?e[i[0]]="":e[i[0]]=decodeURIComponent(i[1].replace(/\+/g," "))}return e}(window.location.search.substr(1).split("&")),gt=function(t){var e=H.position.clone();e.factor=0;var n=new V.Tween(e).to({x:t[0],y:t[1],z:300,factor:1},2e3).onUpdate(function(){H.position.x=this.x,H.position.y=this.y,H.position.z=this.z,B.target=new THREE.Vector3(this.x,this.y,0)}).onComplete(function(){O.x=0,O.y=0,g()});n.easing(V.Easing.Exponential.InOut),n.delay(1e3),n.start()};nt=void 0!==pt.collection?"./data/"+pt.collection+"/":"./data/painting_subject/",_(nt+"collection.js",i)}]);