const words=[
["प्रेम","prem","noun","love, affection","किसी के प्रति मन में होने वाला गहरा स्नेह और अपनापन।","प्रेम में सम्मान और विश्वास दोनों ज़रूरी हैं।","Respect and trust are both important in love."],
["आशा","aasha","noun","hope, expectation","किसी अच्छी बात के होने का विश्वास या इच्छा।","कठिन समय में भी आशा बनाए रखो।","Keep hope alive even in difficult times."],
["साहस","saahas","noun","courage, bravery","डर या कठिनाई के बावजूद आगे बढ़ने की शक्ति।","उसने साहस के साथ सच कहा।","They spoke the truth with courage."],
["सुंदर","sundar","adjective","beautiful, lovely","जो मन को अच्छा लगे।","यह एक सुंदर सुबह है।","It is a beautiful morning."],
["मित्र","mitra","noun","friend, companion","जिसके साथ स्नेह और विश्वास का संबंध हो।","सच्चा मित्र मुश्किल समय में साथ देता है।","A true friend stays in difficult times."],
["ज्ञान","gyaan","noun","knowledge, wisdom","सीखने और अनुभव से प्राप्त समझ।","ज्ञान बाँटने से बढ़ता है।","Knowledge grows when shared."],
["शांति","shaanti","noun","peace, calm","मन या वातावरण की शांत अवस्था।","कुछ देर मौन रहने से शांति मिलती है।","A little silence can bring peace."],
["विश्वास","vishvaas","noun","trust, belief","किसी व्यक्ति या बात पर भरोसा।","विश्वास किसी भी रिश्ते की नींव है।","Trust is the foundation of every relationship."],
["स्वतंत्र","svatantra","adjective","free, independent","जो अपने निर्णय स्वयं लेने में सक्षम हो।","हर व्यक्ति स्वतंत्र विचार रख सकता है।","Everyone can hold independent thoughts."],
["प्रकृति","prakriti","noun","nature","पेड़-पौधों, जीवों, जल, वायु और धरती का संसार।","हमें प्रकृति की रक्षा करनी चाहिए।","We should protect nature."],
["उत्साह","utsaah","noun","enthusiasm, zeal","किसी काम को करने की उमंग और ऊर्जा।","बच्चों ने उत्साह से भाग लिया।","The children participated enthusiastically."],
["करुणा","karuna","noun","compassion","दूसरों के दुख को समझकर सहायता करने की भावना।","करुणा हमें एक-दूसरे के करीब लाती है।","Compassion brings us closer."],
["सपना","sapna","noun","dream","नींद में दृश्य या मन की आकांक्षा।","उसका सपना शिक्षक बनने का है।","Their dream is to become a teacher."],
["समय","samay","noun","time","घटनाओं के घटित होने की निरंतर अवधि।","समय का सदुपयोग करना सीखें।","Learn to use time wisely."],
["परिवार","parivaar","noun","family","आपस में संबंध रखने वाले लोगों का समूह।","मेरा परिवार मेरा साथ देता है।","My family supports me."],
["कहानी","kahaani","noun","story, tale","घटनाओं या कल्पना का क्रमबद्ध वर्णन।","दादी ने एक रोचक कहानी सुनाई।","Grandmother told an interesting story."],
["संगीत","sangeet","noun","music","स्वर और लय से बनी कला।","संगीत सुनकर उसका मन प्रसन्न हो गया।","Music made them happy."],
["मेहनत","mehnat","noun","hard work, effort","किसी उद्देश्य के लिए किया गया परिश्रम।","मेहनत का फल मीठा होता है।","The fruit of hard work is sweet."],
["मुस्कान","muskaan","noun","smile","प्रसन्नता व्यक्त करने के लिए होंठों का हल्का खुलना।","उसकी मुस्कान सबका दिन बना देती है।","Their smile makes everyone's day."],
["यात्रा","yaatra","noun","journey, travel","एक स्थान से दूसरे स्थान तक जाने की प्रक्रिया।","हमारी यात्रा यादगार रही।","Our journey was memorable."],
["सत्य","satya","noun","truth","जो वास्तविक और तथ्य के अनुरूप हो।","सत्य बोलना अच्छी आदत है।","Speaking the truth is a good habit."],
["आज़ादी","aazaadi","noun","freedom, liberty","बंधन या नियंत्रण से मुक्त होने की अवस्था।","आज़ादी के साथ ज़िम्मेदारी भी आती है।","Freedom comes with responsibility."],
["विश्व","vishva","noun","world, universe","समस्त पृथ्वी या संपूर्ण ब्रह्मांड।","विश्व अनेक संस्कृतियों से भरा है।","The world is full of cultures."],
["प्रयास","prayaas","noun","attempt, effort","किसी काम को पूरा करने के लिए की गई कोशिश।","एक और प्रयास तुम्हें मंज़िल तक पहुँचा सकता है।","One more attempt may reach your goal."],
["सफलता","safalta","noun","success","लक्ष्य या उद्देश्य प्राप्त करने की अवस्था।","सफलता के लिए धैर्य आवश्यक है।","Patience is essential for success."],
["विफलता","vifalta","noun","failure","किसी प्रयास में अपेक्षित परिणाम न मिलना।","विफलता से भी सीखा जा सकता है।","We can learn from failure too."],
["दयालु","dayaalu","adjective","kind, compassionate","जिसके स्वभाव में दया और दूसरों की चिंता हो।","वह सभी के प्रति दयालु है।","They are kind to everyone."],
["ईमानदार","imaandaar","adjective","honest, truthful","जो सच बोलता हो और छल न करता हो।","ईमानदार बातचीत भरोसा बढ़ाती है।","Honest conversation builds trust."],
["सरल","saral","adjective","simple, easy","जिसे समझना या करना कठिन न हो।","उसने बात सरल भाषा में समझाई।","They explained it in simple language."],
["कठिन","kathin","adjective","difficult, hard","जिसे करना या समझना आसान न हो।","यह सवाल कठिन है, असंभव नहीं।","This question is difficult, not impossible."],
["तेज़","tez","adjective","fast, sharp","जो गति या तीक्ष्णता में अधिक हो।","आज हवा बहुत तेज़ चल रही है।","The wind is blowing fast today."],
["धीरे","dheere","adverb","slowly, gently","कम गति या नरम ढंग से।","कृपया धीरे बोलिए।","Please speak slowly."],
["सीखना","seekhna","verb","to learn","अभ्यास या अनुभव से नया ज्ञान पाना।","नई भाषा सीखना रोचक है।","Learning a new language is interesting."],
["समझना","samajhna","verb","to understand","किसी बात का अर्थ या कारण जानना।","पहले प्रश्न को ध्यान से समझो।","Understand the question carefully first."],
["बनाना","banana","verb","to make, create","किसी वस्तु या विचार को रूप देना।","वे मिट्टी से खिलौने बनाते हैं।","They make toys from clay."],
["बोलना","bolna","verb","to speak, say","शब्दों से विचार व्यक्त करना।","स्पष्ट और विनम्र बोलना अच्छा है।","It is good to speak clearly and politely."],
["सुनना","sunna","verb","to listen, hear","ध्वनि ग्रहण करना या ध्यान देना।","दूसरों की बात ध्यान से सुनें।","Listen carefully to others."],
["चलना","chalna","verb","to walk, move","पैरों से आगे बढ़ना या गति करना।","हम शाम को पार्क में चलते हैं।","We walk in the park in the evening."],
["लिखना","likhna","verb","to write","अक्षरों से विचार दर्ज करना।","वह रोज़ डायरी लिखती है।","She writes a diary every day."],
["पढ़ना","padhna","verb","to read, study","लिखे शब्दों को समझना या अध्ययन करना।","मुझे इतिहास पढ़ना पसंद है।","I enjoy studying history."],
["हँसना","hansna","verb","to laugh","हँसी से आनंद व्यक्त करना।","दोस्तों के साथ हँसना अच्छा लगता है।","It feels good to laugh with friends."],
["सोचना","sochna","verb","to think, consider","मन में किसी विषय पर विचार करना।","उत्तर देने से पहले सोचो।","Think before answering."],
["मदद","madad","noun","help, assistance","किसी की आवश्यकता में दिया गया सहयोग।","मदद माँगना कमज़ोरी नहीं है।","Asking for help is not weakness."],
["उम्मीद","ummeed","noun","hope, expectation","अच्छे परिणाम की आशा या भरोसा।","मुझे तुमसे बहुत उम्मीद है।","I have high hopes for you."],
["खुशी","khushi","noun","happiness, joy","मन की प्रसन्न और आनंदित अवस्था।","छोटी बातों में भी खुशी ढूँढो।","Find joy in small things."],
["ज़िम्मेदारी","zimmedaari","noun","responsibility, duty","किसी काम या कर्तव्य को निभाने का दायित्व।","समय पर पहुँचना मेरी ज़िम्मेदारी है।","Arriving on time is my responsibility."],
["धैर्य","dhairya","noun","patience, composure","कठिन परिस्थिति में शांत रहने का गुण।","धैर्य से काम लेना सीखो।","Learn to act with patience."],
["उदार","udaar","adjective","generous, liberal","जो खुले मन से दूसरों की भलाई करे।","उसने उदार मन से दान दिया।","They donated with a generous heart."],
["जिज्ञासा","jigyasa","noun","curiosity","कुछ नया जानने या समझने की इच्छा।","जिज्ञासा सीखने की शुरुआत है।","Curiosity is the beginning of learning."],
["अनुभव","anubhav","noun","experience","जीवन के अनुभवों से प्राप्त समझ।","अनुभव समय के साथ आता है।","Experience comes with time."],
["प्रकाश","prakaash","noun","light, illumination","वह ऊर्जा जिसके कारण वस्तुएँ दिखाई देती हैं।","खिड़की से कमरे में प्रकाश आया।","Light entered through the window."],
["आकाश","aakaash","noun","sky, heavens","धरती के ऊपर दिखाई देने वाला विस्तृत क्षेत्र।","आज आकाश साफ़ है।","The sky is clear today."],
["मिट्टी","mitti","noun","soil, earth","धरती की ऊपरी परत जिसमें पौधे उगते हैं।","बारिश के बाद मिट्टी की खुशबू आती है।","The soil smells lovely after rain."],
["मिलना","milna","verb","to meet, find, receive","किसी से भेंट होना या वस्तु प्राप्त होना।","कल हम पुस्तकालय में मिलेंगे।","We will meet at the library tomorrow."],
["आभार","aabhaar","noun","gratitude, thanks","किसी के उपकार के लिए धन्यवाद की भावना।","आपकी मदद के लिए मेरा आभार।","I am grateful for your help."]
].map((x,i)=>({id:i+1,hi:x[0],roman:x[1],pos:x[2],meaning:x[3],definition:x[4],example:x[5],translation:x[6]}));
const grid=document.getElementById("wordGrid"),search=document.getElementById("searchInput"),count=document.getElementById("resultCount"),heading=document.getElementById("listHeading"),empty=document.getElementById("emptyState"),dialog=document.getElementById("wordDialog"),dialogContent=document.getElementById("dialogContent");
let filter="all",savedOnly=false,selected=null;\nfunction loadSaved(){try{const value=JSON.parse(localStorage.getItem("garuda-saved")||"[]");return Array.isArray(value)?value.filter(Number.isInteger):[]}catch{return[]}}\nconst saved=new Set(loadSaved());\nfunction persistSaved(){try{localStorage.setItem("garuda-saved",JSON.stringify([...saved]));return true}catch{return false}}
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function render(){const q=search.value.trim().toLocaleLowerCase();const found=words.filter(w=>[w.hi,w.roman,w.meaning,w.definition,w.example,w.translation].join(" ").toLocaleLowerCase().includes(q)&&(filter==="all"||w.pos===filter)&&(!savedOnly||saved.has(w.id)));count.textContent=found.length+" "+(found.length===1?"word":"words");heading.textContent=savedOnly?"Saved words":q?"Search results":"Explore words";grid.innerHTML=found.map(w=>`<button class="word-card" data-id="${w.id}" type="button"><div class="card-top"><div><div class="word-hindi" lang="hi">${esc(w.hi)}</div><div class="word-roman">${esc(w.roman)}</div></div><span class="pos">${esc(w.pos)}</span></div><p class="word-meaning">${esc(w.meaning)}</p><p class="word-short" lang="hi">${esc(w.definition)}</p><span class="card-arrow">↗</span></button>`).join("");empty.hidden=found.length!==0;grid.hidden=found.length===0}
function openWord(id){selected=words.find(w=>w.id===id);if(!selected)return;const w=selected;dialogContent.innerHTML=`<p class="eyebrow">WORD NO. ${String(w.id).padStart(2,"0")} · ${esc(w.pos.toUpperCase())}</p><h2 class="detail-word" lang="hi">${esc(w.hi)}</h2><p class="detail-roman">${esc(w.roman)}</p><p class="detail-meaning">${esc(w.meaning)}</p><p class="detail-definition" lang="hi">${esc(w.definition)}</p><p class="detail-label">IN A SENTENCE</p><div class="example" lang="hi">${esc(w.example)}<small>${esc(w.translation)}</small></div><button class="save-word ${saved.has(w.id)?"saved":""}" id="saveWord">${saved.has(w.id)?"♥ Saved":"♡ Save word"}</button>`;dialog.showModal();document.getElementById("saveWord").addEventListener("click",()=>{saved.has(w.id)?saved.delete(w.id):saved.add(w.id);persistSaved();document.getElementById("savedCount").textContent=saved.size;document.getElementById("saveWord").classList.toggle("saved",saved.has(w.id));document.getElementById("saveWord").textContent=saved.has(w.id)?"♥ Saved":"♡ Save word";render()})}
grid.addEventListener("click",e=>{const card=e.target.closest("[data-id]");if(card)openWord(Number(card.dataset.id))});search.addEventListener("input",render);
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelector(".filter.active").classList.remove("active");btn.classList.add("active");filter=btn.dataset.filter;render()}));
document.querySelectorAll(".hint-word").forEach(btn=>btn.addEventListener("click",()=>{search.value=btn.dataset.query;savedOnly=false;render();search.focus()}));
document.getElementById("savedToggle").addEventListener("click",e=>{savedOnly=!savedOnly;e.currentTarget.style.background=savedOnly?"#e8ede4":"transparent";render()});
document.getElementById("clearSearch").addEventListener("click",()=>{search.value="";filter="all";savedOnly=false;document.querySelector(".filter.active").classList.remove("active");document.querySelector('[data-filter="all"]').classList.add("active");render()});
document.getElementById("dialogClose").addEventListener("click",()=>dialog.close());dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();search.focus()}});
document.getElementById("savedCount").textContent=saved.size;render();