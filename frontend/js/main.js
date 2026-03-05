// Butta Bomma Sarees & Collection — Main JavaScript


// ── PRODUCTS DATA ──
const PRODUCTS = [
  {id:1,name:"Kanjivaram Silk Saree",cat:"Sarees",color:"p1",emoji:"🥻",price:15999,oldPrice:19999,desc:"Pure Kanjivaram silk with traditional gold zari border. Hand-woven in Kanchipuram. Perfect for weddings and festivals.",badge:"Bestseller",rating:4.9,reviews:142,occasion:"Bridal",fabric:"Kanjivaram Silk",sizes:["Free Size"],colors:["Deep Maroon","Royal Blue","Forest Green"],features:["100% Pure Silk","Handwoven Zari","Blouse piece included","Certificate of Authenticity"]},
  {id:2,name:"Bridal Lehenga Set",cat:"Lehengas",color:"p2",emoji:"👗",price:29999,oldPrice:37999,desc:"Stunning bridal lehenga with intricate thread embroidery and mirror work. Comes with dupatta and blouse.",badge:"New",rating:4.8,reviews:87,occasion:"Bridal",fabric:"Georgette",sizes:["S","M","L","XL","XXL"],colors:["Ruby Red","Blush Pink","Ivory"],features:["Heavy Embroidery","Mirror Work","3-piece set","Custom sizing available"]},
  {id:3,name:"Chanderi Salwar Suit",cat:"Salwar Suits",color:"p3",emoji:"🌸",price:10999,oldPrice:null,desc:"Elegant Chanderi silk salwar suit with delicate floral prints. Ideal for office wear and casual occasions.",badge:"New",rating:4.7,reviews:63,occasion:"Casual",fabric:"Chanderi Silk",sizes:["S","M","L","XL"],colors:["Sage Green","Powder Blue","Dusty Rose"],features:["Unstitched fabric","Dupatta included","Easy care","Lightweight"]},
  {id:4,name:"Banarasi Silk Dupatta",cat:"Dupattas",color:"p4",emoji:"🎀",price:5499,oldPrice:6999,desc:"Luxurious Banarasi silk dupatta with gold and silver zari motifs. A versatile statement piece.",badge:"Sale",rating:4.8,reviews:98,occasion:"Festive",fabric:"Banarasi Silk",sizes:["Free Size"],colors:["Royal Purple","Deep Maroon","Peacock Blue"],features:["Pure Banarasi silk","Zari border","Hand-finished edges","Traditional motifs"]},
  {id:5,name:"Zari Embroidered Blouse",cat:"Blouses",color:"p5",emoji:"✨",price:6699,oldPrice:null,desc:"Intricately embroidered blouse with heavy zari work. Perfect to pair with any silk saree.",badge:"New",rating:4.6,reviews:44,occasion:"Bridal",fabric:"Silk with Zari",sizes:["32","34","36","38","40"],colors:["Gold","Silver","Maroon"],features:["Heavy zari work","Backless design","Custom sizing","Hand embroidered"]},
  {id:6,name:"Pochampally Ikat Saree",cat:"Sarees",color:"p6",emoji:"🥻",price:12999,oldPrice:16499,desc:"Authentic Pochampally ikat weave with geometric patterns. A UNESCO-recognized traditional textile from Telangana.",badge:"Bestseller",rating:4.9,reviews:110,occasion:"Casual",fabric:"Cotton Silk",sizes:["Free Size"],colors:["Rust Orange","Indigo Blue","Forest Green"],features:["Authentic ikat weave","Natural dyes","Blouse piece included","UNESCO heritage textile"]},
  {id:7,name:"Designer Anarkali Suit",cat:"Salwar Suits",color:"p7",emoji:"🌸",price:16999,oldPrice:21999,desc:"Floor-length Anarkali suit with floral embroidery and contrast dupatta. Perfect for festive occasions.",badge:"Hot",rating:4.7,reviews:76,occasion:"Festive",fabric:"Georgette",sizes:["S","M","L","XL","XXL"],colors:["Mint Green","Coral","Lavender"],features:["Floor length","Heavy embroidery","Contrast dupatta","Fully stitched"]},
  {id:8,name:"Uppada Silk Saree",cat:"Sarees",color:"p8",emoji:"🥻",price:18999,oldPrice:23499,desc:"Fine Uppada jamdani silk saree from Andhra Pradesh, known for its feather-light texture and intricate jamdani motifs.",badge:"New",rating:5.0,reviews:58,occasion:"Bridal",fabric:"Uppada Silk",sizes:["Free Size"],colors:["Ivory & Gold","Turquoise & Silver","Pink & Gold"],features:["Featherlight silk","Jamdani motifs","Handwoven","Blouse piece included"]},
  {id:9,name:"Lehenga Skirt (Heavy Work)",cat:"Lehengas",color:"p9",emoji:"👗",price:23499,oldPrice:29499,desc:"Heavily embellished lehenga skirt with sequin and threadwork. Ideal for sangeet and reception events.",badge:"Hot",rating:4.8,reviews:92,occasion:"Party Wear",fabric:"Velvet with Embroidery",sizes:["S","M","L","XL"],colors:["Navy Blue","Bottle Green","Deep Maroon"],features:["Sequin embroidery","Thread work","Can-can lining","Belt included"]},
  {id:10,name:"Silk Cotton Saree",cat:"Sarees",color:"p10",emoji:"🥻",price:7999,oldPrice:null,desc:"Beautiful silk-cotton blend saree, perfect for daily wear yet elegant enough for office and casual outings.",badge:"New",rating:4.6,reviews:81,occasion:"Casual",fabric:"Silk Cotton",sizes:["Free Size"],colors:["Plum","Teal","Burnt Orange"],features:["Silk-cotton blend","Easy drape","Blouse piece included","Washable"]},
  {id:11,name:"Embroidered Phulkari Dupatta",cat:"Dupattas",color:"p11",emoji:"🎀",price:4599,oldPrice:5899,desc:"Vibrant Phulkari dupatta with traditional floral embroidery from Punjab. Adds a pop of color to any outfit.",badge:"Sale",rating:4.7,reviews:67,occasion:"Festive",fabric:"Cotton with Embroidery",sizes:["Free Size"],colors:["Bright Orange","Sky Blue","Lemon Yellow"],features:["Phulkari embroidery","Cotton base","Vibrant colors","Hand embroidered"]},
  {id:12,name:"Organza Silk Blouse",cat:"Blouses",color:"p12",emoji:"✨",price:7499,oldPrice:null,desc:"Sheer organza blouse with delicate floral embroidery. A modern take on the traditional blouse design.",badge:"New",rating:4.5,reviews:38,occasion:"Party Wear",fabric:"Organza Silk",sizes:["32","34","36","38","40","42"],colors:["Blush Pink","Ivory","Sky Blue"],features:["Organza fabric","Floral embroidery","Hook closure","Sheer detailing"]},
];

