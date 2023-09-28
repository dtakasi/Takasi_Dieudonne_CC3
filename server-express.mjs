import express from "express";
import morgan from "morgan";
import createHttpError from "http-errors";

const host = "localhost";
const port = 8000;

const app = express();


if (app.get("env") === "development") app.use(morgan("dev"));



// app.get(["/", "/index.html"], async function (request, response, next) {
//   response.sendFile("index.html", { root: "./" });
// });

app.use(express.static("static"));

// CODE donné par le prof 

//  app.get("/random/:nb", async function (request, response, next) {
//   const length = request.params.nb;
//   const contents = Array.from({ length })
//     .map((_) => `<li>${Math.floor(100 * Math.random())}</li>`)
//     .join("\n");
//    return response.send(`<html><ul>${contents}</ul></html>`);
//  });

// CHANGEMENT DU HANDLER DE LA ROUTE '/random/:nb'

app.get("/random/:nb", async function(request,response,next){
  if (Number.isNaN(length)) {
    // Si le paramètre n'est pas un nombre, produisez une erreur 400
    return next(createError(400, "Le paramètre 'nb' doit être un nombre."));
  }
  const numbers  = Array.from({ length }).map(() => Math.floor(Math.random() * 100));
  const welcome = " Reussi la fonction ";
  response.render("random",{numbers,welcome})
})





app.set("view engine", "ejs");


const server = app.listen(port, host);

server.on("listening", () =>
  console.info(
    `HTTP listening on http://${server.address().address}:${server.address().port} with mode '${process.env.NODE_ENV}'`,
  ),
);

console.info(`File ${import.meta.url} executed.`);