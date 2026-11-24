import * as T from './vendor/three.module.js';
import {LEVELS} from './levels.js';
import {initAudio,startMusic,toggleMute,setMusicUrgent} from './audio.js';
const $=id=>document.getElementById(id),keys=new Set();
let renderer;
try{renderer=new T.WebGLRenderer({canvas:$('game'),antialias:true});}catch(e){$('menu').innerHTML='<h1>3D needs WebGL</h1><p>Please open this game in a browser with hardware acceleration enabled.</p><a href="../">Play the original game</a>';throw e;}
renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.setClearColor(0xdce6e5);renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;
const scene=new T.Scene(),camera=new T.PerspectiveCamera(42,1,.1,150);scene.fog=new T.Fog(0xdce6e5,40,85);scene.add(new T.HemisphereLight(0xfff5da,0x70978d,2.5));
const sun=new T.DirectionalLight(0xfff3d6,3);sun.position.set(-10,25,12);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-22,right:22,top:22,bottom:-22});sun.shadow.bias=-.001;scene.add(sun);
let world=new T.Group();scene.add(world);let actors=[],items=[],critters=[],hazards=[],drop,level=0,time=0,mode='menu',delivered=0,bag=0,toastTime=0;
const mats=new Map();function mat(c){if(!mats.has(c))mats.set(c,new T.MeshStandardMaterial({color:c,roughness:.7}));return mats.get(c);}
function box(parent,x,y,z,w,h,d,color){const m=new T.Mesh(new T.BoxGeometry(w,h,d),mat(color));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
function ball(parent,x,y,z,r,color){const m=new T.Mesh(new T.SphereGeometry(r,16,12),mat(color));m.position.set(x,y,z);m.castShadow=true;parent.add(m);return m;}
function cylinder(parent,x,y,z,r,h,color){const m=new T.Mesh(new T.CylinderGeometry(r,r,h,20),mat(color));m.position.set(x,y,z);m.castShadow=true;parent.add(m);return m;}
function label(text){const c=document.createElement('canvas');c.width=256;c.height=64;const g=c.getContext('2d');g.fillStyle='#254e42';g.font='bold 26px sans-serif';g.textAlign='center';g.fillText(text,128,40);const s=new T.Sprite(new T.SpriteMaterial({map:new T.CanvasTexture(c),depthTest:false}));s.scale.set(3, .75,1);return s;}
function rider(name,color,x,z){const root=new T.Group(),body=new T.Group();root.add(body);box(body,0,1.15,0,.5,.65,.42,color);ball(body,0,1.76,0,.29,0xf2bd8f);box(body,0,2.01,0,.65,.12,.56,name==='ISAAC'?0x3188c9:name==='ANNIE'?0xe88aaa:0xe9bd49);box(body,.14,1.79,-.26,.07,.07,.025,0x263c36);box(body,-.14,1.79,-.26,.07,.07,.025,0x263c36);box(body,0,.62,0,.52,.35,.36,0x294f68);
 const wheels=[];for(const z of [-.55,.55]){const m=new T.Mesh(new T.TorusGeometry(.33,.075,8,20),mat(0x263a38));m.rotation.y=Math.PI/2;m.position.set(0,.35,z);body.add(m);wheels.push(m);box(body,0,.65,z,.09,.6,.09,0xe1d6ab);}box(body,0,.65,0,.12,.12,1.2,color);box(body,0,.92,-.55,.7,.08,.08,0x263a38);
 if(LEVELS[level].theme==='kartroom'||LEVELS[level].theme==='race'){
 const kart=name==='YOU'||LEVELS[level].theme==='race';
 if(kart){box(body,0,.55,0,1.3,.35,1.7,color);for(const x of [-.7,.7])for(const z of [-.55,.55]){const w=ball(body,x,.3,z,.27,0x263a38);wheels.push(w);}}
 else if(name==='ISAAC'){box(body,0,.9,-.15,.4,.35,.7,0x24262c);box(body,0,1.08,-.3,.3,.09,.35,0xff8d22);box(body,.32,.6,.2,.1,.1,1,0xdce3e8);}
 else box(body,0,.7,-.25,.48,.4,1.2,0xeb83a7);
 }
 if(name==='ANNIE'){for(const x of [-.3,.3])ball(body,x,1.8,.08,.17,0x785233);const b=ball(body,.55,2.95,.1,.32,0xf180a8);box(body,.55,2.4,.1,.018,.8,.018,0xffffff);}
 const tag=label(name);tag.position.y=3.5;root.add(tag);root.position.set(x,0,z);world.add(root);return {root,body,wheels,x,z,y:0,vy:0,jumps:0,inv:0,name,duck:false};}
const palettes=[0x9bb7a2,0xc4a4b8,0xc4ba9a,0x94acb5,0x88a87b,0x8fab76];
function shelf(x,z,color){const g=new T.Group();world.add(g);for(const xx of [-1.3,1.3])box(g,x+xx,1.3,z,.14,2.6,.65,color);for(const y of [.2,1.2,2.2]){box(g,x,y,z,2.8,.12,.7,color);for(let k=0;k<6;k++)box(g,x-1.05+k*.4,y+.35,z,.25,.5,.38,[0xd58e62,0x719d8b,0xd3b562,0x899cba][k%4]);}}
function collectible(kind){const g=new T.Group(),c=[0xe3ae4f,0x83afad,0xd17c92,0x9a91c5][items.length%4];
 if(kind==='book'||kind==='paper'||kind==='score'){box(g,0,0,0,.55,.14,.7,c);box(g,0,.02,0,.48,.08,.65,0xffefd3);}
 else if(kind==='coin'){const m=cylinder(g,0,0,0,.26,.1,0xf1c453);m.rotation.x=Math.PI/2;}
 else if(kind==='testtube'){cylinder(g,0,0,0,.13,.6,0x8de0d1);cylinder(g,0,.32,0,.17,.1,0xebc76f);}
 else if(kind==='chargecable'){const m=new T.Mesh(new T.TorusGeometry(.22,.045,8,18),mat(c));m.rotation.x=Math.PI/2;g.add(m);box(g,.28,0,.1,.18,.1,.12,0xeeeeee);}
 else if(kind==='kartbike'||kind==='citytoys'||kind==='tire'){box(g,0,0,0,.6,.2,.35,c);for(const x of [-.22,.22])for(const z of [-.2,.2])ball(g,x,-.05,z,.12,0x283a37);}
 else if(kind==='oldflower'||kind==='leaf'){box(g,0,0,0,.07,.5,.07,0x588a55);for(let k=0;k<5;k++)ball(g,Math.cos(k*1.26)*.17,.25,Math.sin(k*1.26)*.17,.12,0xe6b683);}
 else if(kind==='dragon'||kind==='doll'||kind==='chewtoy'){ball(g,0,0,0,.25,c);ball(g,0,.3,0,.18,c);for(const x of [-.2,.2])box(g,x,-.17,0,.16,.2,.2,c);}
 else if(kind==='diamondblock'){box(g,0,0,0,.55,.55,.55,0x6ad2ca);box(g,0,.28,0,.36,.02,.36,0xb2eee2);}
 else{box(g,0,0,0,.45,.4,.45,c);box(g,0,.23,0,.25,.07,.25,0xffe7b1);}return g;}
function build(idx){world.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.isSprite)o.material.map.dispose();});scene.remove(world);world=new T.Group();scene.add(world);level=idx;const L=LEVELS[idx];items=[];critters=[];hazards=[];delivered=0;bag=0;time=L.time;
 const col=palettes[idx%palettes.length];box(world,0,-.28,0,34,.5,26,0xd9c8a7);box(world,0,2,-13,34,4,.3,col);box(world,-17,2,0,.3,4,26,col);box(world,0,.15,-12.7,34,.3,.18,0xf0e7d3);box(world,-16.7,.15,0,.18,.3,26,0xf0e7d3);
 for(let x=-14;x<=14;x+=4){box(world,x,.005,0,.025,.015,25,0xc2af90);box(world,x,2.4,-12.75,2.5,1.8,.1,0xf1e7ce);box(world,x,2.4,-12.65,2.2,1.5,.05,0xa4cfcd);}
 for(const x of [-12,-5,2,9])shelf(x,-11,0x8c8066);box(world,-14,.35,4,3,.6,5,0x607f70);box(world,-15,1.1,4,1,1,5,0x759984);box(world,10,.6,-7,5,1.2,2.2,0x8d7159);box(world,10,1.3,-7,5.3,.2,2.4,0xe6ddc3);
 const rug=box(world,0,.015,0,13,.03,12,0x94aaa0);for(let x=-5;x<=5;x+=2)box(world,x,.04,0,.06,.01,11,0xc5d0b9);
 drop=new T.Group();drop.position.set(11,0,8);world.add(drop);box(drop,0,.6,0,2.6,1.2,2,0x8b694a);box(drop,0,1.25,.8,2.8,.15,.3,0xe0b87b);const dl=label('RETURN HERE');dl.position.y=2.7;drop.add(dl);const ring=new T.Mesh(new T.TorusGeometry(2,.07,8,60),mat(0xedc564));ring.rotation.x=Math.PI/2;ring.position.y=.06;drop.add(ring);
 if(['garden','yard','pool'].includes(L.theme))for(const x of [-12,-6,0,6,12]){cylinder(world,x,.5,-9,.55,1,0x96775c);ball(world,x,1.4,-9,.85,0x6b9859);}
 if(L.theme==='science'||L.theme==='tech')for(let k=0;k<7;k++){cylinder(world,8+k*.5,1.8,-7,.16,.8,0x75c9bf);ball(world,8+k*.5,2.25,-7,.2,0xb3dfcd);}
 if(L.theme==='library')for(const x of [-12,-5,2,9])shelf(x,-9.8,0x8c8066);
 if(L.theme==='blockroom'||L.theme==='minecraft')for(let k=0;k<6;k++)box(world,-12+k*2,1,-8,1.7,2,1.7,0x77915b);
 let seed=L.seed;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 for(let k=0;k<L.count;k++){const mesh=collectible(L.item);mesh.position.set(-11+rand()*24,.5,-5+rand()*14);world.add(mesh);items.push({mesh,x:mesh.position.x,z:mesh.position.z,got:false});}
 for(let k=0;k<Math.min(8,3+Math.floor(idx/5));k++){const mesh=new T.Group();ball(mesh,0,.35,0,.42,k%2?0x6c845d:0xa28197);for(const x of [-.16,.16]){ball(mesh,x,.48,-.33,.09,0xffffff);ball(mesh,x,.48,-.41,.04,0x263b33);}mesh.position.set(-8+rand()*20,0,-6+rand()*14);world.add(mesh);critters.push({mesh,phase:rand()*6,homeX:mesh.position.x,homeZ:mesh.position.z,down:0});}
 if(idx>2)for(let k=0;k<4;k++){const mesh=box(world,-7+k*4,.14,5,.8,.28,.5,0xe7b44f);for(const x of [-.2,.2])cylinder(mesh,x,.19,0,.12,.1,0xe7b44f);hazards.push(mesh);}
 actors=[rider('YOU',0xd46d50,0,9),rider('ISAAC',0x448db4,-2,10),rider('ANNIE',0xe397b3,2,10)];$('room').textContent=`ROOM ${idx+1} / ${LEVELS.length} · ${L.name}`;$('task').textContent=L.chore;updateHUD();}
