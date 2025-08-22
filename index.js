require('dotenv').config()
const axios = require('axios');
const FormData = require('form-data')
const fs = require('fs');;

async function sendTempleteMessage() {
    const response = await axios({
        url: 'https://graph.facebook.com/v22.0/721740131026278/messages',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            messaging_product: 'whatsapp',
            to: '9779761647705',
            type: 'template',
            template: {
                name: 'discount',
                language: {
                    code: 'en_US'
                },
                components: [
                    {
                        type: 'body',
                        parameters: [
                            {
                                type: 'text',
                                text: '50'
                            }
                        ]
                    },
                    {
                        type: 'header',
                        parameters: [
                            {
                                type: 'text',
                                text: 'John Doe'
                            }
                        ]
                    }
                ]
            }
        })
    })
    console.log(response.data);
}

async function sendTextMessage() {
    const response = await axios({
        url: 'https://graph.facebook.com/v22.0/721740131026278/messages',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            messaging_product: 'whatsapp',
            to: '9779761647705',
            type: 'text',
            text: {
                body: 'This is text message to test '
            }
        })
    })
    console.log(response.data);
}

async function sendMediaMessage() {
    const response = await axios({
        url: 'https://graph.facebook.com/v22.0/721740131026278/messages',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            messaging_product: 'whatsapp',
            to: '9779761647705',
            type: 'image',
            image: {
                id: '1249193383654867',
                caption: 'This is a news media'
            }
        })
    })
    console.log(response.data);
}

//upload media

async function uploadMedia() {
    const data = new FormData();
    data.append('messaging_product', 'whatsapp')
    data.append('file', fs.createReadStream(process.cwd() + '/logo.jpeg'), { contentType: 'image/jpeg' })
    data.append('type', 'image/jpeg')
    const response = await axios({
        url: 'https://graph.facebook.com/v22.0/721740131026278/media',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`
        },
        data: data
    })
    console.log(response.data);
}
// sendMediaMessage()
// uploadMedia();

sendTempleteMessage();