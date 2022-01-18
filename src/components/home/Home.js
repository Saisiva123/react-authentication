import React, { useEffect, useState } from "react";
import "./Home.css"
// import Table from "react-bootstrap/Table";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import AuthService from "../../services/auth.service";
function Home() {
  const url = process.env.API_URL
    ? process.env.API_URL
    : "https://react-authentication-b8cb1-default-rtdb.firebaseio.com/employees.json";
  const tableColumns = ["Name", "Age", "Email", "Number", "Address"];
  const [employees, setEmployees] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    //   console.log("auth service related",AuthService.currState)
    setLoading(true);
    await fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const empData = [];

        for (const key in data) {
          let emp = {
            id: key,
            ...data[key],
          };
          empData.push(emp);
        }
        setEmployees(empData);
        console.log(employees);
        setLoading(false);
     AuthService.setState()
      });

    // await fetch(url,{
    //     method:"post",
    //     body:JSON.stringify({
    //         name:'siva',
    //         age:22,
    //         number:7981976881,
    //         email:'mannem.sai99@gmail.com',
    //         address:'address'
    //     })
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then(setLoading(false));
  }, []);

  return (
    <div className = "empDetails">
      <h3>Employee Details</h3>
      {loading && <p>loading</p>}
      {!loading && (
       <div className = "empList">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
            <TableRow>
              {tableColumns.map((item,index) => (
                <TableCell
                  key={index}
                
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
            </TableHead>
            <TableBody>
              {employees?.length &&
                employees.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      {tableColumns.map((column, colIndex) => {
                        return (
                          <TableCell key={colIndex}>
                            {item[column.toLowerCase()]}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
           {employees?.length && <TablePagination
           rowsPerPageOptions={[5, 10, 50]}
           component="div"
           count={employees?.length}
           rowsPerPage={5}
           page={0}
           onPageChange={()=>{}}
           onRowsPerPageChange={()=>{}}
         />}
         </div>
      )}
    </div>
  );
}

export default Home;
