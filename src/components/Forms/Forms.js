import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Forms.css"

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRadio,
    MDBFile,
}
    from 'mdb-react-ui-kit';

function App() {
    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center'>
                <MDBCol lg='9' className='my-5'>

                    <h1 class="text-white mb-4">Apply for your first driving class</h1>

                    <MDBCard>
                        <MDBCardBody className='px-4'>

                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Full name</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <MDBInput label='' size='lg' id='form1' type='text' />
                                </MDBCol>

                            </MDBRow>

                            <hr className="mx-n3" />

                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Email address</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <MDBInput label='example@example.com' size='lg' id='form2' type='email' />
                                </MDBCol>

                            </MDBRow>


                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Contact-Number</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <MDBInput label='' size='lg' id='form1' type='number' />
                                </MDBCol>

                            </MDBRow>

                            <hr className="mx-n3" />

                            <MDBRow>



                                <MDBCol md='6' className='mb-4'>
                                    <h6 className="fw-bold">Do you have Driving License : </h6>
                                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Yes' inline />
                                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='No' inline />
                                </MDBCol>

                            </MDBRow>

                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Upload your Dl License</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <MDBFile size='lg' id='customFile' />
                                    <div className="small text-muted mt-2">Upload your DL License . Max file size 50 MB</div>
                                </MDBCol>

                            </MDBRow>

                            <MDBRow>



                                <MDBCol md='6' className='mb-4'>
                                    <h6 className="fw-bold">Vehicle: </h6>
                                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Car' inline />
                                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Bike' inline />
                                </MDBCol>

                            </MDBRow>

                            <MDBRow>



                                <MDBCol md='6' className='mb-4'>
                                    <h6 className="fw-bold">Duration : </h6>
                                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='1 Months' inline />
                                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='3 Months' inline />
                                </MDBCol>

                            </MDBRow>



                            <hr className="mx-n3" />

                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Upload Adharcard</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <MDBFile size='lg' id='customFile' />
                                    <div className="small text-muted mt-2">Upload your Adhar Card or any other relevant Document . Max file size 50 MB</div>
                                </MDBCol>

                            </MDBRow>

                            <hr className="mx-n3" />

                            <MDBBtn className='my-4' size='lg'>send application</MDBBtn>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default App;