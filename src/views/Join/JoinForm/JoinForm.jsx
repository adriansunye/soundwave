import React from 'react';
import { Input } from '@components/forms/';
import Button from 'react-bootstrap/Button';


export default class JoinForm extends React.Component {
    render() {
        return (<div className="form-container mt-5">
            <form>
                <div class="mb-3">
                    <label className="form-label">Name</label>
                    <Input type="text" id="inputName"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <Input type="email" id="inputEmail"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <Input type="password" id="inputPassword"/>
                </div>
                <Button variant="primary w-100" type="submit">Join Now</Button>
            </form>
        </div>
        );
    }
}