function notify(s){$('toast').textContent=s;toastTime=3;$('toast').classList.add('visible');}
function updateHUD(){setMusicUrgent(mode==='play'&&time<15);$('count').textContent=`${delivered} / ${items.length} returned · ${bag} carrying`;$('clock').textContent=(time>=1e6?(time/1e6).toFixed(1)+'M':Math.ceil(time).toLocaleString())+'s';}
function start(idx){build(idx);keys.clear();mode='play';$('menu').hidden=true;$('result').hidden=true;$('hud').hidden=false;$('pause').textContent='Pause';initAudio();startMusic(LEVELS[idx].music);notify('Isaac: Sup Bro! Annie: Let’s help!');}
function finish(win){mode=win?'win':'lose';$('result').hidden=false;$('resultTitle').textContent=win?'Room rescued!':'Time for another try';$('resultText').textContent=win?`${LEVELS[level].name}: every item is back where it belongs.`:'You, Isaac and Annie can do this. Try the room again!';$('next').hidden=!win||level===LEVELS.length-1;}
function hit(a){if(a.inv>0)return;a.inv=1.5;time=Math.max(0,time-5);a.vy=4;notify(a.name+' bumped a hazard! −5 seconds');}
function update(dt,t){if(mode!=='play')return;time=Math.max(0,time-dt);if(time===0){finish(false);return;}
 const remaining=items.filter(i=>!i.got),claimed=new Set();for(let k=0;k<actors.length;k++){const a=actors[k];a.inv=Math.max(0,a.inv-dt);let dx=0,dz=0;
 if(!k){dx=Number(keys.has('ArrowRight')||keys.has('KeyD'))-Number(keys.has('ArrowLeft')||keys.has('KeyA'));dz=Number(keys.has('ArrowDown')||keys.has('KeyS'))-Number(keys.has('ArrowUp')||keys.has('KeyW'));a.duck=keys.has('KeyC');}
 else{let target=remaining.filter(i=>!claimed.has(i)).sort((u,v)=>Math.hypot(u.x-a.x,u.z-a.z)-Math.hypot(v.x-a.x,v.z-a.z))[0];if(target){claimed.add(target);dx=target.x-a.x;dz=target.z-a.z;}else{dx=drop.position.x-a.x;dz=drop.position.z-a.z;}if(Math.hypot(dx,dz)<.3)dx=dz=0;}
 const len=Math.hypot(dx,dz);if(len){const speed=(a.duck?3:6.5)*dt;a.x+=dx/len*speed;a.z+=dz/len*speed;a.root.rotation.y=Math.atan2(-dx,-dz);a.wheels.forEach(w=>w.rotation.z+=dt*12);}if(a.x>7&&a.x<13&&a.z>-8.6&&a.z<-5.4&&a.y<1.4){a.z=-5.35;}if(a.x<-12&&a.z>1&&a.z<7&&a.y<1.5){a.x=-11.95;}a.x=T.MathUtils.clamp(a.x,-15.5,15.5);a.z=T.MathUtils.clamp(a.z,-9.5,11.5);a.vy-=15*dt;a.y+=a.vy*dt;if(a.y<=0){a.y=0;a.vy=0;a.jumps=0;}a.root.position.set(a.x,a.y,a.z);a.body.scale.y=a.duck?.65:1;a.body.visible=a.inv<=0||Math.floor(a.inv*12)%2===0;
 for(const i of items)if(!i.got&&Math.hypot(i.x-a.x,i.z-a.z)<.85&&a.y<1.5){i.got=true;i.mesh.visible=false;bag++;time=Math.min(Number.MAX_SAFE_INTEGER,time*2);notify(a.name+' picked one up! Time ×2');}
 if(bag&&Math.hypot(a.x-drop.position.x,a.z-drop.position.z)<2.3){delivered+=bag;bag=0;notify('Returned to the '+LEVELS[level].drop.replace(/([a-z])([A-Z])/g,'$1 $2')+'!');if(delivered===items.length){finish(true);break;}}
 for(const h of hazards)if(a.y<.35&&Math.hypot(a.x-h.position.x,a.z-h.position.z)<.75)hit(a);
 for(const c of critters)if(c.down<=0&&Math.hypot(a.x-c.mesh.position.x,a.z-c.mesh.position.z)<.9){if(a.y>.35&&a.vy<0){c.down=5;c.mesh.visible=false;a.vy=5;notify(a.name+' stomped a critter!');}else if(a.y<.6){if(k&&a.inv<=0){a.vy=6;a.jumps=1;}hit(a);}}
 }
 for(const c of critters){c.down=Math.max(0,c.down-dt);c.mesh.visible=c.down===0;c.mesh.position.x=c.homeX+Math.sin(t*.7+c.phase)*1.6;c.mesh.position.z=c.homeZ+Math.cos(t*.6+c.phase)*1.2;}
 for(const i of items)if(!i.got){i.mesh.rotation.y=t*.8;i.mesh.position.y=.5+Math.sin(t*2+i.x)*.1;}updateHUD();}
