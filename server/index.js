const express = require("express");
require('./db/conn')
// const router = require("./routers/userRouter.js")
// const adminRouter = require("./routers/adminRouter.js")
const cookiParser = require("cookie-parser");
const cors = require("cors")
const app = express();
const port = 3000;

const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true, // (cookies, authorization headers, TLS client certificates)
  };

// connectDB();

app.use(express.json());
app.use(cookiParser());
app.use(cors(corsOptions));

// app.use(router);
// app.use(adminRouter);
app.use('/api/user',require('./routers/userRouter.js'));
app.use('/api/admin',require('./routers/adminRouter.js'));
app.use('/api/complaint',require('./routers/complaintRouter.js'));
app.use('/api/suggestion',require('./routers/suggestionsRouter.js'));
app.use('/api/attendance',require('./routers/attendanceRouter.js'));
app.use('/api/invoice',require('./routers/invoiceRouter.js'));
app.use('/api/mess',require('./routers/messRouter.js'));

// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });

app.listen(port,()=>{
    console.log(`server start at port no : ${port}`);
})