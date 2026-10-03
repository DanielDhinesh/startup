import React, { useState } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Receipt, 
  Globe, 
  MessageSquare, 
  Check, 
  Trash2, 
  Printer, 
  Sparkles,
  ShoppingBag,
  Utensils,
  Scissors,
  Search,
  ScanLine
} from 'lucide-react';

export default function InteractiveSoftwareDemo() {
  const [activeTab, setActiveTab] = useState('pos'); // 'pos' | 'website' | 'whatsapp'
  
  // State for POS Billing Simulator
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState([
    { id: 1, name: 'Basmati Rice 5kg', price: 420, qty: 1, category: 'Grocery' },
    { id: 2, name: 'Cotton Shirt (Blue)', price: 890, qty: 1, category: 'Apparel' }
  ]);
  const [customerPhone, setCustomerPhone] = useState('9876543210');
  const [taxRate, setTaxRate] = useState(12);

  // Available Inventory Catalog in Demo
  const catalog = [
    { id: 1, name: 'Basmati Rice 5kg', price: 420, category: 'Grocery', barcode: '890123456701' },
    { id: 2, name: 'Cotton Shirt (Blue)', price: 890, category: 'Apparel', barcode: '890123456702' },
    { id: 3, name: 'Wireless Mouse', price: 650, category: 'Electronics', barcode: '890123456703' },
    { id: 4, name: 'Special Masala Chai', price: 40, category: 'Restaurant', barcode: '890123456704' },
    { id: 5, name: 'Hair Cut & Styling', price: 250, category: 'Services', barcode: '890123456705' },
    { id: 6, name: 'Sunflower Oil 1L', price: 165, category: 'Grocery', barcode: '890123456706' },
  ];

  // Website preview sub-tab
  const [webType, setWebType] = useState('retail');
  const [deviceView, setDeviceView] = useState('laptop');

  const filteredCatalog = catalog.filter(item => {
    const matchesCat = categoryFilter === 'all' || item.category === categoryFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const addItemToCart = (item) => {
    setSelectedItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setSelectedItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setSelectedItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = selectedItems.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
  const taxAmount = Math.round(subtotal * (taxRate / 100));
  const finalTotal = subtotal + taxAmount;

  return (
    <section id="live-demo" className="py-16 md:py-24 relative bg-[#090d16]" style={{ paddingTop: '4rem', paddingBottom: '4rem', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
          <div className="badge" style={{ marginBottom: '0.85rem' }}>
            <Sparkles style={{ width: '14px', height: '14px', color: 'var(--accent-cyan)' }} />
            <span>Interactive Live Product Showcase</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)', fontWeight: '800', marginBottom: '0.85rem' }}>
            Test Our <span className="gradient-text">Powerful Tech</span> Live in Action
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6' }}>
            Experience how our billing software, custom website templates, and WhatsApp tools operate. Click, test, and see why shopkeepers love 2xtechnologies!
          </p>
        </div>

        {/* Top Main Navigation Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <button
            onClick={() => setActiveTab('pos')}
            className={activeTab === 'pos' ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
          >
            <Receipt style={{ width: '16px', height: '16px' }} />
            <span>1. 2xtechnologies Billing</span>
          </button>

          <button
            onClick={() => setActiveTab('website')}
            className={activeTab === 'website' ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
          >
            <Globe style={{ width: '16px', height: '16px' }} />
            <span>2. Website Showcase</span>
          </button>

          <button
            onClick={() => setActiveTab('whatsapp')}
            className={activeTab === 'whatsapp' ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
          >
            <MessageSquare style={{ width: '16px', height: '16px' }} />
            <span>3. WhatsApp Bot</span>
          </button>
        </div>

        {/* TAB 1: 2xtechnologies SOFTWARE SIMULATOR */}
        {activeTab === 'pos' && (
          <div className="glass-card" style={{ padding: '1.25rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
            
            {/* Top POS Toolbar */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', paddingBottom: '0.85rem', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ padding: '0.45rem', borderRadius: '10px', background: 'rgba(56,189,248,0.15)', color: 'var(--accent-cyan)' }}>
                  <Receipt style={{ width: '20px', height: '20px' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '700', margin: 0, color: '#fff' }}>2xtechnologies Express Billing</h3>
                  <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: '600' }}>● System Online • Thermal Printer Sync</span>
                </div>
              </div>

              {/* Barcode scanner simulator button */}
              <button 
                onClick={() => {
                  const randomItem = catalog[Math.floor(Math.random() * catalog.length)];
                  addItemToCart(randomItem);
                }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(16,185,129,0.15)', color: '#34d399', padding: '0.45rem 0.85rem', borderRadius: '8px', border: '1px solid rgba(16,185,129,0.3)', fontSize: '0.78rem', fontWeight: '600' }}
              >
                <ScanLine style={{ width: '15px', height: '15px' }} />
                <span>Simulate Barcode Scan</span>
              </button>
            </div>

            {/* POS Grid: Responsive catalog / Cart */}
            <div className="responsive-2col" style={{ alignItems: 'start' }}>
              
              {/* Left Column: Product Selection */}
              <div>
                {/* Search & Category Filter */}
                <div className="responsive-form-row" style={{ marginBottom: '0.85rem' }}>
                  <div style={{ position: 'relative' }}>
                    <Search style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', width: '15px', height: '15px', color: '#64748b' }} />
                    <input 
                      type="text" 
                      placeholder="Search items..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.55rem 0.55rem 0.55rem 2rem', borderRadius: '8px', color: '#fff', fontSize: '0.82rem' }}
                    />
                  </div>

                  <select 
                    value={categoryFilter} 
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    style={{ width: '100%', background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', padding: '0.55rem', borderRadius: '8px', color: '#cbd5e1', fontSize: '0.82rem' }}
                  >
                    <option value="all">All Categories</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Services">Services</option>
                  </select>
                </div>

                {/* Items Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.6rem', maxHeight: '320px', overflowY: 'auto', paddingRight: '0.2rem' }}>
                  {filteredCatalog.map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => addItemToCart(item)}
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '0.75rem', cursor: 'pointer', transition: 'all 0.2s ease' }}
                    >
                      <span style={{ fontSize: '0.62rem', background: 'rgba(56,189,248,0.1)', color: 'var(--accent-cyan)', padding: '0.1rem 0.35rem', borderRadius: '4px', fontWeight: '600' }}>
                        {item.category}
                      </span>
                      <h4 style={{ fontSize: '0.8rem', fontWeight: '700', marginTop: '0.35rem', marginBottom: '0.2rem', color: '#f8fafc' }}>
                        {item.name}
                      </h4>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.4rem' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#10b981' }}>₹{item.price}</span>
                        <div style={{ background: 'var(--accent-cyan)', color: '#000', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.75rem' }}>+</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Checkout Cart */}
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.65rem', display: 'flex', justifyContent: 'space-between', color: '#fff' }}>
                    <span>Customer Cart</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>{selectedItems.length} Items</span>
                  </h4>

                  {/* Cart Items List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', maxHeight: '160px', overflowY: 'auto', marginBottom: '0.85rem' }}>
                    {selectedItems.length === 0 ? (
                      <p style={{ textAlign: 'center', color: '#64748b', padding: '1.5rem 0', fontSize: '0.8rem' }}>Cart is empty. Click items to add!</p>
                    ) : (
                      selectedItems.map((item) => (
                        <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.03)', padding: '0.45rem 0.65rem', borderRadius: '8px' }}>
                          <div style={{ flex: 1 }}>
                            <p style={{ fontSize: '0.78rem', fontWeight: '600', color: '#f1f5f9', margin: 0 }}>{item.name}</p>
                            <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>₹{item.price} each</span>
                          </div>
                          
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            <button onClick={() => updateQty(item.id, -1)} style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', width: '20px', height: '20px', borderRadius: '4px', fontSize: '0.75rem' }}>-</button>
                            <span style={{ fontSize: '0.78rem', fontWeight: 'bold', width: '16px', textAlign: 'center', color: '#fff' }}>{item.qty}</span>
                            <button onClick={() => updateQty(item.id, 1)} style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', width: '20px', height: '20px', borderRadius: '4px', fontSize: '0.75rem' }}>+</button>
                            <button onClick={() => removeItem(item.id)} style={{ color: '#ef4444', marginLeft: '0.3rem' }}><Trash2 style={{ width: '13px', height: '13px' }} /></button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Tax Rate & Customer Phone settings */}
                  <div className="responsive-form-row" style={{ marginBottom: '0.75rem' }}>
                    <div>
                      <label style={{ fontSize: '0.68rem', color: '#94a3b8', display: 'block', marginBottom: '0.15rem' }}>GST Tax Rate:</label>
                      <select 
                        value={taxRate} 
                        onChange={(e) => setTaxRate(Number(e.target.value))}
                        style={{ width: '100%', background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '0.35rem', borderRadius: '6px', fontSize: '0.72rem' }}
                      >
                        <option value={0}>0% (Exempt)</option>
                        <option value={5}>5% GST</option>
                        <option value={12}>12% GST</option>
                        <option value={18}>18% GST</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.68rem', color: '#94a3b8', display: 'block', marginBottom: '0.15rem' }}>Customer Mobile:</label>
                      <input 
                        type="text"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '0.35rem', borderRadius: '6px', fontSize: '0.72rem' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Bill Totals & Actions */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.65rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#94a3b8' }}>
                    <span>Subtotal:</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#94a3b8', marginBottom: '0.35rem' }}>
                    <span>GST ({taxRate}%):</span>
                    <span>₹{taxAmount}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', fontWeight: '800', color: '#fff', marginBottom: '0.65rem' }}>
                    <span>TOTAL BILL:</span>
                    <span className="gradient-text">₹{finalTotal}</span>
                  </div>

                  <button 
                    onClick={() => alert(`🎉 Receipt Printed Successfully!\nCustomer Mobile: +91 ${customerPhone}\nTotal Amount: ₹${finalTotal}\nThermal Print Command Sent!`)}
                    className="btn-primary" 
                    style={{ width: '100%', padding: '0.65rem', justifyContent: 'center', fontSize: '0.85rem' }}
                  >
                    <Printer style={{ width: '16px', height: '16px' }} />
                    <span>Complete Sale & Print</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: CUSTOM SMB WEBSITE SHOWCASE */}
        {activeTab === 'website' && (
          <div className="glass-card" style={{ padding: '1.25rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
            
            {/* Top Controls */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', paddingBottom: '0.85rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              
              {/* Sub-niche selector */}
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setWebType('retail')}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.45rem 0.75rem', borderRadius: '8px', fontSize: '0.78rem', fontWeight: '600', background: webType === 'retail' ? 'rgba(56,189,248,0.2)' : 'rgba(255,255,255,0.05)', color: webType === 'retail' ? 'var(--accent-cyan)' : '#cbd5e1', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <ShoppingBag style={{ width: '14px', height: '14px' }} />
                  <span>Kirana / Retail</span>
                </button>

                <button
                  onClick={() => setWebType('fashion')}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.45rem 0.75rem', borderRadius: '8px', fontSize: '0.78rem', fontWeight: '600', background: webType === 'fashion' ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.05)', color: webType === 'fashion' ? '#34d399' : '#cbd5e1', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <Scissors style={{ width: '14px', height: '14px' }} />
                  <span>Boutique</span>
                </button>

                <button
                  onClick={() => setWebType('restaurant')}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.45rem 0.75rem', borderRadius: '8px', fontSize: '0.78rem', fontWeight: '600', background: webType === 'restaurant' ? 'rgba(139,92,246,0.2)' : 'rgba(255,255,255,0.05)', color: webType === 'restaurant' ? '#a78bfa' : '#cbd5e1', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <Utensils style={{ width: '14px', height: '14px' }} />
                  <span>Restaurant</span>
                </button>
              </div>

              {/* Device View Toggle */}
              <div style={{ display: 'flex', background: 'rgba(0,0,0,0.4)', padding: '0.2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <button 
                  onClick={() => setDeviceView('laptop')}
                  style={{ padding: '0.3rem 0.6rem', borderRadius: '6px', fontSize: '0.75rem', background: deviceView === 'laptop' ? 'rgba(255,255,255,0.15)' : 'transparent', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  <Monitor style={{ width: '13px', height: '13px' }} /> Laptop
                </button>
                <button 
                  onClick={() => setDeviceView('mobile')}
                  style={{ padding: '0.3rem 0.6rem', borderRadius: '6px', fontSize: '0.75rem', background: deviceView === 'mobile' ? 'rgba(255,255,255,0.15)' : 'transparent', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  <Smartphone style={{ width: '13px', height: '13px' }} /> Mobile
                </button>
              </div>
            </div>

            {/* Simulated Frame */}
            <div style={{ margin: '0 auto', transition: 'all 0.3s ease', maxWidth: deviceView === 'mobile' ? '340px' : '100%', background: '#0f172a', borderRadius: '14px', border: '2px solid rgba(255,255,255,0.15)', overflow: 'hidden' }}>
              
              {/* Browser bar */}
              <div style={{ background: '#1e293b', padding: '0.4rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ef4444' }}></div>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f59e0b' }}></div>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981' }}></div>
                </div>
                <div style={{ flex: 1, background: 'rgba(0,0,0,0.3)', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', color: '#94a3b8', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                  https://demo-shop.2xtechnologies.com/{webType}
                </div>
              </div>

              {/* Sample Website Content Preview */}
              <div style={{ padding: '1.25rem', background: '#090d16', minHeight: '300px' }}>
                {webType === 'retail' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--accent-cyan)', margin: 0 }}>🛒 Super Kirana Store</h3>
                      <button style={{ background: '#10b981', color: '#000', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 'bold' }}>Order on WhatsApp</button>
                    </div>
                    <div className="responsive-3col">
                      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <span style={{ fontSize: '1.5rem' }}>🌾</span>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#fff' }}>Organic Staples</h4>
                        <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: 0 }}>Atta, Dal, Rice & Oils delivered fast.</p>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <span style={{ fontSize: '1.5rem' }}>🥛</span>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#fff' }}>Daily Fresh</h4>
                        <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: 0 }}>Fresh Milk, Butter, Bread & Eggs.</p>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <span style={{ fontSize: '1.5rem' }}>📍</span>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#fff' }}>Shop Location</h4>
                        <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: 0 }}>Google Maps Navigation Link.</p>
                      </div>
                    </div>
                  </div>
                )}

                {webType === 'fashion' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#34d399', margin: 0 }}>👗 Trends Boutique</h3>
                      <button style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.72rem' }}>View Catalog</button>
                    </div>
                    <div className="responsive-3col">
                      <div style={{ background: 'rgba(255,255,255,0.04)', height: '110px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', fontWeight: 'bold', fontSize: '0.85rem' }}>Designer Ethnic</div>
                      <div style={{ background: 'rgba(255,255,255,0.04)', height: '110px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', fontWeight: 'bold', fontSize: '0.85rem' }}>Casual Wear</div>
                      <div style={{ background: 'rgba(255,255,255,0.04)', height: '110px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', fontWeight: 'bold', fontSize: '0.85rem' }}>Party Dresses</div>
                    </div>
                  </div>
                )}

                {webType === 'restaurant' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#a78bfa', margin: 0 }}>☕ Spice & Beans Bistro</h3>
                      <button style={{ background: '#8b5cf6', color: '#fff', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 'bold' }}>Scan QR Menu</button>
                    </div>
                    <div style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', padding: '0.85rem', borderRadius: '10px' }}>
                      <h4 style={{ fontSize: '0.88rem', fontWeight: 'bold', color: '#a78bfa', margin: '0 0 0.3rem 0' }}>Today's Special Chef Menu</h4>
                      <p style={{ fontSize: '0.75rem', color: '#cbd5e1', margin: 0 }}>Order directly from table or book a dining slot online!</p>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: WHATSAPP AUTOMATION */}
        {activeTab === 'whatsapp' && (
          <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="responsive-2col">
              <div>
                <span className="badge" style={{ marginBottom: '0.85rem' }}>
                  <MessageSquare style={{ width: '14px', height: '14px', color: '#34d399' }} />
                  <span>WhatsApp Business Integration</span>
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.85rem', color: '#fff' }}>
                  Instant Bills & Reminders Delivered directly to WhatsApp
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
                  Ditch expensive paper receipts! With 2xtechnologies, every bill created on your POS automatically generates a branded receipt sent straight to your customer's WhatsApp.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                    <Check style={{ width: '16px', height: '16px', color: '#34d399', flexShrink: 0 }} />
                    <span>Instant Digital Receipt Link with Shop Branding</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                    <Check style={{ width: '16px', height: '16px', color: '#34d399', flexShrink: 0 }} />
                    <span>Automated UPI Payment Reminders for Credit (Udhar)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                    <Check style={{ width: '16px', height: '16px', color: '#34d399', flexShrink: 0 }} />
                    <span>Automated 5-Star Google Review Link Requests</span>
                  </div>
                </div>
              </div>

              {/* Mock WhatsApp Chat Display */}
              <div style={{ background: '#0b141a', padding: '1rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '320px', margin: '0 auto', width: '100%' }}>
                <div style={{ background: '#202c33', padding: '0.65rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold', fontSize: '0.8rem' }}>TH</div>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#fff', margin: 0 }}>2xtechnologies Billing Bot</h4>
                    <span style={{ fontSize: '0.62rem', color: '#34d399' }}>Official Verified Business</span>
                  </div>
                </div>

                <div style={{ background: '#005c4b', padding: '0.75rem', borderRadius: '10px 10px 10px 2px', color: '#fff', fontSize: '0.78rem', lineHeight: '1.4' }}>
                  <p style={{ margin: '0 0 0.4rem 0', fontWeight: 'bold' }}>🧾 Invoice #TH-4092</p>
                  <p style={{ margin: 0 }}>Hello Rahul! Thank you for shopping at 2xtechnologies Store. Here is your digital tax invoice for ₹1,240.</p>
                  
                  <div style={{ marginTop: '0.5rem', background: 'rgba(0,0,0,0.2)', padding: '0.4rem', borderRadius: '6px', fontSize: '0.72rem' }}>
                    📄 <span>Invoice_TH4092.pdf</span>
                  </div>

                  <span style={{ fontSize: '0.6rem', color: '#a7f3d0', display: 'block', textAlign: 'right', marginTop: '0.3rem' }}>10:48 AM ✓✓</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}




