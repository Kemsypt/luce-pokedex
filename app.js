(() => {
'use strict';
const records=window.POKEMON, $=id=>document.getElementById(id);
const palette={Normal:'#656e53',Dark:'#4f4854',Psychic:'#b33266',Fire:'#ad4624',Flying:'#636ba9',Ground:'#856024',Steel:'#586e79',Electric:'#b59a29',Fighting:'#a33c39',Grass:'#397747',Water:'#326fb1',Poison:'#88509a',Dragon:'#6050af',Ghost:'#665687'};
const images=new Map(), views=new Map();
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let selected=records.find(p=>p.id===decodeURIComponent(location.hash.slice(1)))||records.find(p=>p.id==='cinnacub');
let facing='front',animate=!reduced.matches,frame=0,started=performance.now(),visible=records,hover=null;
$('animate').setAttribute('aria-pressed',String(animate));$('animate').textContent=animate?'Animation on':'Animation off';
function format(p){return String(p.number).padStart(3,'0')}
function label(canvas,p,side){canvas.setAttribute('role','img');canvas.setAttribute('aria-label',`${p.name} ${side} sprite`)}
function paint(canvas,p,side='front',pose=0){
 const ctx=canvas.getContext('2d');ctx.clearRect(0,0,80,80);ctx.imageSmoothingEnabled=false;
 const image=images.get(p.id);if(!image)return;
 ctx.drawImage(image,((side==='front'?2:0)+pose)*80,0,80,80,0,0,80,80);
}
function createCanvas(p,side='front'){const c=document.createElement('canvas');c.width=c.height=80;label(c,p,side);paint(c,p,side);return c}
function load(p){
 const image=new Image();image.onload=()=>{
  const c=document.createElement('canvas');c.width=320;c.height=80;const ctx=c.getContext('2d',{willReadFrequently:true});ctx.drawImage(image,0,0);
  const rgba=ctx.getImageData(0,0,320,80),pixels=rgba.data,bg=Array.from(pixels.slice(0,3));
  // Exact background-colour key for the display only; source sheets are untouched.
  for(let i=0;i<pixels.length;i+=4){if(pixels[i]===bg[0]&&pixels[i+1]===bg[1]&&pixels[i+2]===bg[2])pixels[i+3]=0;}
  ctx.putImageData(rgba,0,0);images.set(p.id,c);
  const card=views.get(p.id);if(card)paint(card.canvas,p);
  document.querySelectorAll(`[data-evo="${p.id}"] canvas`).forEach(canvas=>paint(canvas,p));
  if(selected.id===p.id){$('image-error').hidden=true;paint($('main-sprite'),p,facing,frame);}
 };
 image.onerror=()=>{const card=views.get(p.id);if(card)card.button.title='Sprite could not be loaded';if(selected.id===p.id)$('image-error').hidden=false;};
 image.src=p.sheet;
}
function renderTypes(p){$('types').replaceChildren();for(const t of p.types){const b=document.createElement('span');b.className=`type ${t.toLowerCase()}`;b.textContent=t;$('types').append(b)}$('type-note').hidden=!p.typeNote;$('type-note').textContent=p.typeNote;}
function renderEvolution(p){const family=records.filter(x=>x.family===p.family);$('family-count').textContent=family.length===1?'SINGLE STAGE':`${family.length} STAGES`;$('evolution').replaceChildren();
 family.forEach(member=>{const b=document.createElement('button');b.className='evo-button'+(member.id===p.id?' current':'');b.dataset.evo=member.id;b.setAttribute('aria-label',`View ${member.name}`);b.setAttribute('aria-pressed',String(member.id===p.id));b.append(createCanvas(member));const name=document.createElement('strong');name.textContent=member.name;b.append(name);b.onclick=()=>select(member);$('evolution').append(b)});
}
function nav(){const i=visible.findIndex(p=>p.id===selected.id);$('position').textContent=i<0?'OUTSIDE FILTER':`${String(i+1).padStart(2,'0')} / ${String(visible.length).padStart(2,'0')}`;$('previous').disabled=visible.length<2;$('next').disabled=visible.length<2;}
function select(p,updateHash=true){selected=p;frame=0;started=performance.now();$('selected-number').textContent=`NO. ${format(p)}`;$('name').textContent=p.name;$('category').textContent=p.category||'POKÉMON';renderTypes(p);$('entry').textContent=p.entry||'Pokédex entry coming soon.';$('entry').classList.toggle('pending',!p.entry);renderEvolution(p);label($('main-sprite'),p,facing);paint($('main-sprite'),p,facing);$('frame-status').textContent='01 / 02';$('image-error').hidden=true;for(const [id,v] of views){v.button.classList.toggle('selected',id===p.id);v.button.setAttribute('aria-pressed',String(id===p.id));}nav();document.title=`${p.name} · Luce Pokédex`;if(updateHash&&location.hash!==`#${p.id}`)history.replaceState(null,'',`#${p.id}`);}
function renderGrid(){views.clear();$('grid').replaceChildren();visible.forEach(p=>{const b=document.createElement('button');b.className='pokemon-card'+(p.id===selected.id?' selected':'');b.setAttribute('aria-label',`View ${p.name}${p.types.length?', '+p.types.join(' / '):''}`);b.setAttribute('aria-pressed',String(p.id===selected.id));b.title=p.types.join(' / ')||'Typing to confirm';const number=document.createElement('span');number.className='card-number';number.textContent=`#${format(p)}`;const canvas=createCanvas(p),name=document.createElement('span');name.className='card-name';name.textContent=p.name;const types=document.createElement('span');types.className='card-types';types.setAttribute('aria-hidden','true');for(const t of p.types){const dot=document.createElement('i');dot.style.setProperty('--type-color',palette[t]);types.append(dot)}if(!p.types.length){const small=document.createElement('small');small.textContent='—';types.append(small)}b.append(number,canvas,name,types);b.onclick=()=>select(p);b.onpointerenter=()=>{hover=p.id};b.onpointerleave=()=>{hover=null;paint(canvas,p)};b.onfocus=()=>{hover=p.id};b.onblur=()=>{hover=null;paint(canvas,p)};$('grid').append(b);views.set(p.id,{canvas,button:b})});$('result-count').textContent=`${visible.length} / ${records.length} Pokémon`;$('empty').hidden=visible.length!==0;$('catalogue-hint').hidden=visible.length===0;$('clear').hidden=!($('search').value||$('type-filter').value);nav();}
function filter(){const q=$('search').value.trim().toLowerCase(),type=$('type-filter').value;visible=records.filter(p=>(!q||`${p.name} ${p.family} ${format(p)} ${p.types.join(' ')}`.toLowerCase().includes(q))&&(!type||p.types.includes(type)));hover=null;renderGrid();}
for(const t of [...new Set(records.flatMap(p=>p.types))].sort()){const o=document.createElement('option');o.value=o.textContent=t;$('type-filter').append(o)}
$('search').addEventListener('input',filter);$('type-filter').addEventListener('change',filter);function reset(){$('search').value='';$('type-filter').value='';filter()}$('reset').onclick=reset;$('clear').onclick=reset;
function direction(d){if(!visible.length)return;const i=visible.findIndex(p=>p.id===selected.id);select(visible[(i+d+visible.length)%visible.length]);const b=views.get(selected.id)?.button;if(b&&innerWidth>760)b.scrollIntoView({block:'nearest',inline:'nearest'});}
$('previous').onclick=()=>direction(-1);$('next').onclick=()=>direction(1);
function face(side){facing=side;frame=0;started=performance.now();$('view-label').textContent=`${side.toUpperCase()} VIEW`;$('front').classList.toggle('active',side==='front');$('back').classList.toggle('active',side==='back');$('front').setAttribute('aria-pressed',String(side==='front'));$('back').setAttribute('aria-pressed',String(side==='back'));label($('main-sprite'),selected,side);paint($('main-sprite'),selected,side);$('frame-status').textContent='01 / 02';}
$('front').onclick=()=>face('front');$('back').onclick=()=>face('back');
let replayUntil=0;
$('replay').onclick=()=>{started=performance.now();replayUntil=started+1450};
$('animate').onclick=()=>{animate=!animate;started=performance.now();$('animate').textContent=animate?'Animation on':'Animation off';$('animate').setAttribute('aria-pressed',String(animate));};
reduced.addEventListener('change',e=>{if(e.matches){animate=false;$('animate').textContent='Animation off';$('animate').setAttribute('aria-pressed','false')}});
addEventListener('hashchange',()=>{const p=records.find(p=>p.id===decodeURIComponent(location.hash.slice(1)));if(p)select(p,false)});
addEventListener('keydown',e=>{if(e.target.matches('input,select,textarea,button'))return;if(e.key==='ArrowLeft'){e.preventDefault();direction(-1)}if(e.key==='ArrowRight'){e.preventDefault();direction(1)}});
// Two original poses, integer-pixel translations, and a rest between short bursts.
function poseAt(elapsed){const t=elapsed%4800;return t<180?0:t<390?1:t<560?0:t<800?1:t<1000?0:t<1250?1:0}
setInterval(()=>{if(document.hidden)return;const now=performance.now(),active=animate||now<replayUntil;const pose=active?poseAt(now-started):0;frame=pose;paint($('main-sprite'),selected,facing,pose);$('main-sprite').style.transform=active&&pose?'translateY(-3px)':'none';$('frame-status').textContent=`0${pose+1} / 02`;if(hover){const v=views.get(hover),p=records.find(x=>x.id===hover);if(v)paint(v.canvas,p,'front',animate?poseAt(now-started):0)}},90);
$('total').textContent=records.length;$('footer-count').textContent=`${records.length} Pokémon · ${new Set(records.map(p=>p.family)).size} evolution families`;
renderGrid();select(selected);records.forEach(load);
})();
