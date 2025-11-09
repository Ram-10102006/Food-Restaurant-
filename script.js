const MENU = [
  {id:1,cat:'Starters',name:'Guntur Chicken Fry',price:240,desc:'Spicy chicken fry with Guntur chilies',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSc0jUAGDTGwGnO7lZYW2Z1JfHEZwEzxL34A&s'},
  {id:2,cat:'Starters',name:'Royyala Vepudu',price:320,desc:'Prawn fry cooked in Andhra-style masala',img:'https://vivahabhojanambu.co.in/wp-content/uploads/2021/02/Rajahmundry-Royyala-Vepudu-2.jpg'},
  {id:3,cat:'Starters',name:'Kodi Vepudu',price:230,desc:'Chicken pieces sautéed with curry leaves and spices',img:'https://i.pinimg.com/736x/eb/7b/07/eb7b077e765de15dc0b9f32509c099a8.jpg'},
  {id:4,cat:'Starters',name:'Mirapakaya Bajji',price:120,desc:'Green chili fritters',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_79DyJ-sCYsJ0kl3HIQWgl1QMDsDVS5rVBg&s'},
  {id:5,cat:'Starters',name:'Punugulu',price:100,desc:'Crispy urad dal fritters served with chutney',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7fSIaePGYPGW3-8YMjDyOtFjNOZoz5xIOg&s'},
  
  {id:6,cat:'Main Course',name:'Andhra Chicken Curry',price:260,desc:'Traditional spicy chicken curry',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcXVaujM6cHBVxD-RfKSX0_DBZApJugtdAN18Y1XVZ2G-Cq9K0LjZuk9TLtOgPA4RqS0&usqp=CAU'},
  {id:7,cat:'Main Course',name:'Gongura Mutton Curry',price:320,desc:'Mutton cooked with sorrel leaves (gongura)',img:'https://img.freepik.com/premium-photo/andhra-pradesh-gongura-mutton-tangy-leafy-curry_960396-1016669.jpg?w=360'},
  {id:8,cat:'Main Course',name:'Royyala Iguru',price:350,desc:'Thick prawn gravy with Andhra spices',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAhnc78jf5K3w5hGIXPdgu2vd-c_B1xQ68yQ&s'},
  {id:9,cat:'Main Course',name:'Gutti Vankaya Curry',price:200,desc:'Stuffed brinjal curry with peanuts and tamarind',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8M9v4HAnhV6Wg7XerBqaMnj-8PS9e_B06Q&s'},
  {id:10,cat:'Main Course',name:'Pappu (Dal)',price:160,desc:'Lentils cooked with spinach/tomato',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1wsP5JYyKXx1rkRFrgN6lWts-AMAYDu2FQ&s'},

  {id:11,cat:'Rice & Biryanis',name:'Andhra Chicken Biryani',price:280,desc:'Spicy biryani with chicken and curry leaves',img:'https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4='},
  {id:12,cat:'Rice & Biryanis',name:'Mutton Biryani',price:320,desc:'Layered rice and mutton with rich spices',img:'https://media.istockphoto.com/id/980037112/photo/gosht-or-lamb-biryani-prepared-in-basmati-rice-served-with-yogurt-dip-in-terracotta-bowl.jpg?s=612x612&w=0&k=20&c=LY0r5y0tij9MHz2tg802UQGHk-VPUNUYj6x6qGm2bsU='},
  {id:13,cat:'Rice & Biryanis',name:'Veg Biryani',price:220,desc:'Fragrant rice cooked with vegetables',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HHw5Q-fZv52oTxWacSNfFFnxwhHfweb6TQ&s'},
  {id:14,cat:'Rice & Biryanis',name:'Curd Rice',price:120,desc:'Yogurt rice with mustard & curry leaves',img:'https://i.ytimg.com/vi/l0oYsZHyzhA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAagHpn9LJTj6OpRioxRLqz3B899g'},
  {id:15,cat:'Rice & Biryanis',name:'Pulihora (Tamarind Rice)',price:100,desc:'Tangy rice with tamarind & peanuts',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDsWzRFTyzxpOIFnEQHui9Uko1YZPLrm5fkg'},

  {id:16,cat:'Side Dishes',name:'Rasam',price:80,desc:'Spicy tamarind soup',img:'https://images.jdmagicbox.com/quickquotes/listicle/listicle_1712308372973_d6qhr_1000x473.jpg'},
  {id:17,cat:'Side Dishes',name:'Sambar',price:100,desc:'Lentil and tamarind soup',img:'https://vismaifood.com/storage/app/uploads/public/06c/a03/a8b/thumb__700_0_0_0_auto.jpg'},
  {id:18,cat:'Side Dishes',name:'Appadam (Papad)',price:40,desc:'Crispy lentil wafers',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIjv2Y9pyRYsvpuwQI4DTQ3Qc4YfqGpzXYQ&s'},
  {id:19,cat:'Side Dishes',name:'Pickles (Avakaya)',price:60,desc:'Spicy mango pickles',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDBFSwZ08p_t3NV8bujAvpdR-_AQmErFJ6w&s'},

  {id:20,cat:'Desserts & Beverages',name:'Payasam',price:120,desc:'Sweet rice pudding',img:'https://t3.ftcdn.net/jpg/00/55/42/36/360_F_55423607_Z2RxYrfgC52y0i2hXbuLROUVuX49xwBM.jpg'},
  {id:21,cat:'Desserts & Beverages',name:'Bobbatlu (Puran Poli)',price:100,desc:'Sweet stuffed flatbread',img:'https://www.shutterstock.com/image-photo/puran-poli-known-holige-indian-600nw-781347769.jpg'},
  {id:22,cat:'Desserts & Beverages',name:'Buttermilk',price:60,desc:'Refreshing spiced buttermilk',img:'https://media.istockphoto.com/id/1147733808/photo/spiced-buttermilk-indian-traditional-summer-drink.jpg?s=612x612&w=0&k=20&c=oDdoklsqPdPjTnMnWkPeGFRHacXNzFcKtgkcig9r300='},
  {id:23,cat:'Desserts & Beverages',name:'Filter Coffee',price:80,desc:'Strong South Indian coffee',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP1j932MPIEVgXkH0uvDFfjzR185rfC4zWIolJaDg9_tEL4_7fh0VpXnDONsNoby61GS0&usqp=CAU'}
];

const menuRoot = document.getElementById('menuRoot');
let currentItem = null, qty = 1, cart = [];

function renderMenu(filter='all', search='') {
  menuRoot.innerHTML = '';
  const cats = [...new Set(MENU.map(i => i.cat))];
  cats.forEach(cat => {
    if(filter !== 'all' && filter !== cat) return;
    const catItems = MENU.filter(i=>i.cat===cat && i.name.toLowerCase().includes(search.toLowerCase()));
    if(catItems.length===0) return;
    const catDiv = document.createElement('div'); catDiv.className='category';
    catDiv.innerHTML=`<h3>🍽️ ${cat}</h3><div class="items"></div>`;
    const itemsDiv = catDiv.querySelector('.items');
    catItems.forEach(it=>{
      const div=document.createElement('div'); div.className='item';
      div.innerHTML=`<img src="${it.img}" alt="${it.name}"><div class="meta"><div class="name">${it.name}</div><div class="price">₹${it.price}</div></div>`;
      div.onclick = ()=> showModal(it);
      itemsDiv.appendChild(div);
    });
    menuRoot.appendChild(catDiv);
  });
}
renderMenu();

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const qtyVal = document.getElementById('qtyVal');

function showModal(item){
  currentItem = item;
  modalImg.src=item.img;
  modalName.textContent=item.name;
  modalDesc.textContent=item.desc;
  modalPrice.textContent='₹'+item.price;
  qty=1; qtyVal.textContent=qty;
  modal.style.display='flex';
}

document.getElementById('modalClose').onclick = ()=> modal.style.display='none';
modal.onclick = (e)=>{if(e.target===modal) modal.style.display='none';}

document.getElementById('incQty').onclick = ()=>{qty++; qtyVal.textContent=qty;}
document.getElementById('decQty').onclick = ()=>{if(qty>1){qty--; qtyVal.textContent=qty;}}

document.getElementById('addToCart').onclick = ()=>{
  const exist = cart.find(i=>i.id===currentItem.id);
  if(exist){exist.qty+=qty;} else {cart.push({...currentItem, qty});}
  modal.style.display='none';
  renderCart();
};

function renderCart(){
  const root = document.getElementById('cart-items'); root.innerHTML='';
  let subtotal=0;
  cart.forEach(it=>{
    subtotal+=it.price*it.qty;
    const div=document.createElement('div'); div.className='cart-item';
    div.innerHTML=`<div>${it.name} x${it.qty}</div><div>₹${it.price*it.qty}</div>`;
    root.appendChild(div);
  });
  const tax = Math.round(subtotal*0.05);
  document.getElementById('subtotal').textContent='₹'+subtotal;
  document.getElementById('tax').textContent='₹'+tax;
  document.getElementById('total').textContent='₹'+(subtotal+tax);
}

document.querySelectorAll('.chip').forEach(ch=>{
  ch.onclick=()=>{
    document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
    ch.classList.add('active');
    renderMenu(ch.dataset.cat);
  };
});

document.getElementById('search').addEventListener('input',(e)=>{
  renderMenu(document.querySelector('.chip.active').dataset.cat, e.target.value);
});