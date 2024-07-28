import React, { useEffect, useState } from 'react';
import '../Styles/GetQuote.css';
import logo from '../Assets/logo4.png'
const ProductOrderForm = () => {

  const [installTent ,setInstallTent] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: 'Stretch Tent', checked: false, quantity: 1 },
    { id: 2, name: 'Chair', checked: false, quantity: 1 },
    { id: 3, name: 'Foldable Table', checked: false, quantity: 1 },
    { id: 4, name: 'Table Cover', checked: false, quantity: 1 },
    { id: 5, name: 'Chair Cover', checked: false, quantity: 1 },
    { id: 6, name: 'Artificial Grass', checked: false, quantity: 1 }
  ]);

  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    message: '',
    days: 1,
    delivery: false,
    installation:false,
  });

  useEffect(()=>{
    const itemTent = products.find(product =>product.id ===1);
    if(itemTent){
        setInstallTent(itemTent.checked)
    }
  },[products])

  const handleProductChange = (id, field, value) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, [field]: value } : product
    ));

  };


  const handleOrderDetailChange = (field, value) => {
    setOrderDetails({ ...orderDetails, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const formData = new FormData();
    formData.append('name', orderDetails.name);
    formData.append('email', orderDetails.email);
    formData.append('message', orderDetails.message);
    formData.append('days', orderDetails.days);
    formData.append('delivery', orderDetails.delivery);
    formData.append('installation', orderDetails.installation);
   
    products.forEach(product => {
      if (product.checked) {
        formData.append(`products[]`, JSON.stringify(product));
      }
    });

    const response = await fetch('https://formspree.io/YOUR_FORMSPREE_ENDPOINT', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert('Order submitted successfully!');
    } else {
      alert('Failed to submit order.');
    }
  };

  return (
    <div className="quote-wrapper">
        <div className="line_logo">
        <hr/>
        <img src={logo} alt=''/>
        <hr/>
      </div>

      <h1>Product Order Form</h1>

      <form onSubmit={handleSubmit} className="quote-form">


{products.map(product => (
  <div className="form-input" key={product.id} >
     <span>{product.name}</span>
    <input className="check"
      type="checkbox"
      checked={product.checked}
      onChange={(e) => handleProductChange(product.id, 'checked', e.target.checked)}
    />
   
    <input className="spinner"
      type="number"
      value={product.quantity}
      min="1"
      onChange={(e) => handleProductChange(product.id, 'quantity', e.target.value)}
      
    />

  </div>
))}
<div className="bottom-text_wrapper">
  <input className="name"
    type="text"
    placeholder="Name"
    value={orderDetails.name}
    onChange={(e) => handleOrderDetailChange('name', e.target.value)}
    
  />
  <input className="email"
    type="email"
    placeholder="Email"
    value={orderDetails.email}
    onChange={(e) => handleOrderDetailChange('email', e.target.value)}
    
  />
  <textarea
    placeholder="Message"
    value={orderDetails.message}
    onChange={(e) => handleOrderDetailChange('message', e.target.value)}
    
  />
    <div className="bottom-input" >
    <span>Day</span>
    <input className="spinner"
      type="number"
      min="1"
      value={orderDetails.days}
      onChange={(e) => handleOrderDetailChange('days', e.target.value)}
    />
  </div>
  <div className="bottom-input" >
  <span>Delivery Transport</span>
    <input className="checkbox"
      type="checkbox"
      checked={orderDetails.delivery}
      onChange={(e) => handleOrderDetailChange('delivery', e.target.checked)}
    />

  </div>
  {installTent ? 
    <div className="bottom-input" >
    <span>Tent Installation</span>
      <input className="checkbox"
        type="checkbox"
        checked={orderDetails.installation}
        onChange={(e) => handleOrderDetailChange('installation', e.target.checked)}
      />
    </div>
  :""}

</div>
<button type="submit" >Send</button>
      </form>
    </div>

  );
};

// const styles = {
//   form: {
//     maxWidth: '600px',
//     margin: '0 auto',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//     backgroundColor:'black'
//   },
//   productRow: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '10px',
//   },
//   spinner: {
//     width: '50px',
//     marginLeft: '10px',
//   },
//   orderDetails: {
//     marginTop: '20px',
//   },
//   input: {
//     display: 'block',
//     width: '100%',
//     padding: '8px',
//     marginBottom: '10px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//   },
//   textarea: {
//     display: 'block',
//     width: '100%',
//     padding: '8px',
//     marginBottom: '10px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     height: '100px',
//   },
//   checkboxRow: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '20px',
//   },
//   button: {
//     display: 'block',
//     width: '100%',
//     padding: '10px',
//     backgroundColor: '#28a745',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
// };

export default ProductOrderForm;