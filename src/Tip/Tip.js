import React, { Component } from 'react'
import './tip.css'



export default class Tip extends Component {

    constructor(){

        super();

        this.state = {
            data: 0,
            tip:[],
            customer: "",
            input: [],
            customers:0
        }
    }



    bill() {

        let billAmt = document.getElementById("amt").value;

        if (isNaN(billAmt)) {

            alert("Enter only Number");
            document.getElementById("amt").value = "";
            
            
        }

        
    }



    select(){
        let billAmt = document.getElementById("amt").value;
        let selectVal = document.getElementById("selectvalue").value;
        let perCal = billAmt * (selectVal / 100);

        this.setState({data: perCal})
        
    }

    PushTip(){

        var arr = this.state.tip
        var arr1 = this.state.input
        this.setState({customers:arr1.length})

        console.log(this.state.tip)

        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
             
            sum = sum + arr[i];
            
        }

       document.getElementById("total").innerHTML = sum;


    }

    Customer() {

        let customerName = document.getElementById("customer").value;

        this.setState({customer: customerName})

        
    }

    Push(){

        var arr = this.state.input
        arr.push(this.state.customer)
        this.setState({input:arr})
        // this.setState({customers:arr.length})

        console.log(this.state.input)

        document.getElementById("customer").value = "";
        document.getElementById("amt").value = "";
        document.getElementById("select").value = "0";

        var arr = this.state.tip
        arr.push(this.state.data)
        this.setState({tip:arr})


    }



    render() {
        return (
            <>

             

            <div className="middle">

            

            <div className="content">
            <h1 className="heading">React App For Restaurant Owners</h1>

            <div className="input space">

            

            <div className="labels"><label htmlFor="amt">Enter Bill Amount</label> </div>

            <input type="text" id="amt" onInput={()=>this.bill()} autoComplete="off"></input> 

            </div>
            
            <div className="select space">

            <div className="labels"><label htmlFor="selectvalue">Select Tip Percent</label> </div>

             <select id="selectvalue" onChange={()=>this.select()}>
            <option id="select">Select</option>
                <option value="5">Bad Service</option>
                <option value="10">Moderate Service</option>
                <option value="20">Excellent Service</option>
            </select>

            </div>

            <div className="customer space">

            <div className="labels"><label htmlFor="customer">Customer Name</label> </div>


             <input type="text" id="customer" onChange={()=>this.Customer()} autoComplete="off" ></input>

            </div>

            <div className="addcustomer space">


            <button onClick={()=>this.Push()} >Add Customer</button>

            </div>

            <div className="customers">

            <h1>Customers List</h1>

            <ol style= {{margin:"10px"}}>
            {this.state.input.map((name, index)=> {return <li key ={name}>{name} Offering A Tip Of {this.state.tip[index]} Rs.</li>})}
            
            </ol>

            </div>

            <div className="calculatetip space">

            <button onClick={()=>this.PushTip()}>Calculate Total Customers And Total Tip Amount</button>

            </div>

            {/* <div className="customernumbers"> */}

            {/* <h1 ></h1>
            <h2>Customers </h2> */}

            

            {/* </div> */}

            <table style={{ width:"100%", padding:"40px 20px"}}>
                <thead >
                    <tr><th>Total Customers</th>
                    <th>Total Tip Amount</th></tr>
                </thead>

                <tbody style={{textAlign:"center"}}>
                    <tr><td>{this.state.customers}</td>
                    <td id="total"> </td></tr>
                </tbody>
            </table>

            </div>

            </div>

            

                
            </>
        )
    }
}
