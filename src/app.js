import express from "express" // get express
import path from "path"
import { fileURLToPath } from "url";
import { engine } from 'express-handlebars';


//console.log("132")



const port = 5500;
const app = express();


const __filename = fileURLToPath(import.meta.url) // get path to app.js
const __dirname = path.dirname(__filename) // path to app.js whithout app.js
//app.use(express.static(path.join(__dirname, "")))
console.log(__dirname)




app.engine('.hbs', engine({
	extname: '.hbs',
	defaultLayout: 'main',
	layoutsDir: path.resolve(__dirname, './views/layouts'),
	partialsDir: path.resolve(__dirname, './views/partials')
  }));
  app.set('view engine', 'hbs');
  app.set('views', path.resolve(__dirname, './views'));
  app.use(express.static(path.join(__dirname, "")))



  let tab1 = [
    {
      name: 'ШТУКАТУРКА НАРУЖНЫХ СТЕН',
      cost: '9'
    },
    {
      name: 'ШТУКАТУРКА КИРПИЧНЫХ СТЕН',
      cost: '9'
    },
    {
      name: 'ШТУКАТУРКА СТЕН',
      cost: '9'
    },
    {
      name: 'ШТУКАТУРКА СТЕН',
      cost: '9'
    },
  ];
  let tab2 = [
    {
      name: 'ШТУКАТУРКА ПОТОЛКА',
      cost: '9'
    },
    {
      name: 'ШТУКАТУРКА ПОТОЛКА',
      cost: '9'
    },
    {
      name: 'ШТУКАТУРКА ПОТОЛКА',
      cost: '9'
    },
    {
      name: 'ШТУКАТУРКА ПОТОЛКА',
      cost: '9'
    },
  ];
  let tab3 = [
    {
      name: 'ШТУКАТУРКА ОТКОСОВ',
      cost: '9'
    },
    {
      name: 'ШТУКАТУРКА ОТКОСОВ',
      cost: '9'
    },
    {
      name: 'ШТУКАТУРКА ОТКОСОВ',
      cost: '9'
    },
    {
      name: 'ШТУКАТУРКА ОТКОСОВ',
      cost: '9'
    },
  ];
  
  
  let navbar = [
    {
      link: 'index',
      text: 'Главная'
    },
    {
      link: 'about',
      text: 'О нас'
    },
    {
      link: '/xz',
      text: 'Штукатурные работы'
    },
    {
      link: 'team',
      text: 'Материалы'
    },
    {
      link: 'about',
      text: 'Стоимость'
    },
    {
      link: 'contact',
      text: 'Контакты'
    },
  ];
  
  
  
  app.get("/", (req, res) => {
  
    //res.render("pages/index", { layout: "main"});
    res.render("pages/empty", { layout: "origin", tab1, tab2, tab3, navbar});
  });
  app.get("/c", (req, res) => {
  
    //res.render("pages/index", { layout: "main"});
    res.render("pages/empty", { layout: "contact" });
  });
  
  
  
  




  app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
  });






