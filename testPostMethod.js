
async function postRefund(parName, parDebtor, parAmount, parDueDate) {
  try{
  const response = await fetch('https://oijv97k0l6.execute-api.eu-central-1.amazonaws.com/test/refunds', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: parName,
      debtor: parDebtor,
      amount: parAmount,
      dueDate: parDueDate
    })
  })
  console.log(response);
  console.log(response.status);
  const status = document.getElementById('status');
  if (response.status == 200){
      return status.innerHTML = "success";
  }
  else if (response.status >= 400){
      return status.innerHTML = response.statusText;
  }
}
  catch (err) {
    console.log('Error', err);
  }
}

const postButton = document.getElementById('post');

postButton.onclick = async function createRecord() {
  const name = document.getElementById('name').value;
  const debtor = document.getElementById('debtor').value;
  const amount = document.getElementById('amount').value;
  const dueDate = document.getElementById('dueDate').value;
  console.log(name);
  console.log(debtor);
  console.log(amount);
  console.log(dueDate);
  const result = await postRefund(name, debtor, amount, dueDate);
  console.log(result);
};