// ── STATE ──
const S = {
  user: null,
  cart: [],   // {product, qty, size, color}
  wish: new Set(),
  shopFilter: '',
};

// ── PAGE ROUTER ──
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  window.scrollTo(0,0);
  if(name==='home') renderHomeProd();
  if(name==='shop') renderShop('');
  if(name==='cart') renderCart();
  if(name==='wishlist') renderWishlist();
}

// ── RENDER PRODUCT CARD ──
function renderPCard(p, showRemoveWish=false) {
  const inWish = S.wish.has(p.id);
  const discPct = p.oldPrice ? Math.round((1 - p.price/p.oldPrice)*100) : null;
  return `
    <div class="pcard" onclick="showDetail(${p.id})">
      <div class="pthumb ${p.color}">
        ${p.emoji}
        <span class="pbadge ${p.badge==='Sale'?'pb-sale':p.badge==='Hot'?'pb-hot':'pb-new'}">${p.badge}</span>
        <span class="pwish ${inWish?'on':''}" onclick="toggleWish(event,${p.id})">${inWish?'♥':'♡'}</span>
      </div>
      <div class="pbody">
        <div class="pcat">${p.cat}</div>
        <div class="ptitle">${p.name}</div>
        <div class="pdesc-short">${p.desc.slice(0,60)}…</div>
        <div class="pfooter">
          <div class="pprice">₹${p.price.toLocaleString("en-IN")}${p.oldPrice?`<span>₹${p.oldPrice.toLocaleString("en-IN")}</span>`:''}</div>
          <button class="padd" onclick="addToCart(event,${p.id})">Add to Cart</button>
        </div>
      </div>
    </div>`;
}

