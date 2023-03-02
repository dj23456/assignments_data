import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function Task() {
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    password: ""
  })

  onchange = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
    console.log(formvalue);
  }
  const [data, setData] = useState([]);

  const onsubmit = (e) => {
    e.preventDefault();
    setData([...data, formvalue]);
    setFormvalue({ name: "", email: "", password: "" });
  }

  const ondelete = (id) => {
    const filterablelist = data.filter((item) => item.id != id)
    setData(filterablelist)
  }
  const [formvalue2, setFormvalue2] = useState([]);
  const onedit = (id) => {
    setFormvalue2([...data,formvalue2.id])
    console.log(formvalue2)
  }
  return (
    <div className='container mt-3'>
      <h2>form</h2>
      <form action='' method='post'>
        <div className='mb-3 mt-3'>
          <label htmlFor='name'>name:</label>
          <input type='text' className='form-control' id='name' value={formvalue.name} placeholder="name" onChange={onchange} name="name"></input>
        </div>
        <div className='mb-3 mt-3'>
          <label htmlFor='email'>email:</label>
          <input type='email' className='form-control' id='email' value={formvalue.email} placeholder="email" onChange={onchange} name="email"></input>
        </div>
        <div className='mb-3 mt-3'>
          <label htmlFor='pwd'>password:</label>
          <input type='password' className='form-control' id='password' value={formvalue.password} placeholder="password" onChange={onchange} name="password"></input>
        </div>
        <button type='submit' onClick={onsubmit} className="btn btn-primary">submit</button>
      </form>
      <hr />
      <h1 className='text-center'>All data</h1>
      <table className='table'>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>password</th>
          <th>Edit</th>
          <th>delete</th>
        </tr>
        {
          data.map((item, index, ent) => {
            const { id, name, email, password } = item;
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td><Button variant="info" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => onedit(id)}>Edit</Button></td>
                <td><Button variant="danger" onClick={() => ondelete(id)} style={{ color: 'black' }} >Delete</Button></td>
              </tr>
            )
          })

        }
      </table>

      <div>
          {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <label htmlFor='name'>name:</label>
                <input type='text' className='form-control' id='name' value={formvalue2.name} placeholder="name" onChange={onchange} name="name"></input>
                <label htmlFor='email'>email:</label>
                <input type='email' className='form-control' id='email' value={formvalue2.email} placeholder="email" onChange={onchange} name="email"></input>
                <label htmlFor='pwd'>password:</label>
                <input type='password' className='form-control' id='password' value={formvalue2.password} placeholder="password" onChange={onchange} name="password"></input>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
