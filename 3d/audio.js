// Music snapshot from the original game. Original index.html is unchanged.
let AC=null,master=null,musicGain=null,sfxGain=null,muted=false,noiseBuf=null;
function initAudio(){
  if(AC){if(AC.state==='suspended')AC.resume();return;}
  try{AC=new (window.AudioContext||window.webkitAudioContext)();}catch(e){return;}
  master=AC.createGain();master.gain.value=0.5;master.connect(AC.destination);
  musicGain=AC.createGain();musicGain.gain.value=0.38;musicGain.connect(master);
  sfxGain=AC.createGain();sfxGain.gain.value=0.8;sfxGain.connect(master);
  noiseBuf=AC.createBuffer(1,AC.sampleRate,AC.sampleRate);const d=noiseBuf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
  setInterval(scheduler,25);
}
function toggleMute(){muted=!muted;if(master)master.gain.value=muted?0:0.5;}
const mtof=n=>440*Math.pow(2,(n-69)/12);
function tone(f,dur,type='square',vol=0.2,slide=null,t=null,dest=null){
  if(!AC)return;t=t??AC.currentTime;
  const o=AC.createOscillator(),ga=AC.createGain();o.type=type;o.frequency.setValueAtTime(f,t);
  if(slide)o.frequency.exponentialRampToValueAtTime(slide,t+dur);
  ga.gain.setValueAtTime(vol,t);ga.gain.exponentialRampToValueAtTime(0.001,t+dur);
  o.connect(ga);ga.connect(dest||sfxGain);o.start(t);o.stop(t+dur+0.02);
}
function noise(dur,vol,hp=1000,t=null,dest=null){
  if(!AC)return;t=t??AC.currentTime;
  const s=AC.createBufferSource();s.buffer=noiseBuf;const f=AC.createBiquadFilter();f.type='highpass';f.frequency.value=hp;
  const ga=AC.createGain();ga.gain.setValueAtTime(vol,t);ga.gain.exponentialRampToValueAtTime(0.001,t+dur);
  s.connect(f);f.connect(ga);ga.connect(dest||sfxGain);s.start(t);s.stop(t+dur+0.02);
}
// kazoo lead: buzzy saw through a bandpass with wobbly vibrato
// soft lead for background music: mellow square+triangle through a lowpass, gentle vibrato
function softLead(f,dur,t,vol=0.06){
  const o=AC.createOscillator(),o2=AC.createOscillator(),lp=AC.createBiquadFilter(),ga=AC.createGain(),lfo=AC.createOscillator(),lg=AC.createGain();
  o.type='triangle';o2.type='square';o.frequency.value=f;o2.frequency.value=f*1.003;
  lfo.frequency.value=5;lg.gain.value=f*0.004;lfo.connect(lg);lg.connect(o.frequency);
  lp.type='lowpass';lp.frequency.value=1600;lp.Q.value=0.5;
  const g2=AC.createGain();g2.gain.value=0.25;o2.connect(g2);g2.connect(lp);o.connect(lp);
  ga.gain.setValueAtTime(0,t);ga.gain.linearRampToValueAtTime(vol,t+0.015);ga.gain.exponentialRampToValueAtTime(vol*0.5,t+dur*0.6);ga.gain.linearRampToValueAtTime(0,t+dur);
  lp.connect(ga);ga.connect(musicGain);[o,o2,lfo].forEach(x=>{x.start(t);x.stop(t+dur+0.05);});
}
function kazoo(f,dur,t,vol=0.13){
  const o=AC.createOscillator(),o2=AC.createOscillator(),bp=AC.createBiquadFilter(),ga=AC.createGain(),lfo=AC.createOscillator(),lg=AC.createGain();
  o.type='sawtooth';o2.type='square';o.frequency.value=f;o2.frequency.value=f*1.005;
  lfo.frequency.value=6.5;lg.gain.value=f*0.018;lfo.connect(lg);lg.connect(o.frequency);lg.connect(o2.frequency);
  bp.type='bandpass';bp.frequency.value=1400;bp.Q.value=1.6;
  ga.gain.setValueAtTime(0,t);ga.gain.linearRampToValueAtTime(vol,t+0.02);ga.gain.setValueAtTime(vol,t+dur*0.7);ga.gain.linearRampToValueAtTime(0,t+dur);
  // little "scoop" up into the note — very silly
  o.frequency.setValueAtTime(f*0.94,t);o.frequency.linearRampToValueAtTime(f,t+0.05);
  o.connect(bp);o2.connect(bp);bp.connect(ga);ga.connect(musicGain);
  [o,o2,lfo].forEach(x=>{x.start(t);x.stop(t+dur+0.05);});
}
const SFX={
  jump(){tone(300,0.18,'sine',0.25,900);},                          // slide whistle up
  boing(){tone(180,0.3,'square',0.18,720);tone(360,0.3,'triangle',0.15,90);},
  collect(){const t=AC&&AC.currentTime;if(!AC)return;[0,4,7,12].forEach((n,i)=>tone(mtof(76+n),0.09,'square',0.12,null,t+i*0.05));},
  hurt(){tone(400,0.5,'sawtooth',0.18,80);noise(0.2,0.2,300);},
  fall(){tone(900,0.9,'sine',0.25,60);},                            // slide whistle down
  honk(){if(!AC)return;const t=AC.currentTime;[0,0.22].forEach(d=>{tone(330,0.16,'sawtooth',0.18,null,t+d);tone(415,0.16,'sawtooth',0.14,null,t+d);});},
  nope(){tone(160,0.15,'square',0.15);tone(120,0.2,'square',0.15,null,AC&&AC.currentTime+0.15);},
  win(){if(!AC)return;const t=AC.currentTime;[72,76,79,84,79,84].forEach((n,i)=>kazoo(mtof(n),i==5?0.6:0.14,t+i*0.13,0.2));},
  lose(){if(!AC)return;const t=AC.currentTime;[67,66,65].forEach((n,i)=>tone(mtof(n-12),0.4,'sawtooth',0.2,null,t+i*0.45));tone(mtof(52),1.3,'sawtooth',0.2,mtof(48),t+1.35);},
  fart(){if(!AC)return;tone(90,0.35,'sawtooth',0.25,55);noise(0.3,0.08,100);}
};
// ---- music sequencer ----
const _=null;
const SONG={
  lead:[72,_,76,79, 81,79,76,_, 77,_,74,77, 76,72,_,_,
        72,_,76,79, 84,_,83,81, 79,77,76,74, 72,_,67,_,
        69,_,72,69, 71,_,74,71, 72,_,76,72, 74,79,_,_,
        77,76,75,74, 73,72,71,_, 79,_,67,_, 72,_,_,_],
  roots:[48,53,48,55,57,55,53,55],
};
function stopMusic(){music.on=false;}
// ---- MIDI-rock instruments: overdriven rhythm guitar, lead guitar, picked bass, rock kit ----
let gtrBus=null,leadBus=null;
function distCurve(k){const n=1024,c=new Float32Array(n);for(let i=0;i<n;i++){const x=i*2/n-1;c[i]=(1+k)*x/(1+k*Math.abs(x));}return c;}
function makeAmp(drive,tone,vol){ // waveshaper "amp" + cabinet filtering
  const inp=AC.createGain(),ws=AC.createWaveShaper(),hp=AC.createBiquadFilter(),lp=AC.createBiquadFilter(),mid=AC.createBiquadFilter(),out=AC.createGain();
  ws.curve=distCurve(drive);ws.oversample='4x';hp.type='highpass';hp.frequency.value=90;lp.type='lowpass';lp.frequency.value=tone;
  mid.type='peaking';mid.frequency.value=800;mid.gain.value=4;out.gain.value=vol;
  inp.connect(ws);ws.connect(hp);hp.connect(mid);mid.connect(lp);lp.connect(out);out.connect(musicGain);return inp;
}
function gtrNote(freqs,dur,t,vol,mute){ // power chord: detuned saws into the amp
  if(!gtrBus)gtrBus=makeAmp(60,3200,0.12);
  const ga=AC.createGain(),f=AC.createBiquadFilter();f.type='lowpass';f.frequency.value=mute?700:2600;
  ga.gain.setValueAtTime(vol,t);ga.gain.exponentialRampToValueAtTime(vol*(mute?0.05:0.5),t+dur);ga.gain.linearRampToValueAtTime(0,t+dur+0.03);
  freqs.forEach(fr=>{[0,-7].forEach(det=>{const o=AC.createOscillator();o.type='sawtooth';o.frequency.value=fr;o.detune.value=det;o.connect(f);o.start(t);o.stop(t+dur+0.05);});});
  f.connect(ga);ga.connect(gtrBus);
}
function leadGtr(fr,dur,t,vol=0.5){
  if(!leadBus)leadBus=makeAmp(25,3800,0.11);
  const o=AC.createOscillator(),o2=AC.createOscillator(),ga=AC.createGain(),lfo=AC.createOscillator(),lg=AC.createGain();
  o.type='sawtooth';o2.type='square';o.frequency.value=fr;o2.frequency.value=fr*2.002;
  lfo.frequency.value=5.5;lg.gain.setValueAtTime(0,t);lg.gain.linearRampToValueAtTime(fr*0.012,t+Math.min(dur,0.4));lfo.connect(lg);lg.connect(o.frequency);lg.connect(o2.frequency);
  const g2=AC.createGain();g2.gain.value=0.3;o2.connect(g2);g2.connect(ga);o.connect(ga);
  o.frequency.setValueAtTime(fr*0.97,t);o.frequency.linearRampToValueAtTime(fr,t+0.04); // pick bend
  ga.gain.setValueAtTime(0,t);ga.gain.linearRampToValueAtTime(vol,t+0.01);ga.gain.setValueAtTime(vol*0.8,t+dur*0.8);ga.gain.linearRampToValueAtTime(0,t+dur);
  ga.connect(leadBus);[o,o2,lfo].forEach(x=>{x.start(t);x.stop(t+dur+0.05);});
}
function bassNote(fr,dur,t){
  const o=AC.createOscillator(),o2=AC.createOscillator(),f=AC.createBiquadFilter(),ga=AC.createGain();
  o.type='sawtooth';o2.type='triangle';o.frequency.value=fr;o2.frequency.value=fr;f.type='lowpass';f.frequency.setValueAtTime(900,t);f.frequency.exponentialRampToValueAtTime(250,t+dur);
  ga.gain.setValueAtTime(0.22,t);ga.gain.exponentialRampToValueAtTime(0.05,t+dur);ga.gain.linearRampToValueAtTime(0,t+dur+0.02);
  o.connect(f);o2.connect(f);f.connect(ga);ga.connect(musicGain);[o,o2].forEach(x=>{x.start(t);x.stop(t+dur+0.05);});
}
// ================= MULTI-STYLE MUSIC ENGINE =================
// Every level gets its own genre. Each style: bpm, spb (steps per beat), bar (steps per bar), bars (bars per loop), play(step,time,stepDur)
let revIn=null;
function reverb(){
  if(revIn)return revIn;
  const len=AC.sampleRate*2.4|0,ir=AC.createBuffer(2,len,AC.sampleRate);
  for(let c=0;c<2;c++){const d=ir.getChannelData(c);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,3.2);}
  const cv=AC.createConvolver();cv.buffer=ir;const wet=AC.createGain();wet.gain.value=0.45;cv.connect(wet);wet.connect(musicGain);return revIn=cv;
}
function out(vol,send){const ga=AC.createGain();ga.connect(musicGain);if(send){const s=AC.createGain();s.gain.value=send;ga.connect(s);s.connect(reverb());}return ga;}
function O(type,f,t,end,dest,gain=1){const o=AC.createOscillator();o.type=type;o.frequency.setValueAtTime(f,t);let n=o;if(gain!==1){const g2=AC.createGain();g2.gain.value=gain;o.connect(g2);n=g2;}n.connect(dest);o.start(t);o.stop(end);return o;}
function decayEnv(ga,t,vol,len,a=0.005){ga.gain.setValueAtTime(0,t);ga.gain.linearRampToValueAtTime(vol,t+a);ga.gain.exponentialRampToValueAtTime(0.0008,t+len);}
function holdEnv(ga,t,vol,dur,a=0.02,rel=0.08){ga.gain.setValueAtTime(0,t);ga.gain.linearRampToValueAtTime(vol,t+a);ga.gain.setValueAtTime(vol,t+Math.max(a,dur-rel));ga.gain.linearRampToValueAtTime(0,t+dur);}
// --- instruments ---
function piano(m,dur,t,vol=0.12,send=0.35){const f=mtof(m),ga=out(vol,send),len=Math.max(0.6,dur)+0.9;
  decayEnv(ga,t,vol,len,0.004);const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.setValueAtTime(f*8,t);lp.frequency.exponentialRampToValueAtTime(f*2,t+len);lp.connect(ga);
  O('triangle',f,t,t+len,lp);O('sine',f*2,t,t+len,lp,0.35);O('sine',f*3.01,t,t+len,lp,0.08);O('sine',f*0.5,t,t+len,lp,m<55?0.25:0);}
function organ(m,dur,t,vol=0.04,send=0.6){const f=mtof(m),ga=out(1,send);holdEnv(ga,t,vol,dur,0.015,0.05);
  [[1,1],[2,0.75],[3,0.3],[4,0.45],[6,0.12],[8,0.22]].forEach(([h,w])=>{if(f*h<9000)O('sine',f*h,t,t+dur+0.05,ga,w);});}
function epiano(m,dur,t,vol=0.08,send=0.2){const f=mtof(m),ga=out(1,send);decayEnv(ga,t,vol,dur+0.5,0.005);
  const c=O('sine',f,t,t+dur+0.6,ga),mod=AC.createOscillator(),mg=AC.createGain();mod.frequency.value=f;mg.gain.setValueAtTime(f*1.8,t);mg.gain.exponentialRampToValueAtTime(f*0.1,t+0.5);
  mod.connect(mg);mg.connect(c.frequency);mod.start(t);mod.stop(t+dur+0.6);O('sine',f*4,t,t+0.15,ga,0.08);}
function sax(m,dur,t,vol=0.07,send=0.25){const f=mtof(m),ga=out(1,send);holdEnv(ga,t,vol,dur,0.03,0.06);
  const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.value=2000;lp.Q.value=1.5;const pk=AC.createBiquadFilter();pk.type='peaking';pk.frequency.value=1100;pk.gain.value=7;lp.connect(pk);pk.connect(ga);
  const o=O('sawtooth',f*0.96,t,t+dur+0.05,lp);o.frequency.linearRampToValueAtTime(f,t+0.05);
  const l=AC.createOscillator(),lg=AC.createGain();l.frequency.value=5.2;lg.gain.setValueAtTime(0,t);lg.gain.linearRampToValueAtTime(f*0.01,t+Math.min(dur,0.35));l.connect(lg);lg.connect(o.frequency);l.start(t);l.stop(t+dur+0.05);}
function popLead(m,dur,t,vol=0.045,send=0.25){const f=mtof(m),ga=out(1,send);holdEnv(ga,t,vol,dur,0.01,0.05);
  const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.value=3800;lp.connect(ga);O('square',f,t,t+dur+0.05,lp).detune.value=-7;O('square',f,t,t+dur+0.05,lp).detune.value=7;O('sine',f*2,t,t+dur+0.05,lp,0.3);}
function pluck(m,dur,t,vol=0.04,send=0.2,bright=3000){const f=mtof(m),ga=out(1,send);decayEnv(ga,t,vol,Math.min(0.5,dur+0.15),0.003);
  const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.setValueAtTime(bright,t);lp.frequency.exponentialRampToValueAtTime(300,t+0.2);lp.connect(ga);O('sawtooth',f,t,t+0.6,lp);O('square',f*1.004,t,t+0.6,lp,0.5);}
function subBass(m,dur,t,vol=0.32){const f=mtof(m),ga=out(1,0);holdEnv(ga,t,vol,dur,0.005,0.08);const o=O('sine',f*1.5,t,t+dur+0.05,ga);o.frequency.exponentialRampToValueAtTime(f,t+0.04);O('triangle',f*2,t,t+dur+0.05,ga,0.15);}
function synthBass(m,dur,t,vol=0.16){const f=mtof(m),ga=out(1,0);holdEnv(ga,t,vol,dur,0.004,0.03);const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.setValueAtTime(1400,t);lp.frequency.exponentialRampToValueAtTime(300,t+dur);lp.connect(ga);O('sawtooth',f,t,t+dur+0.05,lp);O('square',f/2,t,t+dur+0.05,lp,0.5);}
function acid(m,dur,t,cut,vol=0.1){const f=mtof(m),ga=out(1,0.08);holdEnv(ga,t,vol,dur,0.003,0.02);const lp=AC.createBiquadFilter();lp.type='lowpass';lp.Q.value=13;
  lp.frequency.setValueAtTime(cut*3,t);lp.frequency.exponentialRampToValueAtTime(Math.max(120,cut*0.6),t+dur);lp.connect(ga);O('sawtooth',f,t,t+dur+0.05,lp);}
function flute(m,dur,t,vol=0.06){const f=mtof(m),ga=out(1,0.6);holdEnv(ga,t,vol,dur,0.09,0.15);
  const o=O('sine',f,t,t+dur+0.05,ga);O('triangle',f*2,t,t+dur+0.05,ga,0.08);
  const l=AC.createOscillator(),lg=AC.createGain();l.frequency.value=4.8;lg.gain.setValueAtTime(0,t);lg.gain.linearRampToValueAtTime(f*0.006,t+Math.min(dur,0.5));l.connect(lg);lg.connect(o.frequency);l.start(t);l.stop(t+dur+0.05);
  nz(Math.min(dur,0.25),0.008,'bandpass',f*2,t,2);}
