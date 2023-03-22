import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const url = 'http://localhost:4000/users/dashboard';
    const navigate = useNavigate();
    const [history, sethistory] = useState([]);

    useEffect(() => {
      axios.get(url).then((res)=>{
        sethistory(res.data.history);
      })
    }, [])

    const logOut = ()=>{
        localStorage.removeItem('token');
        navigate('/');
    }
    
  return (
    <div className='container my-5'>
        <button className='btn btn-dark' style={{color: '#0D6EFD'}} onClick={logOut}>Sign Out</button>
        <h2 className='text-center mb-5'>Order History</h2>
        {/* <div className="row text-center">
            <div className="col-1"><h5>S/N</h5></div>
            <div className="col-4"><h5>SHIPPING DETAILS</h5></div>
            <div className="col-2"><h5>DATE</h5></div>
            <div className="col-1"><h5>TOTAL</h5></div>
            <div className="col-4"><h5>ORDER ID</h5></div>
        </div><hr></hr>

        {history.map((history, index)=>(
            <div className="row text-center" key={index}>
                <div className="col-1 my-3">{index+1}</div>
                <div className="col-4 my-3">
                    <div>{history.shippingName}</div>
                    <div>{history.shippingTelNumber}</div>
                    <div>{history.shippingAddress}</div>
                </div>
                <div className="col-2 my-3">{history.createdAt}</div>
                <div className="col-1 my-3">${history.orderTotal}</div>
                <div className="col-4 my-3">{history._id}</div> 
        </div>))} */}

        <table className='table'>
            <tr>
                <th>S/N</th>
                <th>SHIPPING DETAILS</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>ORDER ID</th>
            </tr>
            {history.map((history, index)=>(
                <tr>
                    <td>{index+1}</td>
                    <td>
                        <div>{history.shippingName}</div>
                        <div>{history.shippingTelNumber}</div>
                        <div>{history.shippingAddress}</div>
                    </td>
                    <td>{history.createdAt}</td>
                    <td>${history.orderTotal}</td>
                    <td>{history._id}</td>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default Dashboard