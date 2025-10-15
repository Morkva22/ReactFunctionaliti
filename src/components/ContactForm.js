import React, { Component } from 'react';

class ContactForm extends Component {
    state = {
        phone: '',
        name: '',
        errors: {
            phone: '',
            name: '',
        },
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => this.validateField(name, value));
    };

    validateField = (field, value) => {
        let errors = { ...this.state.errors };
        switch (field) {
            case 'phone':
                if (!/^\d*$/.test(value) || value.length < 10) {
                    errors.phone = 'Phone must contain only numbers and be at least 10 digits';
                } else {
                    errors.phone = '';
                }
                break;
            case 'name':
                if (value.length < 2 || value.length > 50) {
                    errors.name = 'Name must be between 2 and 50 characters';
                } else {
                    errors.name = '';
                }
                break;
            default:
                break;
        }
        this.setState({ errors });
    };

    handleResetForm = () => {
        this.setState({
            phone: '',
            name: '',
            errors: { phone: '', name: '' },
        });
    };

    render() {
        return (
            <div className="form-section">
                <h2>Contact Form</h2>
                <div className="form-controls">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            className={this.state.errors.name ? 'error-input' : ''}
                        />
                        {this.state.errors.name && <span className="error-message">{this.state.errors.name}</span>}
                    </label>
                    <label>
                        Phone:
                        <input
                            type="text"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleInputChange}
                            className={this.state.errors.phone ? 'error-input' : ''}
                        />
                        {this.state.errors.phone && <span className="error-message">{this.state.errors.phone}</span>}
                    </label>
                    <button onClick={this.handleResetForm}>Reset Form</button>
                </div>
            </div>
        );
    }
}

export default ContactForm;