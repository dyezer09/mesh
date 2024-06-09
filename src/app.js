import express from "express"; // get express
import path from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";
import { Telegraf } from "telegraf";
const bot = new Telegraf("1605900850:AAEY-QNR_SbGFVX4s0l780GlnXKt85DGeEg")
import { message } from "telegraf/filters";
import bodyParser from "body-parser";

let chatid;
//  link to bot t.me/dfi2024bot.
bot.start((ctx) => {
  chatid = ctx.message.chat.id;
});

//console.log("132")

const port = 5500;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

const __filename = fileURLToPath(import.meta.url); // get path to app.js
const __dirname = path.dirname(__filename); // path to app.js whithout app.js
//app.use(express.static(path.join(__dirname, "")))
console.log(__dirname);

app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.resolve(__dirname, "./views/layouts"),
    partialsDir: path.resolve(__dirname, "./views/partials"),
  })
);
app.set("view engine", "hbs");
app.set("views", path.resolve(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "")));

let tab1 = [
  {
    name: "ШТУКАТУРКА НАРУЖНЫХ СТЕН",
    cost: "цена договорная",
  },
  {
    name: "ШТУКАТУРКА ВНУТРЕННИХ СТЕН",
    cost: "цена договорная",
  },
  {
    name: "ШТУКАТУРКА КИРПИЧНЫХ СТЕН",
    cost: "цена договорная",
  },
  {
    name: "ШТУКАТУРКА СТЕН ПО МАЯКАМ",
    cost: "цена договорная",
  },
  {
    name: "ШТУКАТУРКА СТЕН ИЗ ГАЗОБЕТОНА",
    cost: "цена договорная",
  },
  {
    name: "ЦЕМЕНТНАЯ ШТУКАТУРКА СТЕН",
    cost: "цена договорная",
  },
  {
    name: "ГИПСОВАЯ ШТУКАТУРКА СТЕН",
    cost: "цена договорная",
  },
  {
    name: "",
    cost: "9",
  },
  {
    name: "",
    cost: "9",
  },
  
];
let tab2 = [
  {
    name: "ШТУКАТУРКА ПОТОЛКА",
    cost: "цена договорная",
  },
  {
    name: "ШТУКАТУРКА ПОТОЛКА",
    cost: "цена договорная",
  },
  {
    name: "ШТУКАТУРКА ПОТОЛКА",
    cost: "цена договорная",
  },
  {
    name: "ШТУКАТУРКА ПОТОЛКА",
    cost: "цена договорная",
  },
];
let tab3 = [
  {
    name: "ШТУКАТУРКА ОТКОСОВ",
    cost: "цена договорная",
  },
  {
    name: "ШТУКАТУРКА ФАСАДОВ",
    cost: "цена договорная",
  },
  {
    name: "ШТУКАТУРКА ЛЕСТНИЦ",
    cost: "цена договорная",
  },
  {
    name: "ШТУКАТУРКА КВАРТИР",
    cost: "цена договорная",
  },
];

let navbar = [
  {
    link: "#topbar",
    text: "Главная",
  },
  // {
  //   link: "about",
  //   text: "О нас",
  // },
  {
    link: "#about",
    text: "Штукатурные работы",
  },
  // {
  //   link: "team",
  //   text: "Материалы",
  // },
  {
    link: "#cost",
    text: "Стоимость",
  },
  {
    link: "#footer",
    text: "Контакты",
  },
];

app.get("/", (req, res) => {
  //res.render("pages/index", { layout: "main"});
  res.render("pages/empty", { layout: "origin", tab1, tab2, tab3, navbar });
});

app.post("/", (req, res) => {
  let mess1 = req.body.name;
  let mess2 = req.body.number;
  let mess3 = req.body.message;
  console.log("s" + mess1 + "s");
  console.log(mess2);
  console.log(mess3);
  bot.telegram.sendMessage(chatid, mess1);
  bot.telegram.sendMessage(chatid, mess2);
  bot.telegram.sendMessage(chatid, mess3);

  res.render("pages/empty", { layout: "origin" });
});

bot.launch();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
