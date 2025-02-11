import React, { useState } from 'react';

const options = [
  { value: '', label: '-- Select Country--' },
  { value: 'Finland', label: 'Finland' },
  { value: 'Sweden', label: 'Sweden' },
  { value: 'Norway', label: 'Norway' },
  { value: 'Denmark', label: 'Denmark' },
];

const selectOptions = options.map(({ value, label }) => (
  <option key={value} value={value}>{label}</option>
));

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    touched: {
      firstName: false,
      lastName: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        skills: { ...prevState.skills, [name]: checked },
      }));
    } else if (type === 'file') {
      setFormData(prevState => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setFormData(prevState => ({
      ...prevState,
      touched: { ...prevState.touched, [name]: true },
    }));
  };

  const validate = () => {
    const errors = {
      firstName: '',
    };

    if (
      (formData.touched.firstName && formData.firstName.length < 3) ||
      (formData.touched.firstName && formData.firstName.length > 12)
    ) {
      errors.firstName = 'First name must be between 2 and 12 characters';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedSkills = Object.keys(formData.skills)
      .filter(key => formData.skills[key])
      .map(key => key.toUpperCase());

    const data = {
      ...formData,
      skills: formattedSkills,
    };

    console.log(data);
  };

  const errors = validate();
  return (
    <div className="App">
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit} noValidate>
        <div className="row">
          <div className="form-group">
            <label htmlFor="firstName">First Name </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="First Name"
            />
            <br />
            <small>{errors.firstName}</small>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="tel">Telephone </label>
          <input
            type="tel"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
            placeholder="Tel"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of birth </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            placeholder="Date of Birth"
          />
        </div>
        <div className="form-group">
          <label htmlFor="favoriteColor">Favorite Color</label>
          <input
            type="color"
            id="favoriteColor"
            name="favoriteColor"
            value={formData.favoriteColor}
            onChange={handleChange}
            placeholder="Favorite Color"
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Weight in Kg"
          />
        </div>
        <div>
          <label htmlFor="country">Country</label> <br />
          <select name="country" onChange={handleChange} id="country">
            {selectOptions}
          </select>
        </div>

        <div>
          <p>Gender</p>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={handleChange}
              checked={formData.gender === 'Female'}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              id="male"
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              checked={formData.gender === 'Male'}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              id="other"
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange}
              checked={formData.gender === 'Other'}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div>
          <p>Select your skills</p>
          <div>
            <input
              type="checkbox"
              id="html"
              name="html"
              onChange={handleChange}
            />
            <label htmlFor="html">HTML</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="css"
              name="css"
              onChange={handleChange}
            />
            <label htmlFor="css">CSS</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="javascript"
              name="javascript"
              onChange={handleChange}
            />
            <label htmlFor="javascript">JavaScript</label>
          </div>
        </div>
        <div>
          <label htmlFor="bio">Bio</label> <br />
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            cols="120"
            rows="10"
            placeholder="Write about yourself ..."
          />
        </div>

        <div>
          <input type="file" name="file" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