function accordion(m,dur,t,vol=0.03){const f=mtof(m),ga=out(1,0.2);holdEnv(ga,t,vol,dur,0.02,0.04);
  const bp=AC.createBiquadFilter();bp.type='bandpass';bp.frequency.value=1500;bp.Q.value=0.6;const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.value=4200;bp.connect(lp);lp.connect(ga);
  [-14,0,14].forEach(c=>{O('sawtooth',f,t,t+dur+0.05,bp).detune.value=c;});O('square',f/2,t,t+dur+0.05,bp,0.4);} // musette tremolo = wobbly 3-reed accordion
function trumpet(m,dur,t,vol=0.06){const f=mtof(m),ga=out(1,0.25);holdEnv(ga,t,vol,dur,0.03,0.05);
  const lp=AC.createBiquadFilter();lp.type='lowpass';lp.Q.value=2;lp.frequency.setValueAtTime(f*1.2,t);lp.frequency.exponentialRampToValueAtTime(Math.min(9000,f*7),t+0.06);lp.frequency.exponentialRampToValueAtTime(f*4,t+dur);
  const pk=AC.createBiquadFilter();pk.type='peaking';pk.frequency.value=1400;pk.gain.value=6;lp.connect(pk);pk.connect(ga);
  const o=O('sawtooth',f*0.94,t,t+dur+0.05,lp);o.frequency.exponentialRampToValueAtTime(f,t+0.04);}
function trombone(m1,m2,dur,t,vol=0.09){const ga=out(1,0.3);holdEnv(ga,t,vol,dur,0.04,0.1);const lp=AC.createBiquadFilter();lp.type='lowpass';lp.Q.value=4;lp.connect(ga);
  const l=AC.createOscillator(),lg=AC.createGain();l.frequency.value=4;lg.gain.value=500;lp.frequency.value=900;l.connect(lg);lg.connect(lp.frequency);l.start(t);l.stop(t+dur+0.05); // wah-wah
  const o=O('sawtooth',mtof(m1),t,t+dur+0.05,lp);o.frequency.setValueAtTime(mtof(m1),t+dur*0.15);o.frequency.exponentialRampToValueAtTime(mtof(m2),t+dur);}
function tuba(m,dur,t,vol=0.3){const f=mtof(m),ga=out(1,0.05);holdEnv(ga,t,vol,dur,0.015,0.05);const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.value=420;lp.Q.value=1.5;lp.connect(ga);
  O('sawtooth',f,t,t+dur+0.05,lp);O('sine',f,t,t+dur+0.05,ga,0.5);}
function panFlute(m,dur,t,vol=0.05){const f=mtof(m),ga=out(1,0.5);holdEnv(ga,t,vol,dur,0.06,0.1);
  const o=O('sine',f,t,t+dur+0.05,ga);O('triangle',f,t,t+dur+0.05,ga,0.25);nz(Math.min(dur,0.3),0.012,'bandpass',f*1.5,t,3);
  const l=AC.createOscillator(),lg=AC.createGain();l.frequency.value=0.7;lg.gain.value=25;l.connect(lg);lg.connect(o.detune);l.start(t);l.stop(t+dur+0.05);} // tape warble
function vibes(m,dur,t,vol=0.05){const f=mtof(m),ga=out(1,0.5);decayEnv(ga,t,vol,1.6,0.003);const tr=AC.createGain();tr.connect(ga);
  const l=AC.createOscillator(),lg=AC.createGain();l.frequency.value=5;lg.gain.value=0.4;l.connect(lg);lg.connect(tr.gain);l.start(t);l.stop(t+1.7);
  O('sine',f,t,t+1.7,tr);O('sine',f*4,t,t+0.3,tr,0.12);}
const rimshot=(t,v=0.06)=>{tone(1700,0.03,'square',v,null,t,musicGain);nz(0.03,v,'bandpass',2500,t,2);};
const shaker=(t,v=0.025)=>nz(0.05,v,'bandpass',6000,t,0.8);
const elevatorDing=t=>{tone(1318,1.2,'sine',0.06,null,t,musicGain);tone(1046,1.4,'sine',0.06,null,t+0.35,musicGain);};
let voiceLast=0;
function croonVoice(m,dur,t,vol=0.075){ // a warm crooning 'ohhh' voice: formant filters, slide into each note, heavy vibrato
  const f=mtof(m),ga=out(1,0.55);holdEnv(ga,t,vol,dur,0.07,0.18);
  const f1=AC.createBiquadFilter();f1.type='bandpass';f1.frequency.value=520;f1.Q.value=5;const f2=AC.createBiquadFilter();f2.type='bandpass';f2.frequency.value=880;f2.Q.value=6;
  const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.value=2600;f1.connect(lp);f2.connect(lp);lp.connect(ga);
  const o=AC.createOscillator();o.type='sawtooth';const from=voiceLast&&Math.abs(voiceLast-f)<f*0.6?voiceLast:f*0.97;
  o.frequency.setValueAtTime(from,t);o.frequency.exponentialRampToValueAtTime(f,t+0.12);o.connect(f1);o.connect(f2);
  const s2=AC.createOscillator();s2.type='sine';s2.frequency.value=f;const sg=AC.createGain();sg.gain.value=0.6;s2.connect(sg);sg.connect(ga);
  const l=AC.createOscillator(),lg=AC.createGain();l.frequency.value=5.6;lg.gain.setValueAtTime(0,t);lg.gain.linearRampToValueAtTime(f*0.022,t+Math.min(dur,0.5));l.connect(lg);lg.connect(o.frequency);lg.connect(s2.frequency);
  [o,s2,l].forEach(x=>{x.start(t);x.stop(t+dur+0.05);});voiceLast=f;}
function mandolin(m,dur,t,vol=0.03){for(let k=0;k*0.07<dur;k++)pluck(m,0.07,t+k*0.07,vol*(k%2?0.7:1),0.3,4500);} // tremolo picking
function strings(ms,dur,t,vol=0.018){const ga=out(1,0.6);holdEnv(ga,t,vol,dur,0.35,0.4);const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1800;lp.connect(ga);
  ms.forEach(m=>[-8,8].forEach(c=>{O('sawtooth',mtof(m),t,t+dur+0.05,lp).detune.value=c;}));}
function harp(m,dur,t,vol=0.05){const f=mtof(m),ga=out(1,0.5);decayEnv(ga,t,vol,Math.max(1,dur+0.6),0.003);
  const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.setValueAtTime(f*6,t);lp.frequency.exponentialRampToValueAtTime(f*1.5,t+1);lp.connect(ga);
  O('triangle',f,t,t+dur+1.2,lp);O('sine',f*2,t,t+dur+1.2,lp,0.3);}
function celesta(m,dur,t,vol=0.045){const f=mtof(m),ga=out(1,0.6);decayEnv(ga,t,vol,1.2,0.002);O('sine',f,t,t+1.3,ga);O('sine',f*4,t,t+0.25,ga,0.25);O('sine',f*2,t,t+0.6,ga,0.2);}
function boingBass(m,dur,t,vol=0.3){const f=mtof(m),ga=out(1,0);holdEnv(ga,t,vol,dur,0.005,0.05);const o=O('sine',f*2.2,t,t+dur+0.05,ga);o.frequency.exponentialRampToValueAtTime(f,t+0.09);
  const o2=O('triangle',f*2.2,t,t+dur+0.05,ga,0.4);o2.frequency.exponentialRampToValueAtTime(f,t+0.09);}
function robotBeep(m,dur,t,vol=0.035){const f=mtof(m),ga=out(1,0.15);holdEnv(ga,t,vol,dur,0.005,0.02);const bp=AC.createBiquadFilter();bp.type='bandpass';bp.frequency.value=f*2;bp.Q.value=2;bp.connect(ga);
  const o=O('square',f,t,t+dur+0.05,bp);o.frequency.setValueAtTime(f*1.5,t+dur*0.5);O('square',f*1.01,t,t+dur+0.05,ga,0.3);}
const squeak=(t,f=1800)=>{tone(f,0.07,'sine',0.07,f*1.7,t,musicGain);tone(f*1.3,0.06,'sine',0.05,f*0.8,t+0.07,musicGain);};
const clownHorn=t=>{tone(330,0.13,'sawtooth',0.07,300,t,musicGain);tone(415,0.13,'square',0.04,380,t,musicGain);};
const cuckoo=t=>{tone(784,0.18,'sine',0.08,null,t,musicGain);tone(622,0.25,'sine',0.08,null,t+0.2,musicGain);};
const slideUp=(t,d)=>tone(400,d,'sine',0.08,1800,t,musicGain);
const slideDown=(t,d)=>tone(1800,d,'sine',0.08,300,t,musicGain);
const bonk=t=>{tone(220,0.2,'sine',0.25,70,t,musicGain);nz(0.03,0.1,'bandpass',800,t,3);};
const burp=t=>{const ga=out(0.2,0);ga.gain.setValueAtTime(0.18,t);ga.gain.linearRampToValueAtTime(0,t+0.45);const o=O('sawtooth',85,t,t+0.5,ga);o.frequency.linearRampToValueAtTime(60,t+0.45);
  const l=AC.createOscillator(),lg=AC.createGain();l.frequency.value=24;lg.gain.value=0.15;l.connect(lg);lg.connect(ga.gain);l.start(t);l.stop(t+0.5);};
function supersaw(m,dur,t,vol=0.03,cut=3500){const f=mtof(m),ga=out(1,0.25);holdEnv(ga,t,vol,dur,0.005,0.04);const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.value=cut;lp.Q.value=1;lp.connect(ga);
  [-24,-12,-5,0,5,12,24].forEach(c=>{O('sawtooth',f,t,t+dur+0.05,lp).detune.value=c;});}
const whistle=t=>{for(let k=0;k<6;k++)tone(2900+(k%2)*250,0.06,'sine',0.06,null,t+k*0.06,musicGain);};
const hey=t=>{const ga=out(1,0.3);ga.gain.setValueAtTime(0,t);ga.gain.linearRampToValueAtTime(0.16,t+0.02);ga.gain.exponentialRampToValueAtTime(0.001,t+0.28);
  const f1=AC.createBiquadFilter();f1.type='bandpass';f1.frequency.value=650;f1.Q.value=4;const f2=AC.createBiquadFilter();f2.type='bandpass';f2.frequency.value=1900;f2.Q.value=6;f1.connect(ga);f2.connect(ga);
  const o=O('sawtooth',230,t,t+0.3,f1);o.frequency.exponentialRampToValueAtTime(170,t+0.28);o.connect(f2);nz(0.25,0.08,'bandpass',2500,t,1);};
function steelPan(m,dur,t,vol=0.06){const f=mtof(m),ga=out(1,0.3);decayEnv(ga,t,vol,Math.min(0.9,dur+0.4),0.003);
  O('sine',f,t,t+1,ga);O('sine',f*2.005,t,t+0.6,ga,0.45);O('sine',f*3.01,t,t+0.25,ga,0.15);const o=O('triangle',f*0.995,t,t+1,ga,0.25);}
const bubble=(t,f=300)=>tone(f,0.09,'sine',0.07,f*4,t,musicGain);
const splash=t=>{nz(0.5,0.18,'highpass',1500,t);tone(110,0.4,'sine',0.35,45,t,musicGain);for(let k=0;k<5;k++)bubble(t+0.15+k*0.06,250+k*90);};
const conga=(t,hi)=>tone(hi?330:220,0.16,'sine',0.18,hi?260:170,t,musicGain);
function bubbleBass(m,dur,t,vol=0.3){const f=mtof(m),ga=out(1,0);holdEnv(ga,t,vol,dur,0.004,0.06);const o=O('sine',f*1.8,t,t+dur+0.05,ga);o.frequency.exponentialRampToValueAtTime(f,t+0.06);O('triangle',f,t,t+dur+0.05,ga,0.3);}
function walkBass(m,dur,t,vol=0.3){const f=mtof(m),ga=out(1,0.05);decayEnv(ga,t,vol,dur+0.15,0.01);const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.value=700;lp.connect(ga);O('triangle',f,t,t+dur+0.2,lp);O('sine',f*2,t,t+dur+0.2,lp,0.2);}
// --- drums ---
function nz(dur,vol,type,freq,t,q=1){const s=AC.createBufferSource();s.buffer=noiseBuf;const f=AC.createBiquadFilter();f.type=type;f.frequency.value=freq;f.Q.value=q;const ga=AC.createGain();ga.gain.setValueAtTime(vol,t);ga.gain.exponentialRampToValueAtTime(0.001,t+dur);s.connect(f);f.connect(ga);ga.connect(musicGain);s.start(t,Math.random()*0.5);s.stop(t+dur+0.02);return f;}
const kick=(t,v=0.6)=>{tone(160,0.18,'sine',v,40,t,musicGain);nz(0.015,v*0.25,'highpass',2000,t);};
const kick808=(t)=>{tone(110,0.6,'sine',0.7,36,t,musicGain);};
const snare=(t,v=0.22)=>{nz(0.16,v,'highpass',1200,t);tone(220,0.08,'triangle',v,150,t,musicGain);};
const hat=(t,open,v=0.05)=>nz(open?0.18:0.035,v,'highpass',8000,t);
const clap=(t,v=0.16)=>{for(let k=0;k<3;k++)nz(0.03,v,'bandpass',1300,t+k*0.011,1.5);nz(0.14,v*0.7,'bandpass',1300,t+0.033,1.2);};
const ride=(t,v=0.035)=>{nz(0.45,v,'highpass',6500,t);tone(2900,0.35,'square',0.006,null,t,musicGain);};
const brush=(t,v=0.05)=>nz(0.12,v,'bandpass',3500,t,0.7);
const crash=t=>nz(1.4,0.1,'highpass',4500,t);
const rKick=t=>{tone(190,0.28,'sine',0.95,42,t,musicGain);tone(90,0.2,'triangle',0.4,40,t,musicGain);nz(0.02,0.3,'highpass',3000,t);};
const rSnare=(t,v=0.42)=>{const f=nz(0.22,v,'bandpass',1900,t,0.8);nz(0.25,v*0.5,'highpass',5000,t);tone(200,0.12,'triangle',v*0.9,160,t,musicGain);
  const s=AC.createGain();s.gain.value=0.4;f.connect(s);s.connect(reverb());};
const rCrash=t=>{nz(1.8,0.18,'highpass',4000,t);nz(0.6,0.08,'bandpass',6500,t,0.5);};
const rTom=(t,f)=>{tone(f,0.3,'sine',0.6,f*0.5,t,musicGain);nz(0.03,0.1,'bandpass',f*4,t);};
const tom=(t,f)=>tone(f,0.25,'sine',0.4,f*0.55,t,musicGain);
const cowbell=(t)=>{tone(540,0.12,'square',0.025,null,t,musicGain);tone(810,0.12,'square',0.025,null,t,musicGain);};
function scratch(t){const f=nz(0.32,0.25,'bandpass',600,t,4);f.frequency.setValueAtTime(500,t);f.frequency.exponentialRampToValueAtTime(3500,t+0.12);f.frequency.exponentialRampToValueAtTime(400,t+0.3);}

