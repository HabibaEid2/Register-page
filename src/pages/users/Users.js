import axios from "axios";
import { Container } from "react-bootstrap";
import React , {useContext, useEffect, useState} from "react";
import { token } from "../../context/Context";
import './users.css'
export default function Users() {
    let  [users , setUsers] = useState([]) ; 
    let [active , setActive] = useState(0)
    let context = useContext(token) ; 
    useEffect(() => {
        try {
            axios.get("http://127.0.0.1:8000/api/user/show" , {
                headers : {
                    Authorization : "Bearer " + context.value , 
                }
            })
            .then((res) => {
                console.log(res.data)
                let data = res.data.map((ele , index) => {
                    return (
                        <div className="row" key={ele.id}>
                            <div>{index + 1}</div>
                            <div>{ele.name}</div>
                            <div>{ele.email}</div>
                            <div>
                                <div className="remove">
                                    <i className="fa-solid fa-trash" style={{color : "brown"}} onClick={() => remove(ele.id)}></i>
                                </div>
                            </div>
                        </div>
                    )
                })
                setUsers(data) ; 
            })
        } catch(err) {
            console.log(err)
        }
    } , [active])

    async function remove(id) {
        await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}` , {
            headers : {
                Authorization : "Bearer " + context.value , 
            }
        }).then(() => {
            console.log("the element is deleted")
            setActive(++active)
        })
    }
    return(
        <Container>
            <div className="users">
                <div className="row">
                    <div className="headEle">-</div>
                    <div className="headEle">Name</div>
                    <div className="headEle">Email</div>
                    <div className="headEle">Remove</div>
                </div>
                {users} 
            </div>
        </Container>
    )
}