import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './StudentResultBoard.css';

class StudentResultBoard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            Data: []
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:3030/results')
            .then(res => res.json())
            .then(res => this.setState({ Data: res }))
    }


    render() {
        return (
            <React.Fragment>
                 <div>
                <Link to='/register'>Register</Link><br />
                <h2>Student Results</h2>
                <table>
                <thead>
                 <b>StudentResultBoard</b>
             </thead>
             <thead>
                 <tr>
                     <th style={{width: '50%'}}><i>Student Name</i></th>
                     <th><i>Roll Number</i></th>
                     <th><i>Total Marks</i></th>
                     <th><i>Status</i></th>
                 </tr>
             </thead>
             <tbody>
             {
                    this.state.Data.map(item => {
                        return (
                            <div>
                            <tr key={item.rollNumber} >
                            <td style={{width: '80%'}}>{item.studentName}</td>
                            <td style={{width: '80%'}}>{item.rollNumber}</td>
                            <td style={{width: '80%'}}>{item.marks}</td>
                            
                        </tr>

                            </div>
                        )
                    })
                }
                
             </tbody>
                </table>
            
            </div>

            
            </React.Fragment>
        );
    }
}

export default StudentResultBoard




//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         studentData: []
//     //     };
//     //   }


//     state = {
//         studentData: [],
//         error: null
//     }


//     componentWillMount() {
       
//         // this.setState({ message: "This is an updated message" });
//         var request = require('request');
// var options = {
//   'method': 'GET',
//   'url': 'https://jsonplaceholder.typicode.com/todos/1',
//   'headers': {
//   }
// };
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body);
//   this.setState({ studentData: JSON.stringify(response.data )});
  
// });

        
//         var axios = require('axios');

//         var config = {
//           method: 'get',
//           url: 'http://127.0.0.1:3030/results',
//           headers: { 
//             "Content-Type": "text/html; charset=utf-8",
//             "Connection": "keep-alive",
//             "Access-Control-Allow-Origin" : "*",
//             "Keep-Alive": "timeout=5",

//           }
//         };
        
//         axios(config)
//         .then(function (response) {
//             // this.setState({ studentData: JSON.stringify(response.data)});
//           console.log(JSON.stringify(response.data));
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
        



//         // axios.get('http://127.0.0.1:3030/results')
//         //     .then(response => {
//         //         this.setState({ studentData: response.data })
//         //     })
//         //     .catch(error => {
//         //         this.setState({ error: true })
//         //     })
//     }

//     capitalize = (str, lower = false) =>
//         (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());

//     render() {
//         let maxMarks = 0;
//         this.state.studentData.sort((a, b) => a.name.localeCompare(b.name));
//         let max = Math.max.apply(Math, this.state.studentData.map(item => {
//             return +item.marks.English + +item.marks.Maths + +item.marks.Science;
//         }))
//         let resultTable = <table className="table">
//             <thead>
//                 <b>StudentResultBoard</b>
//             </thead>
//             <thead>
//                 <tr>
//                     <th><i>Student Name</i></th>
//                     <th><i>Roll Number</i></th>
//                     <th><i>Total Marks</i></th>
//                     <th><i>Status</i></th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {this.state.studentData.map((item) => {
//                     let totalMarks = +item.marks.English + +item.marks.Maths + +item.marks.Science;
//                     let status = (totalMarks === max) ? "Topper" : ((+item.marks.English < 20 || +item.marks.Science < 20 || +item.marks.Maths < 20) && "Fail") || "Pass";
//                     let recordClass = (totalMarks === max) ? "Topper" : (status === "Fail" ? "Fail" : "Pass");
//                     return (
//                         <tr key={item.rollNumber} className={recordClass}>
//                             <td>{this.capitalize(item.name)}</td>
//                             <td>{item.rollNumber}</td>
//                             <td>{+item.marks.English + +item.marks.Maths + +item.marks.Science}</td>
//                             <td>{status}</td>
//                         </tr>
//                     )
//                 })}
//             </tbody>
//         </table>
        // return (
        //     <div>
        //         <Link to='/register'>Register</Link><br />
        //         <h2>Student Results</h2>
        //         {resultTable}
        //         {this.state.studentData}
        //     </div>
        // )
//     }
// }

// export default StudentResultBoard