const STYLES={
 // BEDROOM: MIDI rock — distorted power chords, lead guitar, bass, rock kit
 rock:{name:"RADICAL ROCK",bpm:144,spb:2,bar:8,bars:8,play(i,t,d){
   const s=SONG,len=64,li=i%len,loop=Math.floor(i/len),bar=Math.floor(li/8),root=s.roots[bar],b=li%8,lastBar=bar===7;
   const n=s.lead[li];
   if(n!==null&&loop%3!==2){let k=1;while(k<4&&s.lead[(li+k)%len]===null)k++;leadGtr(mtof(n-12),d*k*0.95,t);}
   const pc=[mtof(root-12),mtof(root-5),mtof(root)],acc=(b===0||b===3||b===6);
   if(!(lastBar&&b>=4)){gtrNote(pc,acc?d*(b===6?2:1.4):d*0.5,t,acc?0.5:0.35,!acc);bassNote(mtof(root-24),d*0.85,t);}
   // big rock drum kit: punchy kick, cracking backbeat snare, driving hats, ride on the bridge, crashes and tom fills
   const bridge=bar>=4&&bar<6;
   if(li%16===0)rCrash(t);
   if(lastBar&&b>=4){rTom(t,[240,200,160,120][b-4]);rTom(t+d/2,[220,180,140,110][b-4]);if(b===7){rKick(t);rCrash(t+d);}}
   else{
     if(b===0||b===4||(b===5&&bar%2)||(b===7&&bar===6))rKick(t);
     if(b===2||b===6)rSnare(t);
     if(b===7&&bar%2===0)rSnare(t+d/2,0.12); // ghost note
     if(bridge)ride(t,0.06);else hat(t,b===7,b%2?0.06:0.1);
   }
 }},
 // KITCHEN: swing jazz — walking bass, ride cymbal, Rhodes comping, sax melody over ii-V-I in F
 jazz:{name:"COOL KITCHEN JAZZ",bpm:150,spb:2,bar:8,bars:8,
  ch:[[43,3,[53,58,62,65]],[36,4,[52,58,62,64]],[41,4,[52,57,60,64]],[38,4,[54,57,60,64]],[43,3,[53,58,62,65]],[36,4,[52,58,62,64]],[41,4,[52,57,60,64]],[41,4,[52,57,60,64]]],
  mel:[67,70,74,72, 70,_,67,_, 64,67,70,69, 67,_,_,64, 65,_,69,72, 76,_,74,72, 74,_,72,_, 69,66,_,_,
       70,69,67,_, 70,74,_,77, 76,_,74,72, 70,67,64,_, 65,_,_,_, _,_,72,69, 65,_,_,_, _,_,_,_],
  play(i,t,d){const li=i%64,loop=Math.floor(i/64),bar=Math.floor(li/8),b=li%8,c=this.ch[bar],nx=this.ch[(bar+1)%8];
   const sw=b%2?t+d*0.33:t; // swing!
   if(b%2===0){const beat=b/2,r=c[0];walkBass([r,r+c[1],r+7,nx[0]+(bar%2?1:-1)][beat]-12+12,d*1.8,t);ride(t);if(beat===1||beat===3)hat(t,false,0.03);kick(t,0.12);}
   if(b===3||b===7)ride(sw,0.025);
   if(b===5&&bar%2)brush(sw);
   if((b===3&&bar%2===0)||(b===6)||(b===1&&bar%2))c[2].forEach(m=>epiano(m,d*1.2,sw,0.035));
   const n=this.mel[li];if(n!==null&&loop%3!==2){let k=1;while(k<6&&this.mel[(li+k)%64]===null)k++;sax(n,d*k*0.95,sw);}
   if(loop%3===2&&b%2===1&&(li*7)%5<2)epiano(c[2][(li*3)%4]+12,d*1.5,sw,0.05);
 }},
 // LIVING ROOM: bubblegum pop — four on the floor, claps, synth bass, plucky chords, catchy hook (C G Am F)
 pop:{name:"POPTASTIC POP",bpm:118,spb:2,bar:8,bars:8,
  ch:[[48,[60,64,67]],[43,[59,62,67]],[45,[60,64,69]],[41,[60,65,69]]],
  mel:[76,76,_,74, 72,_,74,76, 79,_,76,_, 74,_,_,_, 72,72,_,74, 76,_,79,81, 79,_,77,76, 74,_,_,_,
       84,_,83,_, 79,_,76,_, 74,76,79,_, 79,_,_,_, 81,_,79,76, 74,_,72,_, 74,_,76,_, 72,_,_,_],
  play(i,t,d){const li=i%64,loop=Math.floor(i/64),bar=Math.floor(li/8),b=li%8,c=this.ch[bar%4],last=bar===7;
   if(b%2===0)kick(t,0.55);if(b===2||b===6)clap(t);hat(t,b%2===1,b%2?0.05:0.03);
   if(last&&b>=4)clap(t,0.1);if(li===0)crash(t);
   synthBass(c[0]-12+(b%2?12:0),d*0.8,t);
   if(b===0||b===3||b===6)c[1].forEach(m=>pluck(m,d,t,0.03));
   const n=this.mel[li];if(n!==null&&loop%4!==3){let k=1;while(k<4&&this.mel[(li+k)%64]===null)k++;popLead(n,d*k*0.9,t);}
   else if(loop%4===3&&b%2===0)pluck(c[1][(b/2)%3]+12,d,t,0.04,0.4,5000);
 }},
 // BACKYARD: boom-bap hip hop — 808 kick, crunchy snare, swung hats, lofi keys, sub bass, record scratches
 hiphop:{name:"BACKYARD BOOM-BAP",bpm:90,spb:4,bar:16,bars:4,
  ch:[[33,[57,60,64,67]],[33,[57,60,64,67]],[38,[53,57,60,65]],[40,[52,56,59,62]]],
  mel:{2:76,3:74,6:72,8:69,18:76,19:79,22:81,24:79,34:77,35:76,38:74,40:72,50:71,51:72,54:74,56:76},
  play(i,t,d){const li=i%64,loop=Math.floor(i/64),bar=Math.floor(li/16),s=li%16,c=this.ch[bar];
   const sw=s%2?t+d*0.28:t;
   if(s===0||s===7||s===10)kick808(t);
   if(s===0||s===10)subBass(c[0],d*(s?5:6),t);
   if(s===4||s===12){snare(t,0.25);clap(t,0.08);}
   if(s%2===0)hat(t,false,0.045);else if(bar===3&&s>=13)hat(sw,false,0.035);
   if(s===0)c[1].forEach(m=>epiano(m,d*6,t,0.03));if(s===10)c[1].forEach(m=>epiano(m+12*(m<60),d*3,t,0.022));
   const n=this.mel[li];if(n&&loop%2===0)piano(n,d*2,sw,0.07,0.15);
   if(loop%2===1&&li===60)scratch(t);
   if(Math.random()<0.15)nz(0.008,0.02,'highpass',3000,t); // vinyl crackle
 }},
 // GARAGE: funky techno — four-on-the-floor, offbeat open hats, squelchy acid bass, cowbell, chord stabs
 techno:{name:"GARAGE FUNK-TECHNO",bpm:126,spb:4,bar:16,bars:4,
  seq:[0,_,12,0, _,0,10,_, 0,_,7,_, 12,10,_,3],shift:[0,0,-4,-2],
  play(i,t,d){const li=i%64,bar=Math.floor(li/16),s=li%16,tr=this.shift[bar],cut=350+1300*(0.5+0.5*Math.sin(i/24));
   if(s%4===0)kick(t,0.65);if(s%4===2)hat(t,true,0.05);else hat(t,false,0.018);
   if(s===4||s===12)clap(t,0.12);
   if((s===3||s===6||s===11)&&bar%2)cowbell(t);
   const n=this.seq[s];if(n!==null)acid(40+tr+n,d*0.9,t,cut);
   if(s===6||s===14||(s===3&&bar===3))[64,67,71,74].forEach(m=>pluck(m+tr,d*0.7,t,0.022,0.3,2600));
   if(li===0&&i>0)crash(t);
 }},
 // ANNIE'S ROOM: fairy-tale princess waltz — harp arpeggios, lush strings, a dreamy flute melody, sparkly celesta, harp glissando
 princess:{name:"ONCE UPON A TIDY ROOM",bpm:150,spb:2,bar:6,bars:16,
  ch:[[38,[62,66,69]],[35,[59,62,66]],[43,[59,62,67]],[33,[61,64,69]],[38,[62,66,69]],[42,[61,66,69]],[43,[59,62,67]],[33,[61,64,69]],
      [35,[59,62,66]],[43,[59,62,67]],[38,[62,66,69]],[33,[61,64,69]],[40,[59,64,67]],[33,[61,64,69]],[38,[62,66,69]],[38,[62,66,69]]],
  mel:[66,_,_,_,69,_, 74,_,_,_,73,71, 71,_,_,_,67,_, 69,_,_,_,_,_, 66,_,_,_,69,_, 78,_,_,_,76,73, 74,_,76,_,71,_, 73,_,_,_,_,_,
       71,_,74,_,78,_, 79,_,_,_,78,76, 78,_,_,_,74,_, 76,_,_,_,73,_, 71,_,74,_,79,_, 78,_,76,_,73,_, 74,_,_,_,_,_, _,_,_,_,_,_],
  play(i,t,d){const li=i%96,loop=Math.floor(i/96),bar=Math.floor(li/6),b=li%6,[r,c]=this.ch[bar];
   if(b===0){walkBass(r,d*2.5,t,0.18);strings(c,d*6,t,0.016);}
   const arp=[r+12,c[0],c[1],c[2],c[0]+12,c[1]+12];
   if(bar<15)harp(arp[b],d*2,t,b===0?0.05:0.035);
   else if(b===0){const sc=[62,64,66,67,69,71,73,74,76,78,79,81,83,86];sc.forEach((m,k)=>harp(m,0.4,t+k*0.045,0.035));} // sparkly glissando
   const n=this.mel[li];
   if(n!==null){let k=1;while(k<8&&this.mel[(li+k)%96]===null)k++;
     if(loop%2===0)flute(n,d*k*0.98,t,0.065);else{celesta(n+12,d*k,t);flute(n,d*k*0.98,t,0.04);}}
   if(b===3&&bar%4===3)celesta(c[2]+24,d,t,0.025);
 }},
 // ARTS & CRAFTS: lively French impressionist piece — sliding parallel chords, piano ripples, playful flute, whole-tone harp sweeps
 french2:{name:"LES PETITS PEINTRES",bpm:112,spb:2,bar:8,bars:16,
  ch:[[38,[66,69,73]],[43,[66,71,74]],[38,[66,69,73]],[43,[66,71,74]],[35,[66,69,74]],[42,[64,69,73]],[43,[66,71,74]],[33,[64,67,73]],
      [36,[64,67,71]],[38,[66,69,73]],[36,[64,67,71]],[38,[66,69,73]],[35,[66,69,74]],[40,[66,67,71]],[33,[64,67,73]],[38,[66,69,73]]],
  mel:[78,_,81,_,78,76,_,_, 74,_,_,76,78,_,_,_, 81,_,83,_,81,78,_,76, 74,_,_,_,_,_,71,_,
       74,_,78,_,81,_,_,78, 76,_,_,73,_,_,69,_, 71,_,74,_,79,_,78,_, 76,_,_,_,_,_,_,_,
       76,_,79,_,76,74,_,_, 73,_,_,74,76,_,_,_, 79,_,83,_,79,76,_,74, 73,_,_,_,_,_,_,_,
       74,_,78,_,81,_,_,83, 83,_,_,79,_,_,78,_, 76,_,_,73,_,_,71,_, 74,_,_,_,_,_,_,_],
  rub(i){return 1+0.05*Math.sin(i/8*Math.PI*2)+((i%128)===127?0.5:0);},
  play(i,t,d){const li=i%128,loop=Math.floor(i/128),bar=Math.floor(li/8),b=li%8,[r,c]=this.ch[bar];
   if(b===0||b===4)walkBass(r+(b?7:0),d*1.2,t,0.16);
   const arp=[r+12,c[0],c[1],c[2],c[1]+12,c[2],c[1],c[0]];piano(arp[b],d*2,t,b===0?0.05:0.032,0.45);
   if(b===0)strings(c,d*8,t,0.01);
   if((bar===7||bar===15)&&b===4){[62,64,66,68,70,72,74,76,78,80,82,84].forEach((m,k)=>harp(m,0.4,t+k*0.035,0.03));}
   const n=this.mel[li];
   if(n!==null){let k=1;while(k<8&&this.mel[(li+k)%128]===null)k++;
     if(loop%2===0)flute(n,d*k*0.95,t,0.06);else{piano(n,d*k,t,0.09,0.5);celesta(n+12,d*k,t,0.025);}}
 }},
 // WORKOUT ROOM: high-octane workout anthem — pounding four-on-the-floor, rolling 16th bass, supersaw riff, coach whistle,
 // "HEY!" shouts, and a snare-roll build-up into a big drop every loop
 workout:{name:"MAXIMUM REPS!!!",bpm:140,spb:4,bar:16,bars:8,
  ch:[[45,[57,60,64,69]],[41,[57,60,65,69]],[48,[55,60,64,67]],[43,[55,59,62,67]],[45,[57,60,64,69]],[41,[57,60,65,69]],[48,[55,60,64,67]],[43,[55,59,62,67]]],
  pat:[0,2,1,2,3,2,1,2],
  play(i,t,d){const li=i%128,bar=Math.floor(li/16),s=li%16,[r,c]=this.ch[bar],build=bar>=6;
   if(li===0){crash(t);whistle(t);}
   if(!build||s<8){if(s%4===0)kick(t,0.75);}
   if(s%4===2)hat(t,true,0.06);else hat(t,false,0.025);
   if(!build&&(s===4||s===12))clap(t,0.16);
   if(build){const roll=bar===6?(s%4===0):(bar===7&&s<8?(s%2===0):true);if(roll)snare(t,0.08+0.18*((li-96)/32));
     if(li===96){const f=nz(d*32,0.12,'bandpass',300,t,3);f.frequency.exponentialRampToValueAtTime(6000,t+d*32);}} // riser
   if(!(bar===7&&s>=8))synthBass(r-12+(s%2?12:0),d*0.85,t,0.13);
   if(s%2===0&&!(bar===7&&s>=12)){const n=c[this.pat[(s/2)%8]]+12;supersaw(n,d*1.6,t,build?0.018:0.026,build?1500+2500*((li-96)/32):3800);}
   if(s===0&&bar%2===0)c.forEach(m=>supersaw(m,d*3,t,0.012,2500));
   if(bar%2===1&&s===14)hey(t);
   if(bar===7&&s===15)hey(t);
 }},
 // POOL: super-silly, splashy calypso pool party — steel drums, bubbly boing bass, ukulele strums, congas, shaker,
 // bubble pops, rubber-duck squeaks, slide whistle and a big CANNONBALL splash every loop
 pool:{name:"CANNONBALL CALYPSO",bpm:128,spb:4,bar:16,bars:16,
  ch:[[41,[57,60,65]],[41,[57,60,65]],[46,[58,62,65]],[36,[58,64,67]],[41,[57,60,65]],[41,[57,60,65]],[36,[58,64,67]],[41,[57,60,65]]],
  mel:[[[72,3],[74,3],[77,2],[79,2],[77,2],[74,4]],[[72,2],[69,2],[72,3],[74,3],[72,6]],[[74,3],[77,3],[82,2],[81,2],[79,2],[77,4]],[[79,3],[76,3],[72,2],[76,2],[79,2],[82,4]],
       [[81,3],[79,3],[77,2],[81,2],[84,6]],[[84,2],[81,2],[77,2],[79,2],[81,4],[77,4]],[[79,3],[82,3],[79,2],[76,2],[74,2],[72,4]],[[77,6],[null,6],[72,2],[74,2]]],
  init(){if(this.ev)return;this.ev=[];this.mel.forEach((bar,b)=>{let o=0;for(const [m,len] of bar){if(m!==null)this.ev[b*16+o]=[m,len];o+=len;}});},
  play(i,t,d){this.init();const li=i%256,loop=Math.floor(li/128),l=li%128,bar=Math.floor(l/16),s=l%16,[r,c]=this.ch[bar];
   if(s===0||s===6||s===8||s===12)bubbleBass(r-12+(s===6||s===12?7:0),d*1.6,t);
   if(s%4===0)kick(t,0.35);if(s===4||s===12)snare(t,0.08);
   nz(0.04,s%2?0.02:0.035,'bandpass',7000,t,1);                                   // shaker
   if(s===3||s===7||s===11||s===15)conga(t,s%8===3);
   if(s===2||s===6||s===10||s===14)c.forEach((m,k)=>pluck(m+12,d*0.8,t+k*0.012,0.018,0.2,4000)); // ukulele strum
   const e=this.ev[l];if(e){steelPan(e[0]+(loop?12:0),d*e[1],t,loop?0.045:0.06);if(loop)steelPan(e[0],d*e[1],t+d*0.5,0.025);}
   if(bar===1&&s===12||bar===5&&s===12)bubble(t,350);
   if(bar===3&&s===15)squeak(t,1900);
   if(bar===7&&s===6){slideDown(t,d*2);}
   if(bar===7&&s===8)splash(t);                                                     // CANNONBALL!
   if(l===0)crash(t);
 }},
 // TECH ROOM: the silliest song possible — kazoo + robot beeps over a boingy circus bass, rubber-duck squeaks, clown horns,
 // a cuckoo clock, slide whistles, sad trombone, chipmunk-speed robot solo and the occasional burp
 silly:{name:"BEEP BOOP BANANA BOOGIE",bpm:150,spb:2,bar:8,bars:8,
  ch:[[48,[64,67,72]],[43,[65,71,74]],[48,[64,67,72]],[41,[65,69,72]],[48,[64,67,72]],[43,[65,71,74]],[48,[64,67,72]],[43,[65,71,74]]],
  mel:[67,68,69,_,72,_,67,_, 71,_,74,_,77,76,74,_, 72,_,76,_,79,_,84,_, 81,80,79,78,77,_,_,_,
       67,_,67,_,69,_,67,_, 74,73,74,_,79,_,71,_, 72,_,_,_,_,_,_,_, _,_,_,_,_,_,_,_],
  play(i,t,d){const li=i%64,loop=Math.floor(i/64),bar=Math.floor(li/8),b=li%8,[r,c]=this.ch[bar];
   if(bar===7){ // GAG BAR
     if(b===0)slideUp(t,d*1.8);if(b===2||b===3)clownHorn(t);if(b===4)squeak(t,1600);if(b===5)squeak(t,2100);
     if(b===6){if(loop%3===2)burp(t);else cuckoo(t);}if(b===7){bonk(t);tom(t+d/2,180);}return;}
   if(b===0||b===4)boingBass(r-12+(b?7:0),d*1.5,t);
   if(b===2||b===6){c.forEach(m=>pluck(m,d*0.5,t,0.022,0.1,3500));snare(t,0.15);}
   if(b===0||b===4)kick(t,0.4);hat(t,false,0.03);
   if(bar===1&&b===7&&loop%2)cowbell(t);
   if(bar===2&&b===7)squeak(t,2400);
   if(bar===3&&b===5)trombone(55,49,d*3,t,0.07); // wah-waaah under the chromatic slide
   if(li===0)crash(t);
   const n=this.mel[li];if(n===null)return;let k=1;while(k<4&&this.mel[(li+k)%64]===null)k++;
   if(loop%3===0)kazoo(mtof(n),d*k*0.9,t,0.11);
   else if(loop%3===1)robotBeep(n+12,d*k*0.7,t);                     // chipmunk robot solo
   else{kazoo(mtof(n),d*k*0.9,t,0.09);robotBeep(n+7,d*k*0.6,t,0.025);} // kazoo + robot "harmony" (a fifth up, sort of)
   if(bar===6&&b===0)slideDown(t+d*2,d*4);
 }},
 // MUSIC ROOM: a kid practicing piano: scales with mistakes, Mozart's Rondo alla Turca (with a fumble), Chopin's Nocturne
 // Op. 9 No. 1, then Mountain King (speeding up), jazz licks, Bach's C-major Prelude, Chopsticks and Ode to Joy, with page-turn pauses.
 practice:(()=>{
  const ev=[],sp=[];let pos=0;
  const N=(st,m,du,v)=>{(ev[pos+st]=ev[pos+st]||[]).push([m,du,v]);};
  const seq=(list,v=0.1,legato=1.15,off=0)=>{let st=off;for(const [n,du] of list){if(n!==null&&n!==undefined)N(st,n,du*legato,v);st+=du;}return st;};
  const piece=(len,speed,fn)=>{fn();for(let k=0;k<len;k++)sp[pos+k]=typeof speed==='function'?speed(k/len):speed;pos+=len;};
  const rest=n=>piece(n,1.3,()=>{});
  const each=(arr,du)=>arr.map(n=>[n,du]);
  // 1. C-major scale with a metronome: wrong note, grumpy cluster, restart properly
  piece(70,1,()=>{let st=seq(each([60,62,64,65,66],2));N(st,[47,48,49,50],4,0.06);st+=10;
    const D=[60,62,64,65,67,69,71,72,74,76,77,79,81,83,84];const ud=[...D,...D.slice(0,-1).reverse()];
    st=seq(each(ud,1),0.09,1.3,st);N(st,[48,60,64,67],8,0.1);for(let k=0;k<st;k+=4)N(k,'tick',1,0);});
  rest(8);
  // 2. Mozart: Rondo alla Turca (Piano Sonata K. 331, A minor): starts it, fumbles a note and stops, then plays the
  //    opening properly with a bouncy oom-pah left hand
  {const M=[[71,1],[69,1],[68,1],[69,1],[72,2],[null,2],[74,1],[72,1],[71,1],[72,1],[76,2],[null,2],[77,1],[76,1],[75,1],[76,1],
     [83,1],[81,1],[80,1],[81,1],[83,1],[81,1],[80,1],[81,1],[84,4],[81,2],[84,2],[83,2],[81,2],[80,2],[81,2],[76,2],[77,2],[74,2],[72,2],[71,4],[69,4]];
   const len=M.reduce((x,y)=>x+y[1],0);
   piece(10+12+len+8,0.85,()=>{let st=seq([[71,1],[69,1],[68,1],[69,1],[72,2],[null,2],[74,1],[72,1]],0.1,1.1);
     N(st,74,1,0.09);N(st+1,[73,75],4,0.06);st+=12;                                          // oops: wrong note, stop
     const st0=st;st=seq(M,0.1,1.05,st);
     for(let k=0;k<len;k+=2){const bar=Math.floor((k)/16),E=(bar===2&&k%16>=8)||(bar===3&&k%16<8)||k>=len-8&&k<len-4;
       N(st0+k,(k/2)%2?(E?[56,62,64]:[60,64]):(E?40:45),2,(k/2)%2?0.035:0.06);}
     N(st,[45,57,60,64,69],8,0.09);});}
  rest(10);
  // 3. Chopin: Nocturne in B-flat minor, Op. 9 No. 1, dreamy and slow: wide left-hand arpeggios, a singing melody and
  //    a sparkling little run (fioritura) before it settles
  {const AR=[[46,53,58,61,65,61,58,53],[42,49,54,58,61,58,54,49],[41,48,51,57,60,57,51,48],[46,53,58,61,65,61,58,53]];
   piece(64+12,1.4,()=>{AR.forEach((a,b)=>a.forEach((m,k)=>N(b*16+k*2,m,3,0.05)));
     let st=seq([[73,6],[72,2],[70,4],[72,2],[73,2],[77,8],[75,2],[73,2],[72,4],[70,4]],0.1,1.1);
     [77,78,77,76,77,80,79,78,77,75,73].forEach((m,k)=>N(st+k,m,1.4,0.07));st+=12;
     N(st,[69],4,0.09);N(st+4,[70],12,0.1);N(64,[34,46,53,58,61],12,0.06);});}
  rest(10);
  // 4. In the Hall of the Mountain King (Halloween!) — speeds up like crazy
  {const ph=[[59,2],[61,2],[62,2],[64,2],[66,2],[62,2],[66,4],[65,2],[61,2],[65,4],[64,2],[60,2],[64,4],[59,2],[61,2],[62,2],[64,2],[66,2],[62,2],[66,2],[71,2],[69,2],[66,2],[62,2],[66,2],[69,8]];
   const L=ph.reduce((a,b)=>a+b[1],0);
   piece(L*3+12,f=>1.35-0.8*f,()=>{let st=0;for(let r=0;r<3;r++){for(const [m,du] of ph){N(st,[m,m-12],du*0.6,0.09);st+=du;}}N(st,[35,47,59,71],12,0.14);});}
  rest(10);
  // 5. Jazz: swung ii-V-I licks, then "shave and a haircut, two bits"
  piece(80,1,()=>{const sw=[3,1,3,1,3,1,3,1];
    let st=0;[[62,65,69,72,71,67,65,62],[71,74,77,81,79,77,74,71]].forEach((run,b)=>{N(st,b?[43,53,55,59]:[50,53,57,60],12,0.06);run.forEach((m,k)=>{N(st,m,sw[k]*1.4,0.09);st+=sw[k];});});
    N(st,[48,52,55,59],16,0.06);[64,67,71,76].forEach((m,k)=>N(st+k,m,14,0.08));st+=16;
    st=seq([[72,4],[67,2],[67,2],[69,4],[67,4],[null,4],[71,4],[72,4]],0.11,1,st);N(st-4,[48,55,64],6,0.08);});
  rest(8);
  // 6. Bach — Prelude in C major (WTC I), first four bars
  piece(64,1.05,()=>{[[60,64,67,72,76],[60,62,69,74,77],[59,62,67,74,77],[60,64,67,72,76]].forEach((c,b)=>{for(let h=0;h<2;h++){const o=b*16+h*8;
    N(o,c[0],16,0.07);N(o+1,c[1],15,0.06);[c[2],c[3],c[4],c[2],c[3],c[4]].forEach((m,k)=>N(o+2+k,m,2,0.07));}});});
  rest(8);
  // 7. Chopsticks
  piece(48,0.9,()=>{seq([...each(Array(6).fill([65,67]),2),...each(Array(6).fill([64,67]),2),...each(Array(6).fill([62,71]),2),...each(Array(4).fill([60,72]),2),[[48,60,64,67,72],4]],0.08,0.7);});
  rest(8);
  // 8. Ode to Joy (Beethoven)
  piece(64,1,()=>{seq([[64,4],[64,4],[65,4],[67,4],[67,4],[65,4],[64,4],[62,4],[60,4],[60,4],[62,4],[64,4],[64,6],[62,2],[62,8]],0.1);
    [48,48,43,43,48,48,43,43].forEach((r,k)=>N(k*8,[r,r+7],8,0.05));});
  rest(16);
  while(pos%16)rest(1);
  return {name:"PIANO PRACTICE (MOM IS LISTENING)",bpm:100,spb:4,bar:16,bars:pos/16,
   rub(i){return sp[i%pos]||1;},
   play(i,t,d){const e=ev[i%pos];if(!e)return;for(const [m,du,v] of e){
     if(m==='tick'){tone(2100,0.025,'square',0.025,null,t,musicGain);continue;}
     (Array.isArray(m)?m:[m]).forEach(x=>piano(x,du*d,t,v,0.3));}}};
 })(),
 // OFFICE: deliberately BAD elevator muzak — stiff bossa drum machine, wobbly tape pan flute, sour wrong notes, cheesy vibes, elevator ding
 muzak:{name:"MUZAK FOR MEETINGS (VOL. 3)",bpm:104,spb:2,bar:8,bars:8,
  ch:[[41,[57,60,64]],[38,[57,60,65]],[43,[58,62,65]],[36,[58,64,67]],[41,[57,60,64]],[38,[57,60,65]],[43,[58,62,65]],[36,[58,64,67]]],
  mel:[72,_,_,69,_,_,72,_, 74,_,72,_,69,_,_,_, 70,_,_,74,_,_,77,_, 76,_,_,_,72,_,_,_,
       69,_,72,_,76,_,77,_, 76,_,74,_,72,_,_,_, 70,_,72,_,74,_,70,_, 72,_,_,_,_,_,_,_],
  play(i,t,d){const li=i%64,loop=Math.floor(i/64),bar=Math.floor(li/8),b=li%8,c=this.ch[bar];
   if(li===0)elevatorDing(t);
   const sloppy=t+(Math.sin(i*1.7)*0.02); // the drum machine can't keep time
   if(b===0||b===4)kick(t,0.18);
   if([0,3,6].includes(li%16)||[10,12].includes(li%16))rimshot(sloppy);
   shaker(t);
   {const bn=[c[0],_,_,c[0]+7,c[0]+7,_,_,c[0]][b];if(bn!==null)walkBass(bn,d*1.5,t,0.2);}
   if(b===0||b===3)c[1].forEach(m=>epiano(m,d*1.4,t,0.022));
   const n=this.mel[li];
   if(n!==null){let k=1;while(k<6&&this.mel[(li+k)%64]===null)k++;
     const sour=((li*13+loop*5)%17===0)?1:((li*7+loop)%23===0?-1:0); // oops, wrong note
     if(loop%2===0)panFlute(n+sour,d*k*0.95,t);
     else vibes(n+sour-12*(bar%2),d*k,t+d*0.18);} // vibes come in late
 }},
 // BATHROOM: Italian crooner waltz — a dreamy singer, mandolin tremolo, accordion oom-pah-pah, lush strings, brushes
 crooner:{name:"BATHROOM AMORE",bpm:228,spb:2,bar:6,bars:16, // cheesy, bouncy Italian crooner waltz with a corny key change
  ch:[[36,[60,64,67]],[36,[60,64,67]],[43,[59,62,65]],[43,[59,62,65]],[43,[59,62,65]],[43,[59,62,65]],[36,[60,64,67]],[36,[60,64,67]],
      [36,[58,64,67]],[41,[60,65,69]],[41,[60,65,69]],[36,[60,64,67]],[38,[57,60,66]],[43,[59,62,65]],[36,[60,64,67]],[36,[60,64,67]]],
  mel:[67,_,_,_,72,_, 76,_,_,_,74,72, 74,_,_,_,_,_, 71,_,72,_,74,_, 77,_,_,_,76,74, 72,_,_,_,71,_, 72,_,_,_,_,_, _,_,64,_,67,_,
       70,_,_,_,72,_, 77,_,_,_,_,76, 74,_,72,_,69,_, 76,_,_,_,72,_, 74,_,_,_,72,_, 71,_,74,_,77,_, 76,_,_,_,74,_, 72,_,_,_,_,_],
  play(i,t,d){const li=i%96,loop=Math.floor(i/96),bar=Math.floor(li/6),b=li%6,c=this.ch[bar],tr=(loop%4>=2)?1:0; // every other repeat goes up a half step. so cheesy.
   if(b===0){walkBass(c[0]+tr+(bar%2?7:0),d*1.6,t,0.32);strings(c[1].map(m=>m+tr),d*6,t,0.014);kick(t,0.3);}
   if(b===2||b===4){c[1].forEach(m=>accordion(m+tr,d*0.8,t,0.016));nz(0.06,0.05,'bandpass',7000,t,1.5);}  // oom-PAH-PAH + tambourine
   if(b===1||b===3||b===5)nz(0.03,0.025,'bandpass',8000,t,1.5);
   if(b===3&&bar%2)nz(0.05,0.06,'bandpass',2500,t,6); // castanet click
   const n=this.mel[li];
   if(n!==null){let k=1;while(k<12&&this.mel[(li+k)%96]===null)k++;const m=n+tr;
     croonVoice(m,d*k*0.97,t,loop%2?0.06:0.075);
     mandolin(m-(m>70?5:4),d*k*0.9,t,loop%2?0.024:0.012);}
   if(bar===7&&b===2)[60,62,64,65,67].forEach((m,k)=>accordion(m+tr+12,d*0.5,t+k*d*0.5,0.022)); // cheesy accordion run
   if(bar===15&&b===2){crash(t);tone(1568+tr*90,0.5,'sine',0.06,null,t,musicGain);} // ba-da-BING!
   if(li===90)mandolin(84+tr,d*5,t,0.025);
 }},
 // LAUNDRY ROOM: silly German oom-pah polka — tuba OOM, accordion PAH, trumpets on the tune, comedy trombone slides
 polka:{name:"OOMPAH UNDIES POLKA",bpm:132,spb:2,bar:4,bars:16,
  ch:[[41,[57,60,65]],[41,[57,60,65]],[36,[55,58,64]],[36,[55,58,64]],[36,[55,58,64]],[36,[55,58,64]],[41,[57,60,65]],[41,[57,60,65]],
      [41,[57,60,65]],[41,[57,60,65]],[46,[58,62,65]],[46,[58,62,65]],[36,[55,58,64]],[36,[55,58,64]],[41,[57,60,65]],[41,[57,60,65]]],
  mel:[72,_,69,72, 77,_,72,_, 76,74,72,70, 67,_,_,_, 70,72,74,76, 77,76,74,72, 77,_,69,_, 65,_,_,_,
       69,_,72,_, 77,_,_,76, 74,_,77,_, 82,_,_,_, 79,_,76,_, 72,_,74,76, 77,_,72,_, 77,_,_,_],
  third(m){const sc=[0,2,4,5,7,9,10];let k=m-1;while(!sc.includes(((k-65)%12+12)%12))k--;k--;while(!sc.includes(((k-65)%12+12)%12))k--;return k;},
  play(i,t,d){const li=i%64,loop=Math.floor(i/64),bar=Math.floor(li/4),b=li%4,c=this.ch[bar];
   // OOM (tuba + kick) on the beat, PAH (accordion chord + snare) off the beat
   if(b===0){tuba(c[0]-12,d*0.8,t);kick(t,0.45);}
   if(b===2){tuba(c[0]-5,d*0.8,t);kick(t,0.35);}
   if(b%2===1){c[1].forEach(m=>accordion(m,d*0.6,t,0.022));nz(0.05,0.07,'highpass',3000,t);}
   if(li===0||li===32)crash(t);
   const n=this.mel[li];
   if(n!==null){let k=1;while(k<4&&this.mel[(li+k)%64]===null)k++;
     if(loop%2===0){trumpet(n,d*k*0.9,t);trumpet(this.third(n),d*k*0.9,t,0.035);}       // two trumpets in thirds
     else{accordion(n+12,d*k*0.9,t,0.035);if(b===0)trumpet(n,d*0.6,t,0.03);}           // accordion solo, trumpet stabs
   }
   if(li===28)trombone(58,46,d*4,t);                     // waaah-waaah
   if(li===60){trombone(53,41,d*2,t);trombone(46,58,d*2,t+d*2);}
   if(li===63&&loop%2)tone(500,d*1.5,'sine',0.08,1500,t,musicGain); // slide whistle
 }},
 // BASEMENT: romantic piano nocturne — rolling left-hand arpeggios, singing melody, rubato, lots of pedal
 romantic:{name:"NOCTURNE IN THE BASEMENT",bpm:66,spb:4,bar:16,bars:32, // romantic film-score piano (classic Italian movie-theme feel):
  // a simple, singing melody with long notes and expressive leaps over gently flowing 8th-note arpeggios in F major, warm string pads,
  // and on the repeat the strings take the melody while the piano floats an octave above
  ch:[[[41,48,53,57,60]],[[40,47,52,57,60]],[[38,45,50,53,57]],[[34,41,46,50,53]],[[43,50,53,55,58]],[[36,43,48,53,55],[36,43,46,52,55]],[[45,48,53,57,60]],[[34,41,46,50,53]],
      [[38,45,50,53,57]],[[34,41,45,50,53]],[[36,41,45,48,53]],[[43,50,53,55,58],[36,43,46,52,55]],[[41,48,53,57,60]],[[38,45,48,53,57]],[[43,50,53,55,58],[36,43,46,52,55]],[[41,48,53,57,60]]],
  rh:[[[72,4],[77,8],[76,2],[74,2]],[[76,12],[72,4]],[[74,4],[81,8],[79,2],[77,2]],[[77,12],[74,4]],
      [[70,4],[74,4],[77,4],[79,4]],[[79,6],[77,2],[76,8]],[[77,4],[81,4],[84,8]],[[82,6],[81,2],[79,8]],
      [[81,8],[77,4],[74,4]],[[81,6],[79,2],[77,8]],[[76,4],[77,4],[79,4],[81,4]],[[82,8],[79,4],[76,4]],
      [[77,12],[72,4]],[[74,4],[77,4],[81,8]],[[79,8],[76,4],[74,2],[76,2]],[[77,16]]],
  pat:[0,1,2,3,4,3,2,1],
  init(){if(this.ev)return;this.ev=[];this.rh.forEach((bar,b)=>{let o=0;for(const [m,len] of bar){(this.ev[b*16+o]=this.ev[b*16+o]||[]).push([m,len]);o+=len;}});},
  rub(i){const k=i%512,s=i%16;return 1+0.05*Math.sin(s/16*Math.PI*2)+((k%256)>=240?0.45*((k%256)-240)/16:0);},
  play(i,t,d){this.init();const li=i%512,loop=Math.floor(li/256),l=li%256,bar=Math.floor(l/16),s=l%16,chs=this.ch[bar],c=chs[s>=8&&chs[1]?1:0];
   if(s%2===0){if(bar===15&&s>=8){if(s===8)c.forEach((m,k)=>piano(m+(k?0:-12),d*10,t+k*0.05,0.045,0.6));}
     else piano(c[this.pat[s/2]],d*4,t,s===0?0.07:0.04,0.5);}
   if(s===0||(s===8&&chs[1]))strings(c.slice(2).map(m=>m+12),d*(chs[1]?8:16),t,loop?0.013:0.008);
   const e=this.ev[l];if(e)for(const [m,len] of e){
     if(loop===0)piano(m,d*len,t,0.12,0.55);
     else{strings([m],d*len,t,0.02);strings([m-12],d*len,t,0.012);piano(m+12,d*len,t,0.06,0.65);}}
 }},
 // ATTIC: baroque pipe organ — Bach-style 16th-note figuration over a pedal bass, in D minor
 // ATTIC: a four-voice organ fugue in D minor (soprano, alto, tenor, bass). Exposition: alto subject, soprano answer +
 // countersubject, tenor subject, bass answer; episode; soprano middle entry; episode; low bass entry; episode;
 // dominant-pedal cadence with a trill, ending on a D-major (Picardy) chord. Voice-led to avoid parallel fifths/octaves.
 baroque:(()=>{const F=[[0,62,2,0.027],[2,69,2,0.027],[4,65,1,0.027],[5,64,1,0.027],[6,62,1,0.027],[7,61,1,0.027],[8,62,1,0.027],[9,64,1,0.027],[10,65,1,0.027],[11,67,1,0.027],[12,69,1,0.027],[13,67,1,0.027],[14,65,1,0.027],[15,64,1,0.027],[16,65,1,0.027],[16,69,2,0.03],[17,62,1,0.027],[18,65,1,0.027],[18,74,2,0.03],[19,67,1,0.027],[20,64,1,0.027],[20,72,1,0.03],[21,62,1,0.027],[21,71,1,0.03],[22,60,1,0.027],[22,69,1,0.03],[23,59,1,0.027],[23,68,1,0.03],[24,64,2,0.027],[24,69,1,0.03],[25,71,1,0.03],[26,69,1,0.027],[26,72,1,0.03],[27,65,1,0.027],[27,74,1,0.03],[28,67,1,0.027],[28,76,1,0.03],[29,65,1,0.027],[29,74,1,0.03],[30,64,1,0.027],[30,72,1,0.03],[31,62,1,0.027],[31,71,1,0.03],[32,50,2,0.027],[32,69,3,0.027],[32,77,2,0.03],[34,57,2,0.027],[34,76,1,0.03],[35,64,1,0.027],[35,73,1,0.03],[36,53,1,0.027],[36,69,1,0.027],[36,74,1,0.03],[37,52,1,0.027],[37,67,1,0.027],[37,73,1,0.03],[38,50,1,0.027],[38,65,1,0.027],[38,74,1,0.03],[39,49,1,0.027],[39,69,1,0.027],[39,76,1,0.03],[40,50,1,0.027],[40,69,1,0.027],[40,77,1,0.03],[41,52,1,0.027],[41,67,1,0.027],[41,76,1,0.03],[42,53,1,0.027],[42,69,1,0.027],[42,74,2,0.03],[43,55,1,0.027],[43,70,1,0.027],[44,57,1,0.027],[44,69,1,0.027],[44,73,2,0.03],[45,55,1,0.027],[45,64,1,0.027],[46,53,1,0.027],[46,69,1,0.027],[46,74,1,0.03],[47,52,1,0.027],[47,67,1,0.027],[47,73,1,0.03],[48,45,2,0.038],[48,52,2,0.027],[48,64,2,0.027],[48,72,2,0.03],[50,50,2,0.038],[50,53,2,0.027],[50,62,2,0.027],[50,74,2,0.03],[52,48,1,0.038],[52,52,4,0.027],[52,64,2,0.027],[52,69,1,0.03],[53,47,1,0.038],[53,68,1,0.03],[54,45,1,0.038],[54,60,1,0.027],[54,69,1,0.03],[55,44,1,0.038],[55,59,1,0.027],[55,71,1,0.03],[56,45,1,0.038],[56,52,3,0.027],[56,60,1,0.027],[56,69,1,0.03],[57,47,1,0.038],[57,59,1,0.027],[57,68,1,0.03],[58,48,1,0.038],[58,57,2,0.027],[58,69,2,0.03],[59,50,1,0.038],[59,53,1,0.027],[60,52,1,0.038],[60,59,2,0.027],[60,64,4,0.027],[60,68,2,0.03],[61,50,1,0.038],[62,48,1,0.038],[62,60,1,0.027],[62,69,1,0.03],[63,47,1,0.038],[63,56,1,0.027],[63,71,1,0.03],[64,50,2,0.038],[64,57,2,0.027],[64,62,1,0.027],[64.0,77,0.5,0.03],[64.5,74,0.5,0.03],[65,65,1,0.027],[65.0,69,0.5,0.03],[65.5,74,0.5,0.03],[66,43,2,0.038],[66,58,2,0.027],[66,62,1,0.027],[66.0,79,0.5,0.03],[66.5,74,0.5,0.03],[67,67,1,0.027],[67.0,70,0.5,0.03],[67.5,74,0.5,0.03],[68,48,2,0.038],[68,60,1,0.027],[68,64,1,0.027],[68.0,76,0.5,0.03],[68.5,72,0.5,0.03],[69,52,1,0.027],[69,60,2,0.027],[69.0,67,0.5,0.03],[69.5,72,0.5,0.03],[70,41,2,0.038],[70,57,2,0.027],[70.0,77,0.5,0.03],[70.5,72,0.5,0.03],[71,65,1,0.027],[71.0,69,0.5,0.03],[71.5,72,0.5,0.03],[72,46,2,0.038],[72,58,1,0.027],[72,62,1,0.027],[72.0,74,0.5,0.03],[72.5,70,0.5,0.03],[73,62,1,0.027],[73.0,65,0.5,0.03],[73,65,1,0.027],[73.5,70,0.5,0.03],[74,40,2,0.038],[74,56,1,0.027],[74,62,1,0.027],[74.0,76,0.5,0.03],[74.5,71,0.5,0.03],[75,59,1,0.027],[75,64,1,0.027],[75.0,68,0.5,0.03],[75.5,71,0.5,0.03],[76,45,4,0.038],[76,57,1,0.027],[76,61,1,0.027],[76.0,73,0.5,0.03],[76.5,69,0.5,0.03],[77,61,1,0.027],[77.0,64,0.5,0.03],[77,64,1,0.027],[77.5,69,0.5,0.03],[78,57,2,0.027],[78,61,1,0.027],[78.0,79,0.5,0.03],[78.5,76,0.5,0.03],[79,64,1,0.027],[79.0,73,0.5,0.03],[79.5,69,0.5,0.03],[80,50,1,0.038],[80,57,2,0.027],[80,65,2,0.027],[80,74,2,0.03],[81,53,1,0.038],[82,45,1,0.038],[82,61,1,0.027],[82,64,2,0.027],[82,81,2,0.03],[83,49,1,0.038],[83,57,5,0.027],[84,50,1,0.038],[84,69,1,0.027],[84,77,1,0.03],[85,49,1,0.038],[85,67,1,0.027],[85,76,1,0.03],[86,50,1,0.038],[86,65,1,0.027],[86,74,1,0.03],[87,45,1,0.038],[87,64,1,0.027],[87,73,1,0.03],[88,43,2,0.038],[88,58,1,0.027],[88,67,2,0.027],[88,74,1,0.03],[89,60,1,0.027],[89,76,1,0.03],[90,41,1,0.038],[90,57,1,0.027],[90,69,1,0.027],[90,77,1,0.03],[91,46,1,0.038],[91,62,1,0.027],[91,70,1,0.027],[91,79,1,0.03],[92,45,2,0.038],[92,64,2,0.027],[92,73,2,0.027],[92,81,1,0.03],[93,79,1,0.03],[94,50,1,0.038],[94,65,1,0.027],[94,69,2,0.027],[94,77,1,0.03],[95,49,1,0.038],[95,57,1,0.027],[95,76,1,0.03],[96,43,2,0.038],[96,58,2,0.027],[96,67,4,0.027],[96,79,0.5,0.03],[96.5,74,0.5,0.028],[97,79,0.5,0.03],[97.5,74,0.5,0.028],[98,48,2,0.038],[98,60,4,0.027],[98,76,0.5,0.03],[98.5,72,0.5,0.028],[99,76,0.5,0.03],[99.5,72,0.5,0.028],[100,53,2,0.038],[100,69,2,0.027],[100,77,0.5,0.03],[100.5,72,0.5,0.028],[101,77,0.5,0.03],[101.5,72,0.5,0.028],[102,46,2,0.038],[102,62,2,0.027],[102,70,2,0.027],[102,77,0.5,0.03],[102.5,74,0.5,0.028],[103,77,0.5,0.03],[103.5,74,0.5,0.028],[104,43,2,0.038],[104,62,2,0.027],[104,70,2,0.027],[104,79,0.5,0.03],[104.5,74,0.5,0.028],[105,79,0.5,0.03],[105.5,74,0.5,0.028],[106,45,2,0.038],[106,61,2,0.027],[106,69,4,0.027],[106,76,0.5,0.03],[106.5,73,0.5,0.028],[107,76,0.5,0.03],[107.5,73,0.5,0.028],[108,50,2,0.038],[108,62,2,0.027],[108,77,0.5,0.03],[108.5,74,0.5,0.028],[109,77,0.5,0.03],[109.5,74,0.5,0.028],[110,45,2,0.038],[110,61,2,0.027],[110,67,2,0.027],[110,76,0.5,0.03],[110.5,73,0.5,0.028],[111,76,0.5,0.03],[111.5,73,0.5,0.028],[112,38,2,0.038],[112,62,2,0.027],[112,65,2,0.027],[112,77,2,0.03],[114,45,2,0.038],[114,61,2,0.027],[114,69,6,0.027],[114,76,2,0.03],[116,41,1,0.038],[116,62,1,0.027],[116,77,1,0.03],[117,40,1,0.038],[117,61,1,0.027],[117,79,1,0.03],[118,38,1,0.038],[118,62,1,0.027],[118,77,1,0.03],[119,37,1,0.038],[119,64,1,0.027],[119,76,1,0.03],[120,38,1,0.038],[120,65,1,0.027],[120,69,3,0.027],[120,74,1,0.03],[121,40,1,0.038],[121,64,1,0.027],[121,73,1,0.03],[122,41,1,0.038],[122,62,2,0.027],[122,74,2,0.03],[123,43,1,0.038],[123,70,1,0.027],[124,45,1,0.038],[124,57,4,0.027],[124,69,4,0.027],[124,73,2,0.03],[125,43,1,0.038],[126,41,1,0.038],[126,74,1,0.03],[127,40,1,0.038],[127,73,1,0.03],[128,38,2,0.038],[128,57,2,0.027],[128,66,2,0.027],[128,72,0.5,0.03],[128.5,69,0.5,0.028],[129,72,0.5,0.03],[129.5,69,0.5,0.028],[130,43,2,0.038],[130,58,4,0.027],[130,67,2,0.027],[130,70,0.5,0.03],[130.5,67,0.5,0.028],[131,70,0.5,0.03],[131.5,67,0.5,0.028],[132,48,2,0.038],[132,64,2,0.027],[132,70,0.5,0.03],[132.5,67,0.5,0.028],[133,70,0.5,0.03],[133.5,67,0.5,0.028],[134,53,2,0.038],[134,60,2,0.027],[134,65,2,0.027],[134,69,0.5,0.03],[134.5,65,0.5,0.028],[135,69,0.5,0.03],[135.5,65,0.5,0.028],[136,46,2,0.038],[136,62,6,0.027],[136,65,2,0.027],[136,70,0.5,0.03],[136.5,65,0.5,0.028],[137,70,0.5,0.03],[137.5,65,0.5,0.028],[138,43,2,0.038],[138,67,2,0.027],[138,70,0.5,0.03],[138.5,67,0.5,0.028],[139,70,0.5,0.03],[139.5,67,0.5,0.028],[140,40,2,0.038],[140,68,2,0.027],[140,71,0.5,0.03],[140.5,68,0.5,0.028],[141,71,0.5,0.03],[141.5,68,0.5,0.028],[142,45,2,0.038],[142,64,2,0.027],[142,69,2,0.027],[142,73,0.5,0.03],[142.5,69,0.5,0.028],[143,73,0.5,0.03],[143.5,69,0.5,0.028],[144,45,8,0.038],[144,62,2,0.027],[144,69,2,0.027],[144,77,2,0.03],[146,61,6,0.027],[146,67,6,0.027],[146,76,6,0.03],[148.0,76,0.5,0.03],[148.5,77,0.5,0.03],[149.0,76,0.5,0.03],[149.5,77,0.5,0.03],[150.0,76,0.5,0.03],[150.5,77,0.5,0.03],[151.0,76,0.5,0.03],[151.5,73,0.5,0.03],[152,38,8,0.05],[152,50,8,0.038],[152,66,8,0.027],[152,69,8,0.027],[152,74,8,0.03]],ev=[];
  for(const [e,m,len,v] of F)(ev[Math.round(e*2)]=ev[Math.round(e*2)]||[]).push([m,len*2,v]);
  return {name:"LITTLE FUGUE IN THE ATTIC",bpm:84,spb:4,bar:16,bars:20,
   rub(i){const k=i%320;return k>=288?1+(k-288)/32*0.7:1;},
   play(i,t,d){const e=ev[i%320];if(e)for(const [m,len,v] of e)organ(m,len*d*1.03,t,v,0.6);}};
 })(),
 // TITLE SCREEN: peaceful French impressionist piano (Satie/Debussy flavour) — slow 3/4, drifting maj7 chords, a flute takes the melody on the repeat
 french:{name:"PETITE VALSE DU MATIN",bpm:66,spb:1,bar:3,bars:16,
  ch:[[43,[59,62,66]],[38,[54,57,61]],[43,[59,62,66]],[38,[54,57,61]],[40,[59,62,66]],[35,[57,62,66]],[36,[59,64,67]],[33,[55,62,64]],
      [43,[59,62,66]],[42,[57,61,64]],[40,[55,59,62]],[38,[54,57,61]],[36,[59,64,67]],[35,[57,62,66]],[40,[59,62,66]],[38,[54,57,61]]],
  mel:[_,78,81, 79,_,_, _,78,76, 73,_,_, _,74,76, 78,_,74, 76,_,_, 74,_,_,
       _,83,81, 81,_,_, _,79,78, 76,_,78, 79,_,76, 74,_,_, _,71,73, 74,_,_],
  rub(i){return 1+0.08*Math.sin((i%3)/3*Math.PI*2)+((i%48)===47?0.6:0);},
  play(i,t,d){const li=i%48,loop=Math.floor(i/48),bar=Math.floor(li/3),b=li%3,c=this.ch[bar];
   if(b===0)piano(c[0],d*3,t,0.075,0.55);
   if(b===1)c[1].forEach((m,k)=>piano(m,d*2,t+k*0.012,0.032,0.55));
   const n=this.mel[li];
   if(n!==null){let k=1;while(k<3&&this.mel[(li+k)%48]===null)k++;
     if(loop%2===0)piano(n,d*k,t,0.085,0.6);else{flute(n,d*k*0.98,t);piano(n+12,d,t,0.02,0.7);}}
   if(bar===15&&b===2)[62,66,69,73,78,81].forEach((m,k)=>piano(m+12,d*2,t+k*0.07,0.025,0.8)); // little harp-like ripple
 }},
};