// ── HOME PRODUCTS ──
function renderHomeProd() {
  document.getElementById('home-prod-grid').innerHTML = PRODUCTS.slice(0,8).map(p => renderPCard(p)).join('');
}

// ── SHOP ──
let shopTab = '';
function renderShop(filter) {
  shopTab = filter;
  let list = filter ? PRODUCTS.filter(p => p.cat === filter) : [...PRODUCTS];
  document.getElementById('shop-grid').innerHTML = list.map(p => renderPCard(p)).join('');
  document.getElementById('shop-count').textContent = `Showing ${list.length} of ${PRODUCTS.length} products`;
}
function setTab(btn, cat) {
  document.querySelectorAll('.ctab').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  renderShop(cat);
}
function filterShop(cat) {
  showPage('shop');
  setTimeout(() => {
    document.querySelectorAll('.ctab').forEach(b => { b.classList.remove('on'); if(b.textContent===cat) b.classList.add('on'); });
    renderShop(cat);
  }, 60);
}
function applyFilters() {
  const cats = [...document.querySelectorAll('.cat-filter:checked')].map(c => c.value);
  const minP = parseFloat(document.getElementById('min-price').value)||0;
  const maxP = parseFloat(document.getElementById('max-price').value)||9999;
  let list = PRODUCTS.filter(p => {
    if(cats.length && !cats.includes(p.cat)) return false;
    if(p.price < minP || p.price > maxP) return false;
    return true;
  });
  document.getElementById('shop-grid').innerHTML = list.map(p => renderPCard(p)).join('');
  document.getElementById('shop-count').textContent = `Showing ${list.length} of ${PRODUCTS.length} products`;
}
function clearFilters() {
  document.querySelectorAll('.cat-filter').forEach(c => c.checked=false);
  document.getElementById('min-price').value='';
  document.getElementById('max-price').value='';
  renderShop('');
  document.querySelectorAll('.ctab').forEach((b,i) => { b.classList.remove('on'); if(i===0) b.classList.add('on'); });
}
function sortShop(val) {
  let list = shopTab ? PRODUCTS.filter(p => p.cat===shopTab) : [...PRODUCTS];
  if(val==='price-asc') list.sort((a,b)=>a.price-b.price);
  if(val==='price-desc') list.sort((a,b)=>b.price-a.price);
  if(val==='newest') list.sort((a,b)=>b.id-a.id);
  if(val==='rating') list.sort((a,b)=>b.rating-a.rating);
  document.getElementById('shop-grid').innerHTML = list.map(p => renderPCard(p)).join('');
}

