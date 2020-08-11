let express=require('express');
let fd=require('formidable');
let app=express();

app.listen(4000);

app.post('/upload',(req,res)=>{
    let form=new fd.IncomingForm();
    form.uploadDir='./';
    form.parse(req,(err,fields,files)=>{
        console.log(err);
        console.log(fields);
        console.log(files);
	res.send('success');
    })
})