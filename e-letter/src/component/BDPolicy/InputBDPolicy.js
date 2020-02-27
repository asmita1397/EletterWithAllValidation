import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import moment from 'moment';

export class InputBDPolicy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salute: 'S/o',
            employeeName: '',
            employeeId: '',
            joiningDate: '',
            address: '',
            fatherName: '',
            age: '',
            date: '',
            CIN: '',
            designation: '',
            withWaterMark: false,
            withHeader: false,
            gender: {
                gender1: 'He',
                gender2: 'his',
                gender3: 'him',
            },

            // valiadation state variables
            showAddress: '',
            showEmployeeName: '',
            showInvalidEmployeeName:'',
            showfatherName: '',
            showAge: '',
            showEmployeeId: '',
            showJoiningDate: '',
            showDate: '',
            showCIN: '',
            showDesignation: '',
            validDate: ''
        }
    }


    componentDidMount() {


        let editClick = localStorage.getItem("editClick");
        if (editClick) {
            this.setState({
                salute: this.props.empData.salute,
                employeeName: this.props.empData.employeeName,
                employeeId: this.props.empData.employeeId,
                fatherName: this.props.empData.fatherName,
                age: this.props.empData.age,
                designation: this.props.empData.designation,
                joiningDate: this.props.empData.joiningDate,
                address: this.props.empData.address
            })

        }
        var that = this;
        $(document).ready(() => {
            $('#generate').click((e) => {
                debugger
                console.log("inside CDM")
                debugger;

                const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];


                const nth = (d) => {
                    if (d > 3 && d < 21) return 'th';
                    switch (d % 10) {
                        case 1: return "st";
                        case 2: return "nd";
                        case 3: return "rd";
                        default: return "th";
                    }
                }

                let today = new Date();
                let currentdate = today.getDate() + nth(today.getDate()) + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
                this.setState({
                    date: today
                })

                var d = new Date();
                console.log("Date =", d.setMonth(d.getMonth() + 7))

                console.log("dattetaetaetaet ", this.state)
                if (this.state.salute === "D/o") {
                    this.setState({
                        ...this.state,
                        gender: {
                            gender1: 'She',
                            gender2: 'her',
                            gender3: 'her'
                        }
                    })
                }

                let fatherName = (document.getElementById("fatherName").value).trim();
                let age = (document.getElementById("age").value).trim();
                let joiningDate = (document.getElementById("joiningDate").value).trim();
                let designation = (document.getElementById("designation").value).trim();
                let employeeId = (document.getElementById("employeeId").value).trim();
                let address = (document.getElementById("address").value).trim();
                let employeeName = (document.getElementById("employeeName").value).trim();
                let selectedDate = new Date(joiningDate)
                let now = new Date()

                console.log("Inside Validation", joiningDate, employeeName, designation, employeeId);


                if (joiningDate === "") {
                    this.setState({ showJoiningDate: true })
                }
                if (designation === "") {
                    this.setState({ showDesignation: true })
                }
                if (age === "") {
                    that.setState({ showAge: true })
                }
                if (fatherName === "") {
                    that.setState({ showFatherName: true })
                }
                if (employeeId === "") {
                    this.setState({ showEmployeeId: true })
                }
                if (address === "") {
                    this.setState({ showAddress: true })
                }
                if (employeeName === "") {
                    this.setState({ showEmployeeName: true })
                }

                /*    if(selectedDate<now){
                      that.setState({
                         validDate:"true"
                      }) 
  
                     return false;
                }  */

                if(employeeName.length>20 )
                {
                    that.setState({ 
                    showInvalidEmployeeName: true,
                     }) 
                    return false;
                }

                if (joiningDate != "" && designation != "" && employeeId != "" && fatherName != "" && age != "" && employeeName !== "" && address != "") {

                    console.log("True return")
                    return true;
                }
                else {
                    return false;
                }
            });
        });
    }


    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideInvalidEmployeeName = () => {
        this.setState({
            showInvalidEmployeeName: false
        })
    }
    hideAddress = () => {
        this.setState({
            showAddress: false
        })
    }
    hideFatherName = () => {
        this.setState({
            showFatherName: false
        })
    }
    hideAge = () => {
        this.setState({
            showAge: false
        })
    }
    hideEmployeeId = () => {
        this.setState({
            showEmployeeId: false
        })
    }
    hideJoiningDate = () => {
        this.setState({
            showJoiningDate: false
        })
    }
    hideCIN = () => {
        this.setState({
            showCIN: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }
    hideInvaliddate = () => {
        this.setState({
            validDate: false
        })

    }

    onCheckHandler = (event) => {
        debugger;

        console.log("Checkbox value ==", event.target.value)
        if (event.target.value == 'false') {
            this.setState({
                withWaterMark: true
            })
            console.log("if  ==", this.state.withWaterMark)
        }
        else {
            debugger;
            this.setState({
                withWaterMark: false
            })
            console.log("else  ==", this.state.withWaterMark)

        }
    }

    onChangeHeader = (event) => {

      

        console.log("Checkbox value ==", event.target.value)
        if (event.target.value == 'false') {
            this.setState({
                withHeader: true
            })
            console.log("if  ==", this.state.withHeader)
        }
        else {
          
            this.setState({
                withHeader: false
            })
            console.log("else  ==", this.state.withHeader)

        }


    }


    pass = (event) => {
        event.preventDefault();
        console.log("this.props.empData========", this.state)



        this.props.clicked(this.state)
        this.props.history.push('/BDPolicy')

    }

    //edit

    //
    render() {

        return (
            <div>
                <Home buttonShow={false} />
                <div >
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-auto container mt-5 pb-5">
                                <div style={{ width: '500px' }} className="card m-auto shadow-lg mt-5">
                                    <div class="card-header" style={{ borderRadius: '0px !important', background: 'white' }} >
                                        <h3 className="text-center black-text font-bold ">BD Policy Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>

                                            <div class="row">

                                                <div className="col-md-2" style={{ paddingTop: '25px' }}>
                                                    <select style={{ width: '70px' }} value={this.state.salute} class="browser-default custom-select" autocomplete="off" name="salutation" title="salutation" id="salutation" onChange={(event) => {
                                                        this.setState({
                                                            salute: event.target.value
                                                        })
                                                    }}>
                                                        <option selected value="S/o">Mr.</option>
                                                        <option value="D/o">Ms.</option>
                                                        <option value="D/o ">Mrs.</option>
                                                    </select>
                                                </div>
                                                <div class="col-5">
                                                <MDBInput autocomplete="off" onKeyPress={()=>{this.hideEmployeeName(); this.hideInvalidEmployeeName();}} onClick={()=>{this.hideEmployeeName(); this.hideInvalidEmployeeName();}}
                                                        value={this.state.employeeName} label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                            this.setState({
                                                                employeeName: event.target.value
                                                            });this.hideEmployeeName();this.hideInvalidEmployeeName();
                                                        }} />
                                                </div>
                                                <div className="col-5">
                                                    <MDBInput autocomplete="off" value={this.state.fatherName} label="Father Name" type="text" name="fatherName" id="fatherName" title="Company Location" onChange={(event) => {
                                                        this.setState({
                                                            fatherName: event.target.value
                                                        }); this.hideFatherName();
                                                    }} />
                                                </div>
                                            </div>

                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="offset-2 col-5 p-0" >
                                                    {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out Name field * </div> : null}
                                                    {this.state.showInvalidEmployeeName ? <div id="errordiv" className="container-fluid">Maximum length of this field is 20 Characters * </div> : null}

                                                </div>
                                                <div className="col-5 p-0" style={{ width: 0 }}>
                                                    {this.state.showFatherName ? <div id="errordiv" className="container-fluid">Please fill out Father Name field * </div> : null}

                                                </div>
                                            </div>




                                            <div className="row">
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideEmployeeId} value={this.state.employeeId} label="Employee Id" name="employeeId" id="employeeId" title="Employee Id" onChange={(event) => {
                                                        this.setState({
                                                            employeeId: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideDesignation}
                                                        value={this.state.designation} label="Designation" name="designation" id="designation" title="Designation" onChange={(event) => {
                                                            this.setState({
                                                                designation: event.target.value
                                                            })
                                                        }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showEmployeeId ? <div id="errordiv" className="container-fluid">Please fill out ID field * </div> : null}

                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showDesignation ? <div id="errordiv" className="container-fluid">Please fill Designation field * </div> : null}
                                                </div>
                                            </div>
                                            {/* address */}
                                            <div class="row">
                                                <div class="col-6">
                                                <MDBInput autocomplete="off" type="date" max="2050-12-31" value={this.state.joiningDate} onKeyPress={() => { this.hideJoiningDate(); this.hideInvaliddate() }} onClick={() => { this.hideJoiningDate(); this.hideInvaliddate() }} label="Joining Date" title="Joining Date" name="Joining Date" id="joiningDate" onChange={(event) => {
                                                        this.setState({
                                                            joiningDate: event.target.value
                                                        }); this.hideJoiningDate(); this.hideInvaliddate();
                                                    }} />
                                                   
                                                </div>
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" value={this.state.age} label="Age" type="number" name="age" id="age" title="Age" onChange={(event) => {
                                                        this.setState({
                                                            age: event.target.value
                                                        }); this.hideAge()
                                                    }} min="18" max="120" />
                                                </div>
                                            </div>

                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                {this.state.showJoiningDate ? <div id="errordiv" className="container-fluid">Please fill out JoiningDate field * </div> : null}
                                                   
                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showAge ? <div id="errordiv" className="container-fluid">Please fill out Age field * </div> : null}

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                <MDBInput autocomplete="off" value={this.state.address} label="Address" type="textarea" name="address" id="address" title="address" onChange={(event) => {
                                                        this.setState({
                                                            address: event.target.value
                                                        }); this.hideAddress()
                                                    }} />
                                                </div>

                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-12 p-0">
                                                {this.state.showAddress ? <div id="errordiv" className="container-fluid">Please fill out Address field * </div> : null}


                                                </div>

                                            </div>


                                            {/*   <div className="row">
                                                <div className="col-6">
                                                <div className="custom-control custom-checkbox custom-control-inline col-6">
  <input type="checkbox" value={this.state.withHeader} className="custom-control-input" onChange={(event) => {
                                                       this.onChangeHeader(event)
                                                    }} id="withLetterHead" />
  <label style={{whiteSpace: 'nowrap'}} className="custom-control-label" htmlFor="withLetterHead">With Letter Head</label>
</div>

                                                </div>
                                                <div className="col-6">
                                                <div className="custom-control custom-checkbox custom-control-inline col-6">
  <input type="checkbox" className="custom-control-input" id="withWatermark" value={this.state.withWaterMark} onChange={(event) => {

                                                              this.onCheckHandler(event)
                                                       
                                                    }} />
  <label style={{whiteSpace: 'nowrap'}} className="custom-control-label" htmlFor="withWatermark">With WaterMark</label>
</div>

                                                    </div>
                                            </div> */}

                                            <div className=" input-group w-50 container-fluid">
                                                <MDBBtn outline type="submit" id="generate" outline className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>

                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>








            </div>
        )
    }
}

export default withRouter(InputBDPolicy)