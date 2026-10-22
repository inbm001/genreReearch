'use strict';
const GraphMath={
  expansionAnchor(parent,nodes){const others=nodes.filter(n=>n.id!==parent.id);if(!others.length||others.every(n=>Math.hypot(n.x-parent.x,n.y-parent.y)>170))return {x:parent.x,y:parent.y};let best=null,score=-Infinity;for(let i=0;i<24;i++){const a=i*Math.PI/12,p={x:parent.x+Math.cos(a)*230,y:parent.y+Math.sin(a)*230};const clearance=Math.min(...others.map(n=>Math.hypot(n.x-p.x,n.y-p.y)));if(clearance>score){score=clearance;best=p;}}return best;},
  spawnPosition(parent,nodes){let best=null,score=-Infinity;for(const radius of [180,250,320])for(let i=0;i<36;i++){const a=i*Math.PI/18,p={x:parent.x+Math.cos(a)*radius,y:parent.y+Math.sin(a)*radius};const clearance=Math.min(300,...nodes.map(n=>Math.hypot(n.x-p.x,n.y-p.y)));const merit=clearance-radius*.12;if(merit>score){score=merit;best=p;}}return best;},
  focusTarget(center,scale){return {pan:{x:-center.x*scale,y:-center.y*scale},scale};},
  statusFlags(value){return {old:value==='old'||value?.old===true,hot:value==='hot'||value?.hot===true};},

  cameraStep(m,now){const t=Math.max(0,Math.min(1,(now-m.start)/m.duration)),e=1-(1-t)**3;return {pan:{x:m.from.x+(m.to.x-m.from.x)*e,y:m.from.y+(m.to.y-m.from.y)*e},scale:m.fromScale+(m.toScale-m.fromScale)*e,done:t===1};},
  nearest(g,genres,limit=48){if(!Number.isFinite(g.sourceX)||!Number.isFinite(g.sourceY))return [];return genres.filter(x=>x.id!==g.id&&x.origin==='en'&&Number.isFinite(x.sourceX)&&Number.isFinite(x.sourceY)).map(x=>({g:x,d:(x.sourceX-g.sourceX)**2+(x.sourceY-g.sourceY)**2})).sort((a,b)=>a.d-b.d||a.g.id.localeCompare(b.g.id)).slice(0,limit).map(x=>x.g);}
};
if(typeof module!=='undefined')module.exports=GraphMath;
