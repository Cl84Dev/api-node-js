import path from "path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Apenas o nome do arquivo atual:
console.log(path.basename(__filename));

//Nome do diretório atual:
console.log(path.dirname(__filename));

//Extensão do arquivo:
console.log(path.extname(__filename));

//Criar objeto Path:
console.log(path.parse(__filename));

//Juntar caminhos de arquivos:
console.log(path.join(__dirname, "test", "test.html"));
