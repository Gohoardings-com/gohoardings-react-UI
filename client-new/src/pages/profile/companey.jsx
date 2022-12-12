import React from 'react';

function Companey() {
  return (
    <>
       <div className="col-md-9">
                <div className="card">
                  <div className=" row p-3">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="company" class="control-label">
                          Company
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="company"
                          value="0"
                        />
                      </div>
                      <div class="form-group">
                        <label for="vat" class="control-label">
                          VAT Number
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="vat"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <label for="phonenumber">Phone</label>
                        <input
                          type="text"
                          class="form-control"
                          name="phonenumber"
                          id="phonenumber"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <label class="control-label" for="website">
                          Website
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="website"
                          id="website"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="city">City</label>
                        <input
                          type="text"
                          class="form-control"
                          name="city"
                          id="city"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <label for="address">Address</label>
                        <textarea
                          name="address"
                          id="address"
                          class="form-control"
                          rows="4"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <label for="zip">Zip Code</label>
                        <input
                          type="text"
                          class="form-control"
                          name="zip"
                          id="zip"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <label for="state">State</label>
                        <input
                          type="text"
                          class="form-control"
                          name="state"
                          id="state"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div
                        class="form-group"
                        app-field-wrapper="custom_fields[customers][10]"
                      >
                        <label
                          for="custom_fields[customers][10]"
                          class="control-label"
                        >
                          PAN
                        </label>
                        <input
                          type="text"
                          id="custom_fields[customers][10]"
                          name="custom_fields[customers][10]"
                          class="form-control"
                          data-fieldto="customers"
                          data-fieldid="10"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div
                        class="form-group"
                        app-field-wrapper="custom_fields[customers][11]"
                      >
                        <label
                          for="custom_fields[customers][11]"
                          class="control-label"
                        >
                          GSTIN
                        </label>
                        <input
                          type="text"
                          id="custom_fields[customers][11]"
                          name="custom_fields[customers][11]"
                          class="form-control"
                          data-fieldto="customers"
                          data-fieldid="11"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <h3>Billing &amp; Shipping</h3>
                      <hr class="no-mbot" />
                    </div>
                         
                    <div class="col-md-6">
                      <h4 class="mbot15 mtop20">Billing Address</h4>
                      <div class="form-group">
                        <label for="billing_street">Street</label>
                        <textarea
                          name="billing_street"
                          id="billing_street"
                          class="form-control"
                          rows="4"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <label for="billing_city">City</label>
                        <input
                          type="text"
                          class="form-control"
                          name="billing_city"
                          id="billing_city"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <label for="billing_state">State</label>
                        <input
                          type="text"
                          class="form-control"
                          name="billing_state"
                          id="billing_state"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <label for="billing_zip">Zip Code</label>
                        <input
                          type="text"
                          class="form-control"
                          name="billing_zip"
                          id="billing_zip"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <label for="billing_country">Country</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <h4 class="mbot15 mtop20">Shipping Address</h4>
                      <div class="form-group">
                        <label for="shipping_street">Street</label>
                        <textarea
                          name="shipping_street"
                          id="shipping_street"
                          class="form-control"
                          rows="4"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <label for="shipping_city">City</label>
                        <input
                          type="text"
                          class="form-control"
                          name="shipping_city"
                          id="shipping_city"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <label for="shipping_state">State</label>
                        <input
                          type="text"
                          class="form-control"
                          name="shipping_state"
                          id="shipping_state"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <label for="shipping_zip">Zip Code</label>
                        <input
                          type="text"
                          class="form-control"
                          name="shipping_zip"
                          id="shipping_zip"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-md-12 text-right mtop20">
<div class="form-group">
<button type="submit" class="btn btn-info">Update</button>
</div>
</div>
                  </div>
                </div>   
              </div>
    </>
  );
}

export default Companey;
