import React, { Component } from 'react'

class ContactDetails extends Component {
    state = {
        name: "",
        email: "",
        address: {
            line1: "",
            line2: "",
            pincode: 0
        }
    }

    render(){
        return(
            <div>
                <form>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="text" name="address1" placeholder="Address Line 1" />
                    <input type="text" name="address2" placeholder="Address Line 2" />
                    <input type="number" name="pincode" placeholder="PIN" />
                </form>
            </div>
        )
    }
}

export default ContactDetails