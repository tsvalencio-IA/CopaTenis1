// Configuration file for the Copa do Mundo das Vendas system.
//
// 1. Fill in your Firebase project information below.  You can find these
//    values in the Firebase console under Project Settings → General → Your apps.
// 2. Fill in your Cloudinary account information.  You'll need a
//    `cloudName` and an unsigned `uploadPreset` to allow the browser to upload
//    images directly.  Create an unsigned preset in the Cloudinary dashboard.
// 3. Define which email address belongs to the gerente (manager) and which
//    belong to the vendedores (sellers).  These addresses must match the
//    accounts created in Firebase Authentication.  The system uses these
//    addresses to determine permissions at runtime.

// Configurações do Firebase
// Substitua os valores abaixo pelos dados reais do seu projeto no Firebase Console.
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Configurações do Cloudinary
// Preencha com o nome da nuvem e o upload preset (unsigned) gerado no painel.
export const cloudinaryConfig = {
  cloudName: "",
  uploadPreset: ""
};

// Assign the email address of the gerente (manager) account.  Only the
// manager will be allowed to write to the database, create or edit vendors,
// upload photos and close rounds.  The email must match a real user
// registered in Firebase Authentication.
// Email do gerente (Saulo)
export const managerEmail = "saulo@t1.com";

// List the email addresses of all vendedores (sellers).  These accounts
// should also exist in Firebase Authentication.  Sellers may log in to
// view the scoreboard, ranking and album but cannot write data.
// Emails dos vendedores.  Devem corresponder aos usuários criados no Firebase Authentication.
export const sellerEmails = [
  "isack@tenisone.com.br",
  "viviane@tenisone.com.br",
  "matheus@tenisone.com.br",
  "brian@tenisone.com.br",
  "vendedor5@tenisone.com.br"
];