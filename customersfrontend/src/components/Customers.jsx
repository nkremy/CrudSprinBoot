import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
// import { makeStyles } from '@material-ui/code/makeStyles';
//  import { makeStyles } from '@mui/material/styles';
import Button from '@mui/material/Button';


// const userStyle = makeStyles((theme)=>({
//         root:{
//             '& > *':{
//                 margin: theme.spacing(1),
//             },
//         },
// }));


export default function Customers() {
    const paperStyle = {padding:'50px 20px',width:600, margin:"20px  auto"}

    const [nom , setNom] = React.useState("");
    const [prenom , setPrenom] = React.useState("");

    const [students,setStudents] = React.useState([]);

    const handleClick = (e)=>{
        e.preventDefault();
        const customers = {nom , prenom};
        console.log(customers)
        setNom("")
        setPrenom("")
        fetch("http://localhost:8080/clients",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(customers)
        }).then(()=>{
            console.log("new  customers add Success ");
        })
    }

    React.useEffect(()=>{
        fetch("http://localhost:8080/clients/listeCustomers",{
            method:"GET"
        }).then(res=>res.json()).then(result=>{
            setStudents(result);
        }
    )},[])

    // const classes  = userStyle()
  return (
    <Container>
        <Paper elevation={3} style={paperStyle} >
            <h1 style={{color:'blue'}}> <u>Add Customers</u> </h1>
         {/* <form action="" className={classes.root}  noValidate autoComplete='off'> */}
         <form action="" className={'rootform'}  noValidate autoComplete='off'>
            <TextField id="outlined-basic" label="nom" variant="outlined" fullWidth
                value={nom} 
                onChange={(e)=>{setNom(e.target.value)}}
            />
            <TextField id="outlined-basic" label="prenom" variant="outlined"  fullWidth
                value={prenom} 
                onChange={(e)=>{setPrenom(e.target.value)}}
            />

            <Button variant="contained"  color='secondary' style={{marginTop:20}} onClick={handleClick}>Send</Button>
        </form> 
        </Paper>    
        <Paper elevation={3} style={paperStyle}>
            <h1>List Customer</h1>    
            {students.map(student=>(
                <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:'left'}} key={student.id} >
                    id:{student.id} <br />
                    Name:{student.nom} <br />
                    first Name :{student.prenom}
                </Paper>
            ))}
        </Paper>   
    </Container>
   
  );
}


