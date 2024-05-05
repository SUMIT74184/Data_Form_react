import React, { useState } from "react";

function App() {
  const [FormData, SetFormData] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    country: "usa",
    StreetAddress: "",
    City: "",
    State: "",
    Postal_Code: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    SetFormData((prev) => ({
      ...prev,
      [name]: type === "checked " ? checked : value,
    }));
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("finally printing the value of the form Data")
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>
        <label htmlFor="Firstname"> First Name</label>
        <br />
        <input
          type="text"
          name="Firstname"
          id="Firstname"
          placeholder="Sumit"
          value={FormData.Firstname}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="Lastname"> Last Name</label>
        <br />
        <input
          type="text"
          name="Lastname"
          id="Lastname"
          placeholder="Rai"
          value={FormData.Lastname}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="Email"> Email Address</label>
        <br />
        <input
          type="email"
          name="Email"
          id="Email"
          placeholder="xyz123@gmail.com"
          value={FormData.Email}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          className="outline-dashed"
          id="country"
          name="country"
          value={FormData.country}
        >
          <option>India</option>
          <option>United States of America</option>
          <option>Japan</option>
          <option>Canada</option>
          <option>Australia</option>
        </select>

        <br />
        <label htmlFor="StreetAddress">Street ADD</label>
        <br />
        <input
          type="text"
          name="StreetAddress"
          id="StreetAddress"
          placeholder="x-45b"
          value={FormData.StreetAddress}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="City">City</label>
        <br />
        <input
          type="text"
          name="City"
          id="City"
          placeholder="x-45b"
          value={FormData.City}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="City">State/Province</label>
        <br />
        <input
          type="text"
          name="City"
          id="City"
          placeholder="Rajasthan"
          value={FormData.State}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="Postal_Code">Postal Code</label>
        <br />
        <input
          type="text"
          name="Postal_Code"
          id="Postal_Code"
          placeholder="111890"
          value={FormData.Postal_Code}
          onChange={changeHandler}
          className="outline"
        />

        <br/>
        <br/>

        <fieldset>
          <legend>By Email</legend>
          <div className="flex flex-row">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={FormData.comments}
              onChange={changeHandler}
            />

            <div>
              <label htmlFor="comments">
                Comments
                <p>Get notified when Someone Posts a comment on a posting</p>
              </label>
            </div>
          </div>

          <div className="flex flex-row">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={FormData.candidates}
              onChange={changeHandler}
            />

            <div>
              <label htmlFor="candidates">
                candidates
                <p>Get notified when a candidates applies for job</p>
              </label>
            </div>
          </div>

          <div className="flex flex-row">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={FormData.offers}
              onChange={changeHandler}
            />

            <div>
              <label htmlFor="offers">
                offers
                <p>
                  Get notified when a Candidates accepts or rejects an offer
                </p>
              </label>
            </div>
          </div>
        </fieldset>

        <br />

        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile phone</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onchange={changeHandler}
          ></input>

          <label htmlFor="pushEverything">Everything</label>
          <br />

          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No push Notification"
            onchange={changeHandler}
          ></input>

          <label htmlFor="pushNothing">Push Nothing</label>

          <br />

          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same as Email"
            onchange={changeHandler}
          ></input>

          <label htmlFor="pushEmail">Same as Email</label>
        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded pt-2 px-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