// ---- New songs: Library (Janacek-style string quartet), Science Lab (90s science-show funk), Garden (Beatles-style sing-along) ----
// LIBRARY: hushed Moravian-style string quartet daydream (original material).
function lib_bow(m,dur,t,vol,o){o=o||{};const f=mtof(m),ga=out(1,o.wet==null?0.55:o.wet),end=t+dur+0.1;
 holdEnv(ga,t,vol*2,dur,o.a||Math.min(0.5,dur*0.4),Math.min(0.4,dur*0.35));
 const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.value=o.pont?5200:Math.min(2400,f*5);lp.Q.value=0.7;
 let dst=lp;if(o.pont){const hp=AC.createBiquadFilter();hp.type='highpass';hp.frequency.value=f*2.2;lp.connect(hp);dst=hp;}
 let node=ga;if(o.trem){const tg=AC.createGain();tg.gain.value=0.55;const lf=O('square',o.trem,t,end,tg.gain,0.45);tg.connect(ga);node=tg;}
 dst.connect(node);
 const a=O('sawtooth',f,t,end,lp),b=O(o.pont?'sawtooth':'triangle',f,t,end,lp,0.6);b.detune.value=6;
 const vib=O('sine',o.vib||5.2,t,end,a.detune,o.pont?3:12);vib.connect(b.detune);}
