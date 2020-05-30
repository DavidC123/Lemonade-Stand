import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";

class FormPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newName: '',
            newCommission: 0,

            newAmount1: '',
            newAmount2: '',
            newAmount3: '',
            newAmount4: '',
            newAmount5: '',
            newAmount6: '',
            newAmount7: '',
            newAmount8: '',
            newAmount9: '',
            newAmount10: '',

            arr: this.props.products,

            report: []
        }
    }

    addForm(list) {
        //store date, list of items sold, revenue, commission earned.

        var total = 0;
        var commission = 0;

        var itemsSold = [];
        var i = 0;

        var tf = false;

        if (this.state.newAmount1 !== '') {
            itemsSold[i] = this.state.newAmount1 + ' ' + list[0];
            i++;
            tf = true;
            total += (this.state.newAmount1 * this.state.arr[0].price);
        } if (this.state.newAmount2 !== '') {
            itemsSold[i] = this.state.newAmount2 + ' ' + list[1];
            i++;
            tf = true;
            total += (this.state.newAmount2 * this.state.arr[1].price);
        } if (this.state.newAmount3 !== '') {
            itemsSold[i] = this.state.newAmount3 + ' ' + list[2];
            i++;
            tf = true;
            total += (this.state.newAmount3 * this.state.arr[2].price);
        } if (this.state.newAmount4 !== '') {
            itemsSold[i] = this.state.newAmount4 + ' ' + list[3];
            i++;
            tf = true;
            total += (this.state.newAmount4 * this.state.arr[3].price);
        } if (this.state.newAmount5 !== '') {
            itemsSold[i] = this.state.newAmount5 + ' ' + list[4];
            i++;
            tf = true;
            total += (this.state.newAmount5 * this.state.arr[4].price);
        } if (this.state.newAmount6 !== '') {
            itemsSold[i] = this.state.newAmount6 + ' ' + list[5];
            i++;
            total += (this.state.newAmount6 * this.state.arr[5].price);
        } if (this.state.newAmount7 !== '') {
            itemsSold[i] = this.state.newAmount7 + ' ' + list[6];
            i++;
            tf = true;
            total += (this.state.newAmount7 * this.state.arr[6].price);
        } if (this.state.newAmount8 !== '') {
            itemsSold[i] = this.state.newAmount8 + ' ' + list[7];
            i++;
            tf = true;
            total += (this.state.newAmount8 * this.state.arr[7].price);
        } if (this.state.newAmount9 !== '') {
            itemsSold[i] = this.state.newAmount9 + ' ' + list[8];
            i++;
            tf = true;
            total += (this.state.newAmount9 * this.state.arr[8].price);
        } if (this.state.newAmount10 !== '') {
            itemsSold[i] = this.state.newAmount10 + ' ' + list[9];
            i++;
            tf = true;
            total += (this.state.newAmount10 * this.state.arr[9].price);
        }

        if (tf === false) {
            alert("Please enter an amount sold.");
        }

        commission = total * (this.state.newCommission / 100)

        var currentdate = new Date();
        var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();

        // console.log(datetime);
        // console.log(itemsSold.toString());
        // console.log(total);
        // console.log(commission);

        this.setState({
            newAmount1: '',
            newAmount2: '',
            newAmount3: '',
            newAmount4: '',
            newAmount5: '',
            newAmount6: '',
            newAmount7: '',
            newAmount8: '',
            newAmount9: '',
            newAmount10: '',
            newCommission: 10,  //default
            newName: '',
        })

        const newItem = {
            date: datetime.slice(),
            list: itemsSold.toString().slice(),
            revenue: total,
            commission: commission,
        }

        var tempList = [];
        tempList = this.state.report;

        tempList.push(newItem);

        this.setState({
            report: tempList
        })

        this.props.sendReport(this.state.report);

    }

    updateName(input) {
        this.setState({
            newName: input
        })
    }

    updateCommission(input) {
        this.setState({
            newCommission: input
        })
    }
    // ----
    updateAmount1(input) {
        this.setState({
            newAmount1: input,
        })
    }

    updateAmount2(input) {
        this.setState({
            newAmount2: input,
        })
    }

    updateAmount3(input) {
        this.setState({
            newAmount3: input,
        })
    }

    updateAmount4(input) {
        this.setState({
            newAmount4: input,
        })
    }

    updateAmount5(input) {
        this.setState({
            newAmount5: input,
        })
    }

    updateAmount6(input) {
        this.setState({
            newAmount6: input,
        })
    }

    updateAmount7(input) {
        this.setState({
            newAmount7: input,
        })
    }

    updateAmount8(input) {
        this.setState({
            newAmount8: input,
        })
    }

    updateAmount9(input) {
        this.setState({
            newAmount9: input,
        })
    }

    updateAmount10(input) {
        this.setState({
            newAmount10: input,
        })
    }

    renderSwitch(param, e) {
        switch (param) {
            case "updateAmount1": this.updateAmount1(e.target.value); break;
            case "updateAmount2": this.updateAmount2(e.target.value); break;
            case "updateAmount3": this.updateAmount3(e.target.value); break;
            case "updateAmount4": this.updateAmount4(e.target.value); break;
            case "updateAmount5": this.updateAmount5(e.target.value); break;
            case "updateAmount6": this.updateAmount6(e.target.value); break;
            case "updateAmount7": this.updateAmount7(e.target.value); break;
            case "updateAmount8": this.updateAmount8(e.target.value); break;
            case "updateAmount9": this.updateAmount9(e.target.value); break;
            case "updateAmount10": this.updateAmount10(e.target.value); break;
        }
    }




    render() {
        var list = [];
        for (var i = 0; i < this.state.arr.length; i++) {
            list.push(this.state.arr[i].product)
        }
        return (
            <div>
                <h2 class="text-center">Employee Sales Form</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Select Your Name</Form.Label>
                        <Form.Control as="select" size="sm" style={{ backgroundColor: '#f4ea8e' }} value={this.state.newName} onChange={(e) => this.updateName(e.target.value)} custom>
                            {this.props.staff.map(item => {
                                return (
                                    <option>{item.name}</option>
                                )
                            })}

                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Select Your Commission Rate (%)</Form.Label>
                        <Form.Control as="select" size="sm" style={{ backgroundColor: '#f4ea8e' }} value={this.state.newCommission} onChange={(e) => this.updateCommission(e.target.value)} custom>
                            {this.props.staff.map(item => {
                                return (
                                    <option>{item.commission}</option>
                                )
                            })}

                        </Form.Control>
                    </Form.Group>


                    {list.map(item => {

                        var myString = "updateAmount" + (list.indexOf(item) + 1);

                        return (
                            <Form.Group>
                                <Form.Label>{item}</Form.Label>
                                <Form.Control minLength={1} style={{ backgroundColor: '#f4ea8e' }} value={this.state["newAmount" + (list.indexOf(item) + 1)]} delayTimeout={100} type="number" placeholder="Enter Amount Sold" onChange={(e) => { this.renderSwitch(myString, e) }} />
                            </Form.Group>
                        )
                    })}

                    <Button size="lg" block className='addBtn' onClick={() => this.addForm(list)}>
                        Submit
                    </Button>

                </Form>

            </div>
        )
    }
}

export default FormPage

