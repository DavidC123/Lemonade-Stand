import React from 'react'
import * as ReactBootStrap from "react-bootstrap";

class Report extends React.Component {

    render() {

        var totalRev = 0;
        var totalCom = 0;

        return (
            <div>
                <h2 class="text-center">Employee Sales and Commissions</h2>
                <ReactBootStrap.Table variant="primary" striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Items Sold</th>
                            <th>Total Price</th>
                            <th>Commission Earned</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.report.map(item => {
                            totalRev += item.revenue;
                            totalCom += item.commission;
                            return (
                                <tr>
                                    <td>{item.date}</td>
                                    <td>{item.list}</td>
                                    <td>{('$' + (Math.round(item.revenue * 100) / 100).toFixed(2))}</td>
                                    <td>{('$' + (Math.round(item.commission * 100) / 100).toFixed(2))}</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td>TOTAL</td>
                            <td></td>
                            <td>{('$' + (Math.round(totalRev * 100) / 100).toFixed(2))}</td>
                            <td>{('$' + (Math.round(totalCom * 100) / 100).toFixed(2))}</td>
                        </tr>

                    </tbody>

                </ReactBootStrap.Table>
            </div>
        )
    }
}

export default Report