// ── DETAIL ──
let detailQty = 1;
let selSize = '', selColor = '';
function showDetail(id) {
  const p = PRODUCTS.find(x => x.id===id);
  if(!p) return;
  detailQty = 1; selSize = p.sizes[0]; selColor = p.colors[0];
  const discPct = p.oldPrice ? Math.round((1-p.price/p.oldPrice)*100) : null;
  document.getElementById('detail-content').innerHTML = `
    <div style="background:var(--maroon);padding:16px 40px;"><button class="d-back" onclick="history.back()||showPage('shop')" style="color:var(--gold-light);">← Back to Shop</button></div>
    <div class="detail-wrap">
      <div>
        <div class="d-thumb ${p.color}">${p.emoji}
          <span class="pwish ${S.wish.has(p.id)?'on':''}" style="position:absolute;top:14px;right:14px;width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:1.1rem;cursor:pointer;backdrop-filter:blur(4px);" onclick="toggleWish(event,${p.id})">${S.wish.has(p.id)?'♥':'♡'}</span>
        </div>
        <div class="d-thumbs">
          ${['🥻','🌸','✨','🎀'].map((e,i) => `<div class="d-mini ${p.color} ${i===0?'on':''}">${e}</div>`).join('')}
        </div>
      </div>
      <div>
        <div class="d-cat">${p.cat}</div>
        <div class="d-title">${p.name}</div>
        <div class="d-rating"><span class="d-stars">★★★★★</span><span class="d-rcount">${p.rating} (${p.reviews} reviews)</span></div>
        <div class="d-price">₹${p.price.toLocaleString("en-IN")}${p.oldPrice?`<span>₹${p.oldPrice.toLocaleString("en-IN")}</span>`:''}</div>
        ${discPct?`<div class="d-save-tag">You save ${discPct}%</div>`:''}
        <p class="d-desc">${p.desc}</p>
        <div class="d-opts">
          <label>Color</label>
          <div class="d-opt-row">${p.colors.map((c,i) => `<span class="d-opt ${i===0?'on':''}" onclick="selOpt(this,'color','${c}',this.parentElement)">${c}</span>`).join('')}</div>
        </div>
        ${p.sizes.length>1?`<div class="d-opts">
          <label>Size</label>
          <div class="d-opt-row">${p.sizes.map((s,i) => `<span class="d-opt ${i===0?'on':''}" onclick="selOpt(this,'size','${s}',this.parentElement)">${s}</span>`).join('')}</div>
        </div>`:''}
        <div class="d-qty">
          <label>Quantity</label>
          <button class="qty-btn" onclick="changeQty(-1)">−</button>
          <div class="qty-num" id="d-qty-num">1</div>
          <button class="qty-btn" onclick="changeQty(1)">+</button>
        </div>
        <div class="d-actions">
          <button class="btn-cart" onclick="addToCartDetail(${p.id})">🛍️ Add to Cart</button>
          <button class="btn-wish-d" onclick="toggleWishBtn(${p.id},this)">${S.wish.has(p.id)?'♥':'♡'}</button>
        </div>
        <div class="d-features">${p.features.map(f=>`<div class="d-feat">${f}</div>`).join('')}</div>
        <div style="margin-top:20px;padding:16px;background:var(--gold-pale);border-radius:11px;font-size:.83rem;color:var(--muted);">
          🚚 Free shipping on orders over ₹6,299 &nbsp;·&nbsp; 🔄 Easy 30-day returns &nbsp;·&nbsp; 🔒 Secure payment
        </div>
      </div>
    </div>`;
  showPage('detail');
}
function selOpt(el, type, val, parent) {
  parent.querySelectorAll('.d-opt').forEach(o => o.classList.remove('on'));
  el.classList.add('on');
  if(type==='size') selSize=val;
  if(type==='color') selColor=val;
}
function changeQty(d) {
  detailQty = Math.max(1, detailQty+d);
  document.getElementById('d-qty-num').textContent = detailQty;
}
function addToCartDetail(id) {
  const p = PRODUCTS.find(x=>x.id===id);
  addToCartFull(p, detailQty, selSize, selColor);
}

