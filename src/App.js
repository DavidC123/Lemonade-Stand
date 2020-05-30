import React, { Component } from 'react';
import FormPage from './FormPage.js';
import Report from './Report.js';
import * as ReactBootStrap from "react-bootstrap";
import { Link } from 'react-scroll';

class App extends Component {

  constructor(props) {

    super(props);

    this.getReport = this.getReport.bind(this);

    this.state = {
      newName: '',
      newRole: '',
      newCommission: '',
      newProduct: '',
      newPrice: '',

      report: [],

      staff: [
        { name: "Jeff Terry", role: "Senior", commission: 10, id: Math.random() * Number.MAX_SAFE_INTEGER },
        { name: "Thomas Black", role: "Manager", commission: 20, id: Math.random() * Number.MAX_SAFE_INTEGER },
        { name: "John Rice", role: "Junior", commission: 5, id: Math.random() * Number.MAX_SAFE_INTEGER },
        { name: "Larry Long", role: "Junior", commission: 0, id: Math.random() * Number.MAX_SAFE_INTEGER },
      ],
      prices: [
        { product: "Fresh Lemon Lemonade", price: 1.50, id: Math.random() * Number.MAX_SAFE_INTEGER },
        { product: "Orange & Lemon Splash", price: 2.00, id: Math.random() * Number.MAX_SAFE_INTEGER },
        { product: "Sugary Shocker", price: 3.00, id: Math.random() * Number.MAX_SAFE_INTEGER },
        { product: "Wild Whiskey Whack", price: 5.50, id: Math.random() * Number.MAX_SAFE_INTEGER }
      ]
    }
  }


  deleteItem(id) {
    let tempList = this.state.staff

    let tempList2 = tempList.filter((item) => item.id !== id)

    this.setState({
      staff: tempList2
    })
  }

  deleteItem2(id) {
    let tempList = this.state.prices

    let tempList2 = tempList.filter((item) => item.id !== id)

    this.setState({
      prices: tempList2
    })
  }

  updateName(input) {
    this.setState({
      newName: input
    })

  }

  updateRole(input) {
    this.setState({
      newRole: input
    })
  }

  updateCommission(input) {
    this.setState({
      newCommission: input
    })
  }

  updateProduct(input) {
    this.setState({
      newProduct: input
    })
  }

  updatePrice(input) {
    this.setState({
      newPrice: input
    })
  }

  addItem() {
    const newItem = {
      id: Math.random() * Number.MIN_SAFE_INTEGER,
      name: this.state.newName.slice(),
      role: this.state.newRole.slice(),
      commission: this.state.newCommission.slice(),
    }


    let tempList = this.state.staff

    if (newItem.name !== '' && newItem.role !== '' && newItem.commission !== '') {
      tempList.push(newItem)
    } else {
      alert("Please fill in all fields");
    }

    this.setState({
      newName: '',
      newRole: '',
      newCommission: '',
      staff: tempList
    })
  }

  addItem2() {
    const newItem = {
      id: Math.random() * Number.MIN_SAFE_INTEGER,
      product: this.state.newProduct.slice(),
      price: this.state.newPrice.slice(),
    }


    let tempList = this.state.prices

    if (newItem.product !== '' && newItem.price !== '') {
      tempList.push(newItem)
    } else {
      alert("Please fill in all fields");
    }

    this.setState({
      newProduct: '',
      newPrice: '',
      prices: tempList
    })

  }

  getReport(val) {
    this.setState({
      report: val
    })
  }

  componentDidMount() {
    document.body.style.backgroundColor = '#5fdde5';
    document.body.style.color = '#e84a5f';
  }

  render() {
    return (
      <div>

        <ReactBootStrap.Navbar className="justify-content-end" bg="primary">
          <ReactBootStrap.Nav variant="tabs"  >
            <ReactBootStrap.Nav.Item>

              <ReactBootStrap.Nav.Link> <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} style={{ color: "white", fontWeight: "bold" }}>Employee List</Link></ReactBootStrap.Nav.Link>

            </ReactBootStrap.Nav.Item>

            <ReactBootStrap.Nav.Item>

              <ReactBootStrap.Nav.Link><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500} style={{ color: "white", fontWeight: "bold" }}>Product List</Link></ReactBootStrap.Nav.Link>

            </ReactBootStrap.Nav.Item>

            <ReactBootStrap.Nav.Item>