function jump(){if(mode==='play'&&actors[0].jumps<2){actors[0].vy=6.5;actors[0].jumps++;}}
function pause(){if(mode==='play'){mode='pause';notify('Paused · press P to continue');$('pause').textContent='Resume';}else if(mode==='pause'){mode='play';$('pause').textContent='Pause';}}
function menu(){mode='menu';keys.clear();$('menu').hidden=false;$('hud').hidden=true;$('result').hidden=true;startMusic('pop');}
LEVELS.forEach((l,i)=>{const o=document.createElement('option');o.value=i;o.textContent=`${String(i+1).padStart(2,'0')} · ${l.name}`;$('level').append(o);});
$('start').onclick=()=>start(Number($('level').value));$('retry').onclick=()=>start(level);$('next').onclick=()=>start(Math.min(level+1,LEVELS.length-1));$('back').onclick=$('rooms').onclick=menu;$('pause').onclick=pause;$('sound').onclick=()=>{initAudio();toggleMute();};
addEventListener('keydown',e=>{if(e.target.tagName==='SELECT')return;if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))e.preventDefault();if(e.code==='Space'&&!e.repeat)jump();if(e.code==='KeyP'&&!e.repeat)pause();keys.add(e.code);});addEventListener('keyup',e=>keys.delete(e.code));addEventListener('blur',()=>{keys.clear();if(mode==='play')pause();});document.addEventListener('visibilitychange',()=>{if(document.hidden&&mode==='play')pause();});
document.querySelectorAll('[data-key]').forEach(b=>{b.onpointerdown=e=>{e.preventDefault();b.setPointerCapture(e.pointerId);keys.add(b.dataset.key);};b.onpointerup=b.onpointercancel=()=>keys.delete(b.dataset.key);});$('jump').onpointerdown=e=>{e.preventDefault();jump();};$('duck').onpointerdown=e=>{e.preventDefault();$('duck').setPointerCapture(e.pointerId);keys.add('KeyC');};$('duck').onpointerup=$('duck').onpointercancel=()=>keys.delete('KeyC');
function resize(){renderer.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();}addEventListener('resize',resize);resize();build(0);
const clock=new T.Clock();let elapsed=0;function frame(){requestAnimationFrame(frame);const dt=Math.min(clock.getDelta(),.05);elapsed+=dt;update(dt,elapsed);if(toastTime>0){toastTime-=dt;if(toastTime<=0)$('toast').classList.remove('visible');}const p=actors[0].root.position;const center=mode==='menu'?new T.Vector3(1,0,0):new T.Vector3(p.x*.35,0,p.z*.35);const desired=center.clone().add(new T.Vector3(22,24,29));camera.position.lerp(desired,.06);camera.lookAt(center);renderer.render(scene,camera);}camera.position.set(23,24,29);frame();