function lib_pizz(m,t,vol){const f=mtof(m),ga=out(1,0.6);decayEnv(ga,t,vol*2,0.45,0.003);
 const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.setValueAtTime(f*6,t);lp.frequency.exponentialRampToValueAtTime(f*1.2,t+0.3);lp.connect(ga);
 O('triangle',f,t,t+0.5,lp);O('sawtooth',f,t,t+0.5,lp,0.3);}
function lib_harm(m,dur,t,vol){const ga=out(1,0.8),end=t+dur+0.1;holdEnv(ga,t,vol*2,dur,Math.min(0.6,dur*0.4),Math.min(0.5,dur*0.4));
 const o=O('sine',mtof(m),t,end,ga);O('sine',4.4,t,end,o.detune,6);}
// Warm, singing bowed string (softer than lib_bow): triangle body, a little saw for bite, gentle delayed vibrato.
function lib_warm(m,dur,t,vol,wet=0.55){const f=mtof(m),ga=out(1,wet),end=t+dur+0.15;holdEnv(ga,t,vol,dur,Math.min(0.3,dur*0.35),Math.min(0.35,dur*0.3));
  const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.value=Math.min(2200,f*3);lp.Q.value=0.5;lp.connect(ga);
  const a=O('triangle',f,t,end,lp),b=O('sawtooth',f,t,end,lp,0.22);b.detune.value=4;
  const vg=AC.createGain();vg.gain.setValueAtTime(0,t);vg.gain.linearRampToValueAtTime(9,t+Math.min(0.5,dur*0.6));const v=O('sine',5,t,end,vg);vg.connect(a.detune);vg.connect(b.detune);}
