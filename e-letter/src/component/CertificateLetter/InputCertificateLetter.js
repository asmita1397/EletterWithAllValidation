import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import { MDBFormInline } from 'mdbreact';
export class InputCertificateLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            companyLocation: '',
            certificateType: '',
            date: '',
            checkedPUC:'',
            checkedSSC:'',
            CheckedDegree:'',
            withWaterMark:false,
            withHeader:false,

            //validation variable

            showEmployeeName: '',
            showCompanyLocation: '',
            showCertificateType: '',
            showOthers:false,
            showOthers:false,
        }
    }

    componentDidMount() {
        let editClick = localStorage.getItem("editClick");
        if (editClick) {
            this.setState({

                employeeName: this.props.empData.employeeName,
                certificateType: this.props.empData.certificateType,
            })

        }



        if ($('#puc').is(":checked")){

            
            this.setState({
                checkedPUC:'PUC'
            })

        }


        let that = this;
        $(document).ready(function () {
            $('#generate').click(function (e) {
              


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
                that.setState({
                    date: currentdate
                })


               
                let employeeName = (document.getElementById("employeeName").value).trim();
               
               
               

              

                if (employeeName === "") {
                    that.setState({ showEmployeeName: true })
                }


              
                if (employeeName !== "") {
                 
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
    hideCompanyLocation = () => {
        this.setState({
            showCompanyLocation: false
        })
    }

    hideCertificateType = () => {
        this.setState({
            showCertificateType: false
        })
    }


    pass = (event) => {
        event.preventDefault();
    

        this.props.clicked(this.state)
        this.props.history.push('/certificateLetter')

    }

     CheckValue = () => {

         if(document.getElementById("puc").checked===true){
            
            this.setState({
                checkedPUC:'PUC'
            })

         }

         if(document.getElementById("ssc").checked===true){
            
            this.setState({
                checkedSSC:'SSLC'
            })

         }
         if(document.getElementById("degree").checked===true){

            this.setState({
                checkedDegree:'Degree'
            })

         }
      


        if(document.getElementById("checkOthers").checked===true){
              
              this.setState({
                  showOthers:true
              })

        }
        else{
            this.setState({
                showOthers:false
            })
        }
       


      

    }

  
    onCheckHandler=(event)=>{
      

       
       if(event.target.value=='false'){
           this.setState({
               withWaterMark:true
           })
          
       }
       else{
          
           this.setState({
               withWaterMark: false
           })
         

       }
    }

    onChangeHeader=(event)=>{

     
      
      if(event.target.value=='false'){
          this.setState({
              withHeader:true
          })
        
      }
      else{
        
          this.setState({
              withHeader: false
          })
         
      }


     }

    



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
                                        <h3 className="text-center black-text font-bold ">Certificate Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <MDBInput autocomplete="off" value={this.state.employeeName} onKeyPress={this.hideEmployeeName} label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                               
                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out employee Name field * </div> : null}
                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showCompanyLocation ? <div id="errordiv" className="container-fluid">Please fill out company Location field * </div> : null}
                                                </div>
                                            </div>
                                            

<div className="row">
                                                <div className="col-3">
                                                <div className="custom-control custom-checkbox custom-control-inline col-6">
  <input type="checkbox" value={this.state.checkedSSC} className="custom-control-input" onChange={(event) => {
                                                       this.CheckValue(event)
                                                    }} id="puc" />
  <label style={{whiteSpace: 'nowrap'}} className="custom-control-label" htmlFor="puc">SSLC</label>
</div>

                                                </div>
                                                <div className="col-3">
                                                <div className="custom-control custom-checkbox custom-control-inline col-6">
  <input type="checkbox" value={this.state.checkedPUC} className="custom-control-input" id="ssc"  onChange={(event) => {
                                                          this.CheckValue(event)
                                                    }} />
  <label style={{whiteSpace: 'nowrap'}} className="custom-control-label" htmlFor="ssc">PUC</label>
</div>

                                                    </div>

                                                    <div className="col-3">
                                                <div className="custom-control custom-checkbox custom-control-inline col-6">
  <input type="checkbox" value={this.state.checkedDegree} className="custom-control-input" id="degree"  onChange={(event) => {
                                                          this.CheckValue(event)
                                                    }} />
  <label style={{whiteSpace: 'nowrap'}} className="custom-control-label" htmlFor="degree">Degree</label>
</div>

                                                    </div>
                                                    <div className="col-3">
                                                <div className="custom-control custom-checkbox custom-control-inline col-6">
  <input type="checkbox" className="custom-control-input" id="checkOthers" onClick={this.CheckValue}  onChange={this.dataValue} />
  <label style={{whiteSpace: 'nowrap'}} className="custom-control-label" htmlFor="checkOthers">Others</label>
</div>

                                                    </div>
                                            </div>
                                             <hr></hr>


                                          
                                           
                                              
                                               <div class="row">
                                              
                                               {this.state.showOthers?
                                                 <div class="col-md-12">
                                                 <MDBInput autocomplete="off" value={this.state.certificateType} onKeyPress={this.hideEmployeeName} label="OtherCertificate" className="w-100" name="otherCertificate" title="otherCertificate" id="otherCertificate" onChange={(event) => {
                                                     this.setState({
                                                        certificateType: event.target.value
                                                     })
                                                 }} />
                                             </div>:null}
                                             
                                             
                                      
                                                </div>

                                              
                                                <div className=" input-group w-50 container-fluid">
                                                    <MDBBtn outline style={{marginTop: '20px'}} id="generate" type="submit" className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>
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
        export default withRouter(InputCertificateLetter)
