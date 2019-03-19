const controller = {};
controller.list = (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('select * from customer', (err,customers)=>{
            if(err){
                res.json(err);
            }
            res.render('customer',{
                data:customers
            });
        });
    });
};

controller.save = (req,res)=>{
    const data = req.body;
    req.getConnection((err,conn) => {
        conn.query('insert into customer set ?',[data], (err , customer)=>{
            res.redirect('/');
        });
    });
};

controller.delete = (req,res)=>{
    const {id} = req.params;
    req.getConnection((err,conn)=>{
        conn.query('delete from customer where id=?',[id],(err,rows)=>{
            res.redirect('/');
        });
    });
};

controller.update = (req,res)=>{
    const {id} = req.params;
    const newCustoomer = req.body;
    req.getConnection((err,conn)=>{
        conn.query('update customer set ? where id=?',[newCustoomer,id],(err,customer)=>{
            res.redirect('/');
        });
    });

};

controller.edit = (req,res)=>{
    const {id} = req.params;
    req.getConnection((err,conn)=>{
        conn.query('select * from customer where id=?', [id],(err,customer)=>{
            res.render('customer_edit',{
                data:customer[0]
            });
        });
    }); 
    
};

module.exports = controller;