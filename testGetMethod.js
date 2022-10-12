
function createRefundLi(item, list) {
    const li = document.createElement('li');
    const textNode = document.createTextNode(JSON.stringify(item));
    li.appendChild(textNode);
    list.appendChild(li);
};

    async function getRefund () {
        const response = await fetch('https://oijv97k0l6.execute-api.eu-central-1.amazonaws.com/test/refunds', {
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json'
               }
             });
             const json = await response.json();
             console.log(json);
             return json;
            }
            const getRefundButton = document.getElementById('getRefund');
            getRefundButton.onclick = async function createList(){
                const result = await getRefund();
                const list = document.getElementById('list');
                list.replaceChildren();
                result.Items.forEach((item) => createRefundLi(item, list));
            }
            
