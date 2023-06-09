import React, { Component } from "react";
import "./App.css";
import swal from "sweetalert";
import Card from "./Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employeeList: [
        {
          firstName: "Godknows",
          lastName: "Pesanai",
          phone: "0732266949",
          email: "godknowspesanai@gmail.com",
          nationalId: "03-131449J03",
          department: "Media",
          salary: "50000",
          joinDate: "30/8/2018",
        },
        {
          firstName: "Israel",
          lastName: "Ndamuka",
          phone: "0782266999",
          email: "israel@gmail.com",
          nationalId: "03-131449J03",
          department: "Media",
          salary: "70000",
          joinDate: "30/8/2017",
        },
        {
          firstName: "Eunice",
          lastName: "Mhoka",
          phone: "0712266999",
          email: "eunice@gmail.com",
          nationalId: "03-131449J03",
          department: "ICT",
          salary: "90000",
          joinDate: "30/8/2015",
        },
      ],
      addEmployee: false,
      editIndex: null,
    };
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateNationalId = this.updateNationalId.bind(this);
    this.updateDepartment = this.updateDepartment.bind(this);
    this.updateSalary = this.updateSalary.bind(this);
  }

  //Event Functions

  login() {
    const email = document.getElementById(`email`).value;
    const password = document.getElementById("password").value;
    email === "godknowspesanai@gmail.com" && password === "login"
      ? this.setState({
          user: {
            email: email,
            password: password,
          },
        })
      : swal("Access Denied", "Please Enter Correct Email And Password");
  }

  addEmployee() {
    this.setState({
      addEmployee: true,
    });
  }

  cancelAddEmployee() {
    this.setState({
      addEmployee: false,
    });
  }

  addEmployeeData() {
    const date = new Date();
    const firstName = document.getElementById(`firstName`).value;
    const lastName = document.getElementById(`lastName`).value;
    const phone = document.getElementById(`phone`).value;
    const email2 = document.getElementById(`email2`).value;
    const nationalId = document.getElementById(`nationalId`).value;
    const department = document.getElementById(`department`).value;
    const salary = document.getElementById(`salary`).value;
    const joinDate =
      date.getDate() + "/" + (+date.getMonth() + 1) + "/" + date.getFullYear();
    this.state.employeeList.push({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email2,
      nationalId: nationalId,
      department: department,
      salary: salary,
      joinDate: joinDate,
    });
    this.setState({
      addEmployee: false,
    });
  }

  logOut() {
    this.setState({
      user: false,
    });
  }

  deleteEmployee(index) {
    const empList = this.state.employeeList;
    empList.splice(index, 1);
    this.setState({
      empList,
    });
  }

  editEmployee(index) {
    this.setState({
      editIndex: index,
    });
  }

  canceleditEmployee() {
    this.setState({
      editIndex: null,
    });
  }

  updateEmployee() {
    const edI = this.state.editIndex;
    this.state.editedFirstName &&
      (this.state.employeeList[edI].firstName = this.state.editedFirstName);
    this.state.editedLastName &&
      (this.state.employeeList[edI].lastName = this.state.editedLastName);
    this.state.editedPhone &&
      (this.state.employeeList[edI].phone = this.state.editedPhone);
    this.state.editedEmail &&
      (this.state.employeeList[edI].email = this.state.editedEmail);
    this.state.editedNationalId &&
      (this.state.employeeList[edI].nationalId = this.state.editedNationalId);
    this.state.editedDepartment &&
      (this.state.employeeList[edI].department = this.state.editedDepartment);
    this.state.editedSalary &&
      (this.state.employeeList[edI].salary = this.state.editedSalary);
    this.setState({
      // employeeList[edI].firstName : this.state.editedFirstName,
      //I Tried This But It Throws An Error
      editIndex: null,
    });
  }

  updateFirstName(e) {
    this.setState({
      editedFirstName: e.target.value,
    });
  }

  updateLastName(e) {
    this.setState({
      editedLastName: e.target.value,
    });
  }

  updatePhone(e) {
    this.setState({
      editedPhone: e.target.value,
    });
  }

  updateEmail(e) {
    this.setState({
      editedEmail: e.target.value,
    });
  }

  updateNationalId(e) {
    this.setState({
      editedNationalId: e.target.value,
    });
  }

  updateDepartment(e) {
    this.setState({
      editedDepartment: e.target.value,
    });
  }

  updateSalary(e) {
    this.setState({
      editedSalary: e.target.value,
    });
  }

  //JSX Rendering Functions

  // renderHeader(){
  //   return(
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h1 className="App-title">Welcome To Our Odin Code</h1>
  //     </header>
  //   )
  // }

  renderLogin() {
    return (
      <div className="loginForm">
        <h1 className="loginFormHeader">
          <b>Login</b>
        </h1>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.login();
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  rendertoDoList() {
    if (this.state.employeeList && this.state.employeeList.length > 0) {
      return (
        <div className="renderTodoList">
          <div className="employeeList">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col" className="centerAll">
                    #
                  </th>
                  <th scope="col" className="centerAll">
                    First Name
                  </th>
                  <th scope="col" className="centerAll">
                    Last Name
                  </th>
                  <th scope="col" className="centerAll">
                    Phone
                  </th>
                  <th scope="col" className="centerAll">
                    Email
                  </th>
                  <th scope="col" className="centerAll">
                    nationalId
                  </th>
                  <th scope="col" className="centerAll">
                    Department
                  </th>
                  <th scope="col" className="centerAll">
                    Salary
                  </th>
                  <th scope="col" className="centerAll">
                    Join Date
                  </th>
                  <th scope="col" className="centerAll">
                    Edit
                  </th>
                  <th scope="col" className="centerAll">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.employeeList.map((value, index) => {
                  return this.state.editIndex !== index ? (
                    <tr>
                      <th scope="row" id={index + 1}>
                        {index + 1}
                      </th>
                      <td className="centerAll" id={index + 2}>
                        {value.firstName}
                      </td>
                      <td className="centerAll" id={index + 3}>
                        {value.lastName}
                      </td>
                      <td className="centerAll" id={index + 4}>
                        {value.phone}
                      </td>
                      <td className="centerAll" id={index + 5}>
                        {value.email}
                      </td>
                      <td className="centerAll" id={index + 6}>
                        {value.nationalId}
                      </td>
                      <td className="centerAll" id={index + 7}>
                        {value.department}
                      </td>
                      <td className="centerAll" id={index + 8}>
                        ${value.salary}
                      </td>
                      <td className="centerAll" id={index + 9}>
                        {value.joinDate}
                      </td>
                      <td className="centerAll" id={index + 10}>
                        <button
                          onClick={() => {
                            this.editEmployee(index);
                          }}
                          className="btn btn-primary"
                        >
                          Edit
                        </button>
                      </td>
                      <td className="centerAll" id={index + 11}>
                        <button
                          onClick={() => {
                            swal({
                              title: "Delete Employee?",
                              text: "Are You sure You Want To Delete This Record?!",
                              buttons: true,
                              dangerMode: true,
                            }).then((willDelete) => {
                              if (willDelete) {
                                this.deleteEmployee(index);
                                swal(
                                  "Poof! Your imaginary file has been deleted!",
                                  {
                                    icon: "success",
                                  }
                                );
                              } else {
                                swal("Your imaginary file is safe!");
                              }
                            });
                          }}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <th scope="row" id={index + 1}>
                        {index + 1}
                      </th>
                      <td className="centerAll" id={index + 2 + "edit"}>
                        <input
                          type="text"
                          defaultValue={value.firstName}
                          onChange={this.updateFirstName}
                        />
                      </td>
                      <td className="centerAll" id={index + 3 + "edit"}>
                        <input
                          type="text"
                          defaultValue={value.lastName}
                          onChange={this.updateLastName}
                        />
                      </td>
                      <td className="centerAll" id={index + 4 + "edit"}>
                        <input
                          type="text"
                          defaultValue={value.phone}
                          onChange={this.updatePhone}
                        />
                      </td>
                      <td className="centerAll" id={index + 5 + "edit"}>
                        <input
                          type="text"
                          defaultValue={value.email}
                          onChange={this.updateEmail}
                        />
                      </td>
                      <td className="centerAll" id={index + 6 + "edit"}>
                        <input
                          type="text"
                          defaultValue={value.nationalId}
                          onChange={this.updateNationalId}
                        />
                      </td>
                      <td className="centerAll" id={index + 7 + "edit"}>
                        <input
                          type="text"
                          defaultValue={value.department}
                          onChange={this.updateDepartment}
                        />
                      </td>
                      <td className="centerAll" id={index + 8 + "edit"}>
                        <input
                          type="text"
                          defaultValue={value.salary}
                          onChange={this.updateSalary}
                        />
                      </td>
                      <td className="centerAll" id={index + 9 + "edit"}>
                        <input type="text" defaultValue={value.joinDate} />
                      </td>
                      <td className="centerAll" id={index + 10 + "edit"}>
                        <button
                          onClick={() => {
                            this.canceleditEmployee();
                          }}
                          className="btn btn-primary"
                        >
                          Cancel
                        </button>
                      </td>
                      <td className="centerAll" id={index + 11}>
                        <button
                          onClick={() => {
                            this.updateEmployee(index);
                          }}
                          className="btn btn-info"
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Card />
        </div>
      );
    }
  }

  renderAddEmployee() {
    return (
      <div className="loginForm">
        <h1 className="todoHeader">Add Employee</h1>
        <form className="addEmployeeForm">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              aria-describedby="emailHelp"
              placeholder="Enter First Name"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              aria-describedby="emailHelp"
              placeholder="Enter Last Name"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              aria-describedby="emailHelp"
              placeholder="Enter Phone#"
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="email2"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>National ID</label>
            <input
              type="text"
              className="form-control"
              id="nationalId"
              aria-describedby="emailHelp"
              placeholder="Enter National ID"
            />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              className="form-control"
              id="department"
              aria-describedby="emailHelp"
              placeholder="Enter department"
            />
          </div>
          <div className="form-group">
            <label>Salary</label>
            <input
              type="text"
              className="form-control"
              id="salary"
              aria-describedby="emailHelp"
              placeholder="Enter Salary"
            />
          </div>
          <button
            class="btn_submit"
            onClick={() => {
              this.addEmployeeData();
            }}
          >
            Submit
          </button>
        </form>
        <button
          className="btn btn-danger addEmployeeForm"
          onClick={() => {
            this.cancelAddEmployee();
          }}
        >
          Cancel
        </button>
      </div>
    );
  }

  renderLogOut() {
    return (
      <div className="logOut">
        <button
          className="btn btn-warning"
          onClick={() => {
            this.logOut();
          }}
        >
          Log Out
        </button>
        <h1 className="todoHeader">Employees</h1>
        <button
          class="btn_add"
          onClick={() => {
            this.addEmployee();
          }}
        >
          <i class="material-icons">Add Employee</i>
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {/* {this.renderHeader()} */}
        {!this.state.user && this.renderLogin()}
        {this.state.user && !this.state.addEmployee && this.rendertoDoList()}
        {this.state.addEmployee && this.renderAddEmployee()}
        {this.state.user && !this.state.addEmployee && this.renderLogOut()}
      </div>
    );
  }
}

export default App;
