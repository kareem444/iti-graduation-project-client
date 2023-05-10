import React from 'react';

const ShippingForm = () => {
  return (
    <div>
      <div class="my-5">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control fs-4" id="name" placeholder="Enter your full name" />
      </div>
      <div class="my-5">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control fs-4" id="email" placeholder="Enter your email address" />
      </div>
      <div class="my-5">
        <label for="address" class="form-label">Address</label>
        <input type="text" class="form-control fs-4" id="address" placeholder="Enter full delivery address" />
      </div>
    </div>
  );
};

export default ShippingForm;