// LIBRARY: inspirational "discovering a new world" theme: running harp arpeggios (you're running between the shelves),
// a soaring violin melody, warm cello and viola pads, celesta sparkles, and a soft heartbeat drum that lifts the second half.
STYLES.library={name:"WHERE THE BOOKS OPEN UP",bpm:108,spb:2,bar:8,bars:16,
  ch:[[38,[62,66,69]],[37,[61,64,69]],[35,[62,66,71]],[31,[62,67,71]],[42,[62,66,69]],[31,[62,67,71]],[40,[62,67,71]],[33,[61,64,69]],
      [31,[62,67,71]],[33,[61,64,69]],[35,[62,66,71]],[42,[61,66,69]],[31,[62,67,71]],[33,[61,64,69]],[33,[62,64,69]],[38,[62,66,69]]],
  mel:[[[74,4],[76,2],[78,2]],[[81,6],[78,2]],[[76,4],[74,2],[73,2]],[[74,8]],[[78,4],[81,2],[83,2]],[[86,6],[83,2]],[[81,4],[79,2],[78,2]],[[76,8]],
       [[79,4],[81,2],[83,2]],[[85,6],[83,2]],[[86,4],[85,2],[83,2]],[[81,8]],[[83,4],[86,2],[90,2]],[[88,6],[86,2]],[[85,4],[83,2],[85,2]],[[86,8]]],
  init(){if(this.ev)return;this.ev=[];this.mel.forEach((bar,k)=>{let o=0;for(const [m,len] of bar){this.ev[k*8+o]=[m,len];o+=len;}});},
  rub(i){const k=i%128;return k>=124?1+(k-123)*0.08:1;},
  play(i,t,d){this.init();const li=i%128,bar=Math.floor(li/8),b=li%8,[r,c]=this.ch[bar],lift=bar>=8;
    const arp=[c[0],c[1],c[2],c[0]+12,c[1]+12,c[2]+12,c[0]+24,c[2]+12];harp(arp[b],d*2.2,t,lift?0.03:0.026);       // running harp
    if(b===0){lib_warm(r,d*8,t,0.075,0.4);strings(c,d*8,t,lift?0.009:0.007);}                                         // cello + soft viola pad
    if(b===0||b===4)lib_pizz(r+12,t,0.03);
    if(lift&&(b===0||b===4))tone(82,0.5,'sine',b?0.12:0.18,50,t,musicGain);                                       // soft heartbeat drum
    if(b===0&&bar%2===1)celesta(c[2]+24,d*3,t,0.02);
    const e=this.ev[li];if(e){lib_warm(e[0],d*e[1]*0.98,t,lift?0.07:0.06,0.6);if(lift)lib_warm(e[0]-12,d*e[1]*0.98,t,0.035,0.6);} // soaring violin (+ second violin an octave below in the lift)
    if(li===120)[74,78,81,86,90,93].forEach((m,k)=>harp(m,0.5,t+k*0.05,0.025));                                      // sweep back to the start
  }};

// SCIENCE LAB: 90s kids'-science-show funk: drum machine backbeat, slap bass, synth-brass hits, HEY! shouts, lab SFX
function sci_brass(ms,dur,t,vol=0.03){const ga=out(1,0.3);holdEnv(ga,t,vol,dur,0.012,0.06);const lp=AC.createBiquadFilter();lp.type='lowpass';lp.Q.value=3;
 lp.frequency.setValueAtTime(500,t);lp.frequency.exponentialRampToValueAtTime(5000,t+0.04);lp.frequency.exponentialRampToValueAtTime(1500,t+dur+0.05);lp.connect(ga);
 ms.forEach(m=>{const f=mtof(m);[-9,9].forEach(c=>{const o=O('sawtooth',f*0.97,t,t+dur+0.06,lp);o.detune.value=c;o.frequency.exponentialRampToValueAtTime(f,t+0.035);});});}
function sci_slap(m,dur,t,vol=0.2,pop=false){const f=mtof(m),ga=out(1,0);holdEnv(ga,t,vol,dur,0.003,0.03);const lp=AC.createBiquadFilter();lp.type='lowpass';lp.Q.value=6;
 lp.frequency.setValueAtTime(pop?3500:2200,t);lp.frequency.exponentialRampToValueAtTime(260,t+0.12);lp.connect(ga);
 O('sawtooth',f,t,t+dur+0.05,lp);O('square',f*1.003,t,t+dur+0.05,lp,0.5);O('sine',f,t,t+dur+0.05,ga,0.6);
 if(pop)nz(0.02,vol*0.3,'bandpass',2500,t,2);}
function sci_hey(t,v=0.17,p=1){const ga=out(1,0.35);ga.gain.setValueAtTime(0,t);ga.gain.linearRampToValueAtTime(v,t+0.015);ga.gain.setValueAtTime(v,t+0.1);ga.gain.exponentialRampToValueAtTime(0.001,t+0.32);
 const f1=AC.createBiquadFilter();f1.type='bandpass';f1.Q.value=5;f1.frequency.setValueAtTime(550,t);f1.frequency.linearRampToValueAtTime(400,t+0.3);
 const f2=AC.createBiquadFilter();f2.type='bandpass';f2.Q.value=7;f2.frequency.setValueAtTime(1800,t);f2.frequency.linearRampToValueAtTime(2300,t+0.3);f1.connect(ga);f2.connect(ga);
 [1,1.012,0.5].forEach(k=>{const o=O('sawtooth',300*p*k,t,t+0.34,f1);o.connect(f2);o.frequency.setValueAtTime(300*p*k,t+0.05);o.frequency.exponentialRampToValueAtTime(240*p*k,t+0.3);});
 nz(0.06,0.12,'highpass',3000,t);}
function sci_zap(t,v=0.05){tone(2400,0.12,'sawtooth',v,120,t,musicGain);tone(3100,0.1,'square',v*0.5,200,t+0.01,musicGain);}
function sci_laser(t,dur,v=0.04){const ga=out(1,0.4);holdEnv(ga,t,v,dur,0.01,0.1);const o=O('square',200,t,t+dur+0.05,ga);o.frequency.exponentialRampToValueAtTime(3200,t+dur);
 const l=AC.createOscillator(),lg=AC.createGain();l.frequency.value=18;lg.gain.value=60;l.connect(lg);lg.connect(o.detune);l.start(t);l.stop(t+dur+0.05);}
function sci_boing(t,v=0.12){const ga=out(1,0.2);decayEnv(ga,t,v,0.4,0.003);const o=O('sine',150,t,t+0.45,ga);o.frequency.exponentialRampToValueAtTime(520,t+0.08);o.frequency.exponentialRampToValueAtTime(260,t+0.4);
 const l=AC.createOscillator(),lg=AC.createGain();l.frequency.value=22;lg.gain.value=40;l.connect(lg);lg.connect(o.frequency);l.start(t);l.stop(t+0.45);}
function sci_blip(m,t,v=0.03){tone(mtof(m),0.05,'square',v,null,t,musicGain);}
STYLES.science={name:"MAD SCIENCE SLAM",bpm:112,spb:4,bar:16,bars:16,
 // per bar root (E dorian funk with a lift to the bridge)
 roots:[40,40,43,45,40,40,48,50,45,45,47,47,40,40,43,47],
 // lead "call" line (step 0..15 within a bar), used on bars 4-7 and 12-15
 call:[[_,_,76,_,79,_,76,74,_,76,_,_,_,_,_,_],[_,_,76,_,79,_,81,79,_,76,_,_,_,_,_,_],[_,_,79,_,83,_,81,79,_,78,_,_,_,_,_,_],[_,_,81,_,79,_,76,_,74,_,76,_,_,_,_,_]],
 play(i,t,d){const li=i%(this.bar*this.bars),bar=Math.floor(li/16),b=li%16,root=this.roots[bar],sec=Math.floor(bar/4),last=bar===15,bridge=sec===2;
  // drums: big 90s drum machine
  if(!(last&&b>=12)){
   if(b===0||b===7||b===10||(b===14&&bar%2))kick(t,b===0?0.55:0.42);
   if(b===4||b===12){snare(t,0.2);clap(t,0.11);}
   if(b%2===0)hat(t,b===6||b===14,0.035);else hat(t,false,0.018);
   if(bridge&&b%4===2)cowbell(t);
  }else{rTom(t,[220,180,150,120][b-12]);if(b===15)snare(t,0.18);}
  if(li===0||(b===0&&bar%4===0))crash(t);
  // slap bass: octave-popping funk figure
  const bp=bridge?[0,_,12,_,_,0,_,10,0,_,12,_,7,_,10,12]:[0,_,_,12,_,0,7,_,0,12,_,0,_,10,12,_];
  const bn=bp[b];if(bn!==null&&!(last&&b>=12))sci_slap(root-12+bn,d*(bn>=10?0.6:0.9),t,0.17,bn>=10);
  // synth-brass stab hook (call) on bars 0-3/8-11, answered by computer bleeps
  const ch=[root+12,root+19,root+22,root+26];
  if(sec===0||sec===2){if(b===0)sci_brass(ch,d*1.6,t,0.028);if(b===3)sci_brass(ch,d*0.8,t,0.024);if(b===6)sci_brass(ch.map(x=>x+2),d*2.5,t,0.028);
   if(b>=10&&b<=13)sci_blip([88,91,93,95][b-10]-(bar%2?2:0),t,0.022);}
  // lead call on bars 4-7/12-15 with brass response stabs
  if(sec===1||sec===3){const n=this.call[bar%4][b];if(n!==null){const len=this.call[bar%4][(b+1)%16]===null?d*1.6:d*0.85;popLead(n,len,t,0.04,0.25);if(sec===3)trumpet(n-12,len,t,0.03);}
   if(b===12||b===14)sci_brass(ch.map(x=>x+(b===14?2:0)),d*0.9,t,0.026);}
  // HEY! shouts
  if((bar%4===3&&b===14)||(bar===0&&b===8&&li>0))sci_hey(t);
  if(bar===15&&b===8)sci_hey(t,0.17,1.12);
  // lab sound effects
  if(b===9&&bar%2===0)bubble(t,260+bar*30);if(b===11&&bar%2===0)bubble(t,420+bar*20);
  if(bar%4===1&&b===15)sci_zap(t);
  if(bar%4===2&&b===15)sci_boing(t);
  if(bar===7&&b===8)sci_laser(t,d*8,0.035);
  if(bar===11&&b===0)sci_laser(t,d*14,0.03);
  if(bridge&&b%2===1)robotBeep(root+36+[0,3,7,10,12,10,7,3][(b>>1)],d*0.6,t,0.014);
 }};

// GARDEN: "SEASHELL SUNDAY" - cheerful late-60s sing-along pop in D: jangly 12-string strums, walking melodic bass, honky-tonk piano, whistle lead, bubbles
function gdn_gtr(m,t,vol){const f=mtof(m),ga=out(1,0.25);decayEnv(ga,t,vol,0.45,0.002);
  const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.setValueAtTime(5200,t);lp.frequency.exponentialRampToValueAtTime(900,t+0.35);lp.connect(ga);
  O('sawtooth',f,t,t+0.5,lp,0.6);O('triangle',f*1.003,t,t+0.5,lp,0.6);O('triangle',f*2.006,t,t+0.4,lp,0.25);} // octave course = 12-string sparkle
function gdn_strum(ch,t,vol,up){const ns=up?ch.slice().reverse():ch;ns.forEach((m,k)=>gdn_gtr(m,t+k*0.012,vol*(up?0.7:1)));}
function gdn_honky(ch,t,vol){ch.forEach(m=>{piano(m,0.12,t,vol,0.15);piano(m+0.15,0.12,t+0.004,vol*0.6,0);});} // slightly out-of-tune upright
function gdn_lead(m,dur,t,vol=0.05){const f=mtof(m),ga=out(1,0.45);holdEnv(ga,t,vol,dur,0.03,0.08);
  const o=O('sine',f,t,t+dur+0.05,ga);O('triangle',f,t,t+dur+0.05,ga,0.35);O('sine',f*2,t,t+dur+0.05,ga,0.12);
  o.frequency.setValueAtTime(f*0.98,t);o.frequency.exponentialRampToValueAtTime(f,t+0.05);
  const l=AC.createOscillator(),lg=AC.createGain();l.frequency.value=5.5;lg.gain.setValueAtTime(0,t);lg.gain.linearRampToValueAtTime(f*0.008,t+Math.min(dur,0.4));l.connect(lg);lg.connect(o.frequency);l.start(t);l.stop(t+dur+0.05);}
function gdn_gurgle(t){for(let k=0;k<4;k++)bubble(t+k*0.07,220+Math.random()*380);}
const gdn_CH=[[50,57,62,66,69],[50,57,62,66,69],[47,54,59,62,66],[43,50,55,59,62],[50,57,62,66,69],[47,54,57,63,66],[52,59,64,67,71],[45,52,57,61,64],
  [43,50,55,59,62],[50,57,62,66,69],[48,55,60,64,67],[50,57,62,66,69],[43,50,55,59,62],[52,56,59,62,68],[45,52,57,61,64],[50,57,62,66,69]];
const gdn_ROOT=[38,38,35,43,38,35,40,33, 43,38,36,38,43,40,33,38],gdn_TH=[4,4,3,4,4,4,3,4, 4,4,4,4,4,4,4,4];
const gdn_n=null;
const gdn_MEL=[66,gdn_n,69,gdn_n,71,69,66,gdn_n, 64,66,69,gdn_n,74,gdn_n,gdn_n,gdn_n, 71,gdn_n,71,69,66,gdn_n,62,gdn_n, 67,gdn_n,66,64,62,gdn_n,gdn_n,gdn_n,
  66,gdn_n,69,gdn_n,74,gdn_n,73,74, 75,gdn_n,73,71,69,gdn_n,66,gdn_n, 67,gdn_n,71,gdn_n,76,gdn_n,74,71, 73,gdn_n,gdn_n,gdn_n,gdn_n,gdn_n,gdn_n,gdn_n,
  74,gdn_n,74,gdn_n,71,74,gdn_n,gdn_n, 78,gdn_n,76,74,gdn_n,gdn_n,69,gdn_n, 72,gdn_n,72,gdn_n,67,72,gdn_n,gdn_n, 74,gdn_n,gdn_n,gdn_n,gdn_n,69,71,73,
  74,gdn_n,74,71,74,gdn_n,79,gdn_n, 76,gdn_n,gdn_n,74,71,gdn_n,68,gdn_n, 69,gdn_n,73,gdn_n,76,gdn_n,73,gdn_n, 74,gdn_n,gdn_n,gdn_n,gdn_n,gdn_n,gdn_n,gdn_n];
STYLES.garden={name:"SEASHELL SUNDAY",bpm:104,spb:2,bar:8,bars:16,
  play(i,t,d){const li=i%128,b=li%8,bar=li>>3,ch=gdn_CH[bar],r=gdn_ROOT[bar],nr=gdn_ROOT[(bar+1)%16],cho=bar>=8;
   // melodic walking bass: root, third, fifth, approach note into next bar
   if(b%2===0){const n=[r,r+gdn_TH[bar],r+7,nr+(nr>r?-1:1)][b>>1];walkBass(n,d*1.8,t,0.3);}
   // jangly strums: D . . U D . U .
   if(b===0||b===4)gdn_strum(ch.slice(1),t,0.022,false);if(b===3||b===6)gdn_strum(ch.slice(2),t,0.022,true);
   // honky-tonk piano off-beat chords
   if(b%2===1)gdn_honky(ch.slice(2,5).map(m=>m+12),t,cho?0.04:0.03);
   // Ringo drums
   const fill=(bar===7||bar===15)&&b>=4;
   if(!fill){if(b===0||b===4||(b===5&&cho))kick(t,0.45);if(b===2||b===6)snare(t,0.18);
     if(cho)ride(t,b%2?0.02:0.03);else hat(t,b===7,b%2?0.03:0.045);}
   else{tom(t,[200,170,140,110][b-4]);if(b===4)snare(t,0.12);}
   if(li===0||li===64)crash(t);
   // whistle lead, held to the next note
   const m=gdn_MEL[li];if(m){let n=1;while(b+n<8&&gdn_MEL[li+n]===gdn_n)n++;gdn_lead(m,d*n*0.92,t,0.05);}
   // guitar lick fill answering the verse, bubbles at the end of the chorus
   if(bar===7&&b>=2)gdn_gtr([69,71,73,76,73,69][b-2]+12,t,0.05);
   if(bar===15&&(b===2||b===5))gdn_gurgle(t);if(bar===3&&b===6)gdn_gurgle(t);}};

// PET ROOM: "Wag Wag Woof Woof!", a super-silly, bouncy chiptune for the pets: a pulse-wave lead with a kazoo
//  joining in the second half, boing bass, oom-pah chord stabs, 8-bit drums, and the pets themselves answering
//  the tune: pixel woofs, meows, bird tweets, squeaky toys and a hamster wheel spin.
function petWoof(t,hi=1){const ga=out(1,0.05);decayEnv(ga,t,0.13,0.16,0.004);const o=O('square',230*hi,t,t+0.18,ga,0.6);o.frequency.exponentialRampToValueAtTime(95*hi,t+0.12);
  nz(0.07,0.05,'bandpass',900*hi,t,1.5);}
function petMeow(t,up=1){const ga=out(1,0.1);holdEnv(ga,t,0.045,0.34,0.03,0.12);const o=AC.createOscillator();o.setPeriodicWave(pulseWave(0.25));
  o.frequency.setValueAtTime(560*up,t);o.frequency.linearRampToValueAtTime(940*up,t+0.12);o.frequency.linearRampToValueAtTime(520*up,t+0.34);o.connect(ga);o.start(t);o.stop(t+0.36);}
function petTweet(t){for(let k=0;k<3;k++){const ga=out(1,0.1);decayEnv(ga,t+k*0.07,0.035,0.06,0.003);const o=O('sine',2600,t+k*0.07,t+k*0.07+0.07,ga);o.frequency.exponentialRampToValueAtTime(3900,t+k*0.07+0.05);}}
function petWheel(t,d){for(let k=0;k<8;k++)nz(0.02,0.04,'bandpass',3000+k*300,t+k*d*0.25,3);}
const PW_F=[65,69,72],PW_Bb=[58,62,65],PW_C=[60,64,67],PW_Dm=[62,65,69],PW_G=[67,71,74];
const PW_CH=[PW_F,PW_F,PW_Bb,PW_C,PW_F,PW_Dm,PW_Bb,PW_C,PW_Bb,PW_F,PW_G,PW_C,PW_F,PW_Bb,PW_C,PW_F];
const PW_MEL=[[77,0,81,0,84,-1,81,77],[79,81,77,0,72,0,0,0],[74,0,77,0,82,-1,81,79],[76,79,84,-1,0,0,0,0],
 [84,0,84,81,77,0,81,84],[86,-1,84,81,77,0,0,0],[82,0,86,0,89,-1,86,82],[84,-1,79,-1,72,0,0,0],
 [74,77,82,77,86,82,77,74],[77,81,84,81,89,84,81,77],[79,83,86,83,91,86,83,79],[84,-1,88,-1,91,-1,0,0],
 [89,0,89,88,86,0,84,0],[82,0,86,0,84,0,82,0],[79,81,82,84,86,88,89,91],[89,-1,0,0,77,0,0,0]];