// ── CART ──
function addToCart(e, id) {
  e.stopPropagation();
  const p = PRODUCTS.find(x=>x.id===id);
  addToCartFull(p, 1, p.sizes[0], p.colors[0]);
}
function addToCartFull(p, qty, size, color) {
  const ex = S.cart.find(i => i.product.id===p.id && i.size===size && i.color===color);
  if(ex) ex.qty += qty;
  else S.cart.push({product:p, qty, size, color});
  updateBadges();
  showToast(`${p.name} added to cart 🛍️`);
}
function updateBadges() {
  const total = S.cart.reduce((a,i)=>a+i.qty,0);
  const cb = document.getElementById('cart-count');
  cb.textContent = total; cb.style.display = total ? 'flex' : 'none';
  const wb = document.getElementById('wish-count');
  wb.textContent = S.wish.size; wb.style.display = S.wish.size ? 'flex' : 'none';
}
function renderCart() {
  const items = document.getElementById('cart-items');
  const summary = document.getElementById('order-summary');
  if(!S.cart.length) {
    items.innerHTML = `<div class="empty-cart"><div class="ec-icon">🛍️</div><h3>Your cart is empty</h3><p>Add something beautiful from our collection!</p><button class="btn-gold" onclick="showPage('shop')">Shop Now</button></div>`;
    summary.innerHTML = '';
    return;
  }
  items.innerHTML = S.cart.map((item,idx) => `
    <div class="cart-item">
      <div class="cart-thumb ${item.product.color}">${item.product.emoji}</div>
      <div class="cart-info">
        <div class="cart-name">${item.product.name}</div>
        <div class="cart-meta">${item.product.cat} · ${item.color} · Size: ${item.size}</div>
        <div class="cart-qty">
          <button class="cq-btn" onclick="updateCartQty(${idx},-1)">−</button>
          <div class="cq-num">${item.qty}</div>
          <button class="cq-btn" onclick="updateCartQty(${idx},1)">+</button>
        </div>
        <button class="cart-remove" onclick="removeFromCart(${idx})">Remove</button>
      </div>
      <div class="cart-price">₹${(item.product.price*item.qty).toLocaleString('en-IN')}</div>
    </div>`).join('');
  const sub = S.cart.reduce((a,i)=>a+i.product.price*i.qty,0);
  const ship = sub >= 6299 ? 0 : 99;
  const total = sub + ship;
  summary.innerHTML = `
    <div class="order-summary">
      <div class="os-title">Order Summary</div>
      <div class="os-row"><span>Subtotal (${S.cart.reduce((a,i)=>a+i.qty,0)} items)</span><span>₹${sub.toLocaleString('en-IN')}</span></div>
      <div class="os-row"><span>Shipping</span><span>${ship===0?'<span style="color:#15803d;font-weight:700;">FREE</span>':'₹'+ship.toLocaleString('en-IN')}</span></div>
      <div class="os-row"><span>GST (5%)</span><span>₹${Math.round(sub*0.05).toLocaleString('en-IN')}</span></div>
      <div class="os-row total"><span>Total</span><span>₹${Math.round(total+sub*0.05).toLocaleString('en-IN')}</span></div>
      <div class="promo-row"><input type="text" placeholder="Promo code"/><button onclick="applyPromo()">Apply</button></div>
      <button class="checkout-btn" onclick="openCheckout()">Proceed to Checkout →</button>
      <div style="margin-top:12px;text-align:center;font-size:.75rem;color:var(--muted);">🔒 Secure checkout · SSL encrypted</div>
    </div>`;
}
function updateCartQty(idx, d) {
  S.cart[idx].qty = Math.max(1, S.cart[idx].qty+d);
  updateBadges(); renderCart();
}
function removeFromCart(idx) {
  S.cart.splice(idx,1);
  updateBadges(); renderCart();
  showToast('Item removed from cart');
}
function applyPromo() { showToast('Code BUTTABOMMA10 applied — 10% off! ✅'); }
function openCheckout() {
  if(!S.user) { openOverlay('auth-modal','login'); showToast('Please sign in to checkout','info'); return; }
  document.getElementById('checkout-content').innerHTML = `
    <div class="checkout-steps"><div class="cs on">Address</div><div class="cs">Payment</div><div class="cs">Confirm</div></div>
    <h2 style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;color:var(--maroon);margin-bottom:20px;">Shipping Address</h2>
    <div class="mf-row">
      <div class="mf"><label>First Name</label><input type="text" id="co-fn" value="${S.user.fn}" /></div>
      <div class="mf"><label>Last Name</label><input type="text" id="co-ln" value="${S.user.ln}" /></div>
    </div>
    <div class="mf"><label>Address</label><input type="text" id="co-addr" placeholder="123 Main St"/></div>
    <div class="mf-row">
      <div class="mf"><label>City</label><input type="text" id="co-city" placeholder="Houston"/></div>
      <div class="mf"><label>ZIP</label><input type="text" id="co-zip" placeholder="77001"/></div>
    </div>
    <div class="mf"><label>Country</label><input type="text" id="co-country" placeholder="United States"/></div>
    <button class="m-submit" onclick="nextCheckout()">Continue to Payment →</button>`;
  openOverlay('checkout-modal');
}
function nextCheckout() {
  document.getElementById('checkout-content').innerHTML = `
    <div class="checkout-steps"><div class="cs">Address</div><div class="cs on">Payment</div><div class="cs">Confirm</div></div>
    <h2 style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;color:var(--maroon);margin-bottom:20px;">Payment Details</h2>
    <div class="mf"><label>Name on Card</label><input type="text" placeholder="Priya Sharma"/></div>
    <div class="mf"><label>Card Number</label><input type="text" placeholder="•••• •••• •••• ••••" maxlength="19"/></div>
    <div class="mf-row">
      <div class="mf"><label>Expiry</label><input type="text" placeholder="MM/YY" maxlength="5"/></div>
      <div class="mf"><label>CVV</label><input type="text" placeholder="•••" maxlength="3"/></div>
    </div>
    <button class="m-submit" onclick="confirmOrder()">Place Order →</button>`;
}
function confirmOrder() {
  const total = S.cart.reduce((a,i)=>a+i.product.price*i.qty,0);
  document.getElementById('checkout-content').innerHTML = `
    <div class="success-box">
      <div class="s-icon">🎉</div>
      <h3>Order Confirmed!</h3>
      <p>Thank you, ${S.user.fn}! Your order has been placed successfully.<br><br>
      <strong>Order Total: ₹${Math.round(total*1.05).toLocaleString('en-IN')}</strong><br><br>
      You'll receive a confirmation email at ${S.user.em}.<br>Estimated delivery: 7–14 business days.</p>
      <button class="m-submit" style="margin-top:22px;" onclick="closeOverlay('checkout-modal');S.cart=[];updateBadges();showPage('home');">Continue Shopping</button>
    </div>`;
}

