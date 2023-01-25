import { fileURLToPath } from "node:url";
import fs from "fs";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     console.log(`Erro: ${error}`);
//   } else {
//     console.log("Pasta criada com sucesso!");
//   }
// });

//Criar um arquivo ou sobrescrever um arquivo existente
// fs.writeFile(
//   path.join(__dirname, "test", "test.txt"),
//   "Hello, Node!",
//   (error) => {
//     if (error) {
//       console.log(`Erro: ${error}`);
//     } else {
//       console.log("Arquivo criado com sucesso");
//     }
//   }
// );

//Adicionar a um arquivo
// fs.appendFile(
//   path.join(__dirname, "/test", "test.txt"),
//   "Hello world!",
//   (error) => {
//     if (error) {
//       console.log(`Erro: ${error}`);
//     } else {
//       console.log("Arquivo criado com sucesso");
//     }
//   }
// );

//Ler arquivo
fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      console.log(`Erro: ${error}`);
    } else {
      console.log(data);
    }
  }
);
