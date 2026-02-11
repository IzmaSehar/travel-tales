import { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    age: '',
    cnic: '',
    phone: '',
    country: 'Paris',
    places: '',
    days: '',
    hotel: '',
    breakfast: false
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container page">
      <h1 className="booking-title">Booking</h1>

      <div className="booking-form">
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr className="form-row-pop">
                <td>Full Name:</td>
                <td>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </td>
              </tr>

              <tr className="form-row-pop">
                <td>Email:</td>
                <td>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </td>
              </tr>

              <tr className="form-row-pop">
                <td>Password:</td>
                <td>
                  <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required 
                  />
                </td>
              </tr>

              <tr className="form-row-pop">
                <td>Gender:</td>
                <td>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Male" 
                    onChange={handleChange}
                    checked={formData.gender === "Male"}
                  /> Male &nbsp;
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Female" 
                    onChange={handleChange}
                    checked={formData.gender === "Female"}
                  /> Female
                </td>
              </tr>

              <tr className="form-row-pop">
                <td>Age:</td>
                <td>
                  <input 
                    type="number" 
                    name="age" 
                    value={formData.age} 
                    onChange={handleChange} 
                  />
                </td>
              </tr>

              <tr className="form-row-pop">
                <td>CNIC:</td>
                <td>
                  <input 
                    type="text" 
                    name="cnic" 
                    value={formData.cnic} 
                    onChange={handleChange} 
                  />
                </td>
              </tr>

              <tr className="form-row-pop">
                <td>Phone:</td>
                <td>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                  />
                </td>
              </tr>

              <tr className="form-row-pop">
                <td>Country:</td>
                <td>
                  <select 
                    name="country" 
                    value={formData.country} 
                    onChange={handleChange}
                  >
                    <option value="Paris">Paris</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Italy">Italy</option>
                  </select>
                </td>
              </tr>

              <tr className="form-row-pop">
                <td>Places:</td>
                <td>
                  <input 
                    type="text" 
                    name="places" 
                    value={formData.places} 
                    onChange={handleChange} 
                  />
                </td>
              </tr>

              <tr className="form-row-pop">
                <td>Days:</td>
                <td>
                  <input 
                    type="number" 
                    name="days" 
                    min="1" 
                    value={formData.days} 
                    onChange={handleChange} 
                  />
                </td>
              </tr>

              <tr className="form-row-pop">
                <td>Hotel:</td>
                <td>
                  <input 
                    type="text" 
                    name="hotel" 
                    value={formData.hotel} 
                    onChange={handleChange} 
                  />
                </td>
              </tr>

              <tr className="form-row-pop">
                <td>Extras:</td>
                <td>
                  <input 
                    type="checkbox" 
                    name="breakfast" 
                    checked={formData.breakfast} 
                    onChange={handleChange} 
                  /> Include Breakfast
                </td>
              </tr>

              <tr>
                <td className="text" colSpan="2">
                  <input type="submit" value="Register" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      {submittedData && (
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc' }}>
          <h2>Submitted Booking Details</h2>
          <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{submittedData.name}</td>
              </tr>
              
              <tr>
                <th>Email</th>
                <td>{submittedData.email}</td>
              </tr>

              <tr>
              <th>Gender</th>
              <td>{submittedData.gender}</td>
              </tr>

              <tr>
                <th>Age</th>
                <td>{submittedData.age}</td>
              </tr>

              <tr>
                <th>CNIC</th>
                <td>{submittedData.cnic}</td>
              </tr>

              <tr>
                <th>Phone</th>
                <td>{submittedData.phone}</td>
              </tr>

              <tr>
                <th>Destination</th>
                <td>{submittedData.country}</td>
              </tr>

              <tr>
                <th>Places</th>
                <td>{submittedData.places}</td>
              </tr>

              <tr>
                <th>Duration</th>
                <td>{submittedData.days} Days</td>
              </tr>

              <tr>
                <th>Hotel</th>
                <td>{submittedData.hotel}</td>
              </tr>

              <tr>
                <th>Breakfast Included?</th>
                <td>{submittedData.breakfast ? "Yes" : "No"}</td>
              </tr>

            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Booking;