// ── WISHLIST ──
function toggleWish(e, id) {
  e.stopPropagation();
  const btn = e.currentTarget;
  if(S.wish.has(id)) { S.wish.delete(id); btn.textContent='♡'; btn.classList.remove('on'); }
  else { S.wish.add(id); btn.textContent='♥'; btn.classList.add('on'); showToast('Added to wishlist ♥'); }
  updateBadges();
}
function toggleWishBtn(id, btn) {
  if(S.wish.has(id)) { S.wish.delete(id); btn.textContent='♡'; }
  else { S.wish.add(id); btn.textContent='♥'; showToast('Added to wishlist ♥'); }
  updateBadges();
}
function renderWishlist() {
  const grid = document.getElementById('wish-grid');
  if(!S.wish.size) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;"><div style="font-size:3rem;margin-bottom:14px;">🤍</div><h3 style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;color:var(--maroon);margin-bottom:8px;">Your wishlist is empty</h3><p style="color:var(--muted);margin-bottom:24px;">Heart items you love while browsing!</p><button class="btn-gold" onclick="showPage('shop')">Browse Collection</button></div>`;
    return;
  }
  grid.innerHTML = PRODUCTS.filter(p => S.wish.has(p.id)).map(p => renderPCard(p)).join('');
}

// ── AUTH ──
function openOverlay(id, mode) {
  if(id==='auth-modal') {
    document.getElementById('form-login').style.display = mode==='login'?'block':'none';
    document.getElementById('form-signup').style.display = mode==='signup'?'block':'none';
  }
  document.getElementById(id).classList.add('open');
}
function closeOverlay(id) { document.getElementById(id).classList.remove('open'); }
function switchAuth(mode) {
  document.getElementById('form-login').style.display = mode==='login'?'block':'none';
  document.getElementById('form-signup').style.display = mode==='signup'?'block':'none';
}
function doLogin() {
  const em = document.getElementById('l-email').value.trim();
  const pw = document.getElementById('l-pass').value;
  const users = JSON.parse(localStorage.getItem('bb_users')||'[]');
  const u = users.find(x => x.em===em && x.pw===pw);
  if(!u) { document.getElementById('login-err').style.display='block'; return; }
  document.getElementById('login-err').style.display='none';
  loginUser(u);
}
function doSignup() {
  const fn=document.getElementById('su-fn').value.trim();
  const ln=document.getElementById('su-ln').value.trim();
  const em=document.getElementById('su-em').value.trim();
  const pw=document.getElementById('su-pw').value;
  const ph=document.getElementById('su-ph').value.trim();
  const err=document.getElementById('su-err');
  if(!fn||!ln||!em||!pw){err.textContent='Please fill in all required fields.';err.style.display='block';return;}
  if(pw.length<6){err.textContent='Password must be at least 6 characters.';err.style.display='block';return;}
  const users=JSON.parse(localStorage.getItem('bb_users')||'[]');
  if(users.find(u=>u.em===em)){err.textContent='An account with this email already exists.';err.style.display='block';return;}
  const u={fn,ln,em,pw,ph};
  users.push(u); localStorage.setItem('bb_users',JSON.stringify(users));
  err.style.display='none'; loginUser(u);
}
function loginUser(u) {
  S.user=u; localStorage.setItem('bb_session',JSON.stringify(u));
  closeOverlay('auth-modal');
  document.getElementById('nav-auth-area').innerHTML=`
    <span style="color:rgba(253,246,227,.7);font-size:.82rem;margin-right:4px;">Hi, ${u.fn}!</span>
    <button class="btn-login" onclick="logoutUser()">Sign Out</button>`;
  showToast(`Welcome back, ${u.fn}! ✨`);
}
function logoutUser() {
  S.user=null; localStorage.removeItem('bb_session');
  document.getElementById('nav-auth-area').innerHTML=`<button class="btn-login" onclick="openOverlay('auth-modal','login')">Sign In</button>`;
  showToast('You have been signed out.');
}

// ── CONTACT ──
function sendContact() {
  const fn=document.getElementById('cf-fn').value.trim();
  const em=document.getElementById('cf-em').value.trim();
  const msg=document.getElementById('cf-msg').value.trim();
  if(!fn||!em||!msg){showToast('Please fill in all required fields.','error');return;}
  ['cf-fn','cf-ln','cf-em','cf-msg'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  showToast('Message sent! We\'ll reply within 24 hours. 💛');
}

// ── NEWSLETTER ──
function subscribeNL() {
  const em=document.getElementById('nl-em').value.trim();
  if(!em||!em.includes('@')){showToast('Please enter a valid email.','error');return;}
  document.getElementById('nl-em').value='';
  showToast('You\'re subscribed! Welcome to the Butta Bomma family ✨');
}

// ── TOAST ──
function showToast(msg) {
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3200);
}

// ── OVERLAYS: close on background click ──
document.querySelectorAll('.overlay').forEach(o=>{
  o.addEventListener('click',e=>{
    if(e.target===e.currentTarget) e.currentTarget.classList.remove('open');
  });
});

// ── SCROLL REVEAL ──
const obs=new IntersectionObserver(entries=>{
  entries.forEach(x=>{
    if(x.isIntersecting){ x.target.classList.add('visible'); obs.unobserve(x.target); }
  });
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// ── INIT ──
(function init(){
  renderHomeProd();
  const s=localStorage.getItem('bb_session');
  if(s){ try{ loginUser(JSON.parse(s)); }catch(e){} }
})();