STYLES.pets={name:"WAG WAG WOOF WOOF!",bpm:168,spb:4,bar:16,bars:16,
  play(i,t,d){const li=i%256,s16=li%16,bar=li>>4,ch=PW_CH[bar],sec2=bar>=8;
   // bouncy staccato lead (25% pulse), kazoo joins for the silly second half
   if(s16%2===0){const e=s16>>1,m=PW_MEL[bar][e];if(m>0){let n=1;while(e+n<8&&PW_MEL[bar][e+n]===-1)n++;const len=d*2*n*(n>1?0.9:0.6);
     chipPulse(m,len,t,0.045,0.25,n>1);if(sec2)kazoo(mtof(m-12),len,t,0.05);}}
   // boing bass on the beat, oom-pah chord stabs on the off-beats
   if(s16%4===0)boingBass(ch[0]-24+(s16===8?7:0),d*1.6,t,0.24);
   if(s16%4===2)ch.forEach(m=>chipPulse(m,d*0.8,t,0.014,0.125));
   // 8-bit drums with a skippy hat
   if(s16===0||s16===8||s16===10)chipKick(t);if(s16===4||s16===12)nz(0.09,0.11,'bandpass',2400,t,0.6);
   if(s16%2===0||s16===7||s16===15)nz(0.025,0.035,'highpass',8000,t);
   // the pets answer the tune in the gaps
   if(bar===1&&s16===10)petWoof(t);if(bar===1&&s16===13)petWoof(t,1.15);
   if(bar===3&&s16===8)petMeow(t);
   if(bar===5&&s16===10){petWoof(t);petWoof(t+d*2,1.15);}
   if(bar===7&&s16===10)petTweet(t);
   if((bar===3||bar===11)&&s16===14)squeak(t,1700);
   if(bar===11&&s16===12)petMeow(t,1.3);
   if(bar===13&&s16===0)petWheel(t,d);
   if(bar===15&&s16===8){petWoof(t,1.2);petMeow(t+d*3,1.1);}}};

// GAME ROOM: "Press Start to Clean!", an original NES-style chiptune: two pulse-wave channels (lead with vibrato and
//  an echo, plus rapid chord arpeggios), a triangle-wave bass, noise drums, coin blings, a power-up sweep and a 1-UP jingle.
const PULSE_WAVES={};
function pulseWave(d){if(!PULSE_WAVES[d]){const N=32,re=new Float32Array(N),im=new Float32Array(N);for(let n=1;n<N;n++)re[n]=2/(n*Math.PI)*Math.sin(n*Math.PI*d);PULSE_WAVES[d]=AC.createPeriodicWave(re,im);}return PULSE_WAVES[d];}
function chipPulse(m,dur,t,vol,duty=0.5,vib=false){const ga=out(1,0.06);holdEnv(ga,t,vol,dur,0.003,0.02);const o=AC.createOscillator();o.setPeriodicWave(pulseWave(duty));
  o.frequency.setValueAtTime(mtof(m),t);if(vib&&dur>0.18){const lg=AC.createGain();lg.gain.setValueAtTime(0,t);lg.gain.linearRampToValueAtTime(14,t+dur);O('sine',6,t,t+dur+0.05,lg);lg.connect(o.detune);}
  o.connect(ga);o.start(t);o.stop(t+dur+0.05);}
function chipTri(m,dur,t,vol=0.22){const ga=out(1,0);holdEnv(ga,t,vol,dur,0.002,0.015);O('triangle',mtof(m),t,t+dur+0.03,ga);}
function chipKick(t){const ga=out(1,0);decayEnv(ga,t,0.4,0.12,0.002);const o=O('triangle',180,t,t+0.14,ga);o.frequency.exponentialRampToValueAtTime(40,t+0.1);}
const CH_C=[60,64,67],CH_Am=[57,60,64],CH_F=[53,57,60],CH_G=[55,59,62],CH_Dm=[50,53,57],CH_E=[52,56,59],CH_Em=[52,55,59];
const NES_CH=[CH_C,CH_Am,CH_F,CH_G,CH_C,CH_Am,CH_F,CH_G,CH_Am,CH_F,CH_Dm,CH_E,CH_F,CH_Em,CH_G,CH_C];
const NES_MEL=[[72,-1,76,79,84,-1,79,76],[81,-1,79,76,72,-1,76,-1],[77,-1,81,84,89,-1,84,81],[79,-1,-1,-1,74,76,77,79],
 [84,-1,83,84,88,-1,84,79],[81,-1,84,81,76,-1,72,76],[77,79,81,77,74,-1,77,-1],[79,-1,83,-1,86,-1,91,-1],
 [81,-1,0,81,84,-1,81,-1],[77,-1,0,77,81,-1,77,-1],[74,77,81,86,81,77,74,77],[76,-1,80,-1,83,-1,88,-1],
 [89,-1,88,86,84,-1,81,-1],[86,-1,84,83,79,-1,83,86],[84,-1,86,-1,88,-1,91,-1],[96,-1,-1,-1,0,0,0,0]];
STYLES.chiptune={name:"PRESS START TO CLEAN!",bpm:150,spb:4,bar:16,bars:16,
  play(i,t,d){const li=i%256,s16=li%16,bar=li>>4,ch=NES_CH[bar],br=bar>=8&&bar<12;
   // lead pulse (50%) on 8ths with vibrato on long notes, plus the classic NES "echo" a dotted-8th later
   if(s16%2===0){const e=s16>>1,m=NES_MEL[bar][e];if(m>0){let n=1;while(e+n<8&&NES_MEL[bar][e+n]===-1)n++;const len=d*2*n*0.9;
     chipPulse(m,len,t,0.05,0.5,true);chipPulse(m,len*0.8,t+d*3,0.016,0.5);}}
   // arpeggio pulse (12.5%): rapid chord arps; bar 8 is a rising power-up sweep
   if(bar===7)chipPulse(67+s16*2,d*0.9,t,0.022,0.125);
   else if(bar!==15||s16<4)chipPulse(ch[s16%3]+12+(br&&s16%6>=3?12:0),d*0.85,t,0.02,0.125);
   // triangle bass: bouncing octaves, walking in the bridge
   if(s16%2===0){const r=ch[0]-12;chipTri(br?[r,r+12,r+7,r+12][(s16>>1)%4]:(s16%4===0?r:r+12),d*1.7,t);}
   // noise drums
   if(s16===0||s16===8||(br&&s16===6)||(bar===15&&s16<4))chipKick(t);
   if(s16===4||s16===12)nz(0.1,0.12,'bandpass',2600,t,0.6);
   if(s16%2===0)nz(0.03,0.04,'highpass',8000,t);
   if(bar===14&&s16>=12)nz(0.06,0.09,'bandpass',1800+s16*200,t,0.8);       // snare roll into the ending
   // coin blings and a 1-UP jingle
   if((bar===3||bar===11)&&s16===14){chipPulse(95,d*0.5,t,0.035,0.25);chipPulse(100,d*2,t+d*0.5,0.035,0.25);}
   if(bar===15&&s16>=4&&s16<10)chipPulse([76,79,88,84,86,91][s16-4],d*0.9,t,0.035,0.25);}};

// ARTS & CRAFTS: "Paint the Town (Tie-Dye)!", a ska-punk song for rebels and hippies. Verse: bouncy ska with
//  off-beat guitar skanks, a bubbling organ and a trumpet-and-sax horn section over a running bass. Chorus: full punk,
//  with distorted power chords on every eighth, a pounding beat, crashes and the horns shouting the hook. A tambourine
//  jangles all the way through, and the song ends on a big stop.
const SKA_TR={G:[67,71,74],C:[60,64,67],D:[62,66,69],Em:[64,67,71]},SKA_RT={G:43,C:48,D:50,Em:40};
const SKA_CH=['G','C','D','C','G','Em','C','D','Em','C','G','D','Em','C','D','D'];
const SKA_MEL=[[74,0,74,76,74,-1,71,0],[72,-1,71,69,67,0,0,0],[69,0,69,71,74,-1,78,0],[76,-1,74,72,71,0,0,0],
 [79,0,79,78,76,-1,74,0],[76,-1,74,71,67,0,0,0],[72,0,74,0,76,0,78,0],[79,-1,-1,-1,0,0,0,0],
 [76,76,0,76,79,-1,76,0],[72,72,0,72,76,-1,72,0],[74,74,0,74,79,-1,74,0],[78,-1,76,-1,74,-1,0,0],
 [76,76,0,76,79,-1,83,0],[84,-1,83,-1,79,-1,76,0],[78,79,81,-1,83,-1,81,79],[78,-1,-1,-1,0,0,0,0]];
STYLES.punkska={name:"PAINT THE TOWN (TIE-DYE)!",bpm:184,spb:2,bar:8,bars:16,
  play(i,t,d){const li=i%128,b=li%8,bar=li>>3,c=SKA_CH[bar],tri=SKA_TR[c],rt=SKA_RT[c],punk=bar>=8,stop=bar===15&&b>=2;
   // horn section: trumpet lead with a sax a third below
   const m=SKA_MEL[bar][b];if(m>0){let n=1;while(b+n<8&&SKA_MEL[bar][b+n]===-1)n++;const len=d*n*(n>1?0.92:0.7);
     trumpet(m,len,t,punk?0.075:0.06);sax(m-(c==='D'||c==='G'?4:3),len,t,punk?0.05:0.04);}
   if(stop){if(b===2){rKick(t);rCrash(t);gtrNote([mtof(rt),mtof(rt+7),mtof(rt+12)],d*5,t,0.55,false);}return;}
   if(!punk){
     // ska: guitar skank + organ bubble on the off-beats, running bass, light drums
     if(b%2===1){tri.forEach(x=>pluck(x,d*0.35,t,0.035,0.15,4200));tri.forEach(x=>organ(x-12,d*0.4,t,0.012,0.2));}
     bassNote(mtof(rt+[0,7,12,7,0,4,7,12][b]-(c==='Em'?0:0)),d*0.9,t);
     if(b===0||b===4)rKick(t);if(b===2||b===6)rSnare(t,0.28);hat(t,b%2===1,b%2?0.07:0.04);
   }else{
     // punk: palm-muted power chords on every eighth, open on the accents
     const acc=b===0||b===3||b===6;gtrNote([mtof(rt),mtof(rt+7),mtof(rt+12)],acc?d*1.2:d*0.5,t,acc?0.55:0.4,!acc);
     bassNote(mtof(rt),d*0.9,t);rKick(t);if(b===2||b===6)rSnare(t);
     if(b===0&&bar%2===0)rCrash(t);else hat(t,true,0.06);
     if(bar===14&&b>=4)rSnare(t+d/2,0.25);                                  // drum fill into the stop
   }
   shaker(t,b%2?0.03:0.02);if(b%4===2)nz(0.08,0.035,'highpass',7000,t);       // hippie tambourine jangle
   if(li===0)rCrash(t);}};

// FAIL SCREEN: "Grounded Until Forever", a slow, sad piano lament in A minor for when the parents beat you home:
//  a lonely piano melody that keeps sighing downward, soft strings, a slow bass and a few celesta "teardrops".
const SAD_CH=[[57,60,64],[53,57,60],[48,52,55],[52,56,59],[57,60,64],[50,53,57],[52,56,59],[57,60,64]];
const SAD_MEL=[[76,-1,-1,74,72,-1,71,-1],[72,-1,-1,-1,69,-1,-1,-1],[67,-1,72,-1,71,-1,69,-1],[68,-1,-1,-1,-1,-1,0,0],
 [72,-1,71,-1,69,-1,72,-1],[77,-1,-1,76,74,-1,-1,-1],[71,-1,74,-1,68,-1,71,-1],[69,-1,-1,-1,-1,-1,0,0]];
STYLES.sad={name:"GROUNDED UNTIL FOREVER",bpm:66,spb:2,bar:8,bars:8,
  play(i,t,d){const li=i%64,b=li%8,bar=li>>3,ch=SAD_CH[bar];
   const m=SAD_MEL[bar][b];if(m>0){let n=1;while(b+n<8&&SAD_MEL[bar][b+n]===-1)n++;piano(m,d*n*1.05,t,0.11,0.5);}
   if(b===0){strings(ch.map(x=>x+12),d*8,t,0.014);piano(ch[0]-12,d*4,t,0.08,0.4);}
   if(b===4)piano(ch[0]-12+(bar===3||bar===6?-1:7),d*4,t,0.06,0.4);
   if(b===2||b===6)ch.forEach(x=>piano(x,d*1.5,t,0.03,0.4));
   if((bar===3||bar===7)&&b===6){celesta(88,d*2,t,0.025);celesta(84,d*2,t+d,0.02);}}};

// RACE TRACK: "Radical Race Rock" is Isaac's Room rock song played very fast.
// Four 8-bar sections (about a minute at 240 BPM): the riff, the riff a whole step up, a breakdown that
//  builds like engines revving on the grid, then the final lap a fourth up with crashes on every bar.
STYLES.racerock={name:"RADICAL RACE ROCK",bpm:240,spb:2,bar:8,bars:32,play(i,t,d){
   const s=SONG,len=64,li=i%len,sec=Math.floor(i/len)%4,bar=Math.floor(li/8),b=li%8,lastBar=bar===7,tr=[0,2,0,5][sec],root=s.roots[bar]+tr;
   const brk=sec===2,build=brk&&bar>=4,fin=sec===3;
   const n=s.lead[li];
   if(n!==null&&!brk){let k=1;while(k<4&&s.lead[(li+k)%len]===null)k++;leadGtr(mtof(n-12+tr),d*k*0.95,t);}
   if(build&&b%2===0)leadGtr(mtof(root+12+(bar-4)*2),d*1.6,t,0.35);            // revving lead climbs through the build
   const pc=[mtof(root-12),mtof(root-5),mtof(root)],acc=(b===0||b===3||b===6);
   if(brk&&!build){if(b===0)gtrNote(pc,d*6,t,0.45,false);if(b%2===0)bassNote(mtof(root-24),d*1.5,t);}
   else if(!(lastBar&&b>=4)){gtrNote(pc,acc?d*(b===6?2:1.4):d*0.5,t,acc?0.5:0.35,!acc);bassNote(mtof(root-24),d*0.85,t);}
   if(li%16===0||(fin&&b===0))rCrash(t);
   if(lastBar&&b>=4){rTom(t,[240,200,160,120][b-4]);rTom(t+d/2,[220,180,140,110][b-4]);if(b===7){rKick(t);rCrash(t+d);}}
   else if(brk&&!build){if(b===0)rKick(t);if(b===4)rSnare(t,0.2);hat(t,false,0.05);}
   else if(build){rKick(t);if(bar>=6||b%2===0)rSnare(t,0.1+0.04*(bar-4));}
   else{
     if(b===0||b===4||(b===5&&bar%2)||(b===7&&bar===6))rKick(t);
     if(b===2||b===6)rSnare(t);
     if(b===7&&bar%2===0)rSnare(t+d/2,0.12);
     if(bar>=4&&bar<6)ride(t,0.06);else hat(t,b===7,b%2?0.06:0.1);
   }}};

// ENDING: "Jubilee for a Job Well Done", an original celebratory fanfare and jubilee for when the player wins.
//  Bars 1-4  fanfare: warm horn-section chord calls with bell sparkles and a harp sweep, ending on the dominant
//  Bars 5-12 jubilee theme in D major: soaring strings over bouncing pizzicato bass, horn counter-chords, bells, tambourine
//  Bars 13-20 the theme again a half-step higher (E-flat major) for the big "lift", horns doubling the melody
//  Bars 21-24 grand finale: the fanfare calls return in E-flat, a final rising sweep and a long, bright closing chord
function horn(m,dur,t,vol=0.04){const f=mtof(m),ga=out(1,0.45),end=t+dur+0.12;holdEnv(ga,t,vol,dur,0.035,Math.min(0.15,dur*0.3));
  const lp=AC.createBiquadFilter();lp.type='lowpass';lp.Q.value=0.7;lp.frequency.setValueAtTime(f*1.4,t);lp.frequency.linearRampToValueAtTime(Math.min(2600,f*4),t+0.09);lp.connect(ga);
  const a=O('sawtooth',f,t,end,lp,0.55),b=O('triangle',f,t,end,lp,0.8);b.detune.value=-5;
  const vg=AC.createGain();vg.gain.setValueAtTime(0,t);vg.gain.linearRampToValueAtTime(5,t+Math.min(0.5,dur*0.7));O('sine',5,t,end,vg);vg.connect(a.detune);vg.connect(b.detune);}
