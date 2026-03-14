const authController = require('./modules/auth/auth.controller.js')



const bootstrap =(app , express)=>{
    app.use(express.json());
    app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});
app.use('/auth', authController)

}
module.exports = bootstrap