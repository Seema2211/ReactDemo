import React from 'react'
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().required().matches(/^[0-9]{10}$/, 'Phone number should be only 10 character'),
  msg: yup.string().required().max(150)
});

const content = {
    inputs: [
        {
            lable: 'Name',
            type: 'text',
            name: 'name'
        },
        {
            lable: 'Email',
            type: 'email',
            name: 'email'
        },
        {
            lable: 'Phone',
            type: 'number',
            name: 'phone'
        },
        {
            lable: 'Message',
            type: 'textarea',
            name: 'msg'
        }
    ]
}

const Contact = () => {
    const {register, reset,handleSubmit, errors } = useForm(
        {resolver: yupResolver(schema)}
    )
    const onSubmit = (data) => {
        alert("Form submitted 😄 your data was"+ JSON.stringify(data, null, 4))
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
                            {
                                content.inputs.map((input, key) => {
                                    return (
                                        <div key={key}>
                                        <div className="mb-3" >
                                            <label  className="form-label"><b>{input.lable}</b></label>
                                            <input type="text"  name={input.name} type={input.type} placeholder="Enter your name" ref={register}
                                            className={`form-control ${errors[input.name] ? 'is-invalid' : ''}`} />
                                            <div className="invalid-feedback">{errors[input.name]?.message}</div>
                                        </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="form-group col-12">
                                <button className="btn btn-outline-secondary" type="submit">Submit form</button>
                                <button className="btn btn-outline-secondary reset" type="reset">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact;