              <ReactBootStrap.Nav.Link><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} style={{ color: "white", fontWeight: "bold" }}>Form</Link></ReactBootStrap.Nav.Link>

            </ReactBootStrap.Nav.Item>

            <ReactBootStrap.Nav.Item>

              <ReactBootStrap.Nav.Link><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500} style={{ color: "white", fontWeight: "bold" }}>Report</Link></ReactBootStrap.Nav.Link>

            </ReactBootStrap.Nav.Item>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar>

        <h1 class="text-center" >Lemonade Stand</h1>
        <div >
          <ReactBootStrap.Image width="200" className="rounded mx-auto d-block" src={require('./lemonade.jpg')} alt="Lemonade" fluid roundedCircle />
        </div>
        <br></br>
        <h2 name='test1'>Employee List</h2>
        <ReactBootStrap.Table variant="primary" striped bordered hover>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Position</th>
              <th>Commission (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.state.staff.map(item => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td>{((item.commission / 100) * 100).toFixed(2) + '%'}</td>
                  <ReactBootStrap.Button variant="danger" onClick={() => this.deleteItem(item.id)}>Delete Row</ReactBootStrap.Button>
                </tr>
              )
            })}
          </tbody>
        </ReactBootStrap.Table>
        <br></br>
        <br ></br>
        <p class="h3">Enter a new employee</p>
        <ReactBootStrap.Form>

          <ReactBootStrap.InputGroup className="mb-3">
            <ReactBootStrap.InputGroup.Prepend>
              <ReactBootStrap.InputGroup.Text id="basic-addon1">Full Name:</ReactBootStrap.InputGroup.Text>
            </ReactBootStrap.InputGroup.Prepend>
            <ReactBootStrap.FormControl style={{ backgroundColor: '#f4ea8e' }} aria-describedby="basic-addon1" className='in' placeholder="Enter Full Name" type='text' value={this.state.newName} onChange={(e) => this.updateName(e.target.value)} />
          </ReactBootStrap.InputGroup>


          <ReactBootStrap.InputGroup className="mb-3">
            <ReactBootStrap.InputGroup.Prepend>
              <ReactBootStrap.InputGroup.Text id="basic-addon1">Position:</ReactBootStrap.InputGroup.Text>
            </ReactBootStrap.InputGroup.Prepend>
            <ReactBootStrap.FormControl style={{ backgroundColor: '#f4ea8e' }} aria-describedby="basic-addon1" className='in2' placeholder="Enter Position" type='text' value={this.state.newRole} onChange={(e) => this.updateRole(e.target.value)} />
          </ReactBootStrap.InputGroup>

          <ReactBootStrap.InputGroup className="mb-3">
            <ReactBootStrap.InputGroup.Prepend>
              <ReactBootStrap.InputGroup.Text id="basic-addon1">Commission (%):</ReactBootStrap.InputGroup.Text>
            </ReactBootStrap.InputGroup.Prepend>
            <ReactBootStrap.FormControl style={{ backgroundColor: '#f4ea8e' }} aria-describedby="basic-addon1" className='in3' placeholder="Enter Commission Rate" type='number' value={this.state.newCommission} onChange={(e) => this.updateCommission(e.target.value)} />
          </ReactBootStrap.InputGroup>

          <ReactBootStrap.Button size="lg" block className='addBtn' onClick={() => this.addItem()}>ADD EMPLOYEE</ReactBootStrap.Button>
        </ReactBootStrap.Form>


        <br></br>
        <br ></br>
        <hr style={{
          color: '#000000',
          backgroundColor: '#000000',
          height: 5,
          borderColor: '#000000'
        }}></hr>
        <br ></br>
        <br ></br>

        <p class="h3" name='test2' >Products and Prices</p>
        <ReactBootStrap.Table variant="primary" striped bordered hover>
          <thead>
            <tr>
              <th>Lemonade</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.prices.map(item => {
              return (
                <tr>
                  <td>{item.product}</td>
                  <td>{'$' + (Math.round(item.price * 100) / 100).toFixed(2)}</td>
                  <ReactBootStrap.Button variant="danger" onClick={() => this.deleteItem2(item.id)}>Delete Row</ReactBootStrap.Button>
                </tr>
              )
            })}
          </tbody>
        </ReactBootStrap.Table>
        <br></br>
        <br ></br>
        <p class="h3">Add item to menu</p>

        <ReactBootStrap.Form>

          <ReactBootStrap.InputGroup className="mb-3">
            <ReactBootStrap.InputGroup.Prepend>
              <ReactBootStrap.InputGroup.Text id="basic-addon1">Lemonade Name:</ReactBootStrap.InputGroup.Text>
            </ReactBootStrap.InputGroup.Prepend>
            <ReactBootStrap.FormControl style={{ backgroundColor: '#f4ea8e' }} aria-describedby="basic-addon1" className='in' placeholder="Enter Product Name" type='text' value={this.state.newProduct} onChange={(e) => this.updateProduct(e.target.value)} />
          </ReactBootStrap.InputGroup>


          <ReactBootStrap.InputGroup className="mb-3">
            <ReactBootStrap.InputGroup.Prepend>
              <ReactBootStrap.InputGroup.Text id="basic-addon1">Price:</ReactBootStrap.InputGroup.Text>
            </ReactBootStrap.InputGroup.Prepend>
            <ReactBootStrap.FormControl style={{ backgroundColor: '#f4ea8e' }} aria-describedby="basic-addon1" className='in2' placeholder="Enter Price" type='number' value={this.state.newPrice} onChange={(e) => this.updatePrice(e.target.value)} />
          </ReactBootStrap.InputGroup>

          <ReactBootStrap.Button size="lg" block className='addBtn' onClick={() => this.addItem2()}>ADD ITEM</ReactBootStrap.Button>
        </ReactBootStrap.Form>

        <br />
        <br />
        <hr style={{
          color: '#000000',
          backgroundColor: '#000000',
          height: 5,
          borderColor: '#000000'
        }} />
        <br />

        <div name="test3">
          <FormPage sendReport={this.getReport} staff={this.state.staff} products={this.state.prices} />
        </div>

        <br />
        <br />
        <hr />

        <div name="test4">
          <Report report={this.state.report} />
        </div>
      </div >
    )
  }
}
export default App;
