<h1>script-firebase</h1>

<h3>Função do script:</h3>
<ul>
    Ler e inserir um arquivo JSON dentro do banco NoSQL - Firestore
</ul>

<h3>Changelog:</h3>
<ul>
    <li>1- Criado um arquivo firebase-cfg.ts para armazenar a configuração do banco Firestore.</li>
    <li>2- Para importar um .JSON no typescript foi adicionado no tsconfig.json : "resolveJsonModule": true  </li>
    <li>3- Adicionado o "node --experimental-json-modules" fonte: https://nkaushik.com/javascript/json-module-import-error-es6/ </li> 
</ul>

<h3>Pendente:</h3>
<ul>
    <li>1- Configurar permissão de acesso ao banco Firestore.</li>
    <li>2- Adicionar lógica para não inserir coleções repetidas no banco firestore</li>
 </ul>