const FIN_CHEER=(t,len)=>{for(let k=0;k<6;k++){const f=nz(len,0.02+0.006*k,'bandpass',900+k*450,t+k*0.03,1.2);}nz(len*0.6,0.03,'highpass',3000,t);}; // a crowd "hooray!"
STYLES.finale={name:"JUBILEE FOR A JOB WELL DONE",bpm:148,spb:2,bar:8,bars:24,
  // chord per bar: [bass root, horn voicing]
  ch:[[38,[57,62,66]],[43,[59,62,67]],[38,[57,62,66]],[33,[57,61,64,67]],
      [38,[57,62,66]],[43,[59,62,67]],[38,[57,62,66]],[33,[57,61,64]],[35,[59,62,66]],[43,[59,62,67]],[33,[57,61,64,67]],[38,[57,62,66]],
      [39,[58,63,67]],[44,[60,63,68]],[39,[58,63,67]],[34,[58,62,65]],[36,[60,63,67]],[44,[60,63,68]],[34,[58,62,65,68]],[39,[58,63,67]],
      [39,[58,63,67]],[44,[60,63,68]],[39,[58,63,67]],[39,[58,63,67,70]]],
  theme:[[[74,2],[78,2],[81,3],[78,1]],[[79,2],[83,2],[86,4]],[[81,2],[78,1],[81,1],[86,2],[85,2]],[[83,2],[81,2],[76,4]],
         [[78,2],[81,2],[86,3],[85,1]],[[83,2],[79,2],[83,2],[86,2]],[[85,2],[83,2],[81,2],[79,2]],[[78,4],[74,4]]],
  call:[[0,1],[1,1],[2,2],[4,4]],                                      // fanfare rhythm: ta-ta TAAA TAAAAA
  init(){if(this.ev)return;this.ev=[];
    const put=(bar,list,tr)=>{let o=0;for(const [m,l] of list){this.ev[bar*8+o]=[m+tr,l];o+=l;}};
    this.theme.forEach((b,k)=>put(4+k,b,0));this.theme.forEach((b,k)=>put(12+k,b,1));},
  rub(i){const k=i%192;return k>=160?1.06+(k>=180?(k-179)*0.03:0):1;},   // the fanfare return broadens slightly, then a short final ritardando
  play(i,t,d){this.init();const k=i%192,bar=Math.floor(k/8),b=k%8,[r,c]=this.ch[bar];
    const fan=bar<4||bar>=20,big=bar>=12;
    if(fan){
      if(bar===3||bar===23){if(b===0){const L=d*(bar===23?16:7.6);c.forEach(m=>{horn(m,L,t,0.042);horn(m+12,L,t,0.022);});horn(r+12,L,t,0.04);tuba(r,L,t,0.3);lib_warm(r,L,t,0.08,0.4);if(bar===23){strings(c.map(m=>m+24),L,t,0.014);FIN_CHEER(t+0.1,2.5);}}
        if(b===0)[0,1,2,3,4,5,6,7,8,9].forEach(q=>harp(r+24+[0,4,7,12,16,19,24,28,31,36][q]-(bar===23?0:2),0.4,t+q*0.045,0.025));
        if(bar===23&&b===0){crash(t);[0,4,7,12].forEach((q,j)=>celesta(r+36+q,d*6,t+j*0.06,0.03));}}
      else{const hit=this.call.find(([o])=>o===b);
        if(hit){c.forEach(m=>horn(m,d*hit[1]*0.92,t,0.04));horn(c[c.length-1]+12,d*hit[1]*0.92,t,0.032);horn(c[0]-12,d*hit[1]*0.92,t,0.035);tuba(r,d*hit[1]*0.9,t,0.25);
          if(b===0||b===4)lib_pizz(r,t,0.05);if(b===4)celesta(c[2]+24,d*3,t,0.025);}
        if(b===0&&(bar===0||bar>=20))crash(t);}
    }else{
      if(b===0||b===4){tuba(r+(b?7:0),d*1.6,t,big?0.3:0.26);lib_pizz(r+(b?7:0),t,0.05);}   // march bass: tuba + pizzicato on the beat
      if(b===2||b===6)c.forEach(m=>horn(m,d*1.5,t,big?0.03:0.026));                     // horn 'pah' chords
      if(b===0)strings(c.map(m=>m+12),d*8,t,big?0.011:0.008);
      if(b%2===1)nz(0.05,0.03,'bandpass',9000,t,1.2);                                     // tambourine
      if(b===2||b===6)clap(t,0.1);                                                          // celebration handclaps
      if(b===4&&bar%2===1)[0,4,7,12,16,19].forEach((q,j)=>celesta(c[0]+24+q,d,t+j*d/3,0.016)); // bell runs
      if(b===0&&bar%2===0)celesta(c[2]+24,d*2,t,0.022);
      if(b===0&&bar===12)FIN_CHEER(t,1.6);
      if(b===0&&(bar===4||bar===12||bar===16)){crash(t);[0,1,2,3,4,5,6,7].forEach(q=>harp(r+24+[0,4,7,12,16,19,24,28][q],0.4,t+q*0.04,0.022));}
      const e=this.ev[k];if(e){lib_warm(e[0],d*e[1]*0.96,t,big?0.08:0.07,0.55);horn(e[0]-12,d*e[1]*0.94,t,big?0.045:0.035);if(big)lib_warm(e[0]+12,d*e[1]*0.96,t,0.035,0.6);} // melody: strings + horns, soaring octave on the lift
    }
  }};
// Per-song volume trim so every song plays at a similar loudness (measured RMS; quieter targets for the gentle title, basement, attic, music-room and library pieces).
// MONEY ROOM: "Winter (8-Bit)", Antonio Vivaldi's "Winter" from The Four Seasons (1725, public domain), first
//  movement (Allegro non molto, F minor), arranged as NES-style video game music from memory. The shivering
//  repeated chord builds up one voice at a time into a crunchy dissonance with an icy trill on top, a storm burst on
//  the dominant, the driving tutti theme of repeated sixteenths stepping down, solo-violin arpeggios, a plunging
//  scale and a final F minor chord. Pulse-wave "violins", a triangle-wave bass and 8-bit drums.
const WIN_STACK=[53,60,63,61,67,70];                                     // voices that enter one bar at a time over a low F
const WIN_THEME=[[77,75],[73,72],[70,73],[72,71]];                       // repeated-note storm theme, 8 sixteenths per note
const WIN_TH_B=[41,39,46,36];
const WIN_ARP=[[65,68,72,77,72,68,65,68,72,77,80,77,72,68,72,77],[70,73,77,82,77,73,70,73,77,82,85,82,77,73,77,82],
 [79,76,72,70,67,64,67,70,72,76,79,82,79,76,72,70]];
// Play order: open on the famous solo-violin arpeggios, then the storm theme, the solo again, the shiver building
//  into the storm burst, the plunging scale and the final chord.
const WIN_ORDER=[11,12,13,7,8,9,10,11,12,13,3,4,5,6,14,15];
const WIN_RUN=[84,82,80,79,77,75,73,72,70,68,67,65,64,65,67,68];
STYLES.money={name:"WINTER (8-BIT) – VIVALDI",bpm:116,spb:4,bar:16,bars:16,
  play(i,t,d){const li=i%256,s16=li%16,bar=WIN_ORDER[li>>4];
   if(bar<6){                                                             // shivering repeated eighths, stacking up
     if(s16%2===0){chipTri(41,d*1.6,t,0.2);for(let v=0;v<=bar;v++)chipPulse(WIN_STACK[v],d*1.3,t,0.012+(v===bar&&s16<4?0.006:0),0.25);}
     if(bar===5)chipPulse(s16%2?73:72,d*0.9,t,0.03,0.5);                   // icy trill on top
     if(bar>=2){if(s16===0||s16===8)chipKick(t);if(s16%4===2)nz(0.03,0.025,'highpass',8000,t);}}
   else if(bar===6){                                                      // 7: storm burst on the dominant
     const c7=[48,55,60,64,67,70,72,76,79,82,84,88,91,94,96,100];chipPulse(c7[s16],d*0.9,t,0.035,0.5);chipTri(36,d*0.9,t,0.24);
     if(s16===0){nz(1.2,0.09,'highpass',5000,t);chipKick(t);}if(s16%4===0)chipKick(t);if(s16===12)nz(0.1,0.12,'bandpass',2400,t,0.6);}
   else if(bar<11){                                                       // 8-11: the tutti storm theme
     const k=bar-7,m=WIN_THEME[k][s16>>3];chipPulse(m,d*0.85,t,0.04,0.5);chipPulse(m-12,d*0.85,t,0.016,0.125);
     if(bar===10&&s16>=8)chipPulse(s16%2?73:72,d*0.9,t,0.03,0.5);
     if(s16%2===0)chipTri(WIN_TH_B[k]+(s16%4?12:0),d*1.7,t);
     if(s16===0||s16===8||s16===10)chipKick(t);if(s16===4||s16===12)nz(0.09,0.11,'bandpass',2400,t,0.6);if(s16%2===1)nz(0.025,0.03,'highpass',8000,t);}
   else if(bar<14){                                                       // 12-14: solo violin arpeggios
     const k=bar-11;chipPulse(WIN_ARP[k][s16],d*0.9,t,0.036,0.5,false);
     if(s16%4===0)chipTri([41,46,36][k],d*3.5,t);if(s16%4===0)[[53,56,60],[58,61,65],[55,58,64]][k].forEach(x=>chipPulse(x,d*0.6,t,0.012,0.125));
     if(s16===0||s16===8)chipKick(t);if(s16===4||s16===12)nz(0.08,0.08,'bandpass',2400,t,0.6);}
   else if(bar===14){                                                     // 15: plunging scale with a snare roll
     chipPulse(WIN_RUN[s16],d*0.9,t,0.038,0.5);chipTri(36+(s16>>2),d*0.9,t);nz(0.06,0.04+s16*0.004,'bandpass',2200,t,0.7);}
   else{                                                                  // 16: final F minor chord, then shiver out
     if(s16===0){[41,53,60,65,68,72,77].forEach(x=>x<50?chipTri(x,d*7,t,0.24):chipPulse(x,d*7,t,0.022,0.25,true));chipKick(t);nz(1.4,0.08,'highpass',5000,t);}
     if(s16>=8&&s16%2===0){chipPulse(65,d*0.9,t,0.012,0.25);chipPulse(68,d*0.9,t,0.012,0.25);}}}};
// An original grand-prix fanfare: bright horns, dancing strings, bells and snare.
STYLES.grandprix={name:"CASTLE CUP CELEBRATION",bpm:144,spb:2,bar:8,bars:16,
 melody:[72,76,79,77,74,79,76,72,74,77,81,79,76,74,71,67,
         76,79,84,83,81,77,79,76,74,72,71,74,79,77,76,72],
 play(i,t,d){const bar=Math.floor(i/8)%16,b=i%8,root=[48,53,55,48,57,53,50,55][bar%8],lift=bar>=8;
  if(b===0){strings([root+12,root+16,root+19],d*7,t,0.01);tuba(root,d*1.5,t,0.11);}
  if(b===4)tuba(root+7,d*1.5,t,0.09);
  if(b%2===0)harp(root+[12,16,19,24][b/2],d*1.4,t,0.018);
  if(b===2||b===6)snare(t,0.075);if(b%2)hat(t,false,0.016);if(b===0&&bar%4===0)crash(t,0.05);
  const n=this.melody[(bar%4)*8+b]+(lift?12:0);
  horn(n,d*0.88,t,lift?0.045:0.04);if(lift&&b%2===0)celesta(n+12,d,t,0.018);
 }};
// Original calm block-building music: spacious piano, soft air and little harp lights.
STYLES.blockgarden={name:"LANTERNS IN THE BLOCK GARDEN",bpm:72,spb:2,bar:8,bars:8,
 melody:[64,71,67,74,69,76,72,67,65,72,69,76,71,78,74,69],
 play(i,t,d){const bar=Math.floor(i/8)%8,b=i%8,root=[48,45,53,55,48,57,50,55][bar];
  if(b===0){piano(root,d*6,t,0.055,0.6);softLead(mtof(root+19),d*7,t,0.007);}
  if(b===2||b===6)piano(this.melody[bar*2+(b===6?1:0)],d*3.5,t,0.065,0.55);
  if(b===4){piano(root+12,d*3,t,0.024,0.55);piano(root+19,d*3,t,0.018,0.55);}
  if(b===7&&bar%2===1)harp(root+31,d*2,t,0.012);
 }};
// Original obby/tycoon-style dance tune; no Roblox game recording is used.
STYLES.obby={name:"CHECKPOINT CHAMPIONS",bpm:132,spb:4,bar:16,bars:16,
 melody:[76,79,83,81,79,74,78,81,77,81,84,83,79,76,74,71],
 play(i,t,d){const bar=Math.floor(i/16)%16,b=i%16,root=[48,55,53,57][bar%4],bridge=bar>=8&&bar<12;
  if(b===0||b===8)kick(t,0.35);if(b===4||b===12)clap(t,0.08);if(b%2)hat(t,b===15,0.025);
  if(b%4===0)subBass(root-12+(b===8?7:0),d*2.8,t,0.16);
  if(!bridge&&b%4===2)[0,4,7].forEach(n=>supersaw(root+12+n,d*1.35,t,0.013,2400));
  if(b%2===0){const n=this.melody[(bar%2)*8+b/2]+(bar>=12?12:0);pluck(n,d*1.6,t,bridge?0.03:0.055,0.22,3800);}
  if(b===15){robotBeep(root+31,d,t,0.018);tone(mtof(root+36),d*.7,'sine',0.024,null,t+d,musicGain);}
 }};
// Original sunset-city radio groove: synth bass, electric piano and a sax/synth lead.
STYLES.cityradio={name:"TWO CITIES, ONE SUNSET",bpm:108,spb:4,bar:16,bars:16,
 melody:[69,76,72,79,74,71,67,72,65,72,69,76,67,74,71,69],
 play(i,t,d){const bar=Math.floor(i/16)%16,b=i%16,root=[45,53,48,55][bar%4];
  if(b===0||b===8)kick(t,0.28);if(b===4||b===12)snare(t,0.11);if(b%2)hat(t,b===15,0.025);
  if([0,3,6,8,11,14].includes(b))synthBass(root-12+(b===6||b===14?7:0),d*1.5,t,0.10);
  if(b===2||b===10)[0,4,7].forEach(n=>epiano(root+12+n,d*2,t,0.025,0.25));
  if(b===0)[0,7,12].forEach(n=>softLead(mtof(root+12+n),d*7,t,0.008));
  if(b%2===0){const n=this.melody[(bar%2)*8+b/2];if(bar>=8)sax(n,d*1.55,t,0.035,0.3);else softLead(mtof(n),d*1.65,t,0.045);}
  if(b===15&&bar%4===3)pluck(root+31,d,t,0.025,0.3,2600);
 }};
// Original electronic charging-room track: bright arps and a steady dance pulse.
STYLES.charging={name:"FULLY CHARGED",bpm:128,spb:4,bar:16,bars:16,
 melody:[76,83,79,81,74,78,81,79,77,84,81,79,76,79,74,72],
 play(i,t,d){const bar=Math.floor(i/16)%16,b=i%16,root=[48,55,53,57][bar%4],breakdown=bar>=8&&bar<12;
  if(b%4===0){kick(t,breakdown?0.17:0.30);subBass(root-12,d*2.7,t,0.13);}
  if(b===4||b===12)snare(t,0.085);if(b%2)hat(t,b===15,0.023);
  pluck(root+[12,19,24,28,31,28,24,19][b%8],d*1.3,t,0.025,0.22,3000);
  if(!breakdown&&b%2===0)popLead(this.melody[(bar%2)*8+b/2]+(bar>=12?12:0),d*1.6,t,0.03,0.25);
  if(b===0)[0,4,7].forEach(n=>supersaw(root+12+n,d*7,t,0.006,1500));
  if(b===15&&bar%4===3)robotBeep(root+31,d,t,0.016);
 }};
const STYLE_GAIN={"charging":1.0,"cityradio":1.6,"obby":0.85,"blockgarden":3.0,"grandprix":0.9,"sad":1.62,"money":0.82,"punkska":0.39,"chiptune":0.76,"racerock":0.35,"pets":1.0,"garden":1.109,"library":1.175,"science":0.668,"rock":0.398,"jazz":1.161,"pop":0.776,"hiphop":0.427,"techno":1.035,"princess":1.718,"french2":1.905,"workout":0.794,"pool":0.676,"silly":0.575,"practice":1.641,"muzak":1.758,"crooner":1.549,"polka":0.631,"romantic":1.698,"baroque":1.679,"french":2.065,"finale":0.88};
for(const k in STYLE_GAIN)if(STYLES[k])STYLES[k].gain=STYLE_GAIN[k];
const MUSIC_BASE=0.38;
const MIX=['rock','princess','jazz','pop','hiphop','garden','pool','techno','polka','crooner','muzak','library','practice','punkska','silly','science','workout','romantic','baroque','pets','chiptune','money','grandprix','blockgarden','obby','cityradio','charging'];
let music={on:false,style:'pop',step:0,next:0,seg:0,segStep:0,cycle:0};
function startMusic(style){music.style=style;music.step=0;music.seg=0;music.segStep=0;music.cycle=0;music.on=true;if(AC)music.next=AC.currentTime+0.05;}
function scheduler(){
  if(!AC||!music.on)return;
  if(music.next<AC.currentTime-0.2)music.next=AC.currentTime+0.02;
  while(music.next<AC.currentTime+0.15){
    let S,i;
    if(music.style==='mix'){ // WHOLE HOUSE: medley that channel-surfs through every level's genre, 4 bars each
      S=STYLES[MIX[music.seg]];i=(music.segStep+music.cycle*S.bar*4)%(S.bar*S.bars);
      if(music.segStep===0&&(music.seg||music.cycle)){scratch(music.next);crash(music.next);}
    }else{S=STYLES[music.style];i=music.step;}
    let bpm=S.bpm;if(musicUrgent)bpm*=1.08;
    let d=60/bpm/S.spb;if(S.rub)d*=S.rub(i);
    if(music.curGain!==S.gain){music.curGain=S.gain;musicGain.gain.setTargetAtTime(MUSIC_BASE*(S.gain||1),Math.max(AC.currentTime,music.next-0.02),0.03);} // per-song volume
    S.play(i,music.next,d);
    music.next+=d;music.step++;
    if(music.style==='mix'){music.segStep++;if(music.segStep>=S.bar*4){music.segStep=0;music.seg++;if(music.seg>=MIX.length){music.seg=0;music.cycle++;}}}
  }
}


let musicUrgent=false;
function setMusicUrgent(value){musicUrgent=value;}
export {initAudio,startMusic,toggleMute,setMusicUrgent};
