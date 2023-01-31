// A PROMISE so sai do estado de pending quando o resolve da sucesso

const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
    // reject('error!');
  }, 2000);
});

// * then e catch
apiCall
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })

// * async e await
async function run() {
  try {
    const res = await apiCall;
    console.log(res);
  }
  catch (erro) {
    console.log(erro);
  }
};

run();