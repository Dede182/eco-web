import React from 'react'
import { useSelector } from 'react-redux'
import {motion} from 'framer-motion'
import {pagetransition}  from "./home";
const Checkout = ()=>{
    const state = useSelector((state)=>state.additems);
    var total = 0;
    const itemlist = (item)=>{
        total = total + item.price 
        return(
                 <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div bis_skin_checked="1">
                    <h6 class="my-0">{item.title}</h6> 
                    </div>
                    <span class="text-muted">{item.price}</span>
                </li>         
        )
    }
  return (
        <motion.div
        variants={pagetransition}
        initial = "before"
        animate = "after"
        exit = "exit"
        class="row rowg p-3 ct text-b gy-5" bis_skin_checked="1">
            <div class="col-md-5 ct col-lg-4 order-md-last" bis_skin_checked="1">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="">Your cart</span>
                <span class="badge text-dark ag rounded-pill">{state.length}</span>
                </h4>
                <ul class="list-group mb-3">
                {state.map(itemlist)}
                <li class="list-group-item ag d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>{total}</strong>
                </li>
                </ul>

                <form class="card p-2">
                <div class="input-group" bis_skin_checked="1">
                    <input type="text" class="form-control ag" placeholder="Promo code"/>
                    <button type="submit" class="btn redeem">Redeem</button>
                </div>
                </form>
            </div>
            <div class="col-md-7 col-lg-8" bis_skin_checked="1">
                <h4 class="mb-3">Billing address</h4>
                <form class="needs-validation" novalidate="">
          <div class="row ag g-3" bis_skin_checked="1">
            <div class="col-sm-6" bis_skin_checked="1">
              <label htmlfor="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""/>
              <div class="invalid-feedback" bis_skin_checked="1">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6" bis_skin_checked="1">
              <label htmlfor="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required=""/>
              <div class="invalid-feedback" bis_skin_checked="1">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12" bis_skin_checked="1">
              <label htmlfor="username" class="form-label">Username</label>
              <div class="input-group has-validation" bis_skin_checked="1">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" id="username" placeholder="Username" required=""/>
              <div class="invalid-feedback" bis_skin_checked="1">
                  Your username is required.
                </div>
              </div>
            </div>

            <div class="col-12" bis_skin_checked="1">
              <label htmlfor="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
              <div class="invalid-feedback" bis_skin_checked="1">
                Please enter a valid email address htmlfor shipping updates.
              </div>
            </div>

            <div class="col-12" bis_skin_checked="1">
              <label htmlfor="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""/>
              <div class="invalid-feedback" bis_skin_checked="1">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-12" bis_skin_checked="1">
              <label htmlfor="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"/>
            </div>

            <div class="col-md-5" bis_skin_checked="1">
              <label htmlfor="country" class="form-label">Country</label>
              <select class="form-select" id="country" required="">
                <option value="">Choose...</option>
                <option>Myanmar</option>
              </select>
              <div class="invalid-feedback" bis_skin_checked="1">
                Please select a valid country.
              </div>
            </div>

            <div class="col-md-4" bis_skin_checked="1">
              <label htmlfor="state" class="form-label">State</label>
              <select class="form-select" id="state" required="">
                <option value="">Choose...</option>
                <option>Yangon</option>
                <option>Mandalay</option>
              </select>
              <div class="invalid-feedback" bis_skin_checked="1">
                Please provide a valid state.
              </div>
            </div>

            <div class="col-md-3" bis_skin_checked="1">
              <label htmlfor="zip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" required=""/>
              <div class="invalid-feedback" bis_skin_checked="1">
                Zip code required.
              </div>
            </div>
          </div>

          <hr class="my-4"/>

          <div class="form-check" bis_skin_checked="1">
            <input type="checkbox" class="form-check-input" id="same-address"/>
            <label class="form-check-label" htmlfor="same-address">Shipping address is the same as my billing address</label>
          </div>

          <div class="form-check" bis_skin_checked="1">
            <input type="checkbox" class="form-check-input" id="save-info"/>
            <label class="form-check-label" htmlfor="save-info">Save this information htmlfor next time</label>
          </div>

          <hr class="my-4"/>

          <h4 class="mb-3">Payment</h4>

          <div class="my-3" bis_skin_checked="1">
            <div class="form-check" bis_skin_checked="1">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required=""/>
              <label class="form-check-label" htmlfor="credit">Credit card</label>
            </div>
            <div class="form-check" bis_skin_checked="1">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required=""/>
              <label class="form-check-label" htmlfor="debit">Debit card</label>
            </div>
            <div class="form-check" bis_skin_checked="1">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required=""/>
              <label class="form-check-label" htmlfor="paypal">PayPal</label>
            </div>
            <div class="form-check" bis_skin_checked="1">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required=""/>
              <label class="form-check-label" htmlfor="paypal">Kpay(local)</label>
            </div>
            <div class="form-check" bis_skin_checked="1">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required=""/>
              <label class="form-check-label" htmlfor="paypal">Wavepay(local)</label>
            </div>
          </div>

          <div class="row gy-3" bis_skin_checked="1">
            <div class="col-md-6" bis_skin_checked="1">
              <label htmlfor="cc-name" class="form-label">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback" bis_skin_checked="1">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6" bis_skin_checked="1">
              <label htmlfor="cc-number" class="form-label">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
              <div class="invalid-feedback" bis_skin_checked="1">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3" bis_skin_checked="1">
              <label htmlfor="cc-expiration" class="form-label">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required=""/>
              <div class="invalid-feedback" bis_skin_checked="1">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3" bis_skin_checked="1">
              <label htmlfor="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required=""/>
              <div class="invalid-feedback" bis_skin_checked="1">
                Security code required
              </div>
            </div>
          </div>

          <hr class="my-4"/>

          <button class="w-100 btn blue-btn btn-lg" type="submit">Continue to checkout</button>
        </form>
            </div>
            </motion.div>
            
  )
}

export default Checkout