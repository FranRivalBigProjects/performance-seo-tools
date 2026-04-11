const res=document.getElementById('res');

function run(){
  const html=document.getElementById('input').value||'';
  const val=parseFloat(document.getElementById('value').value||'0');

  let out='Analysis:\n';

  if(document.title.toLowerCase().includes('core')){
    out += '- Estimated CWV: LCP ~2.5s, CLS ~0.1, INP ~200ms\n';
  }

  if(document.title.toLowerCase().includes('lcp')){
    const imgs = (html.match(/<img/g)||[]).length;
    out += '- Potential LCP elements: ' + imgs + ' images\n';
  }

  if(document.title.toLowerCase().includes('render')){
    const scripts = (html.match(/<script/g)||[]).length;
    if(scripts > 5) out += '- Render blocking scripts detected\n';
  }

  if(document.title.toLowerCase().includes('priority')){
    out += '- Suggest prioritizing above-the-fold assets\n';
  }

  if(val){
    out += '- Input metric: ' + val + '\n';
  }

  res.innerText = out;
}